import { DataStore, Predicate, SalesRepDataStore, VendorDataStore } from "./data-store";
import { Vendor } from "./records/vendor";
import { SalesRep } from "./records/sales-rep";

export class VendorMemoryDataStore extends VendorDataStore {
  private vendors: Vendor[] = [];

  async add(record: Vendor): Promise<Vendor> {
    this.vendors.push(record);
    return record;
  }

  async find(predicate: Predicate<Vendor>): Promise<Vendor> {
    return this.vendors.find(predicate);
  }

  async getAll(predicate?: Predicate<Vendor>): Promise<Vendor[]> {
    return this.vendors.filter(predicate);
  }

  async remove(record: Vendor): Promise<Vendor> {
    this.vendors = this.vendors.filter((r) => r.id !== record.id);
    return record;
  }

}

export class SalesRepMemoryDataStore extends SalesRepDataStore {
  private reps: SalesRep[] = [];

  async add(record: SalesRep): Promise<SalesRep> {
    this.reps.push(record);
    return record;
  }

  async find(predicate: Predicate<SalesRep>): Promise<SalesRep> {
    return this.reps.find(predicate);
  }

  async getAll(predicate?: Predicate<SalesRep>): Promise<SalesRep[]> {
    return this.reps.filter(predicate);
  }

  async remove(record: SalesRep): Promise<SalesRep> {
    this.reps = this.reps.filter((r) => r.id !== record.id);
    return record;
  }

}
