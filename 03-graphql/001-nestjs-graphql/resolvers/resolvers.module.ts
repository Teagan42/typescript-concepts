import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { PostsResolver } from "./posts.resolver";
import { ServicesModule } from "../services";
import { Post, User } from "../models";

@Module({
  imports: [
    ServicesModule
  ],
  providers: [
    User,
    Post,
    UsersResolver,
    PostsResolver
  ],
  exports: [
    ServicesModule,
    UsersResolver,
    PostsResolver,
    User,
    Post
  ]
})
export class ResolversModule {
}
