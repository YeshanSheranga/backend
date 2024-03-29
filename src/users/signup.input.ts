import { ObjectType, InputType, Field } from '@nestjs/graphql';

@ObjectType()
@InputType('SignupInput')
export class SignupInput {
  @Field(() => String)
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
