import { ClassProvider, FactoryProvider } from "@nestjs/common";
import { EnvironmentConfig } from "../environment/environment.config";
import { ConfigType } from "@nestjs/config";
import { SalesRepDataStore, VendorDataStore } from "./data-store";
import { ModuleRef } from "@nestjs/core";

export const VendorDataStoreProvider: FactoryProvider = {
  provide: VendorDataStore,
  inject: [EnvironmentConfig.KEY, ModuleRef],
  useFactory: async (environmentConfig: ConfigType<typeof EnvironmentConfig>, moduleRef: ModuleRef) =>
      moduleRef.create(environmentConfig.vendorStore)
}

export const SalesRepDataStoreProvider: FactoryProvider = {
  provide: SalesRepDataStore,
  inject: [EnvironmentConfig.KEY, ModuleRef],
  useFactory: async (environmentConfig: ConfigType<typeof EnvironmentConfig>, moduleRef: ModuleRef) =>
      moduleRef.create(environmentConfig.repStore)
}
