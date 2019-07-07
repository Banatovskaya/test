"use strict";
var a, b;
var money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    chooseOptExpenses: function() {
        for (a = 1; a < 4; a++) {
            appData.optionalExpenses[a] = 
            prompt("Статья необязательных расходов?", "");
        }
    },
    detectDayBudget: function () {
        let moneyPerDay = (appData.budget / 30).toFixed();
        alert('бюджет на день-' + moneyPerDay + 'дол.');
        return moneyPerDay;
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 200) {
            alert("мало");
        } else if (appData.moneyPerDay >= 200 && appData.moneyPerDay < 2000) {
            alert("средне");
        } else if (appData.moneyPerDay >= 2000) {
            alert("великолепно");
        }
    },
    checkSevings:function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений");
            let persent = +prompt("под какой процент");
            appData.monthIncome = save * persent / 100 / 12;
            alert("доход с вашего депозита в месяц " + appData.monthIncome);
        }
    },
    chooseIncome: function(){
        let items;
        do {
             items=prompt("что принесет дополнительный доход? (Перечислите через запятую)", "");
        } while ((typeof(items) != 'string')||!(isNaN(items))||(items == null)||(items == ""));
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?", ""));
        appData.income.sort();
        appData.income.forEach (function (item, i) {
            alert ((i+1)+" "+item);
        })
    }
};

appData.budget = start();
appData.chooseExpenses();
appData.moneyPerDay = appData.detectDayBudget();
appData.detectLevel();
console.log(appData);
appData.checkSevings();
appData.chooseOptExpenses();

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", ""); 
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    return money;
};
console.log("Наша программа включает в себя данные:");
for (key in appData){
    console.log(key, appData[key]);
}

