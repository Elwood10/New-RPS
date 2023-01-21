//declare variables
let winner = "couch"
var count = 0
var count1 = 0
let userPick
let score = document.getElementById("pick")
let you = document.getElementById("userPick")
let computer = document.getElementById("computerPick")
let yourTotal = document.getElementById("count")
let computerTotal = document.getElementById("count1")
let finalScore = document.getElementById("endGame")
let final = "Choose Again!"
let i = 0

//get player selection

let clickPick = document.querySelectorAll("button")
clickPick.forEach((button) => {
	button.addEventListener("click", () => {
		userPick = button.name
		rockPaper()
	})
})

//play the game

function rockPaper() {
	let pick = "one"
	const nameOne = "Rock"
	const nameTwo = "Paper"
	const nameThree = "Scissors"

	let number = Math.floor(Math.random() * 10)

	function computerPick() {
		if (number <= 3) {
			pick = nameOne
		} else if (number > 3 && number <= 6) {
			pick = nameTwo
		} else {
			pick = nameThree
		}
	}

	computerPick(number)

	console.log(pick)

	// set up win or lose function
	if (userPick == pick) winner = "Tie"
	else if (userPick == "Rock" && pick == "Scissors") winner = "You Win!"
	else if (userPick == "Rock" && pick !== "Scissors") winner = "You Lose"
	else if (userPick == "Paper" && pick == "Rock") winner = "You Win!"
	else if (userPick == "Paper" && pick !== "Rock") winner = "You Lose"
	else if (userPick == "Scissors" && pick == "Paper") winner = "You Win!"
	else if (userPick == "Scissors" && pick !== "Paper") winner = "You Lose"

	if (winner == "You Win!") {
		count++
	}
	if (winner == "You Lose") {
		count1++
	}

	if (winner == "Tie") {
		count++
		count1++
	}

	score.innerHTML = winner
	you.innerHTML = userPick
	computer.innerHTML = pick
	yourTotal.innerHTML = count
	computerTotal.innerHTML = count1
	console.log(i)
	console.log(winner)
	console.log(count)
	console.log(count1)

	//function to run game 5 times

	i++
	if (i === 5) {
		endGame()
	}
	//end of game, start a new one
	if (i === 6) {
		location.reload()
		final = "new game"
	}
	console.log(final)

	//give final results
	function endGame() {
		if (count == count1) {
			final = "It's a Tie! Pick another to play again."
		} else if (count > count1) {
			final = "You beat the Computer! Pick another to play again."
		} else if (count < count1) {
			final = "Sorry, You Lost! Pick another to play again."
		}
	}

	finalScore.innerHTML = final
}
// let score = document.getElementById("Scores")
// let view = "this is your score   " + count
// score.append(view)
