import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  static URL = 'https://wild-api.witpoc.com/tickets';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(TicketService.URL);
  }

  getById(id: number) {
    return this.http.get(TicketService.URL + '/' + id);
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(TicketService.URL + `/${id}` );
  }
}
