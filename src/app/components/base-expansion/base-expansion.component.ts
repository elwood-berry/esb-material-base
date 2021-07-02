import { Component, VERSION, ViewChild, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

// SERVICE(S).
// import { JsonPlaceholderService } from '../../services/json-placeholder/json-placeholder.service';

@Component({
  selector: 'app-base-expansion',
  templateUrl: './base-expansion.component.html',
  styleUrls: ['./base-expansion.component.scss']
})
export class BaseExpansionComponent implements OnInit {
  //
  @ViewChild(MatAccordion) accordion: MatAccordion;

  public panelOpenState = false;

  constructor() {}

  ngOnInit() {}

  public editProductShipping() {
    console.log(
      'editProductShipping()',
      'I should see a dialog with a form to edit product shipping data.'
    );
  }
  public duplicateProductShipping() {
    console.log(
      'duplicateProductShipping()',
      'I should see a dialog with a confirmation to DUPLICATE THIS product shipping data.'
    );
  }
  public deleteProductShipping() {
    console.log(
      'deleteProductShipping()',
      'I should see a dialog with a confirmation to DELETE THIS product shipping data.'
    );
  }
}
