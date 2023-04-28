// /*function multiply(a, b) {
// 	if (a > 10 || b > 10) {
// 		return "that's 100 hard";
// 	} else {
// 		return a * b
// 	}
// }*/

// //alert(multiply(3, 4));

// var list = ["tiger", "cat", "bear", "bird"];
// console.log(list[1]);

// var functionList = [function apple() {console.log("apple")}];

// var mixedList = ["apples", 3, undefined, true];

// console.log(list[0][2]);

// list.shift();

// console.log(list);

// list.pop();

// console.log(list);

// list.push("elephant");

// console.log(list);

// list.concat(["bee", "deer"]);

// console.log(list);

// list.sort();

// console.log(list);

// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,

// 	shout: function() {
// 		console.log("aaaah");
// 	}
// };

// var list = ["apple", "banana", "orange"];

// console.log(user.hobby);

// var list = [
// 	{username: "andy",
//     password: "secre"},
//     {username: "jesse",
//     password: "123"}];

var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "JavaScript is soo cool"
	}
	];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {

}

function signIn(user, pass) {
	console.log(isUserValid(username, password));

	// if (user === database[0].username && pass == database[0].password) {
	// 	console.log(newsFeed);
	// } else {
	// 	alert("Sorry, wrong username and password");
	// }
}

signIn(userNamePrompt, passwordPrompt);

// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"exercise",
// 	"study javascript",
// 	"eat healthy"
// 	];

// for (var i = 0; i < todos.length; i++) {
// 	todos.pop();
// }

// var counterOne = 0;
// while (counterOne < 10) {
// 	console.log(counterOne);
// 	counterOne++;
// }


// var counterTwo = 10;
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// } while (counterTwo > 0);


// todos.forEach(function(i) {
// 	console.log(i);
// })