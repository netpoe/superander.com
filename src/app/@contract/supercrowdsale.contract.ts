import { Wallet } from '@decentralizedtechnologies/scui-lib';

const SuperCrowdsaleInterface = require('@abi/supercrowdsale.abi.json')

export class SuperCrowdsaleContract {

  static readonly ROPSTEN_ADDRESS = '0xd507a5ce4133236261d469051a1c606c1698fad1'

  web3: any
  instance: any
  address: string

  weiRaised = 0
  cap = 0

  constructor(
    wallet: Wallet) {
    this.web3 = wallet.web3
  }

  connect() {
    const _contract = new this.web3.eth.Contract(SuperCrowdsaleInterface.abi)
    this.instance = _contract
    return this
  }

  setAddress(address: string) {
    this.instance.options.address = address
    this.instance._address = address
    this.address = address
    return this
  }

  async getWeiRaised() {
    this.weiRaised = await this.instance.methods.weiRaised().call()
  }

  async getCap() {
    this.cap = await this.instance.methods.cap().call()
  }
}
