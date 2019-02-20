import { CdkDragDrop, CdkDragEnter } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DriveItem } from '../models';

@Component({
  selector: 'app-drive-list-item',
  templateUrl: './drive-list-item.component.html',
  styleUrls: ['./drive-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriveListItemComponent {
  isDragging = false;
  onDrag = false;

  @Input() driveItem: DriveItem;

  @Output() drop = new EventEmitter<{ from: DriveItem; to: DriveItem }>();

  setOnDragTrue(event: CdkDragEnter<DriveItem>) {
    if (this.driveItem.type === 'file') {
      return;
    }
    if (event.item.data.name === this.driveItem.name) {
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
