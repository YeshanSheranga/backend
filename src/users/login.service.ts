import { InjectModel } from '@nestjs/mongoose';
import { Login } from './login.model';
import { Model } from 'mongoose';

export class LoginService {
  constructor(
    @InjectModel(Login.name)
    private login: Model<Login>,
  ) {}

  //Login function
  async loginU({ email, password }: Login) {
    const loginUser = await this.login.findOne({ email });
    if (loginUser) {
      if (loginUser.password === password) {
        console.log('You are succfully Login');
      } else {
        return console.log('Invalid credetials');
      }
      return console.log('Invalid email address');
    }
    console.log('Login');
  }
}
