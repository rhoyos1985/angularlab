import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-root',
  templateUrl: './namegender.component.html',
  styleUrls: ['./namegender.component.css']
})
export class NameGenderComponent {
  title = 'Angular Lab';
  result = null;
  constructor(
    public http: HttpClient
  ) {
     this.getConfigResponse('richard');
  }

  getConfigResponse(param: String) {
    const name = param;
    this.result = this.http.get('https://api.genderize.io/?name=' + name);
  }
}
