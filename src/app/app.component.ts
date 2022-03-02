import { Component } from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'carbon-app';

  constructor(private translateService: TranslateService) {}

  handleLanguageChange($event: MatSelectChange) {
    this.translateService.use($event.value);
    console.log('Switching to: ' + $event.value);
  }
}
