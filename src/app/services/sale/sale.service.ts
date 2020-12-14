import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../api/api.service";
import {Sale} from "../../models/sale.model";
import {map} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  sales: BehaviorSubject<Array<Sale>>;
  private salesData: Array<Sale>;

  constructor(private http: HttpClient) {
    this.sales = new BehaviorSubject<Array<Sale>>(null);
  }

  /**
   * Method for retrieve all the sales from the DB
   */
  getAll(): void {

    this.http
      .get(ApiService.salesURL())
      .pipe(
        map((res: any) => {
          return res.map(item => Sale.fromJSON(item))
        })
      )
      .subscribe(
        (sales: Array<Sale>) => {
          this.salesData = sales;
          this.sales.next(sales);
        },
        err => {
          console.error(err);
        }
      );

  }

  /**
   * Method for delete the selected sale on the DB
   * @param id
   */
  deleteById(id: string): Promise<any> {

    return new Promise(
      (res, rej) => {

        this.http
          .delete(ApiService.saleURL() + id)
          .subscribe(
            info => {
              for(let i = 0; i < this.salesData.length; i++) {
                if(this.salesData[i].id === id) {
                  this.salesData.splice(i, 1);
                  break;
                }
              }
              this.sales.next(this.salesData);
              res(info);
            },
            err => {
              console.error(err);
              rej(err);
            }
          )

      }
    )

  }
}
