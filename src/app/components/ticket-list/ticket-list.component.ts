import { User } from './../../models/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  newTicket: Ticket;
  @Input() tickets: Ticket[];
  @Input() user: User;
  @Output() getCheckUpdate = new EventEmitter<Ticket>();

  constructor() {}

  ngOnInit() {
    return this.tickets;
  }

  onCheckDelete(indexDanslaList: number) {
    this.tickets.splice(indexDanslaList, 1);
  }

  onCheckUpdate($event) {
    this.getCheckUpdate.emit($event);
  }
}
