const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
function addTurno() {
  lesson2.turno = 'noite'
}
addTurno();

// Exercício 2
function objectKeys(object) {
  console.log(Object.keys(object));
};
objectKeys(lesson1);

// Exercício 3
function objectSize(object) {
  const array = Object.keys(object);
  console.log(array.length)
};
objectSize(lesson1);

// Exercício 4
function objectValues(object) {
  console.log(Object.values(object));
};
objectValues(lesson1);

// Exercício 5
const objectLesson1 = {
  "lesson1": lesson1 
}
const objectLesson2 = {
  "lesson2": lesson2 
}
const objectLesson3 = {
  "lesson3": lesson3 
}

const allLessons = Object.assign({}, objectLesson1, objectLesson2, objectLesson3);

console.log(allLessons);

// Exercício 6
function studentsSum() {
  const lesson1Students = allLessons.lesson1.numeroEstudantes;
  const lesson2Students = allLessons.lesson2.numeroEstudantes;
  const lesson3Students = allLessons.lesson3.numeroEstudantes;
  return lesson1Students + lesson2Students + lesson3Students;
}
console.log(studentsSum());

// Exercício 7
function getValueByNumber(lesson, number) {
  const array = Object.values(lesson);
  return array[number]
}
console.log(getValueByNumber(lesson2, 3));

// Exercício 8
function verifyPair(lesson, key, value) {
  const arrayKey = Object.keys(lesson);
  const arrayValue = Object.values(lesson);
  if (arrayKey.includes(key) && arrayValue.includes(value)) {
    return true;
  } else {
    return false;
  }
}
console.log(verifyPair(lesson2, 'professor', 'Carlos'));

// Exercício bônus 1
function studentsMathSubject () {
  const arrayEntries = Object.values(allLessons);
  let students = 0;
  for (let index in arrayEntries) {
    console.log(arrayEntries[index]);
    
  }
}
studentsMathSubject();
