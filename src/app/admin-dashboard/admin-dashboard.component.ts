import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  @Output()
  userAuthenticated = new EventEmitter<boolean>();
  
  onLogout():void {
    this.userAuthenticated.emit(false);
  }
}
