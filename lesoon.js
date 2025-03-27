

// // Константа - переменная значение которой менять нельзя
// const Age = 24;
// const number = 33;


// //сложение строк
// const surnames = "name1";
// const nameless = "name2";
// const fullName = nameless + " " + surnames;
// console.log(fullName);


// //истина.ложь
// const isAdult = false;
// console.log(isAdult);

// // проверка типа 
// console.log(typeof name)

// // операторы


// let questScore = 0;
// let homeScore = 0;
// questScore = questScore + 1;
// const a = 55;
// const b = 44;
// const sum = a * b;
// console.log(sum);
// //сравнение
// console.log(a == b); // а равно б ?
// console.log(a != b); // а не равно б?
// console.log(a === b); // строгое равно - учитывает тип данных и значение
// console.log(a !== b); // строгое не равно
// // логические- и &&
// const age5 = 18;
// const isRoomClean = true;
//const isAllowGoToParty = (age5 >= 18) && isRoomClean;
//console.log(isAllowGoToParty);
// логические - или ||
// const isAllowGoToParty = (age5 >= 18) || isRoomClean;
// console.log(isAllowGoToParty);

//логические НЕ 
// const title = "";
// const isTitleEmpty = !title;
// console.log(isTitleEmpty);
// // условия
// const gg = 24;
// if (gg > 23) {
//     console.log("ты совершеннолетний")
// } else {
//     console.log("ты не совершеннолетний")
// }
// function sayHello() {
//     console.log("hello");
// }
// sayHello();

// function sumy(a ,b) {
//     return a + b;
// }
// console.log(sumy(3, 4));

// const plan = 10;
// let laps = 0;
// function run() {
//     laps = laps + 1;
// }
// while (laps < plan) {
//     run();
//     console.log(laps);
// }
// console.log("закончили тренировку")
// for (let laps = 0; laps < 10; laps++) {
//     console.log(laps);
    
// }
// console.log("complete")

// const classA = [];
// const classB = ["sergei", "pavel", "sasha"];
// console.log(classB[0])

// classA.push("andrei")
// console.log(classA)

// for (let index = 0; index < classB.length; index++) {
//     const element = classB[index];

//     console.log(element)
    
// }
// classB.forEach(function(element) {
//     console.log(element);
// })

const person = {
    name: 'sergei',
    city: 'dybai',
    age: "19",

    isAdult: function() {
        return this.age >= 18;
    },
    sayHi: function() {
        console.log('hi my name ' + this.name)
        if (this.isAdult()) {
            console.log("my age more 18")
        }
    }
};
person.sayHi();

// const people = [
//     {
//         name: 'sergei',
//         city: "dybai",
//         age: 28,
//     },
//     {
//         name: 'pavel',
//         city: "dybai",
//         age: 28,
//     },
//     {
//         name: 'sasha',
//         city: "dybai",
//         age: 28,
//     },
// ]

people.forEach(function(person){
    console.log(person.name);
})
