import { Component } from '@angular/core';
import { AccountService } from "app/account.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers:[]
})
export class ActiveUsersComponent {
  users: string[] = [];

  constructor(private accountService: AccountService){
    this.users = this.accountService.activeUsers;
    console.log(this.users);
  }

  onSetToInactive(id: number) {
    this.accountService.setToInactive(id);
  }
}
