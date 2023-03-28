import {BrightnessHandler} from './brightness.handler';
import {Device, LightDevice} from '../../device';

export interface SomeApi {
  authenticate(): Promise<void>;
  control(id: string, brightness: number): Promise<number>;
}

export class ApiBrightnessHandler implements BrightnessHandler {
  constructor(private readonly api: SomeApi) {
  }

  async setBrightness(
      device: LightDevice<any, BrightnessHandler>,
      brightness: number): Promise<number> {
    await this.api.authenticate();
    return await this.api.control(device.id, brightness);
  }
}