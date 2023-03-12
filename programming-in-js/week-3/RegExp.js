/* A RegExp object is another built-in object in JavaScript. It's used to pattern-match strings using what's known as "Regular Expressions". Regular Expressions exist in many languages, not just JavaScript */
new RegExp();

/* alternatively use a pattern literal instead of the regExp above. We are using /d/ as a patern literal passed-in as an argument to the match method on a string. */

"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]
