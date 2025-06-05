import { CommonModule } from "@angular/common";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { decode } from "blurhash";
import { ImageBadge } from "src/app/_models/badge";

@Component({
  selector: "app-blurhash",
  imports: [CommonModule],
  templateUrl: "./blurhash.component.html",
  styleUrl: "./blurhash.component.css",
})
export class BlurhashComponent implements OnInit {
  @Input() image: ImageBadge;
  @Input() alt: string = "";
  @Input() imageSize: string = "fullSizeUrl";
  @Input() width = 32;
  @Input() height = 32;
  blurDataUrl: string;
  loaded = false;
  defaultImg = "assets/images/user/badges/badgeEmpty.png";
  @ViewChild("placeholderCanvas") canvasRef!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    if (this.image && this.image.blurHash) {
      this.loadImage();
    } else {
      console.warn("No blurHash provided for image:", this.image);
      this.blurDataUrl = this.defaultImg;
    }
  }

  loadImage(): void {
    const pixels = decode(this.image.blurHash, this.width, this.height);
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const imageData = ctx.createImageData(this.width, this.height);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
      this.blurDataUrl = canvas.toDataURL();
    }
  }

  onLoad() {
    this.loaded = true;
  }
}
