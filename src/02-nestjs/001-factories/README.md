# Factory Providers

Factory providers don't, by default, provide factories. When the token associated with
a FactoryProvider is used to retrieve a dependency, the factory is invoked and what it
returns is provided. To have your Factory Provider provide a factory, the provider must be
a higher-order-function:

```typescript
{
  provide: "UUIDv4",
  useFactory: () => () => uuidv4()
}
```

## Example: Factories Providing Random Elements of Arrays

In this example, the PostFactory creates a new Post instance and assigns it a random category - I know, not very practical
but it illustrates simple usage. Similarly, the UserFactory creates a User with a random tab.

Sorry, I was running low on inspiration with this one.

## Injecting Dependencies into Factory Providers

In many instances, your factory will require components for one reason or another.

Going back to our User/Post example, we could have used a Post Factory Provider:

```typescript
{
  inject: [UserService],
  useFactory: (userService: UserService) => (userId, title, content) => Post {
    return new Post(userService.getById(userId), title, content);
  },
  provide: "Post Factory"
}
```