// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arrayFirst = [];
let parniZnach = 0;
for (let i = 0; i < 50; i++) {
    arrayFirst.push(parniZnach);
    parniZnach += 2;
}

//     b. заповнити його 50 непарними числами за допомоги циклу.
let neParniZnach = 1;
for (let i = 0; i < 50; i++) {
    arrayFirst.push(neParniZnach);
    neParniZnach += 2;
}

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arrayFirst.push(Math.floor(Math.random() * 100));
}

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arrayFirst.push(Math.floor(Math.random() * 732)+8);
}
console.log(arrayFirst);
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < arrayFirst.length; i+=3) {
    console.log(arrayFirst[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < arrayFirst.length; i+=3) {
    if (arrayFirst[i]%2===0) {
        console.log(arrayFirst[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArrayFirst=[];
for (let i = 2; i < arrayFirst.length; i+=3) {
    if (arrayFirst[i]%2===0) {
        newArrayFirst.push(arrayFirst[i]);
    }
}
console.log(newArrayFirst);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 0; i < arrayFirst.length; i++) {
    if (arrayFirst[i+1]%2===0) {
        console.log(arrayFirst[i]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let chek= [100,250,50,168,120,345,188];
let sum = 0;
for (let i = 0; i < chek.length; i++) {
    sum+=chek[i];
}
console.log(sum/chek.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrayRandom = [];
for (let i = 0; i < 20; i++) {
    arrayRandom.push(Math.floor(Math.random() * 10)+1);
}
let arrayRandom_5 = [];
for (let i = 0; i < arrayRandom.length; i++) {
    arrayRandom_5[i] = arrayRandom[i] * 5;
}
document.write(`
<h2>${arrayRandom}</h2>
<h2>${arrayRandom_5}</h2>
`);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let anyArray = [1,'2',false,4,'5',12,true,'4'];
let anyArrayNumbers =[];
for (let i = 0; i < anyArray.length; i++) {
    if (typeof anyArray[i] === "number"){
        anyArrayNumbers.push(anyArray[i]);
    }
}
document.write(`
<h2>${anyArrayNumbers}</h2>
`);

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if(usersWithId[i].id === citiesWithId[j].user_id){
            usersWithId[i].adress = citiesWithId[j];
            usersWithCities.push(usersWithId[i]);
        }
    }
}
console.log(usersWithCities);


//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let array10num= [100,250,50,168,120,345,188,876,655,987];
for (let i = 0; i < array10num.length; i++) {
    if (array10num[i]%2===0){
        console.log(array10num[i]);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let copy = [];
for (let i = 0; i < array10num.length; i++) {
    copy[i] = array10num[i];
}
let forWord = [ 'a', 'b', 'c'];
let firstWord = '';
let secondWord= '';
let thirdWord= '';
let t = 0;
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
for (let i = 0; i < forWord.length; i++) {
    firstWord += forWord[i];
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
while (t < forWord.length){
    secondWord +=forWord[t];
    t++;
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (const e of forWord) {
    thirdWord += e;
}
console.log(firstWord);
console.log(secondWord);
console.log(thirdWord);