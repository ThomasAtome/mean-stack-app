import { Component, OnInit } from '@angular/core';
import {Sale} from "../../models/sale.model";
import {ActivatedRoute} from "@angular/router";
import {SaleService} from "../../services/sale/sale.service";

@Component({
  selector: 'app-sale-view',
  templateUrl: './sale-view.component.html',
  styleUrls: ['./sale-view.component.css']
})
export class SaleViewComponent implements OnInit {

  sale: Sale;

  constructor(private route: ActivatedRoute, private saleService: SaleService) { }

  /**
   * Lifecycle method
   */
  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.saleService.getSaleById(id)
      .then(
        (sale: Sale) => {
          this.sale = sale;
        }
      );

  }

  /**
   * Method for quickly formatted the price
   */
  formattedPrice(priceNotFormatted: any): string {
    return priceNotFormatted.replace('.', '€');
  }

  /**
   * Method for retrieve the total amount formatted for an item
   */
  getTotalItem(quantity: any, priceNotFormatted: any): string {
    return (parseInt(quantity) * parseFloat(priceNotFormatted)).toFixed(2).toString();
  }

  /**
   * Method for sum all the item price and formattd it
   * @param sale
   */
  getTotalAmount(sale: Sale) {
    let total = 0;

    sale.items.forEach(item => {
      total += parseFloat(this.getTotalItem(item.quantity, item.price.$numberDecimal));
    });

    return this.formattedPrice(total.toFixed(2).toString());
  }
}
