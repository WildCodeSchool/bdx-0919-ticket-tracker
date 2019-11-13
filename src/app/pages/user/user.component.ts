import { UserService } from './../../services/user.service';
import { Ticket } from './../../models/ticket';
import { Router, ActivatedRoute } from '@angular/router';
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
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): any {
    this.ticketService.getAll().subscribe((tickets) => {
      this.tickets = tickets;
    });
    this.user = this.userService.user;
    console.log(this.user);
  }
  deconnection() {
    localStorage.clear();
    this.router.navigate(['/home']);
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
