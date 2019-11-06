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
  static URL = 'https://wild-api.witpoc.com/tickets-secure';
  private token: string;

  constructor(private wshelper: WsHelperService) {}


  public getAll(): Observable<Ticket[]> {
    return this.wshelper
      .get(TicketService.URL)
      .pipe(map(this.convertDataFromServerToTickets));
  }

  public getById(id: number) {
    return this.wshelper
      .get(TicketService.URL + '/' + id)
      .pipe(map(this.convertDataFromServerToTickets));
  }

  public createTicket(ticket: Ticket): Observable<any> {
    ticket.user = ({id: 4} as User);
    return this.wshelper.post(TicketService.URL, ticket);
  }

  private convertDataFromServerToTickets(tickets: any[]): Ticket[] {
    const headers =  new HttpHeaders({Authorization: 'Bearer ' + this.token});
    return tickets.map((ticket) => {
      return new Ticket(ticket);
    });
  }

  deleteTicket(id: number): Observable<any> {
    const headers =  new HttpHeaders({Authorization: 'Bearer ' + this.token});
    return this.wshelper.delete(TicketService.URL + `/${id}` );
  }
}
