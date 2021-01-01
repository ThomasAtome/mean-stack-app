import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from '../api/api.service';
import {Sale} from '../../models/sale.model';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

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

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', ApiService.token);

    this.http
      .get(ApiService.salesURL(), {headers})
      .pipe(
        map((res: any) => {
          return res.map(item => Sale.fromJSON(item));
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
   * Method for retrieve a sale by his id on the DB
   * @param id
   */
  getSaleById(id: string): Promise<any> {

    return new Promise(
      (res, rej) => {

        let headers = new HttpHeaders();
        headers = headers.append('Authorization', ApiService.token);

        this.http
          .get(ApiService.saleURL() + id, {headers})
          .subscribe(
            (sale: Sale) => {
              res(Sale.fromJSON(sale));
            },
            err => {
              console.error(err);
              rej(err);
            }
          );

      }
    );

  }

  /**
   * Method for add a new sale on the DB
   * @param sale
   */
  addSale(sale: any): Promise<any> {

    return new Promise(
      (res, rej) => {

        let headers = new HttpHeaders();
        headers = headers.append('Authorization', ApiService.token);
        headers = headers.append('Content-Type', 'application/json');

        this.http
          .post(ApiService.saleURL(), sale, {headers})
          .subscribe(
            info => {
              console.info(info);
              res(info);
            },
            err => {
              console.error(err);
              rej(err);
            }
          );

      }
    );

  }

  /**
   * Method for update the selected sale on the DB
   */
  updateSaleById(id: string, editedSale: any): Promise<any> {

    return new Promise(
      (res, rej) => {

        let headers = new HttpHeaders();
        headers = headers.append('Authorization', ApiService.token);
        headers = headers.append('Content-Type', 'application/json');

        this.http
          .put(ApiService.saleURL() + id, editedSale, {headers})
          .subscribe(
            info => {
              console.log(info);
              res(info);
            },
            err => {
              console.error(err);
              rej(err);
            }
          );

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

        let headers = new HttpHeaders();
        headers = headers.append('Authorization', ApiService.token);

        this.http
          .delete(ApiService.saleURL() + id, {headers})
          .subscribe(
            info => {
              for (let i = 0; i < this.salesData.length; i++) {
                if (this.salesData[i].id === id) {
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
          );

      }
    );

  }

}
