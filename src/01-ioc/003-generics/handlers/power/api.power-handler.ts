import {PowerHandler} from './power.handler';
import {Device} from '../../device';

export interface SomeApi {
  authenticate(): Promise<void>;
  control(id: string, power: boolean): Promise<boolean>;
}

export class ApiPowerHandler implements PowerHandler {
  constructor(private readonly api: SomeApi) {
  }
  async turnOff(device: Device<ApiPowerHandler>): Promise<boolean> {
    await this.api.authenticate();
    return await this.api.control(device.id, false);
  }

  async turnOn(device: Device<ApiPowerHandler>): Promise<boolean> {
    await this.api.authenticate();
    return await this.api.control(device.id, true);
  }

}