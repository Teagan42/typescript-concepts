import { Injectable } from "@nestjs/common";
import { Environment } from "./environment";

@Injectable()
export class DevelopmentEnvironment extends Environment {
  constructor() {
    super(DevelopmentEnvironment.name);
  }
}
