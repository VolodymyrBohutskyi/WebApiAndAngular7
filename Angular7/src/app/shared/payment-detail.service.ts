import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  readonly rootURL = 'http://localhost:60665/api/';

  constructor(private http: HttpClient) { }

  postPaymentDetail(payment: PaymentDetail): Observable<any> {
    return this.http.post(this.rootURL + 'PaymentDetails', payment);
  }

}
