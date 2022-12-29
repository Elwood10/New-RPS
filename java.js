let count = 0
let count1 = 0

function rockPaper() {
	let pick = "one"

	let nameOne = "Rock"
	let nameTwo = "Paper"
	let nameThree = "Scissors"

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

	//user input

	var choice = prompt("Enter your choice of Rock,Paper,Scissors")

	//convert userPick to standard format to match computerPick

	let firstLetter = choice.slice(0, 1)
	let restOfWord = choice.slice(1, 100)
	let start = firstLetter.toUpperCase()
	let end = restOfWord.toLowerCase()
	let userPick = start + end

	var winner
	// set up win or lose function
	if (userPick == pick) winner = "tie"
	else if (userPick == "Rock" && pick == "Scissors") winner = "You Win!"
	else if (userPick == "Rock" && pick !== "Scissors") winner = "You Lose"
	else if (userPick == "Paper" && pick == "Rock") winner = "You Win"
	else if (userPick == "Paper" && pick !== "Rock") winner = "You Lose"
	else if (userPick == "Scissors" && pick == "Paper") winner = "You Win"
	else if (userPick == "Scissors" && pick !== "Paper") winner = "You Lose"
	else if ((userPick !== nameOne, nameTwo, nameThree))
		alert("Check your typing")

	if (winner == "You Win!") {
		count++
	}
	if (winner == "You Lose") {
		count1++
	}
	if (winner == "tie") {
		count++ && count1++
	}
}
//delete this//
//function to run game 5 times
for (i = 1; i < 6; i++) {
	rockPaper()
	console.log(count)
	console.log(count1)
}
if ((count = count1)) console.log("It's a Tie")
if (count > count1) console.log("You beat the Computer")
if (count < count1) console.log("Sorry, You Lost")
