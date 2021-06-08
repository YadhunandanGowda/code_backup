import { Component , OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faEdit, faBoxOpen,
  faHeart, faPowerOff, faBell, faPhoneAlt, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faBoxOpen = faBoxOpen;
  faHeart = faHeart;
  faPowerOff = faPowerOff;
  faBell = faBell;
  faPhoneAlt = faPhoneAlt;
  faCog = faCog;
  faShoppingCart = faShoppingCart;
  constructor() { }

  ngOnInit(): void {
  }

}
