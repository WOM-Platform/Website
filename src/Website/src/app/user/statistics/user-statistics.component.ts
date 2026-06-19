import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { MatDatepickerInputEvent } from "@angular/material/datepicker";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { UserService } from "src/app/_services/user.service";
import { User, UserMe } from "src/app/_models/user";
import { Merchants } from "src/app/_models/merchant";

@Component({
  selector: "app-user-stats",
  templateUrl: "./user-statistics.component.html",
  styleUrls: ["./user-statistics.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UserStatisticsComponent implements OnInit {
  currentUser: UserMe | null = null;
  merchantData: Merchants = {
    name: "",
    surname: "",
    email: "",
    merchants: [],
  };

  constructor(private userService: UserService) {}

  ngOnInit(): any {
    // check user role
    this.currentUser = this.userService.currentUserValue;
  }

  loadData(): any {}

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
  }

  public convertToPDF() {
    const element = document.getElementById("toPrint");
    if (!element) return;
    html2canvas(element).then((canvas) => {
      // Few necessary setting options
      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jsPDF("p", "mm", "a4"); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, "PNG", 0, 0, width, height);
      pdf.save("output.pdf"); // Generated PDF
    });
  }
}
