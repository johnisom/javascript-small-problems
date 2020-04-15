// Exercise 7

/*

The warnings are each being executed twice because we don't have newSpecies
default to null at the beginning of each iteration, so it will have a value
from the last iteration.

I'm fixing this with the let declaration and block scope, both ES6 syntax:

*/

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

const isTransformable = function isTransformable(species) {
  return species[0] === 'w';
}

const transform = function transform(species) {
  return 'were' + species;
}

for (let i = 0; i < species.length; i += 1) {
  const thisSpecies = species[i];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}
