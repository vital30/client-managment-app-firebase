import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Clients } from '../../models/client';
import { AuthServiceService } from '../../services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  
  constructor(
    private auth: AuthServiceService,
    public flash: NgFlashMessageService,
    public route: Router,
  ) { }


  ngOnInit() {
  }
  onSubmit(){
    this.auth.login(this.email, this.password)
    .then((res) => {
      this.flash.showFlashMessage({ messages: ['Login Succesful'], timeout : 4000,   type: 'success'});
      this.route.navigate(['/']);
    })
    .catch((err) => {
      this.flash.showFlashMessage({ messages: [err.message], timeout : 4000,   type: 'danger'});
      this.route.navigate(['/login']);
    })
  }
}
