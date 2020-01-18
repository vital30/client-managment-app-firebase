import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Clients } from '../../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: any;
  hasBoolean:boolean = false;
  showBalanceUpdateInput:boolean = false;

  constructor(
    public clientservice: ClientService,
    public router: Router,
    public flash: NgFlashMessageService,
    public route : ActivatedRoute
  ) { }

  ngOnInit() {
    //Get the Id 
    this.id = this.route.snapshot.params['id'];
    this.clientservice.getClient(this.id).snapshotChanges().subscribe(client => {
      this.client = client;
    });
    
  }
  onDeleteClient(){
    if(confirm('Do you want this client to be Deleted ?')){
    this.clientservice.deleteClient(this.id);
    this.flash.showFlashMessage({ messages: ['Client Deleted'], timeout : 4000,   type: 'success'});
    this.router.navigate(['/']);
  }
}
}
