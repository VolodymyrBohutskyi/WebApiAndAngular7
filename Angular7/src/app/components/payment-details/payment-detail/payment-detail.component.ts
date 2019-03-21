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
  cardOwnerName: string;
  cardNumber: string;
  expirationDate: string;
  cVV: string;

  constructor(private service: PaymentDetailService) { }

  ngOnInit() {
    this.form = new FormGroup({
      PMId: new FormControl(0, Validators.required),
      CardOwnerName: new FormControl('', Validators.required),
      CardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      ExpirationDate: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      CVV: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
    });

    //this.form.get('amountValue').setValue(1);

  }

  submitForm(): void {
    console.log(this.form);
  }

}
