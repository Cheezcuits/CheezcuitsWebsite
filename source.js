const tabs = document.querySelectorAll('#ButtonChoices1, #ButtonChoices2, #ButtonChoices3, #ButtonChoices4, #ButtonChoices5');

function hideAllContents() {
    const tabContentIds = ['About', 'Projects', 'Socials', 'Spotify', 'UpdateLog'];
    tabContentIds.forEach(id => {
        const element = document.getElementById(id);
        element.classList.remove('slide-up');
        element.classList.add('hidden');
    });
}

function showContent(contentId) {
    const element = document.getElementById(contentId);
    element.classList.remove('hidden');
    element.classList.add('slide-up');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

tabs.forEach((tab) => {
    tab.classList.remove('active');
});

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
        // Deactivate all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Activate the clicked tab
        this.classList.add('active');
        
        // Hide all content sections
        hideAllContents();
        
        // Show content corresponding to the clicked tab
        const tabContentIds = ['About', 'Projects', 'Socials', 'Spotify', 'UpdateLog'];
        showContent(tabContentIds[index]);
    });
});
