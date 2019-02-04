import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  @Input() currentItem: Item;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemService.getById(params.id).subscribe(item => {
        this.currentItem = item;
      },
      err => {
        this.router.navigate(['/404']);
        console.log(err);
      });
      console.log(this.currentItem);
    });
  }
}
