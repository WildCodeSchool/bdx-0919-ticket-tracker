import { UserService } from './user.service';
import { WsHelperService } from './ws-helper.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private wshelper: WsHelperService, private userService: UserService) {}

  static URL = 'https://wild-api.witpoc.com/tickets-secure';

  // static URL = 'https://wild-api.witpoc.com/tickets';
  private token: string;

  public getAll(): Observable<Ticket[]> {
    return this.wshelper
      .get(TicketService.URL + `?sort=createdAt,DESC`)
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
      TicketService.URL + `?filter=group||eq||${id}&sort=createdAt,DESC&join=group`
    );
  }

  filterTicketSchool(id: number): Observable<any> {
    return this.wshelper.get(
      TicketService.URL + `?filter=school||eq||${id}&sort=createdAt,DESC&join=school`
    );
  }
}
