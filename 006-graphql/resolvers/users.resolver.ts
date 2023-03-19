import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Post, User } from "../models";
import { UserService } from "../services";

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {
  }

  @ResolveField(
      () => [Post]
  )
  posts(@Parent() user: User) {
    const posts = this.userService.getPosts(user.id);
    return posts.map((p) => ({
      __typeName: "Post",
      id: p.id
    }));
  }

  @Query(
      () => User,
      {
        name: "getUserById"
      }
  )
  getUser(@Args("id") userId: string) {
    return this.userService.get(userId);
  }
}
