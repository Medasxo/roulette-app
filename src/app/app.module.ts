import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StatisticsBlockComponent } from './components/statistics-block/statistics-block.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EventBlockComponent } from './components/event-block/event-block.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { ActionsLogComponent } from './components/actions-log/actions-log.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatisticsBlockComponent,
    HomePageComponent,
    EventBlockComponent,
    GameboardComponent,
    ActionsLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
