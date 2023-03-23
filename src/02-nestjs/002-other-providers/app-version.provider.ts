import { ValueProvider } from "@nestjs/common";

export const AppVersionKey = Symbol('Token to Inject Application Version');

export const AppVersion: ValueProvider = {
  provide: AppVersionKey,
  useValue: "1.2.5.0-beta"
};
