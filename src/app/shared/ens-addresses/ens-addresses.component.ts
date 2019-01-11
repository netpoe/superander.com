import { Component, OnInit } from '@angular/core';
import { ENS } from '@model/ens';
import { Config } from '@model/config';

@Component({
  selector: 'app-ens-addresses',
  templateUrl: './ens-addresses.component.html',
  styleUrls: ['./ens-addresses.component.scss']
})
export class EnsAddressesComponent implements OnInit {

  constructor(
    public ens: ENS,
    public config: Config) { }

  ngOnInit() {
  }

}
