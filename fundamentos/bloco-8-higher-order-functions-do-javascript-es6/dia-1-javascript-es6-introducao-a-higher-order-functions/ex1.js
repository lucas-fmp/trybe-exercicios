const createNewPerson = (fullName) => {
  const object = {};
  const email = `${fullName.replace(' ', '_').toLowerCase()}@trybe.com`;
  object.name = fullName;
  object.email = email;
  return object;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(createNewPerson));