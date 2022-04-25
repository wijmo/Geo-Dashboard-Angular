import { Component, Input, OnChanges } from '@angular/core';
import { Globalize } from '@grapecity/wijmo';

@Component({
  selector: 'home-value-tile',
  templateUrl: './home-value-tile.component.html',
})
export class HomeValueTileComponent implements OnChanges {
  @Input() data: any;
  @Input() dataUS: any;
  @Input() palette: any;
  @Input() name: string;

  format = Globalize.format;
  homeValueData:any;
  homeValueDataDetails:any;
  detailed:boolean = false;

  ngOnChanges(changes: any) {
    if (changes.data && this.data) {
      const data = this.data;

      this.homeValueData = [
        {
          name: '<300K',
          value: data.homeValue0_50K + data.homeValue50_100K + data.homeValue100_300K
        },
        {
          name: '300K-500K',
          value: data.homeValue300_500K
        },
        {
          name: '>500K',
          value: data.homeValue500_1000K + data.homeValue1000K
        },
      ];
    }
  }

  updateDetails() {
    const data = this.data;
    if(!data) {
      return;
    }

    this.homeValueDataDetails = [
      {
        name: '<50K',
        value: data.homeValue0_50K
      },
      {
        name: '50K-100K',
        value: data.homeValue50_100K
      },
      {
        name: '100K-300K',
        value: data.homeValue100_300K
      },
      {
        name: '300K-500K',
        value: data.homeValue300_500K
      },
      {
        name: '500K-1M',
        value: data.homeValue500_1000K
      },
      {
        name: '>1M',
        value: data.homeValue1000K
      },
    ];

  }

  // get a description for an index (100 is the national average, 50 is half, 200 is double, etc)
  getIndexDescription(index: number) {
    if (index == 100) {
      return 'national average'
    }
    const desc =
      index < 50 ? 'substantially lower' :
        index < 80 ? 'lower' :
          index < 100 ? 'slightly lower' :
            index < 120 ? 'slightly higher' :
              index < 200 ? 'higher' :
                'substantially higher';
    return desc + ' than the national average';
  }
}
