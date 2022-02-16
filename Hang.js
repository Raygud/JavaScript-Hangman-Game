let BlockedWord = document.getElementById("BlockedWord")
let buttons = document.querySelectorAll("button")
let main = document.getElementById("main")
let Unrevealed = []

const Word = [
    "array",
    "let",
    "var",
    "consts"
]

// for (let i = 0; i < 10; i++) {
//     const node = document.createElement("button");
//     node.innerHTML = "s"
//     document.body.appendChild(node);
//     Checking = this.innerHTML
//     node.addEventListener("click", function(){
//     console.log(this.innerHTML)
//     Checker(this.innerHTML)
    
//     })
// }


function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function NewGame(){
    Unrevealed = []

    rand = generateRandomIntegerInRange(1, Word.length-1);

    CurrentWord = Word[rand]
    console.log(CurrentWord)

    
    for (let o = 0; o < document.querySelectorAll("button").length; o++) {
        document.querySelectorAll("button")[o].style.display = "inline"
      }
    for (let i = 0; i < CurrentWord.length; i++) {
        Unrevealed.push("X")
        BlockedWord.innerHTML = Unrevealed.join("")
    //     let BlockedLetters = document.createElement("button");
    //     BlockedWord.appendChild(BlockedLetters);
    //     BlockedLetters.innerHTML = "X"
    }

}

const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



chars.forEach(item => {
    const button = document.createElement("button");
    button.innerHTML = `${item}`;
    main.appendChild(button);
    button.addEventListener("click", function(){
        console.log(this.innerHTML)
        Checker(this.innerHTML.toLocaleLowerCase())
        this.style.display = "none"

    })


});

function Checker(Checked){
    if(CurrentWord.includes(Checked)){
        for (let i = 0; i < CurrentWord.length; i++) {

            if(CurrentWord.charAt(i) == Checked){
                console.log(Checked)
                console.log(i)
                Unrevealed.splice(i, 1, Checked.toUpperCase());
                BlockedWord.innerHTML = Unrevealed.join("")

        }
        }
    }
    else{
        console.log("Incorrect!! ")
    }

}

