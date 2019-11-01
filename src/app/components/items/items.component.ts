import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

items: Item[];

  constructor( public itemService: ItemService) { }

  ngOnInit() {

    this.itemService.getItems().subscribe(items => {
      // console.log(items);
      this.items = items;
    });

  }

  

}
