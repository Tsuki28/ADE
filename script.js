const answers = [
    "But i love you",
    "No i love u ",
    "I want u sm",
    "Nah I can be stubborn like you",
    "WHAT A POOKIE!",
    "NO I WANT YOU",
    "Maybe we can talk about it?",
    "SAY YES!",
    "I'll win ur heart",
    "No no no i'm so into u",
    "I love u i love u i love u i love u",
    "I'll always be in love with u",
    "Ti amo cosi tanto",
    "Alright, tell me what can i do?"
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) banner.src = "https://media1.tenor.com/m/BbSkyx3DaEgAAAAC/goma-sad.gif";
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "https://media1.tenor.com/m/yLYG74Neab0AAAAC/mochi-cat.gif";
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});