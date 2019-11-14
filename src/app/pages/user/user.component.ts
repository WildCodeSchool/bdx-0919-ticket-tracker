import { UserService } from './../../services/user.service';
import { Ticket } from '../../models/ticket';
import { Router } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit, Input } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
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
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): any {

    this.user = this.userService.user;
    if (this.user.role === 'student') {
      this.ticketService.filterTicketCursus().subscribe((tickets) => {
        this.tickets = tickets;
      });
    } else {
      this.ticketService.filterTicketWaiting().subscribe((tickets) => {
        this.tickets = tickets;
      });
    }
    this.ticketService.formButton = true;
    this.ticketService.adminButton = true;
  }

  onCheckUpdate() {
    this.dealWithTabChanged(0);
  }

  dealWithTabChanged(index: number) {
    let serverRequest$: Observable<Ticket[]>;
    if (this.user.role === 'student') {
      if (index === 0) {
        serverRequest$ = this.ticketService.filterTicketCursus();
      } else if (index === 1) {
        serverRequest$ = this.ticketService.filterTicketSchool();
      } else if (index === 2) {
        serverRequest$ = this.ticketService.getAll();
      }
    } else {
      if (index === 0) {
        serverRequest$ = this.ticketService.filterTicketWaiting();
        this.ticketService.adminButton = true;
      } else if (index === 1) {
        serverRequest$ = this.ticketService.filterTicketInProgress();
        this.ticketService.adminButton = true;
      } else if (index === 2) {
        serverRequest$ = this.ticketService.filterTicketDone();
        this.ticketService.adminButton = false;
      }
    }
    serverRequest$.subscribe((ticketsFromServer: Ticket[]) => {
      this.tickets = ticketsFromServer;
    });
  }
}
