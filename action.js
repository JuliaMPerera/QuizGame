
/* Defining all Qs (= array items) 
let questionsArray = [
    {question: 'What does "Phishing" refer to?', 
    answers: [
        {answer:'A cyber attack attempting to deceive users into revealing sensitive information.',
        isCorrect: true},
        {answer:'A cyber attack attempting to deceive users into revealing sensitive information.',
        isCorrect: false},
        {answer:'A cyber attack attempting to deceive users into revealing sensitive information.',
        isCorrect: false},
        {answer:'A cyber attack attempting to deceive users into revealing sensitive information.',
        isCorrect: false}
    ]},
    {question: 'Which of the following is considered a strong password?', 
    answers: [
        {answer:'P@ssw0rd!', isCorrect: true},
        {answer:'password123', isCorrect: false},
        {answer:'myname1987', isCorrect: false},
        {answer:'abc123', isCorrect: false}
    ]},
    {question: 'What is the purpose of a VPN (Virtual Private Network)?', 
    answers: [
        {answer:'To encrypt internet connection for secure browsing.', isCorrect: true},
        {answer:'To improve computer performance.', isCorrect: false},
        {answer:'To enhance online gaming experience.', isCorrect: false},
        {answer:'To create virtual reality environments.', isCorrect: false}
    ]},
    {question: 'What is "Two-Factor Authentication" (2FA)?', 
    answers: [
        {answer:'An extra layer of security requiring two forms of verification.', isCorrect: true},
        {answer:'A technique to secure email attachments.', isCorrect: false},
        {answer:'A type of computer virus.', isCorrect: false},
        {answer:'A method to unlock mobile phones.', isCorrect: false}
    ]},
    {question: 'Which of the following actions is an example of social engineering?', 
    answers: [
        {answer:'Tricking someone into revealing their password.', isCorrect: true},
        {answer:'Creating a strong password.', isCorrect: false},
        {answer:'Installing an antivirus software.', isCorrect: false},
        {answer:'Using a firewall to block incoming traffic.', isCorrect: false}
    ]},
        {question: 'What is "Ransomware?', 
    answers: [
        {answer:'Malicious software that locks files until a ransom is paid.', isCorrect: true},
        {answer:'A type of online marketplace.', isCorrect: false},
        {answer:'An online streaming service.', isCorrect: false},
        {answer:'A program that helps improve internet speed.', isCorrect: false}
    ]},
        {question: 'Which of the following practices contributes to a more secure online presence? (Select all that apply)', 
    answers: [
        {answer:'Avoiding public Wi-Fi for sensitive transactions.', isCorrect: true},
        {answer:'Enabling Two-Factor Authentication (2FA).', isCorrect: true},
        {answer:'Using the same password for multiple accounts.', isCorrect: false},
        {answer:'Clicking on links in unsolicited emails.', isCorrect: false}
    ]},
        {question: 'What should you do if you receive an email with a suspicious attachment? (Select all that apply)', 
    answers: [
        {answer:'Delete the email without opening the attachment.', isCorrect: true},
        {answer:'If necessary: Contact the sender through another, trusted communication channel to ask if they sent it.', isCorrect: true},
        {answer:'Open the attachment to check its content.', isCorrect: false},
        {answer:'Forward the email to some colleagues for verification.', isCorrect: false}
    ]},



Questions
let firstQuestion = questionsArray[0].question
let secondQuestion = questionsArray[1].question
let eighthQuestion = questionsArray[7].question

All answers (first question):
let answers = questionsArray[0].answers

Individual answers (first question, first answer):
questionsArray[0].answers[0].answer


    */



/* For each item 0-7 of the array, do this */
questionsArray.forEach(function(currentValue){
    /* --> Add 1 to the counter element inside the status display */
    
    let counterValue = parseInt(document.getElementById('counter').textContent);
    counterValue++;
    document.getElementById('counter').textContent = counterValue;

    /* --> Create a Question (value of h2) */

    let h2 = document.querySelector('h2');
    h2.textContent = questionsArray[currentValue].question;

    /* --> Create 4 buttons & populate them with answers */

        /* For each item in the answers array... */
        questionsArray[currentValue].answers.forEach(function(newestValue){

            /* --> create new button & add it to the button group in the HTML */ 
            let button = document.createElement('button');
            button.textContent = questionsArray[currentValue].answers[newestValue].answer;
            document.getElementById('button-group').appendChild(button);

            /* --> make button react to actions */
            button.addEventListener('click', function () {
                /* If answer was clicked, turn green */
                if (questionsArray[currentValue].answers[newestValue].answer.isCorrect = true) {
                    button.style.backgroundColor = 'limegreen';
                    /* disable all others */
                    /* disable all others */

                }
                /* If other was clicked, turn red */
                else {
                    button.style.backgroundColor = 'red';
                    /* disable all others */
                    /* disable all others */
                }
                /* After 4 seconds, reset & new question*/
                setTimeout(function reset () {
        
                    /* Reset button states */
                    /* 
                    options.forEach(function (button) {
                        button.style.backgroundColor = '';
                        button.disabled = false;
                        */

                    /* Display new Q:
                        - Add 1 to array[i] and display its value
                        - Add 1 to array[i] and display its value
                    */
                   
                    });
                }, 4000);
            });
        });
});
