import { Component } from '@angular/core';
import { AccountService } from "app/account.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = [];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private accountService: AccountService){
    this.users = this.accountService.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.accountService.userSetToActive.emit(id);
    this.accountService.setToActive(id);
  }
}
