let music=new Audio("music.mp3");
let ting=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn='X';
const changeTurn=()=>{
    return turn ==="X" ? "0":"X";                         
}
let gameover1=false;
let checkWin =()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!==''))
        {
           document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" WON";
        gameover1=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height="100px";
        music.play();
        document.querySelector(".line").style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        document.querySelector(".line").style.width='20vw';
        }
    })
}
let boxes =document.getElementsByClassName("box");
//Array.from -return array from iterable object
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn= changeTurn();
            ting.play(); 
            checkWin();
            if(!gameover1)
            {
            document.getElementsByClassName('info')[0].innerText= "Turn for " +turn;
            }
        }
    })
})
//add onclick listener to reset
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
element.innerText=""
    });
    turn="X";
    gameover1=false;
    document.getElementsByClassName('info')[0].innerText= "Turn for " +turn; 
    music.pause();
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height="0px";
    document.querySelector(".line").style.transform =`translate(0vw,0vw) rotate(0deg)`;
    document.querySelector(".line").style.width='0';
})