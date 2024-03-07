export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get newCode() {
    return this._code;
  }

  set newCode(newValue) {
    this._code = newValue;
  }

  get newName() {
    return this._name;
  }

  set newName(newValue) {
    this._name = newValue;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
