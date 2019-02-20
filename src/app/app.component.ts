import { Component } from '@angular/core';
import { DriveItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'drive-dnd';

  fromTo: { from?: DriveItem; to?: DriveItem } = {};

  drop(event: { from: DriveItem; to: DriveItem }) {
    if (event.from.name === event.to.name) {
      return;
    }
    if (event.to.type === 'file') {
      return;
    }
    this.fromTo = event;
  }
}
