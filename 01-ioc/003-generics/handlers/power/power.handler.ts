import {Device} from '../../device';

export type PowerHandler = {
  turnOn(device: Device): Promise<boolean>;
  turnOff(device: Device): Promise<boolean>;
}