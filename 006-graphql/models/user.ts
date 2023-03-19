import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Post } from "./post";

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(
      () => ID
  )
  id: string;
  name: string;
  tag: string;

  @Field(
      () => [Post]
  )
  posts?: Post[]
}
