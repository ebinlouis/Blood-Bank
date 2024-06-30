navigateToHome = () => {
    window.location.href = '../index.html';
};

navigateToVolunteer = () => {
    window.location.href = '../volunteer/index.html';
};

navigateToDonors = () => {
    window.location.href = '../donors/index.html';
};

document.getElementById('home').addEventListener('click', navigateToHome);
document
    .getElementById('volunteer')
    .addEventListener('click', navigateToVolunteer);
document.getElementById('donors').addEventListener('click', navigateToDonors);
