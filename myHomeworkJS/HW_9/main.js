//
// - створити блок,
let firstBlock = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
firstBlock.classList.add('wrap', 'collapse', 'alpha', 'beta');
firstBlock.textContent = 'Блок';
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
firstBlock.style.background = 'yellow';
firstBlock.style.color = 'blue';
firstBlock.style.fontSize = '10vw';
// - додати цей блок в body.
document.body.appendChild(firstBlock);
// - клонувати його повністю, та додати клон в body.
var cloned = firstBlock.cloneNode(true);
cloned.textContent = 'клонований блок';
cloned.style.background = 'red';
document.body.appendChild(cloned);
// - Є масив:
let massEl = ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ulblock = document.createElement('ul');
for (let i = 0; i < massEl.length; i++) {
    let li = document.createElement('li');
    li.textContent = massEl[i];
    ulblock.appendChild(li);
}
document.body.appendChild(ulblock);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let div = document.createElement('div');
    div.textContent = `Title - ${coursesAndDurationArray[i].title} ,  Mouth Duration - ${coursesAndDurationArray[i].monthDuration}`;
    document.body.appendChild(div);
}
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
for (let i = 0; i < coursesAndDurationArray.length; i++) {
   let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = coursesAndDurationArray[i].title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.textContent = coursesAndDurationArray[i].monthDuration;
    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
}
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю Кума «Барт» Сімпсон (англ. Bartholomew Kuma «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

for (let i = 0; i < simpsons.length; i++) {
    let div = document.createElement('div');
    div.classList.add('member');
    let h3_name = document.createElement('h3');
    h3_name.textContent = simpsons[i].name;
    let h3_surname = document.createElement('h3');
    h3_surname.textContent = simpsons[i].surname;
    let h2_age = document.createElement('h2');
    h2_age.textContent = simpsons[i].age;
    let p_info = document.createElement('p');
    p_info.textContent = simpsons[i].info;
    let img = document.createElement('img');
    img.src = simpsons[i].photo;
    div.appendChild(h3_name);
    div.appendChild(h3_surname);
    div.appendChild(h2_age);
    div.appendChild(p_info);
    div.appendChild(img);
    document.body.appendChild(div);
}

//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let general = document.createElement('div');
general.classList.add('flex');
for (let i = 0; i < coursesArray.length; i++) {
    let title = document.createElement('div');
    title.textContent = coursesArray[i].title;
    title.classList.add('title');
    let group = document.createElement('div');
    group.classList.add('duration');
    let monthDuration = document.createElement('div');
    monthDuration.textContent = coursesArray[i].monthDuration;
    monthDuration.classList.add('title');
    let hourDuration = document.createElement('div');
    hourDuration.textContent = coursesArray[i].hourDuration;
    hourDuration.classList.add('title');
    group.appendChild(monthDuration);
    group.appendChild(hourDuration);
    let group_modules = document.createElement('div');
    group_modules.classList.add('flex');
    for (let j = 0; j < coursesArray[i].modules.length; j++) {
        let div = document.createElement('div');
        div.textContent = coursesArray[i].modules[j];
        div.classList.add('title');
        group_modules.appendChild(div);
    }
    general.appendChild(title);
    general.appendChild(group);
    general.appendChild(group_modules);
}
document.body.appendChild(general);