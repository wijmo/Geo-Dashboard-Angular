import { httpRequest } from '@grapecity/wijmo';
import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataService {
  private dataMap = new Map();

  init(ready) {
    httpRequest('assets/data/popUS.json', {
      success: xhr => {
        JSON.parse(xhr.responseText).forEach(el => this.dataMap.set(el.state, el));
        ready();
      }
    });
  }

  getData(code) {
    return this.dataMap.get(code);
  }
}
