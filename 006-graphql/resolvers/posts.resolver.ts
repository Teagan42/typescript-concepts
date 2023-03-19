import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Post, User } from "../models";
import { PostService } from "../services";

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postService: PostService) {
  }

  @ResolveField(
      "user",
      () => User
  )
  getUser(@Parent() post: Post) {
    return {
      __typeName: "User",
      id: post.userId
    }
  }

  @Query(
      () => Post,
      {
        name: "getPostById"
      }
  )
  getPost(@Args("id") postId: string) {
    return this.postService.getPost(postId);
  }
}
