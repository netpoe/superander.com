import { Component, OnInit } from '@angular/core';
import { ENS } from '@model/ens';
import { Config } from '@model/config';

@Component({
  selector: 'app-crowdsale-qr-code',
  templateUrl: './crowdsale-qr-code.component.html',
  styleUrls: ['./crowdsale-qr-code.component.scss']
})
export class CrowdsaleQrCodeComponent implements OnInit {

  constructor(
    public ens: ENS,
    public config: Config) { }

  ngOnInit() {
  }

}
