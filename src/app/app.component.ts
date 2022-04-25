import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DataService } from './services/data-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    selectedSource = null;            // tiles for a given info source
    detailed = false;
    palette = ['#00b075', '#f8ce45', '#ecf0ee'];
    selectedName: string;
    selectedData: any;
    dataUS: any;

    private dataSerivce: DataService;

    constructor(@Inject(DataService) dataService: DataService) {
        this.dataSerivce = dataService;
    }

    ngOnInit() {
      this.dataSerivce.init( () => {
        this.selectedName = 'US';
        this.dataUS = this.selectedData = this.dataSerivce.getData(0);
      });
    }

    mapSelected(item) {
      this.selectedName = item.name;
      this.selectedData = this.dataSerivce.getData(item.code);
    }
}