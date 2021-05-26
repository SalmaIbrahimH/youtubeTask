import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  @ViewChild(HeaderComponent, { static: false })
  title = 'youtubeTask';
  sendedSearchText ='';

  emptySearchText = '';

  SearchTextToHeader($event: any) {
    this.emptySearchText = $event;
  }



  searchTextToTable($event: any) {
    this.sendedSearchText = $event;
  }


}
