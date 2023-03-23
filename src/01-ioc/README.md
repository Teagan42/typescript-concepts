# Inversion of Control

If unfamiliar, just understand that if a class, serivce or function is dependent on some other component in the system, instead of instantiated what it needs, the dependency is provided directly to the call-site in question

## Why Inversion of Control (IoC)

Have you ever tried to write a full suite of tests against a class that was in control of it's dependencies? I'll asumme it was a poin in the but.

If a service is dependent on a database repository - by allowing the application context to provide the database repository, we gain the ability to provide anything that matches the contract the serivce expects (i.e. checkBalance, withdraw) etc. We could provide a complete mock version of the depenencie, or in some cases, your organization changes backend tooling... by provinding the interface to the backend tooling - you do not have to refactor any logic within the service itself! 
