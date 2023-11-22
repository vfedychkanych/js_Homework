// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arrayAny = [1, 3.4,' gh ', false, null, "fghr", 34, 5/6, 4, true];
console.log(arrayAny);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let booksFirst_1 = {
        title: 'Harry',
        pageCount: 345,
        genre: 'Drama'
    };
let booksFirst_2 =    {
        title: 'Interferor',
        pageCount: 234,
        genre: 'Comedy'
    };
let booksFirst_3 =    {
        title: 'JavaScript',
        pageCount: 2098,
        genre: 'Science'
    };

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let booksSecond_1 = {
    title: 'Harry',
    pageCount: 345,
    genre: 'Drama',
    authors: ['Vitalii', 34]
}
let booksSecond_2 = {
    title: 'Interferor',
    pageCount: 234,
    genre: 'Comedy',
    authors: ['Fedor', 65]
}
let booksSecond_3 = {
    title: 'JavaScript',
    pageCount: 2098,
    genre: 'Science',
    authors: ['Igor', 28]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arrayUsers = [
    {name: 'Vitalik', userName: 'Figrid', password:'abbabagalamaga'},
    {name: 'Igor', userName: 'Gerd', password:'gkopsdh67'},
    {name: 'Oleg', userName: 'Hids', password:'ufiioub4'},
    {name: 'Pavlo', userName: 'Acger', password:'67t732igv'},
    {name: 'Oksana', userName: 'Hretyu', password:'dbi7623kbf'},
    {name: 'Ivan', userName: 'Jutik', password:'dnp9w8qfo4'},
    {name: 'Ostap', userName: 'Bok Fren', password:'dqakvsd233rf'},
    {name: 'Bogdan', userName: 'Mertysa', password:'dakSD87GF8734F'},
    {name: 'Vika', userName: 'Niframan', password:'YVI76f6IV7'},
    {name: 'Nastya', userName: 'Croutentik', password:'8GCIWE77db'}
];
for (let i = 0; i < arrayUsers.length; i++) {
    console.log(arrayUsers[i].password);
}

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = prompt('Задайте значення X', '3');
if(parseInt(x) !== 1 && parseInt(x) !== 0 && parseInt(x) !== -3){
    console.log('Вірно');
}else{
    console.log('Не вірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю АБО четверту частину години).
let time = prompt('Задайте змінну time (0 - 59.99)', '15');
if(time>=0 && time<15){
    console.log('Перша чверть!');
}else if(time>=15 && time<30){
    console.log('Друга чверть!');
}else if(time>=30 && time<45){
    console.log('Третя чверть!');
}else if(time>=45 && time<60){
    console.log('Четверта чверть!');
}else{
    console.log('Введіть правильні умови, будь ласка!');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('Задайте змінну day (0 - 31)', '15');
if (Number.isInteger(parseInt(day))){
    if(day>=1 && day<11){
        console.log('Перша декада!');
    }else if(day>=11 && day<21){
        console.log('Друга декада!');
    }else if(day>=21 && day<=31) {
        console.log('Третя декада!');
    }else{
        console.log('Таких днів в місяці немає, введіть дані ще раз!');
    }
}else{
    console.log('Хіба бувають дробові дні ??');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = prompt('Задайте день тижня (1 - 7)', '3');
if(parseInt(week)>=1 && parseInt(week)<=7){
    switch (parseInt(week)){
        case 1:  {console.log('Monday'); break;}
        case 2:  {console.log('Tuesday'); break;}
        case 3:  {console.log('Wednesday'); break;}
        case 4:  {console.log('Thursday'); break;}
        case 5:  {console.log('Friday'); break;}
        case 6:  {console.log('Saturday'); break;}
        case 7:  {console.log('Sunday'); break;}
    }
}else{
    console.log('Неправильно введені дані !');
}

// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let firstNumber = prompt('Задайте перше число ', '4');
let secondNumber = prompt('Задайте друге число ', '2');
if(parseInt(firstNumber) === parseInt(secondNumber)){
    console.log('Числа рівні !');
}else if(parseInt(firstNumber) > parseInt(secondNumber)){
    console.log('Перше число більше !');
}else if(parseInt(firstNumber) < parseInt(secondNumber)) {
    console.log('Друге число більше !');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x2 = prompt('Задайте значення X', '0');
if(x2 === "" || parseInt(x2) === 0 || x2 === null || x2 === undefined || isNaN(x2)){
    x2 = "default";
}
console.log(x2);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if(coursesAndDurationArray[i].monthDuration > 5){
        console.log(coursesAndDurationArray[i].title + ' - Супер !!!');
    }
}