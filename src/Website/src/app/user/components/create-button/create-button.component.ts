import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-create-button",
  imports: [],
  template: `
    <button class="create-button" (click)="handleClick()">
      <span class="material-symbols-outlined">add</span>
      {{ label }}
    </button>
  `,
  styleUrl: "./create-button.component.css",
})
export class CreateButtonComponent {
  @Input() label = "Create";
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
