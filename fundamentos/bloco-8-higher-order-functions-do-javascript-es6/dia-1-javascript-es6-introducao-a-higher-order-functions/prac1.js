const wakeUp = () => 'Acordando!!';

const breakfest = () => 'Bora tomar um café!!';

const goingSleep = () => 'Partiu dormir!!';

const doingThings = (func) => func;

console.log(doingThings(wakeUp()));
console.log(doingThings(breakfest()));
console.log(doingThings(goingSleep()));
