import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { NestFactory } from "@nestjs/core";
import { UserFactory } from "./user.factory";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>(
        {
          driver: ApolloFederationDriver,
          autoSchemaFile: {
            federation: 2
          },
          debug: true,
          playground: true
        },
    ),
  ],
  providers: [
    UserService,
    UserResolver,
    UserFactory
  ]
})
export class AppModule {
}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}

bootstrap();
