
document.addEventListener('DOMContentLoaded', (event) => {

    /* Defining all Qs (= array items) */
    let questionsArray = [
        {
            question: 'What does "Phishing" refer to?',
            answers: [
                { answer: 'A popular social media platform.', isCorrect: false },
                { answer: 'A fun hobby.', isCorrect: false },
                { answer: 'A cyber attack attempting to deceive users into revealing sensitive information.', isCorrect: true },
                { answer: 'A technique used to enhance CPU performance.', isCorrect: false }
            ]
        },
        {
            question: 'Which of the following is considered a strong password?',
            answers: [
                { answer: 'password123', isCorrect: false },
                { answer: 'myname1987', isCorrect: false },
                { answer: 'abc123', isCorrect: false },
                { answer: 'P@ssw0rd!', isCorrect: true }
            ]
        },
        {
            question: 'What is the purpose of a VPN (Virtual Private Network)?',
            answers: [
                { answer: 'To encrypt internet connection for secure browsing.', isCorrect: true },
                { answer: 'To improve computer performance.', isCorrect: false },
                { answer: 'To enhance online gaming experience.', isCorrect: false },
                { answer: 'To create virtual reality environments.', isCorrect: false }
            ]
        },
        {
            question: 'What is "Two-Factor Authentication" (2FA)?',
            answers: [
                { answer: 'A technique to secure email attachments.', isCorrect: false },
                { answer: 'An extra layer of security requiring two forms of verification.', isCorrect: true },
                { answer: 'A type of computer virus.', isCorrect: false },
                { answer: 'A method to unlock mobile phones.', isCorrect: false }
            ]
        },
        {
            question: 'Which of the following actions is an example of social engineering?',
            answers: [
                { answer: 'Creating a strong password.', isCorrect: false },
                { answer: 'Installing an antivirus software.', isCorrect: false },
                { answer: 'Using a firewall to block incoming traffic.', isCorrect: false },
                { answer: 'Tricking someone into revealing their password.', isCorrect: true }
            ]
        },
        {
            question: 'What is "Ransomware?"',
            answers: [
                { answer: 'A type of online marketplace.', isCorrect: false },
                { answer: 'An online streaming service.', isCorrect: false },
                { answer: 'A program that helps improve internet speed.', isCorrect: false },
                { answer: 'Malicious software that locks files until a ransom is paid.', isCorrect: true }
            ]
        },
        {
            question: 'Which of the following practices contributes to a more secure online presence?',
            answers: [
                { answer: 'Implement quantum blockchain for better online security.', isCorrect: false },
                { answer: 'Avoiding public Wi-Fi for sensitive transactions.', isCorrect: true },
                { answer: 'Using the same password for multiple accounts.', isCorrect: false },
                { answer: 'Clicking on links in unsolicited emails.', isCorrect: false }
            ]
        },
        {
            question: 'What should you do if you receive an email with a suspicious attachment?',
            answers: [
                { answer: 'Delete the email without opening the attachment.', isCorrect: true },
                { answer: 'Execute reverse AI scan on dubious email attachments.', isCorrect: false },
                { answer: 'Open the attachment to check its content.', isCorrect: false },
                { answer: 'Forward the email to some colleagues for verification.', isCorrect: false }
            ]
        }];



    let buttonGroup = document.querySelector('#button-group');
    let buttonsArray;
    let currentIndex;
    let totalPoints;

    if (buttonGroup) {
        buttonGroup = buttonGroup.children;

        /* Create array out of the live collection */
        buttonsArray = [...buttonGroup];
        /* Set total points to 0 */
        totalPoints = 0;

        // /* Set start Index */
        currentIndex = 0;

        /* Reference card content */
        let currentCardContent = questionsArray[currentIndex];

        //* --> Display Q & one set of As *//
        function displayCardContent(index) {
            /* Update reference to currentCardContent */
            currentCardContent = questionsArray[index];

            /* Reference h2 */
            let h2 = document.querySelector('h2');
            if (h2) {
                h2.textContent = currentCardContent.question;
            } else {
                console.error("Couldn't find h2 element in the document")
            }

            /* For each answer row inside the current object... */
            currentCardContent.answers.forEach(function (answer, index) {
                /* Into each button, put the answer with the same index */
                let currentButton = buttonsArray[index];
                currentButton.textContent = answer.answer;
                /* Into each button, insert the correstponding isCorrect */
                currentButton.setAttribute('is-correct', answer.isCorrect);
            });
        };

        /* Run function */
        displayCardContent(currentIndex);

        window.addEventListener("load", () => {
            if (buttonsArray.length > 0)
                buttonsArray.forEach(function (button) {
                    /* Register when user clicks */
                    button.addEventListener('click', function () {
                        /* If right answer was clicked... */
                        if (button.getAttribute('is-correct') === 'true') {
                            /* style as correct */
                            button.classList.add('correct');
                            /* activate totalPoints function (see below) */
                            addPointToScore();

                        }
                        /* If other was clicked, turn red */
                        else {
                            button.classList.add('false');

                        };
                        /* For each button that hasn't been clicked, turn disabled */
                        buttonsArray.forEach(function (btn) {
                            if (btn != button) {
                                btn.disabled = true;

                            };
                        });
                        /* After 4 seconds, populate with new Qs, reset button styles, update counter */
                        setTimeout(() => {
                            currentIndex++
                            if (currentIndex < questionsArray.length) {
                                displayCardContent(currentIndex);
                                buttonsArray.forEach(function (btn) {
                                    btn.classList.remove('correct', 'false');
                                    btn.disabled = false;
                                });
                                document.getElementById('counter').textContent++

                                // scroll to the top when a new question is loaded
                                document.querySelector('.section').scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                            else {
                                window.location.href = "./finish.html";
                            }
                        }, 2800)
                    });
                });
        })


        /* totalPoints function; totalPoints accumulating on the finish page */
        function addPointToScore() {
            totalPoints++;
            localStorage.setItem("total-points", totalPoints);
        }

    }

});