import { WsHelperService } from './ws-helper.service';
import { User } from 'src/app/models/user';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(private wshelper: WsHelperService) { }


  getUser() {
    return this.wshelper.get('https://wild-api.witpoc.com/users/me')
                .pipe(map((decryptedToken: any) => decryptedToken.payload as User),
                  tap((user: User) => this.user = user),
                  map ((user) => true)
                  );
  }
}
