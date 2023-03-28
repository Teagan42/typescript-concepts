import { NestFactory } from "@nestjs/core";
import { SalesRepDataStore, VendorDataStore } from "./data-stores/data-store";
import { AppModule } from "./app.module";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const vendorStore = app.get(VendorDataStore, {strict: false});
  const repStore = app.get(SalesRepDataStore, {strict: false });
  console.log("Vendor", vendorStore);
  console.log("Rep", repStore);
}

bootstrap();
