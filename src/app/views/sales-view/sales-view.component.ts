import {Component, OnDestroy, OnInit} from '@angular/core';
import {SaleService} from "../../services/sale/sale.service";
import {Sale} from "../../models/sale.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sales-view',
  templateUrl: './sales-view.component.html',
  styleUrls: ['./sales-view.component.css']
})
export class SalesViewComponent implements OnInit, OnDestroy {

  sales: Array<Sale>;

  subs: Array<Subscription>;

  constructor(private saleService: SaleService) {
    this.subs = [];
  }

  /**
   * Lifecycle Method
   */
  ngOnInit(): void {
    this.initSubs();

    this.saleService.getAll();
  }

  /**
   * Method for init all the subs
   * @private
   */
  private initSubs(): void {
    const salesSub = this.saleService.sales.subscribe(
      (sales: Array<Sale>) => this.sales = sales);
    this.subs.push(salesSub);
  }

  /**
   * Method called for delete the sale selected
   * @param id
   */
  onClickDeleteBtn(id: string): void {
    this.saleService.deleteById(id)
      .then(res => {
        console.info('Success delete !');
      })
      .catch(err => {
        console.error('Error delete !');
      });
  }

  /**
   * Lifecycle Method
   */
  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
