import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StatisticsBlockComponent } from './components/statistics-block/statistics-block.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EventBlockComponent } from './components/event-block/event-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatisticsBlockComponent,
    HomePageComponent,
    EventBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
