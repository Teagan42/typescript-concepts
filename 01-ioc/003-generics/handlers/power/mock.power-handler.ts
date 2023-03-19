import {PowerHandler} from './power.handler';
import {Device} from '../../device';

export class MockPowerHandler implements PowerHandler {
  async turnOff(device: Device<MockPowerHandler>): Promise<boolean> {
    return false;
  }

  async turnOn(device: Device<MockPowerHandler>): Promise<boolean> {
    return true;
  }
}