import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database' ;
import { Observable } from 'rxjs';
import { Clients } from '../models/client';


@Injectable()
export class ClientService {
  client: AngularFireObject<any>;
  clients: AngularFireList<any>;

  constructor (public af:AngularFireDatabase) { 
    this.clients = this.af.list('/clients') as AngularFireList<Clients>
  }
  getClients(){
    return this.clients;
  }
  newClient(client: Clients){
    this.clients.push(client).then(ref=>{
      console.log(ref.key);
    })
  }

  getClient(id: string){
    this.client = this.af.object('/clients/' + id) as AngularFireObject<Clients>;
    return this.client;
  }
  updateBalance(id:string, client:Clients){
    return this.clients.update(id, client);
  }
  deleteClient(id:string){
    this.clients.remove(id);
  }
  updateClient(id:string, client:Clients){
    return this.clients.update(id,client);
  }
}
