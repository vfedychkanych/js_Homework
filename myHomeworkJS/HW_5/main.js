// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let ploschaPryam =  (a,b) => a*b;
console.log(ploschaPryam(2,3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let ploschaKola = (r) => r * r * Math.PI;
console.log(ploschaKola(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let ploschaCulindr = (h, r) => 2 * Math.PI * h * r + 2 * Math.PI * r^2;
console.log(ploschaCulindr(3,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayVuvid = (array) =>{
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
arrayVuvid([3,4,5,2,3,4,5]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraphWithText = (p)=> document.write(`<p>${p}</p>`);
paragraphWithText('Hello!');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulLiWithText = (li)=> document.write(`<ul>
<li>${li}</li>
<li>${li}</li>
<li>${li}</li>
</ul>
`);
ulLiWithText('Hello!');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulLiWithTextArray = (li,count)=>{
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`);
}
ulLiWithTextArray('Hello friend',5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let ulLiWithTextArrayPrimitive = (array)=>{
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`);
}
ulLiWithTextArrayPrimitive([2,false,NaN,true,'fdsfsd',4]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let displayObjects = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>
        ID = ${array[i].id} 
        Name = ${array[i].name} 
        Age = ${array[i].age}
        </div>`);
    }
}
displayObjects([
    {id:1,name:'Vitalik',age:20},
    {id:2,name:'Vova',age:22},
    {id:3,name:'Polya',age:43}
]);
// - створити функцію яка повертає найменьше число з масиву
let minArray = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if(min > array[i]){
            min = array[i];
        }
    }
    return min;
}
console.log(minArray([2, 3, 5, 9, 5, 3, 2]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum+=array[i];
    }
    return sum;
}
console.log(sumArray([2, 3, 5, 9, 5, 3, 2]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr;
}
console.log(swap([2, 3, 5, 9, 5, 3, 2],0,3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let value = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if(currencyValues[i].currency === exchangeCurrency){
            value = currencyValues[i].value;
        }
    }
    return sumUAH/value;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));