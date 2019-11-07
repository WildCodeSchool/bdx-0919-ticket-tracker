import { WsHelperService } from "./ws-helper.service";
import { User } from "src/app/models/user";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ticket } from "../models/ticket";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TicketService {
  static URL = "https://wild-api.witpoc.com/tickets-secure";
  constructor(private wshelper: WsHelperService) {}

  public getAll(): Observable<Ticket[]> {
    return this.wshelper
      .get(TicketService.URL)
      .pipe(map(this.convertDataFromServerToTickets));
  }

  public getById(id: number) {
    return this.wshelper
      .get(TicketService.URL + "/" + id)
      .pipe(map(this.convertDataFromServerToTickets));
  }

  public createTicket(ticket: Ticket): Observable<any> {
    ticket.user = { id: 14982 } as User;
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
}
