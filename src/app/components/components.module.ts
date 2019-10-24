import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TicketComponent } from './ticket/ticket.component';






@NgModule({
  declarations: [TicketComponent, MatCardModule],
  imports: [
    CommonModule,

  ],

})
export class ComponentsModule { }
