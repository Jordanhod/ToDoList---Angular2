import { Component, OnInit } from '@angular/core';
import {ListItemService} from '../list-item.service.ts'
import {Subject} from 'rxjs';
import {rxjs};

@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.css'],
  Providers: [ListItemService]
})
export class ListInputComponent implements OnInit {

  constructor(private ListItemService:ListItemService) { }


buttonClick() {
this.ListItemService.Update()
}

undoButton(){
this.ListItemService.undoLast()
}


  ngOnInit() {
  }

}
