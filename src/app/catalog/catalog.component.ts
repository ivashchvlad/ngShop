import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  items: any;
  byNameChecked: boolean;
  reverse = true;
  sortOrder: any = 'name';
  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  setOrder(val) {
    if (this.sortOrder === val) {
      this.reverse = !this.reverse;
    }
    this.sortOrder = val;
  }
}
