import { User } from './../../../models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() user: User;
  userList = ['Tous les tickets', 'Tickets cursus', 'Tickets administration'];
  adminList = ['En attente', 'En cours', 'Traités'];
  constructor() {}

  ngOnInit() {}

  firstTab() {
    if (this.user.status === 'student') {
      return this.userList[0];
    } else {
      return this.adminList[0];
    }
  }

  secondTab() {
    if (this.user.status === 'student') {
      return this.userList[1];
    } else {
      return this.adminList[1];
    }
  }

  thirdTab() {
    if (this.user.status === 'student') {
      return this.userList[2];
    } else {
      return this.adminList[2];
    }
  }
}
