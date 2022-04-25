import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Globalize } from '@grapecity/wijmo';

@Component({
  selector: 'population-tile',
  templateUrl: './population-tile.component.html',
})
export class PopulationTileComponent implements OnChanges {
  @Input() data: any;
  @Input() palette: any;

  populationData: any;
  format = Globalize.format; 

  ngOnChanges(changes: any) {
    if(changes.data && this.data) {
      this.populationData = [
        {
          label: 'Female',
          value: 100 * this.data.popFemale / this.data.popTotal
        },
        {
          label: 'Male',
          value: 100 * this.data.popMale / this.data.popTotal
        },
      ];
  
    }
  }
}
