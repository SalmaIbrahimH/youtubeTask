import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProperties } from '../veiwModels/IProperties';
import { map, shareReplay } from 'rxjs/operators';
import { Items } from '../veiwModels/Items';
import { details, Item } from '../veiwModels/videoDetails';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class getVideosAndDetails {
  private cache$!: Observable<Items[]>;
  maxResults = 50;
  constructor(private httpClient: HttpClient) { }
  get videosList() {
    if (!this.cache$) {
      this.cache$ = this.getVideosByChannelId('UCW2ATgwtNrsBrE-piE2TIrA').pipe(
        shareReplay(CACHE_SIZE)
      );
    }    return this.cache$;
  }

  getVideosByChannelId(channel: string): Observable<Items[]> {
    return this.httpClient.get<IProperties>(`${environment.API_URL}search?key=${environment.API_Key}&channelId=${channel}&part=snippet&type=video,id&maxResults=${this.maxResults}`).pipe(
      map(response => response.items))
  }
  getDetailsByVideoId(VidId: string|null): Observable<details> {
    return this.httpClient.get<details>(`${environment.API_URL}videos?key=${environment.API_Key}&part=contentDetails&part=statistics&id=${VidId}`)
  }
}
