import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-root',
  templateUrl: './namegender.component.html',
  styleUrls: ['./namegender.component.css']
})
export class NameGenderComponent {
  title = 'Predicts your Gender';
  result = null;
  constructor(
    private http: HttpClient
  ) {
     this.getConfigResponse('richard');
  }

  getConfigResponse(param: String) {
    const name = param;
    if (name.length === 0) {
      this.result.err = true;
      return;
    }
    this.http.get('https://api.genderize.io/?name=' + name).subscribe((res) => {
      this.result = res;
    });
  }
}
