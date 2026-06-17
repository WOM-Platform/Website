import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-create-button",
  imports: [],
  template: `
    <button class="create-button" (click)="handleClick()">
      <span class="material-symbols-outlined">add</span>
      {{ label }}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./create-button.component.css",
})
export class CreateButtonComponent {
  @Input() label = "Create";
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
