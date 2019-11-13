import { UserComponent } from './pages/user/user.component';
import { TicketsGuard } from './services/tickets.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { NgModule } from '@angular/core';
import { FormComponent } from './pages/form/form.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'auth/:token', component: AuthComponent},
  { path: 'user', component: UserComponent, canActivate: [TicketsGuard] },
  { path: 'form', component: FormComponent, canActivate: [TicketsGuard] },
  { path: 'edit/:id', component: FormComponent, canActivate: [TicketsGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
