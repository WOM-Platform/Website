import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {


    constructor(private snackBar: MatSnackBar) {
    }

    openSnackBar(message = "null"): any {
        this.snackBar.open(message, null, {
            duration: 5000,
        });
    }
}
