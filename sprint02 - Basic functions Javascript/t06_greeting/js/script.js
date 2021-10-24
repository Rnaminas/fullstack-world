let fullname = prompt('Write you first name and last name', 'John Doe');
const nameRegex = /^[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/;
if(nameRegex.test(fullname) === true) {
    console.log(`Welcome on board, ${fullname}!`);
    alert(`Welcome on board, ${fullname}!`);
}else {
    console.log('Wrong input!');
    alert('Wrong input!');
}