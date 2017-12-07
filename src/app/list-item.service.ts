import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {rxjs};

@Injectable()
export class ListItemService {

num:number = 0;
newItem:string = '';
items = [];
alert:string = '';


itemNum (value){
  this.num = value;
}

inputText(value) {
  this.newItem = value;
}

Update() {
  if this.num > 0 {
  this.alert = ''; 
  this.items[this.num-1] = this.newItem;
  console.log("item placed in row" + this.num)
  console.log(this.items)}
  else {this.alert = "Please Pick a Number!"; this.currentStatus ();}
}

currentStatus (){
 console.log("current status:");
 console.log(this.items);
}

undoLast(){
  this.items[this.num-1] = '';
  console.log(this.items);
}

  constructor() { }

}
