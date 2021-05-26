import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideosTableComponent } from './components/videos-table/videos-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './Pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { HomeComponent } from './components/home/home.component';
import { ConvertISO8601ToMsPipe } from './Pipes/convert-iso8601-to-ms.pipe';
import { FormatPipe } from './Pipes/format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideosTableComponent,
    SearchPipe,
    SpinnerComponent,
    VideoDetailsComponent,
    HomeComponent,
    ConvertISO8601ToMsPipe,
    FormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
