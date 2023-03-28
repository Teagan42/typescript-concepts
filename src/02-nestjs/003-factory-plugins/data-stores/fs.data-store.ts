import { DataStore, Predicate, SalesRepDataStore, VendorDataStore } from "./data-store";
import { Vendor } from "./records/vendor";
import { SalesRep } from "./records/sales-rep";
import { readFile, writeFile } from "fs/promises"
import { writeFileSync, existsSync } from "fs"

const vendorFile = './vendors.json';
const repFile = './reps.json';

export class VendorFSDataStore extends VendorDataStore {

  constructor() {
    super();
    if (!existsSync(vendorFile)) {
      writeFileSync(vendorFile, "[]", {encoding: "utf-8"});
    }
  }

  async add(record: Vendor): Promise<Vendor> {
    const vendors = JSON.parse(await readFile(repFile, {encoding: 'utf-8'}));
    vendors.push(record);
    await writeFile(repFile, JSON.stringify(vendors), {encoding: 'utf-8'});
    return record;
  }

  async find(predicate: Predicate<Vendor>): Promise<Vendor> {
    const vendors = JSON.parse(await readFile(repFile, {encoding: 'utf-8'}));
    return vendors.find(predicate);
  }

  async getAll(predicate?: Predicate<Vendor>): Promise<Vendor[]> {
    const vendors = JSON.parse(await readFile(repFile, {encoding: 'utf-8'}));
    return vendors.filter(predicate);
  }

  async remove(record: Vendor): Promise<Vendor> {
    let vendors = JSON.parse(await readFile(repFile, {encoding: 'utf-8'}));
    vendors = vendors.filter((r) => r.id !== record.id);
    await writeFile(repFile, JSON.stringify(vendors), {encoding: 'utf-8'});
    return record;
  }

}

export class SalesRepFSDataStore extends SalesRepDataStore {

  constructor() {
    super();
    if (!existsSync(repFile)) {
      writeFileSync(repFile, "[]", {encoding: "utf-8"});
    }
  }

  async add(record: SalesRep): Promise<SalesRep> {
    const reps = JSON.parse(await readFile(repFile, {encoding: 'utf-8'}));
    reps.push(record);
    await writeFile(repFile, JSON.stringify(reps), {encoding: 'utf-8'});
    return record;
  }

  async find(predicate: Predicate<SalesRep>): Promise<SalesRep> {
    const reps = JSON.parse(await readFile(repFile, {encoding: 'utf-8'}));
    return reps.find(predicate);
  }

  async getAll(predicate?: Predicate<SalesRep>): Promise<SalesRep[]> {
    const reps = JSON.parse(await readFile(repFile, {encoding: 'utf-8'}));
    return reps.filter(predicate);
  }

  async remove(record: SalesRep): Promise<SalesRep> {
    let reps = JSON.parse(await readFile(repFile, {encoding: 'utf-8'}));
    reps = reps.filter((r) => r.id !== record.id);
    await writeFile(repFile, JSON.stringify(reps), {encoding: 'utf-8'});
    return record;
  }

}
