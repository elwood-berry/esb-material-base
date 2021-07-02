/*
PRODUCT SHIPPING 
Sample Data To Display In This Demo.

'Sizes' - Typical Sizes Of Apparel.
'Quantities' - Random numbers above 10.
'Location' - All the cities and states in the United States 
'Address' - All address, address2, city, state, zip
'Ship Date' - 
'In Hand Date' - 
'Shipping Method' - 
'Tracking NO.' - 
'Account' - 
'Account Contact' - 
'Instructions' - 

*/

import { Injectable } from '@angular/core';

@Injectable()
export class ProductShippingService {
  // SIZE DATA
  public size: any[] = [
    {
      name: 'Extra Small',
      abbreviation: 'xs'
    },
    {
      name: 'Small',
      abbreviation: 's'
    },
    {
      name: 'Medium',
      abbreviation: 'm'
    },
    {
      name: 'Large',
      abbreviation: 'l'
    },
    {
      name: 'Extra Large',
      abbreviation: 'xl'
    }
  ];

  // CONSTRUCTOR
  constructor() {}

  // GET SIZE DATA.
  public getSizeData() {
    console.log('SERVICE', this.size);

    return this.size;
  }
}
