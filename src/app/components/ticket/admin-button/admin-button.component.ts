import { TicketService } from './../../../services/ticket.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.scss']
})
export class AdminButtonComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() getCheckUpdate = new EventEmitter<Ticket>();
  adminButton = this.ticketService.adminButton;
  constructor(private ticketService: TicketService, router: Router) {}

  ngOnInit() {}

  isInProgress() {
    this.ticket.status = 'inprogress';
    this.ticketService.updateTicket(this.ticket).subscribe((data: Ticket) => {
      this.getCheckUpdate.emit(data);
    });
  }

  isDone() {
    this.ticket.status = 'terminated';
    this.ticketService.updateTicket(this.ticket).subscribe((data: Ticket) => {
      this.getCheckUpdate.emit(data);
    });
  }
}
