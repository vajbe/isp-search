import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeadCompComponent } from './head-comp/head-comp.component';
import { DashlistComponent } from './dashlist/dashlist.component';
import { DashdescComponent } from './dashdesc/dashdesc.component';
import { SortCompComponent } from './sort-comp/sort-comp.component';
import { OptionsCompComponent } from './options-comp/options-comp.component';

import { ProviderService } from './shared/provider.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptService } from './shared/intercept.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeadCompComponent,
    DashlistComponent,
    DashdescComponent,
    SortCompComponent,
    OptionsCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
