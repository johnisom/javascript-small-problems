// Exercise 4

/*

The bug was in the disgusting code somewhere, and I'm pretty sure it's more
efficient to just rewrite all of the logic in a more clean, easy to understand
way. That way it'll be easier to parse in the future and therefore less
error-prone.

(Heavily) refactored solution below:

*/

const wantToVisit = function wantToVisit(museum, city) {
  if (museum.includes('Science') || museum.includes('Computer')) return true;
  if (museum.includes('Modern') && museum.includes('Art')) {
    return museum.includes('Andy Warhol') || city === 'Amsterdam';
  }

  return false;
}

// Tests (should all print 'true')

console.log(wantToVisit('Computer Games Museum', 'Berlin'));
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo'));
console.log(!wantToVisit('Museum of Modern Art', 'New York'));
console.log(!wantToVisit('El Paso Museum of Archaeology', 'El Paso'));
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam'));
console.log(!wantToVisit('National Museum of Modern Art', 'Paris'));
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce'));
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam'));
console.log(!wantToVisit('Van Gogh Museum', 'Amsterdam'));
