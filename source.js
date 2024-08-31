document.addEventListener('DOMContentLoaded', () => {
    // Object containing popup configurations
    const popups = {
        'UpdateLog': {
            button: '.UpdateLogBtn',
            popup: '.UpdateLog',
            openClass: 'open-UpdateLog'
        },
        'SpotifyPlaylist': {
            button: '.SpotifyPlaylistBtn',
            popup: '.SpotifyPlaylist',
            openClass: 'open-SpotifyPlaylist'
        },
        'Portfolio': {
            button: '.PortfolioBtn',
            popup: '.Portfolio',
            openClass: 'open-Portfolio'
        },
        'Recommendations': {
            button: '.RecommendationsBtn',
            popup: '.Recommendations',
            openClass: 'open-Recommendations'
        },
        'QuestionsAndAnswers': {
            button: '.QuestionsAndAnswersBtn',
            popup: '.QuestionsAndAnswers',
            openClass: 'open-QuestionsAndAnswers'
        },
        'Settings': {
            button: '.SettingsBtn',
            popup: '.Settings',
            openClass: 'open-Settings'
        }
    };

    // Toggle the visibility of a popup
    function togglePopup(popupSelector, openClass) {
        const popup = document.querySelector(popupSelector);
        if (popup) {
            popup.classList.toggle(openClass);
        } else {
            console.error(`Popup not found: ${popupSelector}`);
        }
    }

    // Initialize button event listeners
    function initializeButtons() {
        Object.keys(popups).forEach(key => {
            const { button, popup, openClass } = popups[key];

            // Add event listener to open popup
            const buttonElement = document.querySelector(button);
            if (buttonElement) {
                buttonElement.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent click from propagating to document
                    closeAllPopups();
                    togglePopup(popup, openClass);
                });
            } else {
                console.error(`Button not found: ${button}`);
            }

            // Add event listener to close popup
            const closeButton = document.querySelector(`${popup} .close-btn`);
            if (closeButton) {
                closeButton.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent click from propagating to document
                    closeAllPopups();
                });
            }

            // Add event listener to close popup by clicking outside
            document.addEventListener('click', (e) => {
                const popupElement = document.querySelector(popup);
                const buttonElement = document.querySelector(button);
                if (popupElement && buttonElement) {
                    if (!popupElement.contains(e.target) && !buttonElement.contains(e.target)) {
                        closeAllPopups();
                    }
                }
            });
        });
    }

    // Close all popups
    function closeAllPopups() {
        Object.keys(popups).forEach(key => {
            const { popup, openClass } = popups[key];
            const element = document.querySelector(popup);
            if (element) {
                element.classList.remove(openClass);
            } else {
                console.error(`Popup not found for closing: ${popup}`);
            }
        });
    }

    // Initialize button event listeners
    initializeButtons();
});

// Function to change background image
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
