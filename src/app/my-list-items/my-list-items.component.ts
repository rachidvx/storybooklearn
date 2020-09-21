import { Component, OnInit } from '@angular/core';

import {MyListItemsService} from './my-list-items.service'

@Component({
  selector: 'app-my-list-items',
  templateUrl: './my-list-items.component.html',
  styleUrls: ['./my-list-items.component.sass']
})
export class MyListItemsComponent implements OnInit {
  myvehicles: string[];

  constructor(private vehicles: MyListItemsService) { }
  

  ngOnInit(): void {
    this.myvehicles = this.vehicles.Items;
  }

}
