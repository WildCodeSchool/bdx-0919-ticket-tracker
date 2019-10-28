import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  router: Router;
  constructor(private ticketService: TicketService) {}

  ngOnInit() {
  }
  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
  }
  onFormSubmit(userForm: NgForm) {
    console.log(userForm);
  }
  createTicket(newTicket: Ticket) {
    this.ticketService.addTicket(newTicket).subscribe(() => {
      this.router.navigate(['/user']);
    });
  }
}
