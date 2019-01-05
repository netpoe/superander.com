import { Component, OnInit } from '@angular/core';
import { ENS } from '@model/ens';
import { Config } from '@model/config';

@Component({
  selector: 'app-facks',
  templateUrl: './facks.component.html',
  styleUrls: ['./facks.component.scss']
})
export class FacksComponent implements OnInit {

  constructor(
    public ens: ENS,
    public config: Config) { }

  ngOnInit() {
  }

}
