import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogConfirmCancelComponent } from './dialog-confirm-cancel/dialog-confirm-cancel';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm';
import { LogoStoreComponent } from './logo-store/logo-store.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from "@angular/material/core";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PdfViewerContainerComponent } from './pdf-viewer-container/pdf-viewer-container.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    DialogConfirmCancelComponent,
    DialogConfirmComponent,
    LogoStoreComponent,
    PdfViewerContainerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    PdfViewerModule,
  ],
  exports: [
    DialogConfirmCancelComponent,
    DialogConfirmComponent,
    LogoStoreComponent,
    MatButtonModule,
    MatButtonModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    PdfViewerContainerComponent,
    PdfViewerModule,
  ]
})
export class SharedModule { }
