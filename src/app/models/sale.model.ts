import {Customer} from './customer.model';

export class Sale {

  private _id: string;
  private _saleDate: Date;
  private _items: Array<any>;
  private _storeLocation: string;
  private _customer: Customer;
  private _couponUsed: boolean;
  private _purchaseMethod: string;

  constructor(saleDate: Date, items: Array<any>, storeLocation: string, customer: Customer, couponUsed: boolean, purchaseMethod: string, id?: string) {
    if (id) {
      this._id = id;
    }
    this._saleDate = saleDate;
    this._items = items;
    this._storeLocation = storeLocation;
    this._customer = customer;
    this._couponUsed = couponUsed;
    this._purchaseMethod = purchaseMethod;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get saleDate(): Date {
    return this._saleDate;
  }

  set saleDate(value: Date) {
    this._saleDate = value;
  }

  get items(): Array<any> {
    return this._items;
  }

  set items(value: Array<any>) {
    this._items = value;
  }

  get storeLocation(): string {
    return this._storeLocation;
  }

  set storeLocation(value: string) {
    this._storeLocation = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get couponUsed(): boolean {
    return this._couponUsed;
  }

  set couponUsed(value: boolean) {
    this._couponUsed = value;
  }

  get purchaseMethod(): string {
    return this._purchaseMethod;
  }

  set purchaseMethod(value: string) {
    this._purchaseMethod = value;
  }

  static fromJSON(data: any): Sale {
    return new Sale(
      data.saleDate,
      data.items,
      data.storeLocation,
      Customer.fromJSON(data.customer),
      data.couponUsed,
      data.purchaseMethod,
      data._id
    );
  }

  toJSON(): any {
    return {
      saleDate: this.saleDate,
      items: this.items,
      storeLocation: this.storeLocation,
      customer: this.customer.toJSON(),
      couponUsed: this.couponUsed,
      purchaseMethod: this.purchaseMethod
    };
  }
}
