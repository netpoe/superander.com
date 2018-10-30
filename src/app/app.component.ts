import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'superandercom';

  config = {
    song: {
      price: {
        USD: 5000,
        ETH: 24.94,
      },
      amount: 10,
    },
    crowdsale: {
      shares: 0.49
    }
  }
}
