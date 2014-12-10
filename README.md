# namespace.js
A simple namespace function for JavaScript.

### Background
To organise code into logical groups, programming languages such as Java and C#
have the concept of a `namespace`.

JavaScript does not have the concept of namespaces - but similar functionality
can be created. Namespace.js does just that.

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

### Usage (Node.js)

Currently this will not work in Node.js because `window` is referenced in both the source
and the spec files. I am sure this is trivial to fix, but I have not gotten round to it yet.