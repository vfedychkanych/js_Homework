// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let res = document.getElementById('result_1');
let form = document.forms.namedItem('firstform');
form.onsubmit = function (ev) {
    ev.preventDefault();
    let user ={
        name: this.userName.value,
        surname: this.userSurname.value,
        age: this.userAge.value
    }
    res.innerHTML = JSON.stringify(user);
}



// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let h1 = parseInt(document.getElementById('reset').innerText);
let h1 = parseInt(localStorage.getItem('counter')) || 0;
window.onload= function () {
    h1 += 1;
    document.getElementById('reset').innerText = h1;
    localStorage.setItem('counter', h1);
}
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування
// сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arrayOfObjects = [];
for (let i = 0; i < 100; i++) {
    let obj = {
        index: i + 1,
        name: `Object${i + 1}`
    };
    arrayOfObjects.push(obj);
}
localStorage.setItem('iterI', '0');
localStorage.setItem('iterK', '9');

let ulObj = document.getElementById('ulforobj');
let btnNext = document.getElementById('nextB');
let btnPrev = document.getElementById('prevB');
for (let i = parseInt(localStorage.getItem('iterI')); i <parseInt(localStorage.getItem('iterK')) ; i++) {
    let li = document.createElement('li');
    li.innerText = JSON.stringify(arrayOfObjects[i]);
    ulObj.appendChild(li);
}
btnNext.addEventListener('click', function (e) {
    e.preventDefault();
    if(parseInt(localStorage.getItem('iterK'))+10 < 100){
        ulObj.innerText = '';
        localStorage.setItem('iterI', `${parseInt(localStorage.getItem('iterI')) + 10}`);
        localStorage.setItem('iterK', `${parseInt(localStorage.getItem('iterK')) + 10}`);
        for (let i = parseInt(localStorage.getItem('iterI')); i < parseInt(localStorage.getItem('iterK')); i++) {
            let li = document.createElement('li');
            li.innerText = JSON.stringify(arrayOfObjects[i]);
            ulObj.appendChild(li);
        }
    }
});
btnPrev.addEventListener('click', function (e) {
    e.preventDefault();
    if(parseInt(localStorage.getItem('iterI'))-10 >= 0){
        ulObj.innerText = '';
        localStorage.setItem('iterI', `${parseInt(localStorage.getItem('iterI')) - 10}`);
        localStorage.setItem('iterK', `${parseInt(localStorage.getItem('iterK')) - 10}`);
        for (let i = parseInt(localStorage.getItem('iterI')); i < parseInt(localStorage.getItem('iterK')); i++) {
            let li = document.createElement('li');
            li.innerText = JSON.stringify(arrayOfObjects[i]);
            ulObj.appendChild(li);
        }
    }
});
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let btnDelete = document.getElementById('delete');
btnDelete.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('text').remove();
});
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('check18').addEventListener('click', function (e) {
    e.preventDefault();
    let age = document.forms.namedItem('fourthform').userAge.value;
    if(parseInt(age) >= 18){
        alert("Welcome to hub!");
    }else{
        alert("Go grow up first!");
    }
});


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість комірок, третій вмиіст комірок.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let btnContent = document.getElementById('tabblebtn');
btnContent.addEventListener('click', function (e) {
    e.preventDefault();
    let table = document.getElementById('fifthTable');
    let countLines = document.forms.namedItem('fifthform').countLines.value;
    let countCells = document.forms.namedItem('fifthform').countCells.value;
    let content = document.forms.namedItem('fifthform').content.value;
    for (let i = 0; i < countLines; i++) {
        let line = document.createElement('tr');
        for (let j = 0; j < countCells; j++) {
            let cell = document.createElement('td');
            cell.innerText = content;
            line.appendChild(cell);
        }
        table.appendChild(line);
    }
});
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
