function encrypt(txt, locations, key) {
    let i, j, a = {}, b = {}, encrypt = "";
    console.log("Text you entered: " + txt);

    txt = txt.toLowerCase().match(/.{1,2}/g);
    if (txt[txt.length - 1].length == 1) txt[txt.length - 1] += "x";

    for (i = 0; i < txt.length; i++) {
        a.l = txt[i][0]; b.l = txt[i][1];

        if (a.l === b.l) b.l = "x";
        a.loc = locations[a.l]; b.loc = locations[b.l];

        if (a.loc[0] == b.loc[0] && a.loc[1] == b.loc[1]) {
            encrypt += "xx";
        } else if (a.loc[0] == b.loc[0]) {

            if ((a.loc[1] + 1) == 7) { j = 0 } else { j = (a.loc[1] + 1) }
            encrypt += key[a.loc[0]][j];

            if ((b.loc[1] + 1) == 7) { j = 0 } else { j = (b.loc[1] + 1) }
            encrypt += key[b.loc[0]][j];

        } else if (a.loc[1] == b.loc[1]) {

            if ((a.loc[0] + 1) == 7) { j = 0 } else { j = (a.loc[0] + 1); }
            encrypt += key[j][a.loc[1]];

            if ((b.loc[0] + 1) == 7) { j = 0 } else { j = (b.loc[0] + 1); }
            encrypt += key[j][b.loc[1]];

        } else {
            encrypt += key[a.loc[0]][b.loc[1]];
            encrypt += key[b.loc[0]][a.loc[1]];
        }
    }

    console.log("Encrypted Text: " + encrypt);
}

module.exports = encrypt;