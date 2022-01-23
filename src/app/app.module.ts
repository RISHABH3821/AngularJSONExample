import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { SiteDetailsComponent } from './components/site-details/site-details.component';
import { SampleComponent } from './components/sample/sample.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataItemComponent } from './components/data-item/data-item.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SiteDetailsComponent,
    SampleComponent,
    DataTableComponent,
    DataItemComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
