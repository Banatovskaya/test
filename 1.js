'use strict';

let money=prompt("Ваш бюджет на месяц?");
var time=prompt("Введите дату в формате YYYY-MM-DD");
var appData ={
    money1:money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false
 };
var q1=prompt("Введите обязательную статью расходов в этом месяце");
var quest1=prompt('Во сколько обойдется?');
var q2=prompt("Введите обязательную статью расходов в этом месяце");
var quest2=prompt('Во сколько обойдется?');
appData.expenses[q1]=quest1;
appData.expenses[q2]=quest2;
alert('бюджет на день-'+money/30+'дол.');
console.log(appData);
console.log(appData.expenses);
