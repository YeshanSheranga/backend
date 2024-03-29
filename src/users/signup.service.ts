import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Signup } from './signup.model';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignupService {
  constructor(
    @InjectModel(Signup.name)
    private signup: Model<Signup>,
    private jwtService: JwtService,
  ) {}
  //Signup function
  async createUser({ username, email, password }: Signup) {
    const user = await this.signup.findOne({ payload: username });
    if (!user) {
      const newUser = new this.signup({ username, email, password });
      newUser.save();
      const tokenPayload = { username: username, secret: 'sshh' };
      return { jwtToken: await this.jwtService.signAsync(tokenPayload) };
    } else {
      console.log('Already exsist user');
    }
  }
}
