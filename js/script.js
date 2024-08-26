/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



/**
 * @typedef  {Object} Quote
 * @property {string} quote - The text of the quote.
 * @property {string} source - The author of the quote.
 * @property {string} [citation] - The title of the work where the quote was found. (optional)
 * @property {number} [year] - The year the quote was published. (optional)
 * @property {string} [tags] - A category or type of quote. (optional)
 */

/**
 * @type {Quote[]} quotes
 * @description An Object Array of Funny Quotes.
 */

const quotes = [
  {
    quote: 'I have made this letter longer than usual because I lack the time to make it shorter.',
    source: 'Blaise Pascal',
    citation: 'Lettres Provinciales',
    year: 1657,
    tags: ''
  },
  {
    quote: 'I\'m not arguing, I\'m just explaining why I\'m right.',
    source: 'Monty Python',
    citation: 'Monty Python\'s Flying Circus',
    year: null,
    tags: 'Movie'
  },
  {
    quote: 'I don\'t know half of you half as well as I should like; and I like less than half of you half as well as you deserve.',
    source: 'J. R. R.  Tolkien',
    citation: '',
    year: null,
    tags: 'Book'
  },
  {
    quote: 'I have measured out my life with coffee spoons.',
    source: 'T.S. Eliot',
    citation: '',
    year: null,
    tags: 'Poem'
  },
  {
    quote: 'I have seen the future, and it is just like the present, only longer.',
    source: 'Kehlog Albran',
    citation: 'The Profit',
    year: 1966,
    tags: 'Book'
  }
];

/**
 * Run on load
 */
printQuote(); //set random color and quote on loading
setInterval(printQuote, 10000); //resets quote every 10 seconds


/**
 * @function colorBg
 * @description  Add/updates an inline style to the Body tag changing the background color to a random RGb value.
 */
function colorBg(){
  let rgb = [];
  for(i = 0; i < 3; i++){
    rgb.push(Math.floor( Math.random() * 255 ));
  }
  let finalRGB = `rgb(${rgb.join(', ')})`
  document.querySelector('body').style.backgroundColor = finalRGB; 
}


/***
 * @function getRandomQuote
 * @description Randomly finds a quote at index [0] > quotes.length and returns a quote object.
 * @param {number} upper - The number of quotes in the data set defined in function printQuote() with argument quotes.length.
 * @param {number} randomNumber - a random number between 0 & the total number of quotes representing the index of the quote.
 * @return {number} - the final random quote index number
***/

function getRandomQuote(upper) {
  const randomNumber = Math.floor( Math.random() * upper );
  return quotes[randomNumber] 
}


/**
 * @function printQuote
 * @description Generates HTML for a quote box with a random quote and its associated metadata,
 * and updates the inner HTML of an element with the id 'quote-box' with the generated HTML.
 * @requires getRandomQuote() - a function that returns a random quote object.
 * @requires quotes - an array of quote objects.
 */
function printQuote() {
  colorBg(); //reset the background color on load
  const randomQuote = getRandomQuote(quotes.length);
  let message = `<p class="quote">${randomQuote.quote}</p>`;

  if (randomQuote.source){ message += `<p class="source">${randomQuote.source}`
  };

  if (randomQuote.citation){ 
    message += `<span class="citation">${randomQuote.citation}</span>`
  };

  if (randomQuote.year){ 
    message += `<span class="year">${randomQuote.year}</span>`
  };

  if (randomQuote.tags){ 
    message += `<span class="year">${randomQuote.tags}</span>`
  };
  
  if (randomQuote.source || randomQuote.citation || randomQuote.year || randomQuote.tags){ 
    message += `</p>`};

 document.getElementById('quote-box').innerHTML = message;

};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);