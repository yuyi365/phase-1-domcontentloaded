document.addEventListener('DOMContentLoaded', () => {
    let text = document.querySelector('#text')
    replaceText(text);
});

const replaceText = (e) => {
    e.textContent = "This is really cool!";
}