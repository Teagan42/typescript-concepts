import { registerAs } from "@nestjs/config";
import { SalesRepTestEnvironment } from "./unit-testing/rep-test.environment";
import { VendorTestEnvironment } from "./unit-testing/vendor-test.environment";
import { Environment } from "./environment";
import { DevEnvironment } from "./dev.environment";

const ENV_ENVIRONMENT = "ENVIRONMENT";
const DEVELOPMENT = "DEV";
const TEST = "TEST";

const ENV_TEST_COMPONENT = "TEST_COMPONENT";
const SALES_REP = "SALES_REP";
const VENDOR = "VENDOR";

const environmentMap = {
  [DEVELOPMENT]: {
    [SALES_REP]: DevEnvironment,
    [VENDOR]: DevEnvironment, // Duplicated for easy mapping
  },
  [TEST]: {
    [SALES_REP]: SalesRepTestEnvironment,
    [VENDOR]: VendorTestEnvironment
  }
}

export const EnvironmentConfig = registerAs(
    "Environment Config", (): Environment =>
        new environmentMap[process.env[ENV_ENVIRONMENT] || TEST][process.env[ENV_TEST_COMPONENT] || VENDOR]()
)
