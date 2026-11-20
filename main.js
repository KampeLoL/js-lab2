const grades = require("./data");
const calculateAverage = require("./calculateAverage");
const findTopStudent = require("./findTopStudent");
const filterFailed = require("./filterFailed");
const addLetterGrade = require("./addLetterGrade");

const passScore = 60;

console.log("Средний балл группы:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Должники:", filterFailed(grades, passScore));
console.log("Итоговый массив с буквенными оценками:");
console.log(addLetterGrade(grades));
