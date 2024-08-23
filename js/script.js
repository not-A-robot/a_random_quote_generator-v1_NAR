/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'I have made this letter longer than usual because I lack the time to make it shorter.',
    source: 'Blaise Pascal',
    citation: 'Lettres Provinciales',
    year: 1657
  },
  {
    quote: 'I\'m not arguing, I\'m just explaining why I\'m right.',
    source: 'Monty Python',
    citation: 'Monty Python\'s Flying Circus',
    year: 1970
  },
  {
    quote: 'I don\'t know half of you half as well as I should like; and I like less than half of you half as well as you deserve.',
    source: 'Bilbo Baggins',
    citation: 'The Fellowship of the Ring',
    year: 1954
  },
  {
    quote: 'I have measured out my life with coffee spoons.',
    source: 'J. Alfred Prufrock',
    citation: 'The Love Song of J. Alfred Prufrock',
    year: 1915
  },
  {
    quote: 'I have seen the future, and it is just like the present, only longer.',
    source: 'Kehlog Albran',
    citation: 'The Profit',
    year: 1966
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return quotes[randomNumber]
}

console.log(getRandomeQuote(quotes.length))

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);