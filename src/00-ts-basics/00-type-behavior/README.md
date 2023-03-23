# Structural Typing

## C#, Java, Kotlin

```
class Point {
    public int x;
    public int y;
}

class DataPoint {
    public int x;
    public int y;
}

var p1 = new Point();
var p2 = new DataPoint();

handlePoint(Point pt);

handlePoint(Point p2); // <-- Type error is thrown
```

These are strongly typed languages, so even if the classes match 100%, they cannot be used interchangeably without the use of interfaces!

## Typescript, JavaScript, Python

```ts
class Point {
  x: int;
  y: int;
}

class DataPoint {
  x: int;
  y: int;
}
const p1 = new Point();
const p2 = new DataPoint();
const handlePoint = (pt: Point) => {
  
}

handlePoint(p1);
handlePoint(p2);
```

No error is thrown! Technically Typescript is strongly typed, like C#, Java and others. So why can we pass two distinct instances of a class to a method that is expecting a Point instance?

# Type Erasure

This is a concept that is very common in many languages: C++, Python, C#, TypeScript, Java, just to name a few.

The basic idea of type erasure is simple: Providing developers the ability to write code that is strongly typed, helps to find issues with your code while you are developing and to hopefully catch any other issues at compile time. Once your applications is compiled (down to JVM for Java, JavaScript for Typescript, machine for C/C++), these low (by low I mean right down on the hardware, flipping memory bits and moving data from one memory register to another). At this level,there is no such thing as Types, everything is a pointer to an address in memory and knowing which addresses to use to make what was a class back in your IDE.

Typescript is slightly different. It doesn't compile down to machine code (in the traditional sense). I is transpiled to JavaScript to then be run on a JVM (JavaVirtualMachine - this is what made Javascript so platform agnostic and portable). 

### Interfaces 

Let's say you have the following in your code:

```ts
interface TaskItem {
  title: string;
  content: string;
  date: Date;
  storeId: number;
}

const getItems = async (options): Promise<TaskItem[]> => {
    return [
      {
        title: "Blockbuster",
        content: "Return tape",
        date: new Date(),
        storeId: 0
      }
    ];
};

let taskList: TaskItem[];
( async () => 
  taskList = await getItems({})
);
```

[The transpiled output of this block of code looks like](file://src/00-type-erasure/00-type-behavior/img.png)

There are no references to `TaskItem` or the generic parameter `<TaskItem>`, and `async/await` are no where to be found!

This is the reason why you cannot check at runtime if a variable implements an interface:

```ts

interface SomeInterface {
  name: string;
  length: number;
}
interface SomeOtherInterface {
  questions: string[];
}

function f(x: SomeInterface|SomeOtherInterface) {
  // Can't use instanceof on interface, help?
  if (x instanceof SomeInterface) {
    // ...
  }
}
```

This usually occurs at compile time but can be a runtime error, because the interface is completely erased once it leave the wonderful world of Typescript.

```text
src/00-type-erasure/01-generics/examples.ts:11:20 - error TS2693: 'SomeInterface' only refers to a type, but is being used as a value here.

11   if (x instanceof SomeInterface) {
```

However, there is a compile-time workaround using `Type Guards`, if we agment the previous snippet with this:

```ts
function isSomeInterface(x: any): x is SomeInterface {
  return typeof x.name === 'string' && typeof x.length === 'number';

function f(x: SomeInterface|SomeOtherInterface) {
  if (isSomeInterface(x)) {
    console.log(x.name); // Cool!
  }
}
```

### Type Aliases

Lets define some meaningful `types`

```ts
type HTTPResponse = {
  statusCode: number;
  content: string | undefined;
};

const EmptyHTTPResponse: HTTPResponse = {
  statusCode: 204,
  content: undefined
};

const InvalidRequestHttpResponse: HTTPResponse = {
  statusCode: 400,
  content: 'You dun messed up yo'
};

function get(data: string): HTTPResponse {
  if (data == undefined) return  InvalidRequestHttpResponse;
  return EmptyHTTPResponse;
}
mptyHTTPResposne;
}
```

The resulting JavaScript;

```javascript
var EmptyHTTPResponse = {
    statusCode: 204,
    content: undefined
};
var InvalidRequestHttpResponse = {
    statusCode: 400,
    content: 'You dun messed up yo'
};
function get(data) {
    if (data == undefined)
        return InvalidRequestHttpResponse;
    return EmptyHTTPResponse;
}
//# sourceMappingURL=app.js.map
```
As you see, we have lost all the type guards we had coded into our app.

Typescript has one of the best typing systems out of many languages. Hoever, most strongly typed languages, when compiled require a deep understanding of assembly or machine code to change the behavior of the application. By compiling down to JavaScript, it's actually very easy to modify already transpiled code.

For example: Have you ever gotten a weird error that bubbled up from a library deep in the node_modules? I have found that some of the quickest ways to solve the problem (OR provide feed back to the developers of library to address the problem) is to just change their code!

Why not go into `node_modules` add debug lines or - just temporarily fix it there!

# Questions before we move on to how generics are affected by type erasure?
