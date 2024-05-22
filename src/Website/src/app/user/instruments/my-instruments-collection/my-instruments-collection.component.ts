import { Component, OnInit } from "@angular/core";
import { Instrument } from "src/app/_models/instrument";
import { UserService } from "src/app/_services";
import { StorageService } from "src/app/_services/storage.service";

@Component({
  selector: "app-my-instruments-collection",
  templateUrl: "./my-instruments-collection.component.html",
  styleUrl: "./my-instruments-collection.component.css",
})
export class MyInstrumentsCollectionComponent implements OnInit {
  username: string;
  instruments: Instrument;
  currentUser: any;

  constructor(
    private userService: UserService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.userService.userOwnershipStatus.subscribe({
      next: (res) => {
        this.instruments = res["sources"];
      },
    });

    this.username =
      this.userService.currentUserValue.name +
      " " +
      this.userService.currentUserValue.surname;
    this.loadData();
  }

  loadData(): any {
    this.instruments = this.storageService.load("instrumentData");
    this.currentUser = this.storageService.load("currentUser");
  }
}
