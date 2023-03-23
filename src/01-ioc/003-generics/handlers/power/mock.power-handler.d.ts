import { PowerHandler } from './power.handler';
import { Device } from '../../device';
export declare class MockPowerHandler implements PowerHandler {
    turnOff(device: Device<MockPowerHandler>): Promise<boolean>;
    turnOn(device: Device<MockPowerHandler>): Promise<boolean>;
}
