import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NetPayOxxo';
  private apiUrl: string;
  constructor(){
    this.apiUrl = environment.apiUrl;
    console.log(this.apiUrl);
    console.log(environment.key);
  }
}
