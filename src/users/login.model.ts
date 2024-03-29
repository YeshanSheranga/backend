import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
import { Post } from 'src/posts/post.model';

@Schema()
export class Login extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  Token: string;

  @Prop()
  Post: [type: mongoose.Schema.Types.ObjectId, ref: Post];
}

export const LoginSchema = SchemaFactory.createForClass(Login);
