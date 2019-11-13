import { UserService } from './../../services/user.service';
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
  tickets: Ticket[];
  user: User;

  constructor(
    private ticketService: TicketService,
    private userService: UserService
  ) {}

  ngOnInit(): any {
    this.ticketService.getAll().subscribe((tickets) => {
      this.tickets = tickets;
    });
    this.userService.getUser()
    .subscribe((user: User) => {
      this.user = user;
    });
    console.log(this.user);
  }

  dealWithTabChanged(index) {
    let serverRequest$: Observable<Ticket[]>;
    if (index === 0) {
      serverRequest$ = this.ticketService.getAll();
    } else if (index === 1) {
      serverRequest$ = this.ticketService.filterTicketCursus(178);
    } else if (index === 2) {
      serverRequest$ = this.ticketService.filterTicketSchool(5);
    }
    serverRequest$.subscribe((ticketsFromServer: Ticket[]) => {
      this.tickets = ticketsFromServer;
    });
  }
}
