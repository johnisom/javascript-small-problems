// Exercise 8

/*

When we assign `team[ceo] = ...` and others, the expression (`ceo`) is
evaluated and converted to a string before being assigned as the key for some
value. Because `ceo` and the others are object, the string coercion results in
'[object Object]', which isn't very helpful.

Fixed and refactored code below:

 */

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
  name: 'Kim',
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
  name: null,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
  name: 'Alice',
};

const team = {
  ceo,
  scrumMaster,
  developer,
};

const company = {
  team,
  name: 'Space Design',
  projectedRevenue: 500000
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team.ceo.name}`);
console.log(`Scrum master: ${company.team.scrumMaster.name}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);
