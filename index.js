const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

const titleCased = function() {
  return (tutorials.map(str => str.split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ')))
}

// const titleCased = function(array) {
//   return (array.map(str => str.split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ')))
// }

// const titleCased = function(array) {
//   console.log(array.map(str => str.split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ')))
//   // return tutorials
// }

// const titleCased = function(array) {
//   return(array.map(str => str.split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ')))
// }

// const titleCased = function(array) {
//   array.map(str => str.split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' '));
//   return tutorials
// };

// const titleCased = function(array) {
//   array.map(function (str) {
//   return str.split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' '); 
// });
//   return tutorials
// }

// const titleCased = function() {
//   tutorials.map(function (str) {
//   return str.toLowerCase().split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' '); 
// }); 
//   return tutorials;
// }

// const titleCased = tutorials.map(function (str) {
//   return str.toLowerCase().split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' '); 
// }); 


// Source: https://www.w3docs.com/snippets/javascript/how-to-convert-string-to-title-case-with-javascript.html
// function toTitleCase(str) {
//   return str.toLowerCase().split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }

// Source: Slack search. Returns strings in all uppercase.
// const titleCased = () => {
//   return tutorials.map((array) => {
//     const newArray = array.split('')
//     const newerArray = newArray.map((string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
//     )
//     return newerArray.join('')
//   })
// }
