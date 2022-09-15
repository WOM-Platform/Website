import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {EmailData} from "../_models/emailData";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class EmailService {
    constructor(private http: HttpClient) {}

    sendEmail(emailData: EmailData): Observable<any> {
        let headers = new HttpHeaders()
            .set('accept', 'application/json')
            .set('api-key', environment.sendInBlueApiKey)
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
