import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from "@nestjs/apollo";
import { IntrospectAndCompose } from "@apollo/gateway";
import { NestFactory } from "@nestjs/core";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>(
        {
          driver: ApolloGatewayDriver,
          server: {
            debug: true,
            playground: true,
          },
          gateway: {
            supergraphSdl: new IntrospectAndCompose({
              subgraphs: [
                {
                  url: "http://localhost:3001/graphql",
                  name: "user"
                },
                {
                  url: "http://localhost:3002/graphql",
                  name: "post"
                }
              ]
            })
          }
        },
    ),
  ]
})
export class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
