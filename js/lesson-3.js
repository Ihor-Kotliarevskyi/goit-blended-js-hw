//1.
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((num) => num ** 2);

// console.log(newNumbers);

// const newArrey = [];
// numbers.forEach((element) => newArrey.push(element ** 2));

// console.log(newArrey);

// -------------------------------------------------------------------------------------------------------------------------------

//2.
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArrey = [];
// for (const key of data) {
//   newArrey.push(...key.values);
// }

// // const newArrey = data.flatMap((obj) => obj.values);

// console.log(newArrey);

// const getFlatArrey = (arr) => arr.flatMap((obj) => obj.values);

// console.log(getFlatArrey(data));

// -------------------------------------------------------------------------------------------------------------------------------

//3.
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// function checkAge(arr, years) {
//   return arr.some((obj) => obj.age < years);
// }
// console.log(checkAge(people, 20));

// -------------------------------------------------------------------------------------------------------------------------------

// 4.
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkAllNumIsPair = (arr, value) => arr.every((item) => !(item % value));

// console.log(checkAllNumIsPair(numbers));

// -------------------------------------------------------------------------------------------------------------------------------

//5.
// Знайдіть перше непарне число

// const numbers = [2, 110, 6, 8, 94, 10, 129];

// const firstOddNum = (arrey, value) => arrey.find((item) => item % value);

// console.log(firstOddNum(numbers, 2));

// -------------------------------------------------------------------------------------------------------------------------------

//6.
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4767, 287, 523, 15, 354, 2];

// const sortNum = (arrey) => arrey.toSorted((a, b) => a - b);

// console.log(sortNum(numbersArray));

// -------------------------------------------------------------------------------------------------------------------------------

//7.
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const sortArrey = (arrey) => arrey.sort((a, b) => a.localeCompare(b));

// console.log(sortArrey(stringArray));

// -------------------------------------------------------------------------------------------------------------------------------

//8.
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const sortUsers = (arrey) => arrey.toSorted((a, b) => a.age - b.age);

// console.table(sortUsers(users));

// -------------------------------------------------------------------------------------------------------------------------------

//9.
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const filteredUser = (arrey) => arrey.filter((obj) => obj.age > 20);

// console.table(filteredUser(user));

// -------------------------------------------------------------------------------------------------------------------------------

//10.
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumNumbers = (array) => array.reduce((acc, num) => (acc += num), 0);

// console.log(sumNumbers(numbers));

// -------------------------------------------------------------------------------------------------------------------------------

//11.
// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:

// class Calculator {
//   number(value) {
//     this.result = value;
//     return this;
//   }
//   add(value) {
//     this.result += value;
//     return this;
//   }
//   subtract(value) {
//     this.result -= value;
//     return this;
//   }
//   multiply(value) {
//     this.result *= value;
//     return this;
//   }
//   divide(value) {
//     if (value !== 0) {
//       this.result /= value;
//       return this;
//     }
//     console.log("Value = 0, divide imposible!");
//     return this;
//   }
//   getResult() {
//     return this.result;
//   }
// }
// const calc = new Calculator();

// const result = calc
//   .number(10)
//   .add(5)
//   .subtract(3)
//   .multiply(4)
//   .divide(2)
//   .getResult();

// console.log(result); // 24

// class Calculator {
//   constructor(value) {
//     this.startValue = value;
//   }

//   number(value) {
//     this.startValue = value;
//     return this;
//   }

//   add(value) {
//     this.startValue += value;
//     return this;
//   }

//   subtract(value) {
//     this.startValue -= value;
//     return this;
//   }

//   multiply(value) {
//     this.startValue *= value;
//     return this;
//   }

//   divide(value) {
//     if (value !== 0) {
//       this.startValue /= value;
//       return this;
//     }
//     console.log(`Value = 0, divide imposible!`);
//     return this;
//   }

//   getResult() {
//     return this.startValue;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(100)
//   .add(85)
//   .subtract(37)
//   .multiply(44)
//   .divide(10)
//   .getResult();

// console.log(result);

// -------------------------------------------------------------------------------------------------------------------------------

//12.
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   //   constructor(parameters) {
//   //     this.#login = parameters.login;
//   //     this.#email = parameters.email;
//   //   }

//   get login() {
//     return this.#login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client();
// console.log(client.email);
// console.log((client.email = "admin@mail.com"));
// console.log(client.email);
// console.log(client);

// const mango = new Client({
//   login: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango);
// console.log(mango.login);
// mango.login = "Super Mango";
// console.log(mango.login);

// console.log(mango.email);
// mango.email = "super_mango@mail.com";
// console.log(mango.email);
// console.log(mango);

// -------------------------------------------------------------------------------------------------------------------------------

//13.
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(parameters) {
//     this.name = parameters.name;
//     this.age = parameters.age;
//     this.gender = parameters.gender;
//     this.email = parameters.email;
//   }
//   getDetails() {
//     return this;
//   }
// }

// class Employee extends Person {
//   constructor(parameters) {
//     super(parameters);
//     this.salary = parameters.salary;
//     this.department = parameters.department;
//   }

//   getEmployeeDetails() {
//     return { salary: this.salary, department: this.department };
//   }
// }

// // Перевірка класу Person
// const person1 = new Person({
//   name: "Anna",
//   age: 25,
//   gender: "female",
//   email: "anna@example.com",
// });
// console.log(person1.getDetails());

// // Перевірка класу Employee
// const employee1 = new Employee({
//   name: "Ivan",
//   age: 30,
//   gender: "male",
//   email: "ivan@example.com",
//   salary: 2000,
//   department: "IT",
// });
// console.log(employee1.getDetails());

// console.log(employee1.getEmployeeDetails());

// // Ще один співробітник
// const employee2 = new Employee({
//   name: "Olga",
//   age: 28,
//   gender: "female",
//   email: "olga@example.com",
//   salary: 2500,
//   department: "HR",
// });
// console.log(employee2.getDetails());
// console.log(employee2.getEmployeeDetails());

// -------------------------------------------------------------------------------------------------------------------------------

// Додаткові завдання

//Підрахунок кількості повторень
//Дано масив:
// //Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
// //Очікуваний результат:
// //{
//  // apple: 3,
//  // banana: 2,
//  // orange: 1
// //}

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const result = fruits.reduce((obj, string) => {
//   obj[string] = (obj[string] || 0) + 1;
//   return obj;
// }, {});

// console.table(result);

// *********Task 1*********

// Найбільше число в масиві
//Дано масив чисел:
//Завдання: Знайдіть найбільше число за допомогою reduce.
//Очікуваний результат:
//48

// const numbers = [1009, 25, 48, 7, 32, 18];

// const result = numbers.reduce((max, num) => {
//   if (max < num) {
//     return (max = num);
//   }
//   return max;
// }, 0);
// console.log(result);

// const randomNumbers = [
//   Math.floor(Math.random() * 1000),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 10),
// ];

// const result = randomNumbers.reduce((max, num) => {
//   if (max < num) {
//     return (max = num);
//   }
//   return max;
// }, 0);
// console.log(result);
// console.log(randomNumbers);

// *********Task 2*********
// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість PRIORITY,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)

// class Notes {
//   static PRIORITY = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGHT: "high",
//   };

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items = this.items.filter((note) => note.text !== text);
//   }

//   updatePriority(text, newPriority) {
//     const note = this.items.find((note) => note.text === text);
//     if (note) {
//       note.priority = newPriority;
//     }
//   }
// }

// const notes = new Notes();

// notes.addNote({ text: "Note1", priority: Notes.PRIORITY.NORMAL });
// notes.addNote({ text: "Note2", priority: Notes.PRIORITY.LOW });
// notes.addNote({ text: "Note3", priority: Notes.PRIORITY.LOW });
// // notes.removeNote("Note1");
// notes.updatePriority("Note2", Notes.PRIORITY.HIGHT);
// console.table(notes.items);
