let data = require("./data.json");
let temp = []; // Empty Array
let i, j, k;

data.key = data.key.toLowerCase();

// Getting our Key
data.key += "abcdefghijklmnopqrstuvwxyz1234567890.,!?@$%()/`# ";
data.key = data.key.split('');

data.key.forEach(function (elem) {
    if (!temp.includes(elem)) {
        temp.push(elem);
    }
})

// Setting up our 2 Dimentional Array [Matrix]

let key = [];
let location = {};
for (i = 0; i < 7; i++) {
    key[i] = [];
} // Array Initialization, won't work otherwise

for (i = 0, k = 0; i < 7; i++) {
    for (j = 0; j < 7; j++) {
        key[i][j] = temp[k];
        location[temp[k++]] = [i, j];
    }
}

let choice = parseInt(data.to);
let encrypter = require("./encrypter.js");
let decrypter = require("./decrypter.js");

switch (choice) {
    case 0: encrypter(data.encrypt, location, key); break;
    case 1: decrypter(data.decrypt, location, key); break;
    case 2: encrypter(data.encrypt, location, key);
            decrypter(data.decrypt, location, key);
            break;
    default: console.log("Invalid Choice");
}

if (data.matrix_visible) {
    console.log("7x7 Matrix: ");
    console.log(key);
}