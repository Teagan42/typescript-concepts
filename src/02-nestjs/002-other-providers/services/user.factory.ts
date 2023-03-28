import { FactoryProvider } from "@nestjs/common";
import { User } from "../models";
import { UserTagConfig } from "../config/user-tag.config";
import { ConfigType } from "@nestjs/config";

export const KEY = 'USER_FACTORY';

export const UserFactory: FactoryProvider = {
  provide: KEY,
  useFactory: (tagConfig: ConfigType<typeof UserTagConfig>) => (userName: string): User => ({
    id: "someId",
    name: userName,
    tag: tagConfig.options[Math.floor(Math.random() * tagConfig.options.length)]
  }),
  inject: [UserTagConfig.KEY]
};
