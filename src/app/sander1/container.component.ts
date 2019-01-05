import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EthereumService, WalletService } from '@decentralizedtechnologies/scui-lib';
import { ActivatedRoute } from '@angular/router';
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
    public config: Config,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.querySelector(`#${fragment}`).scrollIntoView({ behavior: 'smooth' })
      }
    })

    this.supercrowdsale = new SuperCrowdsaleContract(this.walletService.getInstance())
    this.supercrowdsale.connect()
    this.supercrowdsale.setAddress(SuperCrowdsaleContract.ROPSTEN_ADDRESS)

    this.init()
  }

  async init() {
    try {
      // const price = await this.ethereumService.convertCurrency('USD', 'ETH')
      // this.config.song.price.ETH = price.ETH * this.config.song.price.USD
      this.supercrowdsale.getWeiRaised()
      this.supercrowdsale.getCap()
    } catch (error) {
      console.error(error)
    }
  }
}
