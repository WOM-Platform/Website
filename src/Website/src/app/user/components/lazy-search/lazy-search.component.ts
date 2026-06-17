import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Instrument } from "src/app/_models/instrument";
import { Merchant } from "src/app/_models/merchant";

@Component({
  selector: "app-lazy-search",
  imports: [],
  standalone: true,
  templateUrl: "./lazy-search.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./lazy-search.component.css",
})
export class LazySearchComponent {
  @Input() placeholder: string = "Search...";
  @Input() fetchData: Instrument[] | Merchant[] = [];
  @Output() selectEmit = new EventEmitter<any>();

  onSelection(selectedItem: any) {
    this.selectEmit.emit(selectedItem);
    this.fetchData = [];
  }
}
