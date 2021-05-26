import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getVideosAndDetails } from 'src/app/services/getVideosAndDetails.service';
import { Items } from 'src/app/veiwModels/Items';

@Component({
  selector: 'app-videos-table',
  templateUrl: './videos-table.component.html',
  styleUrls: ['./videos-table.component.scss']
})
export class VideosTableComponent implements OnInit {
  @Input() sendedSearchText = '';
  @Output() transferText = new EventEmitter<any>();

  isDesc: boolean = false;
  column: string = '';
  emptyTheSearch = '';



  vidItems: Observable<Items[]> = new Observable;
  itemslist: Items[] = [];
  p: number = 1;
  count: number = 5;

  constructor(private vidService: getVideosAndDetails,private router:Router) { }

  ngOnInit(): void {
       this.vidItems = this.vidService.videosList;
     this.vidItems.forEach(element => {
       this.itemslist = element
     });

  }

  //sorting the table by coulmns
  sort(column: string) {
    this.isDesc = !this.isDesc;
    let direction = this.isDesc ? 1 : -1;
    if (column === 'title')
      this.itemslist.sort(function (a, b) {
        if (a.snippet.title < b.snippet.title) {
          return -1 * direction;
        }
        else if (a.snippet.title > b.snippet.title) {
          return 1 * direction;
        }
        else {
          return 0;
        }
      });
    else if (column === 'publishTime')
      this.itemslist.sort(function (a, b) {
        if (a.snippet.publishTime < b.snippet.publishTime) {
          return -1 * direction;
        }
        else if (a.snippet.publishTime > b.snippet.publishTime) {
          return 1 * direction;
        }
        else {
          return 0;
        }
      });
  }
resetSearchBox(){
  this.sendedSearchText='';
  this.emptyTheSearch='';
}
resetSearchToHeader() {
  this.transferText.emit(this.emptyTheSearch);
}
navigateToDetails(vid:Items){
let theId=vid.id.videoId;
let title=vid.snippet.title;
let date=vid.snippet.publishedAt
let description=vid.snippet.description
let thumbnail=vid.snippet.thumbnails.high.url.split("/");
  this.router.navigate( [`/videoDetails/${theId}/${title}/${thumbnail}/${date}/${description}`]);
}
}
