function getPageAttributes() {
    var delimiter = "&";

    var currHash = document.location.hash.substr(1);
    var assignments = currHash.split(delimiter);

    var map = {};
    for (var i = 0; i < assignments.length; i++) {
        var pair = assignments[i].split("=");
        if (pair.length >= 2 && pair[0].length > 0 && pair[1].length > 0) {
            map[pair[0]] = pair[1];
        }
    }

    // Defaults
    // Language
    if (!map["l"] || map["l"].length <= 0) {
        map["l"] = "en";
    }

    return map;
}

function getPageAttribute(attr) {
    var map = getPageAttributes();
    return map[attr];
}

function writeImageForLanguageAndPage(lang, page, i) {
    document.write('<img src="'+lang+'/'+page+'/'+i+'.png"></img>');
}

function writeApp() {
    // Get the language attribute, the page attribute, go through and print 10 images for each?
    var lang = getPageAttribute("l");
    var page = getPageAttribute("p");

    for (var i = 1; i <= 10; ++i) {
        writeImageForLanguageAndPage(lang, page, i);
    }
}
