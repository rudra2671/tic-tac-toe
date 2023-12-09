let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn"); 
let newgameBtn = document.querySelector(".new-btn"); 
let msgcontainer = document.querySelector(".msg-container"); 
let msg = document.querySelector(".msg");
let turnO = true;

const winpattern = [
    [0 , 1 , 2] ,
    [0 , 3 , 6] ,
    [0 , 4 , 8] ,
    [1 , 4 , 7] ,
    [2 , 5 , 8] ,
    [2 , 4 , 6] ,
    [3 , 4 , 5] ,
    [6 , 7 , 8] ,
];

const resetgame = () => {
turnO = true; 
enableboxes (); 
msgcontainer.classList.add("hide");
}; 

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was click"); 
        if(turnO ) {
            box.innerText = "O";
            turnO = false; 

        } else {
            box.innerText = "X";
            turnO = true;
        } 
        box.disabled = true; 
        checkWinner ();
    })
})

const disableboxes = () => {
for ( let box of boxes ) {
    box.disabled = true;
}  
}

const enableboxes = () => {
    for ( let box of boxes ) {
        box.disabled = false; 
        box.innerText = "";
    }

}
const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide"); 
    disableboxes();
};

const checkWinner  = ()  => {
    for (pattern of winpattern) {
        // console.log(pattern[0] , pattern[1] , pattern[2]); 
        // console.log (
        //     boxes [ pattern [0] ].innerText ,
        //     boxes [ pattern [1] ].innerText ,
        //     boxes [ pattern [2] ].innerText
        // ); 
        let pos1val = boxes[pattern[0] ].innerText;
        let pos2val = boxes[pattern[1] ].innerText;
        let pos3val = boxes[pattern[2] ].innerText; 

        if  (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val ) {
                console.log ("winner" , pos1val); 
                showWinner(pos1val);
            }
        }
    }
};

newgameBtn.addEventListener("click" , resetgame);
resetBtn.addEventListener("click" , resetgame);
