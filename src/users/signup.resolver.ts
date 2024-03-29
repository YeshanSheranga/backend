import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { SignupService } from './signup.service';
import { Signup } from './signup.model';
import { SignupInput } from './signup.input';

@Resolver(() => SignupInput)
export class SignupResolver {
  constructor(private signupService: SignupService) {}
  @Mutation(() => SignupInput)
  async createUser(@Args('payload') payload: Signup) {
    return this.signupService.createUser(payload);
  }
}
