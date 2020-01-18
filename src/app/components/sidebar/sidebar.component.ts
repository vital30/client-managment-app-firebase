import { Component, OnInit } from '@angular/core';
import { faTachometerAlt, faUser, faUserFriends, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selectedIndex: number = null;
  sidebar = [
    {
      itemName: "Dashboard",
      router: "/dashboard",
      icon: faTachometerAlt
    },
    {
      itemName: "Clients",
      icon: faUserFriends,
      router: ''
    },
    {
      itemName: "Add New Client",
      icon: faUser,
      router: '/add-client'
    },
    {
      itemName: "Settings",
      icon: faCog,
      router: '/settings'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

  setIndex(index: number) {
    this.selectedIndex = index;
 }

}
