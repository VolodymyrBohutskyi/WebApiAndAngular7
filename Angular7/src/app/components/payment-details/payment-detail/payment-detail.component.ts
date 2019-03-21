import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  form: FormGroup;
  pMId: number;
  cardOwnerName: string;
  cardNumber: string;
  expirationDate: string;
  cVV: string;

  constructor(private service: PaymentDetailService) { }

  ngOnInit() {
    this.form.reset();

    this.form = new FormGroup({
      pMId: new FormControl(0, Validators.required),
      cardOwnerName: new FormControl('', Validators.required),
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      expirationDate: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      cVV: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
    });

  }

  submitForm(): void {
    const {pMId, cardOwnerName, cardNumber, expirationDate, cVV} = this.form.value;
  }

}
