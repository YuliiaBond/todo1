// /* 8. DONE Запросіть у користувача 3-значне число та виведіть
// другу цифру цього числа. Для вирішення завдання використовуйте
// оператор %
// */

// let inputNumber = 896;
// let secondNumb = 0;

// secondNumb = Math.floor((inputNumber / 10) % 10);

// console.log(secondNumb);


// /* 9. DONE Запросіть у користувача 5-значне число та 
// перемістіть останню цифру на початок
// */

// let anyNumber = 12345;
// let newNumb = 0;

// let lastNumb = anyNumber % 10;
// // console.log(lastNumb);
// anyNumber = anyNumber.toString().slice(0, -1);
// // console.log(anyNumber);

// newNumb = parseInt(lastNumb + anyNumber);
// console.log(newNumb);


// /* DONE 10. Зарплата працівника становить $250 + 10% від продажу.
//  Запросіть загальну суму продажу за місяць і 
//  підрахуйте зарплату
//  */

// const salary = 250;
// let percent = 0.1;
// let totalSale = 1000;
// let totalSalary = 0;

// totalSalary = salary + (totalSale * percent);

// console.log(totalSalary);





// /* 8. DONE Користувач вводить суму грошей у гаманці та 
// вартість однієї шоколадки. Програма виводить скільки
// шоколадок може купити користувач і скільки здачі в нього 
// залишилось
// */

// let cash = 505;
// let oneChocolate = 50;
// let quantilyChocolate = 0;
// let surrender = 0;

// quantilyChocolate = Math.trunc(cash / oneChocolate);
// surrender = cash - (quantilyChocolate * oneChocolate);

// console.log(`Користувач може купити ${quantilyChocolate}. Залишилось ${surrender} грошей`)


// /* 9. DONE Запросіть у користувача 3-значне число і 
// виведіть його паліндром. Для вирішення завдання 
// вам знадобиться оператор %
// */

// let anyNumb = 436;
// let palindrom = 0;

// for (; anyNumb; anyNumb = Math.floor(anyNumb / 10)) {
//   palindrom *= 10;
//   palindrom += anyNumb % 10;
// }
//   console.log(palindrom);


// /* 10. DONE Запросіть у користувача число і виведіть у
// відповідь парне або непарне. В завданні використовуйте
// логічні оператори
// */

// let input = 10;
// if (input % 2 === 0) {
//   console.log(`${input} парне число`)
// } else {
//   console.log(`${input} непарне число`)
// }