import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';
import { MyListItemsComponent } from './my-list-items/my-list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitBtnComponent,
    MyListItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
