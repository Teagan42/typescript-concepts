import { Args, Query, Resolver, ResolveReference } from "@nestjs/graphql";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {
  }

  @ResolveReference()
  resolveReference(reference: {__typename: string, id: string}) {
    return this.userService.get(reference.id);
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
