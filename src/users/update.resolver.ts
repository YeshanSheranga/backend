import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { UpdateService } from './update.service';
//import { Update } from './update.model';
import { UpdateInput } from './update.inputs';

@Resolver(() => UpdateInput)
export class UpdateResolver {
  constructor(private updateService: UpdateService) {}
  @Mutation(() => UpdateInput)
  async updateUser(@Args('payload') payload: UpdateInput) {
    return this.updateService.updateU(payload);
  }
}
