import { Component, OnInit } from '@angular/core';
import { ClientService  } from '../../services/client.service';
import { Clients } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[];
  totalOwed:number;

  constructor(public clientservice: ClientService) { }

  ngOnInit() {
    this.clientservice.getClients().snapshotChanges().subscribe(clients => {
    this.clients  = clients;
    })
  }
}
