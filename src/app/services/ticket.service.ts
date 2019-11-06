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

  constructor(private http: HttpClient) {}

  setToken(token: string) {
    this.token = token;
  }

  public getAll(): Observable<Ticket[]> {
    const headers =  new HttpHeaders({Authorization: 'Bearer ' + this.token});

    return this.http
      .get(TicketService.URL, {headers})
      .pipe(map(this.convertDataFromServerToTickets));
  }

  public getById(id: number) {
    return this.http
      .get(TicketService.URL + '/' + id)
      .pipe(map(this.convertDataFromServerToTickets));
  }

  public createTicket(ticket: Ticket): Observable<any> {
    ticket.user = ({id: 4} as User);
    return this.http.post(TicketService.URL, ticket);
  }

  private convertDataFromServerToTickets(tickets: any[]): Ticket[] {
    return tickets.map((ticket) => {
      return new Ticket(ticket);
    });
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(TicketService.URL + `/${id}` );
  }
}
