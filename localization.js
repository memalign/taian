
function switchLang(newLang) {
    var oldHash = document.location.hash
    var tokens = oldHash.split("-", 1);
    if (tokens[0].indexOf(newLang) == 1)
        return;

    document.location.hash = '#' + newLang + '-' + oldHash.substring(tokens[0].length+1);
    document.location.reload(true)
}

function langIsChinese() {
    return (document.location.hash.indexOf("cn") == 1);
}

function langTag() {
    if (langIsChinese()) {
        return "cn";
    }
    return "en";
}

function loc(str) {
    var loc = {};
    loc['International Student'] = "ching chong";
    loc['Global Medical'] = "wing wong";
    // Fill in the rest of the localizable strings here...

    if (!langIsChinese() || !loc[str])
        return str;
    return loc[str];
}

