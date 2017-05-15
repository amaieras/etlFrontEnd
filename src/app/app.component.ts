import {Component} from '@angular/core';
import {NodetypeService} from './node-type/nodetype.service';
import {Message} from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NodetypeService]
})
export class AppComponent {
  constructor() {
  }
}

