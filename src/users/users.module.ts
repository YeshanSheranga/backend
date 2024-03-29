import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Signup, SignupSchema } from './signup.model';
import { Login, LoginSchema } from './login.model';

@Module({
  providers: [],
  imports: [
    MongooseModule.forFeature([{ name: Signup.name, schema: SignupSchema }]),
    MongooseModule.forFeature([{ name: Login.name, schema: LoginSchema }]),
  ],
})
export class UsersModule {}
