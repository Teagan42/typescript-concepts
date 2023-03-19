import { registerAs } from "@nestjs/config";

const defaultTagOptions = [
  'Sup',
  'Hey',
  'Hello',
  '42'
];

const ENV_TAG_OPTIONS = 'TAG_OPTIONS';

export const UserTagConfig = registerAs(
    'User Tag Options', () => ({
      options: process.env[ENV_TAG_OPTIONS].split(",") || defaultTagOptions
    })
);
