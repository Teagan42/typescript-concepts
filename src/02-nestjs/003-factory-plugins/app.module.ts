import { Module } from "@nestjs/common";
import { DataStoresModule } from "./data-stores/data-stores.module";

@Module({
  imports: [DataStoresModule],
  exports: [DataStoresModule]
})
export class AppModule {
}
