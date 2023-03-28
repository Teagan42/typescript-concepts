import { Environment } from "./environment";
import { SalesRepFSDataStore, VendorFSDataStore } from "../data-stores/fs.data-store";
import { Type } from "@nestjs/common";

export class DevEnvironment implements Environment {
  repStore: typeof SalesRepFSDataStore = SalesRepFSDataStore;
  vendorStore: typeof VendorFSDataStore = VendorFSDataStore;

}
