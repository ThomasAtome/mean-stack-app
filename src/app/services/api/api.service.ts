import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static rootURL = 'http://localhost';

  static token: string;

  constructor() {}

  /**
   * Return URL for auth API route
   */
  static authURL(): string {
    return `${ApiService.rootURL}/`;
  }

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
