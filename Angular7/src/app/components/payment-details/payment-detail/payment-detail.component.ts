import { Component, OnInit, OnDestroy,  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit, OnDestroy {

  form: FormGroup;
  sub1: Subscription;
  /*pMId: number;
  cardOwnerName: string;
  cardNumber: string;
  expirationDate: string;
  cVV: string;*/

  constructor(private service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit() {

    this.form = new FormGroup({
      pMId: new FormControl(0),
      cardOwnerName: new FormControl('', Validators.required),
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      expirationDate: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      cVV: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
    });

    this.resetForm();

  }

  resetForm() {
    this.form.reset();
    this.form.get('pMId').setValue(0);
  }

  submitForm(): void {
    const {pMId, cardOwnerName, cardNumber, expirationDate, cVV} = this.form.value;
    const newPaymentDetail: PaymentDetail = new PaymentDetail(pMId, cardOwnerName, cardNumber, expirationDate, cVV);

    this.sub1 = this.service.postPaymentDetail(newPaymentDetail)
      .subscribe(
        res => {
          this.toastr.success('Submitted successfully', 'Payment Detail Register');
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe;
  }

}
