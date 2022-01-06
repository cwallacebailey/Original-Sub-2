// focus on enter username box on opening index.html

function focus() {
    document.getElementById("username").focus();
  }

// create array

const array = [
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris2.png',
    img3 : 'assets/images/chris3.png',
    img4 : 'assets/images/chris4.png',
    choice1 : 'David Beckham',
    choice2 : 'Jared Leto',
    choice3 : 'Christian Bale',
    choice4 : 'Hugh Jackman',
    answer : 3,
    },
    {
    name : 'dan',
    img1 : 'assets/images/dan1.jpg',
    img2 : 'assets/images/dan2.jpg',
    img3 : 'assets/images/dan3.jpg',
    img4 : 'assets/images/dan4.jpg',
    choice1 : 'Dany trejo',
    choice2 : 'Cheech Marin',
    choice3 : 'Tom Savini',
    choice4 : 'John P. Fedele',
    answer : 1,
    },
    {
    name : 'eli',
    img1 : 'assets/images/eli1.png',
    img2 : 'assets/images/eli2.png',
    img3 : 'assets/images/eli3.png',
    img4 : 'assets/images/eli4.png',
    choice1 : 'Robbie Coltrane',
    choice2 : 'Daniel Radcliffe',
    choice3 : 'Elija Wood',
    choice4 : 'Oliver Phelps',
    answer : 3,
    },
    {
    name : 'lea',
    img1 : 'assets/images/lea1.png',
    img2 : 'assets/images/lea2.png',
    img3 : 'assets/images/lea3.png',
    img4 : 'assets/images/lea4.png',
    choice1 : 'Rachel Weisz',
    choice2 : 'Lea Seydoux',
    choice3 : 'Ariana Labed',
    choice4 : 'Saoirse Ronan',
    answer : 2,
    },
    {
    name : 'mah',
    img1 : 'assets/images/mah1.png',
    img2 : 'assets/images/mah2.png',
    img3 : 'assets/images/mah3.png',
    img4 : 'assets/images/mah4.png',
    choice1 : 'Wesley Snipes',
    choice2 : 'Anthony Mackie',
    choice3 : 'Don Cheadle',
    choice4 : 'Mahershala Ali.',
    answer : 3,
    },
    {
    name : 'nic',
    img1 : 'assets/images/nic1.png',
    img2 : 'assets/images/nic2.png',
    img3 : 'assets/images/nic3.png',
    img4 : 'assets/images/nic4.png',
    choice1 : 'David Beckham',
    choice2 : 'Thomas Jane',
    choice3 : 'John Travolta',
    choice4 : 'Nicholas Cage',
    answer : 4,
    },
    {
    name : 'ser',
    img1 : 'assets/images/ser1.png',
    img2 : 'assets/images/ser2.png',
    img3 : 'assets/images/ser3.png',
    img4 : 'assets/images/ser4.png',
    choice1 : 'Serena Williams',
    choice2 : 'Isha Price',
    choice3 : 'Venus Williams',
    choice4 : 'Lyndrea Price',
    answer : 1,
    },
]

function beginGame() {
    let picture1 = document.getElementById("pic1")
    let picture2 = document.getElementById("pic2")
    let picture3 = document.getElementById("pic3")
    let picture4 = document.getElementById("pic4")
    let start = Math.floor(Math.random()*6)
    
    picture1.src = array[start].img1;
    picture2.src = array[start].img2;
    picture3.src = array[start].img3;
    picture4.src = array[start].img4;

}




/*

// quiz page

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

*/