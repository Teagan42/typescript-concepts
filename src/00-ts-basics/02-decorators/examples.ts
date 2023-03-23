// Let's create a decorator that makes a class a singleton!
function Singleton<T extends new (...args: any[]) => any>(ctr: T): T {
  let instance: T;
  return class {
    constructor(...args: any[]) {

      if (instance) {
        console.error('You cannot instantiate a singleton twice!');
        return instance;
      }

      instance = new ctr(...args);
      return instance;
    }
  } as T
}

@Singleton
export class OneClassToRuleThenAll {
  constructor(private name: string) {
  }

  public bellowname(): void {
    console.error(`MY NAME IS ${this.name} BOW TO ME!`);
  }
}
