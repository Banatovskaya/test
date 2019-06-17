"use strict";
var a, b;
var money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

appData.budget = start();
chooseExpenses();
appData.moneyPerDay = detectDayBudget(appData.budget);
detectLevel(appData.moneyPerDay);
console.log(appData);
checkSevings();
chooseOptExpenses();

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", ""); 
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    return money;
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        a = prompt("Введите обязательную статью расходов в этом месяце", "");
        b = prompt('Во сколько обойдется?', "");
        if ((typeof (a)) === 'string' && 
        (typeof (a)) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

function chooseOptExpenses() {
    for (a = 1; a < 4; a++) {
        appData.optionalExpenses[a] = 
        prompt("Статья необязательных расходов?", "");
    }
}

function detectDayBudget(budget) {
    let moneyPerDay = (budget / 30).toFixed();
    alert('бюджет на день-' + moneyPerDay + 'дол.');
    return moneyPerDay;
}

function detectLevel(moneyPerDay1) {
    if (moneyPerDay1 < 200) {
        alert("мало");
    } else if (moneyPerDay1 >= 200 && moneyPerDay1 < 2000) {
        alert("средне");
    } else if (moneyPerDay1 >= 2000) {
        alert("великолепно");

    }
}

function checkSevings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений");
        let persent = +prompt("под какой процент");
        appData.monthIncome = save * persent / 100 / 12;
        alert("доход с вашего депозита в месяц " + appData.monthIncome);

    }
}
