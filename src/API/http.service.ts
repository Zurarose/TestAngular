import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs";
import {Currencies, CurrentCurrency} from "./returnTypes";

@Injectable()
export class HttpService {

  private api: string = "56670b9873bfc9f930ab" // 56670b9873bfc9f930ab ___ 1a482fa6a7bf414c7367
  private baseUrl: string = "https://free.currconv.com/api/v7/"

  constructor(private http: HttpClient) {
  }

  getCurrentCurrencies(): Observable<CurrentCurrency> {
    return this.http.get<CurrentCurrency>(this.baseUrl + 'convert?q=USD_UAH,EUR_UAH&compact=ultra&apiKey=' + this.api)
  }

  getCurrenciesList(): Observable<Currencies> {
    return this.http.get<Currencies>(this.baseUrl + 'currencies?apiKey=' + this.api)
  }

  async getCurrencyExchange(from: string, to: string) {
    let param = from + "_" + to
    let result = await this.http.get<object>(this.baseUrl + `convert?q=${param}&compact=ultra&apiKey=` + this.api).toPromise()
    return result
  }
}
