import {BrightnessHandler} from './brightness.handler';
import {Device} from '../../device';

export class MockBrightnessHandler implements BrightnessHandler {
  async setBrightness(device: Device<any>, brightness: number): Promise<number> {
    return brightness;
  }
}