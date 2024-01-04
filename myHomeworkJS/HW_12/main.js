// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку,
//     на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        let ul = document.createElement('ul');
        for (const jsonElement of json) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = `${jsonElement.id}) ${jsonElement.name}`;
            a.href = './users.html?value=' + JSON.stringify(jsonElement);
            li.appendChild(a);
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    });