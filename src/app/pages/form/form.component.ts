import { Ticket } from 'src/app/models/ticket';
import { TicketService } from './../../services/ticket.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private ticketService: TicketService, private router: Router) {}
  newTicket: Ticket = new Ticket();

  ngOnInit() {
  }
  onReset(createTicket: NgForm) {
    createTicket.resetForm();
  }
  onFormSubmit(newTicket: Ticket) {
    console.log(this.newTicket);
    //this.ticketService.addTicket(newTicket).subscribe(() => {
    this.router.navigate(['/user']);
   // });
  }
  onClose() {
    this.router.navigate(['/user']);
  }
}