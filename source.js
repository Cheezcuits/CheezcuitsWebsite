body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Courier New', Courier, monospace, sans-serif;
    background-color: #f0f0f0;
    overflow: auto; /* Allows scrolling */
    opacity: 0;
    animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.background {
    position: relative;
    min-height: 100vh; 
    background: url('Images/FjionJ_agAUhKt0.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
}

.content, .stuff { /*The content itself*/
    padding: 20px;
    background: rgba(255, 255, 225, 0.8);
    max-width: 1000px;
    border-radius: 30px;
    border: none;
    margin: 0 auto;
    text-align: justify;
}

.content {
    text-align: center;
}

button {
    cursor: pointer;
}

button:hover {
    background-color: rgb(240, 173, 58);
}

button:active {
    background-color: rgb(247, 201, 122);
}

/* Buttons for opening popups */
.UpdateLogBtn, .SpotifyPlaylistBtn, .WorksAndStuffBtn, .RecommendationsBtn, .QuestionsAndAnswersBtn {
    background: rgb(232, 151, 11);
    border-radius: 10px;
    outline: none;
    border: 0;
    width: 190px; 
    height: 50px; 
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    align-items: left;
    font-size: 13px; 
    display: inline-block; /* Ensure the button is displayed */
}

/* Popup content */
.UpdateLog, .SpotifyPlaylist, .WorksAndStuff, .Recommendations, .QuestionsAndAnswers {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.7);
    width: 780px;
    background: rgb(246, 192, 44);
    border-radius: 20px;
    text-align: justify;
    padding: 20px;
    color: #000000;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
    max-height: 80vh;
    overflow: auto;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    font-weight: 500;
}

/* Hides the scrollbar */
.UpdateLog::-webkit-scrollbar, .SpotifyPlaylist::-webkit-scrollbar, .WorksAndStuff::-webkit-scrollbar, .Recommendations::-webkit-scrollbar, .QuestionsAndAnswers::-webkit-scrollbar {
    width: 0;
    height: 0;
}

/* Classes to show popups */
.open-UpdateLog, .open-SpotifyPlaylist, .open-WorksAndStuff, .open-Recommendations, .open-QuestionsAndAnswers {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}

/* Buttons inside popups */
.UpdateLog button, .SpotifyPlaylist button, .WorksAndStuff button, .Recommendations button, .QuestionsAndAnswers button {
    padding: 10px 0;
    width: 100%;
    background: beige;
    border: 0;
    outline: none;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 300;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.UpdateLog button:hover, .SpotifyPlaylist button:hover, .WorksAndStuff button:hover, .Recommendations button:hover, .QuestionsAndAnswers button:hover {
    background-color: rgb(245, 245, 200);
}

.UpdateLog button:active, .SpotifyPlaylist button:active, .WorksAndStuff button:active, .Recommendations button:active, .QuestionsAndAnswers button:active {
    background-color: rgb(245, 245, 230);
}

/* Close button style */
.close-btn {
    color: beige;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close-btn:hover, .close-btn:focus {
    color: red;
}
