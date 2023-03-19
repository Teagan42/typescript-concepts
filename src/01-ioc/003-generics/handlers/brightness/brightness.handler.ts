import {Device, LightDevice} from '../../device';

export type BrightnessHandler = {
  setBrightness(device: LightDevice<any, BrightnessHandler>, brightness: number): Promise<number>;
}