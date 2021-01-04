import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }


  sendEmail(email: string, invitedBy: string): void {


    const body = {
      email,
      invitedBy,
    }


    this.http.post('/api/tenants/invite', body).subscribe((s) => {
      console.log(s);
    });
  }


}
