import { Module } from "@nestjs/common";
import { SalesRepDataStoreProvider, VendorDataStoreProvider } from "./data-store.provider";
import { ConfigModule } from "@nestjs/config";
import { EnvironmentConfig } from "../environment/environment.config";

@Module({
  imports: [ConfigModule.forRoot({
    load: [EnvironmentConfig]
  })],
  providers: [SalesRepDataStoreProvider, VendorDataStoreProvider],
  exports: [SalesRepDataStoreProvider, VendorDataStoreProvider]
})
export class DataStoresModule {
}
