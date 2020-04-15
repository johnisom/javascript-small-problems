// Exercise 2

const logInBox = function logInBox(text, maxWidth) {
  let length = maxWidth - 4 || text.length;

  let pattern = new RegExp(`(?<=\\s+|^).{1,${length}}(?=\\s+|$\\n?)`, 'g');
  let lines = text.replace(/\s+/g, ' ').match(pattern);

  let horiz_rule = '+-' + '-'.repeat(length) + '-+';
  let empty_line = '| ' + ' '.repeat(length) + ' |';

  console.log(horiz_rule);
  console.log(empty_line);

  lines.forEach(line => console.log('| ' + line.padEnd(length) + ' |'));

  console.log(empty_line);
  console.log(horiz_rule);
};

logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 20);

logInBox(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Ut neque ante, mollis at nisl et, ultricies mollis purus. Mauris aliquam felis
ac nunc bibendum mollis. Sed tortor odio, bibendum ut dictum fringilla,
ullamcorper viverra neque. Pellentesque ac orci fermentum ante interdum
vehicula. Etiam sed dolor sed ex scelerisque euismod. Ut lacinia tristique
quam eu tristique. Sed sed velit et metus placerat efficitur. Quisque pharetra
tempus ex. Curabitur vel nunc nec urna sagittis dapibus. Sed purus eros,
fringilla at tincidunt at, aliquet eget orci.`, 80);

/*
*/
