/*
DEMO 
*/
import { Component, VERSION, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

//
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// CLASS
export class AppComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  public panelOpenState = false;
}
