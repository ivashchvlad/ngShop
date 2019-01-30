import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../services/item.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  @Input() currentItem: Item;
  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentItem = this.itemService.getById(params.id);
      if (!this.currentItem) {
        this.router.navigate(['/404']);
      }
      console.log(this.currentItem);
    });
  }

}
