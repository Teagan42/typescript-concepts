import { Module } from "@nestjs/common";
import { PostService, UserFactory, UserService } from "./services";
import { NestFactory } from "@nestjs/core";
import { AppVersion, AppVersionKey } from "./app-version.provider";
import { ProductionEnvironment } from "./environment/production.environment";
import { DevelopmentEnvironment } from "./environment/development.environment";
import { Environment } from "./environment/environment";
import { UserTagConfig } from "./config/user-tag.config";
import { ConfigModule } from "@nestjs/config";

const environmentClass = process.env["ENVIRONMENT"] === "PROD" ? ProductionEnvironment : DevelopmentEnvironment;

@Module({
  imports:[ConfigModule.forFeature(UserTagConfig)],
  providers: [
    UserFactory,
    UserService,
    PostService,
    AppVersion,
    {
      provide: Environment,
      useClass: environmentClass
    }
  ],
  exports: [
    AppVersionKey
  ]
})
export class AppModule {
}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const appVersion = app.get<string>(AppVersionKey);
  const environment = app.get(Environment);
  environment.log("AppVersion", appVersion);

}

bootstrap();
