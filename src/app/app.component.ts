import { newArray } from '@angular/compiler/src/util';
/*
DEMO 
*/
import { Component, VERSION, ViewChild } from '@angular/core';
import { BaseExpansionComponent } from './components/base-expansion/base-expansion.component'; // EXPANSION PANEL

// SERVICE(S)
import { JsonPlaceholderService } from './services/json-placeholder/json-placeholder.service';
import { ProductShippingService } from './services/product-shipping/product-shipping.service';

//
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// CLASS
export class AppComponent {
  // VARIABLE.
  public data: Array<any>;
  public dataSize: Array<any>;

  // CONSTRUCTOR.
  constructor(
    private JSONPlaceholder: JsonPlaceholderService,
    private sizes: ProductShippingService
  ) {
    // DEFINE 'DATA'
    this.data = new Array<any>();
    this.dataSize = new Array<any>();

    // TEST 'DATA'
    this.getDataFromAPI();
    this.getDataSize();
  }

  // GET SIZES
  public getDataSize() {
    console.log("APP", this.sizes.getSizeData());
    this.dataSize = this.sizes.getSizeData();
  }

  // Get Data From API.
  public getDataFromAPI() {
    //
    this.JSONPlaceholder.getData().subscribe(data => {
      // console.log('Data: ', data);

      //
      this.data = data;
    });
  }
}
