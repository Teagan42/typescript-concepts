# Framework Free Inversion of Control

## Compare this project to the `naive` implementation

In this project, objects are not instantiated by themselves. In fact, you could argue
that these services have no control over one or the other. The application provides the
classes with the tools they need to do their job.

This is called Inversion of Control.

Now, if we needed to unit test the user service, we simply provide it an instance that has 
mock responses/payloads pre-loaded and even will throw errors to ensure they are handled appropriately.

Currently, these services store their records in an array - why couldn't we provide a SQL Post Server?

The flexibility, testibility and maintainability of our project has now greatly improved!
