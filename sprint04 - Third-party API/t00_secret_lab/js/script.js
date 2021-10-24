const hero = document.querySelector('#hero');
const lab = document.querySelector('#lab');
lab.classList.add('');

function transformation() {
    if (lab.classList.contains('active')) {
        lab.classList.remove('active');
        lab.style.background = '#ffb300';
        hero.style.fontSize = '60px';
        hero.style.letterSpacing = '2px';
        hero.style.lineHeight = '60px';
    } else {
        lab.classList.add('active');
        lab.style.background = '#70964b';
        hero.style.fontSize = '130px';
        hero.style.letterSpacing = '6px';
        hero.style.lineHeight = '100px';
    }
}
