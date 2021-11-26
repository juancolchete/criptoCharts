import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { PoChartSerie, PoMenuItem } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chartData: Array<PoChartSerie> = [];
  public items: Array<Object> = [];
  public flag: boolean = false;
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get<any>(environment.URL_BASE_CMC).subscribe(cryptos => {
        let i: number = 0;
        for (let element of cryptos.data) {
          if (i < 10) {
            console.log(element)
            this.chartData.push({ label: element.name, data: element.quote.USD.market_cap });
            i++;
          }
          this.items.push({ rank: element.cmc_rank, name: element.name, 
                          "24h%": element.quote.USD.percent_change_24h.toFixed(2).toString() + "%", 
                          "7d%": element.quote.USD.percent_change_7d.toFixed(2).toString() + "%", 
                          price: element, "Market Cap": parseInt(element.quote.USD.market_cap), 
                          "Volume(24h)": parseInt(element.quote.USD.volume_24h), 
                          "Circulating Supply": parseInt(element.circulating_supply) });
        }
        console.log(this.chartData);
        this.flag = true;
      }
      );


  }
}
