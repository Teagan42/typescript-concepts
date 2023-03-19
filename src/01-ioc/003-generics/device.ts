import {PowerHandler} from './handlers/power/power.handler';
import {BrightnessHandler} from './handlers/brightness/brightness.handler';

export class Device<PowerDelegate extends PowerHandler>{
  isOn: boolean;
  id: string;

  constructor(
      private readonly powerDelegate: PowerDelegate
  ) {
  }

  async turnOff(): Promise<boolean> {
    this.isOn = await this.powerDelegate.turnOff(this);
    return this.isOn;
  }

  async turnOn(): Promise<boolean> {
    this.isOn = await this.powerDelegate.turnOff(this);
    return this.isOn;
  }
}

export class LightDevice<PowerDelegate extends PowerHandler, BrightnessDelegate extends BrightnessHandler> extends Device<PowerDelegate> {
  brightness: number;

  constructor(
      powerDelegate: PowerDelegate,
      private readonly brightnessDelegate: BrightnessDelegate
  ) {
    super(powerDelegate);
  }
  async setBrightness(brightness: number): Promise<number> {
    this.brightness = await this.brightnessDelegate.setBrightness(this, brightness);
    return this.brightness;
  }
}