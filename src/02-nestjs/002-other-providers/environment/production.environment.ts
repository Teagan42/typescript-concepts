import { Injectable } from "@nestjs/common";
import { Environment } from "./environment";

@Injectable()
export class ProductionEnvironment extends Environment {
  constructor() {
    super(ProductionEnvironment.name, false);
  }
}
