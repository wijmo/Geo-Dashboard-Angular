import { Component,  Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Globalize } from '@grapecity/wijmo';

@Component({
  selector: 'net-worth-tile',
  templateUrl: './net-worth-tile.component.html',
})
export class NetWorthTileComponent implements OnChanges {
  @Input() data: any;
  @Input() palette: any;

  format = Globalize.format; 

  ngOnChanges(changes: any) {
    if(changes.data && this.data) {
    }
  }
}
