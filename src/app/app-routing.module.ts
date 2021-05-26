import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideosTableComponent } from './components/videos-table/videos-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'videoDetails/:ID/:title/:thumbnail/:uploadDate/:description', component: VideoDetailsComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
