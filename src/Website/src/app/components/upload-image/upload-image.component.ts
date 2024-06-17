import {Component, Inject, OnInit} from '@angular/core';
import {NgxFileDropEntry} from "ngx-file-drop";
import {PosService} from "../../_services";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PosDialogData} from "../../user/merchants/dialog-create-pos/add-pos.component";
import {data} from "autoprefixer";

@Component({
    selector: 'app-upload-image',
    standalone: true,
    imports: [],
    templateUrl: './upload-image.component.html',
    styleUrl: './upload-image.component.css'
})
export class UploadImageComponent implements OnInit {
    public file: File | null = null;

    constructor(private posService: PosService, @Inject(MAT_DIALOG_DATA) public data: string,) {
    }

    ngOnInit() {

    }

    public onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.file = input.files[0];
            console.log("I dati ", this.data)
            this.posService.uploadFile(this.data, this.file).subscribe({
                next: (res) => {
                    console.log("Res ", res)
                },
                error: (err) => {
                    console.error(err)
                }
            })
            console.log("File selezionato")
            console.log(this.file);
        }
    }

    public uploadFile(): void {
        if (this.file) {
            const formData = new FormData();
            formData.append('file', this.file);

            // Simulate an HTTP request to upload the file
            // Replace this with your actual upload logic

            this.posService.uploadFile(this.data['id'], this.file)

            // this.httpClient.post('https://example.com/upload', formData).subscribe(response => {
            //   console.log('Upload successful', response);
            // });
        }
    }

}
