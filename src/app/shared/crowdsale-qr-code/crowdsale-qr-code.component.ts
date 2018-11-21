import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crowdsale-qr-code',
  templateUrl: './crowdsale-qr-code.component.html',
  styleUrls: ['./crowdsale-qr-code.component.scss']
})
export class CrowdsaleQrCodeComponent implements OnInit {

  crowdsale = {
    address: {
      mainnet: '0xb10b0e88f1f6871ffe778078b914161b9e9ebedd'
    },
    qr: {
      img: 'assets/img/supercrowdsale-qr.png'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
