navigateToAbout = () => {
    window.location.href = '../about/index.html';
};

navigateToHome = () => {
    window.location.href = '../index.html';
};

navigateToDonors = () => {
    window.location.href = '../donors/index.html';
};

document.getElementById('about').addEventListener('click', navigateToAbout);
document.getElementById('home').addEventListener('click', navigateToHome);
document.getElementById('donors').addEventListener('click', navigateToDonors);
