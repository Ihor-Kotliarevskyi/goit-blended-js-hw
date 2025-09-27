// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, genres, isPublic, rating } = book;

// // Використовуємо
// const accessType = isPublic ? "pulbic" : "private";
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;

// console.log(accessType);
// console.log(message);
// console.table(book);
// console.table({ title, genres, isPublic, rating });

// -------------------------------------------------------------------------------------------------------------------------------------------

// -----------Завдання 1------------

// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

//1
const bodyElement = document.querySelector("body");
console.log("Element Body:  ", bodyElement);
//2
const titleElement = document.querySelector("#title");
console.log("Element with ID 'title':   ", titleElement);
//3
const listElement = document.querySelector(".list");
console.log("Element with class 'list': ", listElement);
//4
const topicElement = document.querySelectorAll("[data-topic]");
console.log("All elements with data atribute 'data-topic':  ", topicElement);
//5
const firstTopicElement = topicElement[0];
console.log(
  "First element with data atribute 'data-topic': ",
  firstTopicElement
);
//6
const lastTopicElement = topicElement[topicElement.length - 1];
console.log(
  "Last element with data atribute 'data-topic':  ",
  lastTopicElement
);
//7
const h1Element = document.querySelector("h1");
console.log("Sibling element for tag h1:    ", h1Element.nextElementSibling);
//8
const h3Element = document.querySelectorAll("h3");
const textOftitles = h3Element.forEach((elem) => {
  console.log("Text content of tag h3:  ", elem.textContent);
});
//9
h3Element.forEach((elem) => elem.classList.add("active"));
//10
const allLiElement = document.querySelectorAll("li");

allLiElement.forEach((elem) => {
  if (elem.dataset.topic !== "navigation") {
    return;
  } else {
    console.log("Element with data atribute 'navigation':   ", elem);
    //11
    elem.style.backgroundColor = "yellow";
    //12
    for (const child of elem.children) {
      if (child.nodeName === "P") {
        child.textContent = "Я змінив тут текст!";
      }
    }
  }
});
//13
allLiElement.forEach((elem) => {
  const currentTopic = "manipulation";

  if (elem.dataset.topic !== currentTopic) {
    return;
  } else {
    console.log("Element with data atribute from 'currentTopic':   ", elem);
    //14
    elem.style.backgroundColor = "cyan";
  }
});
//15
const completedElement = document.querySelector(".completed");
console.log(completedElement);
//16
completedElement.parentElement.remove();
//17
const text = document.createElement("p");
text.textContent = "Об'єктна модель документа (Document Object Model)";
listElement.insertAdjacentHTML("beforebegin", text.innerHTML);
//18
const item = document.createElement("li");
const itemTitle = document.createElement("h3");
itemTitle.textContent = "Властивість innerHTML";
item.append(itemTitle);
const itemText = document.createElement("p");
itemText.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
item.append(itemText);

listElement.insertAdjacentHTML("beforeend", item.innerHTML);
//19
const markup = `<li>
<h3>Властивість innerHTML</h3>
<p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>`;

listElement.insertAdjacentHTML("beforeend", markup);

// listElement.innerHTML = "";

// -------------------------------------------------------------------------------------------------------------------------------------------

// -----------Завдання 2------------
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// -------------------------------------------------------------------------------------------------------------------------------------------

// -----------Завдання 3------------
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// -------------------------------------------------------------------------------------------------------------------------------------------

// -----------Завдання 4------------
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
