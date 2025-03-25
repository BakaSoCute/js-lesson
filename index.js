let a = 5;
let b = 10;
function multiply(a, b) {
    return a * b;
}
console.log(multiply(a ,b));


const day = 25;
const month = 3;
const year = 2025;
function buildDate(day , month , year) {
    return String(day) + "," + String(month) + "," +  String(year);
};
console.log(buildDate(day, month, year));


let age = 17;
function isAdult1(age) {
    if (age >= 18) {
        return age = true;
    } else {
        return age = false;
    }
}
console.log(isAdult1(age));
let month1 = 11;
function getMonthByNumber(month1) {
    if (month1 === 1) {
        return month1 = "январь"
    }
    if (month1 === 2) {
        return month1 = " февраль"
    }
    if (month1 === 3) {
        return month1 = " март"
    }
    if (month1 === 4) {
        return month1 = " апрель"
    }
    if (month1 === 5) {
        return month1 = " май"
    }
    if (month1 === 6) {
        return month1 = " июнь"
    }
    if (month1 === 7) {
        return month1 = " июль"
    }
    if (month1 === 8) {
        return month1 = " август"
    }
    if (month1 === 9) {
        return month1 = " сентябрь"
    }
    if (month1 === 10) {
        return month1 = " октябрь"
    }
    if (month1 === 11) {
        return month1 = " ноябрь"
    }
    if (month1 === 12) {
        return month1 = " декабрь"
    }
}
console.log(getMonthByNumber(month1));