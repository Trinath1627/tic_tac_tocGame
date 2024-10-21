
let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset_btn");
let newGameBtn = document.querySelector('.new_btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; //playerX,playerO

const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,8],[6,7,8]];

const gameRestart = () =>{
    turnO = true;
    enableBoxs();
    msgContainer.classList.add('hide');

}

boxs.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});


const enableBoxs = () =>{
    for( let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableboxs = () =>{
    for(let box of boxs){
        box.disabled = true;
    }
};

const showWinner = (winner) =>{
    msg.innerText = `congratulations, winner is player ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxs();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click",gameRestart);
resetbtn.addEventListener('click' ,gameRestart);