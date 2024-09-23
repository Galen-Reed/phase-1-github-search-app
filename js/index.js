document.addEventListener('DOMContentLoaded', () => {
    const githubForm = document.getElementById('github-form');
    githubForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const username = formData.get('search');

        console.log(username);

        fetch(`https://api.github.com/search/users?q=${username}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            const ul = document.getElementById('user-list')
            ul.innerHTML= '';

            data.items.forEach((element) => {
                usernameResults(element);
            });
            this.reset();        
        });
    });
});

function usernameResults(data) {
    let ul = document.getElementById('user-list')
   
    let login = data.login;
    let url = data.url
    let li = document.createElement("li");
    li.textContent = login;

    let image = document.createElement('img');
    image.src = data.avatar_url
    let li2= document.createElement('li');
    li2.textContent = url;
    li2.appendChild(image);
    li.appendChild(li2);
    ul.appendChild(li);
}


/*
toyForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  formObject.likes = formObject.likes || 0;

  const jsonData = JSON.stringify(formObject);

  fetch("http://localhost:3000/toys", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: jsonData,
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success', data);
    toyCreator(data);
  })
  .catch(error => {
    console.error('Error', error);
  });
});
*/