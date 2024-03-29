import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.model';
import { CreateInput, UpdateInput, RemoveInput } from './post.input';
import { Schema } from 'mongoose';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}
  @Mutation(() => CreateInput)
  async createPost(@Args('payload') payload: CreateInput) {
    return this.postService.createPo(payload);
  }

  @Mutation(() => UpdateInput)
  async updatePost(@Args('payload') payload: UpdateInput) {
    return this.postService.update(payload);
  }

  @Mutation(() => RemoveInput)
  async deletePost(
    @Args('_id', { type: () => String }) _id: Schema.Types.ObjectId,
  ) {
    return this.postService.delete(_id);
  }
}
