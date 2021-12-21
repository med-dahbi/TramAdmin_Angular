import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/lignes', title: 'Lignes', icon: ' ni-bus-front-12 text-blue', class: '' },
  { path: '/stations', title: 'Stations', icon: 'ni-button-pause text-blue', class: '' },
  { path: '/voyages', title: 'Voyages', icon: 'ni-briefcase-24 text-blue', class: '' },
  { path: '/point-vente', title: 'Points de vente', icon: 'ni-fat-delete text-blue', class: '' },
  { path: '/function', title: 'Fonctions', icon: 'ni-controller text-blue', class: '' },
  { path: '/employe', title: 'Liste des employes', icon: 'ni-collection text-blue', class: '' },
  { path: '/clients', title: 'Liste des clients normaux', icon: 'ni-circle-08 text-blue', class: '' },
  { path: '/abonnemets', title: 'Liste des clients abonnes', icon: 'ni-badge text-blue', class: '' },

  // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
 // { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' },
 // { path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '' },
//  { path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '' },
//  { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
 // { path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
