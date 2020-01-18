import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { SettingsService } from '../../services/settings.service';
import { Settings} from '../../models/settings';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  setting: Settings;
  constructor(
    public router: Router,
    public flash: NgFlashMessageService,
    public settings: SettingsService
  ) { }

  ngOnInit() {
    this.setting = this.settings.getSettings();
  }
  onSubmit(){
    this.settings.changeSettings(this.setting);
    this.flash.showFlashMessage({ messages: ['Settings Saved'], timeout : 4000,   type: 'success'});
    this.router.navigate(['/settings'])
  }

}
