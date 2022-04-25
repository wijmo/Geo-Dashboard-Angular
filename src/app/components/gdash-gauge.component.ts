import { Component, Input, ViewChild } from '@angular/core';
import { BulletGraph, Range } from '@grapecity/wijmo.gauge';

@Component({
  selector: 'gdash-gauge',
  templateUrl: './gdash-gauge.component.html',
})
export class GdashGaugeComponent {
  @Input() value: number;
  @Input() color: any;
  @ViewChild('bgraph') bgraph: BulletGraph;

  ngAfterViewInit() {
    this.bgraph.ranges.push( new Range( { min: 97, max: 103, color: 'rgb(210, 209, 207)' }));
    this.bgraph.max = 0;
    this.bgraph.max = 250;
  }
}
