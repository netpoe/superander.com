import { Component, OnInit } from '@angular/core';
import { EthereumService, WalletService } from '@decentralizedtechnologies/scui-lib';
import { SuperCrowdsaleContract } from '@contract/supercrowdsale.contract';
import { ENS } from '@model/ens';
import { Config } from '@model/config';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  supercrowdsale: SuperCrowdsaleContract

  constructor(
    public ethereumService: EthereumService,
    public walletService: WalletService,
    public ens: ENS,
    public config: Config) { }

  ngOnInit() {
    this.supercrowdsale = new SuperCrowdsaleContract(this.walletService.getInstance())
    this.supercrowdsale.connect()
    this.supercrowdsale.setAddress(this.ens.crowdsale.address)

    this.init()
  }

  async init() {
    try {
      this.supercrowdsale.getWeiRaised()
      this.supercrowdsale.getCap()
    } catch (error) {
      console.error(error)
    }
  }
}
