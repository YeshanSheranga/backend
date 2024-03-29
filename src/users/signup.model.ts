import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
import { Post } from 'src/posts/post.model';

@Schema()
export class Signup extends Document {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  post: [type: mongoose.Schema.Types.ObjectId, ref: Post];
}

export const SignupSchema = SchemaFactory.createForClass(Signup);
