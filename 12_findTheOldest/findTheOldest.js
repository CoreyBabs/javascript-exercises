const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    let oldestDeath = "yearOfDeath" in oldest ? oldest["yearOfDeath"] : new Date().getFullYear();
    let personDeath = "yearOfDeath" in person ? person["yearOfDeath"] : new Date().getFullYear();
    let oldestAge = oldestDeath - oldest["yearOfBirth"];
    let personAge = personDeath - person["yearOfBirth"];
    return oldestAge > personAge ? oldest : person;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
