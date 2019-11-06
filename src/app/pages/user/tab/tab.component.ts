import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Ticket } from './../../../models/ticket';
import { User } from './../../../models/user';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() user: User;
  tickets: Ticket[];

  @Output() tabChanged = new EventEmitter<number>();

  private userList = [
    'Tous les tickets',
    'Tickets cursus',
    'Tickets administration'
  ];
  private adminList = ['En attente', 'En cours', 'Traités'];
  selectedList: string[];
  indexClicked = 0;
  response;
  constructor() {}

  ngOnInit() {
    if (this.user.status === 'student') {
      this.selectedList = this.userList;
    } else {
      this.selectedList = this.adminList;
    }


  }

  defineIndex(index) {
    this.indexClicked = index;
    this.tabChanged.emit(index);
    }


  }


