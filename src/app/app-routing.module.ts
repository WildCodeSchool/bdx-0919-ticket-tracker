import { AuthComponent } from "./pages/auth/auth.component";
import { NgModule } from "@angular/core";
import { FormComponent } from "./pages/form/form.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { UserComponent } from "./pages/user/user.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "auth/:token", component: AuthComponent },
  { path: "user", component: UserComponent },
  { path: "form", component: FormComponent },
  { path: "edit/:id", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
