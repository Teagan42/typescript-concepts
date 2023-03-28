import { Environment } from "../environment";
import { SalesRepFSDataStore } from "../../data-stores/fs.data-store";
import { VendorMemoryDataStore } from "../../data-stores/memory.data-store";
import { Type } from "@nestjs/common";

export class VendorTestEnvironment implements Environment {
  repStore: typeof SalesRepFSDataStore = SalesRepFSDataStore;
  vendorStore: typeof VendorMemoryDataStore = VendorMemoryDataStore;

}
