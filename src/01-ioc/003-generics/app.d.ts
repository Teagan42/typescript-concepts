import { Device } from './device';
import { PowerHandler } from './handlers/power/power.handler';
export declare class App {
    devices: Device<PowerHandler>[];
    addDevice(device: Device<PowerHandler>): void;
}
