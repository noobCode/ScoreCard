let homeScoreCard = document.getElementById("score-card-home")
let guestScoreCard = document.getElementById("score-card-guest")

let homeScore = 0
homeScoreCard.innerText = homeScore

let guestScore = 0
guestScoreCard.innerText = guestScore

function incrementHomeByOne() {
    homeScore += 1
    homeScoreCard.innerText = homeScore
} 

function incrementHomeByTwo() {
    homeScore += 2
    homeScoreCard.innerText = homeScore
} 

function incrementHomeByThree() {
    homeScore += 3
    homeScoreCard.innerText = homeScore
} 

function incrementGuestByOne() {
    guestScore += 1
    guestScoreCard.innerText = guestScore
} 

function incrementGuestByTwo() {
    guestScore += 2
    guestScoreCard.innerText = guestScore
} 

function incrementGuestByThree() {
    guestScore += 3
    guestScoreCard.innerText = guestScore
} 