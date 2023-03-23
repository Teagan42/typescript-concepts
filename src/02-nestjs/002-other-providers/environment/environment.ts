import { Logger } from "@nestjs/common";

export abstract class Environment {
  private readonly logger: Logger;
  protected constructor(
      loggerContext: string,
      private readonly enableLogging: boolean = true
  ) {
    this.logger = new Logger(loggerContext);
  }

  public log(message, ...params) {
    if (!this.enableLogging) {
      return;
    }
    this.logger.log(message, ...params);
  }
}
