function checkBrackets(str) {
    let result;
    if (typeof str === 'string') {
        if (str.indexOf('(') !== -1 && str.indexOf(')') !== -1) {
            let brackets = str.replace(/[^(,)]/gi, '', str);
            while (brackets.search(/\(\)/gi) !== -1) {
                brackets = brackets.replace(/\(\)/gi, '', brackets);
            }
            result = brackets.length;
        } else {
            result = -1;
        }
    } else {
        result = -1;
    }

    return result;
}