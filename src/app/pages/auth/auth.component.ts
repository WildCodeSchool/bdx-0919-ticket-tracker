import { WsHelperService } from './../../services/ws-helper.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private wshelper: WsHelperService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe((data) => {
      const token = data.get('token');
      localStorage.setItem('TOKEN', JSON.stringify(token));
      this.wshelper.setToken(token);

      this.userService.getUser().subscribe(() => {
        console.log(this.userService.user);
        this.router.navigate(['/user']);
      });
    });
  }

}
