import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EthereumService, WalletService } from '@decentralizedtechnologies/scui-lib';
import { ActivatedRoute } from '@angular/router';
import { SuperCrowdsaleContract } from '@contract/supercrowdsale.contract';
import { ENS } from '@model/ens';
import { Config } from '@model/config';

const Highcharts = require('highcharts');

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit {

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

  ngAfterViewInit() {
    const self = this

    const data = [{
      name: 'Musicians',
      id: 'musicians',
      y: 35.79,
    }, {
      name: 'Pre-production',
      id: 'pre-production',
      y: 24.78
    }, {
      name: 'Studio',
      id: 'studio',
      y: 17.34
    }, {
      name: 'Art',
      id: 'art',
      y: 16.52
    }, {
      name: 'Vinyl',
      id: 'vinyl',
      y: 3.98
    }, {
      name: 'Copyright Registry',
      id: 'copyright',
      y: 0.87
    }, {
      name: 'Master',
      id: 'master',
      y: 0.44
    }, {
      name: 'Distribution',
      id: 'distribution',
      y: .28
    }].map((value: any) => {
      value.sliced = true
      return value
    })

    Highcharts.chart('donut', {
      chart: {
        backgroundColor: null,
        type: 'pie'
      },
      title: {
        text: null
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          colors: ['#231f20'],
          borderColor: '#f5f92a',
          borderWidth: '2px',
          shadow: false,
          allowPointSelect: true,
          cursor: 'pointer',
          states: {
            hover: false
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}: <strong>{point.percentage:.1f} %</strong>',
            style: {
              fontSize: '14px',
              color: 'white',
              fontWeight: 400,
            }
          }
        }
      },
      series: [{
        name: null,
        colorByPoint: true,
        innerSize: '50%',
        data: data,
        point: {
          events: {
            mouseOver: function () {
              this.options.oldColor = this.color
              this.graphic.attr('fill', '#f5f92a')
              self.displaySliceInfoOnHover(this.id)
            },
          }
        },
      }]
    })
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

  displaySliceInfoOnHover(id) {
    console.log(id)
  }
}
