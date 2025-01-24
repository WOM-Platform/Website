import {Component, Inject, OnInit} from '@angular/core';
import {PosService} from "../../_services";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { HttpEvent, HttpEventType } from "@angular/common/http";
import {NgIf} from "@angular/common";


@Component({
    selector: 'app-upload-image',
    imports: [NgIf],
    templateUrl: './upload-image.component.html',
    styleUrl: './upload-image.component.css'
})
export class UploadImageComponent implements OnInit {
    public file: File | null = null;
    public uploadProgress: number = -1;

    constructor(private posService: PosService, @Inject(MAT_DIALOG_DATA) private data: string, private dialogRef: MatDialogRef<UploadImageComponent>) {
    }

    ngOnInit() {

    }

    public onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.file = input.files[0];
            this.posService.uploadFile(this.data, this.file).subscribe({
                next: (event: HttpEvent<any>) => {
                    switch (event.type) {
                        case HttpEventType.UploadProgress:
                            this.uploadProgress = Math.round(100 * event.loaded / (event.total ? event.total : 1));
                            break;
                        case HttpEventType.Response:
                            console.log('File is fully uploaded');
                            this.dialogRef.close(true); // Close dialog after successful upload
                            break;
                    }
                },
                error: (err) => {
                    console.error(err);
                    this.dialogRef.close(false); // Close dialog after error
                }
            });
        }
    }

    public uploadFile(): void {
        if (this.file) {
            const formData = new FormData();
            formData.append('file', this.file);

            this.posService.uploadFile(this.data['id'], this.file).subscribe({
                next: (event: HttpEvent<any>) => {
                    switch (event.type) {
                        case HttpEventType.UploadProgress:
                            const progress = Math.round(100 * event.loaded / (event.total ? event.total : 1));
                            console.log(`File is ${progress}% uploaded`);
                            break;
                        case HttpEventType.Response:
                            console.log('File is fully uploaded');
                            this.dialogRef.close(true); // Close dialog after successful upload
                            break;
                    }
                },
                error: (err) => {
                    console.error(err);
                    this.dialogRef.close(false); // Close dialog after error
                }
            });
        }
    }
}
