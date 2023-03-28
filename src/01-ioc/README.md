# Inversion of Control

If unfamiliar, just understand that if a class, serivce or function is dependent on some other component in the system, instead of instantiated what it needs, the dependency is provided directly to the call-site in question

## Why Inversion of Control (IoC)

Have you ever tried to write a full suite of tests against a class that was in control of it's dependencies? I'll asumme it was a poin in the but.

If a service is dependent on a database repository - by allowing the application context to provide the database repository, we gain the ability to provide anything that matches the contract the serivce expects (i.e. checkBalance, withdraw) etc. We could provide a complete mock version of the depenencie, or in some cases, your organization changes backend tooling... by provinding the interface to the backend tooling - you do not have to refactor any logic within the service itself!

### Core Concepts

**What is a Provider?**  
A provider is simply a key-value structure that maps an injection token to something that can be provided.

**What can be Provided?**
Pretty much anything! Values, Classes, Object Instances, Functions. 

**What is an Injection Token?**
An injection token is a string, symbol, function or type used as a key to lookup an injectable.

**Provider or Controller?**
A controller differs from a provider in 2 ways: 1. It cannot be provided/injected and 2. It is designed to handle HTTP requests.

**If Provided More than Once, Will I get a different instance?**
That depends on the scope of the provider. The default scope is `singleton` - Nest will provide the same instance when it's rquested.
Request scoped will provide the same instance where needed until the active Request finishes.
`Transient` scope tell NestJS to provide a new instance any time it's requested.
`Durable` - Not sure yet

**NOTE** Whereever a request scoped provider is to be injected, the entire stack is now Request scope!


