navigateToAbout = () => {
    window.location.href = '../about/index.html';
};

navigateToVolunteer = () => {
    window.location.href = '../volunteer/index.html';
};

navigateToHome = () => {
    window.location.href = '../index.html';
};

document.getElementById('about').addEventListener('click', navigateToAbout);
document
    .getElementById('volunteer')
    .addEventListener('click', navigateToVolunteer);
document.getElementById('home').addEventListener('click', navigateToHome);
