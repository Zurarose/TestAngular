import {Component, OnInit} from '@angular/core';
import {HttpService} from "../API/http.service";
import {CurrentCurrency} from "../API/returnTypes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService],
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {

  data : CurrentCurrency | null = null
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService
      .getCurrentCurrencies()
      .subscribe((response: CurrentCurrency) => (this.data = response))
  }
}
