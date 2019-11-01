import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  item: Item = {
    title: '',
    description: ''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

onSubmit() {
  // tslint:disable-next-line: triple-equals
  if(this.item.title != '' && this.item.description != ''){
    this.itemService.addItem(this.item);
    this.item.title = '';
    this.item.description = '';
  }
}

}
