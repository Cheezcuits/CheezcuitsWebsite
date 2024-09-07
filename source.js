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
    initializeButtons();
});
