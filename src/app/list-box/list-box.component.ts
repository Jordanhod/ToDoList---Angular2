import { Component, OnInit Input} from '@angular/core';
import {ListItemService} from '../list-item.service'
import {Subject} from 'rxjs';
import {rxjs};

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css'],
  Providers: [ListItemService]
})
export class ListBoxComponent implements OnInit {

constructor(private ListItemInstance:ListItemService) { }


  ngOnInit() {
  }

}
