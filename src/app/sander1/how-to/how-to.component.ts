import { Component, OnInit } from '@angular/core';
import { ENS } from '@model/ens';
import { Config } from '@model/config';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {

  constructor(
    public ens: ENS,
    public config: Config) { }

  ngOnInit() {
  }

}
