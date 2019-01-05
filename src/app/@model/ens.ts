import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ENS {

  wallet = {
    name: 'wallet.superander.eth',
    address: '0x24b2e8C86Cc5a378b184b64728dB1A8484D844eC',
  }

  sander1 = {
    name: 'sander1.superander.eth',
    address: '0x123',
  }

  crowdsale = {
    name: 'supercrowdsale.superander.eth',
    address: '0x123',
  }

  constructor() { }

}
