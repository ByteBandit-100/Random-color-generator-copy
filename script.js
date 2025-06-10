const mainId = document.querySelector("#main");
const genBtn = document.querySelector("#gen-btn");
const colorCode = document.querySelector("#color-code");

function changeBackground() {
    const randomCode = '#'+Math.floor(Math.random()*16777215).toString(16);
    mainId.style.backgroundColor = randomCode;
    colorCode.innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}

genBtn.addEventListener("click",changeBackground)