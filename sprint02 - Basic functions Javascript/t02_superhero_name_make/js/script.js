let supehero = '';
let animal = prompt('What animal is the superhero most similar to?');
let regexAnimal = new RegExp(/^[A-Za-z]+$/);
if (animal.length > 20) {
    alert("Mistake. Animal must length <= 20");
    animal = '';
}

if (regexAnimal.test(animal) === false) {
    alert("Mistake. Animal must be only in letters");
    animal = '';
}

let sex = prompt('Is the superhero male or female? Leave blank if unknown or other.');
if (sex !== 'male' && sex !== 'female' && sex !== '') {
    alert("Mistake. Sex must be 'male' or 'female' or blank.");
}

let age = prompt('How old is the superhero?');
let regexAge = new RegExp(/^[1-9]+$/);
if (age.length > 5) {
    alert("Mistake. Age length must be <= 5.");
}
if (regexAge.test(age) === false) {
    alert("Mistake. Age must be only digits and not begin with 0;");
}


if (sex === 'male' && age < 18) {
    supehero = 'boy';
} else if (sex === 'male' && age >= 18) {
    supehero = 'man';
} else if (sex === 'female' && age < 18) {
    supehero = 'girl';
} else if (sex === 'female' && age >= 18) {
    supehero = 'woman';
} else if (sex === '' && age < 18) {
    supehero = 'kid';
} else if (sex === '' && age >= 18) {
    supehero = 'hero';
} else {
    supehero = '';
}

if (supehero !== '' && animal !== '') {
    alert('The superhero name is: ' + animal + '-' + supehero + '!');
} else {
    alert('Reload and write correctly!');
}