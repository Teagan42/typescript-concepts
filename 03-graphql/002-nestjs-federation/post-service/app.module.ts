import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PostResolver } from "./post.resolver";
import { PostService } from "./post.service";
import { UserResolver } from "./user.resolver";
import { NestFactory } from "@nestjs/core";
import { User } from "./user.model";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>(
        {
          driver: ApolloFederationDriver,
          autoSchemaFile: {
            federation: 2
          },
          debug: true,
          playground: true,
          include: [
              UserResolver,
          ],
          buildSchemaOptions: {
            orphanedTypes: [
              User
            ]
          }
        },
    ),
  ],
  providers: [
    PostResolver,
    PostService,
    UserResolver,
  ],
  exports: [
    PostResolver,
    UserResolver
  ]
})
export class AppModule {
}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}

bootstrap();
