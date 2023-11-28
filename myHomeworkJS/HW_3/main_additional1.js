// --створити масив з:
// - з 5 числових значень
let arrayWithNumbers = [1,2,3,4,5];
// - з 5 стічкових значень
let arrayWithString = ['1','2','3','4','5'];
// - з 5 значень стрічкового, числового та булевого типу
let arrayWithAll = ['1',2,true,'4',false];
// - та вивести його в консоль
console.log(arrayWithNumbers);
console.log(arrayWithString);
console.log(arrayWithAll);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrayForPush = new Array(5);
arrayForPush[0] = '1';
arrayForPush[1] = '2';
arrayForPush[2] = '3';
arrayForPush[3] = '4';
arrayForPush[4] = '5';
console.log(arrayForPush);

 let arrayRandomNumber = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let i_forArrayRandomNumber = 0;
while (i_forArrayRandomNumber<arrayRandomNumber.length){
    console.log(arrayRandomNumber[i_forArrayRandomNumber]);
    i_forArrayRandomNumber++;
}
//     2. перебрати його циклом for
for (let i = 0; i < arrayRandomNumber.length; i++) {
    console.log(arrayRandomNumber[i]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i_forArrayRandomNumber_2 = 1;
while (i_forArrayRandomNumber_2<arrayRandomNumber.length){
    console.log(arrayRandomNumber[i_forArrayRandomNumber_2]);
    i_forArrayRandomNumber_2= i_forArrayRandomNumber_2+2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 1; i < arrayRandomNumber.length; i=i+2) {
    console.log(arrayRandomNumber[i]);
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let i_forArrayRandomNumber_3 = 0;
while (i_forArrayRandomNumber_3<arrayRandomNumber.length){
    console.log(arrayRandomNumber[i_forArrayRandomNumber_3]);
    i_forArrayRandomNumber_3= i_forArrayRandomNumber_2+2;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arrayRandomNumber.length; i=i+2) {
    console.log(arrayRandomNumber[i]);
}
// 7. замінити кожне число кратне 3 на слово "okten"
let arrayRandomNumber_2 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < arrayRandomNumber_2.length; i++) {
    if (arrayRandomNumber_2[i]%3===0){
        arrayRandomNumber_2[i] = 'okten';
    }
console.log(arrayRandomNumber_2[i]);
}

// 8. вивести масив в зворотньому порядку.
for (let i = arrayRandomNumber.length-1; i >= 0; i--) {
    console.log(arrayRandomNumber[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for (let i = arrayRandomNumber.length-1; i >= 0; i--) {
    if (i%2!==0 && arrayRandomNumber[i] % 2===0) {
        if (arrayRandomNumber[i] % 3 === 0) {
            arrayRandomNumber[i] = 'okten';
        }
        console.log(arrayRandomNumber[i]);
    }
}
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array_10_numbers = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < array_10_numbers.length; i++) {
    console.log(array_10_numbers[i]);

}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array_10_string = ['1','2','3','4','5','6','7','8','9','10'];
for (let i = 0; i < array_10_string.length; i++) {
    console.log(array_10_string[i]);

}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array_10_All = ['1',2,true,'4',5,NaN,'7',null,false,'10'];
for (let i = 0; i < array_10_All.length; i++) {
    console.log(array_10_All[i]);

}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let i = 0; i < array_10_All.length; i++) {
    if(typeof array_10_All[i] === "boolean") {
        console.log(array_10_All[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let i = 0; i < array_10_All.length; i++) {
    if(typeof array_10_All[i] === "number") {
        console.log(array_10_All[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < array_10_All.length; i++) {
    if(typeof array_10_All[i] === "string") {
        console.log(array_10_All[i]);
    }
}
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrayEmptyWithAllTypes = [];
arrayEmptyWithAllTypes[0] = 1;
arrayEmptyWithAllTypes[1] = '2';
arrayEmptyWithAllTypes[2] = null;
arrayEmptyWithAllTypes[3] = 4;
arrayEmptyWithAllTypes[4] = '5';
arrayEmptyWithAllTypes[5] = 6
arrayEmptyWithAllTypes[6] = true;
arrayEmptyWithAllTypes[7] = false;
arrayEmptyWithAllTypes[8] = 9;
arrayEmptyWithAllTypes[9] = '10';
for (let i = 0; i < arrayEmptyWithAllTypes.length; i++) {
    console.log(arrayEmptyWithAllTypes[i]);

}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 11; i++) {
    console.log(i);
    document.write(`<h4> ${i} </h4>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 101; i++) {
    console.log(i);
    document.write(`<h5> ${i} </h5>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 101; i=i+2) {
    console.log(i);
    document.write(`<h5> ${i} </h5>`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 101; i++) {
    if (i % 2 ===0) {
        console.log(i);
        document.write(`<h5> ${i} </h5>`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 101; i++) {
    if (i % 2 !==0) {
        console.log(i);
        document.write(`<h5> ${i} </h5>`);
    }
}


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {name:'Harry', count:234, author:['Lyda',], genre:['fantasy','horror']},
    {name:'Frauger', count:736, author:['Vlad'], genre:['drama']},
    {name:'Dream', count:204, author:['Andrew','Vitalia'], genre:['fantasy']},
    {name:'Live', count:1645, author:['Oleg','Hobbit','Hotdor'], genre:['horror']},
    {name:'Bionic', count:934, author:['Fiona'], genre:['drama']}
];

// -знайти наібльшу книжку.
let maxCount =0;
let IMaxCount;
for (let i = 0; i < books.length; i++)  {
    if(maxCount <= books[i].count){
        maxCount = books[i].count;
        IMaxCount = i;
    }
}
document.write(`<h2> ${books[IMaxCount].name} ${books[IMaxCount].count} ${books[IMaxCount].author} ${books[IMaxCount].genre} </h2>`);
// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenre =0;
let IMaxGenre;
for (let i = 0; i < books.length; i++)  {
    if(maxGenre <= books[i].genre.length){
        maxGenre = books[i].genre.length;
        IMaxGenre = i;
    }
}
document.write(`<h2> ${books[IMaxGenre].name} ${books[IMaxGenre].count} ${books[IMaxGenre].author} ${books[IMaxGenre].genre} </h2>`);
// - знайти книжку/ки з найдовшою назвою
let maxName =0;
let IMaxName;
for (let i = 0; i < books.length; i++)  {
    if(maxName <= books[i].name.length){
        maxName = books[i].name.length;
        IMaxName = i;
    }
}
document.write(`<h2> ${books[IMaxName].name} ${books[IMaxName].count} ${books[IMaxName].author} ${books[IMaxName].genre} </h2>`);
// - знайти книжку/ки які писали 2 автори
for (let i = 0; i < books.length; i++)  {
    if(books[i].author.length===2){
        document.write(`<h2> ${books[i].name} ${books[i].count} ${books[i].author} ${books[i].genre} </h2>`);
    }
}
// - знайти книжку/ки які писав 1 автор
for (let i = 0; i < books.length; i++)  {
    if(books[i].author.length===1){
        document.write(`<h2> ${books[i].name} ${books[i].count} ${books[i].author} ${books[i].genre} </h2>`);
    }
}