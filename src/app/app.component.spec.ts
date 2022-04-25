import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';
import { WjChartMapModule } from '@grapecity/wijmo.angular2.chart.map';
import { AppComponent } from './app.component';
import { DataService } from './services/data-service';
import { GdashTileComponent } from './components/gdash-tile.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        WjInputModule,
        WjChartModule,
        WjChartMapModule,
        WjGaugeModule
      ],
      providers: [DataService],
      declarations: [
        AppComponent,
        //EsriMapComponent,
        //EsriCrosshairComponent,
        //EsriLegendComponent,
        GdashTileComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.header h3').textContent).toContain('Wijmo GeoDashboard');
  });
});
