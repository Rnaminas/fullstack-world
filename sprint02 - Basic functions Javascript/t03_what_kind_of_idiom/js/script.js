let idiom = '',
    regexNumb = new RegExp(/^([1-9]|10)$/);
let number = prompt('Enter a number from 1 to 10');
if(regexNumb.test(number) !== true) {
    alert('Wrong number! Only from 1 - 10');
    location.reload(true);
}else {
    number = Number.parseInt(number);
}

switch (number) {
    case 1:
        idiom = "Back to square 1";
        break;
    case 2:
        idiom = "Goody 2-shoes";
        break;
    case 3:
        idiom = "Two's company, three's a crowd";
        break;
    case 4:
        idiom = "Counting sheep";
        break;
    case 5:
        idiom = "Take five";
        break;
    case 6:
        idiom = "Two's company, three's a crowd";
        break;
    case 7:
        idiom = "Seventh heaven";
        break;
    case 8:
        idiom = "Behind the eight-ball";
        break;
    case 9:
        idiom = "Counting sheep";
        break;
    case 10:
        idiom = "Cheaper by the dozen";
        break;
}

alert(idiom);