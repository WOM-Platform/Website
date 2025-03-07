import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { GoogleMapsModule } from "@angular/google-maps";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { HttpClient } from "@angular/common/http";
import { AvatarComponent } from "../user/components/avatar/avatar.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { PaginationComponent } from "../user/components/admin-table/pagination/pagination.component";
import { DialogConfirmCancelComponent } from "../components/dialog-confirm-cancel/dialog-confirm-cancel";
import { DialogConfirmComponent } from "../components/dialog-confirm/dialog-confirm";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxFileDropModule } from "ngx-file-drop";
import { BadgeComponent } from "../components/badge/badge.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@NgModule({
  declarations: [
    AvatarComponent,
    DialogConfirmCancelComponent,
    DialogConfirmComponent,
    PaginationComponent,
  ],
  imports: [
    BadgeComponent,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    GoogleMapsModule,
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
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    NgxChartsModule,
    NgxSkeletonLoaderModule,
    NgxFileDropModule,
    PdfViewerModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: "it",
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    AvatarComponent,
    BrowserAnimationsModule,
    DialogConfirmCancelComponent,
    DialogConfirmComponent,
    FormsModule,
    GoogleMapsModule,
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
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    NgxChartsModule,
    NgxFileDropModule,
    NgxSkeletonLoaderModule,
    PaginationComponent,
    PdfViewerModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class SharedModule {}
