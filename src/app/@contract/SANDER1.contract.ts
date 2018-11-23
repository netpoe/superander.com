import { Wallet } from '@decentralizedtechnologies/scui-lib';

const SANDER1Interface = require('@abi/SANDER1.abi.json')

export class SANDER1Contract {

  web3: any
  instance: any

  constructor(
    wallet: Wallet) {
    this.web3 = wallet.web3
  }

  connect() {
    const _contract = new this.web3.eth.Contract(SANDER1Interface.abi)
    this.instance = _contract
    return this
  }
}
