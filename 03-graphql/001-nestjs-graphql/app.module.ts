import { Module } from "@nestjs/common";
import { PostService, UserFactory, UserService } from "./services";
import { PostsResolver, ResolversModule, UsersResolver } from "./resolvers";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { NestFactory } from "@nestjs/core";
import { Post, User } from "./models";

@Module({
  imports: [
    ResolversModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: true,
      include: [
        User,
        Post,
        ResolversModule
      ]
    }),
  ],
  exports: [
      GraphQLModule,
      ResolversModule
  ]
})
export class AppModule {
}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
