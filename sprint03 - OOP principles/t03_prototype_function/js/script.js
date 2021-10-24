
String.prototype.removeDuplicates = function removeDuplicates(){
    let result = this.split(/\s+/g);
    var seen = {};
    return result.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    }).join(' ');
}


let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?

str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str);
// . ?
