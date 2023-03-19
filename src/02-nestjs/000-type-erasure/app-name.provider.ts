import {ValueProvider} from '@nestjs/common';

export const AppNameKey = 'APP_NAME';

export const AppNameProvider: ValueProvider = {
  provide: AppNameKey,
  useValue: "MyFirstApp"
}