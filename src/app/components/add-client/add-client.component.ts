import { Component, OnInit } from '@angular/core';
import { Clients } from '../../models/client';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Clients = {
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  }
  constructor(
    public  flash: NgFlashMessageService, 
    public router: Router, 
    public clientService: ClientService,
    public settings: SettingsService
  ) { }

  ngOnInit() {
  };
  onSubmit({value, valid} : {value: Clients, valid:boolean}){
    if(!valid){
      this.flash.showFlashMessage({ messages: ['Some Fields Are Required'], timeout : 4000,   type: 'danger'});
      this.router.navigate(['add-client']);
    }else{
      //add new client
      this.clientService.newClient(value);
      this.flash.showFlashMessage({ messages: ['Successfully added new client'], timeout : 4000,   type: 'success'});
      this.router.navigate(['/']);
    }
  }

}
