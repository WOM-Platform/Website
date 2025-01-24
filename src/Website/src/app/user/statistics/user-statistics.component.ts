import {Component, OnInit} from "@angular/core";

import {MatDatepickerInputEvent} from "@angular/material/datepicker";

import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';
import {AuthService, StatsService, UserService} from "src/app/_services";
import {Merchants, UserMe} from "src/app/_models";

@Component({
    selector: 'app-user-stats',
    templateUrl: './user-statistics.component.html',
    styleUrls: ['./user-statistics.component.css'],
    standalone: false
})
export class UserStatisticsComponent implements OnInit {
    currentUser: UserMe
    merchantData: Merchants;

    constructor(private authService: AuthService, private statsService: StatsService, private userService: UserService) {
    }

    ngOnInit(): any {
        // check user role
        this.currentUser = this.userService.currentUserValue
    }

    loadData(): any {
        /*  // total amount of created wom
          this.statsService.getAdminTotalAmountCreated().subscribe(data => {
              this.totalCreatedAmount = data;
          })

          // total amount of consumed wom
          this.statsService.getAdminTotalAmountConsumed().subscribe(data => {
              this.totalConsumedAmount = data;
          })

          // amount of wom created divided by aim
          this.statsService.getAdminCreatedAmountByAim().subscribe(data => {
              this.chartCreatedAmountByAim = data.map(item => ({
                  name: item.aimTextId,
                  value: item.amount
              }))
          });

          this.merchantSubscription = this.authService.merchants().subscribe({
                  next: (response) => {
                      this.merchantData = response;
                  },
                  error: (error) => {
                      console.log('Errore durante il download dei dati del merchant:', error);
                  }
              }
          );*/
    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        console.log(`${type}: ${event.value}`);
    }

    public convertToPDF() {
        html2canvas(document.getElementById('toPrint')).then(canvas => {
            // Few necessary setting options
            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            var width = pdf.internal.pageSize.getWidth();
            var height = canvas.height * width / canvas.width;
            pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
            pdf.save('output.pdf'); // Generated PDF
        });
    }
}
