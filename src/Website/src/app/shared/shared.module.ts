import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {MatNativeDateModule} from "@angular/material/core";
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import { PdfViewerContainerComponent } from '../components/pdf-viewer-container/pdf-viewer-container.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { StoreLogosComponent } from '../components/store-logos/store-logos.component';




@NgModule({
  declarations: [

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
  ]
})
export class SharedModule { }
