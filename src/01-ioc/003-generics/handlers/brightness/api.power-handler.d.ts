import { BrightnessHandler } from './brightness.handler';
import { LightDevice } from '../../device';
export interface SomeApi {
    authenticate(): Promise<void>;
    control(id: string, brightness: number): Promise<number>;
}
export declare class ApiPowerHandler implements BrightnessHandler {
    private readonly api;
    constructor(api: SomeApi);
    setBrightness(device: LightDevice<any, BrightnessHandler>, brightness: number): Promise<number>;
}
