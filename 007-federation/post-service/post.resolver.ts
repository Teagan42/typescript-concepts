import { Args, Parent, Query, ResolveField, Resolver, ResolveReference } from "@nestjs/graphql";
import { User } from "./user.model";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {
  }

  @ResolveReference()
  resolveReference(reference: {__typeName: string, id: string }) {
    return this.postService.getPost(reference.id);
  }

  @ResolveField(
      () => User
  )
  user(@Parent() post: Post) {
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
