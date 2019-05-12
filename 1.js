'use strict';
let money=+prompt("Ваш бюджет на месяц?");
var a,b;
var time=prompt("Введите дату в формате YYYY-MM-DD");
var appData ={
    budget:money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false
 };
for (let i=0; i<2; i++){
    a=prompt("Введите обязательную статью расходов в этом месяце");
    b=prompt('Во сколько обойдется?');  
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
       && a != "" && b != "" && a.length < 50) {
       appData.expenses[a]=b;
    } else { 
        i--;
    } 
};
/*let i=0;
do {a=prompt("Введите обязательную статью расходов в этом месяце");
    b=prompt('Во сколько обойдется?');  
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
       && a != "" && b != "" && a.length < 50) {
       appData.expenses[a]=b;
       i++;
    } 
  
} while(i<2);*/

/*let i=0;
while (i < 2) {
    a=prompt("Введите обязательную статью расходов в этом месяце");
    b=prompt('Во сколько обойдется?');  
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != "" && b != "" && a.length < 50) {
        appData.expenses[a]=b;
        i++;
    } 
};*/

appData.moneyPerDay=appData.budget/30;
alert('бюджет на день-'+appData.moneyPerDay/30+'дол.');

if(appData.moneyPerDay < 200){
    console.log("мало");
} else if (appData.moneyPerDay >= 200 && appData.moneyPerDay <2000 ){
    console.log("средне");
} else if (appData.moneyPerDay >= 2000){
    console.log("великолепно");
}

console.log(appData);



