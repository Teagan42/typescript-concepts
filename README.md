# Collection of Projects Demonstrating Typescript Concepts

Each project is a small project designed to illustrate key concepts in Typescript (and others), along with Software Deisn principles and using the NestJS framework.

## 00 Typescript Basics

This section focuses on some of the key aspects of the Typescript Language. I try to show by example how certain code will behave at runtime.

### Projects

##### Type Behavior

This is informal, rather than interactive. It goes over some common development practices and how they may impact runtime execution.

#### Generics

If you have never heard of Type Erasure, this is one you should focus on. Type Erasure is not solely a Typescript concept, but understanding what Type Erasure is, when it occurs and how to avoid or use it to your advantage. I provided a few exampled, even compiling the results and displaying Typescript and it's corresponding JavaScript side by side.

#### Decorators

This demonstrates how to apply a Decorator to a class as well as the transpiled JavaScript code compares.


## 01 Inversion of Control

This section focuses on the benefits of Inversion of Control, and how you might utilize it without any separate libraries.

### Projects

#### A Very Naive Approach

This example is disigned to illustrate the way you SHOULD NOT develop.

#### Framework Free IoC

What is IoC? It stands for Inversion of Control. A lot of developers, if they feel they nend an instance of a repository or service, will simply instantiate what they need where they need it - this is illustrated in the Naive Approach above. This example shows by providing the dependencies to the clas (instead of the cass instantiating it), you start to see how flexible and maintainable your code is staring to get

#### IoC and Generic

I will be the first to admit, I could have provided a better example. Working with what is here though, the entry point to the application instantiates the implementation for each component's dependency and provides it via constructor arguments. You will notice there are two implementations for each dependency, a MOCK and an API - can you guess when and why we would need ether of those?

### NestJS

The following examples are meant to help understand the framework, as well as clear up some of the questions.

#### Type Erasure

The concept is there, but I would like to rework it to be clearer.

#### Factory Provider

This project is aimed to illustrate what a FactoryProvider is and how it can be used in NestJS. 

#### Other Providers

We have all seen service providers (simply add the Class to the `providers` array and add it as a constructor parameter).
Here are examples of how to use a `ClassProiver` and `ValueProvider` - please review NestJS documentation for more informationa;
https://docs.nestjs.com/fundamentals/custom-providers

#### Configuration

A fairly ubiquitoous concept in software and systems engineering, is configuration - API keys, Uplink URL, SLL certs, you name it can all be configured for the application to use.
There are two ways to have your application absorb the configuration, my personal choise is to utilize the `registerAs` configuration method. It takes 2 arguments, an InjectionToken and a simple callable method that takes no parameters and returns a dictionary containing the configuration as ad dictionary - this pattner is demonstrated in the config project of this repo.

#### Controllers

Our team will most likely not be using controllers much, if at all. However, if we need one - know hat controllers and resolvers and providers are essentially all the same - controllers are just treated slightly differently.
For one, the @Controller decorator accepts the root path to all endpoints registered whith in the controller using `Get` `Post` `Push`, etc. Each of these decorators can specify and endpoint to be mapped and handled.
If you feel like going a bit further, the RouterModule from NestJS allows you to define how controllers stack upon another, or spliter off on a new branch. More info here: https://docs.nestjs.com/recipes/router-module#router-module



#### Controllers


