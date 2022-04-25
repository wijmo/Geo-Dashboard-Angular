import { Component, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Globalize } from '@grapecity/wijmo';

@Component({
  selector: 'household-income-tile',
  templateUrl: './household-income-tile.component.html',
})
export class HouseholdIncomeTileComponent implements OnChanges {
  @Input() data: any;
  @Input() palette: any;

  format = Globalize.format;
  incomeData: any;

  ngOnChanges(changes: any) {
    if (changes.data && this.data) {
      const data = this.data;
      this.incomeData = [
        {
          value1: data.numHouses75k,
          value2: data.numHouses75_150k,
          value3: data.numHouses150k
        }
      ];
 
    }
  }
}
