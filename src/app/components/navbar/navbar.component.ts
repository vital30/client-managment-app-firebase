import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  loggedInUser:string;
  showRegister:boolean; 
  constructor(
    private authService: AuthServiceService,
    public route: Router,
    private flash: NgFlashMessageService,
    public settings: SettingsService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      else{
        this.isLoggedIn = false;
      }
    });
    this.showRegister = this.settings.getSettings().allowRegistration;
  }
  onLogOut(){
    this.authService.logout();
    this.flash.showFlashMessage({ messages: ['You are Logged Out'], timeout : 4000,   type: 'success'});
    this.route.navigate(['/login']);
  }

}
