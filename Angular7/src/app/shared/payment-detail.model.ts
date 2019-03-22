export class PaymentDetail {

  constructor(
    public PMId: number,
    public CardOwnerName: string,
    public  CardNumber: string,
    public ExpirationDate: string,
    public CVV: string) {}

}
