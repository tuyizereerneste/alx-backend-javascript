export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(nameValue) {
    this._name = nameValue;
  }

  get code() {
    return this._code;
  }

  set code(codeValue) {
    this._code = codeValue;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
