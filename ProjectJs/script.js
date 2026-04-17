let h2 = document.querySelector('h2');
let userSeq = [];
let gameSeq = [];

let btns = ["pink", "yellow", "blue", "purple"];
let started = false;

let level = 0;

document.addEventListener("keypress", function()
{
    if (started == false)
    {
        console.log("Game started");
        started = true;
        levelup();
    }

});


function levelup()
{
    userSeq = [];
    level++;
    h2.innerText = "Level " + level;
    
    let index = Math.floor(Math.random() * 4);

    let randomCol = btns[index];
    gameSeq.push(randomCol);
    let btn = document.querySelector("#" + randomCol);
    flashbtn(btn);
    console.log(gameSeq);

}


function flashbtn(btn)
{
    
    btn.classList.add("flashbtn");
    setTimeout(function() {
        btn.classList.remove("flashbtn");
    }, 200);
}


let Allbtns = document.querySelectorAll('.btn');

for (btn of Allbtns)
{
    btn.addEventListener("click", btnpress);
}


function btnpress()
{
    col = this.getAttribute("id");
   flashbtn(this);
   userSeq.push(col);
   let indx = userSeq.length - 1;
   check(indx); 
}


function check(i)
{
    if (gameSeq[i] == userSeq[i])
    {
        if(gameSeq.length == userSeq.length)
        {
            setTimeout(levelup, 600);
        }
    }
    else{
        h2.innerText = ":( Game Over! Your score was " + level + " press anykey to start";
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white"
        }, 100);
        reset();
    }
}
 


function reset()
{
     userSeq = [];
     gameSeq = [];


    started = false;

      level = 0;
}