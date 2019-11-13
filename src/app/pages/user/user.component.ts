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
      this.ticketService.getAll().subscribe((tickets) => {
        this.tickets = tickets;
      });
    } else {
      this.ticketService.filterTicketWaiting().subscribe((tickets) => {
        this.tickets = tickets;
      });
    }
  }

  onCheckUpdate() {
    this.dealWithTabChanged(0);
  }

  deconnection() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  dealWithTabChanged(index) {
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
      } else if (index === 1) {
        serverRequest$ = this.ticketService.filterTicketInProgress();
      } else if (index === 2) {
        serverRequest$ = this.ticketService.filterTicketDone();
      }
    }
    serverRequest$.subscribe((ticketsFromServer: Ticket[]) => {
      this.tickets = ticketsFromServer;
    });
  }
}
