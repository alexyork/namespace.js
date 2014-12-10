# namespace.js
A simple namespace function for JavaScript.

### Background
To organise code into logical groups, programming languages such as Java and C# have the concept of a `namespace`.

JavaScript does not have the concept of namespaces - but similar functionality can be created. Namespace.js does just that.

### Why?
In some of JavaScript's module patterns, it is often recommended to organise these modules into some kind of a custom namespace to reduce global clutter:

```javascript
// Create a namespace called 'Animal'
var Animal = window.Animal || {};

Animal.Cat = {
    speak: function() {
    	return 'Meow!';
    }
};

Animal.Cat.speak(); // "Meow!"
```

For longer namespaces, the code for creating the custom namespace can quickly become ugly and unwieldy:

```javascript
// Create a namespace called 'Animal.Mammal.Feline'
var Animal = window.Animal || {};
Animal.Mammal = window.Animal.Mammal || {};
Animal.Mammal.Feline = window.Animal.Mammal.Feline || {};

Animal.Mammal.Feline.Cat = {
    speak: function() {
    	return 'Meow!';
    }
};

Animal.Mammal.Feline.Cat.speak(); // "Meow!"
```

In the snippet above, the top 3 lines of code are ugly and repetative. Namespace.js aims to clean up the process of defining the custom namespace:

```javascript
namespace('Animal.Mammal.Feline');

Animal.Mammal.Feline.Cat = {
    speak: function() {
    	return 'Meow!';
    }
};

Animal.Mammal.Feline.Cat.speak(); // "Meow!"
```

### Usage (browser)
1) Include namespace.js in your HTML:

```html
<script src="namespace.js"></script>
```

2) Define and then extend a namespace in your JavaScript:

```javascript
namespace('Animal.Mammal.Feline');

Animal.Mammal.Feline.Cat = {
    speak: function() {
    	return 'Meow!';
    }
};
```

3) Call your namespaced JavaScript code from elsewhere:

```javascript
Animal.Mammal.Feline.Cat.speak(); // returns 'Meow!'

// or

var cat = Animal.Mammal.Feline.Cat;
cat.speak(); // returns 'Meow!'
```

### Modules? Self-executing functions?
Namespace.js does not care what you do with the namespace. It doesn't matter if you use a fancy JavaScript module pattern, or wrap all or none of your code in a self-executing function.

All namespace.js does is create the namespace in a readable and concise manner.

### Usage (Node.js)

Currently, namespace.js will not work in Node because `window` is referenced in both the source and the spec files. I am sure this is trivial to fix, but I have not gotten round to it yet since I made this and used it within the context of a browser, not a Node app.