awesome-cookie
==============

A tiny script that takes care of all the cookie related problems in JavaScript.
Read about the motivation behind this script [here](http://thealjey.tumblr.com/javascript-cookies).

```javascript
/** Usage example */
//set a cookie
Cookie.set('name', 'John Doe');
//optionally specify the number of days for which the cookie should be valid
Cookie.set('age', 35, 365);
//retrieve a value
Cookie.get('name');
//check if a value exists
if (null !== Cookie.get('bogus')) {}
//or
if (Cookie.get('bogus')) {}
//remove a cookie
Cookie.remove('name');
```