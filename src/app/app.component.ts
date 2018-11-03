import { Component, AfterViewInit } from '@angular/core';
const Highcharts = require('highcharts');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'superandercom'

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

  ngAfterViewInit() {
    const data = [{
      name: 'Chrome',
      y: 61.41,
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }].map((value: any) => {
      value.sliced = true
      // value.color = '#231f20'
      return value
    })

    // Highcharts.setOptions({
    //   colors: ['#231f20']
    // })
    Highcharts.chart('donut', {
      chart: {
        backgroundColor: null,
        // plotBackgroundColor: 'transparent',
        // plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: null
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
            hover: {
              halo: {
                size: 9,
                attributes: {
                  fill: '#000000',
                  'stroke-width': 4,
                  stroke: '#000000',
                }
              }
            }
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
        name: 'Brands',
        colorByPoint: true,
        innerSize: '50%',
        data: data,
        point: {
          events: {
            // mouseOver: function () {
            //   // console.log(this)
            //   this.options.oldColor = this.color
            //   this.graphic.attr('fill', 'black')
            // },
            // mouseOut: function () {
            //   this.graphic.attr('fill', this.options.oldColor)
            // }
          }
        },
      }]
    })
  }
}
