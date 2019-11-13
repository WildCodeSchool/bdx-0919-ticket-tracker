import { Ticket } from 'src/app/models/ticket';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Input() user: User;
  @Output() getCheckEdit = new EventEmitter<Ticket>();
 

  constructor() {}

  tickets: Ticket[];

  ngOnInit() {
    return this.ticket;
  }

  onCheckEdit($event) {
    this.getCheckEdit.emit($event)
  }
}
