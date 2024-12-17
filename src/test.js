// Задача 1: Уникальные значения в массиве
// Создай функцию, которая принимает массив чисел и возвращает новый массив с уникальными значениями.

// function getUniqueValues(numbers) {
//   return [...new Set(numbers)];
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = getUniqueValues(numbers);
// console.log(uniqueNumbers);

// Основные методы:
// add(value) — добавляет новый элемент в Set.
// delete(value) — удаляет элемент.
// has(value) — проверяет, есть ли элемент в Set.
// clear() — удаляет все элементы.
// size — возвращает количество элементов в Set.

// function getUniqueNumbers(arr) {
//   let uniqueArr = [];
//   for (let num of arr) {
//     if (!uniqueArr.includes(num)) {
//       uniqueArr.push(num);
//     }
//   }
//   return uniqueArr;
// }

// console.log(getUniqueNumbers([1, 1, 2, 2, 3, 3, 4, 5])); //[ 1, 2, 3, 4, 5 ]

//----------------------------------------------------------------------------------------------------------------------------------------

// 2. Создайте замыкание:
//     * Напишите функцию-счётчик, которая увеличивает своё значение на 1 при каждом вызове.

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counterSet = counter();

// console.log(counterSet());
// console.log(counterSet());

// function counterTen() {
//   let count = 10;
//   return function () {
//     return ++count;
//   };
// }

// const counterR = counterTen();
// console.log(counterR()); // 11
// console.log(counterR()); // 12

/* 
Для функции замыкания - нужно будет использовать функцию в вункции, как матрежка. 

*/
