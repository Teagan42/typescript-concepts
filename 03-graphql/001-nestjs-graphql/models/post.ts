import { ObjectType, Field, ID, Directive } from "@nestjs/graphql";
import { User } from "./user";

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(
      () => ID
  )
  id: string;

  @Field(
      () => ID
  )
  userId: string;

  @Field(
      () => User
  )
  user: User;

  title: string;

  content: string;
}
