import { Vendor } from "./records/vendor";
import { SalesRep } from "./records/sales-rep";

export type Predicate<RecordType> = (record: RecordType) => boolean;

export interface DataStore<RecordType> {
  getAll(predicate?: Predicate<RecordType>): Promise<RecordType[]>;
  find(predicate: Predicate<RecordType>): Promise<RecordType>;

  add(record: RecordType): Promise<RecordType>;

  remove(record: RecordType): Promise<RecordType>;
}

export abstract class VendorDataStore implements DataStore<Vendor> {
  constructor() {
  }
  abstract add(record: Vendor): Promise<Vendor>;

  abstract find(predicate: Predicate<Vendor>): Promise<Vendor>;

  abstract getAll(predicate?: Predicate<Vendor>): Promise<Vendor[]>;

  abstract remove(record: Vendor): Promise<Vendor>;

}

export abstract class SalesRepDataStore implements DataStore<SalesRep> {
  abstract add(record: SalesRep): Promise<SalesRep>;

  abstract find(predicate: Predicate<SalesRep>): Promise<SalesRep>;

  abstract getAll(predicate?: Predicate<SalesRep>): Promise<SalesRep[]>;

  abstract remove(record: SalesRep): Promise<SalesRep>;

}
