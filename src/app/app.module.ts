import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { SiteDetailsComponent } from './components/site-details/site-details.component';
import { SampleComponent } from './components/sample/sample.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DataItemComponent } from './components/data-item/data-item.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { LabelComponent } from './components/label/label.component';
import { DataSubItemComponent } from './components/data-sub-item/data-sub-item.component';
import { DataFormModalComponent } from './components/data-form-modal/data-form-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchByNamePipe } from './pipes/SearchByName';
import { StdButtonComponent } from './components/std-button/std-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SiteDetailsComponent,
    SampleComponent,
    DataTableComponent,
    DataItemComponent,
    ProgressbarComponent,
    LabelComponent,
    DataSubItemComponent,
    DataFormModalComponent,
    SearchByNamePipe,
    StdButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
