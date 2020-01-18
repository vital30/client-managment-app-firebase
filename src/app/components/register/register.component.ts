import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Clients } from '../../models/client';
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string;
  password:string;

  constructor(
    private auth: AuthServiceService,
    public flash: NgFlashMessageService,
    public route: Router,
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.auth.register(this.email, this.password)
    .then((res)=> {
      this.flash.showFlashMessage({ messages: ['Registration Succesfull'], timeout : 4000,   type: 'success'});
      this.route.navigate(['/']);
    })
    .catch((err) =>{
      this.flash.showFlashMessage({ messages: ['Registration Error'], timeout : 4000,   type: 'danger'});
      this.route.navigate(['/register']);
    });
  }

}
