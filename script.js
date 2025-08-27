function getTextContent(element) {
    let number = document.getElementById(element).innerText;
    return number;
}
function increaseCount(element, increment) {
    let count = document.getElementById(element);
    count.innerText = parseInt(count.innerText) + increment;
}
function decreaseCount(element, decrement) {
    let count = document.getElementById(element);
    count.innerText = Math.max(0, parseInt(count.innerText) - decrement);
}
function copyContent(title, number) {
    navigator.clipboard.writeText(title + ": " + number).then(function () {
        let copyCount = getTextContent("copy");
        copyCount = increaseCount("copy", 1);
        alert('Copied ' + title + ": " + number);
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

function copyContent(title, number) {
    navigator.clipboard.writeText(title + ": " + number).then(function () {
        let copyCount = getTextContent("copy");
        copyCount = increaseCount("copy", 1);
        alert('Copied ' + title + ": " + number);
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

const hearts = document.querySelectorAll('.fa-heart');
hearts.forEach(heart => {
    heart.style.cursor = 'pointer';
    heart.addEventListener('click', (event) => {
        increaseCount("heart", 1);
    });
});