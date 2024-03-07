import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get newAmount() {
    return this._amount;
  }

  set newAmount(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._amount = value;
  }

  get newCurrency() {
    return this._currency;
  }

  set newCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Rate must be a number');
    }
    return amount * conversionRate;
  }
}
