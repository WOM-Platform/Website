import { Component, OnInit } from "@angular/core";
import { Instrument } from "src/app/_models/instrument";
import { UserService } from "src/app/_services";
import { StorageService } from "src/app/_services/storage.service";

@Component({
  selector: "app-my-instrument-collection",
  templateUrl: "./my-instrument-collection-component.component.html",
  styleUrl: "./my-instrument-collection-component.component.css",
})
export class MyInstrumentCollectionComponent implements OnInit {
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
        console.log("Aggiorno collection ", res["sources"]);
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
