import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gdash-tile',
  templateUrl: './gdash-tile.component.html',
})
export class GdashTileComponent {
  @Input() header: string;
  @Input() icon: any;
  @Output() tileClick = new EventEmitter<any>();
  @ViewChild('path') path;

  ngAfterViewInit() {
    this.path.nativeElement.setAttribute('d',this.icon);
  }

  handleClick() {
    this.tileClick.emit();
  }
}
