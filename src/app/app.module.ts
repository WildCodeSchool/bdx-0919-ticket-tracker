
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { ComponentsModule } from './components/components.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './pages/user/user.component';
import { AvatarComponent } from './pages/user/avatar/avatar.component';
import { TabComponent } from './pages/user/tab/tab.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { FormComponent } from './pages/form/form.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, UserComponent, AvatarComponent, TabComponent, TicketListComponent,
    FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,

    HttpClientModule,
    ComponentsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
