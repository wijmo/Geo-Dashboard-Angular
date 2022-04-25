import { Component, EventEmitter, Input, Inject, Output, ViewChild } from '@angular/core';
import { Globalize, isIE } from '@grapecity/wijmo';
import { Palettes } from '@grapecity/wijmo.chart';
import { ColorScale, FlexMap } from '@grapecity/wijmo.chart.map';
import { DataService } from "../services/data-service";

@Component({
  selector: 'app-gdash-map',
  templateUrl: './gdash-map.component.html',
})

export class GdashMapComponent {
  @Input() palette: any;
  @Output() selected = new EventEmitter<any>();
  @ViewChild('map') map: FlexMap;
  selectedId: string;
  selectedName: string;

  currentSource: any = null;
  sources = [
    { name: 'None' },
    { name: 'Median Age', value: 'medianAge', fmtLegend: 'n0', fmtTooltip: '"Age: "n1' },
    { name: 'Home Value', value: 'medianHomeValueMort', fmtLegend: 'c0,"k"', fmtTooltip: '"Home Value: "c1,"k"' },
    { name: 'Household Income', value: 'medianIncome', fmtLegend: 'c0,"k"', fmtTooltip: '"Income: "c1,"k"' },
    { name: 'Net Worth', value: 'netWorth', fmtLegend: 'c0,"k"', fmtTooltip: '"Net Worth: "c1,"k"' },
    { name: 'Population', value: 'popTotal', fmtLegend: 'n0,,"m"', fmtTooltip: '"Population: "n1,,"m"' },
  ];
  private dataSerivce: DataService;

  constructor(@Inject(DataService) dataService: DataService) {
    this.dataSerivce = dataService;
    this.currentSource = this.sources[0];
  }

  ngAfterViewInit() {
    const map = this.map;

    map.hostElement.addEventListener('click', (e:any) => {
      if (e && e.srcElement.tagName !== 'BUTTON') {
        let ht = map.hitTest(e);
        if (ht && ht.item) {
          this.selectedName = ht.item.name;

          const code: number = Number(ht.item.fips.toString().slice(2));
          this.selected.emit({ code: code, name: ht.item.name });

          let el = document.elementFromPoint(e.x, e.y);
          let id = el ? el.getAttribute('wj-map:id') : null;
          this.selectedId = id;

          map.layers[0]._clearCache();
          map.invalidate();
        } else {
          //this.selectedName = null;
        }
      }
    });

    let self = this;
    map.rendered.addHandler(function (s, a: any) {
      const layer = map.layers[0];
      const g: SVGGElement = layer._g;
      if (g && self.selectedId) {
        let list = [];
        for (let i = 0; i < g.childNodes.length; i++) {
          const node: any = g.childNodes[i];
          let id = node.getAttribute('wj-map:id');
          if (id === self.selectedId) {
            let sw = isIE() ? 3 * a.engine.scale : 3;
            node.setAttribute('stroke', self.palette[0]);
            node.setAttribute('stroke-width', sw.toString());
            list.push(node);
          }
        }
        list.forEach((el) => el.parentNode.appendChild(el));
      }
    });
  }

  zoomTo(layer: any) {
    this.map.zoomTo(layer.getGeoBBox());
  }

  tooltipContent = (o) => {
    const source = this.currentSource;
    if (source) {
      const val = this.binding(o, source.value);
      if (val) {
        return `<b>${o.name}</b><br>${Globalize.formatNumber(val, source.fmtTooltip)}`;
      }
    }
    return o.name;
  }

  binding(o: any, name: string) {
    const key = Number(o.fips.toString().slice(2));
    const item = this.dataSerivce.getData(key);
    return item ? item[name] : 0;
  }

  selectSource() {
    const source = this.currentSource;
    if (source?.value) {
      this.map.layers[0].colorScale = new ColorScale({
        binding: (o) => this.binding(o.properties, this.currentSource.value),
        colors: Palettes.SequentialSingle.Blues,
        format: this.currentSource.fmtLegend
      });
    } else {
      this.map.layers[0].colorScale = null;
    }

    this.map.layers[0]._clearCache();
    this.map.invalidate();
  }
}
