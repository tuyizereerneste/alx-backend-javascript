export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newValue) {
    this._brand = newValue;
  }

  get motor() {
    return this._motor;
  }

  set motor(newValue) {
    this._motor = newValue;
  }

  get color() {
    return this._color;
  }

  set color(newValue) {
    this._color = newValue;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
