import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SaleService} from "../../services/sale/sale.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Sale} from "../../models/sale.model";

@Component({
  selector: 'app-sale-editor-view',
  templateUrl: './sale-editor-view.component.html',
  styleUrls: ['./sale-editor-view.component.css']
})
export class SaleEditorViewComponent implements OnInit {

  sale: Sale;

  editedSaleForm: FormGroup;

  constructor(private route: ActivatedRoute, private saleService: SaleService,
              private formBuilder: FormBuilder, private router: Router) { }

  /**
   * Lifecycle method
   */
  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.saleService.getSaleById(id)
      .then(
        (sale: Sale) => {
          this.sale = sale;
          this.initForm();
        }
      );

  }

  /**
   * Method for init the form
   * @private
   */
  private initForm(): void {

    this.editedSaleForm = this.formBuilder.group({
      saleDate: [this.formattedDate(new Date(this.sale.saleDate)), [Validators.required, Validators.pattern(/^(0[1-9]|1[012])\/(0[1-9]|1[012])\/\d{4}$/)]],
      storeLocation: ['', Validators.required],
      customer: this.formBuilder.group({
        gender: ['', Validators.required],
        age: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        satisfaction: ['', Validators.required],
      }),
      couponUsed: [''],
      purchaseMethod: ['', Validators.required],
    });

  }

  /**
   * Method called when the user submit an edited sale
   */
  onSubmitEditedSaleForm() {
    this.sale.saleDate = new Date(this.editedSaleForm.value.saleDate);
    this.sale.items = undefined;

    this.saleService.updateSaleById(this.sale.id, this.sale.toJSON())
      .then(() => {
        this.router.navigate(['/']);
      })

  }

  /**
   * Method called for formatted the date like DD/MM/YYYY
   * @private
   */
  private formattedDate(date: Date): string {

    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    const year = String(date.getFullYear());

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return `${day}/${month}/${year}`;
  }

}
