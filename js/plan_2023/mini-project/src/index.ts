fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then((json) => {

        for (const jsonElement of json) {
            let div = document.createElement('div');
            let a = document.createElement('a');
            a.innerText = `${jsonElement.id}) ${jsonElement.name}`;
            a.href = './user-details.html?value=' + JSON.stringify(jsonElement);
            div.appendChild(a);
            document.body.appendChild(div);
        }
    });