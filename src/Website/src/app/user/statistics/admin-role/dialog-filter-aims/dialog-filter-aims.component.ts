import { NgFor } from "@angular/common";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { Aim } from "src/app/_models";
import { AimsService } from "src/app/_services";

@Component({
  selector: "app-dialog-filter-aims",
  standalone: true,
  providers: [AimsService],
  imports: [NgFor, MatIcon],
  templateUrl: "./dialog-filter-aims.component.html",
  styleUrls: ["./dialog-filter-aims.component.css"],
})
export class DialogFilterAimsComponent implements OnInit {
  listAims: any[] = [];
  prevAimsSelected: string[] = [];

  filteredAims: string[] = [];

  constructor(
    private aimsService: AimsService,
    public dialogRef: MatDialogRef<DialogFilterAimsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { filterAim: string[] }
  ) {
    this.filteredAims = data.filterAim || [];
  }

  ngOnInit(): void {
    this.loadAims();
  }

  // Load the aims and map the selected ones
  loadAims() {
    this.aimsService.getAll().subscribe((aims: Aim[]) => {
      this.listAims = aims.map((aim) => {
        // Determine if the aim is selected
        const isSelected = this.filteredAims.some((code) => {
          const isMatch = code.toLowerCase() === aim.code.toLowerCase();
          if (isMatch) {
            // Add the code to prevAimsSelected if not already included
            if (!this.prevAimsSelected.includes(aim.code)) {
              this.prevAimsSelected.push(aim.code);
            }
          }
          return isMatch;
        });

        return {
          ...aim,
          isChecked: isSelected,
        };
      });
    });
  }

  get selectedAims(): string[] {
    return this.listAims.filter((aim) => aim.isChecked).map((aim) => aim.code);
  }

  get hasChanges(): boolean {
    const selectedCodes = this.selectedAims.sort();

    return (
      selectedCodes.length !== this.prevAimsSelected.length ||
      JSON.stringify(selectedCodes) !== JSON.stringify(this.prevAimsSelected)
    );
  }

  onAimChange(aimCode: string) {
    const aim = this.listAims.find((aim) => aim.code === aimCode);
    if (aim) {
      aim.isChecked = !aim.isChecked; // Toggle the isChecked state of the aim
    }
  }

  onCloseDialog() {
    this.dialogRef.close(this.selectedAims); // Pass back the selected AIM codes
  }
}
