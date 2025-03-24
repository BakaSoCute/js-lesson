// let - объявление переменной 
let name;
name = "sergei";
console.log(name);
let surname = "sasha";
console.log(surname);
name = "pavel";
console.log(name);




// Константа - переменная значение которой менять нельзя
const Age = 24;


//сложение строк
const surnames = "name1";
const nameless = "name2";
const fullName = nameless + " " + surnames;
console.log(fullName);


//истина.ложь
const isAdult = false;
console.log(isAdult);

// проверка типа 
console.log(typeof name)

// операторы


let questScore = 0;
let homeScore = 0;
questScore = questScore + 1;
const a = 55;
const b = 44;
const sum = a * b;
console.log(sum);
//сравнение
console.log(a == b); // а равно б ?
console.log(a != b); // а не равно б?
console.log(a === b); // строгое равно - учитывает тип данных и значение
console.log(a !== b); // строгое не равно
// логические- и &&
const age5 = 18;
const isRoomClean = true;
//const isAllowGoToParty = (age5 >= 18) && isRoomClean;
//console.log(isAllowGoToParty);
// логические - или ||
const isAllowGoToParty = (age5 >= 18) || isRoomClean;
console.log(isAllowGoToParty);

//логические НЕ 
const title = "";
const isTitleEmpty = !title;
console.log(isTitleEmpty);