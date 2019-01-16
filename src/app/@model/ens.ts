import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ENS {

  wallet = {
    name: 'wallet.superander.eth',
    address: '0x24b2e8C86Cc5a378b184b64728dB1A8484D844eC',
    url: 'https://etherscan.io/address/wallet.superander.eth',
  }

  sander1 = {
    name: 'sander1.superander.eth',
    address: '0xC9a593F0c87ffEAF9046aeFe33A86c64cc98769d',
    url: 'https://etherscan.io/address/sander1.superander.eth',
  }

  crowdsale = {
    name: 'supercrowdsale.superander.eth',
    address: '0x1C8654C680c3F18A3B3A0EE943D40848A9FFFd0D',
    img: 'assets/img/supercrowdsale-qr.png',
    url: 'https://etherscan.io/address/supercrowdsale.superander.eth',
  }

  constructor() { }

}
