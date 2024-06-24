import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AimsService} from "../../../_services";
import {Aim} from "../../../_models";
import {SnackBarService} from "../../../_services/snack-bar.service";
import {NgFor, NgIf} from "@angular/common";

@Component({
    selector: 'app-aims-select',
    standalone: true,
    imports: [NgIf, NgFor],
    templateUrl: './aims-select.component.html',
    styleUrl: './aims-select.component.css'
})
export class AimsSelectComponent implements OnInit {
    @Output() aimCodeSelected = new EventEmitter<string>()

    isSelectiongAim: boolean = false
    aimsList: Aim[] = []

    constructor(private aimsService: AimsService, private snackBarService: SnackBarService) {
    }

    ngOnInit() {
        this.aimsService.getAll().subscribe({
            next: (aims) => {
                this.aimsList = aims.filter(aim => !aim.hidden)
            },
            error: (err) => {
                console.error(err)
                this.snackBarService.openSnackBar("Errore nel caricamento degli aims")
            }
        })
    }

    onSelectAim(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        const aimCode = selectElement.value;
        if (aimCode != 'all') {
            this.aimCodeSelected.emit(aimCode)
        } else {
            this.aimCodeSelected.emit('')
        }
    }
}
