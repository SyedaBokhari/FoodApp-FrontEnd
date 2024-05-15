import { Component } from '@angular/core';
import { User } from '../user.Model';

@Component({
  selector: 'app-end-users',
  templateUrl: './end-users.component.html',
  styleUrls: ['./end-users.component.css']
})
export class EndUsersComponent {

  users: User[] =[];

  constructor(){
    this.users = [{
                    username: 'nosheenbokhari',
                    password: '1234',
                    fullname: 'nosheen bokhari',
                    email: 'nosheenbokhari@gmail.com',
                    address: 'Arizona',
                    credit_card_number: '345345',
                    city: 'gilbert'
                  },
                  {
                    username: 'laraibmansoor',
                    password: '1234',
                    fullname: 'laraib mansoor',
                    email: 'laraibmansoor@gmail.com',
                    address: 'california',
                    credit_card_number: '345345',
                    city: 'sanjose'
                  }
                 ]
  }

}
