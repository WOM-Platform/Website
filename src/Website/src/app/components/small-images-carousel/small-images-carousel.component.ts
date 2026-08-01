import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-small-images-carousel",
  standalone: true,
  imports: [TranslateModule],
  templateUrl: "./small-images-carousel.component.html",
  styleUrl: "./small-images-carousel.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallImagesCarouselComponent implements OnChanges {
  @Input() images: {
    url?: string;
    title?: string;
    path: string;
  }[] = [];

  duplicatedImages: {
    url?: string;
    title?: string;
    path: string;
  }[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes["images"] && this.images?.length) {
      this.duplicatedImages = [
        ...this.images,
        ...this.images,
        ...this.images,
        ...this.images,
      ];
    }
  }
}
