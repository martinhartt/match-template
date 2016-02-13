#match-template

A function which filters out an object according to set template object.

##Installation

```bash
npm install match-template
```

##Usage

```javascript
var matchTemplate = require('match-template');

var template = {
    id: true,
    name: true,
    location: {
        town: true,
    }
};

var object = {
    id: 5,
    name: 'Tom',
    surname: 'Smith',
    isMember: false,
    location: {
        town: 'Manchester, UK',
        address: '32 Baker Street',
        postcode: 'M25 HA2',
    },
};

var filteredObject = matchTemplate(object, template);

console.log(filteredObject);
/**
{
    id: 5,
    name: 'Tom',
    location: {
        town: 'Manchester, UK',
    },
}
*/
```

##Todo

- Add unit testing
- Make more clear documentation
- Comment the code
