import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'wui-top-bar-item',
  template: `
    <span class="mdi mdi-{{icon}} {{(caption.length>0?'has-caption':'')}}" *ngIf="icon.length>0"></span>
    <ng-container *ngIf="caption.length>0">{{caption}}</ng-container>
  `,
  styles: [`
    span.mdi.has-caption{
      margin-right: .5rem;
    }
  `]
})
export class TopBarItemComponent implements OnInit {

  @Input() icon: String = '';
  @Input() caption: String = '';
  @Output() wuiClick: EventEmitter<any> = new EventEmitter();
  @HostListener('click', ['$event']) onclick(e) {
    setTimeout(() => {
      this.wuiClick.emit(e);
    }, 200);
  }

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'wui-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}