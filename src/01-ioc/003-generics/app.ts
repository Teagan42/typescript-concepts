import {Device, LightDevice} from './device';
import {MockPowerHandler} from './handlers/power/mock.power-handler';
import {PowerHandler} from './handlers/power/power.handler';
import {
  MockBrightnessHandler
} from './handlers/brightness/mock.brightness-handler';

export class App {
  devices: Device<PowerHandler>[] = [];

  addDevice(device: Device<PowerHandler>) {
    this.devices.push(device);
  }
}

const app = new App();

app.addDevice(
    new Device(new MockPowerHandler())
);

app.addDevice(
    new LightDevice(
        new MockPowerHandler(),
        new MockBrightnessHandler()
    )
);