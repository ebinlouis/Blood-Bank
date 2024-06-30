navigateToAbout = () => {
    window.location.href = 'about/index.html';
};

navigateToVolunteer = () => {
    window.location.href = 'volunteer/index.html';
};

navigateToDonors = () => {
    window.location.href = 'donors/index.html';
};

document.getElementById('about').addEventListener('click', navigateToAbout);
document
    .getElementById('volunteer')
    .addEventListener('click', navigateToVolunteer);
document.getElementById('donors').addEventListener('click', navigateToDonors);
