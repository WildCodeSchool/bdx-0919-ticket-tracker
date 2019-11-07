import { Ticket } from './../../models/ticket';
import { Routes } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TicketService } from 'src/app/services/ticket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  tickets: Ticket[];
  mary: User = {
    id: 14982,
    firstname: 'Mary',
    lastname: 'Royer',
    avatar:
    // tslint:disable-next-line: max-line-length
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    status: 'student'
  };

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getAll().subscribe((tickets) => {
      this.tickets = tickets.reverse();
    });
  }

  dealWithTabChanged(index) {
    let serverRequest$: Observable<Ticket[]>;
    if (index === 0) {
      serverRequest$ =  this.ticketService
      .getAll();

    } else if (index === 1) {
      serverRequest$ =  this.ticketService
      .filterTicketCursus(178);

    } else if (index === 2) {
      serverRequest$ = this.ticketService
      .filterTicketSchool(5);
    }
    serverRequest$.subscribe((ticketsFromServer: Ticket[]) => {
        this.tickets = ticketsFromServer;
    });
  }
}
