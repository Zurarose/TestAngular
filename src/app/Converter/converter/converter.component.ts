import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../API/http.service";
import {Currencies} from "../../../API/returnTypes";

interface currencyType {
  from: {
    currencyFrom: string | null
    valueFrom: number
  }
  to: {
    currencyTo: string | null
    valueTo: number
  }
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  providers: [HttpService],
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {
  disableInput: boolean = true

  currency: currencyType = {
    from: {currencyFrom: null, valueFrom: 0},
    to: {currencyTo: null, valueTo: 0}
  };
  exchange: number | null = null
  currenciesList: string[] | null = null
  history: Array<string> = []

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService
      .getCurrenciesList()
      .subscribe((response: Currencies) => {
        this.currenciesList = Object.keys(response.results).sort()
      })
  }

  getExchange(event: any): void {
    if (this.currency.from.currencyFrom && this.currency.to.currencyTo) {
      this.disableInput = false
      this.httpService.getCurrencyExchange(this.currency.from.currencyFrom, this.currency.to.currencyTo)
        .then((response: any) => {
          this.exchange = response[Object.keys(response)[0]]
          this.getConvert(event)
        })
    }
  }
  getConvert(event: any): void {
    if (event.target.name == "from" && this.exchange) {
      this.currency.to.valueTo = +((this.currency.from.valueFrom * this.exchange).toFixed(2))
    }
    if (event.target.name == "to" && this.exchange) {
      this.currency.from.valueFrom = +((this.currency.to.valueTo / this.exchange).toFixed(2))
    }
  }

}
