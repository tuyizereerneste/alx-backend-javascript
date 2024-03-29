export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get newCode() {
    return this._code;
  }

  set newCode(newValue) {
    if (typeof newValue !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = newValue;
  }

  get newName() {
    return this._name;
  }

  set newName(newValue) {
    if (typeof value !== 'string') {
      throw new Error('code must be a string');
    }
    this._name = newValue;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
