interface IBasicUserInterface {
  id: string;
  name: string;
  email: string;
  country: string;
  gender: string;
  terms: boolean;
}

export interface IUser extends IBasicUserInterface, IHash {}

export interface IHash {
  salt: string;
  hashedpassword: string;
}
