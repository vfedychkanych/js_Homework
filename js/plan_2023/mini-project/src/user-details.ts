let url = new URL(location.href);
let userValue = url.searchParams.get('value')
let user = JSON.parse(userValue);

let p_id = document.createElement('p');
let p_name = document.createElement('p');
let p_username = document.createElement('p');
let p_email = document.createElement('p');
let p_address = document.createElement('p');
let p_phone = document.createElement('p');
let p_website = document.createElement('p');
let p_company = document.createElement('p');

p_id.innerText = user.id + ')';
p_name.innerText ='Name: ' + user.name;
p_username.innerText ='UserName: ' +  user.username;
p_email.innerText = 'Email: ' + user.email;
p_address.innerText = `Adress:
      Street: ${user.address.street},
      Suite: ${user.address.suite},
      City: ${user.address.city},
      Zipcode: ${user.address.zipcode},
      Geo:
            Lat: ${user.address.geo.lat},
            Lng: ${user.address.geo.lng},
  `;
p_phone.innerText = 'Phone: ' + user.phone;
p_website.innerText = 'Website: ' + user.website;
p_company.innerText = `Company:
      Name: ${user.company.name},
      Catch Phrase: ${user.company.catchPhrase},
      BS: ${user.company.bs}`

document.body.appendChild(p_id);
document.body.appendChild(p_name);
document.body.appendChild(p_username);
document.body.appendChild(p_email);
document.body.appendChild(p_address);
document.body.appendChild(p_phone);
document.body.appendChild(p_website);
document.body.appendChild(p_company);

let userDetailsContainer = document.createElement('div');
userDetailsContainer.id = 'user-details';

userDetailsContainer.appendChild(p_id);
userDetailsContainer.appendChild(p_name);
userDetailsContainer.appendChild(p_username);
userDetailsContainer.appendChild(p_email);
userDetailsContainer.appendChild(p_address);
userDetailsContainer.appendChild(p_phone);
userDetailsContainer.appendChild(p_website);
userDetailsContainer.appendChild(p_company);

document.body.appendChild(userDetailsContainer);
// https://jsonplaceholder.typicode.com/users/USER_ID/posts
let viewMoreButton = document.createElement('button');
viewMoreButton.innerText = 'Post of current user';
viewMoreButton.id = 'view-more-button';
viewMoreButton.addEventListener('click', function() {
  fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
      .then((value) => value.json())
      .then((json) => {
        for (const jsonElement of json) {
          let postContainer = document.createElement('div');
          postContainer.classList.add('post-container');
          let a = document.createElement('a');
          a.innerText = `${jsonElement.title}`;
          a.href = './post-details.html?value=' + JSON.stringify(jsonElement);
          postContainer.appendChild(a);
          document.body.appendChild(postContainer);
        }
      });
});
userDetailsContainer.appendChild(viewMoreButton);
document.body.appendChild(userDetailsContainer);