import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Input() user: User;
  @Output() getCheckDelete = new EventEmitter<Ticket>();
  @Output() getCheckUpdate = new EventEmitter<Ticket>();

  tickets: Ticket[];

  constructor() {}

  ngOnInit() {
    return this.ticket;
  }

  onCheckDelete() {
    this.getCheckDelete.emit();
  }

  onCheckUpdate() {
    this.getCheckUpdate.emit();
  }
}
