### Homework 5

_Due Mon. Aug.17_

####Synopsis

- **Problem 1:** A Cards Module _[20% of total time]_ **Goals:** Start working with IIFEs and closure to create a self-contained module for your cards.
- **Problem 2:** All Hands Off Deque _[25%]_ **Goals:** Get more comfortable with closure by creating a secure version of the deque from last week.
- **Problem 3:** Secrets At All Levels _[25%]_ **Goals:** Build on Monday's in-class password example to practice closures at the level of both instance and factory methods.
- **Problem 4:** Coming soon!

---


---

[X]**1)  Card module**

Package your earlier playing-card code into a module; that is, wrapped inside an immediately-invoked function expression (IIFE, or "Iffy").  Your module should return one object: the factory _makeCard_.  As before, calling `makeCard(id)` should create and return a card object with methods for rank, suit, name, etc.  But this time, the shared methods don't need to be linked initially to the factory; they can just be ordinary functions within the IIFE, where they are protected from the global scope.

The instance methods still need to be linked to each instance, and the factory methods (e.g. `isCard()`) still needs to be linked the factory.  But any other helper-functions or arrays which do not need to be public should remain inaccessible from outside the IIFE.

You may use the [template file](cards4-template.js) to get started.

---

[ ]**2)  All hands off deque**

The implementation of a deque in Homework 4, Problem 2e), tries to maintain the integrity of the deque contents by preventing a _push_ or _unshift_ of items not in the original deque.  But a programmer could deliberately or accidentally circumvent those efforts by accessing and changing the deque's array instead of using its methods.  

[X]**a)**
Write another version of a deque factory which protects the deque instances by using closure to hide their content arrays from the outside world.  Your deque methods should be the only way of changing their hidden arrays.  You may use the [template file](deque2-template.js) to get started.

[??] Why is var array = values.slice() slicing values and are they being put in a array? 

_(Hint #1: you'll have to give up the strategy of sharing factory methods with instances to avoid redundancy.  Instead, have each call to the factory generate a set of methods specific to one deque instance which can access any private arrays associated with it.)_

_(Hint #2: the private arrays will live in a function scope, not in an object.)_

[X]**b)** Wrap the deque factory in an IIFE to create a module which exports _makeDeque_.
[??] How do you call IIFE's 
[??] What does it mean to 'export' _makeDeque_?


---

[ ]**3) Secrets at all levels**

[ ]**a)**  Write a user-registration tool, a factory function `makeUser(name,pwd)` which accepts a username and password and generates a user object.  Once we have a user object we should be able to do two things with it: retrieve the corresponding username and test to see if a provided password matches that user's password.  Each user will have these methods:

  + `getName()` returns the username;
  + `validate(str)` takes a string and returns true if it matches that user's password.

It should not be possible, however, to modify the username or password once created nor to directly see the password.

Here is a [template](users-template.js) to get you started.

[ ]**b)**  Now that we can make user objects, let's assume that our system needs some version of a "system log" that will record messages left by different users. This system log, being shared by all user objects created, will contain all the messages that users have recorded. You will need to modify the factory you made above to be a part of a module that has a private variable that holds the system log.

  + Each *user* object should have an additional method `record(message)` which writes an entry to the shared log in the format "_username: message_" and returns true.  If no message is provided, the `record` method should return undefined instead.

  + Reading from the log is a operation of the system and not of individual users.
  The factory itself should have a method `getLog(username)` whose argument _username_ is optional.  If _username_ is provided, _getLog_ should return a string of all log entries recorded by that user.  If _username_ is omitted (therefore undefined), return a string of all log entries from everyone.  In either case, log entries should be separated by newlines.

The log should not be able to be modified other than through a user's _record_ method.

---

**4)**

This problem is under construction and will be ready later today (Tues).  Get started on problems 1-3 and watch this space!
