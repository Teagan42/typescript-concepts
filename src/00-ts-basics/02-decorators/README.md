# Typescript Decorators

There are nearly endless uses for Decorators:
* Log and report the time a method took to run
* Intercept the call to a method
* Validated inputs/outputs of arguments
* Make a class into a singleton
* Apply metadata that is later used to generate GraphWL

## This Project

A ClassDecorator is created named `Singleton` with the class it is decorating as the argument.

It uses the Mixin pattern to create a new class, extending the one provided as an argument
and intercepts any `new` calls, the first time the class is instantiated, a reference to that instance is held in memory so that any future `new` calls will receive the exact same instance.
