// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strlen1 = 'hello world';
let strlen2 = 'lorem ipsum';
let strlen3 = 'javascript is cool';
console.log(strlen1.length);
console.log(strlen2.length);
console.log(strlen3.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(strlen1.toUpperCase());
console.log(strlen2.toUpperCase());
console.log(strlen3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strUpLen1 = 'HELLO WORLD';
let strUpLen2 = 'LOREM IPSUM';
let strUpLen3 = 'JAVASCRIPT IS COOL';

console.log(strUpLen1.toLowerCase());
console.log(strUpLen2.toLowerCase());
console.log(strUpLen3.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strBr = ' dirty string   ';
console.log(strBr.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    return str.split(' ');
}

console.log(stringToArray(str));
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let array_1 = [10,8,-7,55,987,-1011,0,1050,0];
let mappedMassive = array_1.map(value => `${value}`);
console.log(mappedMassive);
// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];

function sortNums(nums, ascending) {
    if(ascending === 'ascending'){
       return nums.sort((a,b) => a-b);
    }else{
        return nums.sort((a,b) => b-a);
    }
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a,b) => b.monthDuration-a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration>5))
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((value,index) =>{
    return {id:index+1,...value};
}))
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade',value: '6',color:'black'},
    {cardSuit: 'spade',value: '7',color:'black'},
    {cardSuit: 'spade',value: '8',color:'black'},
    {cardSuit: 'spade',value: '9',color:'black'},
    {cardSuit: 'spade',value: '10',color:'black'},
    {cardSuit: 'spade',value: 'jack',color:'black'},
    {cardSuit: 'spade',value: 'queen',color:'black'},
    {cardSuit: 'spade',value: 'king',color:'black'},
    {cardSuit: 'spade',value: 'ace',color:'black'},

    {cardSuit: 'clubs',value: '6',color:'black'},
    {cardSuit: 'clubs',value: '7',color:'black'},
    {cardSuit: 'clubs',value: '8',color:'black'},
    {cardSuit: 'clubs',value: '9',color:'black'},
    {cardSuit: 'clubs',value: '10',color:'black'},
    {cardSuit: 'clubs',value: 'jack',color:'black'},
    {cardSuit: 'clubs',value: 'queen',color:'black'},
    {cardSuit: 'clubs',value: 'king',color:'black'},
    {cardSuit: 'clubs',value: 'ace',color:'black'},

    {cardSuit: 'diamond',value: '6',color:'red'},
    {cardSuit: 'diamond',value: '7',color:'red'},
    {cardSuit: 'diamond',value: '8',color:'red'},
    {cardSuit: 'diamond',value: '9',color:'red'},
    {cardSuit: 'diamond',value: '10',color:'red'},
    {cardSuit: 'diamond',value: 'jack',color:'red'},
    {cardSuit: 'diamond',value: 'queen',color:'red'},
    {cardSuit: 'diamond',value: 'king',color:'red'},
    {cardSuit: 'diamond',value: 'ace',color:'red'},

    {cardSuit: 'heart',value: '6',color:'red'},
    {cardSuit: 'heart',value: '7',color:'red'},
    {cardSuit: 'heart',value: '8',color:'red'},
    {cardSuit: 'heart',value: '9',color:'red'},
    {cardSuit: 'heart',value: '10',color:'red'},
    {cardSuit: 'heart',value: 'jack',color:'red'},
    {cardSuit: 'heart',value: 'queen',color:'red'},
    {cardSuit: 'heart',value: 'king',color:'red'},
    {cardSuit: 'heart',value: 'ace',color:'red'}
];
// - знайти піковий туз
console.log(cards.find(value => value.cardSuit==='spade'&&value.value==='ace'));
// - всі шістки
console.log(cards.filter(value => value.value==='6'));
// - всі червоні карти
console.log(cards.filter(value => value.color==='red'));
// - всі буби
console.log(cards.filter(value => value.cardSuit==='diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter(value => value.cardSuit==='clubs'&&value.value.length>1));

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log(cards.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}));
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(value => {
    return value.modules.includes('sass');
}));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(value => {
    return value.modules.includes('docker');
}));