

function getFrequency(string) {
    var countLetters = {};

    for (var i=0; i<string.length;i++) {

        var character = string.charAt(i);

        if (countLetters[character]) {
           countLetters[character]++;
           
        } else {
           countLetters[character] = 1;
        }
    }

    return countLetters;
};


