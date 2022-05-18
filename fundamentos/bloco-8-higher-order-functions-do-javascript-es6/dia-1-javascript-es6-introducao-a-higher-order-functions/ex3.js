const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const grade = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
};

const verification = (rightAnswers, studentAnswers) => {
  let result = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      result += 1;
    } else if (rightAnswers[index] !== studentAnswers[index] && studentAnswers[index].length === 1) {
      result -= 0.5;
    }
  }
  console.log(result);
}

grade(RIGHT_ANSWERS, STUDENT_ANSWERS, verification);