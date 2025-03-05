import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, Subject, takeUntil } from "rxjs";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-search",
  imports: [ReactiveFormsModule, MatIcon],
  standalone: true,
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = "Ricerca...";
  @Input() searchControl: FormControl = new FormControl("");
  @Output() searchEmit = new EventEmitter<string>();

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((searchValue) => {
        if (searchValue.length >= 3 || searchValue.length === 0) {
          this.searchEmit.emit(searchValue);
        } else {
          this.searchEmit.emit("");
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
