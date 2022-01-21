// focus on enter username box on opening index.html

function focus() {
    document.getElementById("username").focus();
  }

// Opens instruction box on being clicked

function instructions() {
    let instructions = document.getElementById("instructionsBox")
    instructions.setAttribute("style", "display: block")
}

// Closes instruction box on being clicked

function instructionsGone() {
    let instructions = document.getElementById("instructionsBox")
    instructions.setAttribute("style", "display: none")
}

// save username

function saveUsername() {
    let username = document.getElementById("username").value
    
    if (username.length <= 2) {
        alert("Please enter a username over 2 characters")
    } else {
    localStorage.setItem('username', username) 
    window.location.href = "quiz-page.html";
    }
}

// allow sound to be played or muted by clicking button

function sound() {
    let sound = document.getElementById("sound")
    if (sound.innerHTML === '<i class="fas fa-volume-mute"></i>') {
        sound.innerHTML = '<i class="fas fa-volume-up"></i>'
    } else {
        sound.innerHTML = '<i class="fas fa-volume-mute"></i>'
    }
}

// create array

const array = [
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris2.png',
    img3 : 'assets/images/chris3.png',
    img4 : 'assets/images/chris4.png',
    choice1 : '1. David Beckham',
    choice2 : '2. Jared Leto',
    choice3 : '3. Christian Bale',
    choice4 : '4. Hugh Jackman',
    answer : '3. Christian Bale',
    },
    {
    name : 'dan',
    img1 : 'assets/images/dan1.png',
    img2 : 'assets/images/dan2.png',
    img3 : 'assets/images/dan3.png',
    img4 : 'assets/images/dan4.png',
    choice1 : '1. Dany Trejo',
    choice2 : '2. Cheech Marin',
    choice3 : '3. Tom Savini',
    choice4 : '4. John P. Fedele',
    answer : '1. Dany Trejo',
    },
    {
    name : 'eli',
    img1 : 'assets/images/eli1.png',
    img2 : 'assets/images/eli2.png',
    img3 : 'assets/images/eli3.png',
    img4 : 'assets/images/eli4.png',
    choice1 : '1. Robbie Coltrane',
    choice2 : '2. Daniel Radcliffe',
    choice3 : '3. Elija Wood',
    choice4 : '4. Oliver Phelps',
    answer : '3. Elija Wood',
    },
    {
    name : 'lea',
    img1 : 'assets/images/lea1.png',
    img2 : 'assets/images/lea2.png',
    img3 : 'assets/images/lea3.png',
    img4 : 'assets/images/lea4.png',
    choice1 : '1. Rachel Weisz',
    choice2 : '2. Lea Seydoux',
    choice3 : '3. Ariana Labed',
    choice4 : '4. Saoirse Ronan',
    answer : '2. Lea Seydoux',
    },
    {
    name : 'mah',
    img1 : 'assets/images/mah1.png',
    img2 : 'assets/images/mah2.png',
    img3 : 'assets/images/mah3.png',
    img4 : 'assets/images/mah4.png',
    choice1 : '1. Wesley Snipes',
    choice2 : '2. Anthony Mackie',
    choice3 : '3. Don Cheadle',
    choice4 : '4. Mahershala Ali.',
    answer : '4. Mahershala Ali.',
    },
    {
    name : 'nic',
    img1 : 'assets/images/nic1.png',
    img2 : 'assets/images/nic2.png',
    img3 : 'assets/images/nic3.png',
    img4 : 'assets/images/nic4.png',
    choice1 : '1. David Beckham',
    choice2 : '2. Thomas Jane',
    choice3 : '3. John Travolta',
    choice4 : '4. Nicholas Cage',
    answer : '4. Nicholas Cage',
    },
    {
    name : 'ser',
    img1 : 'assets/images/ser1.png',
    img2 : 'assets/images/ser2.png',
    img3 : 'assets/images/ser3.png',
    img4 : 'assets/images/ser4.png',
    choice1 : '1. Serena Williams',
    choice2 : '2. Isha Price',
    choice3 : '3. Venus Williams',
    choice4 : '4. Lyndrea Price',
    answer : '1. Serena Williams',
    },
    {
    name : 'nat',
    img1 : 'assets/images/nat1.png',
    img2 : 'assets/images/nat2.png',
    img3 : 'assets/images/nat3.png',
    img4 : 'assets/images/nat4.png',
    choice1 : '1. Serena Williams',
    choice2 : '2. Nathalie Emmanuel',
    choice3 : '3. Venus Williams',
    choice4 : '4. Lyndrea Price',
    answer : '2. Nathalie Emmanuel',
    },
    {
    name : 'brad',
    img1 : 'assets/images/brad1.png',
    img2 : 'assets/images/brad2.png',
    img3 : 'assets/images/brad3.png',
    img4 : 'assets/images/brad4.png',
    choice1 : '1. Brad Pitt',
    choice2 : '2. Leonardo Dicaprio',
    choice3 : '3. Willem Dafoe',
    choice4 : '4. Matthew Perry',
    answer : '1. Brad Pitt',
    },
    {
    name : 'fran',
    img1 : 'assets/images/fran1.png',
    img2 : 'assets/images/fran2.png',
    img3 : 'assets/images/fran3.png',
    img4 : 'assets/images/fran4.png',
    choice1 : '1. Brendan Gleeson',
    choice2 : '2. Billy Connolly',
    choice3 : '3. Frankie Boyle',
    choice4 : '4. Sean Bean',
    answer : '3. Frankie Boyle',
    },
    {
    name : 'jo',
    img1 : 'assets/images/jo1.png',
    img2 : 'assets/images/jo2.png',
    img3 : 'assets/images/jo3.png',
    img4 : 'assets/images/jo4.png',
    choice1 : '1. Ann Widdecombe',
    choice2 : '2. Eliza Bourke',
    choice3 : '3. Sara Millican',
    choice4 : '4. Jo Brand',
    answer : '4. Jo Brand',
    },
    {
    name : 'wes',
    img1 : 'assets/images/wes1.png',
    img2 : 'assets/images/wes2.png',
    img3 : 'assets/images/wes3.png',
    img4 : 'assets/images/wes4.png',
    choice1 : '1. Wesley Snipes',
    choice2 : '2. Grand L. Bush',
    choice3 : '3. Danny Glover',
    choice4 : '4. Damon Hines',
    answer : '1. Wesley Snipes',
    },
    ]


function beginGame() {
    let score = 0
    let pointsToWin = 40
    let questions = 0
    let points = document.getElementById("pointsToWin")
    let progressBar = document.getElementById("progressBar")
    let setScore = document.getElementById("score")
    setScore.innerText = score
    points.innerText = pointsToWin

    LoadQuestion()

    function LoadQuestion() {
        let picture1 = document.getElementById("pic1")
        let picture2 = document.getElementById("pic2")
        let picture3 = document.getElementById("pic3")
        let picture4 = document.getElementById("pic4")
        let q1 = document.getElementById("q1")
        let q2 = document.getElementById("q2")
        let q3 = document.getElementById("q3")
        let q4 = document.getElementById("q4")
        let multiple = array.length
        globalThis.start = Math.floor(Math.random()*multiple)
        
        picture1.src = 'assets/images/click1.png';
        picture2.src = 'assets/images/click2.png';
        picture3.src = 'assets/images/click3.png';
        picture4.src = 'assets/images/click4.png';
        q1.innerHTML = array[start].choice1;
        q2.innerHTML = array[start].choice2;
        q3.innerHTML = array[start].choice3;
        q4.innerHTML = array[start].choice4;
    }

    //flip images

    let imageSelect = document.getElementsByClassName("picture-item")
        for (let i = 0; i < imageSelect.length; i++) {
            imageSelect[i].addEventListener('click', (event)=> {
                if (event.target.id === "pic1") {
                    event.target.setAttribute('src', array[start].img1)
                    pointsToWin = pointsToWin / 2 
                    points.innerText = pointsToWin
                } else if (event.target.id === "pic2") {
                    event.target.setAttribute('src', array[start].img2)
                    pointsToWin = pointsToWin / 2
                    points.innerText = pointsToWin
                } else if (event.target.id === "pic3") {
                    event.target.setAttribute('src', array[start].img3)
                    pointsToWin = pointsToWin / 2
                    points.innerText = pointsToWin
                } else {
                    event.target.setAttribute('src', array[start].img4)
                    pointsToWin = pointsToWin / 2
                    points.innerText = pointsToWin
                }
            })
        }   

    //check answer

        let choices = document.getElementsByClassName("quiz-button")
        for (let i = 0; i < choices.length; i++) {
            choices[i].addEventListener('click', (event)=> {
                let selection = event.target
                let answer = selection.innerText
                let correctAnswer = array[start].answer
                let cheer = new Audio('assets/mp3/cheering.wav')
                let sad = new Audio('assets/mp3/sad.wav')
                let sound = document.getElementById("sound")

                if (answer === correctAnswer) {
                    selection.style.backgroundColor = "green"
                    if (sound.innerHTML === '<i class="fas fa-volume-up"></i>') {
                        cheer.play()
                        }
                    score = score + pointsToWin
                    setScore.innerText = score
                    pointsToWin = 40
                    points.innerText = pointsToWin
                } else {
                    selection.style.backgroundColor = "red"
                    if (sound.innerHTML === '<i class="fas fa-volume-up"></i>') {
                        sad.play()
                        }
                    pointsToWin = 40
                    points.innerText = pointsToWin
                }
            
                setTimeout(function() {
                    selection.style.backgroundColor = "#0c1a25"
                    array.splice(start,1)
                    questions += 1
                    progressBar.style.width = `${((questions)/5)*100}%`

                    if (questions === 5) {
                        localStorage.setItem('score', score)
                        window.location.href = "quiz-end.html"
                    } else { LoadQuestion()
                    }
                }, 1000)
            })
        }
    }

function setScore() {
let score = localStorage.getItem('score')
document.getElementById("finalScore").innerText = score

let username = localStorage.getItem('username')
document.getElementById("name").innerHTML = `${username}, your final score is:`

if (score > 100) {
    document.getElementById("rank").innerText = "Wow, you really know your celebs"
} else if (score < 100 && score > 50) {
    document.getElementById("rank").innerText = "Not bad. You recognised someone..."
} else {
    document.getElementById("rank").innerText = "It's ok, celebs are not your thing"
}
}

function highScores() {
    let highScores = []
    score = localStorage.getItem('score')
    highScores.push(score)
    highScores.sort
    localStorage.setItem('highScores',highScores)
    console.log(highScores)

    let li = '<ol>'
    highScores.forEach(function(listMaker) {
        li += '<li>'+listMaker+'</li>'
    })

    li += '</ol>'

    document.getElementById("leaderboard-list").innerHTML = li;
}

