import { Environment } from "../environment";
import { VendorFSDataStore } from "../../data-stores/fs.data-store";
import { SalesRepMemoryDataStore } from "../../data-stores/memory.data-store";
import { Type } from "@nestjs/common";

export class SalesRepTestEnvironment implements Environment {
  repStore: typeof SalesRepMemoryDataStore = SalesRepMemoryDataStore;
  vendorStore: typeof VendorFSDataStore = VendorFSDataStore;

}
