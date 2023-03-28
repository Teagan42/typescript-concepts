# Let There Be Providers!!!

Prerequisite Info:

The `@Inject` parameter decorator accepts an injection token and tells NestJS to inject the value mapped to the token.

## Configuration Providers

See `config/user-tag-config.ts`

Configuration Providers are subset of Factory Providers. You include them in
your module via `ConfigModule.forRoot` for `ConfigModule.forFeature`.

To register a configuration provider, use the `registerAs` method from `@nestjs/config`:

```typescript
registerAs(
    "MyConfigToken", 
    () => ({ host: "google.com "})
);
```

### ConfigurationModule.forRoot

Configuration providers loaded via the `forRoot` method do not have individual
injection tokens. You access your configurations by injecting the `ConfigService`:

```typescript
constructor(private readonly configService: ConfigService) {}
```

If you pass an environment variable to the `.get`, it will return the value.  
If you pass an object path, i.e. `database.host` it will return the `host` value of the database config.
There are a few other usages, you can find them here https://docs.nestjs.com/techniques/configuration#using-the-configservice.

### ConfigurationModule.forFeature

The syntax for registering your configuration is only slightly different:

```typescript
export const PrismaConfig = registerAs(
    "My Prisma Config", () => ({
      "url": "postgres://localhost",
      "schema": "bad_movies"
    })
);
```

To inject the configuration into your services/controllers/resolvers:

```typescript
constructor(@Inject(PrismaConfig.KEY) private readonly prismaConfig: ConfigType<typeof PrismaConfig>) {}
```

The `ConfigType<typeof PrismaConfig>` is a type, matching the type that was registered.

## Value Providers

If you need to inject the Application Version and the Api Version - both strings, this won't work:
```typescript
constructor(private readonly applicationVersion: string, private readonly apiVersion: string){}
```
 
Just use the `@Inject` decorator seen above with a registered Value Provider

```typescript
{
  provide: "Application Version",
  useValue: "1.2.6"
}
```

## Class Providers

Since class declarations are not erased at runtime, this provider may seem out of place. Under the hood, this is the provider that handles our services and resolvers.

Let's say you have a `Logger` that is already being injected throughout your app.
```typescript
constructor(private readonly logger: Logger) {}
```

Now, the business wants to implement centralized logging, maybe splunk, or logstash - they aren't sure yet.
Do you rewrite your `Logger` class?

Nah, just use the Class Provider:
```typescript
{
  provide: Logger,
  useClass: LogStashLogger
}
```

Or inject a LogConfig into a Factory Provider that returns a Class Provider... (See `003-factory-plugins`)
