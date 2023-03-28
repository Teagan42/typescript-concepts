import { SalesRepDataStore, VendorDataStore } from "../data-stores/data-store";
import { Type } from "@nestjs/common";

export interface Environment {
  vendorStore;
  repStore;
}
