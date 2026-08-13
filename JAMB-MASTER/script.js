document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // ACEJAMB CBT SYSTEM
    // ==========================================

    const questions = [

        {
            question: "What is the capital of Nigeria?",
            options: ["Lagos", "Abuja", "Kano", "Ibadan"],
            answer: 1
        },

        {
            question: "2 + 5 = ?",
            options: ["5", "6", "7", "8"],
            answer: 2
        },

        {
            question: "HTML stands for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },

        {
            question: "Which language is used to style a website?",
            options: [
                "HTML",
                "CSS",
                "Python",
                "Java"
            ],
            answer: 1
        },

        {
            question: "What is 10 × 5?",
            options: [
                "15",
                "50",
                "100",
                "25"
            ],
            answer: 1
        },

        {
            question: "Which planet is known as the Red Planet?",
            options: [
                "Earth",
                "Jupiter",
                "Mars",
                "Venus"
            ],
            answer: 2
        },

        {
            question: "How many states are there in Nigeria?",
            options: [
                "30",
                "36",
                "37",
                "40"
            ],
            answer: 1
        },

        {
            question: "Which device is used to type letters into a computer?",
            options: [
                "Monitor",
                "Mouse",
                "Keyboard",
                "Printer"
            ],
            answer: 2
        },

        {
            question: "What is 100 ÷ 10?",
            options: [
                "5",
                "10",
                "20",
                "50"
            ],
            answer: 1
        },

        {
            question: "Which of these is a programming language?",
            options: [
                "Python",
                "Chrome",
                "Windows",
                "Google"
            ],
            answer: 0
        },

        {
            question: "What is 12 × 4?",
            options: [
                "36",
                "48",
                "52",
                "44"
            ],
            answer: 1
        },

        {
            question: "Which gas do humans need for respiration?",
            options: [
                "Carbon dioxide",
                "Nitrogen",
                "Oxygen",
                "Hydrogen"
            ],
            answer: 2
        },

        {
            question: "Which organ pumps blood around the body?",
            options: [
                "Lungs",
                "Heart",
                "Kidney",
                "Brain"
            ],
            answer: 1
        },

        {
            question: "What is the chemical symbol for water?",
            options: [
                "CO2",
                "O2",
                "H2O",
                "NaCl"
            ],
            answer: 2
        },

        {
            question: "Which is the largest planet in our solar system?",
            options: [
                "Earth",
                "Mars",
                "Jupiter",
                "Saturn"
            ],
            answer: 2
        },

        {
            question: "What is 25 + 25?",
            options: [
                "40",
                "45",
                "50",
                "55"
            ],
            answer: 2
        },

        {
            question: "Which part of a computer displays information?",
            options: [
                "Keyboard",
                "Monitor",
                "Mouse",
                "CPU"
            ],
            answer: 1
        },

        {
            question: "Which of these is a mammal?",
            options: [
                "Shark",
                "Crocodile",
                "Dolphin",
                "Lizard"
            ],
            answer: 2
        },

        {
            question: "What is the opposite of 'ancient'?",
            options: [
                "Old",
                "Modern",
                "Past",
                "Historic"
            ],
            answer: 1
        },

        {
            question: "What is 9 × 9?",
            options: [
                "72",
                "81",
                "90",
                "99"
            ],
            answer: 1
        }

    ];


    // ==========================================
    // VARIABLES
    // ==========================================

    let currentQuestion = 0;

    let userAnswers =
        new Array(questions.length).fill(null);

    let examSubmitted = false;

    let timeLeft = 7200;


    // ==========================================
    // HTML ELEMENTS
    // ==========================================

    const questionElement =
        document.getElementById("question");

    const questionNumberElement =
        document.getElementById("question-number");

    const optionButtons =
        document.querySelectorAll(".option");

    const nextButton =
        document.getElementById("next");

    const previousButton =
        document.getElementById("prev");

    const questionGrid =
        document.getElementById("questionGrid");

    const timerElement =
        document.getElementById("time");


    // ==========================================
    // LOAD QUESTION
    // ==========================================

    function loadQuestion() {

        if (examSubmitted) {
            return;
        }

        const current =
            questions[currentQuestion];


        questionElement.innerHTML =
            current.question;


        questionNumberElement.innerHTML =
            "Question " +
            (currentQuestion + 1) +
            " of " +
            questions.length;


        optionButtons.forEach(
            function (button, index) {

                button.innerHTML =
                    String.fromCharCode(65 + index) +
                    ". " +
                    current.options[index];

                button.classList.remove(
                    "selected"
                );

            }
        );


        // Restore answer

        if (
            userAnswers[currentQuestion] !== null
        ) {

            optionButtons[
                userAnswers[currentQuestion]
            ].classList.add("selected");

        }


        // Previous button

        if (previousButton) {

            previousButton.disabled =
                currentQuestion === 0;

        }


        // Next button

        if (nextButton) {

            if (
                currentQuestion ===
                questions.length - 1
            ) {

                nextButton.innerHTML =
                    "Finish";

            } else {

                nextButton.innerHTML =
                    "Next";

            }

        }


        updateQuestionGrid();

        updateProgress();

    }


    // ==========================================
    // SELECT ANSWER
    // ==========================================

    optionButtons.forEach(
        function (button, index) {

            button.addEventListener(
                "click",
                function () {

                    if (examSubmitted) {
                        return;
                    }


                    userAnswers[currentQuestion] =
                        index;


                    optionButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "selected"
                            );

                        }
                    );


                    button.classList.add(
                        "selected"
                    );


                    updateQuestionGrid();

                }
            );

        }
    );


    // ==========================================
    // NEXT BUTTON
    // ==========================================

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                if (currentQuestion <
                    questions.length - 1) {

                    currentQuestion++;

                    loadQuestion();

                } else {

                    submitExam();

                }

            }
        );

    }


    // ==========================================
    // PREVIOUS BUTTON
    // ==========================================

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function () {

                if (currentQuestion > 0) {

                    currentQuestion--;

                    loadQuestion();

                }

            }
        );

    }


    // ==========================================
    // QUESTION NUMBER GRID
    // ==========================================

    if (questionGrid) {

        questionGrid.innerHTML = "";


        questions.forEach(
            function (_, index) {

                const button =
                    document.createElement("button");


                button.innerHTML =
                    index + 1;


                button.classList.add(
                    "question-btn"
                );


                button.addEventListener(
                    "click",
                    function () {

                        if (examSubmitted) {
                            return;
                        }

                        currentQuestion =
                            index;

                        loadQuestion();

                    }
                );


                questionGrid.appendChild(
                    button
                );

            }
        );

    }


    // ==========================================
    // QUESTION GRID STATUS
    // ==========================================

    function updateQuestionGrid() {

        if (!questionGrid) {
            return;
        }


        const buttons =
            questionGrid.querySelectorAll(
                ".question-btn"
            );


        buttons.forEach(
            function (button, index) {

                button.classList.remove(
                    "answered"
                );

                button.classList.remove(
                    "current"
                );


                if (
                    userAnswers[index] !== null
                ) {

                    button.classList.add(
                        "answered"
                    );

                }


                if (
                    index === currentQuestion
                ) {

                    button.classList.add(
                        "current"
                    );

                }

            }
        );

    }


    // ==========================================
    // PROGRESS BAR
    // ==========================================

    function updateProgress() {

        const progressBar =
            document.querySelector(
                ".progress-bar"
            );


        if (!progressBar) {
            return;
        }


        const progress =
            ((currentQuestion + 1) /
                questions.length) * 100;


        progressBar.style.width =
            progress + "%";

    }


    // ==========================================
    // TIMER
    // ==========================================

    function updateTimer() {

        if (!timerElement) {
            return;
        }


        const hours =
            Math.floor(
                timeLeft / 3600
            );


        const minutes =
            Math.floor(
                (timeLeft % 3600) / 60
            );


        const seconds =
            timeLeft % 60;


        timerElement.innerHTML =
            String(hours).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");


        if (timeLeft > 0) {

            timeLeft--;

        } else {

            submitExam();

        }

    }


    updateTimer();


    const timerInterval =
        setInterval(
            updateTimer,
            1000
        );


    // ==========================================
    // SUBMIT EXAM
    // ==========================================

    function submitExam() {

        if (examSubmitted) {
            return;
        }


        examSubmitted = true;


        clearInterval(timerInterval);


        let score = 0;

        let correct = 0;

        let wrong = 0;

        let unanswered = 0;


        questions.forEach(
            function (question, index) {

                if (
                    userAnswers[index] === null
                ) {

                    unanswered++;

                } else if (
                    userAnswers[index] ===
                    question.answer
                ) {

                    score++;

                    correct++;

                } else {

                    wrong++;

                }

            }
        );


        const percentage =
            Math.round(
                (score / questions.length) * 100
            );


        showResult(
            score,
            correct,
            wrong,
            unanswered,
            percentage
        );

    }


    // ==========================================
    // RESULT SCREEN
    // ==========================================

    function showResult(
        score,
        correct,
        wrong,
        unanswered,
        percentage
    ) {

        const questionPanel =
            document.querySelector(
                ".question-panel"
            );


        if (!questionPanel) {
            return;
        }


        questionPanel.innerHTML = `

            <div class="result-screen">

                <div class="result-icon">
                    🎉
                </div>

                <h2>Exam Completed!</h2>

                <p class="result-score">
                    ${score} / ${questions.length}
                </p>

                <p class="percentage">
                    ${percentage}%
                </p>

                <div class="result-stats">

                    <div>
                        <strong>${correct}</strong>
                        <span>Correct</span>
                    </div>

                    <div>
                        <strong>${wrong}</strong>
                        <span>Wrong</span>
                    </div>

                    <div>
                        <strong>${unanswered}</strong>
                        <span>Unanswered</span>
                    </div>

                </div>

                <button
                    class="restart-btn"
                    id="restartExam">
                    Take Exam Again
                </button>

            </div>

        `;


        const restartButton =
            document.getElementById(
                "restartExam"
            );


        if (restartButton) {

            restartButton.addEventListener(
                "click",
                function () {

                    location.reload();

                }
            );

        }

    }


    // ==========================================
    // JAMB COUNTDOWN
    // ==========================================

    const countdownElement =
        document.getElementById("countdown");


    if (countdownElement) {

        const examDate =
            new Date(
                "April 25, 2027 08:00:00"
            ).getTime();


        function updateCountdown() {

            const now =
                new Date().getTime();


            const distance =
                examDate - now;


            if (distance <= 0) {

                countdownElement.innerHTML =
                    "Exam Day";

                return;

            }


            const days =
                Math.floor(
                    distance /
                    (1000 * 60 * 60 * 24)
                );


            countdownElement.innerHTML =
                days +
                " Days Left";

        }


        updateCountdown();


        setInterval(
            updateCountdown,
            1000
        );

    }


    // ==========================================
    // START CBT
    // ==========================================

    loadQuestion();

});