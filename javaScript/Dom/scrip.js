let para = document.createElement('p');
para.innerText = "Hey I am Red!";

document.querySelector('body').append(para);

para.classList.add('red');


let Blue = document.createElement('h3');
Blue.innerText = "Hey I am Blue!";

document.querySelector('body').append(Blue);

Blue.classList.add('blue');




let d = document.createElement('div');
document.querySelector('body').append(d);
let h = document.createElement('h1');
h.innerText = "I am in Div!";
d.append(h);
let p = document.createElement('p');
p.innerText = "me too!";
d.append(p);

d.classList.add('border');