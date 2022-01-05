// focus on enter username box on opening index.html

window.onload = () => {
    var username = document.getElementById("username").focus();
  }

// create array

const array = [
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris1.png',
    img3 : 'assets/images/chris1.png',
    img4 : 'assets/images/chris1.png',
    choice1 : 'David Beckham',
    choice2 : 'Ryan Reynolds',
    choice3 : 'Christian Bale',
    choice4 : 'Hugh Jackman',
    answer : 3,
    },
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris1.png',
    img3 : 'assets/images/chris1.png',
    img4 : 'assets/images/chris1.png',
    choice1 : 'David Beckham',
    choice2 : 'Ryan Reynolds',
    choice3 : 'Christian Bale',
    choice4 : 'Hugh Jackman',
    answer : 3,
    },
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris1.png',
    img3 : 'assets/images/chris1.png',
    img4 : 'assets/images/chris1.png',
    choice1 : 'David Beckham',
    choice2 : 'Ryan Reynolds',
    choice3 : 'Christian Bale',
    choice4 : 'Hugh Jackman',
    answer : 3,
    },
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris1.png',
    img3 : 'assets/images/chris1.png',
    img4 : 'assets/images/chris1.png',
    choice1 : 'David Beckham',
    choice2 : 'Ryan Reynolds',
    choice3 : 'Christian Bale',
    choice4 : 'Hugh Jackman',
    answer : 3,
    },
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris1.png',
    img3 : 'assets/images/chris1.png',
    img4 : 'assets/images/chris1.png',
    choice1 : 'David Beckham',
    choice2 : 'Ryan Reynolds',
    choice3 : 'Christian Bale',
    choice4 : 'Hugh Jackman',
    answer : 3,
    },
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris1.png',
    img3 : 'assets/images/chris1.png',
    img4 : 'assets/images/chris1.png',
    choice1 : 'David Beckham',
    choice2 : 'Ryan Reynolds',
    choice3 : 'Christian Bale',
    choice4 : 'Hugh Jackman',
    answer : 3,
    },
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris1.png',
    img3 : 'assets/images/chris1.png',
    img4 : 'assets/images/chris1.png',
    choice1 : 'David Beckham',
    choice2 : 'Ryan Reynolds',
    choice3 : 'Christian Bale',
    choice4 : 'Hugh Jackman',
    answer : 3,
    },
]

// quiz page

function beginGame() {
    let score = document.getElementById("score")
    let pointsToWin = document.getElementById("pointsToWin")

    score = 0
    pointsToWin = 20
}


//function getImageQuestion() //would this include the question? Need to build array

//function flipImage() // this will flip the image the user clicks and reduce the incremental score

//function checkAnswer() // this will check if the answer is correct and add score if so. It will also call get image question after a set amount of time. 

// if username is less than 3 characters do not allow the user to save DOES NOT YET WORK

function manage(text) {
    let save = getElementById("save");
    if (text.value != '') {
        save.disabled = false;
        save.style.cursor = "auto";
    } else {
        save.disabled = false;
        save.style.cursor = "disabled";
    }
}