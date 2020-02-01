"use strict";
let start = document.querySelector("#start");

//Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
let budgetValue = document.querySelector (".budget-value"),
    dayBudgetValue = document.querySelector (".daybudget-value"),
    levelValue = document.querySelector (".level-value"),
    expensesValue = document.querySelector (".expenses-value"),
    incomeValue = document.querySelector (".income-value"),
    monthSavingsValue = document.querySelector (".monthsavings-value"),
    yearsSvingsValue = document.querySelector (".yearsavings-value");
  
//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let name1 = document.querySelectorAll (".expenses-item")[0],
    price1 = document.querySelectorAll (".expenses-item")[1],
    name2 = document.querySelectorAll (".expenses-item")[2],
    price2 = document.querySelectorAll (".expenses-item")[3];
   
// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let approveExpenses = document.querySelectorAll ("button")[0],   
    approveOptionalExpenses = document.querySelectorAll ("button")[1],
    countDayBudget = document.querySelectorAll ("button")[2];

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalExpenses1 = document.querySelectorAll(".optionalexpenses-item")[0],
    optionalExpenses2 = document.querySelectorAll(".optionalexpenses-item")[1],
    optionalExpenses3 = document.querySelectorAll(".optionalexpenses-item")[2];

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент,
// год, месяц, день)*/
let possibleIncome = document.querySelector("#income"),
    sevingCheckbox = document.querySelector("#seving"),
    sevingSum = document.querySelector("#sum"),
    sevingPersent = document.querySelector("persent"),
    yearValue = document.querySelector (".year-value"),
    monthValue = document.querySelector (".month-value"),
    dayValue = document.querySelector (".day-value");

start.addEventListener("onclick". function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", ""); 
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    
});

   


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


console.log("Наша программа включает в себя данные:");
for (key in appData){
    console.log(key, appData[key]);
}

