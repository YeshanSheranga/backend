import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { LoginService } from './login.service';
import { LoginInput } from './login.input';
import { Login } from './login.model';

@Resolver(() => LoginInput)
export class LoginResolver {
  constructor(private loginService: LoginService) {}

  @Mutation(() => LoginInput)
  async loginUser(@Args('loginPayload') loginPayload: Login) {
    return this.loginService.loginU(loginPayload);
  }
}
