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
  constructor(
    private wshelper: WsHelperService,
    private userService: UserService
  ) {}

  static URL = 'https://wild-api.witpoc.com/tickets-secure';

  static editURL = 'https://wild-api.witpoc.com/tickets-secure/ticket/';

  formButton: boolean;
  adminButton: boolean;
  studentButton: boolean;

  // static URL = 'https://wild-api.witpoc.com/tickets';
  private token: string;

  public getAll(): Observable<Ticket[]> {
    return this.wshelper
      .get(
        TicketService.URL +
          `?filter=status||eq||terminated&filter=user||eq||${this.userService.user.id}&sort=createdAt,DESC`
      )
      .pipe(map(this.convertDataFromServerToTickets));
  }

  public getById(id: number): Observable<any> {
    return this.wshelper
      .get(TicketService.editURL + id)
      .pipe(map((ticket: Ticket) => new Ticket(ticket)));
  }

  public createTicket(ticket: Ticket): Observable<any> {
    ticket.user = this.userService.user;
    return this.wshelper.post(TicketService.URL, ticket);
  }

  private convertDataFromServerToTickets(tickets: any[]): Ticket[] {
    return tickets.map(ticket => {
      return new Ticket(ticket);
    });
  }

  public updateTicket(ticket: Ticket): Observable<any> {
    return this.wshelper.put(TicketService.URL + `/${ticket.id}`, ticket);
  }

  deleteTicket(id: number): Observable<any> {
    return this.wshelper.delete(TicketService.URL + `/${id}`);
  }

  filterTicketCursus(): Observable<any> {
    return this.wshelper.get(
      TicketService.URL +
        `?filter=status||in||waiting,inprogress&join=group`
    );
  }

  filterTicketSchool(): Observable<any> {
    return this.wshelper.get(
      TicketService.URL +
        `?filter=status||in||waiting,inprogress,DESC&join=school`
    );
  }

  filterTicketWaiting(): Observable<any> {
    return this.wshelper.get(
      TicketService.URL + '?filter=status||eq||waiting'
    );
  }

  filterTicketInProgress(): Observable<any> {
    return this.wshelper.get(
      TicketService.URL + '?filter=status||eq||inprogress'
    );
  }

  filterTicketDone(): Observable<any> {
    return this.wshelper.get(
      TicketService.URL + '?filter=status||eq||terminated&sort=createdAt,DESC'
    );
  }
}
