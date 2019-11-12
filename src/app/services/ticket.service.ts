import { UserService } from './user.service';
import { WsHelperService } from './ws-helper.service';
import { User } from 'src/app/models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  // static URL = 'https://wild-api.witpoc.com/tickets';

  static URL = 'https://wild-api.witpoc.com/tickets-secure';
  constructor(private wshelper: WsHelperService, private userService: UserService) {}

  public getAll(): Observable<Ticket[]> {
    return this.wshelper
      .get(TicketService.URL)
      .pipe(map(this.convertDataFromServerToTickets));
  }

  public getById(id: number): Observable<any> {
    return this.wshelper
      .get(TicketService.URL + '/' + id)
      .pipe(map((ticket: Ticket) => new Ticket(ticket)));
  }

  public createTicket(ticket: Ticket): Observable<any> {
    ticket.user = this.userService.user;
    return this.wshelper.post(TicketService.URL, ticket);
  }

  private convertDataFromServerToTickets(tickets: any[]): Ticket[] {
    return tickets.map((ticket) => {
      return new Ticket(ticket);
    });
  }

  deleteTicket(id: number): Observable<any> {
    return this.wshelper.delete(TicketService.URL + `/${id}`);
  }

  filterTicketCursus(id: number): Observable<any> {
    return this.wshelper.get(
      TicketService.URL + `?filter=group||eq||${id}&join=group`
    );
  }

  filterTicketSchool(id: number): Observable<any> {
    return this.wshelper.get(
      TicketService.URL + `?filter=school||eq||${id}&join=school`
    );
  }
}
