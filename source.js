var texts = [
    "Don't mind the 70 commits on August, it was me trying to change the background AND IT'S NOT WORKING FOR SOME REASON.",
    "Cheese.",
    "I 'love' coding",
    "You must Gangnam... Like I have.",
    "⚖️ + 💡 + 🐦",
    "I am inexperienced.",
    "Dancing, walking, rearranging furniture.",
    "Bocchi the rock!",
    "j",
    "I NEED MONEY OH MY GOD",
    "Why did I choose this course...",
    "... FOR MONEY OF COURSE!!!",
    "var texts = ['your text here', 'your text here also',] and replace it with double quotation marks",
    "printf('Maayong Buntag');",
    "future bantay ng comshop",
    "qwertyuiopasdfghjklzxcvbnm,",
    "Open the curtains, lights on...",
    "This is a random text",
    "9",
    "BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA BAKA",
    "You are not immune to propaganda.",
    "If you are wondering why I keep using '', because the other one is not allowed.",
    "(p∧q)∨(¬p∧¬q)",
    "Why do they commit sins, knowing it's wrong?",
    "I keep adding useless stuff here rather than doing productive work",
    "Ame doko?",
];

const popups = {
    'Settings': {
        button: '.SettingsBtn',
        popup: '.Settings',
        openClass: 'open-Settings'
    },
    'UpdateLog': {
        button: '.UpdateLogBtn',
        popup: '.UpdateLog',
        openClass: 'open-UpdateLog'
    }
};

function togglePopup(popupSelector, openClass) {
    const popup = document.querySelector(popupSelector);
    if (popup) {
        popup.classList.toggle(openClass);
    } else {
        console.error(`Popup not found: ${popupSelector}`);
    }
}

function closeAllPopups() {
    Object.values(popups).forEach(({ popup, openClass }) => {
        const popupElement = document.querySelector(popup);
        if (popupElement) {
            popupElement.classList.remove(openClass);
        }
    });
}

function initializeButtons() {
    Object.keys(popups).forEach(key => {
        const { button, popup, openClass } = popups[key];
        const buttonElement = document.querySelector(button);
        const popupElement = document.querySelector(popup);

        if (buttonElement) {
            buttonElement.addEventListener('click', (e) => {
                console.log(`${key} button clicked`);
                e.stopPropagation();
                closeAllPopups();
                togglePopup(popup, openClass);
            });
        } else {
            console.error(`Button not found: ${button}`);
        }

        const closeButton = document.querySelector(`${popup} .close-popup`);
        if (closeButton) {
            closeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                closeAllPopups();
            });
        }

        if (popupElement) {
            popupElement.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        document.addEventListener('click', (e) => {
            if (popupElement && !popupElement.contains(e.target) && !buttonElement.contains(e.target)) {
                closeAllPopups();
            }
        });
    });
}

function changeBackground(imageClass) {
    console.log(`Changing background for image class: ${imageClass}`);

    const imageUrls = {
        'image1': 'url("Images/FjionJ_agAUhKt0.jpg")',
        'image2': 'url("Images/F7gViGibwAAbTVE.jpg")',
        'image3': 'url("Images/GRU4WHGbQAAuir0.jpg")'
    };

    const url = imageUrls[imageClass];
    if (url) {
        document.body.style.backgroundImage = url;
    } else {
        console.error(`No URL found for image class: ${imageClass}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Set a random text on page load
    const randomTextDiv = document.getElementById('randomText');
    randomTextDiv.textContent = texts[Math.floor(Math.random() * texts.length)];

    // Initialize button event listeners
    initializeButtons();
});
