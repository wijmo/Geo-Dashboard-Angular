import { Component,  Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Globalize } from '@grapecity/wijmo';

@Component({
  selector: 'median-age-tile',
  templateUrl: './median-age-tile.component.html',
})
export class MedianAgeTileComponent implements OnChanges {
  @Input() data: any;
  @Input() palette: any;

  ageData: any;
  format = Globalize.format; 

  ngOnChanges(changes: any) {
    if(changes.data && this.data) {
      this.ageData = [
        {
          name: 'Children',
          value: this.data.pop15
        },
        {
          name: 'Youth',
          value: this.data.pop15_24
        },
        {
          name: 'Adults',
          value: this.data.pop25_64
        },
        {
          name: 'Senior',
          value: this.data.pop64
        }
      ];
    }
  }
}
