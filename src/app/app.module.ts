import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import { AdminComponent } from './admin/admin.component';
import { TournamentlistComponent } from './tournamentlist/tournamentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TournamentlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
    ,
      RouterModule.forRoot([
        {path: 'admin', component: AdminComponent },
        {path: 'tournaments', component: TournamentlistComponent},
        {path: '', component: TournamentlistComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
