import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StorageService} from "../../_services/storage.service";
import {UserService} from "../../_services";
import {User} from "../../_models";
import {LoadingService} from "../../_services/loading.service";
import {SnackBarService} from "../../_services/snack-bar.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateEditUserDialogComponent} from "./create-edit-user-dialog/create-edit-user-dialog.component";
import {DialogConfirmCancelComponent} from "../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {finalize} from "rxjs";

@Component({
    selector: 'app-users-tab',
    templateUrl: './user-users.component.html',
    styleUrl: './user-users.component.css',
    standalone: false
})
export class UserUsersComponent implements OnInit, OnChanges {
    itemsPerPage: string;
    currentPage: number = 1
    searchParameters: string = ""
    pageCount: number;
    totalItems: number;
    hasNext: boolean;
    hasPrev: boolean;

    userList: User[]
    usersTableColumns = [
        {field: "name", hideOnMobile: false},
        {
            field: "surname",
            hideOnMobile: false,
        },
        {field: "email", hideOnMobile: true},
    ];

    constructor(private cd: ChangeDetectorRef,
                private dialog: MatDialog,
                private loadingService: LoadingService,
                private snackBarService: SnackBarService,
                private storageService: StorageService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.getUsersList()
    }

    ngOnChanges(changes: SimpleChanges) {
    }

    getUsersList() {
        this.loadingService.show()

        this.userService.getAllUsers("", "", this.searchParameters, this.currentPage, this.itemsPerPage).pipe(
            finalize(() => {
                this.loadingService.hide()
                this.cd.detectChanges();
            })
        )
            .subscribe({
                next: (res) => {
                    this.assignUserData(res);

                }, error: (err) => {
                    console.error(err)
                    this.snackBarService.openSnackBar("Errore nel caricamento della lista degli utenti")
                }
            })
    }


    filterUpdate(filter) {
        this.storageService.clearCache("usersList");
        this.itemsPerPage = filter.itemsPerPage;

        if (this.currentPage != 1) this.currentPage = 1;

        if (
            filter.search.length >= 3 ||
            filter.search.length === 0
        ) {
            this.searchParameters = filter.search;
        }
        this.getUsersList();
    }

    assignUserData(data) {
        this.totalItems = data.totalCount;
        this.pageCount = data.pageCount;
        this.itemsPerPage = data.pageSize;
        this.userList = data.data || [];
        this.currentPage = data.page || this.currentPage;
        this.hasNext = data.hasNext
        this.hasPrev = data.hasPrev;
    }

    onCreateUser() {
        const dialogRef = this.dialog.open(CreateEditUserDialogComponent, {})
        dialogRef.afterClosed().subscribe({
            next: (newUser) => {
                if (newUser) {
                    this.storageService.clearCache('usersList')
                    this.getUsersList()
                }
            },
            error: (err) => {
                console.error(err)
            }
        })
    }

    onEditUser(user: User) {
        this.userService.getUser(user.id).subscribe(() => {
            const dialogRef = this.dialog.open(CreateEditUserDialogComponent, {
                data: user
            })

            dialogRef.afterClosed().subscribe({
                next: (editedUser) => {
                    if (editedUser) {
                        this.storageService.clearCache('usersList')
                        this.getUsersList()
                    }
                },
                error: () => {
                }
            })
        })

    }

    onDeleteUser(user: User): void {
        const dialogRef = this.dialog.open(DialogConfirmCancelComponent, {
            width: "500px",
            data: {
                title: "Conferma eliminazione",
                message: "Sei sicuro di voler confermare l'eliminazione?",
                confirm: "si",
                cancel: "Annulla",
            },
        })
        dialogRef.afterClosed().subscribe({
            next: (res) => {
                if (res) {
                    this.userService.delete(user.id).subscribe({
                        next: () => {
                            this.snackBarService.openSnackBar('User deleted successfully');
                            // update user list
                            this.storageService.clearCache("usersList");
                            this.getUsersList()
                        },
                        error: (err) => {
                            console.error('Error deleting user', err);
                            this.snackBarService.openSnackBar('Failed to delete user');
                        }
                    });
                }
            },
            error: () => {
            }
        })
    }

    onPageChange(page: number): void {
        this.storageService.clearCache("usersList");
        this.currentPage = page;
        this.getUsersList();
    }


}
