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
import { takeUntil } from 'rxjs/operators';
import { folderData } from '../data';
import { DriveItem } from '../models';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  private onDestroy$ = new EventEmitter<void>();
  private dropEvent$: Observable<{ from: DriveItem; to: DriveItem }> = defer(
    () => merge(...this.items.map(item => item.drop)),
  );

  folders = folderData;

  @ViewChildren(SidebarItemComponent) items: QueryList<SidebarItemComponent>;

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
