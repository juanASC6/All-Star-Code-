fetch("https://randomuser.me/api?results=10")
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
        let email = myJson.results[0].email;
        let p = document.createElement("h1");
        p.innerText = email;
        document.body.appendChild(p);
    });