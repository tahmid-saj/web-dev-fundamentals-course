// scope

function bb() {
	var a = "hello";
}

window.bb();

console.log(a);

function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = "Your account number is " ? "12345" : (isUserValid(false));

function condition() {
	if (isUserValid(true)) {
		return "You may enter";
	} else {
		return "Access denied";
	}
}

var answer2 = condition();

function moveCommand(direction) {
	var whatHappens;

	switch (direction) {
	case "forward":
		whatHappens = "you encountered a monster";
		break;
	case "back":
		whatHappens = "you arrived home";
		break;
	case "right":
		whatHappens = "you found a river";
		break;
	case "left":
		whatHappens = "you run into a troll";
		break;
	default:
		whatHappens = "please enter a valid direction";
	}

	return whatHappens;
}

moveCommand("forward")

// let + const

const player = 'bobby';

let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
}


