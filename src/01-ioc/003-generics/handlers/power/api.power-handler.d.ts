import { PowerHandler } from './power.handler';
import { Device } from '../../device';
export interface SomeApi {
    authenticate(): Promise<void>;
    control(id: string, power: boolean): Promise<boolean>;
}
export declare class ApiPowerHandler implements PowerHandler {
    private readonly api;
    constructor(api: SomeApi);
    turnOff(device: Device<ApiPowerHandler>): Promise<boolean>;
    turnOn(device: Device<ApiPowerHandler>): Promise<boolean>;
}
