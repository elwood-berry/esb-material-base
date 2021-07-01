/*
DEMO 
*/
import { Component, VERSION, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { BaseExpansionComponent } from './components/base-expansion/base-expansion.component';

//
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// CLASS
export class AppComponent {
  public panelOpenState = false;
}
