// for functionality we'll use typescript especially for button
var button = document.getElementById('toggle-personal info');
var personalInfo = document.getElementById('personal-information');
button.addEventListener('click', function () {
    if (personalInfo.style.display === 'none') {
        personalInfo.style.display = 'block';
    }
    else {
        personalInfo.style.display = 'none';
    }
});
