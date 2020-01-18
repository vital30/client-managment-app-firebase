import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from './firebaseConfig';
import { NgFlashMessagesModule } from 'ng-flash-messages';
// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Services
import { ClientService } from './services/client.service';
import { AuthServiceService } from './services/auth-service.service';
import { AuthGuard } from './guards/auth.guard';
import { SettingsService } from './services/settings.service';
import { RegisterGuard } from './guards/regster.guard';


//const appRoutes: Routes = routes ;

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabaseModule,
    AngularFireDatabase,
    ClientService,
    AuthServiceService,
    AuthGuard,
    SettingsService,
    RegisterGuard
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
