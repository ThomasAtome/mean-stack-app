import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static rootURL = 'http://localhost';

  constructor() { }

  /**
   * Return URL for sales API route
   */
  static salesURL(): string {
    return `${ApiService.rootURL}/sales/`;
  }

  /**
   * Return URL for sale API route
   */
  static saleURL(): string {
    return `${ApiService.rootURL}/sale/`;
  }

}
