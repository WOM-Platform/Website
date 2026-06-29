import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { SourceService } from "src/app/_services/source.service";
import { Aim } from "src/app/_models";
import { AimsService } from "src/app/_services";
import { firstValueFrom } from "rxjs";
import { MatSelectModule } from "@angular/material/select";
import { MapPointPickerComponent } from "src/app/components/map-point-picker/map-point-picker.component";
import { QRCodeComponent } from "angularx-qrcode";
import jsPDF from "jspdf";
import { Instrument, InstrumentEditing } from "src/app/_models/instrument";

@Component({
  selector: "app-dialog-generate-vouchers",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MapPointPickerComponent,
    QRCodeComponent,
  ],
  templateUrl: "./dialog-generate-vouchers.component.html",
})
export class DialogGenerateVouchersComponent implements OnInit {
  form = this.fb.group({
    count: [1, Validators.required],
    aim: ["", Validators.required],
    latitude: [0],
    longitude: [0],
  });

  enabledAims: string[] = [];
  aimList: Aim[] = [];
  instrument: InstrumentEditing | null = null;

  qrValue: string | null = null;
  password: string | null = null;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogGenerateVouchersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sourceService: SourceService,
    private aimService: AimsService
  ) {}

  ngOnInit() {
    console.log("Dialog data:", this.data);
    this.sourceService.getInstrument(this.data).subscribe(async (i) => {
      this.instrument = i;
      this.enabledAims = this.instrument.aims.enabled;

      this.aimList = await firstValueFrom(
        this.aimService.fetchAimsForInstrument({
          enabled: this.enabledAims,
          enableAll: false,
        })
      );
    });
  }

  confirm() {
    const value = this.form.value;

    this.sourceService
      .generateVouchers(this.data, {
        vouchers: [
          {
            count: Number(value.count),
            aim: value.aim ?? "",
            location: {
              latitude: Number(value.latitude),
              longitude: Number(value.longitude),
            },
            timestamp: new Date().toISOString(),
            creationMode: "Standard",
          },
        ],
      })
      .subscribe({
        next: (request) => {
          this.qrValue = request.link;
          this.password = request.password;
        },
        error: (error) => {
          console.error("Error generating vouchers:", error);
        },
      });
  }

  cancel() {
    this.dialogRef.close();
  }

  onLocationChange(pos: { lat: number; lng: number }) {
    this.form.patchValue({
      latitude: pos.lat,
      longitude: pos.lng,
    });
  }

  downloadQr() {
    const qrCanvas = document.querySelector("canvas") as HTMLCanvasElement;
    if (!qrCanvas) return;

    const imgData = qrCanvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text(this.instrument?.name || "", pageWidth / 2, 20, {
      align: "center",
    });

    const qrSize = 80;
    const x = (pageWidth - qrSize) / 2;

    pdf.addImage(imgData, "PNG", x, 30, qrSize, qrSize);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);
    pdf.text(`Password: ${this.password ?? "-"}`, pageWidth / 2, 120, {
      align: "center",
    });

    pdf.setFontSize(10);
    pdf.setTextColor(80);
    pdf.text(this.qrValue ?? "", pageWidth / 2, 130, {
      align: "center",
      maxWidth: pageWidth - 20,
    });

    pdf.setTextColor(150);
    pdf.setFontSize(10);
    pdf.text("Scan this QR code to redeem your voucher", pageWidth / 2, 280, {
      align: "center",
    });

    pdf.save((this.instrument?.name || "") + "_voucher.pdf");
  }
}
