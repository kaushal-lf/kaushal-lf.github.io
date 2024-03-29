export interface ISignup {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignupErrors {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
