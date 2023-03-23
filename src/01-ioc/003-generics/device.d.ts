import { PowerHandler } from './handlers/power/power.handler';
import { BrightnessHandler } from './handlers/brightness/brightness.handler';
export declare class Device<PowerDelegate extends PowerHandler> {
    private readonly powerDelegate;
    isOn: boolean;
    id: string;
    constructor(powerDelegate: PowerDelegate);
    turnOff(): Promise<boolean>;
    turnOn(): Promise<boolean>;
}
export declare class LightDevice<PowerDelegate extends PowerHandler, BrightnessDelegate extends BrightnessHandler> extends Device<PowerDelegate> {
    private readonly brightnessDelegate;
    brightness: number;
    constructor(powerDelegate: PowerDelegate, brightnessDelegate: BrightnessDelegate);
    setBrightness(brightness: number): Promise<number>;
}
