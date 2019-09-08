import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../item';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  items: Item[];
  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(res => this.items = res.slice(res.length - 3));
  }
}
