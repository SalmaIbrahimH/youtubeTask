import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getVideosAndDetails } from 'src/app/services/getVideosAndDetails.service';
import { Item } from 'src/app/veiwModels/videoDetails';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  videoID: string | null = '';
  title: string | null = '';
  uploadDate: string | null = '';
  thumbnail: string | undefined;
  description: string | null = '';
  vidItem: Item[] = []

  calculatedDuration = 0
  constructor(private router: ActivatedRoute, private vidService: getVideosAndDetails) { }

  ngOnInit(): void {
    this.videoID = this.router.snapshot.paramMap.get("ID")
    this.vidService.getDetailsByVideoId(this.videoID).subscribe((res) => {

      this.vidItem = res.items;
      console.log(this.vidItem)
    }, (err) => console.log(err)
    )
    this.title = this.router.snapshot.paramMap.get("title");
    this.description = this.router.snapshot.paramMap.get("description");
    this.uploadDate = this.router.snapshot.paramMap.get("uploadDate");
    let url = this.router.snapshot.paramMap.get("thumbnail");
    this.thumbnail = url?.split(",").join("/")
  }


}
