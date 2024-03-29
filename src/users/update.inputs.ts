import { ObjectType, InputType, Field } from '@nestjs/graphql';

@ObjectType()
@InputType('UpdateInput')
export class UpdateInput {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  Token: string;
}
