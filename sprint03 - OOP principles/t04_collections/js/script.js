let guestList = new WeakMap();
let menu = new Map();
let bankVault = new WeakSet();
let coinCollection = new Set();
console.log('guestList -- WeakMap COLLECTION');
let oleg = {name: 'Oleg'},
    vlad = {name: 'Vlad'},
    dima = {name: 'Dima'},
    olga = {name: 'Olga'},
    vika = {name: 'Vika'};
guestList.set(oleg).set(vlad).set(dima).set(olga).set(vika);
console.log(guestList);
console.log(guestList.size);
console.log('Get guest - ' + guestList.get(oleg));
console.log('If guest is in collection - ' + guestList.has(vika));
guestList.delete(olga);
console.log('Remove guest by key - 2')
console.log(guestList);
console.log(guestList);

console.log('------\nmenu -- Map COLLECTION');
menu.set('pasta', '55$').set('pizza', '53$').set('shaurma', '13$').set('hot-dog', '31$').set('borsch', '99$').set('pizza', '52$');
console.log(menu);
console.log(menu.size);
console.log('Dish by name - ' + menu.get('pasta'));
console.log('If dish is in collection by name \'shaurma\' - ' + menu.has('shaurma'));
menu.delete('shaurma');
console.log('Remove dish by key - \'shaurma\'')
console.log(menu);
menu.forEach(function(value, key) {
    console.log(key + " cost -  " + value);
});

console.log('------\nbankVault -- WeakSet COLLECTION');
let deposit_boxes1 = {1241: '1111 1334 2224 5551'},
    deposit_boxes2 = {1242: '2222 1334 2224 5554'},
    deposit_boxes3 = {1243: '3333 1334 2224 5554'},
    deposit_boxes4 = {1244: '4444 1334 2224 5554'},
    deposit_boxes5 = {1245: '5555 1334 2224 5554'},
    deposit_boxes6 = {1245: '5555 1334 2224 5554'};

bankVault.add(deposit_boxes1).add(deposit_boxes2).add(deposit_boxes3).add(deposit_boxes4).add(deposit_boxes5).add(deposit_boxes6);
console.log(bankVault);
console.log(bankVault.size);
console.log(bankVault.has(deposit_boxes1));
bankVault.delete(deposit_boxes2);
console.log(bankVault);

console.log('------\ncoinCollection -- Set COLLECTION');
coinCollection.add('Euro').add('Dollar').add('Grivnya').add('Rubl').add('Bitcoin').add('Bitcoin').add('Bitcoin');
console.log(coinCollection);
coinCollection.delete('Rubl');
console.log(coinCollection);
console.log(coinCollection.size);
console.log(coinCollection.has('Grivnya'));
for(let val of coinCollection) {
    console.log(val);
}
coinCollection.clear();
console.log(coinCollection);