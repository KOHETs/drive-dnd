import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { defer, merge, Observable } from 'rxjs';
import { driveItemData } from '../data';
import { DriveListItemComponent } from '../drive-list-item/drive-list-item.component';
import { DriveItem } from '../models';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drive-list',
  templateUrl: './drive-list.component.html',
  styleUrls: ['./drive-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriveListComponent implements AfterViewInit, OnDestroy {
  private onDestroy$ = new EventEmitter<void>();
  private dropEvent$: Observable<{ from: DriveItem; to: DriveItem }> = defer(
    () => merge(...this.items.map(item => item.drop)),
  );

  driveItems = driveItemData;

  @ViewChildren(DriveListItemComponent) items: QueryList<
    DriveListItemComponent
  >;

  @Output() drop = new EventEmitter<{ from: DriveItem; to: DriveItem }>();

  ngOnDestroy() {
    this.onDestroy$.emit();
  }

  ngAfterViewInit() {
    this.dropEvent$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe($event => this.drop.emit($event));
  }
}
