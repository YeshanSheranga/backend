import { ObjectType, InputType, Field } from '@nestjs/graphql';

@ObjectType()
@InputType('LoginInput')
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  Token: string;
}
