import { FactoryProvider } from "@nestjs/common";
import { User } from "../models";

export const KEY = 'USER_FACTORY';

const tagOptions = [
    'Sup',
    'Hey',
    'Hello',
    '42'
];

export const UserFactory: FactoryProvider = {
  provide: KEY,
  useFactory: () => (userName: string): User => ({
    id: "someId",
    name: userName,
    tag: tagOptions[Math.floor(Math.random() * tagOptions.length)]
  })
};
