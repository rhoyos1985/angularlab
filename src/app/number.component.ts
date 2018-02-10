import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  title = 'Your Number';
  resultNumber = '';
  err = false;
  constructor(
    private http: HttpClient,
    private http2: Http
  ) {
     this.getNumber('34');
  }

  getNumber(number: string) {
    const num = number;
    if (num.length === 0) {
      this.err = true;
      return;
    }
    this.http.get(`http://numbersapi.com/${num}`, {responseType: 'text'}).subscribe((res) => {
      this.resultNumber = res;
    });
  }
}
