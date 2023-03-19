import { ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./user.model";
import { PostService } from "./post.service";
import { Post } from "./post.model";

// @ts-ignore
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly postService: PostService) {
  }
  @ResolveField(
      () => [Post],
      {
        name: "posts"
      }
  )
  getPosts(userId: string) {
   return this.postService.getUsersPosts(userId);
  }
}
