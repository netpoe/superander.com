import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config {

  song = {
    price: {
      USD: 9079.65,
      ETH: 345.49,
    },
    amount: 12,
  }

  crowdsale = {
    shares: 0.35,
    cap: 4145.88,
  }

}
