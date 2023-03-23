import { BrightnessHandler } from './brightness.handler';
import { Device } from '../../device';
export declare class MockBrightnessHandler implements BrightnessHandler {
    setBrightness(device: Device<any>, brightness: number): Promise<number>;
}
