import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR, NestFactory, RouterModule } from "@nestjs/core";
import { AppController } from "./app.controller";
import { UserModule } from "./services/user.module";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";

@Module({
  imports: [
      UserModule,
      RouterModule.register([
        {
          path: "/",
          module: AppModule,
          children: [
            {
              path: "users",
              module: UserModule
            }
          ]
        }
      ])
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ],
  controllers: [AppController]
})
export class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
