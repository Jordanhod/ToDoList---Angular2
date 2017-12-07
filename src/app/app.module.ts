import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { ListInputComponent } from './list-input/list-input.component';
import {ListItemService} from './list-item.service.ts'


@NgModule({
  declarations: [
    AppComponent,
    ListBoxComponent,
    ListInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
