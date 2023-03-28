# The Naive Approach

After reading all this information, it should be clear what a `naive` approach to devlopment is: A very tightly coupled solution, requiring large chunks of time to fix issues that shouldn't happen due to being tightly coupled.

## Models

These are simple data structures that may represent a collection of fields. Usually models do not contain methods, but that's not a universal opinion.
In this example, we have two models - one to represent a user of our system, and on to represent a post (think blogs or reddit).

A post is linked to a single user - the author, but a user can be linked to many posts. The linkage mechanism, at least in this project is performed via the services.

## Services

Services do work; ideally they should do a singular unit of work and do it well. Here, the post service handles retrieving and creating posts, the User service does the same with users.

At first glance, these services seem perfectly reasonably put together.

Ok, so that statement should make it obvious that there's some problems with these services.

# Problems

Is it trying to take the job of that hard working post service?  

The user service creates the post service, what if the business needs change?

The post service is so undervalued... the user service literally copied one of it's tasks!

If you wanted to unit test the user service, how would you ensure that it didn't actually create posts in production?
