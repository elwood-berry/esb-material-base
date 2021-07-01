import { Component, VERSION, ViewChild, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

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
}
