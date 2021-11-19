import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoChartSerie, PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chartData: Array<PoChartSerie> = [];
  public flag:boolean = false;
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get<any>(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=<YOUR_API_KEY>`)
    .subscribe(cryptos =>{
      for (let element of cryptos.data) {
          this.chartData.push({label: element.name,data: +element.quote.USD.market_cap});
        }
      this.flag = true;
      }
    );
    
    
  }
}
