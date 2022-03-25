import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {EmailData} from "../_models/emailData";

@Injectable({providedIn: 'root'})
export class EmailService {
    constructor(private http: HttpClient) {}

    sendEmail(emailData: EmailData): Observable<any> {
        let headers = new HttpHeaders()
            .set('accept', 'application/json')
            .set('api-key', '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')
            .set('content-type', 'application/json');
        return this.http.post<any>('https://api.sendinblue.com/v3/smtp/email',
            {
                sender: {
                    'name': emailData.senderName,
                    'email': emailData.senderEmail
                },
                'to':[
                    {
                        'email': emailData.toEmail,
                        'name': emailData.toName
                    }
                ],
                'subject': emailData.subject,
                'htmlContent': emailData.content
            }, {
           'headers': headers
        }).pipe(map (response => response));
    }
}
