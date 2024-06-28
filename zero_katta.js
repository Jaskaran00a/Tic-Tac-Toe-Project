let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgbtn = document.querySelector("#newbtn");
let msgcont = document.querySelector(".msgcontainer");  //
let msg = document.querySelector("#msg");  //
let turnO = true; // playerO , playerX
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcont.classList.add("hide");

};

boxes.forEach((box) =>              //1
{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false; // agli bari yeh true nhi hone chaye because fr  X ki bari nhi ayegi
        } else {
            box.innerText = "X";
            turnO = true;   // X ke badh fr O ki bari ke liye use true kiya
        }
        box.disabled = true; //yeh kiya taki koi box do bari na click ho paye
        checkwinner();  //  in this we have to check the winning pattern match or not
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
};


const checkwinner = () => {     // 2
    for (let pattern of winpatterns) {
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log("Winner", posval1);
                showwinner(posval1);
            }
        }

    }
};
newgbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);