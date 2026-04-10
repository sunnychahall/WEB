// let btns = document.querySelectorAll('button');
 
// for (btn of btns)
// {
//     btn.onclick = sayhello;

//     btn.onmouseenter = function()
//     {
//         console.log("Entered");
//     }
// }


// function sayhello()
// {
//     alert("Hello");
// }



let btn = document.querySelector("button");

btn.addEventListener("click", Color);

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    let clr = `rgb(${red}, ${green}, ${blue})`;
    return clr;
}

function Color() {
    let h = document.querySelector("h3");
    let randCol = getRandomColor();
    h.innerText = randCol;

    let div = document.querySelector("div");
    div.style.backgroundColor = randCol;
}