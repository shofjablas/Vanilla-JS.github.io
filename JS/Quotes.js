const quotes = [
  {
    quote:
      'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
    author: 'Martin Luther King Jr',
  },
  {
    quote:
      'The beginning of worry is the end of faith; and the beginning of faith is the end of worry.',
    author: 'George Muller',
  },
  {
    quote:
      'Get a friend to tell you your faults, or better still, welcome an enemy who will watch you keenly and sting you savagely. What a blessing such an irritating critic will be to a wise man, what an intolerable nuisance to a fool.',
    author: 'Charles Spurgeon',
  },
  {
    quote: 'Trust, but verify.',
    author: 'Ronald Reagan',
  },
  {
    quote: 'The best way to destroy an enemy is to make him a friend',
    author: 'Abraham Lincoln',
  },
  {
    quote: 'Men will trust in God no further than they know Him',
    author: 'Jonathan Edwards',
  },
  {
    quote:
      'The Scriptures of God are my only foundation and substance in all matters of weight and importance.',
    author: 'John Knox',
  },
  {
    quote:
      'Our confidence in Christ does not make us lazy, negligent or careless, but, on the contrary, it awakens us, urges us on and makes us active in living righteous lives and doing good. There is no self-confidence to compare with this.',
    author: 'Ulrich Zwingli',
  },
  {
    quote:
      'We shall never be clothed with the righteousness of Christ except that we first know assuredly that we have no righteousness of our own',
    author: 'John Calvin',
  },
  {
    quote:
      'Do you know Who taught the eagles to find their prey? Well, that same God teaches His hungry children to find their Father in His Word',
    author: 'William Tyndale',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `✨ ${todaysQuotes.quote}`;
author.innerText = ` - ${todaysQuotes.author}`;
