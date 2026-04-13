// let p = document.querySelector("p");

// p.addEventListener("mouseout", function() {
//     p.innerText = "hello"
//     // console.log("Mouse left the paragraph!");
// });


// let btn = document.querySelector("button");


// btn.addEventListener("click", function()
// {
//     btn.style.backgroundColor = "rgb(0, 255, 0)";
// })



let inp = document.querySelector("#txt");

let p = document.querySelector('p');

inp.addEventListener("input", function()
{
    p.innerText = inp.value;
})