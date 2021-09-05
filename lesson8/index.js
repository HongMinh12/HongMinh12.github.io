let userApi = 'https://jsonplaceholder.typicode.com/posts';
    fetch(userApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            //return console.log(posts);
            let html = posts.map(function (item) {
                return `<li>
                    <h2>${item.title}</h2>
                    <p>${item.body}</p>
                </li>`
            })
            document.getElementById('call_api').innerHTML = html;
        })


