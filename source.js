document.addEventListener('DOMContentLoaded', () => {
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
        'WorksAndStuff': {
            button: '.WorksAndStuffBtn',
            popup: '.WorksAndStuff',
            openClass: 'open-WorksAndStuff'
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
        }
    };

    // Function to toggle the popup visibility
    function togglePopup(popupSelector, openClass) {
        const popup = document.querySelector(popupSelector);
        popup.classList.toggle(openClass);
    }

    // Function to initialize button events
    function initializeButtons() {
        Object.keys(popups).forEach(key => {
            const { button, popup, openClass } = popups[key];

            // Open popup
            document.querySelector(button).addEventListener('click', (e) => {
                e.stopPropagation();
                closeAllPopups();
                togglePopup(popup, openClass);
            });

            // Close popup by close button
            const closeButton = document.querySelector(popup).querySelector('.close-btn');
            if (closeButton) {
                closeButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    closeAllPopups();
                });
            }

            // Close popup by clicking outside
            document.addEventListener('click', (e) => {
                if (!document.querySelector(popup).contains(e.target) && !document.querySelector(button).contains(e.target)) {
                    closeAllPopups();
                }
            });
        });
    }

    // Function to close all popups
    function closeAllPopups() {
        Object.keys(popups).forEach(key => {
            const { popup, openClass } = popups[key];
            const element = document.querySelector(popup);
            element.classList.remove(openClass);
        });
    }

    // Initialize the button event listeners
    initializeButtons();
});
