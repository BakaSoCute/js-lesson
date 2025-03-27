const limit = 1000;
const expenses = [];
function trackExpanse(money) {
    expenses.push(money);
}

function calculate() {
    let sum = 0;
    expenses.forEach(function(expanse) {
        sum = sum + expanse;
    });
    return sum;
}
function checBalance() {
    if (calculate() < limit) {
        console.log('мы в лимите');
    } else {
        console.log('лимит превышен')
    }
}