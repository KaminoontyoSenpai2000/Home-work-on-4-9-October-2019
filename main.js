/* eslint-disable no-console */
/*
const isCorrectNumber = (n) => {
  if (!Number.isNaN(n)) {
    const r = parseInt(n, 10);
    return !Number.isNaN(r);
  }
  return false;
};

const div = (divident, divider) => (divident - (divident % divider)) / divider;

const deg = (n, d) => (d === 0 ? 1 : n * deg(n, d - 1));

const pow10 = (power) => deg(10, power);

const getDigit = (n, position) => {
  const r = Math.floor(Math.log10(n)) + 1;
  const quotient = div(n, pow10(r - position));

  return quotient % 10;
};

const getDigitsSum = (n, p1, p2) => {
  let sum = 0;
  for (let i1 = p1; i1 <= p2; i1 += 1) {
    sum += getDigit(n, i1);
  }
  return sum;
};

const isLuckyNumber = (n) => getDigitsSum(n, 1, 3) === getDigitsSum(n, 4, 6);

// ==========================================================================

const luckyNumberTask = () => {
  const number = '923482';

  if (isCorrectNumber(number)) {
    if (isLuckyNumber(number)) {
      console.log(`${number} is Lucky number.`);
    } else {
      console.log(`${number} is not Lucky.`);
    }
  } else {
    console.log('Incorrect number format');
  }
};

const point = {
  x: 123,
  y: 345,
};

console.log(point);

const movePoint = (p, dx, dy) => ({ x: p.x + dx, y: p.y + dy });

const p = movePoint(point, 12, 34);

console.log(p);

const distance = (p1, p2) => Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));

console.log(distance(point, p));
*/



const person = {
  address: 'Grodno',
  firstName: 'Ivan',
  lastName: 'Pupkin',
  age: 34,
  weight: 85,
};

const personSchema = {
  address: 'string',
  firstName: 'string',
  lastName: 'string',
  age: 'number',
  weight: 'number',
};

const validateBySchema = (hash, schema) => {
  let i
  for (const key in hash) {
   
      if (typeof hash[key] === schema[key]  && Object.keys(hash).length == Object.keys(schema).length ){
      i = true; 
    }
    else{return false}
  }
  return i
};
console.log(validateBySchema(person,personSchema));