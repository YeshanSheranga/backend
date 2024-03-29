import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateInput')
export class CreateInput {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  Title: string;

  @Field(() => String)
  Body: string;
}

@InputType('UpdateInput')
export class UpdateInput {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  Title: string;

  @Field(() => String)
  Body: string;
}

@InputType('RemoveInput')
export class RemoveInput {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  Title: string;

  @Field(() => String)
  Body: string;
}
