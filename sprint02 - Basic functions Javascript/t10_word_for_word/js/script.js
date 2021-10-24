function addWords(obj, wrds) {
    let temp;
    let words = wrds.split(" ").filter(function (item) {
        return item.replace(/(\r\n|\n|\r)/gm, "")
    });
    if (obj.hasOwnProperty('words')) {
        temp = obj['words'].split(" ").filter(function (item) {
            return item.replace(/(\r\n|\n|\r)/gm, "")
        });
        words.forEach(function (item) {
            temp.push(item);
        });
        temp = temp.filter(function (item, pos) {
            return temp.indexOf(item) === pos;
        });
        obj['words'] = temp.join(' ');
    }
    return obj;
}

function removeWords(obj, wrds) {
    let temp;
    let words = wrds.split(" ").filter(function (item) {
        return item.replace(/(\r\n|\n|\r)/gm, "")
    });
    if (obj.hasOwnProperty('words')) {
        temp = obj['words'].split(" ").filter(function (item) {
            return item.replace(/(\r\n|\n|\r)/gm, "")
        });
        words.forEach(function (item) {
            let index = temp.indexOf(item);
            temp.splice(index, 1);
        });
        obj['words'] = temp.join(' ');
    }
    return obj;
}

function changeWords(obj, oldWrds, newWrds) {
    let temp;
    let oldWords = oldWrds.split(" ").filter(function (item) {
        return item.replace(/(\r\n|\n|\r)/gm, "")
    });
    let newWords = newWrds.split(" ").filter(function (item) {
        return item.replace(/(\r\n|\n|\r)/gm, "")
    });
    if (obj.hasOwnProperty('words')) {
        temp = obj['words'].split(" ").filter(function (item) {
            return item.replace(/(\r\n|\n|\r)/gm, "")
        });
        oldWords.forEach(function (item) {
            let index = temp.indexOf(item);
            temp.splice(index, 1);
        });
        newWords.forEach(function (item) {
            temp.splice(1, 0, item);
        });
        obj['words'] = temp.join(' ');
    }
    return obj;
}

const obj = {
    words: 'newspapers newspapers  books magazines'
};

console.log(obj); // {words: "newspapers newspapers  books magazines"}

addWords(obj, 'radio newspapers   ');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}