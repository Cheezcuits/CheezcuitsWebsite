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
            document.querySelector(popup).querySelector('.close-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                closeAllPopups();
            });

            // Close popup by "Return" button
            document.querySelector(popup).querySelector('.close-popup').addEventListener('click', (e) => {
                e.stopPropagation();
                closeAllPopups();
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

    // Function to handle click outside
    function handleClickOutside(event) {
        const isInsidePopup = Object.values(popups).some(({ popup }) =>
            document.querySelector(popup).contains(event.target)
        );

        const isInsideButton = Object.values(popups).some(({ button }) =>
            document.querySelector(button).contains(event.target)
        );

        if (!isInsidePopup && !isInsideButton) {
            closeAllPopups();
        }
    }

    // Initialize the button event listeners
    initializeButtons();

    // Add event listener to close popups when clicking outside
    document.addEventListener('click', handleClickOutside);
});
    // Select all popup elements
    const popups = document.querySelectorAll('.UpdateLog, .SpotifyPlaylist, .WorksAndStuff, .Recommendations, .QuestionsAndAnswers');

    // Function to close all popups
    function closeAllPopups() {
        popups.forEach(popup => {
            popup.classList.remove('open-UpdateLog', 'open-SpotifyPlaylist', 'open-WorksAndStuff', 'open-Recommendations', 'open-QuestionsAndAnswers');
        });
    }

    // Function to handle clicks outside of popups
    function handleOutsideClick(event) {
        if (!event.target.closest('.UpdateLog') &&
            !event.target.closest('.SpotifyPlaylist') &&
            !event.target.closest('.WorksAndStuff') &&
            !event.target.closest('.Recommendations') &&
            !event.target.closest('.QuestionsAndAnswers') &&
            !event.target.closest('.UpdateLogBtn') &&
            !event.target.closest('.SpotifyPlaylistBtn') &&
            !event.target.closest('.WorksAndStuffBtn') &&
            !event.target.closest('.RecommendationsBtn') &&
            !event.target.closest('.QuestionsAndAnswersBtn')) {
            closeAllPopups();
        }
    }

    // Attach event listener to the document to handle clicks outside of popups
    document.addEventListener('click', handleOutsideClick);

    // Attach event listeners to each close button
    popups.forEach(popup => {
        const closeBtn = popup.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent event from bubbling up to document
                closeAllPopups();
            });
        }
    });
