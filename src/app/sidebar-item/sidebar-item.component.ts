import { CdkDragDrop, CdkDropList, CdkDragEnter } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DriveItem } from '../models';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemComponent {
  onDrag = false;

  @Input() item: DriveItem;

  @Output() drop = new EventEmitter<{ from: DriveItem; to: DriveItem }>();

  setOnDragTrue(event: CdkDragEnter<DriveItem>) {
    if (event.item.data.name === this.item.name) {
      return;
    }

    this.onDrag = true;
  }

  setOnDragFalse() {
    this.onDrag = false;
  }

  handleDrop(event: CdkDragDrop<DriveItem>) {
    this.setOnDragFalse();

    this.drop.emit({
      from: event.previousContainer.data,
      to: event.container.data,
    });
  }
}
