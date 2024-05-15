import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  email: string = "";
  password: string ="";

  @Output()
  userAuthenticated = new EventEmitter<boolean>();

  onValidate():void{

    console.log(`Email: ${ this.email }, Password: ${ this.password }`)

    this.userAuthenticated.emit(true);
  }

}
 
