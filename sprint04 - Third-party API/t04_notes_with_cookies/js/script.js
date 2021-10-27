const addCookiesButton = document.getElementById('add_cookies');
const resetCookiesButton = document.getElementById('reset_cookies');
const inputCookies = document.getElementById('text_input');
const outputCookies = document.getElementById('text_output');
let date = new Date(Date.now());
date.setDate(date.getDate() + 30);
date = date.toUTCString();

if (document.cookie === '') {
    outputCookies.value = '[Empty]';
}else {
    outputCookies.value = decodeURIComponent(document.cookie);
}


addCookiesButton.addEventListener('click', function () {
    if (inputCookies.value === '') {
        alert("It's empty. Try to input something in 'Text input'");
    } else {
        outputCookies.value = inputCookies.value;
        document.cookie = encodeURI('text_output') + '=' + encodeURI(inputCookies.value) + ';domain=.' + document.domain + ';path=/;expires=.'+ date + ';';
    }
});

resetCookiesButton.addEventListener('click', function () {
    let responseResetButton = confirm(`Are you sure?\n${document.cookie}`);
    if (responseResetButton) {
        outputCookies.value = '';
    }
});