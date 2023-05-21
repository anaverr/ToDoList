button = document.querySelectorAll(".header__button")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener ("click", func);
    /*func()--вызов функции сразу при загрузке страницы*/
}

function func() {
    alert ("clicked");/*open log in/sign up window*/
}
