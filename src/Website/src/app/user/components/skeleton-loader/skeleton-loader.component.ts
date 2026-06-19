import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@Component({
  selector: "app-skeleton-loader",
  imports: [NgxSkeletonLoaderModule],
  templateUrl: "./skeleton-loader.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./skeleton-loader.component.css",
})
export class SkeletonLoaderComponent {}
