import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(
    public itemService: ItemService,
    public authService: AuthService) { }

  ngOnInit() {
  }

}
