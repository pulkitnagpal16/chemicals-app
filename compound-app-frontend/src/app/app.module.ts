import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoundListComponent } from './compound-list/compound-list.component';
import { CompoundDetailsComponent } from './compound-details/compound-details.component';
import { AddformComponent } from './addform/addform.component';
import { FormsModule } from '@angular/forms';
import { UpdateformComponent } from './updateform/updateform.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoundListComponent,
    CompoundDetailsComponent,
    AddformComponent,
    UpdateformComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
