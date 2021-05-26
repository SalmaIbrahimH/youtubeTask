import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() emtySearch='';
  @Output() transferText = new EventEmitter<any>();

  currenttransferText = '';

  msgToSib() {
    this.transferText.emit(this.currenttransferText);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
