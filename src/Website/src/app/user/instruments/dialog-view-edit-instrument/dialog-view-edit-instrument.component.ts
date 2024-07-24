import {
    Component,
    EventEmitter,
    Inject,
    Output,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnInit,
    OnDestroy,
} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Observable, of, Subscription, Subject} from "rxjs";
import {Aim} from "src/app/_models/aim";
import {Access, Instrument, InstrumentEditing} from "src/app/_models/instrument";
import {AimsService, UserService} from "src/app/_services";
import {SourceService} from "src/app/_services/source.service";
import {StorageService} from "src/app/_services/storage.service";
import {DialogConfirmCancelComponent} from "src/app/components/dialog-confirm-cancel/dialog-confirm-cancel";
import {MatSnackBar} from "@angular/material/snack-bar";
import {switchMap, takeUntil} from "rxjs/operators";

@Component({
    selector: "app-dialog-view-instrument",
    templateUrl: "./dialog-view-edit-instrument.component.html",
    styleUrls: ["./dialog-view-edit-instrument.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogViewEditInstrumentComponent implements OnInit, OnDestroy {
    @Output() updatedField = new EventEmitter<string>();

    instrumentEditing: InstrumentEditing;
    instrumentView: Instrument;

    currentUser

    action: string;

    private subscriptions: Subscription[] = [];
    private destroy$ = new Subject<void>();

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private aimsService: AimsService,
        private cd: ChangeDetectorRef,
        private matDialog: MatDialog,
        private snackBar: MatSnackBar,
        private sourceService: SourceService,
        private storageService: StorageService,
        private userService: UserService
    ) {
        this.instrumentEditing = data;
        this.action = data.action;
    }

    ngOnInit() {
        this.currentUser = this.storageService.loadCurrentUser()
        this.refreshInstrumentView();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    refreshInstrumentView() {
        this.fetchAimsForInstrument(this.instrumentEditing).subscribe({
            next: (aimsView) => {
                this.instrumentView = {...this.instrumentEditing, aims: aimsView};
                this.cd.detectChanges();
            },
            error: (err) => console.error(err)
        });
    }

    fetchAimsForInstrument(instrumentEditing: InstrumentEditing): Observable<Aim[]> {
        return this.aimsService.getAll().pipe(
            switchMap((aimList) => {
                const aimsView = this.aimsService.findMatchingCodes(aimList, instrumentEditing.aims.enabled);
                return of(aimsView);
            })
        );
    }

    updateInstrumentField(key: string, value: any, isTableToUpdate: boolean) {
        const updatedInstrument = {...this.instrumentEditing};

        updatedInstrument[key] = value;

        this.sourceService.update(updatedInstrument).pipe(
            takeUntil(this.destroy$)
        ).subscribe({
            next: () => {
                if (isTableToUpdate) this.updatedField.emit(key);

                this.instrumentView.access.map(accessToCheck => {
                    this.checkAccessCurrentUser(accessToCheck.userId, 'edit')
                })
                if (key === "aims") {
                    this.aimsService.getAll().pipe(
                        takeUntil(this.destroy$)
                    ).subscribe((aimList) => {

                    });
                }
                this.instrumentEditing = updatedInstrument;
                this.refreshInstrumentView();
                this.cd.detectChanges();
            },
            error: (err) => {
                console.error(err);
                this.snackBar.open("⚒️ Errore", 'X', {
                    duration: 3000
                });
            }
        });
    }

    fetchAccessList(): void {
        this.sourceService.getInstrumentAccessList(this.instrumentEditing.id).pipe(
            takeUntil(this.destroy$)
        ).subscribe({
            next: (res) => {
                const accessList = res["users"];
                this.refreshAccessData(accessList);
                this.cd.markForCheck();
            },
            error: (err) => console.error(err),
        });
    }

    confirmAndDeleteAccess(access): void {
        const dialogDeleteRef = this.matDialog.open(DialogConfirmCancelComponent, {
            width: "500px",
            data: {
                title: "Conferma eliminazione",
                message: "Sei sicuro di voler confermare l'eliminazione?",
                confirm: "si",
                cancel: "Annulla",
            },
        });

        dialogDeleteRef.afterClosed().pipe(
            switchMap((result) => {
                if (result) {
                    return this.sourceService.deleteInstrumentAccess(this.instrumentEditing.id, access.userId);
                }
                return of(null);
            }),
            takeUntil(this.destroy$)
        ).subscribe({
            next: () => {
                this.checkAccessCurrentUser(access.userId, 'delete');
                this.instrumentEditing.access = this.instrumentEditing.access.filter(
                    (a) => a["userId"] !== access.userId
                );
                this.refreshAccessData(this.instrumentEditing.access);
                this.cd.detectChanges();
            },
            error: (err) => console.error("Error deleting instrument access:", err),
        });

        this.cd.markForCheck();
    }

    addAccessAndUpdateList(access: any): void {
        this.sourceService.addInstrumentAccess(this.instrumentEditing.id, access.access.id).pipe(
            switchMap(() => this.sourceService.getInstrumentAccessList(this.instrumentEditing.id)),
            takeUntil(this.destroy$)
        ).subscribe({
            next: (res) => {
                this.instrumentEditing.access = res["users"];
                this.refreshAccessData(this.instrumentEditing.access);
                this.checkAccessCurrentUser(access.access.id, 'edit')
                this.cd.detectChanges();
            },
            error: (err) => console.error(err),
        });

        this.cd.markForCheck();
    }

    refreshAccessData(data: any): void {
        this.instrumentEditing.access = data || [];
        this.instrumentView.access = data || []
        this.action = "edit";
        this.cd.detectChanges();
    }

    checkAccessCurrentUser(accessId: string, actionOnUser: string) {
        if (accessId === this.currentUser.id) {
            /*this.userService.updateCurrentUser(access, actionOnUser)*/
            this.storageService.clear('currentUser')
            this.userService
                .me()
                .subscribe((res) => {
                    this.userService.updateUserOwnership(res)
                });
        }
    }
}
