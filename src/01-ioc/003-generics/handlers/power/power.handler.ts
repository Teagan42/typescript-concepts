import {Device} from '../../device';

export type PowerHandler = {
  turnOn(device: Device<PowerHandler>): Promise<boolean>;
  turnOff(device: Device<PowerHandler>): Promise<boolean>;
}