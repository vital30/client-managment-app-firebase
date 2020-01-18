import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Clients } from '../../models/client';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  client: Clients = {
    firstname : '',
    lastname: '',
    email: '',
    phone: ''
  }
  constructor(
    public clientservice: ClientService,
    public router: Router,
    public flash: NgFlashMessageService,
    public route : ActivatedRoute,
    public settings: SettingsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientservice.getClient(this.id).valueChanges().subscribe(client => {
    console.log(client);  
    this.client = client;
    });
  }
  onSubmit({value, valid} : {value: Clients, valid:boolean}){
    console.log(value);
    if(!valid){
      this.flash.showFlashMessage({ messages: ['Some Fields Are Required'], timeout : 4000,   type: 'danger'});
      this.router.navigate(['/edit-client/' + this.id]);
    }else{
      //add new client
      this.clientservice.updateClient(this.id,value);
      this.flash.showFlashMessage({ messages: ['Successfully edited client'], timeout : 4000,   type: 'success'});
      this.router.navigate(['']);
    }
  }

}
