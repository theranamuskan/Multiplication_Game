const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const scoreElem = document.getElementById("score");
const formElem = document.getElementById("form");
const quesElem = document.getElementById("question");
const inputElem = document.getElementById("input");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
	score = 0;
}
scoreElem.innerText = `Score:${score}`;

quesElem.innerText = `What is ${num1} multiply by ${num2}?`;

const corrAns = num1 * num2;

formElem.addEventListener("submit", () => {
	const userAns = +inputElem.value; //this changes the string value to number
	if (userAns === corrAns) {
		score++;
		updateLocalStorage();
	} else {
		score--;
		updateLocalStorage();
	}
});

function updateLocalStorage() {
	localStorage.setItem("score", JSON.stringify(score));
}
