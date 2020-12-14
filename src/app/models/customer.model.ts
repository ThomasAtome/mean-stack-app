export class Customer {

  private _gender: string;
  private _age: number;
  private _email: string;
  private _satisfaction: number;

  constructor(gender: string, age: number, email: string, satisfaction: number) {
    this._gender = gender;
    this._age = age;
    this._email = email;
    this._satisfaction = satisfaction;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get satisfaction(): number {
    return this._satisfaction;
  }

  set satisfaction(value: number) {
    this._satisfaction = value;
  }

  static fromJSON(data: any): Customer {
    return new Customer(
      data.gender,
      data.age,
      data.email,
      data.satisfaction
    );
  }
}
