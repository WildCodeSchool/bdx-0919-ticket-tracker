import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ticket } from "../models/ticket";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class TicketService {
  static URL = "https://wild-api.witpoc.com/tickets";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ticket[]> {
    return this.http
      .get(TicketService.URL)
      .pipe(map(this.convertDataFromServerToTicket));
  }

  getById(id: number) {
    return this.http
      .get(TicketService.URL + "/" + id)
      .pipe(map(this.convertDataFromServerToTicket));
  }

  addTicket(ticket: Ticket): Observable<any> {
    return this.http.post(TicketService.URL, ticket);
  }

  private convertDataFromServerToTicket(tickets: any[]): Ticket[] {
    return tickets.map((ticket) => {
      return new Ticket(ticket);
    });
  }
}
