# The Perfect Service via Generic Delegates

So far, our services have been fully capable of all interactions with their respective resources.

IoT devices are so ubiquitous, you probably have some in your home. Lights, switches, thermostats, televisions...
The list is nearly endless. Do you really want to write a fully-integrated service for each device type, and the different
models and manufacturers? 

By creating services that handle a specific aspect, that service can be applied to multiple devices! Called handlers, well
because they handle an aspect of the whole.

For example, nearly every IoT device turns on and off - that's a PowerService, or you could be more abstract
and create a toggle service that can handle on/off, handle mute/unmute, etc.

## Starting Small with `Device`

Here we'll assume that any device we will work with has power on/power off. A la, a `PowerHandler`

We could just hard code the Hue or SmartThings API into a `PowerHandler` class... but we already saw previously
the benefits of being able to swap out implementations. When it comes to things like IoT, this is an even more important
development practice. If you built it for Sylvania lights, then buy some Hue lights and Govee... you get the picture.

So, after coding up the various power handler implementations you feel you need. We need to provide them to our device!

The `Device` in this project accepts a generic type argument `PowerDelegate`. Why not just reference the base class and move on?

That is because the device may require slightly different ways of interacting with their handlers - brightness between 1-100
with 5 unit steps or maybe fractional values.

Taking the time to understand the problem your code is to solve will dictate the patterns you implement.

## Here's... Type Erasure

These generics are helpful for your development, but if we have to build these devices during run time - we loose the nuance
the generic types provided!

