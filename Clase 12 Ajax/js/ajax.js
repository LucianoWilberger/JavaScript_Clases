

const URL = "https://jsonplaceholder.typicode.com"
$("#users").click(() => {
    $.get(`${URL}/users`, function (res, state)  {
        if (state === "success"){
            console.log(res);
            for (const{ name, username, email} of res) {
                $(".row").append(`
                                <div class="card col-sm-3 m-1">
                                <div class="h1">${name}</div>
                                <div> Daño: ${username}</div>
                                <div>Vida: ${email}</div>
                             </div>`);
            }
        }
    });
});

