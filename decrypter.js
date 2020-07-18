function decrypt(txt, locations, key) {
    let i, j, a = {}, b = {}, decrypt = "";
    console.log("Text you entered: " + txt);

    txt = txt.toLowerCase().match(/.{1,2}/g);

    for (i = 0; i < txt.length; i++) {
        a.l = txt[i][0]; b.l = txt[i][1];
        a.loc = locations[a.l]; b.loc = locations[b.l];

        if (a.l == b.l) {
            decrypt += "xx";
        } else if (a.loc[0] == b.loc[0]) {

            if ((a.loc[1] - 1) == -1) { j = 6 } else { (j = a.loc[1] - 1) }
            decrypt += key[a.loc[0]][j];

            if ((b.loc[1] - 1) == -1) { j = 6 } else { (j = b.loc[1] - 1) }
            decrypt += key[b.loc[0]][j];

        } else if (a.loc[1] == b.loc[1]) {

            if ((a.loc[0] - 1) == -1) { j = 6 } else { (j = a.loc[0] - 1) }
            decrypt += key[j][a.loc[1]];

            if ((b.loc[0] - 1) == -1) { j = 6 } else { (j = b.loc[0] - 1) }
            decrypt += key[j][b.loc[1]];

        } else {
            decrypt += key[a.loc[0]][b.loc[1]];
            decrypt += key[b.loc[0]][a.loc[1]];
        }
    }

    console.log("Decrypted Text: " + decrypt);
}

module.exports = decrypt;