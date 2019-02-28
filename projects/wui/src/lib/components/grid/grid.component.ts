import { Component, OnInit, Input, ContentChildren, EventEmitter, HostListener, Output } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { ContextMenuComponent } from '../context-menu/context-menu.component';

@Component({
  selector: 'wui-grid-column',
  template: ``
})
export class GridColumnComponent implements OnInit {

  @Input() label = '';
  @Input() field = '';
  @Input() template: any;
  @Input() align = 'left';
  @Input() width = 0;
  @Input() customClass = '';

  constructor() { }

  ngOnInit() {}

}

@Component({
  selector: 'wui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  @Input() rowContextMenu: ContextMenuComponent;
  @Input() headerTitle = '';
  @Input() actionItems: Array<any> = [];
  @Input() data: Array<any> = [];
  selectedRow = -1;
  @Input() toolbarTemplate: any;

  showLoading: Boolean = false;
  @Output() scrollEnd: EventEmitter<any> = new EventEmitter();

  @ContentChildren(GridColumnComponent) columns: Array<GridColumnComponent> = [];
  @HostListener('scroll', ['$event']) onScrollEnd(e) {
    if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
      this.scrollEnd.emit(e);
    }
  }

  openLoading() {
    this.showLoading = true;
  }

  closeLoading() {
    this.showLoading = false;
  }

  selectRow(i) {
    this.selectedRow = i;
  }

  getSelectedRow() {
    return this.data[this.selectedRow];
  }

  ngOnInit() {

  }

}