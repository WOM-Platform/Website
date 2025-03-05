import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AimsService } from "../../../_services";
import { Aim } from "../../../_models";
import { SnackBarService } from "../../../_services/snack-bar.service";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-aims-select",
  imports: [NgFor],
  standalone: true,
  templateUrl: "./aims-select.component.html",
  styleUrls: ["./aims-select.component.css"],
})
export class AimsSelectComponent implements OnInit {
  @Input() selectedAim = "";
  @Input() isEditing = false;
  @Output() aimCodeSelected = new EventEmitter<string>();

  aimsList: Aim[] = [];

  constructor(
    private aimsService: AimsService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.aimsService.getAll().subscribe({
      next: (aims) => {
        this.aimsList = aims.filter((aim) => !aim.hidden);

        if (this.selectedAim) {
          this.emitSelectedAim(this.selectedAim);
        }
      },
      error: (err) => {
        console.error(err);
        this.snackBarService.openSnackBar("Errore nel caricamento degli aims");
      },
    });
  }

  onSelectAim(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const aimCode = selectElement.value;
    this.emitSelectedAim(aimCode !== "all" ? aimCode : "");
  }

  emitSelectedAim(aimCode: string) {
    this.aimCodeSelected.emit(aimCode);
  }
}
