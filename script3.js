// Jamie Morris Homework-4 Code Quiz 
// Var with array and object for questions 
var questions = [
    {
        title: "1. My teacher encourages me to get involved with the different school activities.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Participatory Development"
    },
    {
        title: "2. I have the liberty to express my beliefs and ideas. ",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Human Rights"
    },
    {
        title: "3. My school is fair when identifying punishments for students’ misbehavior. ",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Social Equity"
    },
    {
        title: "4. The school practices promote fairness to both male and female students.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Gender Equality"
    },
    {
        title: "5. I frequently volunteer in community services in school.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Participatory Development"
    },
    {
        title: "6. I always participate in the brigada eskwela activities.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Participatory Development"
    },
    {
        title: "7. My school provides equal access, resources, activities, and scheduling accommodations for all individuals.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Social Equity"
    },
    {
        title: "8. Promoting a just and fair society for those at the bottom.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Social Equity"
    },
    {
        title: "9. I support my schools’ proper waste management campaign.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Participatory Development"
    },
    {
        title: "10. It aims to eliminate the inequalities of rights between men and women, to promote, a culture of equity, and to deal with the different types of violence and discrimination faced by men and women.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Gender Equality"
    },
    {
        title: "11. Each person in the society must receive equal relief goods from the government for we are all affected by this present pandemic.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Social Equity"
    },
    {
        title: "12. I will work in a just and favorable condition.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Human Rights"
    },
    {
        title: "13. Even if I am poor, I still have the right to education and enjoyment of the benefits of cultural freedom",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Human Rights"
    },
    {
        title: "14. She was given an opportunity by her parents to enroll in the Criminology course although it is more suited for men, as what other people say.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Gender Equality"
    },
    {
        title: "15. The right of everyone to an adequate standard of living.",
        choices: ["A. Human Rights", "B. Social Equity", "C. Gender Equality", "D. Participatory Development"],
        answer: "Human Rights"
    },

];
// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 0;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./highscore.html");
        }
    });

}
