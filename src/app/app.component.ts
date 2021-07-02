import { newArray } from '@angular/compiler/src/util';
/*
DEMO 
*/
import { Component, VERSION, ViewChild } from '@angular/core';
import { BaseExpansionComponent } from './components/base-expansion/base-expansion.component'; // EXPANSION PANEL

// SERVICE(S)
import { JsonPlaceholderService } from './services/json-placeholder/json-placeholder.service';

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

  // CONSTRUCTOR.
  constructor(private JSONPlaceholder: JsonPlaceholderService) {
    // DEFINE 'DATA'
    this.data = new Array<any>();

    // TEST 'DATA'
    this.getDataFromAPI();
  }

  // SUBSCRIBE 
  public getDataFromAPI() {
    // 
    this.JSONPlaceholder.getData().subscribe(data => {
      console.log('Data: ', data);
    });
  }
}
