import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  items: Item[];
  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
