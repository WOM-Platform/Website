import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { SearchAimComponent } from "./search-aim/search-aim.component";
import { Subscription } from "rxjs";
import { UserService } from "src/app/_services";

@Component({
  selector: "app-user-aims-list",
  templateUrl: "./user-aims-list.component.html",
  styleUrl: "./user-aims-list.component.css",
})
export class UserAimsListComponent implements OnInit {
  ngOnInit() {
    console.log("hhhhhhhhhhhh");
  }
  // @Input() isRoleRequired: boolean = false;
  // @Output() accessToAdd = new EventEmitter<any>();
  // @ViewChild(SearchAimComponent)
  // searchSourceComponent: SearchAimComponent;
  // listAccess = [];
  // addAccess: boolean = false;
  // noResults: boolean = false;
  // subscriptions: Subscription = new Subscription();
  // isLoading = false;
  // errorMessage: string = "";
  // userRole = "User";
  // selectedAccess: any | null = null;
  // constructor(
  //   private userService: UserService,
  //   private cd: ChangeDetectorRef
  // ) {}
  // ngOnDestroy() {
  //   this.subscriptions.unsubscribe();
  // }
  // onAddAccess() {
  //   this.addAccess = true;
  // }
  // handleCancellationAccess() {
  //   // this.addAccess = !this.addAccess;
  //   // this.clearList();
  //   // this.searchSourceComponent.clearForm();
  // }
  // onSearch(userToSearch: any) {
  //   if (
  //     userToSearch.name &&
  //     userToSearch.name.length < 3 &&
  //     userToSearch.email &&
  //     userToSearch.email.length < 3
  //   ) {
  //     this.listAccess = [];
  //     this.cd.markForCheck();
  //   } else {
  //     this.subscriptions = this.userService
  //       .userSearch(userToSearch.name, userToSearch.email)
  //       .subscribe((res) => {
  //         this.listAccess = [];
  //         if (res.data && res.data.length > 0) {
  //           this.noResults = false;
  //           this.listAccess = res.data;
  //         } else {
  //           this.noResults = true;
  //         }
  //         this.cd.markForCheck();
  //       });
  //   }
  // }
  // onCreateAccess(userToAdd: any) {
  //   if (
  //     userToAdd.name &&
  //     userToAdd.surname &&
  //     userToAdd.email &&
  //     userToAdd.password
  //   ) {
  //     this.isLoading = true;
  //     this.userService
  //       .userCreate(
  //         userToAdd.name,
  //         userToAdd.surname,
  //         userToAdd.email,
  //         userToAdd.password
  //       )
  //       .subscribe({
  //         next: (user) => {
  //           this.handleSelection(user);
  //           this.isLoading = false;
  //           this.cd.markForCheck();
  //         },
  //         error: (err) => {
  //           this.errorMessage = "Failed to create instrument.";
  //           this.isLoading = false;
  //           this.cd.markForCheck();
  //         },
  //       });
  //   }
  // }
  // handleSelection(access) {
  //   // if (this.searchSourceComponent) {
  //   //   this.searchSourceComponent.clearForm();
  //   //   this.listAccess = [];
  //   // } else {
  //   //   console.error("SearchSourceComponent is not yet available.");
  //   // }
  //   // if (!this.isRoleRequired) {
  //   //   this.addUserToAccessList(access);
  //   // } else {
  //   //   this.selectedAccess = access;
  //   // }
  // }
  // addUserToAccessList(access, role = "") {
  //   this.addAccess = !this.addAccess;
  //   this.selectedAccess = "";
  //   this.accessToAdd.emit({ access: access, role: role });
  // }
  // clearList() {
  //   this.listAccess = [];
  // }
  // trackByAccess(index, access) {
  //   return access.id; // Assuming each access has a unique ID
  // }
}
