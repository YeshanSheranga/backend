import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop(() => Number)
  id: number;

  @Prop(() => String)
  Title: string;

  @Prop(() => String)
  Body: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
