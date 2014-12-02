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

    // Page
    if (!map["p"] || map["p"].length <= 0) {
        map["p"] = "pivot-home";
    }

    return map;
}

function getPageAttribute(attr) {
    var map = getPageAttributes();
    return map[attr];
}

function getHashForMap(map) {
    var newHash = "#";
    var delim = "";
    for (var key in map) {
        if (key.length > 0 && map[key] && map[key].length > 0) {
            newHash = newHash + delim + key + "=" + map[key];
            delim = "&";
        }
    }

    return newHash;
}

function updateHash(keyToUpdate, newValue) {
    var map = getPageAttributes();

    if (keyToUpdate && keyToUpdate.length > 0)
        map[keyToUpdate] = newValue;

    document.location.hash = getHashForMap(map);
    window.scrollTo(0, 0);
}

function getAdId() {
    var adId = getPageAttribute("adid");
    var hasAdId = !(typeof adId === "undefined");
    if (!hasAdId) {
        adId = getPageAttribute("partner");
    }

    return adId;
}

function analyticsTrackEvent(action, label, value, nonInteraction) {
    if (_gaq) {
        if (typeof value === "undefined" || isNaN(parseInt(value))) {
            value = -1;
        }

        _gaq.push(['_trackEvent', "taianfinancial", action, label, parseInt(value), nonInteraction]);
    }
}

function analyticsTrackAdView(pageName) {
    var adId = getAdId();
    if (typeof adId === "undefined") {
        // No tracking to be done
    } else {
        analyticsTrackEvent("ad-"+adId, pageName, 1, true);
    }
}

function analyticsTrackLanguageView(pageName) {
    var lstr = getPageAttribute("l");
    analyticsTrackEvent("viewLanguage", lstr+"-"+pageName, 1, true);
}

function referralSubstitution(key) {
    var referrals = {
        cn1: "l=cn&p=pivot-school-waiver",
        cn2: "l=cn&p=pivot-school-waiver", 

        aebj: "l=cn&p=pivot-school-waiver&adid=aebj",  
        baidu1: "partner=baidu1&l=cn&p=pivot-school-waiver&adid=baidu1",  
        hn1: "l=cn&p=pivot-school-waiver&adid=hn1",        
        aesh: "l=cn&p=pivot-school-waiver&adid=aesh", 
        shisu: "l=cn&p=pivot-school-waiver&adid=shisu",         
        ucsh: "l=cn&p=pivot-school-waiver&adid=ucsh",
        aeshmain: "l=cn&p=pivot-home&adid=aeshmain", 
        wxzzs: "l=cn&p=pivot-international-student&adid=wxzzs",
        wxzzl: "l=cn&p=pivot-school-waiver&adid=wxzzl",       
        nl2: "l=cn&p=pivot-international-student&adid=nl2",
        nl: "l=cn&p=pivot-school-waiver&adid=nl",        
        knl2: "l=cn&p=pivot-international-student&adid=knl2",
        knl: "l=cn&p=pivot-school-waiver&adid=knl",  
        wshsa: "l=cn&p=pivot-school-waiver&adid=wshsa", 
        wshsb: "l=cn&p=pivot-international-student&adid=wshsb",  
        lwd: "l=cn&p=pivot-international-student&adid=lwd",         
        
        awinsurance: "l=cn&partner=awinsurance&p=pivot-international-student&adid=awinsurance",        
        
        chinamarketing: "partner=chinamarketing&p=pivot-home&adid=chinamarketing",        
        wll: "l=cn&partner=wll&p=pivot-home&adid=wll",         
        confucius: "p=pivot-confucius-educator", 
        cnconfucius: "p=pivot-confucius-educator&l=cn",         
        cnkongalfred: "p=pivot-confucius-educator&l=cn&adid=cnkongalfred",
        cnkongasu: "p=pivot-confucius-educator&l=cn&adid=cnkongasu", 
        cnkongbryant: "p=pivot-confucius-educator&l=cn&adid=cnkongbryant",
        cnkongcsuohio: "p=pivot-confucius-educator&l=cn&adid=cnkongcsuohio",
        cnkongccd: "p=pivot-confucius-educator&l=cn&adid=cnkongccd", 
        cnkongchina: "p=pivot-confucius-educator&l=cn&adid=cnkongchina",
        cnkongcolumbia: "p=pivot-confucius-educator&l=cn&adid=cnkongcolumbia",  
        cnkongemory: "p=pivot-confucius-educator&l=cn&adid=cnkongemory", 
        cnkonguchicago: "p=pivot-confucius-educator&l=cn&adid=cnkonguchicago",
        cnkongiupui: "p=pivot-confucius-educator&l=cn&adid=cnkongiupui",
        kongiupui: "p=pivot-confucius-educator&adid=enkongiupui",        
        cnkongwsu: "p=pivot-confucius-educator&l=cn&adid=cnkongwsu", 
        cnkonggmu: "p=pivot-confucius-educator&l=cn&adid=cnkonggmu",
        cnkonggsu: "p=pivot-confucius-educator&l=cn&adid=cnkonggsu", 
        cnkongkennesaw: "p=pivot-confucius-educator&l=cn&adid=cnkongkennesaw", 
        cnkonguky: "p=pivot-confucius-educator&l=cn&adid=cnkonguky",
        cnkongmdc: "p=pivot-confucius-educator&l=cn&adid=cnkongmdc",
        cnkongmiami: "p=pivot-confucius-educator&l=cn&adid=cnkongmiami", 
        cnkongmsu: "p=pivot-confucius-educator&l=cn&adid=cnkongmsu",
        cnkongmtsu: "p=pivot-confucius-educator&l=cn&adid=cnkongmtsu",  
        cnkongnmsu: "p=pivot-confucius-educator&l=cn&adid=cnkongnmsu", 
        cnkongncsu: "p=pivot-confucius-educator&l=cn&adid=cnkongncsu",
        cnkongpace: "p=pivot-confucius-educator&l=cn&adid=cnkongpace",
        cnkongpsu: "p=pivot-confucius-educator&l=cn&adid=cnkongpsu", 
        cnkongpfeiffer: "p=pivot-confucius-educator&l=cn&adid=cnkongpfeiffer",
        cnkongpsu: "p=pivot-confucius-educator&l=cn&adid=cnkongpsu",
        cnkongpresbyterian: "p=pivot-confucius-educator&l=cn&adid=cnkongpresbyterian", 
        cnkongpurdue: "p=pivot-confucius-educator&l=cn&adid=cnkongpurdue",
        cnkongrutgers: "p=pivot-confucius-educator&l=cn&adid=cnkongrutgers",
        cnkongsdsu: "p=pivot-confucius-educator&l=cn&adid=cnkongsdsu", 
        cnkongsfsu: "p=pivot-confucius-educator&l=cn&adid=cnkongsfsu",
        cnkongsunyopt: "p=pivot-confucius-educator&l=cn&adid=cnkongsunyopt",  
        cnkongsunybing: "p=pivot-confucius-educator&l=cn&adid=cnkongsunybing", 
        cnkongsunybuf: "p=pivot-confucius-educator&l=cn&adid=cnkongsunybuf",
        cnkongstanford: "p=pivot-confucius-educator&l=cn&adid=cnkongstanford",
        cnkongsunysb: "p=pivot-confucius-educator&l=cn&adid=cnkongsunysb", 
        cnkongtamu: "p=pivot-confucius-educator&l=cn&adid=cnkongtamu",
        cnkongtroy: "p=pivot-confucius-educator&l=cn&adid=cnkongtroy", 
        cnkonguakron: "p=pivot-confucius-educator&l=cn&adid=cnkonguakron", 
        cnkonguaa: "p=pivot-confucius-educator&l=cn&adid=cnkonguaa",
        cnkongarizona: "p=pivot-confucius-educator&l=cn&adid=cnkongarizona",
        cnkongucla: "p=pivot-confucius-educator&l=cn&adid=cnkongucla", 
        cnkongucark: "p=pivot-confucius-educator&l=cn&adid=cnkongucark",
        cnkonguchicago: "p=pivot-confucius-educator&l=cn&adid=cnkonguchicago",  
        cnkongudel: "p=pivot-confucius-educator&l=cn&adid=cnkongudel", 
        cnkonguhmhawaii: "p=pivot-confucius-educator&l=cn&adid=cnkonguhmhawaii",
        cnkonguiowa: "p=pivot-confucius-educator&l=cn&adid=cnkonguiowa",
        cnkongku: "p=pivot-confucius-educator&l=cn&adid=cnkongku", 
        cnkonguom: "p=pivot-confucius-educator&l=cn&adid=cnkonguom",
        cnkongumassboston: "p=pivot-confucius-educator&l=cn&adid=cnkongumassboston",     
        cnkongmemphis: "p=pivot-confucius-educator&l=cn&adid=cnkongmemphis", 
        cnkongumich: "p=pivot-confucius-educator&l=cn&adid=cnkongumich",
        cnkongumn: "p=pivot-confucius-educator&l=cn&adid=cnkongumn",
        cnkongumt: "p=pivot-confucius-educator&l=cn&adid=cnkongumt", 
        cnkongunl: "p=pivot-confucius-educator&l=cn&adid=cnkongunl",
        cnkongunh: "p=pivot-confucius-educator&l=cn&adid=cnkongunh",  
        cnkongou: "p=pivot-confucius-educator&l=cn&adid=cnkongou", 
        cnkonguoregon: "p=pivot-confucius-educator&l=cn&adid=cnkonguoregon",
        cnkongpitt: "p=pivot-confucius-educator&l=cn&adid=cnkongpitt",
        cnkonguri: "p=pivot-confucius-educator&l=cn&adid=cnkonguri", 
        cnkongsc: "p=pivot-confucius-educator&l=cn&adid=cnkongsc",
        cnkongusf: "p=pivot-confucius-educator&l=cn&adid=cnkongusf", 
        cnkongutdallas: "p=pivot-confucius-educator&l=cn&adid=cnkongutdallas", 
        cnkongutsanantonio: "p=pivot-confucius-educator&l=cn&adid=cnkongutsanantonio",
        cnkongutoledo: "p=pivot-confucius-educator&l=cn&adid=cnkongutoledo",
        cnkongutah: "p=pivot-confucius-educator&l=cn&adid=cnkongutah", 
        cnkongwisc: "p=pivot-confucius-educator&l=cn&adid=cnkongwisc",
        cnkongval: "p=pivot-confucius-educator&l=cn&adid=cnkongval",  
        cnkongwayne: "p=pivot-confucius-educator&l=cn&adid=cnkongwayne", 
        cnkongwebster: "p=pivot-confucius-educator&l=cn&adid=cnkongwebster",
        cnkongwku: "p=pivot-confucius-educator&l=cn&adid=cnkongwku",
        cnkongwmu: "p=pivot-confucius-educator&l=cn&adid=cnkongwmu", 

        kongalfred: "p=pivot-confucius-educator&adid=kongalfred",
        kongasu: "p=pivot-confucius-educator&adid=kongasu", 
        kongbryant: "p=pivot-confucius-educator&adid=kongbryant",
        kongcsuohio: "p=pivot-confucius-educator&adid=kongcsuohio",
        kongccd: "p=pivot-confucius-educator&adid=kongccd", 
        kongchina: "p=pivot-confucius-educator&adid=kongchina",
        kongcolumbia: "p=pivot-confucius-educator&adid=kongcolumbia",  
        kongemory: "p=pivot-confucius-educator&adid=kongemory", 
        konguchicago: "p=pivot-confucius-educator&adid=konguchicago",     
        kongwsu: "p=pivot-confucius-educator&adid=kongwsu", 
        konggmu: "p=pivot-confucius-educator&adid=konggmu",
        konggsu: "p=pivot-confucius-educator&adid=konggsu", 
        kongkennesaw: "p=pivot-confucius-educator&adid=kongkennesaw", 
        konguky: "p=pivot-confucius-educator&adid=konguky",
        kongmdc: "p=pivot-confucius-educator&adid=kongmdc",
        kongmiami: "p=pivot-confucius-educator&adid=kongmiami", 
        kongmsu: "p=pivot-confucius-educator&adid=kongmsu",
        kongmtsu: "p=pivot-confucius-educator&adid=kongmtsu",  
        kongnmsu: "p=pivot-confucius-educator&adid=kongnmsu", 
        kongncsu: "p=pivot-confucius-educator&adid=kongncsu",
        kongpace: "p=pivot-confucius-educator&adid=kongpace",
        kongpsu: "p=pivot-confucius-educator&adid=kongpsu", 
        kongpfeiffer: "p=pivot-confucius-educator&adid=kongpfeiffer",
        kongpsu: "p=pivot-confucius-educator&adid=kongpsu",
        kongpresbyterian: "p=pivot-confucius-educator&adid=kongpresbyterian", 
        kongpurdue: "p=pivot-confucius-educator&adid=kongpurdue",
        kongrutgers: "p=pivot-confucius-educator&adid=kongrutgers",
        kongsdsu: "p=pivot-confucius-educator&adid=kongsdsu", 
        kongsfsu: "p=pivot-confucius-educator&adid=kongsfsu",
        kongsunyopt: "p=pivot-confucius-educator&adid=kongsunyopt",  
        kongsunybing: "p=pivot-confucius-educator&adid=kongsunybing", 
        kongsunybuf: "p=pivot-confucius-educator&adid=kongsunybuf",
        kongstanford: "p=pivot-confucius-educator&adid=kongstanford",
        kongsunysb: "p=pivot-confucius-educator&adid=kongsunysb", 
        kongtamu: "p=pivot-confucius-educator&adid=kongtamu",
        kongtroy: "p=pivot-confucius-educator&adid=kongtroy", 
        konguakron: "p=pivot-confucius-educator&adid=konguakron", 
        konguaa: "p=pivot-confucius-educator&adid=konguaa",
        kongarizona: "p=pivot-confucius-educator&adid=kongarizona",
        kongucla: "p=pivot-confucius-educator&adid=kongucla", 
        kongucark: "p=pivot-confucius-educator&adid=kongucark",
        konguchicago: "p=pivot-confucius-educator&adid=konguchicago",  
        kongudel: "p=pivot-confucius-educator&adid=kongudel", 
        konguhmhawaii: "p=pivot-confucius-educator&adid=konguhmhawaii",
        konguiowa: "p=pivot-confucius-educator&adid=konguiowa",
        kongku: "p=pivot-confucius-educator&adid=kongku", 
        konguom: "p=pivot-confucius-educator&adid=konguom",
        kongumassboston: "p=pivot-confucius-educator&adid=kongumassboston",     
        kongmemphis: "p=pivot-confucius-educator&adid=kongmemphis", 
        kongumich: "p=pivot-confucius-educator&adid=kongumich",
        kongumn: "p=pivot-confucius-educator&adid=kongumn",
        kongumt: "p=pivot-confucius-educator&adid=kongumt", 
        kongunl: "p=pivot-confucius-educator&adid=kongunl",
        kongunh: "p=pivot-confucius-educator&adid=kongunh",  
        kongou: "p=pivot-confucius-educator&adid=kongou", 
        konguoregon: "p=pivot-confucius-educator&adid=konguoregon",
        kongpitt: "p=pivot-confucius-educator&adid=kongpitt",
        konguri: "p=pivot-confucius-educator&adid=konguri", 
        kongsc: "p=pivot-confucius-educator&adid=kongsc",
        kongusf: "p=pivot-confucius-educator&adid=kongusf", 
        kongutdallas: "p=pivot-confucius-educator&adid=kongutdallas", 
        kongutsanantonio: "p=pivot-confucius-educator&adid=kongutsanantonio",
        kongutoledo: "p=pivot-confucius-educator&adid=kongutoledo",
        kongutah: "p=pivot-confucius-educator&adid=kongutah", 
        kongwisc: "p=pivot-confucius-educator&adid=kongwisc",
        kongval: "p=pivot-confucius-educator&adid=kongval",  
        kongwayne: "p=pivot-confucius-educator&adid=kongwayne", 
        kongwebster: "p=pivot-confucius-educator&adid=kongwebster",
        kongwku: "p=pivot-confucius-educator&adid=kongwku",
        kongwmu: "p=pivot-confucius-educator&adid=kongwmu",        
        
        xyf1: "l=cn&partner=xyf&p=pivot-travel-insurance&adid=xyf1",
        xyf2: "l=cn&partner=xyf&p=pivot-home&adid=xyf2",
        emuch: "l=cn&p=pivot-school-waiver&adid=emuch", 
        tnqq: "l=cn&p=pivot-school-waiver&adid=tnqq",        
        jhu: "partner=jhu&p=pivot-home&adid=sjhu",
        cnjhu: "l=cn&partner=jhu&p=pivot-home&adid=scnjhu",   
        gcnjhu: "l=cn&partner=jhu&p=pivot-international-student&adid=gcnjhu",
        gjhu: "partner=jhu&p=pivot-international-student&adid=gjhu",
        acnjhu: "l=cn&partner=jhu&p=pivot-international-student&adid=acnjhu",  
        ijhu: "partner=jhu&p=pivot-international-student",
        uop: "partner=uop&p=pivot-home&adid=suop",
        cnuop: "l=cn&partner=uop&p=pivot-home&adid=scnuop",   
        gcnuop: "l=cn&partner=uop&p=pivot-international-student&adid=gcnuop",
        guop: "partner=uop&p=pivot-international-student&adid=guop",
        acnuop: "l=cn&partner=uop&p=pivot-international-student&adid=acnuop",  
        iuop: "partner=uop&p=pivot-international-student",
        
        utmda: "partner=utmda&p=pivot-home&adid=sutmda",
        cnutmda: "l=cn&partner=utmda&p=pivot-home&adid=scnutmda",   
        gcnutmda: "l=cn&partner=utmda&p=pivot-international-student&adid=gcnutmda",
        gutmda: "partner=utmda&p=pivot-international-student&adid=gutmda",
        acnutmda: "l=cn&partner=utmda&p=pivot-international-student&adid=acnutmda",  
        iutmda: "partner=utmda&p=pivot-international-student",
        icnutmda: "l=cn&partner=utmda&p=pivot-international-student", 
        
        utsouthwestern: "partner=utsouthwestern&p=pivot-home&adid=sutsouthwestern",
        cnutsouthwestern: "l=cn&partner=utsouthwestern&p=pivot-home&adid=scnutsouthwestern",   
        gcnutsouthwestern: "l=cn&partner=utsouthwestern&p=pivot-international-student&adid=gcnutsouthwestern",
        gutsouthwestern: "partner=utsouthwestern&p=pivot-international-student&adid=gutsouthwestern",
        acnutsouthwestern: "l=cn&partner=utsouthwestern&p=pivot-international-student&adid=acnutsouthwestern",  
        iutsouthwestern: "partner=utsouthwestern&p=pivot-international-student",
        icnutsouthwestern: "l=cn&partner=utsouthwestern&p=pivot-international-student", 
        utsouthwesternexch: "l=cn&partner=utsouthwestern&p=exchange-form",
        
        westernu: "partner=westernu&p=pivot-home&adid=swesternu",
        cnwesternu: "l=cn&partner=westernu&p=pivot-home&adid=scnwesternu",   
        gcnwesternu: "l=cn&partner=westernu&p=pivot-international-studentandscholar&adid=gcnwesternu",
        gwesternu: "partner=westernu&p=pivot-international-studentandscholar&adid=gwesternu",
        acnwesternu: "l=cn&partner=westernu&p=pivot-international-studentandscholar&adid=acnwesternu",  
        iwesternu: "partner=westernu&p=pivot-international-studentandscholar",
        icnwesternu: "l=cn&partner=westernu&p=pivot-international-studentandscholar", 
        westernuexch: "l=cn&partner=westernu&p=exchange-form",        

        

        uth: "partner=uth&p=pivot-home&adid=suth",
        cnuth: "l=cn&partner=uth&p=pivot-home&adid=scnuth",   
        gcnuth: "l=cn&partner=uth&p=pivot-international-student&adid=gcnuth",
        guth: "partner=uth&p=pivot-international-student&adid=guth",
        acnuth: "l=cn&partner=uth&p=pivot-international-student&adid=acnuth",  
        iuth: "partner=uth&p=pivot-international-student",
        icnuth: "l=cn&partner=uth&p=pivot-international-student",         

        utep: "partner=utep&p=pivot-home&adid=sutep",
        cnutep: "l=cn&partner=utep&p=pivot-home&adid=scnutep",   
        gcnutep: "l=cn&partner=utep&p=pivot-international-student&adid=gcnutep",
        gutep: "partner=utep&p=pivot-international-student&adid=gutep",
        acnutep: "l=cn&partner=utep&p=pivot-international-student&adid=acnutep",  
        iutep: "partner=utep&p=pivot-international-student",
        icnutep: "l=cn&partner=utep&p=pivot-international-student",   

        utb: "partner=utb&p=pivot-home&adid=sutb",
        cnutb: "l=cn&partner=utb&p=pivot-home&adid=scnutb",   
        gcnutb: "l=cn&partner=utb&p=pivot-international-student&adid=gcnutb",
        gutb: "partner=utb&p=pivot-international-student&adid=gutb",
        acnutb: "l=cn&partner=utb&p=pivot-international-student&adid=acnutb",  
        iutb: "partner=utb&p=pivot-international-student",
        icnutb: "l=cn&partner=utb&p=pivot-international-student",
        
        
        uva: "partner=uva&p=pivot-home&adid=suva",
        cnuva: "l=cn&partner=uva&p=pivot-home&adid=scnuva",   
        gcnuva: "l=cn&partner=uva&p=pivot-international-student&adid=gcnuva",
        guva: "partner=uva&p=pivot-international-student&adid=guva",
        acnuva: "l=cn&partner=uva&p=pivot-international-student&adid=acnuva",  
        iuva: "partner=uva&p=pivot-international-student",
        icnuva: "l=cn&partner=uva&p=pivot-international-student",
        
        utah: "partner=utah&p=pivot-home&adid=sutah",
        cnutah: "l=cn&partner=utah&p=pivot-home&adid=scnutah",   
        gcnutah: "l=cn&partner=utah&p=pivot-international-student&adid=gcnutah",
        gutah: "partner=utah&p=pivot-international-student&adid=gutah",
        acnutah: "l=cn&partner=utah&p=pivot-international-student&adid=acnutah",  
        iutah: "partner=utah&p=pivot-international-student",        
        icnutah: "l=cn&partner=utah&p=pivot-international-student",
        
        uom: "partner=uom&p=pivot-home&adid=suom",
        cnuom: "l=cn&partner=uom&p=pivot-home&adid=scnuom",   
        gcnuom: "l=cn&partner=uom&p=pivot-international-studentandscholar&adid=gcnuom",
        guom: "partner=uom&p=pivot-international-studentandscholar&adid=guom",
        acnuom: "l=cn&partner=uom&p=pivot-international-studentandscholar&adid=acnuom",  
        iuom: "partner=uom&p=pivot-international-studentandscholar",
        upitt: "partner=upitt&p=pivot-home&adid=supitt",
        cnupitt: "l=cn&partner=upitt&p=pivot-home&adid=scnupitt",   
        gcnupitt: "l=cn&partner=upitt&p=pivot-international-studentandscholar&adid=gcnupitt",
        gupitt: "partner=upitt&p=pivot-international-studentandscholar&adid=gupitt",
        acnupitt: "l=cn&partner=upitt&p=pivot-international-studentandscholar&adid=acnupitt",  
        icnupitt: "l=cn&partner=upitt&p=pivot-international-studentandscholar", 
        pix: "l=cn&partner=upitt&p=pivot-international-studentandscholar&adid=pix",         
        iupitt: "partner=upitt&p=pivot-international-studentandscholar",       
        unc: "partner=unc&p=pivot-home&adid=sunc",
        cnunc: "l=cn&partner=unc&p=pivot-home&adid=scnunc",   
        gcnunc: "l=cn&partner=unc&p=pivot-international-studentandscholar&adid=gcnunc",
        gunc: "partner=unc&p=pivot-international-studentandscholar&adid=gunc",
        acnunc: "l=cn&partner=unc&p=pivot-international-studentandscholar&adid=acnunc",  
        iunc: "partner=unc&p=pivot-international-studentandscholar",              
        clemson: "partner=clemson&p=pivot-home&adid=sclemson",
        cnclemson: "l=cn&partner=clemson&p=pivot-home&adid=scnclemson",   
        gcnclemson: "l=cn&partner=clemson&p=pivot-international-student&adid=gcnclemson",
        gclemson: "partner=clemson&p=pivot-international-student&adid=gclemson",
        acnclemson: "l=cn&partner=clemson&p=pivot-international-student&adid=acnclemson", 
        iclemson: "partner=clemson&p=pivot-international-student",
        icnclemson: "l=cn&partner=clemson&p=pivot-international-student",
        
        cst: "partner=cst&p=pivot-home&adid=scst",
        cncst: "l=cn&partner=cst&p=pivot-home&adid=scncst",   
        gcncst: "l=cn&partner=cst&p=pivot-international-studentandscholar&adid=gcncst",
        gcst: "partner=cst&p=pivot-international-studentandscholar&adid=gcst",
        acncst: "l=cn&partner=cst&p=pivot-international-studentandscholar&adid=acncst", 
        icst: "partner=cst&p=pivot-international-studentandscholar",
        icncst: "l=cn&partner=cst&p=pivot-international-studentandscholar",
        
        clarku: "partner=clarku&p=pivot-home&adid=sclarku",
        cnclarku: "l=cn&partner=clarku&p=pivot-home&adid=scnclarku",   
        gcnclarku: "l=cn&partner=clarku&p=pivot-international-student&adid=gcnclarku",
        gclarku: "partner=clarku&p=pivot-international-student&adid=gclarku",
        acnclarku: "l=cn&partner=clarku&p=pivot-international-student&adid=acnclarku", 
        iclarku: "partner=clarku&p=pivot-international-student",
        icnclarku: "l=cn&partner=clarku&p=pivot-international-student",

        gru: "partner=gru&p=pivot-home&adid=sgru",
        cngru: "l=cn&partner=gru&p=pivot-home&adid=scngru",   
        gcngru: "l=cn&partner=gru&p=pivot-international-student&adid=gcngru",
        ggru: "partner=gru&p=pivot-international-student&adid=ggru",
        acngru: "l=cn&partner=gru&p=pivot-international-student&adid=acngru", 
        igru: "partner=gru&p=pivot-international-student",
        icngru: "l=cn&partner=gru&p=pivot-international-student",

        nyit: "partner=nyit&p=pivot-home&adid=snyit",
        cnnyit: "l=cn&partner=nyit&p=pivot-home&adid=scnnyit",   
        gcnnyit: "l=cn&partner=nyit&p=pivot-international-student&adid=gcnnyit",
        gnyit: "partner=nyit&p=pivot-international-student&adid=gnyit",
        acnnyit: "l=cn&partner=nyit&p=pivot-international-student&adid=acnnyit", 
        inyit: "partner=nyit&p=pivot-international-student",
        icnnyit: "l=cn&partner=nyit&p=pivot-international-student",

        utsa: "partner=utsa&p=pivot-home&adid=sutsa",
        cnutsa: "l=cn&partner=utsa&p=pivot-home&adid=scnutsa",   
        gcnutsa: "l=cn&partner=utsa&p=pivot-international-student&adid=gcnutsa",
        gutsa: "partner=utsa&p=pivot-international-student&adid=gutsa",
        acnutsa: "l=cn&partner=utsa&p=pivot-international-student&adid=acnutsa", 
        iutsa: "partner=utsa&p=pivot-international-student",
        icnutsa: "l=cn&partner=utsa&p=pivot-international-student",    
        
        uthscsa: "partner=uthscsa&p=pivot-home&adid=suthscsa",
        cnuthscsa: "l=cn&partner=uthscsa&p=pivot-home&adid=scnuthscsa",   
        gcnuthscsa: "l=cn&partner=uthscsa&p=pivot-international-studentandscholar&adid=gcnuthscsa",
        guthscsa: "partner=uthscsa&p=pivot-international-studentandscholar&adid=guthscsa",
        acnuthscsa: "l=cn&partner=uthscsa&p=pivot-international-studentandscholar&adid=acnuthscsa", 
        iuthscsa: "partner=uthscsa&p=pivot-international-studentandscholar",
        icnuthscsa: "l=cn&partner=uthscsa&p=pivot-international-studentandscholar",     

        utmb: "partner=utmb&p=pivot-home&adid=sutmb",
        cnutmb: "l=cn&partner=utmb&p=pivot-home&adid=scnutmb",   
        gcnutmb: "l=cn&partner=utmb&p=pivot-international-studentandscholar&adid=gcnutmb",
        gutmb: "partner=utmb&p=pivot-international-studentandscholar&adid=gutmb",
        acnutmb: "l=cn&partner=utmb&p=pivot-international-studentandscholar&adid=acnutmb", 
        iutmb: "partner=utmb&p=pivot-international-studentandscholar",
        icnutmb: "l=cn&partner=utmb&p=pivot-international-studentandscholar",    

        utpb: "partner=utpb&p=pivot-home&adid=sutpb",
        cnutpb: "l=cn&partner=utpb&p=pivot-home&adid=scnutpb",   
        gcnutpb: "l=cn&partner=utpb&p=pivot-international-studentandscholar&adid=gcnutpb",
        gutpb: "partner=utpb&p=pivot-international-studentandscholar&adid=gutpb",
        acnutpb: "l=cn&partner=utpb&p=pivot-international-studentandscholar&adid=acnutpb", 
        iutpb: "partner=utpb&p=pivot-international-studentandscholar",
        icnutpb: "l=cn&partner=utpb&p=pivot-international-studentandscholar",    

        utpa: "partner=utpa&p=pivot-home&adid=sutpa",
        cnutpa: "l=cn&partner=utpa&p=pivot-home&adid=scnutpa",   
        gcnutpa: "l=cn&partner=utpa&p=pivot-international-studentandscholar&adid=gcnutpa",
        gutpa: "partner=utpa&p=pivot-international-studentandscholar&adid=gutpa",
        acnutpa: "l=cn&partner=utpa&p=pivot-international-studentandscholar&adid=acnutpa", 
        iutpa: "partner=utpa&p=pivot-international-studentandscholar",
        icnutpa: "l=cn&partner=utpa&p=pivot-international-studentandscholar",            

        uttyler: "partner=uttyler&p=pivot-home&adid=suttyler",
        cnuttyler: "l=cn&partner=uttyler&p=pivot-home&adid=scnuttyler",   
        gcnuttyler: "l=cn&partner=uttyler&p=pivot-international-studentandscholar&adid=gcnuttyler",
        guttyler: "partner=uttyler&p=pivot-international-studentandscholar&adid=guttyler",
        acnuttyler: "l=cn&partner=uttyler&p=pivot-international-studentandscholar&adid=acnuttyler", 
        iuttyler: "partner=uttyler&p=pivot-international-studentandscholar",
        icnuttyler: "l=cn&partner=uttyler&p=pivot-international-studentandscholar",         
        
        
        vt: "partner=vt&p=pivot-home&adid=svt",
        cnvt: "l=cn&partner=vt&p=pivot-home&adid=scnvt",   
        gcnvt: "l=cn&partner=vt&p=pivot-international-student&adid=gcnvt",
        gvt: "partner=vt&p=pivot-international-student&adid=gvt",
        acnvt: "l=cn&partner=vt&p=pivot-international-student&adid=acnvt", 
        ivt: "partner=vt&p=pivot-international-student",
        yale: "partner=yale&p=pivot-home&adid=syale",
        cnyale: "l=cn&partner=yale&p=pivot-home&adid=scnyale",   
        gcnyale: "l=cn&partner=yale&p=pivot-international-studentandscholar&adid=gcnyale",
        gyale: "partner=yale&p=pivot-international-studentandscholar&adid=gyale",
        acnyale: "l=cn&partner=yale&p=pivot-international-studentandscholar&adid=acnyale", 
        iyale: "partner=yale&p=pivot-international-studentandscholar",
        mit: "partner=mit&p=pivot-home&adid=smit",
        cnmit: "l=cn&partner=mit&p=pivot-home&adid=scnmit",   
        gcnmit: "l=cn&partner=mit&p=pivot-international-student&adid=gcnmit",
        gmit: "partner=mit&p=pivot-international-student&adid=gmit",
        acnmit: "l=cn&partner=mit&p=pivot-international-student&adid=acnmit", 
        imit: "partner=mit&p=pivot-international-student",
        icnmit: "l=cn&partner=mit&p=pivot-international-student",        
        princeton: "partner=princeton&p=pivot-home&adid=sprinceton",
        cnprinceton: "l=cn&partner=princeton&p=pivot-home&adid=scnprinceton",   
        gcnprinceton: "l=cn&partner=princeton&p=pivot-international-student&adid=gcnprinceton",
        gprinceton: "partner=princeton&p=pivot-international-student&adid=gprinceton",
        acnprinceton: "l=cn&partner=princeton&p=pivot-international-student&adid=acnprinceton", 
        iprinceton: "partner=princeton&p=pivot-international-student",
        icnprinceton: "l=cn&partner=princeton&p=pivot-international-student", 
        ioregonstate: "partner=oregonstate&p=pivot-international-student",
        icnoregonstate: "l=cn&partner=oregonstate&p=pivot-international-student", 
        
        tufts: "partner=tufts&p=pivot-home&adid=stufts",
        cntufts: "l=cn&partner=tufts&p=pivot-home&adid=scntufts",   
        gcntufts: "l=cn&partner=tufts&p=pivot-international-student&adid=gcntufts",
        gtufts: "partner=tufts&p=pivot-international-student&adid=gtufts",
        acntufts: "l=cn&partner=tufts&p=pivot-international-student&adid=acntufts", 
        itufts: "partner=tufts&p=pivot-international-student",
        icntufts: "l=cn&partner=tufts&p=pivot-international-student",        
        cmu: "partner=cmu&p=pivot-home&adid=scmu",
        cncmu: "l=cn&partner=cmu&p=pivot-home&adid=scncmu",   
        gcncmu: "l=cn&partner=cmu&p=pivot-international-student&adid=gcncmu",
        gcmu: "partner=cmu&p=pivot-international-student&adid=gcmu",
        acncmu: "l=cn&partner=cmu&p=pivot-international-student&adid=acncmu", 
        icmu: "partner=cmu&p=pivot-international-student",
        icncmu: "l=cn&partner=cmu&p=pivot-international-student",        
        brandeis: "partner=brandeis&p=pivot-home&adid=sbrandeis",
        cnbrandeis: "l=cn&partner=brandeis&p=pivot-home&adid=scnbrandeis",   
        gcnbrandeis: "l=cn&partner=brandeis&p=pivot-international-student&adid=gcnbrandeis",
        gbrandeis: "partner=brandeis&p=pivot-international-student&adid=gbrandeis",
        acnbrandeis: "l=cn&partner=brandeis&p=pivot-international-student&adid=acnbrandeis", 
        ibrandeis: "partner=brandeis&p=pivot-international-student",
        icnbrandeis: "l=cn&partner=brandeis&p=pivot-international-student",        
        wustl: "partner=wustl&p=pivot-home&adid=swustl",
        cnwustl: "l=cn&partner=wustl&p=pivot-home&adid=scnwustl",   
        gcnwustl: "l=cn&partner=wustl&p=pivot-international-student&adid=gcnwustl",
        gwustl: "partner=wustl&p=pivot-international-student&adid=gwustl",
        acnwustl: "l=cn&partner=wustl&p=pivot-international-student&adid=acnwustl", 
        iwustl: "partner=wustl&p=pivot-international-student",
        icnwustl: "l=cn&partner=wustl&p=pivot-international-student",  

        wm: "partner=wm&p=pivot-home&adid=swm",
        cnwm: "l=cn&partner=wm&p=pivot-home&adid=scnwm",   
        gcnwm: "l=cn&partner=wm&p=pivot-international-student&adid=gcnwm",
        gwm: "partner=wm&p=pivot-international-student&adid=gwm",
        acnwm: "l=cn&partner=wm&p=pivot-international-student&adid=acnwm", 
        iwm: "partner=wm&p=pivot-international-student",
        icnwm: "l=cn&partner=wm&p=pivot-international-student",          

        injit: "partner=njit&p=pivot-international-student", 
        icnnjit: "l=cn&partner=njit&p=pivot-international-student",       
        
        ucsf: "partner=ucsf&p=pivot-home&adid=sucsf",
        cnucsf: "l=cn&partner=ucsf&p=pivot-home&adid=scnucsf",   
        gcnucsf: "l=cn&partner=ucsf&p=pivot-international-student&adid=gcnucsf",
        gucsf: "partner=ucsf&p=pivot-international-student&adid=gucsf",
        acnucsf: "l=cn&partner=ucsf&p=pivot-international-student&adid=acnucsf", 
        iucsf: "partner=ucsf&p=pivot-international-student",
        isucsf: "partner=ucsf&p=pivot-international-student&adid=sucsf",        
        icnsucsf: "l=cn&partner=ucsf&p=pivot-international-student&adid=cnsucsf", 
        icnucsf: "l=cn&partner=ucsf&p=pivot-international-student",        
        uci: "partner=uci&p=pivot-home&adid=suci",
        cnuci: "l=cn&partner=uci&p=pivot-home&adid=scnuci",   
        gcnuci: "l=cn&partner=uci&p=pivot-international-student&adid=gcnuci",
        guci: "partner=uci&p=pivot-international-student&adid=guci",
        acnuci: "l=cn&partner=uci&p=pivot-international-student&adid=acnuci", 
        iuci: "partner=uci&p=pivot-international-student", 
        acnucifb: "l=cn&partner=uci&p=pivot-international-student&adid=acnucifb",
        acnucirr: "l=cn&partner=uci&p=pivot-international-student&adid=acnucirr",
        acnuciwb: "l=cn&partner=uci&p=pivot-international-student&adid=acnuciwb",        
        ucr: "partner=ucr&p=pivot-home&adid=sucr",
        cnucr: "l=cn&partner=ucr&p=pivot-home&adid=scnucr",   
        gcnucr: "l=cn&partner=ucr&p=pivot-international-studentandscholar&adid=gcnucr",
        gucr: "partner=ucr&p=pivot-international-studentandscholar&adid=gucr",
        acnucr: "l=cn&partner=ucr&p=pivot-international-studentandscholar&adid=acnucr", 
        iucr: "partner=ucr&p=pivot-international-studentandscholar",
        ucsb: "partner=ucsb&p=pivot-home&adid=sucsb",
        cnucsb: "l=cn&partner=ucsb&p=pivot-home&adid=scnucsb",   
        gcnucsb: "l=cn&partner=ucsb&p=pivot-international-student&adid=gcnucsb",
        gucsb: "partner=ucsb&p=pivot-international-student&adid=gucsb",
        acnucsb: "l=cn&partner=ucsb&p=pivot-international-student&adid=acnucsb", 
        iucsb: "partner=ucsb&p=pivot-international-student",
        ucsc: "partner=ucsc&p=pivot-home&adid=sucsc",
        cnucsc: "l=cn&partner=ucsc&p=pivot-home&adid=scnucsc",   
        gcnucsc: "l=cn&partner=ucsc&p=pivot-international-student&adid=gcnucsc",
        gucsc: "partner=ucsc&p=pivot-international-student&adid=gucsc",
        acnucsc: "l=cn&partner=ucsc&p=pivot-international-student&adid=acnucsc", 
        iucsc: "partner=ucsc&p=pivot-international-student",        
        uic: "partner=uic&p=pivot-home&adid=suic",
        cnuic: "l=cn&partner=uic&p=pivot-home&adid=scnuic",   
        gcnuic: "l=cn&partner=uic&p=pivot-international-student&adid=gcnuic",
        guic: "partner=uic&p=pivot-international-student&adid=guic",
        acnuic: "l=cn&partner=uic&p=pivot-international-student&adid=acnuic", 
        iuic: "partner=uic&p=pivot-international-student",              
        uga: "partner=uga&p=pivot-home&adid=suga",
        cnuga: "l=cn&partner=uga&p=pivot-home&adid=scnuga",   
        gcnuga: "l=cn&partner=uga&p=pivot-international-student&adid=gcnuga",
        guga: "partner=uga&p=pivot-international-student&adid=guga",
        acnuga: "l=cn&partner=uga&p=pivot-international-student&adid=acnuga", 
        iuga: "partner=uga&p=pivot-international-student",
        
        udel: "partner=udel&p=pivot-home&adid=sudel",
        cnudel: "l=cn&partner=udel&p=pivot-home&adid=scnudel",   
        gcnudel: "l=cn&partner=udel&p=pivot-international-student&adid=gcnudel",
        gudel: "partner=udel&p=pivot-international-student&adid=gudel",
        acnudel: "l=cn&partner=udel&p=pivot-international-student&adid=acnudel", 
        iudel: "partner=udel&p=pivot-international-student", 
        icnudel: "l=cn&partner=udel&p=pivot-international-student",   

        iudayton: "partner=udayton&p=pivot-international-student", 
        icnudayton: "l=cn&partner=udayton&p=pivot-international-student",        
        
        washington: "partner=washington&p=pivot-home&adid=swashington",
        cnwashington: "l=cn&partner=washington&p=pivot-home&adid=scnwashington",   
        gcnwashington: "l=cn&partner=washington&p=pivot-international-student&adid=gcnwashington",
        gwashington: "partner=washington&p=pivot-international-student&adid=gwashington",
        acnwashington: "l=cn&partner=washington&p=pivot-international-student&adid=acnwashington", 
        iwashington: "partner=washington&p=pivot-international-student",
        vanderbilt: "partner=vanderbilt&p=pivot-home&adid=svanderbilt",
        cnvanderbilt: "l=cn&partner=vanderbilt&p=pivot-home&adid=scnvanderbilt",   
        gcnvanderbilt: "l=cn&partner=vanderbilt&p=pivot-international-student&adid=gcnvanderbilt",
        gvanderbilt: "partner=vanderbilt&p=pivot-international-student&adid=gvanderbilt",
        acnvanderbilt: "l=cn&partner=vanderbilt&p=pivot-international-student&adid=acnvanderbilt", 
        ivanderbilt: "partner=vanderbilt&p=pivot-international-student",
        miami: "partner=miami&p=pivot-home&adid=smiami",
        cnmiami: "l=cn&partner=miami&p=pivot-home&adid=scnmiami",   
        gcnmiami: "l=cn&partner=miami&p=pivot-international-student&adid=gcnmiami",
        gmiami: "partner=miami&p=pivot-international-student&adid=gmiami",
        acnmiami: "l=cn&partner=miami&p=pivot-international-student&adid=acnmiami", 
        imiami: "partner=miami&p=pivot-international-student",
        icnmiami: "l=cn&partner=miami&p=pivot-international-student", 

        unl: "partner=unl&p=pivot-home&adid=sunl",
        cnunl: "l=cn&partner=unl&p=pivot-home&adid=scnunl",   
        gcnunl: "l=cn&partner=unl&p=pivot-international-student&adid=gcnunl",
        gunl: "partner=unl&p=pivot-international-student&adid=gunl",
        acnunl: "l=cn&partner=unl&p=pivot-international-student&adid=acnunl", 
        iunl: "partner=unl&p=pivot-international-student",
        icnunl: "l=cn&partner=unl&p=pivot-international-student", 
        unlexch: "l=cn&partner=unl&p=exchange-form", 

        umass: "partner=umass&p=pivot-home&adid=sumass",
        cnumass: "l=cn&partner=umass&p=pivot-home&adid=scnumass",   
        gcnumass: "l=cn&partner=umass&p=pivot-international-student&adid=gcnumass",
        gumass: "partner=umass&p=pivot-international-student&adid=gumass",
        acnumass: "l=cn&partner=umass&p=pivot-international-student&adid=acnumass", 
        iumass: "partner=umass&p=pivot-international-student",
        icnumass: "l=cn&partner=umass&p=pivot-international-student", 
        umassexch: "l=cn&partner=umass&p=exchange-form",
        
        umassl: "partner=umassl&p=pivot-home&adid=sumassl",
        cnumassl: "l=cn&partner=umassl&p=pivot-home&adid=scnumassl",   
        gcnumassl: "l=cn&partner=umassl&p=pivot-international-student&adid=gcnumassl",
        gumassl: "partner=umassl&p=pivot-international-student&adid=gumassl",
        acnumassl: "l=cn&partner=umassl&p=pivot-international-student&adid=acnumassl", 
        iumassl: "partner=umassl&p=pivot-international-student",
        icnumassl: "l=cn&partner=umassl&p=pivot-international-student", 
        umassexchl: "l=cn&partner=umassl&p=exchange-form",

        umassd: "partner=umassd&p=pivot-home&adid=sumassd",
        cnumassd: "l=cn&partner=umassd&p=pivot-home&adid=scnumassd",   
        gcnumassd: "l=cn&partner=umassd&p=pivot-international-student&adid=gcnumassd",
        gumassd: "partner=umassd&p=pivot-international-student&adid=gumassd",
        acnumassd: "l=cn&partner=umassd&p=pivot-international-student&adid=acnumassd", 
        iumassd: "partner=umassd&p=pivot-international-student",
        icnumassd: "l=cn&partner=umassd&p=pivot-international-student", 
        umassexchd: "l=cn&partner=umassd&p=exchange-form",        
        

        unomaha: "partner=unomaha&p=pivot-home&adid=sunomaha",
        cnunomaha: "l=cn&partner=unomaha&p=pivot-home&adid=scnunomaha",   
        gcnunomaha: "l=cn&partner=unomaha&p=pivot-international-student&adid=gcnunomaha",
        gunomaha: "partner=unomaha&p=pivot-international-student&adid=gunomaha",
        acnunomaha: "l=cn&partner=unomaha&p=pivot-international-student&adid=acnunomaha", 
        iunomaha: "partner=unomaha&p=pivot-international-student",
        icnunomaha: "l=cn&partner=unomaha&p=pivot-international-student", 
        unomahaexch: "l=cn&partner=unomaha&p=exchange-form", 

        iunr: "partner=unr&p=pivot-international-student",
        icnunr: "l=cn&partner=unr&p=pivot-international-student",        

        oakland: "partner=oakland&p=pivot-home&adid=soakland",
        cnoakland: "l=cn&partner=oakland&p=pivot-home&adid=scnoakland",   
        gcnoakland: "l=cn&partner=oakland&p=pivot-international-student&adid=gcnoakland",
        goakland: "partner=oakland&p=pivot-international-student&adid=goakland",
        acnoakland: "l=cn&partner=oakland&p=pivot-international-student&adid=acnoakland", 
        ioakland: "partner=oakland&p=pivot-international-student",
        icnoakland: "l=cn&partner=oakland&p=pivot-international-student",  

        iohio: "partner=ohio&p=pivot-international-student",
        icnohio: "l=cn&partner=ohio&p=pivot-international-student",

 
        inova: "partner=nova&p=pivot-international-student",
        icnnova: "l=cn&partner=nova&p=pivot-international-student",         
        iuidaho: "partner=uidaho&p=pivot-international-student",
        icnuidaho: "l=cn&partner=uidaho&p=pivot-international-student",        
        irice: "partner=rice&p=pivot-international-student",
        icnrice: "l=cn&partner=rice&p=pivot-international-student",        
        
        
        
        
        fsu: "partner=fsu&p=pivot-home&adid=sfsu",
        cnfsu: "l=cn&partner=fsu&p=pivot-home&adid=scnfsu",   
        gcnfsu: "l=cn&partner=fsu&p=pivot-international-student&adid=gcnfsu",
        gfsu: "partner=fsu&p=pivot-international-student&adid=gfsu",
        acnfsu: "l=cn&partner=fsu&p=pivot-international-student&adid=acnfsu", 
        ifsu: "partner=fsu&p=pivot-international-student",
        icnfsu: "l=cn&partner=fsu&p=pivot-international-student",        
        fsuexch: "l=cn&partner=fsu&p=exchange-form",  

        fiu: "partner=fiu&p=pivot-home&adid=sfiu",
        cnfiu: "l=cn&partner=fiu&p=pivot-home&adid=scnfiu",   
        gcnfiu: "l=cn&partner=fiu&p=pivot-international-student&adid=gcnfiu",
        gfiu: "partner=fiu&p=pivot-international-student&adid=gfiu",
        acnfiu: "l=cn&partner=fiu&p=pivot-international-student&adid=acnfiu", 
        ifiu: "partner=fiu&p=pivot-international-student",
        icnfiu: "l=cn&partner=fiu&p=pivot-international-student",        
        fiuexch: "l=cn&partner=fiu&p=exchange-form", 

        fau: "partner=fau&p=pivot-home&adid=sfau",
        cnfau: "l=cn&partner=fau&p=pivot-home&adid=scnfau",   
        gcnfau: "l=cn&partner=fau&p=pivot-international-student&adid=gcnfau",
        gfau: "partner=fau&p=pivot-international-student&adid=gfau",
        acnfau: "l=cn&partner=fau&p=pivot-international-student&adid=acnfau", 
        ifau: "partner=fau&p=pivot-international-student",
        icnfau: "l=cn&partner=fau&p=pivot-international-student",        
       
        
        lsu: "partner=lsu&p=pivot-home&adid=slsu",
        cnlsu: "l=cn&partner=lsu&p=pivot-home&adid=scnlsu",   
        gcnlsu: "l=cn&partner=lsu&p=pivot-international-student&adid=gcnlsu",
        glsu: "partner=lsu&p=pivot-international-student&adid=glsu",
        acnlsu: "l=cn&partner=lsu&p=pivot-international-student&adid=acnlsu", 
        ilsu: "partner=lsu&p=pivot-international-student",        
        brown: "partner=brown&p=pivot-home&adid=sbrown",
        cnbrown: "l=cn&partner=brown&p=pivot-home&adid=scnbrown",   
        gcnbrown: "l=cn&partner=brown&p=pivot-international-student&adid=gcnbrown",
        gbrown: "partner=brown&p=pivot-international-student&adid=gbrown",
        acnbrown: "l=cn&partner=brown&p=pivot-international-student&adid=acnbrown", 
        ibrown: "partner=brown&p=pivot-international-student",
        
        isyr: "partner=syr&p=pivot-international-student",
        icnsyr: "l=cn&partner=syr&p=pivot-international-student",        
        
        caltech: "partner=caltech&p=pivot-home&adid=scaltech",
        cncaltech: "l=cn&partner=caltech&p=pivot-home&adid=scncaltech",   
        gcncaltech: "l=cn&partner=caltech&p=pivot-international-student&adid=gcncaltech",
        gcaltech: "partner=caltech&p=pivot-international-student&adid=gcaltech",
        acncaltech: "l=cn&partner=caltech&p=pivot-international-student&adid=acncaltech", 
        icaltech: "partner=caltech&p=pivot-international-student",
        icncaltech: "l=cn&partner=caltech&p=pivot-international-student", 

        csulb: "partner=csulb&p=pivot-home&adid=scsulb",
        cncsulb: "l=cn&partner=csulb&p=pivot-home&adid=scncsulb",   
        gcncsulb: "l=cn&partner=csulb&p=pivot-international-student&adid=gcncsulb",
        gcsulb: "partner=csulb&p=pivot-international-student&adid=gcsulb",
        acncsulb: "l=cn&partner=csulb&p=pivot-international-student&adid=acncsulb", 
        icsulb: "partner=csulb&p=pivot-international-student",
        icncsulb: "l=cn&partner=csulb&p=pivot-international-student",
        
        uri: "partner=uri&p=pivot-home&adid=suri",
        cnuri: "l=cn&partner=uri&p=pivot-home&adid=scnuri",   
        gcnuri: "l=cn&partner=uri&p=pivot-international-student&adid=gcnuri",
        guri: "partner=uri&p=pivot-international-student&adid=guri",
        acnuri: "l=cn&partner=uri&p=pivot-international-student&adid=acnuri", 
        iuri: "partner=uri&p=pivot-international-student",
        
        irochester: "partner=rochester&p=pivot-international-student", 
        icnrochester: "l=cn&partner=rochester&p=pivot-international-student", 

        iiit: "partner=iit&p=pivot-international-student", 
        icniit: "l=cn&partner=iit&p=pivot-international-student",        
        
        wsu: "partner=wsu&p=pivot-home&adid=swsu",
        cnwsu: "l=cn&partner=wsu&p=pivot-home&adid=scnwsu",   
        gcnwsu: "l=cn&partner=wsu&p=pivot-international-student&adid=gcnwsu",
        gwsu: "partner=wsu&p=pivot-international-student&adid=gwsu",
        acnwsu: "l=cn&partner=wsu&p=pivot-international-student&adid=acnwsu", 
        iwsu: "partner=wsu&p=pivot-international-student",
        csuohio: "partner=csuohio&p=pivot-home&adid=scsuohio",
        cncsuohio: "l=cn&partner=csuohio&p=pivot-home&adid=scncsuohio",   
        gcncsuohio: "l=cn&partner=csuohio&p=pivot-international-student&adid=gcncsuohio",
        gcsuohio: "partner=csuohio&p=pivot-international-student&adid=gcsuohio",
        acncsuohio: "l=cn&partner=csuohio&p=pivot-international-student&adid=acncsuohio", 
        icsuohio: "partner=csuohio&p=pivot-international-student",
        icncsuohio: "l=cn&partner=csuohio&p=pivot-international-student",        
        gwu: "partner=gwu&p=pivot-home&adid=sgwu",
        cngwu: "l=cn&partner=gwu&p=pivot-home&adid=scngwu",   
        gcngwu: "l=cn&partner=gwu&p=pivot-international-student&adid=gcngwu",
        ggwu: "partner=gwu&p=pivot-international-student&adid=ggwu",
        acngwu: "l=cn&partner=gwu&p=pivot-international-student&adid=acngwu", 
        igwu: "partner=gwu&p=pivot-international-student",
        icngwu: "partner=gwu&p=pivot-international-student&l=cn",        
        iastate: "partner=iastate&p=pivot-home&adid=siastate",
        cniastate: "l=cn&partner=iastate&p=pivot-home&adid=scniastate",   
        gcniastate: "l=cn&partner=iastate&p=pivot-international-student&adid=gcniastate",
        giastate: "partner=iastate&p=pivot-international-student&adid=giastate",
        acniastate: "l=cn&partner=iastate&p=pivot-international-student&adid=acniastate", 
        iiastate: "partner=iastate&p=pivot-international-student",
        georgetown: "partner=georgetown&p=pivot-home&adid=sgeorgetown",
        cngeorgetown: "l=cn&partner=georgetown&p=pivot-home&adid=scngeorgetown",   
        gcngeorgetown: "l=cn&partner=georgetown&p=pivot-international-student&adid=gcngeorgetown",
        ggeorgetown: "partner=georgetown&p=pivot-international-student&adid=ggeorgetown",
        acngeorgetown: "l=cn&partner=georgetown&p=pivot-international-student&adid=acngeorgetown", 
        igeorgetown: "partner=georgetown&p=pivot-international-student", 
        nd: "partner=nd&p=pivot-home&adid=snd",
        cnnd: "l=cn&partner=nd&p=pivot-home&adid=scnnd",   
        gcnnd: "l=cn&partner=nd&p=pivot-international-student&adid=gcnnd",
        gnd: "partner=nd&p=pivot-international-student&adid=gnd",
        acnnd: "l=cn&partner=nd&p=pivot-international-student&adid=acnnd", 
        ind: "partner=nd&p=pivot-international-student",
        icnnd: "l=cn&partner=nd&p=pivot-international-student",                
        utoledo: "partner=utoledo&p=pivot-home&adid=sutoledo",
        cnutoledo: "l=cn&partner=utoledo&p=pivot-home&adid=scnutoledo",   
        gcnutoledo: "l=cn&partner=utoledo&p=pivot-international-student&adid=gcnutoledo",
        gutoledo: "partner=utoledo&p=pivot-international-student&adid=gutoledo",
        acnutoledo: "l=cn&partner=utoledo&p=pivot-international-student&adid=acnutoledo", 
        iutoledo: "partner=utoledo&p=pivot-international-student",
        icnutoledo: "l=cn&partner=utoledo&p=pivot-international-student",  
        ucincinnati: "partner=ucincinnati&p=pivot-home&adid=sucincinnati",
        cnucincinnati: "l=cn&partner=ucincinnati&p=pivot-home&adid=scnucincinnati",   
        gcnucincinnati: "l=cn&partner=ucincinnati&p=pivot-international-student&adid=gcnucincinnati",
        gucincinnati: "partner=ucincinnati&p=pivot-international-student&adid=gucincinnati",
        acnucincinnati: "l=cn&partner=ucincinnati&p=pivot-international-student&adid=acnucincinnati", 
        iucincinnati: "partner=ucincinnati&p=pivot-international-student",
        icnucincinnati: "l=cn&partner=ucincinnati&p=pivot-international-student",    

        umb: "partner=umb&p=pivot-home&adid=sumb",
        cnumb: "l=cn&partner=umb&p=pivot-home&adid=scnumb",   
        gcnumb: "l=cn&partner=umb&p=pivot-international-student&adid=gcnumb",
        gumb: "partner=umb&p=pivot-international-student&adid=gumb",
        acnumb: "l=cn&partner=umb&p=pivot-international-student&adid=acnumb", 
        iumb: "partner=umb&p=pivot-international-student",
        icnumb: "l=cn&partner=umb&p=pivot-international-student", 


        
        usf: "partner=usf&p=pivot-home&adid=susf",
        cnusf: "l=cn&partner=usf&p=pivot-home&adid=scnusf",   
        gcnusf: "l=cn&partner=usf&p=pivot-international-student&adid=gcnusf",
        gusf: "partner=usf&p=pivot-international-student&adid=gusf",
        acnusf: "l=cn&partner=usf&p=pivot-international-student&adid=acnusf", 
        iusf: "partner=usf&p=pivot-international-student",
        icnusf: "l=cn&partner=usf&p=pivot-international-student", 
        
        ifgcu: "partner=fgcu&p=pivot-international-student",
        icnfgcu: "l=cn&partner=fgcu&p=pivot-international-student",         
        
        utk: "partner=utk&p=pivot-home&adid=sutk",
        cnutk: "l=cn&partner=utk&p=pivot-home&adid=scnutk",   
        gcnutk: "l=cn&partner=utk&p=pivot-international-student&adid=gcnutk",
        gutk: "partner=utk&p=pivot-international-student&adid=gutk",
        acnutk: "l=cn&partner=utk&p=pivot-international-student&adid=acnutk", 
        iutk: "partner=utk&p=pivot-international-student",
        icnutk: "l=cn&partner=utk&p=pivot-international-student",         



        
        dartmouth: "partner=dartmouth&p=pivot-home&adid=sdartmouth",
        cndartmouth: "l=cn&partner=dartmouth&p=pivot-home&adid=scndartmouth",   
        gcndartmouth: "l=cn&partner=dartmouth&p=pivot-international-student&adid=gcndartmouth",
        gdartmouth: "partner=dartmouth&p=pivot-international-student&adid=gdartmouth",
        acndartmouth: "l=cn&partner=dartmouth&p=pivot-international-student&adid=acndartmouth", 
        idartmouth: "partner=dartmouth&p=pivot-international-student",
        icndartmouth: "l=cn&partner=dartmouth&p=pivot-international-student",  
        vcu: "partner=vcu&p=pivot-home&adid=svcu",
        cnvcu: "l=cn&partner=vcu&p=pivot-home&adid=scnvcu",   
        gcnvcu: "l=cn&partner=vcu&p=pivot-international-student&adid=gcnvcu",
        gvcu: "partner=vcu&p=pivot-international-student&adid=gvcu",
        acnvcu: "l=cn&partner=vcu&p=pivot-international-student&adid=acnvcu", 
        ivcu: "partner=vcu&p=pivot-international-student",
        icnvcu: "l=cn&partner=vcu&p=pivot-international-student",
        murraystate: "partner=murraystate&p=pivot-home&adid=smurraystate",
        cnmurraystate: "l=cn&partner=murraystate&p=pivot-home&adid=scnmurraystate",   
        gcnmurraystate: "l=cn&partner=murraystate&p=pivot-international-studentandscholar&adid=gcnmurraystate",
        gmurraystate: "partner=murraystate&p=pivot-international-studentandscholar&adid=gmurraystate",
        acnmurraystate: "l=cn&partner=murraystate&p=pivot-international-studentandscholar&adid=acnmurraystate", 
        imurraystate: "partner=murraystate&p=pivot-international-studentandscholar",
        icnmurraystate: "l=cn&partner=murraystate&p=pivot-international-studentandscholar",        

        hawaii: "partner=hawaii&p=pivot-home&adid=shawaii",
        cnhawaii: "l=cn&partner=hawaii&p=pivot-home&adid=scnhawaii",   
        gcnhawaii: "l=cn&partner=hawaii&p=pivot-international-student&adid=gcnhawaii",
        ghawaii: "partner=hawaii&p=pivot-international-student&adid=ghawaii",
        acnhawaii: "l=cn&partner=hawaii&p=pivot-international-student&adid=acnhawaii", 
        ihawaii: "partner=hawaii&p=pivot-international-student",
        icnhawaii: "l=cn&partner=hawaii&p=pivot-international-student",
        
        kent: "partner=kent&p=pivot-home&adid=skent",
        cnkent: "l=cn&partner=kent&p=pivot-home&adid=scnkent",   
        gcnkent: "l=cn&partner=kent&p=pivot-international-studentandscholar&adid=gcnkent",
        gkent: "partner=kent&p=pivot-international-studentandscholar&adid=gkent",
        acnkent: "l=cn&partner=kent&p=pivot-international-studentandscholar&adid=acnkent", 
        ikent: "partner=kent&p=pivot-international-studentandscholar",
        icnkent: "l=cn&partner=kent&p=pivot-international-studentandscholar",
        
        ishawnee: "partner=shawnee&p=pivot-international-studentandscholar",
        icnshawnee: "l=cn&partner=shawnee&p=pivot-international-studentandscholar",
        imorgan: "partner=morgan&p=pivot-international-studentandscholar",
        icnmorgan: "l=cn&partner=morgan&p=pivot-international-studentandscholar",  
        
        ilehigh: "partner=lehigh&p=pivot-international-studentandscholar",
        icnlehigh: "l=cn&partner=lehigh&p=pivot-international-studentandscholar",
        ialfred: "partner=alfred&p=pivot-international-studentandscholar",
        icnalfred: "l=cn&partner=alfred&p=pivot-international-studentandscholar",   
        iucmerced: "partner=ucmerced&p=pivot-international-student",
        icnucmerced: "l=cn&partner=ucmerced&p=pivot-international-student", 
        inih: "partner=nih&p=pivot-international-student",
        icnnih: "l=cn&partner=nih&p=pivot-international-student",       
        
        depaul: "partner=depaul&p=pivot-home&adid=sdepaul",
        cndepaul: "l=cn&partner=depaul&p=pivot-home&adid=scndepaul",   
        gcndepaul: "l=cn&partner=depaul&p=pivot-international-studentandscholar&adid=gcndepaul",
        gdepaul: "partner=depaul&p=pivot-international-studentandscholar&adid=gdepaul",
        acndepaul: "l=cn&partner=depaul&p=pivot-international-studentandscholar&adid=acndepaul", 
        idepaul: "partner=depaul&p=pivot-international-studentandscholar",
        icndepaul: "l=cn&partner=depaul&p=pivot-international-studentandscholar",        

        uakron: "partner=uakron&p=pivot-home&adid=suakron",
        cnuakron: "l=cn&partner=uakron&p=pivot-home&adid=scnuakron",   
        gcnuakron: "l=cn&partner=uakron&p=pivot-international-student&adid=gcnuakron",
        guakron: "partner=uakron&p=pivot-international-student&adid=guakron",
        acnuakron: "l=cn&partner=uakron&p=pivot-international-student&adid=acnuakron", 
        iuakron: "partner=uakron&p=pivot-international-student",
        icnuakron: "l=cn&partner=uakron&p=pivot-international-student",
        icnimga: "l=cn&p=pivot-international-scholar&partner=img&adid=icnimga",
        iimga: "p=pivot-international-scholar&partner=img&adid=iimga",
        
        fordham: "partner=fordham&p=pivot-home&adid=sfordham",
        cnfordham: "l=cn&partner=fordham&p=pivot-home&adid=scnfordham",   
        gcnfordham: "l=cn&partner=fordham&p=pivot-international-studentandscholar&adid=gcnfordham",
        gfordham: "partner=fordham&p=pivot-international-studentandscholar&adid=gfordham",
        acnfordham: "l=cn&partner=fordham&p=pivot-international-studentandscholar&adid=acnfordham", 
        ifordham: "partner=fordham&p=pivot-international-studentandscholar",
        icnfordham: "l=cn&partner=fordham&p=pivot-international-studentandscholar",
        
        northwestern: "partner=northwestern&p=pivot-home&adid=snorthwestern",
        cnnorthwestern: "l=cn&partner=northwestern&p=pivot-home&adid=scnnorthwestern",   
        gcnnorthwestern: "l=cn&partner=northwestern&p=pivot-scholar-student&adid=gcnnorthwestern",
        gnorthwestern: "partner=northwestern&p=pivot-scholar-student&adid=gnorthwestern",
        acnnorthwestern: "l=cn&partner=northwestern&p=pivot-scholar-student&adid=acnnorthwestern", 
        inorthwestern: "partner=northwestern&p=pivot-scholar-student",
        icnnorthwestern: "l=cn&partner=northwestern&p=pivot-scholar-student",        
        
        babson: "partner=babson&p=pivot-home&adid=sbabson",
        cnbabson: "l=cn&partner=babson&p=pivot-home&adid=scnbabson",   
        gcnbabson: "l=cn&partner=babson&p=pivot-international-student&adid=gcnbabson",
        gbabson: "partner=babson&p=pivot-international-student&adid=gbabson",
        acnbabson: "l=cn&partner=babson&p=pivot-international-student&adid=acnbabson", 
        ibabson: "partner=babson&p=pivot-international-student",
        icnbabson: "l=cn&partner=babson&p=pivot-international-student",        
        
        newschool: "partner=newschool&p=pivot-home&adid=snewschool",
        cnnewschool: "l=cn&partner=newschool&p=pivot-home&adid=scnnewschool",   
        gcnnewschool: "l=cn&partner=newschool&p=pivot-international-student&adid=gcnnewschool",
        gnewschool: "partner=newschool&p=pivot-international-student&adid=gnewschool",
        acnnewschool: "l=cn&partner=newschool&p=pivot-international-student&adid=acnnewschool", 
        inewschool: "partner=newschool&p=pivot-international-student",
        icnnewschool: "l=cn&partner=newschool&p=pivot-international-student",
        
        inybloodcenter: "partner=nybloodcenter&p=pivot-international-student",
        icnnybloodcenter: "l=cn&partner=nybloodcenter&p=pivot-international-student",        

        cuny: "partner=cuny&p=pivot-home&adid=scuny",
        cncuny: "l=cn&partner=cuny&p=pivot-home&adid=scncuny",   
        gcncuny: "l=cn&partner=cuny&p=pivot-international-studentandscholar&adid=gcncuny",
        gcuny: "partner=cuny&p=pivot-international-studentandscholar&adid=gcuny",
        acncuny: "l=cn&partner=cuny&p=pivot-international-studentandscholar&adid=acncuny", 
        icuny: "partner=cuny&p=pivot-international-studentandscholar",
        icncuny: "l=cn&partner=cuny&p=pivot-international-studentandscholar",  
        cunyexch: "l=cn&partner=cuny&p=exchange-form",  

        iparkland: "partner=parkland&p=pivot-international-studentandscholar",
        icnparkland: "l=cn&partner=parkland&p=pivot-international-studentandscholar",        
        

        
        musc: "partner=musc&p=pivot-home&adid=smusc",
        cnmusc: "l=cn&partner=musc&p=pivot-home&adid=scnmusc",   
        gcnmusc: "l=cn&partner=musc&p=pivot-international-student&adid=gcnmusc",
        gmusc: "partner=musc&p=pivot-international-student&adid=gmusc",
        acnmusc: "l=cn&partner=musc&p=pivot-international-student&adid=acnmusc", 
        imusc: "partner=musc&p=pivot-international-student",        
        ucberkeley: "partner=ucberkeley&p=pivot-home&adid=sucberkeley",
        cnucberkeley: "l=cn&partner=ucberkeley&p=pivot-home&adid=scnucberkeley",   
        gcnucberkeley: "l=cn&partner=ucberkeley&p=pivot-international-studentandscholar&adid=gcnucberkeley",
        gucberkeley: "partner=ucberkeley&p=pivot-international-studentandscholar&adid=gucberkeley",
        acnucberkeley: "l=cn&partner=ucberkeley&p=pivot-international-studentandscholar&adid=acnucberkeley", 
        iucberkeley: "partner=ucberkeley&p=pivot-international-studentandscholar",
        icnucberkeley: "l=cn&partner=ucberkeley&p=pivot-international-studentandscholar", 
        
        ncsu: "partner=ncsu&p=pivot-home&adid=sncsu",
        cnncsu: "l=cn&partner=ncsu&p=pivot-home&adid=scnncsu",   
        gcnncsu: "l=cn&partner=ncsu&p=pivot-international-student&adid=gcnncsu",
        gncsu: "partner=ncsu&p=pivot-international-student&adid=gncsu",
        acnncsu: "l=cn&partner=ncsu&p=pivot-international-student&adid=acnncsu",  
        incsu: "partner=ncsu&p=pivot-international-student",
        icnncsu: "l=cn&partner=ncsu&p=pivot-international-student",        
        mei: "l=cn&partner=mei",
        friendship: "l=cn&partner=friendship&p=pivot-travel-insurance&adid=friendship",  
        gb1: "l=cn&partner=gb1&p=pivot-global-medical&adid=gb1",        
        upgrade: "l=cn&partner=upgrade&p=pivot-home&adid=upgrade",        
        lng: "l=cn&partner=lng",
        beijing: "l=cn&partner=beijing&adid=beijing",  
        beijingglblform: "l=cn&partner=beijing&p=global-form&adid=beijing",         
        lngglbl: "l=cn&partner=lng&p=pivot-global-medical&adid=lng",
        lngglblform: "l=cn&partner=lng&p=global-form&adid=lng", 
        cag: "l=cn&partner=cag&p=pivot-global-medical&adid=cag",
        esl: "partner=esl&p=pivot-travel-insurance&adid=esl",       
        mdy: "l=cn&partner=mdy&p=pivot-home&adid=mdy",  
        mdys: "l=cn&partner=mdy&p=pivot-school-waiver&adid=mdy",        
        wxct: "l=cn&p=pivot-home&adid=wxct",
        springivy: "l=cn&partner=springivy",        
        iupui: "partner=iupui&p=pivot-home&adid=siupui",
        cniupui: "l=cn&partner=iupui&p=pivot-home&adid=scniupui",   
        gcniupui: "l=cn&partner=iupui&p=pivot-international-student&adid=gcniupui",
        acniupui: "l=cn&partner=iupui&p=pivot-international-student&adid=acniupui",        
        giupui: "partner=iupui&p=pivot-international-student&adid=giupui",
        iiupui: "partner=iupui&p=pivot-international-student",        
        siupui: "partner=iupui&p=pivot-international-student&adid=siupui",
        scniupui: "l=cn&partner=iupui&p=pivot-international-student&adid=scniupui",

        psu: "partner=psu&p=pivot-home&adid=spsu",
        cnpsu: "l=cn&partner=psu&p=pivot-home&adid=scnpsu",   
        gcnpsu: "l=cn&partner=psu&p=pivot-international-student&adid=gcnpsu",
        acnpsu: "l=cn&partner=psu&p=pivot-international-student&adid=acnpsu",        
        gpsu: "partner=psu&p=pivot-international-student&adid=gpsu", 
        jhmi: "partner=jhmi&p=pivot-home&adid=sjhmi",
        cnjhmi: "l=cn&partner=jhmi&p=pivot-home&adid=scnjhmi",   
        gcnjhmi: "l=cn&partner=jhmi&p=pivot-international-student&adid=gcnjhmi",
        acnjhmi: "l=cn&partner=jhmi&p=pivot-international-student&adid=acnjhmi",        
        gjhmi: "partner=jhmi&p=pivot-international-student&adid=gjhmi",         

        econnect: "partner=econnect",        
        iupuiexch: "l=cn&partner=iupui&p=exchange-form", 
        bcexch: "l=cn&partner=bc&p=exchange-form",        
        vcuexch: "l=cn&partner=vcu&p=exchange-form", 
        csuohioexch: "l=cn&partner=csuohio&p=exchange-form", 
        murraystateexch: "l=cn&partner=murraystate&p=exchange-form",        
        
        ucdavisbform: "l=cn&partner=ucdavis&p=exchange-form",        
        univtemplate: "partner=univtemplate",
        usc: "partner=usc&p=pivot-home&adid=susc",
        cnusc: "l=cn&partner=usc&p=pivot-home&adid=scnusc",   
        gcnusc: "l=cn&partner=usc&p=pivot-international-student&adid=gcnusc",
        gusc: "partner=usc&p=pivot-international-student&adid=gusc",
        acnusc: "l=cn&partner=usc&p=pivot-international-student&adid=acnusc",
        
        sta: "partner=sta&p=pivot-home&adid=ssta",
        cnsta: "l=cn&partner=sta&p=pivot-home&adid=scnsta",   
        gcnsta: "l=cn&partner=sta&p=pivot-international-student&adid=gcnsta",
        gsta: "partner=sta&p=pivot-international-student&adid=gsta",
        acnsta: "l=cn&partner=sta&p=pivot-international-student&adid=acnsta", 
        ista: "partner=sta&p=pivot-international-student",
        icnsta: "l=cn&partner=sta&p=pivot-international-student",
        staexch: "l=cn&partner=sta&p=exchange-form", 
        
        steinercollege: "partner=steinercollege&p=pivot-home&adid=ssteinercollege",
        cnsteinercollege: "l=cn&partner=steinercollege&p=pivot-home&adid=scnsteinercollege",   
        gcnsteinercollege: "l=cn&partner=steinercollege&p=pivot-international-studentandscholar&adid=gcnsteinercollege",
        gsteinercollege: "partner=steinercollege&p=pivot-international-studentandscholar&adid=gsteinercollege",
        acnsteinercollege: "l=cn&partner=steinercollege&p=pivot-international-studentandscholar&adid=acnsteinercollege", 
        isteinercollege: "partner=steinercollege&p=pivot-international-studentandscholar",
        icnsteinercollege: "l=cn&partner=steinercollege&p=pivot-international-studentandscholar",
        steinercollegeexch: "l=cn&partner=steinercollege&p=exchange-form",         

        
        
        usdos: "partner=usdos&p=pivot-international-student", 
        usdosjapan: "partner=usdosjapan&p=pivot-international-student", 
        usdoskorea: "partner=usdoskorea&p=pivot-international-student", 
        usdosindia: "partner=usdosindia&p=pivot-international-student",         
        iusc: "partner=usc&p=pivot-international-student",
        icnusc: "l=cn&partner=usc&p=pivot-international-student",        
        iuiuc: "partner=uiuc&p=pivot-international-studentandscholar",
        icnuiuc: "l=cn&partner=uiuc&p=pivot-international-studentandscholar",        
        inyu: "partner=nyu&p=pivot-international-student",
        ipurdue: "partner=purdue&p=pivot-international-student",
        icolumbia: "partner=columbia&p=pivot-international-student",
        iiu: "partner=iu&p=pivot-international-student",                
        uiuc: "partner=uiuc&p=pivot-home&adid=suiuc",
        cnuiuc: "l=cn&partner=uiuc&p=pivot-home&adid=scnuiuc",   
        gcnuiuc: "l=cn&partner=uiuc&p=pivot-international-studentandscholar&adid=gcnuiuc",
        guiuc: "partner=uiuc&p=pivot-international-studentandscholar&adid=guiuc", 
        acnuiuc: "l=cn&partner=uiuc&p=pivot-international-studentandscholar&adid=acnuiuc",        
        nyu: "partner=nyu&p=pivot-home&adid=snyu",
        cnnyu: "l=cn&partner=nyu&p=pivot-home&adid=scnnyu",   
        gcnnyu: "l=cn&partner=nyu&p=pivot-international-student&adid=gcnnyu",
        gnyu: "partner=nyu&p=pivot-international-student&adid=gnyu",
        acnnyu: "l=cn&partner=nyu&p=pivot-international-student&adid=acnnyu",
        nyar: "l=cn&partner=nyu&p=pivot-international-student&adid=nyar",        
        purdue: "partner=purdue&p=pivot-home&adid=spurdue",
        cnpurdue: "l=cn&partner=purdue&p=pivot-home&adid=scnpurdue",   
        gcnpurdue: "l=cn&partner=purdue&p=pivot-international-student&adid=gcnpur",
        scnpurdue: "l=cn&partner=purdue&p=pivot-international-student&adid=scnpur",
        spurdue: "partner=purdue&p=pivot-international-student&adid=spur",
        acnpurdue: "l=cn&partner=purdue&p=pivot-international-student&adid=acnpur",        
        gpurdue: "partner=purdue&p=pivot-international-student&adid=gpur",
        purdueexch: "l=cn&partner=purdue&p=exchange-form",  
        pdli1: "l=cn&partner=purdue&p=pivot-international-student&adid=pdli1",  
        pdli2: "l=cn&partner=purdue&p=pivot-school-waiver&adid=pdli2",         
        columbia: "partner=columbia&p=pivot-home&adid=scol",
        cncolumbia: "l=cn&partner=columbia&p=pivot-home&adid=scncol",   
        gcncolumbia: "l=cn&partner=columbia&p=pivot-international-student&adid=gcncol",
        gcolumbia: "partner=columbia&p=pivot-international-student&adid=gcncol",
        acncolumbia: "l=cn&partner=columbia&p=pivot-international-student&adid=acncol",        
        ucla: "partner=ucla&p=pivot-home&adid=sucla",
        cnucla: "l=cn&partner=ucla&p=pivot-home&adid=scnucla",   
        gcnucla: "l=cn&partner=ucla&p=pivot-international-studentandscholar&adid=gcnucla",
        acnucla: "l=cn&partner=ucla&p=pivot-international-studentandscholar&adid=acnucla",        
        gucla: "partner=ucla&p=pivot-international-studentandscholar&adid=gucla",
        iucla: "partner=ucla&p=pivot-international-studentandscholar",        
        icnucla: "l=cn&partner=ucla&p=pivot-international-studentandscholar",         
  
        uclajs: "l=cn&partner=ucla&p=pivot-international-studentandscholar&adid=uclajs",         
        ucdav: "partner=ucdav&p=pivot-home&adid=sucdav",
        cnucdav: "l=cn&partner=ucdav&p=pivot-home&adid=scnucdav",   
        gcnucdav: "l=cn&partner=ucdav&p=pivot-international-student&adid=gcnucdav",
        acnucdav: "l=cn&partner=ucdav&p=pivot-international-student&adid=acnucdav",        
        gucdav: "partner=ucdav&p=pivot-international-student&adid=gucdav",
        iucdav: "partner=ucdav&p=pivot-international-student",
        msu: "partner=msu&p=pivot-home&adid=smsu",
        cnmsu: "l=cn&partner=msu&p=pivot-home&adid=scnmsu",   
        gcnmsu: "l=cn&partner=msu&p=pivot-international-student&adid=gcnmsu",
        acnmsu: "l=cn&partner=msu&p=pivot-international-student&adid=acnmsu",        
        gmsu: "partner=msu&p=pivot-international-student&adid=gmsu",
        imsu: "partner=msu&p=pivot-international-student",
        harvard: "partner=harvard&p=pivot-home&adid=sharvard",
        cnharvard: "l=cn&partner=harvard&p=pivot-home&adid=scnharvard",   
        gcnharvard: "l=cn&partner=harvard&p=pivot-international-student&adid=gcnharvard",
        acnharvard: "l=cn&partner=harvard&p=pivot-international-student&adid=acnharvard",        
        gharvard: "partner=harvard&p=pivot-international-student&adid=gharvard",
        iharvard: "partner=harvard&p=pivot-international-student", 
        icnharvard: "l=cn&partner=harvard&p=pivot-international-student",        
        uta: "partner=uta&p=pivot-home&adid=suta",
        cnuta: "l=cn&partner=uta&p=pivot-home&adid=scnuta",   
        gcnuta: "l=cn&partner=uta&p=pivot-international-studentandscholar&adid=gcnuta",
        acnuta: "l=cn&partner=uta&p=pivot-international-studentandscholar&adid=acnuta",        
        guta: "partner=uta&p=pivot-international-studentandscholar&adid=guta",
        iuta: "partner=uta&p=pivot-international-studentandscholar",
        gsu: "partner=gsu&p=pivot-home&adid=sgsu",
        cngsu: "l=cn&partner=gsu&p=pivot-home&adid=scngsu",   
        gcngsu: "l=cn&partner=gsu&p=pivot-international-studentandscholar&adid=gcngsu",
        acngsu: "l=cn&partner=gsu&p=pivot-international-studentandscholar&adid=acngsu",        
        ggsu: "partner=gsu&p=pivot-international-studentandscholar&adid=ggsu",
        igsu: "partner=gsu&p=pivot-international-studentandscholar",
        msstate: "partner=msstate&p=pivot-home&adid=smsstate",
        cnmsstate: "l=cn&partner=msstate&p=pivot-home&adid=scnmsstate",   
        gcnmsstate: "l=cn&partner=msstate&p=pivot-international-student&adid=gcnmsstate",
        acnmsstate: "l=cn&partner=msstate&p=pivot-international-student&adid=acnmsstate",        
        gmsstate: "partner=msstate&p=pivot-international-student&adid=gmsstate",
        imsstate: "partner=msstate&p=pivot-international-student",                
        bu: "partner=bu&p=pivot-home&adid=sbu",
        cnbu: "l=cn&partner=bu&p=pivot-home&adid=scnbu",   
        gcnbu: "l=cn&partner=bu&p=pivot-international-student&adid=gcnbu",
        acnbu: "l=cn&partner=bu&p=pivot-international-student&adid=acnbu",        
        gbu: "partner=bu&p=pivot-international-student&adid=gbu",
        ibu: "partner=bu&p=pivot-international-student",
        icnbu: "l=cn&partner=bu&p=pivot-international-student",
        
        bc: "partner=bc&p=pivot-home&adid=sbc",
        cnbc: "l=cn&partner=bc&p=pivot-home&adid=scnbc",   
        gcnbc: "l=cn&partner=bc&p=pivot-international-student&adid=gcnbc",
        acnbc: "l=cn&partner=bc&p=pivot-international-student&adid=acnbc",        
        gbc: "partner=bc&p=pivot-international-student&adid=gbc",
        ibc: "partner=bc&p=pivot-international-student",  
        icnbc: "l=cn&partner=bc&p=pivot-international-student",
        
        ufl: "partner=ufl&p=pivot-home&adid=sufl",
        cnufl: "l=cn&partner=ufl&p=pivot-home&adid=scnufl",   
        gcnufl: "l=cn&partner=ufl&p=pivot-international-student&adid=gcnufl",
        acnufl: "l=cn&partner=ufl&p=pivot-international-student&adid=acnufl",        
        gufl: "partner=ufl&p=pivot-international-student&adid=gufl",
        iufl: "partner=ufl&p=pivot-international-student",
        icnufl: "l=cn&partner=ufl&p=pivot-international-student",        
        northeastern: "partner=northeastern&p=pivot-home&adid=snortheastern",
        cnnortheastern: "l=cn&partner=northeastern&p=pivot-home&adid=scnnortheastern",   
        gcnnortheastern: "l=cn&partner=northeastern&p=pivot-international-student&adid=gcnnortheastern",
        acnnortheastern: "l=cn&partner=northeastern&p=pivot-international-student&adid=acnnortheastern",        
        gnortheastern: "partner=northeastern&p=pivot-international-student&adid=gnortheastern",
        inortheastern: "partner=northeastern&p=pivot-international-student",

        asu: "partner=asu&p=pivot-home&adid=sasu",
        cnasu: "l=cn&partner=asu&p=pivot-home&adid=scnasu",   
        gcnasu: "l=cn&partner=asu&p=pivot-international-student&adid=gcnasu",
        acnasu: "l=cn&partner=asu&p=pivot-international-student&adid=acnasu",        
        gasu: "partner=asu&p=pivot-international-student&adid=gasu",
        iasu: "partner=asu&p=pivot-international-student",
        icnasu: "l=cn&partner=asu&p=pivot-international-student", 
        ibcm: "partner=bcm&p=pivot-international-student",
        icnbcm: "l=cn&partner=bcm&p=pivot-international-student", 
        imbl: "partner=mbl&p=pivot-international-student",
        icnmbl: "l=cn&partner=mbl&p=pivot-international-student",        
        
        arizona: "partner=arizona&p=pivot-home&adid=sarizona",
        cnarizona: "l=cn&partner=arizona&p=pivot-home&adid=scnarizona",   
        gcnarizona: "l=cn&partner=arizona&p=pivot-international-student&adid=gcnarizona",
        acnarizona: "l=cn&partner=arizona&p=pivot-international-student&adid=acnarizona",        
        garizona: "partner=arizona&p=pivot-international-student&adid=garizona",
        iarizona: "partner=arizona&p=pivot-international-student",  
        uchicago: "partner=uchicago&p=pivot-home&adid=suchicago",
        cnuchicago: "l=cn&partner=uchicago&p=pivot-home&adid=scnuchicago",   
        gcnuchicago: "l=cn&partner=uchicago&p=pivot-international-student&adid=gcnuchicago",
        acnuchicago: "l=cn&partner=uchicago&p=pivot-international-student&adid=acnuchicago",        
        guchicago: "partner=uchicago&p=pivot-international-student&adid=guchicago",
        iuchicago: "partner=uchicago&p=pivot-international-student",
        icnuchicago: "partner=uchicago&p=pivot-international-student&l=cn",  
        acnuchicago1: "l=cn&partner=uchicago&p=pivot-school-waiver&adid=acnuchicago1",        
        emory: "partner=emory&p=pivot-home&adid=semory",
        cnemory: "l=cn&partner=emory&p=pivot-home&adid=scnemory",   
        gcnemory: "l=cn&partner=emory&p=pivot-international-student&adid=gcnemory",
        acnemory: "l=cn&partner=emory&p=pivot-international-student&adid=acnemory",        
        gemory: "partner=emory&p=pivot-international-student&adid=gemory",
        iemory: "partner=emory&p=pivot-international-student",                
        temple: "partner=temple&p=pivot-home&adid=stemple",
        cntemple: "l=cn&partner=temple&p=pivot-home&adid=scntemple",   
        gcntemple: "l=cn&partner=temple&p=pivot-international-studentandscholar&adid=gcntemple",
        acntemple: "l=cn&partner=temple&p=pivot-international-studentandscholar&adid=acntemple",        
        gtemple: "partner=temple&p=pivot-international-studentandscholar&adid=gtemple",
        itemple: "partner=temple&p=pivot-international-studentandscholar",
        icntemple: "l=cn&partner=temple&p=pivot-international-student",        
        colorado: "partner=colorado&p=pivot-home&adid=scolorado",
        cncolorado: "l=cn&partner=colorado&p=pivot-home&adid=scncolorado",   
        gcncolorado: "l=cn&partner=colorado&p=pivot-international-studentandscholar&adid=gcncolorado",
        acncolorado: "l=cn&partner=colorado&p=pivot-international-studentandscholar&adid=acncolorado",        
        gcolorado: "partner=colorado&p=pivot-international-studentandscholar&adid=gcolorado",
        icolorado: "partner=colorado&p=pivot-international-studentandscholar", 
        icncolorado: "l=cn&partner=colorado&p=pivot-international-studentandscholar",

        kstate: "partner=kstate&p=pivot-home&adid=skstate",
        cnkstate: "l=cn&partner=kstate&p=pivot-home&adid=scnkstate",   
        gcnkstate: "l=cn&partner=kstate&p=pivot-international-studentandscholar&adid=gcnkstate",
        acnkstate: "l=cn&partner=kstate&p=pivot-international-studentandscholar&adid=acnkstate",        
        gkstate: "partner=kstate&p=pivot-international-studentandscholar&adid=gkstate",
        ikstate: "partner=kstate&p=pivot-international-studentandscholar", 
        icnkstate: "l=cn&partner=kstate&p=pivot-international-studentandscholar",
        

  

        

        iwvu: "partner=wvu&p=pivot-international-studentandscholar", 
        icnwvu: "l=cn&partner=wvu&p=pivot-international-studentandscholar",        
        
        uconn: "partner=uconn&p=pivot-home&adid=suconn",
        cnuconn: "l=cn&partner=uconn&p=pivot-home&adid=scnuconn",   
        gcnuconn: "l=cn&partner=uconn&p=pivot-international-studentandscholar&adid=gcnuconn",
        acnuconn: "l=cn&partner=uconn&p=pivot-international-studentandscholar&adid=acnuconn",        
        guconn: "partner=uconn&p=pivot-international-studentandscholar&adid=guconn",
        iuconn: "partner=uconn&p=pivot-international-studentandscholar",
        ucsd: "partner=ucsd&p=pivot-home&adid=sucsd",
        cnucsd: "l=cn&partner=ucsd&p=pivot-home&adid=scnucsd",   
        gcnucsd: "l=cn&partner=ucsd&p=pivot-international-student&adid=gcnucsd",
        acnucsd: "l=cn&partner=ucsd&p=pivot-international-student&adid=acnucsd",        
        gucsd: "partner=ucsd&p=pivot-international-student&adid=gucsd",
        iucsd: "partner=ucsd&p=pivot-international-student", 
        icnucsd: "partner=ucsd&p=pivot-international-student&l=cn",        
        bvc: "partner=bvc&p=pivot-home&adid=sbvc",
        cnbvc: "l=cn&partner=bvc&p=pivot-home&adid=scnbvc",   
        gcnbvc: "l=cn&partner=bvc&p=pivot-international-student&adid=gcnbvc",
        acnbvc: "l=cn&partner=bvc&p=pivot-international-student&adid=acnbvc",        
        gbvc: "partner=bvc&p=pivot-international-student&adid=gbvc",
        ibvc: "partner=bvc&p=pivot-international-student",

        umsl: "partner=umsl&p=pivot-home&adid=sumsl",
        cnumsl: "l=cn&partner=umsl&p=pivot-home&adid=scnumsl",   
        gcnumsl: "l=cn&partner=umsl&p=pivot-international-student&adid=gcnumsl",
        acnumsl: "l=cn&partner=umsl&p=pivot-international-student&adid=acnumsl",        
        gumsl: "partner=umsl&p=pivot-international-student&adid=gumsl",
        iumsl: "partner=umsl&p=pivot-international-student",  
        icnumsl: "l=cn&partner=umsl&p=pivot-international-student",         
        umslexch: "l=cn&partner=umsl&p=exchange-form",        
        cwu: "partner=cwu&p=pivot-home&adid=scwu",
        cncwu: "l=cn&partner=cwu&p=pivot-home&adid=scncwu",   
        gcncwu: "l=cn&partner=cwu&p=pivot-international-studentandscholar&adid=gcncwu",
        acncwu: "l=cn&partner=cwu&p=pivot-international-studentandscholar&adid=acncwu",        
        gcwu: "partner=cwu&p=pivot-international-studentandscholar&adid=gcwu",
        icwu: "partner=cwu&p=pivot-international-studentandscholar",
        icncwu: "l=cn&partner=cwu&p=pivot-international-studentandscholar", 
        
        scripps: "partner=scripps&p=pivot-home&adid=sscripps",
        cnscripps: "l=cn&partner=scripps&p=pivot-home&adid=scnscripps",   
        gcnscripps: "l=cn&partner=scripps&p=pivot-international-studentandscholar&adid=gcnscripps",
        acnscripps: "l=cn&partner=scripps&p=pivot-international-studentandscholar&adid=acnscripps",        
        gscripps: "partner=scripps&p=pivot-international-studentandscholar&adid=gscripps",
        iscripps: "partner=scripps&p=pivot-international-studentandscholar",
        icnscripps: "l=cn&partner=scripps&p=pivot-international-studentandscholar",        

        casew: "partner=casew&p=pivot-home&adid=scasew",
        cncasew: "l=cn&partner=casew&p=pivot-home&adid=scncasew",   
        gcncasew: "l=cn&partner=casew&p=pivot-international-student&adid=gcncasew",
        acncasew: "l=cn&partner=casew&p=pivot-international-student&adid=acncasew",        
        gcasew: "partner=casew&p=pivot-international-student&adid=gcasew",
        icasew: "partner=casew&p=pivot-international-student",
        icncasew: "l=cn&partner=casew&p=pivot-international-student",
        
        wwu: "partner=wwu&p=pivot-home&adid=swwu",
        cnwwu: "l=cn&partner=wwu&p=pivot-home&adid=scnwwu",   
        gcnwwu: "l=cn&partner=wwu&p=pivot-international-studentandscholar&adid=gcnwwu",
        acnwwu: "l=cn&partner=wwu&p=pivot-international-studentandscholar&adid=acnwwu",        
        gwwu: "partner=wwu&p=pivot-international-studentandscholar&adid=gwwu",
        iwwu: "partner=wwu&p=pivot-international-studentandscholar", 
        icnwwu: "l=cn&partner=wwu&p=pivot-international-studentandscholar",        
        tamu: "partner=tamu&p=pivot-home&adid=stamu",
        cntamu: "l=cn&partner=tamu&p=pivot-home&adid=scntamu",   
        gcntamu: "l=cn&partner=tamu&p=pivot-international-student&adid=gcntamu",
        acntamu: "l=cn&partner=tamu&p=pivot-international-student&adid=acntamu",        
        gtamu: "partner=tamu&p=pivot-international-student&adid=gtamu",
        itamu: "partner=tamu&p=pivot-international-student",
        icntamu: "l=cn&partner=tamu&p=pivot-international-student",        
        uh: "partner=uh&p=pivot-home&adid=suh",
        cnuh: "l=cn&partner=uh&p=pivot-home&adid=scnuh",   
        gcnuh: "l=cn&partner=uh&p=pivot-international-student&adid=gcnuh",
        acnuh: "l=cn&partner=uh&p=pivot-international-student&adid=acnuh",        
        guh: "partner=uh&p=pivot-international-student&adid=guh",
        iuh: "partner=uh&p=pivot-international-student",
        cornell: "partner=cornell&p=pivot-home&adid=scornell",
        cncornell: "l=cn&partner=cornell&p=pivot-home&adid=scncornell",   
        gcncornell: "l=cn&partner=cornell&p=pivot-international-student&adid=gcncornell",
        acncornell: "l=cn&partner=cornell&p=pivot-international-student&adid=acncornell",        
        gcornell: "partner=cornell&p=pivot-international-student&adid=gcornell",
        icornell: "partner=cornell&p=pivot-international-student",
        
        utaustin: "partner=utaustin&p=pivot-home&adid=sut",
        cnutaustin: "l=cn&partner=utaustin&p=pivot-home&adid=scnut",   
        gcnutaustin: "l=cn&partner=utaustin&p=pivot-international-studentandscholar&adid=gcnut",
        acnutaustin: "l=cn&partner=utaustin&p=pivot-international-studentandscholar&adid=acnut", 
        acnutguide: "l=cn&partner=utaustin&p=pivot-international-studentandscholar&adid=acnutguide",        
        gutaustin: "partner=utaustin&p=pivot-international-studentandscholar&adid=gut",
        iutaustin: "partner=utaustin&p=pivot-international-studentandscholar",
        icnutaustin: "l=cn&partner=utaustin&p=pivot-international-studentandscholar",  
        
        utdallas: "partner=utdallas&p=pivot-home&adid=sutdallas",
        cnutdallas: "l=cn&partner=utdallas&p=pivot-home&adid=scnutdallas",   
        gcnutdallas: "l=cn&partner=utdallas&p=pivot-international-studentandscholar&adid=gcnutdallas",
        acnutdallas: "l=cn&partner=utdallas&p=pivot-international-studentandscholar&adid=acnutdallas",        
        gutdallas: "partner=utdallas&p=pivot-international-studentandscholar&adid=gutdallas",
        iutdallas: "partner=utdallas&p=pivot-international-studentandscholar",
        icnutdallas: "l=cn&partner=utdallas&p=pivot-international-studentandscholar",
        
        iou: "partner=ou&p=pivot-international-student",
        icnou: "l=cn&partner=ou&p=pivot-international-student",  
        
        idrexel: "partner=drexel&p=pivot-international-student",
        icndrexel: "l=cn&partner=drexel&p=pivot-international-student", 
        
        iuu: "partner=uu&p=pivot-international-studentandscholar",
        icnuu: "l=cn&partner=uu&p=pivot-international-studentandscholar",        
        
        imissouri: "partner=missouri&p=pivot-international-student",
        icnmissouri: "l=cn&partner=missouri&p=pivot-international-student",         
        
        isiu: "partner=siu&p=pivot-international-student",
        icnsiu: "l=cn&partner=siu&p=pivot-international-student",        
        
        insuok: "partner=nsuok&p=pivot-international-student",
        icnnsuok: "l=cn&partner=nsuok&p=pivot-international-student", 
        
        icsus: "partner=csus&p=pivot-international-student",
        icncsus: "l=cn&partner=csus&p=pivot-international-student",        

        istevens: "partner=stevens&p=pivot-international-student",
        icnstevens: "l=cn&partner=stevens&p=pivot-international-student",         
              
        iucf: "partner=ucf&p=pivot-international-student",
        icnucf: "l=cn&partner=ucf&p=pivot-international-student",         

        isi: "partner=si&p=pivot-international-student",
        icnsi: "l=cn&partner=si&p=pivot-international-student",         
        
        isemo: "partner=semo&p=pivot-international-student",
        icnsemo: "l=cn&partner=semo&p=pivot-international-student",        
        
        igeorgiasouthern: "partner=georgiasouthern&p=pivot-international-student",
        icngeorgiasouthern: "l=cn&partner=georgiasouthern&p=pivot-international-student",  

        irushu: "partner=rushu&p=pivot-international-student",
        icnrushu: "l=cn&partner=rushu&p=pivot-international-student",         
        
        iucdenver: "partner=ucdenver&p=pivot-international-student",
        icnucdenver: "l=cn&partner=ucdenver&p=pivot-international-student",        
        
        iuwm: "partner=uwm&p=pivot-international-student",
        icnuwm: "l=cn&partner=uwm&p=pivot-international-student",        
        
        iyu: "partner=yu&p=pivot-international-student",
        icnyu: "l=cn&partner=yu&p=pivot-international-student",         
        
        iusu: "partner=usu&p=pivot-international-student",
        icnusu: "l=cn&partner=usu&p=pivot-international-student",       
        
        iwfu: "partner=wfu&p=pivot-international-student",
        icnwfu: "l=cn&partner=wfu&p=pivot-international-student",  

        ijefferson: "partner=jefferson&p=pivot-international-student",
        icnjefferson: "l=cn&partner=jefferson&p=pivot-international-student",        

        icedars: "partner=cedars&p=pivot-international-student",
        icncedars: "l=cn&partner=cedars&p=pivot-international-student",        

        iumaine: "partner=umaine&p=pivot-international-student",
        icnumaine: "l=cn&partner=umaine&p=pivot-international-student",  

        iunm: "partner=unm&p=pivot-international-student",
        icnunm: "l=cn&partner=unm&p=pivot-international-student",        

        iu: "partner=iu&p=pivot-home&adid=siu",
        cniu: "l=cn&partner=iu&p=pivot-home&adid=scniu",   
        gcniu: "l=cn&partner=iu&p=pivot-international-student&adid=gcniu",
        acniu: "l=cn&partner=iu&p=pivot-international-student&adid=acniu",        
        giu: "partner=iu&p=pivot-international-student&adid=giu"
    }; 

    return referrals[key];
}

function appendPageAttributesIfNecessary(hash) {
    var adId = getAdId();
    var hasAdId = !(typeof adId === "undefined");

    if ((hash.indexOf("adid=") == -1) && hasAdId) {
        hash = hash + "&adid="+adId;
    }

    var lang = langTag();
    var hasLang = !(typeof lang === "undefined");
    if ((hash.indexOf("l=") == -1) && hasLang) {
        hash = hash + "&l="+lang;
    }

    return hash;
}

function showPivot(pivotName) {
    // If the hash doesn't have an =, try to treat it as a redirect.
    var currHash = document.location.hash.substr(1);

    var newHash = referralSubstitution(currHash);
    if (!(typeof newHash === "undefined")) {
        newHash = appendPageAttributesIfNecessary(newHash);

        document.location.hash = "#"+newHash;
        window.scrollTo(0, 0);
        document.location.reload(true)
        return;
    }

    // Otherwise, process the hash attributes normally
    var defaultTab = "pivot-home";
    if (pivotName.length == 0)
        pivotName = defaultTab;

    updateHash("p", pivotName);
    var toHide = $(".pivot");
    for (var i = 0; i < toHide.length; i++) {
        toHide[i].style.display = "none";
    }
    var toShow = $("#"+pivotName)[0];
    toShow.style.display = "block";

    showApplicationFrames(pivotName);

    // Special behaviors for the various pages upon being shown:
    if (pivotName == "pivot-travel-insurance") {
        showSubsection("travel-subsections", "patriot-travel");
    } else {
        analyticsTrackEvent("view", pivotName, 1, false);
        analyticsTrackAdView(pivotName);
        analyticsTrackLanguageView(pivotName);
    }
}

function urlsToAppIds() {
    var urlsToAppIds = {
        "https://purchase.imglobal.com/quote/patriot_group_exchange?imgac=80000699" : "PatExchGroupPlanB",
        "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699" : "TaianPatExchGroupPlanB",        
        "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699" : "PatExchPlanB",
        "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699" : "TaianPatExchPlanB",
        "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699" : "SHAPlanA",
        "https://purchase.imglobal.com/quote/patriot?imgac=80000699" : "Travel",
        "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699" : "TravelGroup",
        "https://purchase.imglobal.com/Quote/student_health_advantage_platinum/pre-quote?imgac=80000699" : "SHAPlanAplat",
        "https://purchase.imglobal.com/Quote/student_health_advantage_group/pre-quote?imgac=80000699" : "SHAPlanAGroupstand"        
    };
    
    var perLang = {
        "cn" : urlsToAppIds
    };
    return perLang;
}

function imageURLForURL(url) {
    var urlsForLang = urlsToAppIds()[getPageAttribute("l")];
    var imageURL = urlsForLang[url];
	
    if (typeof imageURL === "undefined") {
        imageURL = "JavaScript:''";
    } else {
        imageURL = "annotatedApps/index.html#l="+getPageAttribute("l")+"&p="+imageURL;
    }
	
    return imageURL;
}

function showApplicationFrames(pivotName) {
    var urlsForLang = urlsToAppIds()[getPageAttribute("l")];

    for (url in urlsForLang) {
        var rawName = urlsForLang[url];
        var name = "pivot-"+rawName;
        if (name == pivotName) {
            var imgURL = imageURLForURL(url);
            document.getElementById(pivotName+"-img").src = imgURL;
            document.getElementById(pivotName+"-url").src = url;
        } else {
            document.getElementById(name+"-img").src = "JavaScript:''";
            document.getElementById(name+"-url").src = "JavaScript:''";
        }
    }
}

function writeSectionsForForms() {
    startSection("global-form-success", "Global Application Information Submitted");
    startRow();
    writeText("We will email you when the online application is ready for you to complete your purchase.");
    endRow();
    endSection();

    startSection("global-form", "Global Application");
    writeText("Please fill in the answers in English.  You can use your preferred language if you do not know the English answer");
    startRow();
    startForm("Global Application Information", "post.php", "global-form-success");
    document.write(makeTableWithStyle("formTable", 2, [
                makeFormTextInput("Number of Dependent Children Age 9 years or below"),
                makeFormTextInput("Number of Dependent Children Ages 10 to 18"),
                makeFormTextInput("Silver/Gold/Gold Plus/Platinum"),
                makeFormTextInput("Deductible ($100, $250, $500, $1000, $2500, $5000, $10,000)"),
                makeFormTextInput("Do you want to pay monthly, quarterly, semiannually, or annually?  Monthly is the most expensive.  Quarterly saves about 6%, semiannually saves about 8%, annually saves about 17%.  Plans cancelled in the middle of a payment period will be charged a penalty for early termination."),                
                makeFormTextInput("Primary Insured-First Name"),
                makeFormTextInput("Primary Insured-Last Name"),
                makeFormTextInput("Primary Insured-Gender"),
                makeFormTextInput("Primary Insured-Date of Birth"),
                makeFormTextInput("Primary Insured-Height"),
                makeFormTextInput("Primary Insured-Inches or centimeters"),
                makeFormTextInput("Primary Insured-Weight"),
                makeFormTextInput("Primary Insured-Kilograms or Pounds"),
                makeFormTextInput("Primary Insured-Occupation (ok to leave blank)"),
                makeFormTextInput("Primary Insured-Government Issued ID Number"),
                makeFormTextInput("Primary Insured-Country of Citizenship"),
                makeFormTextInput("Primary Insured-Do you have a green card? (Y/N)"),                
                makeFormTextInput("Primary Insured-Type of visa"), 
                makeFormTextInput("Primary Insured-Visa issue date"), 
                makeFormTextInput("Primary Insured-Visa expiration date"),
                makeFormTextInput("Primary Insured-Date of arrival in US for Non-US citizens (if you are not in the US, leave it blank)"),                
                
                makeFormTextInput("Primary Insured-If US Citizen Date you did or will depart US"),
                makeFormTextInput("Primary Insured-Is your expected length of residence outside the U.S. at least 6 of the next 12 months? "),
                makeFormTextInput("How would you like to receive your insurance documents?  Email / Regular Mail / Expedited Mail ($25)"),
                makeFormTextInput("Spouse-First Name (Leave spouse and children information blank if you are not buying insurance for them.)"),
                makeFormTextInput("Spouse-Last Name"),
                makeFormTextInput("Spouse-Gender"),
                makeFormTextInput("Spouse-Date of Birth"),
                makeFormTextInput("Spouse-Height"),
                makeFormTextInput("Spouse-Inches or centimeters"),
                makeFormTextInput("Spouse-Weight"),
                makeFormTextInput("Spouse-Kilograms or Pounds"),
                makeFormTextInput("Spouse-Occupation (ok to leave blank)"),
                makeFormTextInput("Spouse-Government Issued ID Number"),
                makeFormTextInput("Spouse-Country of Citizenship"),
                makeFormTextInput("Spouse-Do you have a green card? (Y/N)"),                
                makeFormTextInput("Spouse-Type of visa"), 
                makeFormTextInput("Spouse-Visa issue date"), 
                makeFormTextInput("Spouse-Visa expiration date"),
                makeFormTextInput("Spouse-Date of arrival in US for Non-US citizens (if you are not in the US, leave it blank)"),                 
                makeFormTextInput("Spouse-If US Citizen Date you did or will depart US"),
                makeFormTextInput("Spouse-Is your expected length of residence outside the U.S. at least 6 of the next 12 months? "),
                makeFormTextInput("Child 1-First Name"),
                makeFormTextInput("Child 1-Last Name"),
                makeFormTextInput("Child 1-Gender"),
                makeFormTextInput("Child 1-Date of Birth"),
                makeFormTextInput("Child 1-Height"),
                makeFormTextInput("Child 1-Inches or centimeters"),
                makeFormTextInput("Child 1-Weight"),
                makeFormTextInput("Child 1-Kilograms or Pounds"),
                makeFormTextInput("Child 1-Occupation (ok to leave blank)"),
                makeFormTextInput("Child 1-Government Issued ID Number"),
                makeFormTextInput("Child 1-Country of Citizenship"), 
                makeFormTextInput("Child 1-Do you have a green card? (Y/N)"),                
                makeFormTextInput("Child 1-Type of visa"), 
                makeFormTextInput("Child 1-Visa issue date"), 
                makeFormTextInput("Child 1-Visa expiration date"),
                makeFormTextInput("Child 1-Date of arrival in US for Non-US citizens (if you are not in the US, leave it blank)"), 
                makeFormTextInput("Child 1-If US Citizen Date you did or will depart US"),
                makeFormTextInput("Child 1-Is your expected length of residence outside the U.S. at least 6 of the next 12 months? "),
                makeFormTextInput("Child 2-First Name"),
                makeFormTextInput("Child 2-Last Name"),
                makeFormTextInput("Child 2-Gender"),
                makeFormTextInput("Child 2-Date of Birth"),
                makeFormTextInput("Child 2-Height"),
                makeFormTextInput("Child 2-Inches or centimeters"),
                makeFormTextInput("Child 2-Weight"),
                makeFormTextInput("Child 2-Kilograms or Pounds"),
                makeFormTextInput("Child 2-Occupation (ok to leave blank)"),
                makeFormTextInput("Child 2-Government Issued ID Number"),
                makeFormTextInput("Child 2-Country of Citizenship"),
                makeFormTextInput("Child 2-Do you have a green card? (Y/N)"),                
                makeFormTextInput("Child 2-Type of visa"), 
                makeFormTextInput("Child 2-Visa issue date"), 
                makeFormTextInput("Child 2-Visa expiration date"),
                makeFormTextInput("Child 2-Date of arrival in US for Non-US citizens (if you are not in the US, leave it blank)"),                
                makeFormTextInput("Child 2-If US Citizen Date you did or will depart US"),
                makeFormTextInput("Child 2-Is your expected length of residence outside the U.S. at least 6 of the next 12 months? "),
                makeFormTextInput("Coverage Start Date"),
                makeFormTextInput("Residence Address  (Best to use Chinese address)"),
                makeFormTextInput("City"),
                makeFormTextInput("County/Region"),
                makeFormTextInput("State/Province (US or Canada only)"),
                makeFormTextInput("Zip Code"),
                makeFormTextInput("Country"),
                makeFormTextInput("Telephone"),
                makeFormTextInput("Email Address"),
                makeFormTextInput("Forwarding Address  (Best to use US address)"),
                makeFormTextInput("City"),
                makeFormTextInput("County/Region"),
                makeFormTextInput("State/Province (US or Canada only)"),
                makeFormTextInput("Zip Code"),
                makeFormTextInput("Country"),
                makeFormTextInput("Telephone"),
                makeFormTextInput("Email Address"),
                makeFormTextInput("Are you or any other applicant currently disabled or unable to perform normal activities?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Are you or any other applicant presently hospitalized, or scheduled for or in need of hospitalization or surgery?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Have you or any other applicant ever tested positive for, been diagnosed with, or been treated for Acquired Immune Deficiency Syndrome (AIDS), AIDS Related Complex (ARC), Lymphadenopathy Syndrome, Human Immunodeficiency Virus (HIV) or any other Immune System Disorder?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Have you or any other applicant ever had, been recommended to have, or are you currently on a waiting list for any organ transplant (other than corneal)?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Do you participate in professional sports?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Have you or any other applicant been diagnosed with or treated for any type of cancer or pre-cancerous condition during the past five (5) years?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("If a non-U.S. citizen, have you or any other applicant resided continuously in the U.S. for the last five (5) years?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Are you or any other applicant currently pregnant?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),

                loc("Have you or any family member applying for coverage EVER experienced symptoms of, suffered from, sought consultation, examination, testing or been treated for, or been diagnosed with, any problem relating to any of the following: (This language is for the following questions through the question about eyes)"), "",

              
                makeFormTextInput("Heart, cardiac, cardiovascular and/or circulatory, including, but not limited to: congestive heart failure, heart attack, angina, chest pain, arteriosclerosis, atherosclerosis, elevated blood pressure, hypertension, swelling of feet/ankles, thrombosis, phlebitis, rheumatic fever, or heart murmur?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Blood, blood vessels, spleen, arteries, veins or disorders of the blood, including, but not limited to: anemia, hemophilia, leukemia, hepatitis, lymph glands, or high cholesterol?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Diabetes, hyperglycemia or hypoglycemia?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Asthma or allergies?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),
                makeFormTextInput("Cancer, tumor, cyst, polyp, melanoma, Kaposi's sarcoma, cell disorder, shingles, lump, calcification, or growth of any kind?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Liver, Pancreas, Gall Bladder or endocrine disorders including, but not limited to: pituitary, thyroid or metabolic disorders, or obesity?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Kidney, urinary tract functions, kidney or bladder stones or infections?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Respiratory system including, but not limited to: tuberculosis, lung disorders, emphysema, chronic cough, bronchitis, bronchial asthma, pleurisy pneumonia?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Mental and nervous system disorders including, but not limited to: psychosis, mental or behavioral disorders, ADD or ADHD, chemical or drug abuse or dependency, alcoholism, psychiatric counseling and/or support groups, depression, anxiety, chronic fatigue, or eating or sleeping disorders?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Neurological disorders, including but not limited to: multiple sclerosis (MS), muscular dystrophy, Lou Gehrig's disease (ALS), Parkinson's disease, paralysis, epilepsy, convulsions, seizures, migraines, chronic headaches, stroke, or transient cerebral ischemic attacks?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Muscular, skeletal, spine, bone, or joint, including but not limited to: scoliosis, disc disease or disorder, vertebrae, degeneration, or any other back or neck condition, rheumatism, arthritis, gout, tendonitis, osteoporosis or inflammation?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("For female applicants, miscarriage, complicated pregnancy or delivery, or infertility consultation, advice, diagnosis or treatment, and disorders of the reproductive systems, including but not limited to: vaginal bleeding, fibroids, nodules or breast cysts, fallopian tubes, ovaries or uterus, and hormone replacement therapy?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("For male applicants, disorders of the reproductive systems, including but not limited to: prostate or elevated PSA level, or erectile dysfunction?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Congenital, genetic, hereditary or other birth condition or defect including, but not limited to: mental retardation, Down Syndrome, or other chromosome disorder, physical disorder, deformity or defect?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Digestive system, stomach, colon, rectum or intestines, including, but not limited to: esophageal regurgitation, gastritis, ulcers, Crohn’s Disease and/or diverticulitis?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Eyes, ears, nose, mouth, throat or jaw, including, but not limited to: cataracts, glaucoma, nasal septum deviation, chronic sinusitis, or TMJ?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Do you or any family member applying for coverage currently use or during the past five years have you used tobacco in any form?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Any other disease, medical problem, illness, injury or condition of any kind not listed?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"),  
 
                makeFormTextInput("During the last twelve (12) months, have you or any family member applying for coverage experienced manifestation or symptoms of, been diagnosed with, or received any consultation, examination, testing or treatment (including medications) for, any medical, health, mental, physical or nervous condition?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Have you or any family member applying for coverage ever applied or purchased insurance through IMG?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Have you or any family member applying for coverage ever been rejected, cancelled, rated or declined for coverage under any health, life or disability insurance policy?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("During the last twelve (12) months, have you or any family member applying for coverage been covered under any health or medical insurance plan, including a government sponsored health care plan? If yes, please state the name and location of the insurance company, the policy/plan number, and the applicable dates of coverage.(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)"), 
                makeFormTextInput("Please provide details on any yes answer including doctor name and address, date last seen, details of the condition"), 
                makeFormTextInput("Primary Insured Family doctor Name"), 
                makeFormTextInput("Primary Insured Family doctor Address"), 
                makeFormTextInput("Primary Insured Family doctor City"), 
                makeFormTextInput("Primary Insured Family doctor State/Province (If in US)"), 
                makeFormTextInput("Primary Insured Family doctor Zip/Postal Code"), 
                makeFormTextInput("Primary Insured Family doctor Country"), 
                makeFormTextInput("Primary Insured Family doctor Telephone"), 
                makeFormTextInput("Primary Insured Family doctor Date Last Seen"), 
                makeFormTextInput("Primary Insured Family doctor Reason"), 
                makeFormTextInput("Spouse Family doctor Name"), 
                makeFormTextInput("Spouse Family doctor Address"), 
                makeFormTextInput("Spouse Family doctor City"), 
                makeFormTextInput("Spouse Family doctor State/Province (If in US)"), 
                makeFormTextInput("Spouse Family doctor Zip/Postal Code"), 
                makeFormTextInput("Spouse Family doctor Country"), 
                makeFormTextInput("Spouse Family doctor Telephone"), 
                makeFormTextInput("Spouse Family doctor Date Last Seen"), 
                makeFormTextInput("Spouse Family doctor Reason"), 
                makeFormTextInput("Child 1 Family doctor Name"), 
                makeFormTextInput("Child 1 Family doctor Address"), 
                makeFormTextInput("Child 1 Family doctor City"), 
                makeFormTextInput("Child 1 Family doctor State/Province (If in US)"), 
                makeFormTextInput("Child 1 Family doctor Zip/Postal Code"), 
                makeFormTextInput("Child 1 Family doctor Country"), 
                makeFormTextInput("Child 1 Family doctor Telephone"), 
                makeFormTextInput("Child 1 Family doctor Date Last Seen"), 
                makeFormTextInput("Child 1 Family doctor Reason"), 
                makeFormTextInput("Child 2 Family doctor Name"), 
                makeFormTextInput("Child 2 Family doctor Address"), 
                makeFormTextInput("Child 2 Family doctor City"), 
                makeFormTextInput("Child 2 Family doctor State/Province (If in US)"), 
                makeFormTextInput("Child 2 Family doctor Zip/Postal Code"), 
                makeFormTextInput("Child 2 Family doctor Country"), 
                makeFormTextInput("Child 2 Family doctor Telephone"), 
                makeFormTextInput("Child 2 Family doctor Date Last Seen"), 
                makeFormTextInput("Child 2 Family doctor Reason"),
                makeFormTextInput("Do you want to add any optional riders to your plan?  Please indicate: None / Term Life Insurance / Daily Indemnity / Terrorism / Sports / Dental / Vision / Maternity (Note - Not all optional riders are available on all plans.)")                
                ]));
    endForm();
    endRow();

    endSection();

    startSection("travel-group-form-success", "Travel Group Information Submitted");
    startRow();
    writeText("We will email you when the online application is ready for you to complete your purchase.");
    endRow();
    endSection();

    startSection("travel-group-form", "Travel Group Application");
    writeText("Please fill in the answers in English.  You can use your preferred language if you do not know the English answer");    
    startRow();
    startForm("Travel Group Application Information", "post.php", "travel-group-form-success");
    document.write(makeTableWithStyle("formTable", 2, [
                makeFormTextInput("Deductible ($0, $100, $250, $500, $1000, $2500)"),
                makeFormTextInput("Maximum Limit ($50,000, $100,000, $500,000, $1,000,000)"),
                makeFormTextInput("Sponsoring Organization"),
                makeFormTextInput("Contact First name/Last name"),
                makeFormTextInput("Address"),
                makeFormTextInput("City"),
                makeFormTextInput("State/Province (US or Canada only)"),
                makeFormTextInput("Zip Code"),
                makeFormTextInput("Country"),
                makeFormTextInput("Telephone"),
                makeFormTextInput("Email Address"),
                makeFormTextInput("Email Address (2nd address optional)"),
                makeFormTextInput("Requested Coverage Effective Date"),
                makeFormTextInput("Requested Expiration Date"),
                makeFormTextInput("Date of Departure from Home Country"),
                makeFormTextInput("Date of Return to Home Country"),
                makeFormTextInput("Date of Arrival in the U.S. (Required for non-US citizens over 65 and visiting the US)"),
                makeFormTextInput("Destination country"),
                makeFormTextInput("Insured 1-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 1-First Name"),
                makeFormTextInput("Insured 1-Last Name"),
                makeFormTextInput("Insured 1-Date of Birth"),
                makeFormTextInput("Insured 1-Government Issued ID Number"),                
                makeFormTextInput("Insured 1-Home Country"),
                makeFormTextInput("Insured 1-Country of Citizenship"),                
                makeFormTextInput("Insured 1-Start Date"),
                makeFormTextInput("Insured 1-End Date"),
                makeFormTextInput("Insured 2-Type (Primary/Spouse/Child) Note: Only fill in family members that are purchasing coverage"),
                makeFormTextInput("Insured 2-First Name"),
                makeFormTextInput("Insured 2-Last Name"),
                makeFormTextInput("Insured 2-Date of Birth"),
                makeFormTextInput("Insured 2-Government Issued ID Number"),                
                makeFormTextInput("Insured 2-Home Country"),
                makeFormTextInput("Insured 2-Country of Citizenship"),                
                makeFormTextInput("Insured 2-Start Date"),
                makeFormTextInput("Insured 2-End Date"),
                makeFormTextInput("Insured 3-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 3-First Name"),
                makeFormTextInput("Insured 3-Last Name"),
                makeFormTextInput("Insured 3-Date of Birth"),
                makeFormTextInput("Insured 3-Government Issued ID Number"),                
                makeFormTextInput("Insured 3-Home Country"),
                makeFormTextInput("Insured 3-Country of Citizenship"),                
                makeFormTextInput("Insured 3-Start Date"),
                makeFormTextInput("Insured 3-End Date"),
                makeFormTextInput("Insured 4-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 4-First Name"),
                makeFormTextInput("Insured 4-Last Name"),
                makeFormTextInput("Insured 4-Date of Birth"),
                makeFormTextInput("Insured 4-Government Issued ID Number"),                
                makeFormTextInput("Insured 4-Home Country"),
                makeFormTextInput("Insured 4-Country of Citizenship"),                
                makeFormTextInput("Insured 4-Start Date"),
                makeFormTextInput("Insured 4-End Date"), 
                makeFormTextInput("Insured 5-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 5-First Name"),
                makeFormTextInput("Insured 5-Last Name"),
                makeFormTextInput("Insured 5-Date of Birth"),
                makeFormTextInput("Insured 5-Government Issued ID Number"),                
                makeFormTextInput("Insured 5-Home Country"),
                makeFormTextInput("Insured 5-Country of Citizenship"),                
                makeFormTextInput("Insured 5-Start Date"),
                makeFormTextInput("Insured 5-End Date"),
                makeFormTextInput("Insured 6-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 6-First Name"),
                makeFormTextInput("Insured 6-Last Name"),
                makeFormTextInput("Insured 6-Date of Birth"),
                makeFormTextInput("Insured 6-Government Issued ID Number"),                
                makeFormTextInput("Insured 6-Home Country"),
                makeFormTextInput("Insured 6-Country of Citizenship"),                
                makeFormTextInput("Insured 6-Start Date"),
                makeFormTextInput("Insured 6-End Date"),
                makeFormTextInput("Insured 7-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 7-First Name"),
                makeFormTextInput("Insured 7-Last Name"),
                makeFormTextInput("Insured 7-Date of Birth"),
                makeFormTextInput("Insured 7-Government Issued ID Number"),                
                makeFormTextInput("Insured 7-Home Country"),
                makeFormTextInput("Insured 7-Country of Citizenship"),                
                makeFormTextInput("Insured 7-Start Date"),
                makeFormTextInput("Insured 7-End Date"),
                makeFormTextInput("Insured 8-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 8-First Name"),
                makeFormTextInput("Insured 8-Last Name"),
                makeFormTextInput("Insured 8-Date of Birth"),
                makeFormTextInput("Insured 8-Government Issued ID Number"),                
                makeFormTextInput("Insured 8-Home Country"),
                makeFormTextInput("Insured 8-Country of Citizenship"),                
                makeFormTextInput("Insured 8-Start Date"),
                makeFormTextInput("Insured 8-End Date")
                ]));
    endForm();
    endRow();

    endSection();    
    
    startSection("exchange-group-form-success", "TaiAn Patriot Exchange Group Information Submitted");
    startRow();
    writeText("We will email you when the online application is ready for you to complete your purchase.");
    endRow();
    endSection();

    startSection("exchange-group-form", "TaiAn Patriot Exchange Group Application");
    writeText("Please fill in the answers in English.  You can use your preferred language if you do not know the English answer");    
    startRow();
    startForm("TaiAn Patriot Exchange Group Application Information", "post.php", "exchange-group-form-success");
    document.write(makeTableWithStyle("formTable", 2, [
                makeFormTextInput("Maximum Benefit per illness/injury ($50,000, $100,000, $250,000, $500,000)"),
                makeFormTextInput("Do you want a $100 per illness deductible, $250 annual deductible, or $500 annual deductible?"),
                makeFormTextInput("Do you want adventure sports rider?"),
                makeFormTextInput("Do you want the add on benefit? (Covers lost baggage, legal assistance, personal liability, damage to third party, high school sports)"),

                makeFormTextInput("Sponsoring Organization"),
                makeFormTextInput("Contact First name/Last name"),
                makeFormTextInput("Address"),
                makeFormTextInput("City"),
                makeFormTextInput("State/Province (US or Canada only)"),
                makeFormTextInput("Zip Code"),
                makeFormTextInput("Country"),
                makeFormTextInput("Telephone"),
                makeFormTextInput("Email Address"),
                makeFormTextInput("Email Address (2nd address optional)"),
                makeFormTextInput("Requested Coverage Effective Date"),
                makeFormTextInput("Requested Expiration Date"),
                makeFormTextInput("Date of Departure from Home Country"),
                makeFormTextInput("Date of Return to Home Country"),
                makeFormTextInput("Date of Arrival in the U.S. (Required for non-US citizens over 65 and visiting the US)"),
                makeFormTextInput("Destination country"),
                makeFormTextInput("Insured 1-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 1-First Name"),
                makeFormTextInput("Insured 1-Last Name"),
                makeFormTextInput("Insured 1-Date of Birth"),
                makeFormTextInput("Insured 1-Government Issued ID Number"),                
                makeFormTextInput("Insured 1-Home Country"),
                makeFormTextInput("Insured 1-Country of Citizenship"),                
                makeFormTextInput("Insured 1-Start Date"),
                makeFormTextInput("Insured 1-End Date"),
                makeFormTextInput("Insured 2-Type (Primary/Spouse/Child) Note: Only fill in family members that are purchasing coverage"),
                makeFormTextInput("Insured 2-First Name"),
                makeFormTextInput("Insured 2-Last Name"),
                makeFormTextInput("Insured 2-Date of Birth"),
                makeFormTextInput("Insured 2-Government Issued ID Number"),                
                makeFormTextInput("Insured 2-Home Country"),
                makeFormTextInput("Insured 2-Country of Citizenship"),                
                makeFormTextInput("Insured 2-Start Date"),
                makeFormTextInput("Insured 2-End Date"),
                makeFormTextInput("Insured 3-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 3-First Name"),
                makeFormTextInput("Insured 3-Last Name"),
                makeFormTextInput("Insured 3-Date of Birth"),
                makeFormTextInput("Insured 3-Government Issued ID Number"),                
                makeFormTextInput("Insured 3-Home Country"),
                makeFormTextInput("Insured 3-Country of Citizenship"),                
                makeFormTextInput("Insured 3-Start Date"),
                makeFormTextInput("Insured 3-End Date"),
                makeFormTextInput("Insured 4-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 4-First Name"),
                makeFormTextInput("Insured 4-Last Name"),
                makeFormTextInput("Insured 4-Date of Birth"),
                makeFormTextInput("Insured 4-Government Issued ID Number"),                
                makeFormTextInput("Insured 4-Home Country"),
                makeFormTextInput("Insured 4-Country of Citizenship"),                
                makeFormTextInput("Insured 4-Start Date"),
                makeFormTextInput("Insured 4-End Date"), 
                makeFormTextInput("Insured 5-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 5-First Name"),
                makeFormTextInput("Insured 5-Last Name"),
                makeFormTextInput("Insured 5-Date of Birth"),
                makeFormTextInput("Insured 5-Government Issued ID Number"),                
                makeFormTextInput("Insured 5-Home Country"),
                makeFormTextInput("Insured 5-Country of Citizenship"),                
                makeFormTextInput("Insured 5-Start Date"),
                makeFormTextInput("Insured 5-End Date"),
                makeFormTextInput("Insured 6-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 6-First Name"),
                makeFormTextInput("Insured 6-Last Name"),
                makeFormTextInput("Insured 6-Date of Birth"),
                makeFormTextInput("Insured 6-Government Issued ID Number"),                
                makeFormTextInput("Insured 6-Home Country"),
                makeFormTextInput("Insured 6-Country of Citizenship"),                
                makeFormTextInput("Insured 6-Start Date"),
                makeFormTextInput("Insured 6-End Date"),
                makeFormTextInput("Insured 7-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 7-First Name"),
                makeFormTextInput("Insured 7-Last Name"),
                makeFormTextInput("Insured 7-Date of Birth"),
                makeFormTextInput("Insured 7-Government Issued ID Number"),                
                makeFormTextInput("Insured 7-Home Country"),
                makeFormTextInput("Insured 7-Country of Citizenship"),                
                makeFormTextInput("Insured 7-Start Date"),
                makeFormTextInput("Insured 7-End Date"),
                makeFormTextInput("Insured 8-Type (Primary/Spouse/Child)"),
                makeFormTextInput("Insured 8-First Name"),
                makeFormTextInput("Insured 8-Last Name"),
                makeFormTextInput("Insured 8-Date of Birth"),
                makeFormTextInput("Insured 8-Government Issued ID Number"),                
                makeFormTextInput("Insured 8-Home Country"),
                makeFormTextInput("Insured 8-Country of Citizenship"),                
                makeFormTextInput("Insured 8-Start Date"),
                makeFormTextInput("Insured 8-End Date")
                ]));
    endForm();
    endRow();

    endSection();        
 

    startSection("exchange-form-success", "TaiAn Patriot Exchange Information Submitted");
    startRow();
    writeText("We will email you when the online application is ready for you to complete your purchase.");
    endRow();
    endSection();

    startSection("exchange-form", "TaiAn Patriot Exchange (TaiAn Plan B) pre-application");
    writeText("Please fill in the answers in English.  You can use your preferred language if you do not know the English answer");
    startRow();
    startForm("TaiAn Patriot Exchange Application Information", "post.php", "exchange-form-success");
    document.write(makeTableWithStyle("formTable", 2, [
                makeFormTextInput("Maximum Limit per illness or injury ($50,000, $100,000, $250,000, $500,000)"),
                makeFormTextInput("Do you want a $100 per illness deductible, $250 annual deductible, or $500 annual deductible?"),
                makeFormTextInput("Primary Insured-First Name"),
                makeFormTextInput("Primary Insured-Last Name"),
                makeFormTextInput("Primary Insured-Gender"),
                makeFormTextInput("Primary Insured-Date of Birth"),
                makeFormTextInput("Primary Insured-Government Issued ID Number"),
                makeFormTextInput("Primary Insured-Country of Citizenship"),
                makeFormTextInput("Primary Insured-Home Country"), 
                makeFormTextInput("Destination country"),                
                makeFormTextInput("Primary Insured-Are you participating in a 'work and travel program'?"),   
                makeFormTextInput("Primary Insured-If yes, name of the program"),
                makeFormTextInput("Primary Insured-Are you a J2 visa holder?"),                 
                makeFormTextInput("Spouse-First Name (Leave spouse and children information blank if you are not buying insurance for them.)"),
                makeFormTextInput("Spouse-Last Name"),
                makeFormTextInput("Spouse-Gender"),
                makeFormTextInput("Spouse-Date of Birth"),
                makeFormTextInput("Spouse-Government Issued ID Number"),
                makeFormTextInput("Child 1-First Name"),
                makeFormTextInput("Child 1-Last Name"),
                makeFormTextInput("Child 1-Date of Birth"),
                makeFormTextInput("Child 1-Government Issued ID Number"),
                makeFormTextInput("Child 2-First Name"),
                makeFormTextInput("Child 2-Last Name"),
                makeFormTextInput("Child 2-Date of Birth"),
                makeFormTextInput("Child 2-Government Issued ID Number"),
                makeFormTextInput("Child 3-First Name"),
                makeFormTextInput("Child 3-Last Name"),
                makeFormTextInput("Child 3-Date of Birth"),
                makeFormTextInput("Child 3-Government Issued ID Number"),                
                makeFormTextInput("Coverage Start Date"),
                makeFormTextInput("Coverage End Date"),
                makeFormTextInput("Address"),
                makeFormTextInput("City"),
                makeFormTextInput("State/Province (US or Canada only)"),
                makeFormTextInput("Zip Code"),
                makeFormTextInput("Country"),
                makeFormTextInput("Telephone"),
                makeFormTextInput("Email Address"),
                makeFormTextInput("Email Address (2nd address optional)"),
                makeFormTextInput("Date of Departure from Home Country"),
                makeFormTextInput("Date of Return to Home Country"),
                makeFormTextInput("Date of Arrival in the U.S. (Required for non-US citizens over 65 and visiting the US)"),
                makeFormTextInput("Name of your prior student insurance provider (If you have been in the US 6 months or longer)?"),
                makeFormTextInput("Prior coverage expiration date (If you have been in the US 6 months or longer)?"),                
                makeFormTextInput("Do you want optional coverage for higher risk sports?  (Most people say no)"),                
                makeFormTextInput("Do you want the ad on benefit for loss of baggage, legal assistance, and personal liability (Most people say no)")
                ]));
    endForm();
    endRow();
    endSection(); 


    // Disable the enter key for submissions
    $('.noEnterSubmit').keypress(function(e){
        if ( e.which == 13 ) return false;
        if ( e.which == 13 ) e.preventDefault();
    });
}

function writeSectionsForApps() {
    var urlsForLang = urlsToAppIds()[getPageAttribute("l")];

    for (url in urlsForLang) {
        var name = "pivot-"+urlsForLang[url];
        startSection(name, "");
        startRow();
        writeText(loc("Annotated directions are in the top frame, the real application is below.") + " " + makeRawURL("Alternatively, see the application in a separate page.", url));
        endRow();

        startRow();
        var imgURL = "annotatedApps/index.html#l="+getPageAttribute("l")+"&p="+name;
        document.write("<iframe class='"+name+"' id='"+name+"-img"+"' src=\"JavaScript:''\" width=100% height=200></iframe>");
        endRow();

        startRow();
        document.write("<iframe class='"+name+"' id='"+name+"-url"+"' src=\"JavaScript:''\" width=100% height=1000></iframe>");
        endRow();
        endSection();
    }
}

function makeStartPivotURLWithIsTopLevel(divID, isTopLevel) {
    return '<a href="#" onclick="showPivot(\''+divID+'\'); return false;"'+ (isTopLevel ? 'class="pivot-switch">' : '>');
}

function startPivotURL(divID) {
    document.write(makeStartPivotURLWithIsTopLevel(divID, false));
}

function endPivotURL() {
    document.write('</a>');
}

function makeEndPivotURL() {
    return '</a>';
}

function makePivotURL(divID, title) {
    var urlCode = "";
    urlCode += makeStartPivotURLWithIsTopLevel(divID, false);
    urlCode += loc(title);
    urlCode += '</a>';
    return urlCode;
}

function makeSubsectionURL(subsectionsName, section, title) {
    var urlCode = "";
    urlCode += '<a href="#" id="'+section+'Link" onclick="showSubsection(\''+subsectionsName+'\', \''+section+'\'); return false;">';
    urlCode += loc(title);
    urlCode += '</a>';
    return urlCode;
}

function makeBold(str) {
    return "<strong>" + loc(str) + "</strong>";
}

function makeTopLevelURL(divID, titleString) {
    var code = "<h2>";
    code += makeStartPivotURLWithIsTopLevel(divID, true);
    code += makeBold(titleString);
    code += makeEndPivotURL();
    code += "</h2>";
    return code;
}

function writeTopLevelURL(divID, titleString) {
    document.write(makeTopLevelURL(divID, titleString));
}

function startSubsections(className) {
    document.write('<div class="'+className+'">');
}

function endSubsections() {
    document.write('</div>');
}

function startSubsection(sectionName) {
    document.write('<div id="'+sectionName+'">');
}

function endSubsection() {
    document.write('</div>');
}

function showSubsection(className, sectionName) {
    var trackName = className+"-"+sectionName;
    analyticsTrackEvent("view", trackName, 1, false);
    analyticsTrackAdView(trackName);
    analyticsTrackLanguageView(trackName);

    var relevantSubsections = $("."+className+" > div");
    for (var i = 0; i < relevantSubsections.length; i++) {
        var oldUnlink = document.getElementById(relevantSubsections[i].id+"Unlink");
        if (oldUnlink)
            oldUnlink.parentNode.removeChild(oldUnlink);

        if (relevantSubsections[i].id == sectionName) {
            relevantSubsections[i].style.display = "block";

            var link = document.getElementById(relevantSubsections[i].id+"Link");
            link.parentNode.style.backgroundColor = "#D6D6D6";
            link.style.display = "none";

            var plainText = document.createElement('div');
            plainText.setAttribute('id', relevantSubsections[i].id+"Unlink");
            plainText.innerHTML = link.innerHTML;
            link.parentNode.appendChild(plainText);
        } else {
            relevantSubsections[i].style.display = "none";

            var link = document.getElementById(relevantSubsections[i].id+"Link");
            link.parentNode.style.backgroundColor = "transparent";
            link.style.display = "block";
        }
    }
}

function startSection(divID, titleString) {
    document.write('<div id="'+divID+'" class="pivot " bi:type="pivot">');
    document.write('<h2 bi:titleflag="t1" bi:title="t1" class="heading">'+loc(titleString)+'</h2>');
}

function endSection() {
    document.write('</div>');
}

function startRow() {
    document.write('<div class="grid-row row-3">');
}

function endRow() {
    document.write('</div>');
}

function makeText(text) {
    text = loc(text);
    text = text.replace(/\n/g, '<br />');
    return '<p align="left">'+text+'</p>';
}

function writeText(text) {
    document.write(makeText(text));
}

function writeTextArea(text) {
    document.write("<div id='faketextarea' style='border: 1px solid black; width:900px; overflow:auto; margin-left:auto; margin-right:auto; ' contenteditable>");
    text = loc(text);
    text = text.replace(/\n/g, '<br />');
    document.write(text);
    document.write("</div>");
}

function makeImage(filename) {
    return '<img src="'+filename+'" width="100%"></img>';
}

function writeImage(filename) {
    document.write(makeImage(filename));
}

var formInputID = 0;
function makeFormTextInput(label) {
    var ret = "<input type='text' name='formInput"+formInputID+"' style='width:100%' class='noEnterSubmit'/><br />";
    ret += "<input type='hidden' name='formLabel"+formInputID+"' value='"+label+"'/>";
    formInputID += 1;
    return [loc(label), ret];
}

function startForm(name, target, successPage) {
    //document.write("<form name='"+name+"' action='"+target+"' method='post'>");
    document.write("<form name='"+name+"' action='http://taianfinancial.com/post.php' method='post'>");

    var map = getPageAttributes();
    map["p"] = successPage;
    var hash = getHashForMap(map);
    document.write("<input type='hidden' name='formName' value='"+name+"' />");
    document.write("<input type='hidden' name='successPage' value='/"+hash+"' />");
    var partner = getPageAttribute("partner");
    document.write("<input type='hidden' name='partnerID' value='/"+partner+"' />");
}

function endForm() {
    document.write('<center><input type="submit" value="'+loc("Submit")+'"></center>');
    document.write("</form>")
}

function makeTableWithStyle(styleClass, numColumns, cells) {
    var mergedCells = [];
    mergedCells = mergedCells.concat.apply(mergedCells, cells); // Flatten the array
    var tableCode = "";
    tableCode += '<div bi:type="highlight">';
    tableCode += '<table class="'+styleClass+'">';
    for (var i = 0; i < mergedCells.length; i++) {
        var isHeader = (i / numColumns) < 1;
        var isLeftCol = (i % numColumns) == 0;

        if (isLeftCol) {
            if (i != 0) {
                tableCode += '</tr>';
                tableCode += '<tr>';
            } else {
                tableCode += '<tr>';
            }
        }

        var style = styleClass;
        if (isHeader) {
            style += 'Header';
        } else if (isLeftCol) {
            style += 'Left';
        }

        tableCode += '<td class="' + style + '">';
        tableCode += loc(mergedCells[i]);
        tableCode += '</td>';
    }
    tableCode += '</tr>';
    tableCode += '</table>';
    tableCode += '</div>';
    return tableCode;
}

function makeTable(numColumns, cells) {
    return makeTableWithStyle("styledTable", numColumns, cells);
}

function makeRawURL(title, url) {
    var adId = getAdId();
    var hasAdId = !(typeof adId === "undefined");

    if (url.indexOf(".imglobal.com") >= 0 && hasAdId) {
        url += "&uservar="+adId;
    }
    return '<a href="'+url+'" bi:cpid="workHighlight">'+loc(title)+'</a>';
}

function makeURLWithBuyStyle(title, url, buyStyle) {
    var urlsForLang = urlsToAppIds()[getPageAttribute("l")];
    var nameForURL = (typeof urlsForLang === "undefined") ? undefined : urlsForLang[url];
    if (!(typeof nameForURL === "undefined")) {
        //return makePivotURL("pivot-"+nameForURL, title);

        var buyURL = makeRawURL(title, url);
        if (buyStyle) {
            buyURL = makeBuyStyle(buyURL);
        }
        return buyURL + makeRawURL(loc("Annotated Application"), imageURLForURL(url));
    }

    if (url.indexOf("#") == 0) {
        var referral = referralSubstitution(url.substring(1));
        if (!(typeof referral === "undefined")) {
            referral = appendPageAttributesIfNecessary(referral);
            url = "#" + referral + "&reload=1";
        }
    }

    var outputURL = makeRawURL(title, url);
    if (buyStyle) {
        outputURL = makeBuyStyle(outputURL);
    }
    
    return outputURL;
}

function makeURL(title, url) {
    return makeURLWithBuyStyle(title, url, false);
}

function makeBuyURL(title, url) {
    return makeURLWithBuyStyle(title, url, true);
}

function makeBuyStyle(text) {
    return "<h2 class=\"uglyBuyStyle\">" + text + "</h2>";
}

function makeResourceCenterURL(title, pivot) {
    return makeURL(title, "./resourcecenter/index.html#l="+getPageAttribute("l")+"&p="+pivot);
}

function makeBulletedListWithTitle(title, list) {
    var listCode = '<h2>'+loc(title)+'</h2>';
    listCode += '<ul class="styled-ul">';

    for (var i = 0; i < list.length; i++) {
        if (list[i].length > 0) {
            listCode += '<li class="styled-li">'+loc(list[i])+"</li>";
        }
    }

    listCode += "</ul>";
    return listCode;
}

function makeLinesWithTitle(title, lines) {
    var code = "";

    code += makeBold(title);
    for (var i = 0; i < lines.length; i++) {
        code += "<br />" + loc(lines[i]);
    }
    
    return makeText(code);
}

function writeLinesWithTitle(title, lines) {
    document.write(makeLinesWithTitle(title, lines));
}

function writeRowForUnitedHealthOne() {
    startRow();
    document.write(makeTableWithStyle("invisibleTable", 2, [
                makeImage("uhone.png"),
                "Major medical, short term, dental insurance, critical illness coverage for residents (in the U.S. for 1 yr or longer) of Indiana and Texas. UnitedHealthOne coverage is low cost and high quality."
                ]));
    writeText("Some example plans:");
    endRow();

    startRow();
    document.write(makeTable(2, [
                "Plan", "Highlights",

                "Short Term Medical VALUE PLAN",
                makeBulletedListWithTitle("", [
                    "Easiest Application, Great Temporatory Coverage",
                    "Maximum 11 months in TX, 5 months in IN.",
                    "Lifetime Maximum: $250,000",
                    "Deductible: $500 to $5000 per cause",
                    "Coinsurance: 20% to $4000, then Plan pays 100%",
                    "Doctor Coverage: Subject to deductible and coinsurance",
                    "Monthly Rate (deductible $2500): $35 for 25 y/o, $40 for 35 y/o, $64 for 45 y/o"
                    ]),

                "Comprehensive Major Medical PLAN 80",
                makeBulletedListWithTitle("", [
                    "Low Cost, Simple to Understand for Self-employed, Early Retirees and New Graduates",
                    "Lifetime Maximum: Unlimited",
                    "Deductible: $1500 to $10,000 per year. Deductible credit up to 50% - deductible goes down every year your expenses are under the deductible",
                    "Coinsurance: 20% to $3000, then Plan pays 100%",
                    "Doctor Coverage: Subject to deductible and coinsurance",
                    "Preventive Care: Covered 100% No Copayment, No deductible, No Coinsurance",
                    "Prescription drugs covered subject to deductible and coinsurance",
                    "Optional benefits for accidental death, accidental injury, term life insurance, vision",
                    "Monthly Rate (deductible $2500): $99 for 25 y/o, $133 for 35 y/o, $194 for 45 y/o"
                    ]),

                "Comprehensive Major Medical COPAY PLAN",
                makeBulletedListWithTitle("", [
                        "Great Comprehensive Family Coverage, More Benefits for Your Family",
                        "Lifetime Maximum: Unlimited",
                        "Deductible: $1000 to $10,000 per year. Deductible credit up to 50% - deductible goes down every year your expenses are under the deductible",
                        "Coinsurance: 30% to $5000, then Plan pays 100%",
                        "Doctor Coverage: $35 copay then 100% covered",
                        "Preventive Care: Covered 100% No Copayment, No deductible, No Coinsurance",
                        "Prescription drugs copay included",
                        "Optional benefits for accidental death, accidental injury, term life insurance, vision",
                        "Monthly Rate (deductible $2500): $106 for 25 y/o, $144 for 35 y/o, $209 for 45 y/o"
                        ]),

                "",
                makeBuyURL("Quote/Purchase UnitedHealthOne Insurance® - You can get a quote without entering any personal information.", "https://www.uhone.com/quote/GetQuote.ashx?BrokerID=AA4324968&ArrangementID=01")
                ]));

    writeText("");
    writeText("More information about these medical plans:");
    document.write(makeBulletedListWithTitle("", [
                "Deductible credit means your deductible goes down by 20% each year your medical expenses are less than your deductible. A 50% reduction in your deductible is your maximum benefit.",
                "Nationwide network gives you access to providers throughout the U.S.",
                "In Indiana and Texas dental insurance and critical illness insurance can be purchased seperately from medical coverage.",
                "All plans are available through the quote link. This includes other copay plans, high deductible health insurance, health saving accounts, self employed health insurance coverage."
                ]));

    writeText("");
    writeText("More information about UnitedHealthOne:");
    document.write(makeBulletedListWithTitle("", [
            "A UnitedHealthCare Company.",
            "Health insurance policies are issued by Golden Rule Insurance Company who has over 65 years experience serving individuals.",
            "26 million customers entrust UnitedHealthCare with their health insurance needs.",
            "\"A\" rated by A.M.Best.",
            "\"A+\" rated by Standards and Poor's.",
            "Up to 50% discounts on medical care provided by provider network access.",
            "Nearly 754,000 physicians and 5,400 hospitals in the largest national provider network."
            ]));
    endRow();


}

function writeLogoAndTitle() {
    var partnerShip = getPartnership(getPageAttribute("partner"));

    var windowTitle = partnerShip["windowTitle"];
    var logoImage = partnerShip["logoImage"];
    var logoHeight = partnerShip["logoHeight"];
    var logoWidth = partnerShip["logoWidth"];
    var pageTitle = partnerShip["pageTitle"];

    document.title = loc(windowTitle);
    document.write('<img src="'+logoImage+'" width="'+logoWidth+'" height="'+logoHeight+'" alt="'+loc(pageTitle)+'" />&nbsp;');
    document.write(loc(pageTitle));
}

function writeHeaderNote() {
    document.write("<br />");
}

function makeContactInfo() {
    var partnerShip = getPartnership(getPageAttribute("partner"));
    var contactInfo = partnerShip["contactInfo"];

    var ret = "";
    ret += "<ul>";

    for (var i = 0; i < contactInfo.length; i++) {
        ret += "<li>";
        ret += loc(contactInfo[i]);
        ret += "</li>";
    }

    ret += '<li id=\"mscom-legal-copyright\">';
    ret += loc("2013 TaiAn Financial LLC. All rights reserved.");
    ret += "</li>";
    ret += "</ul>";

    return ret;
}

function writeContactInfo() {
    document.write(makeContactInfo());
}

function writeTabs() {
    var topLevelNames = { "pivot-home": "Home",
                          "pivot-international-student": "International Scholar/Student",
                          "pivot-international-scholar": "International Scholar/Student",                          
                          "pivot-international-studentandscholar": "International Scholar/Student",
                          "pivot-scholar-student": "International Scholar/Student",
                          "pivot-j-scholar": "J Scholar",                          
                          "pivot-global-medical": "Global Medical",
                          "pivot-travel-insurance": "Travel Insurance",
                          "pivot-indiana-residents": "Indiana Residents",


                          "pivot-aboutus": "About Us"
    };

    var partnership = getPartnership(getPageAttribute("partner"));
    var tabs = partnership["tabs"];

    var topLevelLinks = [];

    if (tabs.length > 1) {
        for (var i = 0; i < tabs.length; i++) {
            topLevelLinks.push(makeTopLevelURL(tabs[i], topLevelNames[tabs[i]]));
        }
        document.write(makeTableWithStyle("invisibleTable", topLevelLinks.length, topLevelLinks));
    }
}

function getContactInfo() {
    var partnerShip = getPartnership(getPageAttribute("partner"));
    var contactInfo = partnerShip["contactInfo"];
    return contactInfo;
}

function writeDontSeeWhatYouNeedRow() {
    startRow();
    writeText("");

    var bullets = [
        makeURL("Explore other choices on your own.", "https://producer.imglobal.com/international-insurance-plans.aspx?imgac=80000699")
    ];

    bullets = bullets.concat(getContactInfo());
    bullets = bullets.concat([
                "We have plans to meet many diverse needs:",
                "Adventure Travel",
                "Multi trip travel medical insurance",
                "Student coverage for non us citizens with a visa",
                "Student coverage for US citizens abroad",
                "Coverage for professionals living outside their home country",
                "Travel insurance plans for groups traveling together",
                "More – Just ask!"
                ]);

    document.write(makeBulletedListWithTitle("Don't see what you need?", bullets));
    endRow();
}

function writePatriotTravelTable() {
    document.write(makeTable(2, [
                "Plan", makeRawURL("Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                    "Coverage for individuals and dependents",
                    "Two plan designs - one for U.S. citizens and one for non-U.S. citizens traveling outside their home country",
                    "Available in daily and monthly rates",
                    "Renewable up to 24 months if 1 month or more is purchased",
                    "Freedom to seek treatment with hospital or doctor of your choice",
                    "Trip cancellation, travel delay and baggage delay benefits available",
                    "Universal Rx pharmacy discount savings",
                    "24 hour secure access from anywhere in the world to manage your account at any time",
                    "Groups of 5 or more can purchase Patriot Travel Group offering at a lower price",
                    "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays."
                    ]),


                "Who the plan is designed for",
                makeBulletedListWithTitle("", [
                    "Graduating seniors trips",
                    "Senior citizens age 65+ with or without Medicare traveling abroad",
                    "College students studying abroad",
                    "Foreign au pairs and nannies",
                    "Families sponsoring exchange students",
                    "International vacationers",
                    "Individual or group missionaries",
                    "Relatives visiting from overseas",
                    "Recently arrived immigrants"
                    ]),
                "",
                "You have enough to worry about when you're traveling. Don't let your medical coverage be an uncertainty. Patriot International® provides coverage for U.S. citizens traveling outside the U.S. with coverage for brief returns to the U.S., while Patriot America® provides coverage for non-U.S. citizens traveling outside their home country. Both plans are available for a minimum of 5 days up to a maximum of two years.",

                "",
                "The international medical plans offer excellent benefits and services to meet your global needs. You have access to international, multilingual customer service centers, claims administrators who process claims from all over the world, handling virtually every language and currency, and 24 hour access to highly qualified coordinators of emergency medical services and international treatment. You can also choose from a wide range of deductibles, several Maximum Limits, and you have access to more than 17,000 providers through the International Provider AccessSM (IPA) when seeking treatment outside the U.S.  You can also reduce your out-of-pocket costs when seeking treatment in the U.S. by locating providers through the independent Preferred Provider Organization.",
                "Patriot Travel Brochure", 
                makeBulletedListWithTitle("", [
                        makeURL("Complete Brochure English", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1801&a=80000699"),
                        makeURL("Chinese Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=2962&a=80000699"),
                        makeURL("Spanish Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1814&a=80000699"),                      
                        makeURL("Portuguese Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=2009&a=80000699")+ loc("<br />If the brochure in your language is in conflict with the English one, please follow the English one")
                        ]),

                "Group Patriot Travel Brochure", 
                makeBulletedListWithTitle("", [                
                makeURL("Complete Brochure English", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1802&a=80000699")
                        ]),
                "", makeBuyURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                "", makeBuyURL("Buy Patriot Group Travel Insurance", "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699")                

                ]));
}

function writeSectionForSchoolWaiverRequirements() {
    // School waiver requirements
    startSection("pivot-school-waiver", "School Requirements and Most Affordable Insurance Plan");


    startRow();
    writeText("Use this page to find insurance that meets your school requirements: 1) Find your school name in the first column; 2) Click on the corresponding fourth column, then you will see your school special page; 3) Follow the instructions to buy insurance that meets your school requirements.");
    endRow();


    startRow();
    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    
    startRow();
    writeText("");

    writeText("");     
    endRow(); 
    
    startRow();
    document.write(makeTable(8, [
                "Select the first letter of your school name",   
                makeSubsectionURL("school-subsections", "a-d", "A B C D"),
                makeSubsectionURL("school-subsections", "e-h", "E F G H"),
                makeSubsectionURL("school-subsections", "i-l", "I J K L"),              
                makeSubsectionURL("school-subsections", "m-p", "M N O P"),
                makeSubsectionURL("school-subsections", "q-t", "Q R S T"),
                makeSubsectionURL("school-subsections", "u-v", "U V"),               
                makeSubsectionURL("school-subsections", "w-z", "W X Y Z")
                             
                
                

                        ])
                );
    endRow();     
 
    startRow();
    writeText("");

    writeText("");     
    endRow(); 
    

    startSubsections("school-subsections");

    startSubsection("a-d");    
    
    
    
    
    startRow();
    document.write(makeTable(4,
                [
                "School Name", "F1 Visa", "J1 Visa", "Affordable Insurance that Meets School Requirements",
                
                makeURL("Albert Einstein College of Medicine at YU (NY)", "http://www.einstein.yu.edu/"),
                makeURL("School F1 requirement", "https://www.einstein.yu.edu/education/student-affairs/academic-support-counseling/personal-counseling/health-insurance.aspx"),
                makeURL("School J1 requirement", "https://www.einstein.yu.edu/administration/international-services/j-1-student/health-insurance.aspx"),
                makeURL(loc("Health insurance for ") + loc("Albert Einstein College of Medicine at YU") + loc(" Scholars"), "#iyu"),                
                
                
                makeURL("Alfred University (NY)", "http://www.alfred.edu/"),
                makeURL("School F1 requirement", "http://www.alfred.edu/iso/forms/docs/INTERNATIONALSTUDENTHANDBOOK2013-14.pdf "),
                makeURL("School J1 requirement", "http://www.alfred.edu/iso/forms/docs/INTERNATIONALSTUDENTHANDBOOK2013-14.pdf "), 
                makeURL(loc("Health insurance for ") + loc("Alfred") + loc(" International Students and Scholars"), "#ialfred"),                

                makeURL("Arizona State University (AZ)", "http://www.asu.edu/"),
                makeURL("School F1 requirement", "https://students.asu.edu/internationalstudenthealth"),
                makeURL("School J1 requirement", "https://global.asu.edu/sites/default/files/DS2019Packet.pdf"),
                makeURL(loc("Health insurance for ") + loc("Arizona State University") + loc(" Scholars"), "#iasu"), 

                makeURL("Auburn University (AL)", "http://www.auburn.edu/"),
                makeURL("School F1 requirement", "http://www.auburn.edu/academic/international/isss/insurance/waivers.php"),
                makeURL("School J1 requirement", "http://www.auburn.edu/academic/international/isss/insurance/"),
                "Consult your school about their requirements",                 

                makeURL("Babson College (MA)", "http://www.babson.edu/"),
                makeURL("School F1 requirement", "http://www.babson.edu/student-life/health-wellness/pages/insurance-requirements.aspx"),
                makeURL("School J1 requirement", "http://www.babson.edu/about-babson/global/mie/isss/visiting-scholars/Pages/health-insurance-requirement.aspx"),
                makeURL(loc("Health insurance for ") + loc("Babson College") + loc(" Scholars"), "#ibabson"),                  
                
                makeURL("Baruch College, CUNY (NY)", "http://www.baruch.cuny.edu/"),
                makeURL("School F1 requirement", "http://www.baruch.cuny.edu/studentaffairs/healthServices_ins.htm"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),  
                
                makeURL("Baylor College of Medicine (TX)", "https://www.bcm.edu/"),
                makeURL("School F1 requirement", "https://www.bcm.edu/"),
                makeURL("School J1 requirement", "https://www.bcm.edu/"),
                makeURL(loc("Health insurance for ") + loc("Baylor College of Medicine") + loc(" Scholars"), "#ibcm"),                  

                makeURL("Bellevue College (WA)", "http://bellevuecollege.edu/"),
                makeURL("School F1 requirement", "http://www.bellevuecollege.edu/isp/current-students/student-life/medical-insurance/"),
                makeURL("School J1 requirement", "http://www.bellevuecollege.edu/isp/current-students/student-life/medical-insurance/"), 
                makeURL(loc("Health insurance for ") + loc("Bellevue College") + loc(" International Students and Scholars"), "#ibvc"),                
                
                makeURL("Borough of Manhattan Community College, CUNY (NY)", "http://www.bmcc.cuny.edu/j2ee/index.jsp"),
                makeURL("School F1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),
                
                makeURL("Boston College (MA)", "http://www.bc.edu/"),
                makeURL("School F1 requirement", "http://www.bc.edu/content/bc/offices/oiss/incoming/pre/health.html"),
                makeURL("School J1 requirement", "http://www.bc.edu/content/bc/offices/oiss/scholars/department.html"),
                makeURL(loc("Health insurance for ") + loc("Boston College") + loc(" Scholars"), "#ibc"),                
                
                makeURL("Boston University (MA)", "http://www.bu.edu/"),
                makeURL("School F1 requirement", "http://www.bu.edu/studentaccountingservices/resources/medical-insurance/"),
                makeURL("School J1 requirement", "http://www.bu.edu/isso/students/current/j1/status/health-insurance.html"),
                makeURL(loc("Health insurance for ") + loc("Boston University") + loc(" Scholars"), "#ibu"),                            
                
                makeURL("Brandeis University (MA)", "http://www.brandeis.edu/"),
                makeURL("School F1 requirement", "http://heller.brandeis.edu/admissions/admitted-students/grad-selection-form-8-2011.pdf"),
                makeURL("School J1 requirement", "http://www.brandeis.edu/acserv/isso/scholar/currentscholars/healthinsurance.html"),
                makeURL(loc("Health insurance for ") + loc("Brandeis University") + loc(" Scholars"), "#ibrandeis"),
                
                makeURL("Brigham Young University (UT)", "http://www.byu.edu/"),
                makeURL("School F1 requirement", "http://health.byu.edu/index2.php?page=/faq/hpfaq.php#2"),
                makeURL("School J1 requirement", "https://internationalservices.byu.edu/content/insurance"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),

                makeURL("Bronx Community College, CUNY (NY)", "http://www.bcc.cuny.edu/"),
                makeURL("School F1 requirement", "http://www.bcc.cuny.edu/InternationalStudents/?page=InternationalResources"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),

                makeURL("Brooklyn College, CUNY (NY)", "http://www.brooklyn.cuny.edu/"),
                makeURL("School F1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),
                
                makeURL("Brown University (RI)", "http://www.brown.edu/"),
                makeURL("School F1 requirement", "http://www.universityhealthplans.com/letters/letter.cgi?school_id=165"),
                makeURL("School J1 requirement", "http://brown.edu/Administration/OISSS/scholars/docs/J1_health_insurance_memo.pdf"),
                makeURL(loc("Health insurance for ") + loc("Brown University") + loc(" International Students and Scholars"), "#ibrown"),
                
                makeURL("California Institute of Technology (CA)", "http://www.caltech.edu/"),
                makeURL("School F1 requirement", "http://benefits.caltech.edu/SiteDocuments/WaiverRequirements.pdf"),
                makeURL("School J1 requirement", "http://www.international.caltech.edu/maintainstatus/J1insurarnce"),
                makeURL(loc("Health insurance for ") + loc("Caltech") + loc(" International Students and Scholars"), "#icaltech"),                
                
                makeURL("California State University - Long Beach (CA)", "http://www.csulb.edu/"),
                makeURL("School F1 requirement", "http://www.ccpe.csulb.edu/international/visitor.aspx?pID=63"),
                makeURL("School J1 requirement", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/"),
                makeURL(loc("Health insurance for ") + loc("California State University - Long Beach") + loc(" Scholars"), "#icsulb"),                
                
                makeURL("California State University - Sacramento (CA)", "http://www.csus.edu/"),
                makeURL("School F1 requirement", "http://www.csus.edu/oge/international-students/newly%20admitted%20students/New-Intl-Health.html"),
                makeURL("School J1 requirement", "http://taianfinancial.com/schoolstandards/calstatesacj1092814.png"),
                makeURL(loc("Health insurance for ") + loc("California State University - Sacramento") + loc(" Students and Scholars"), "#icsus"), 
                
                makeURL("Carnegie Mellon University (PA)", "http://www.cmu.edu/"),
                makeURL("School F1 requirement", "http://www.studentaffairs.cmu.edu/oie/settlinginguides/insurance/students.html"),
                makeURL("School J1 requirement", "http://www.studentaffairs.cmu.edu/oie/forscho/j1/conditions.html"),
                makeURL(loc("Health insurance for ") + loc("Carnegie Mellon University") + loc(" Scholars"), "#icmu"),                

                makeURL("Case Western Reserve University (OH)", "http://www.case.edu"),
                makeURL("School F1 requirement", "http://studentaffairs.case.edu/medicalplan/news/4915.newx"),
                makeURL("School J1 requirement", "http://www.case.edu/finadmin/humres/ffs/j1.html"),
                makeURL(loc("Health insurance for ") + loc("Case Western Reserve") + loc(" Scholars"), "#icasew"),                

                makeURL("Cedars-Sinai Medical Center (CA)", "http://www.cedars-sinai.edu/"),
                "",
                makeURL("School J1 requirement", "http://www.cedars-sinai.edu/Research/Research-Administration/Visa-and-Intl-Services-/CSMC-Visa-Types/J-1-Visa/Maintaining-Legal-Status.aspx"),
                makeURL(loc("Health insurance for ") + loc("Cedars-Sinai Medical Center") + loc(" Scholars"), "#icedars"),

                
                makeURL("Central Washington University (WA)", "http://www.cwu.edu/"),
                makeURL("School F1 requirement", "http://www.cwu.edu/international-programs/medical-insurance"),
                makeURL("School J1 requirement", "http://www.cwu.edu/international-programs/medical-insurance"),
                makeURL(loc("Health insurance for ") + loc("Central Washington University") + loc(" International Students and Scholars"), "#icwu"),                

                makeURL("City College of New York, CUNY (NY)", "http://www.ccny.cuny.edu/"),
                makeURL("School F1 requirement", "http://www.ccny.cuny.edu/shs/health-insurance.cfm"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),                
                
                makeURL("City University of New York - CUNY (NY)", "http://www.cuny.edu/index.html"),
                makeURL("School F1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),                
                
                makeURL("Claremont School of Theology (CA)", "http://www.cst.edu/"),
                makeURL("School F1 requirement", "http://www.cst.edu/international-students/incoming-students/health-insurance/"),
                makeURL("School J1 requirement", "http://www.cst.edu/international-students/visiting-scholars/"),
                makeURL(loc("Health insurance for ") + loc("Claremont School of Theology") + loc(" International Students and Scholars"), "#icst"),   

                makeURL("Clark University (MA)", "http://www.clarku.edu/"),
                makeURL("School F1 requirement", "http://www.clarku.edu/offices/business/businessmanager/docs/insurance_international_students.pdf"),
                makeURL("School J1 requirement", "http://www.clarku.edu/offices/oia/international/insurance.cfm"),
                makeURL(loc("Health insurance for ") + loc("Clark University") + loc(" Scholars"), "#iclarku"),                 
                
                makeURL("Clemson University (SC)", "http://www.clemson.edu/"),
                makeURL("School F1 requirement", "http://www.clemson.edu/campus-life/campus-services/redfern/insurance/faq.html#tuitionfees"),
                makeURL("School J1 requirement", "http://www.clemson.edu/administration/ia/services/students/scholars.html#maintain"),
                makeURL(loc("Health insurance for ") + loc("Clemson University") + loc(" Scholars"), "#iclemson"),
                
                makeURL("Cleveland State University (OH)", "http://www.csuohio.edu/"),
                makeURL("School F1 requirement", "http://www.csuohio.edu/offices/health/InsuranceWaiver.html"),
                makeURL("School J1 requirement", "http://www.csuohio.edu/offices/international/academic/exchange_visitors/exchange_form.html"),
                makeURL(loc("Health insurance for ") + loc("Cleveland State University") + loc(" Scholars"), "#icsuohio"),
 
                makeURL("College of Staten Island, CUNY (NY)", "http://www.csi.cuny.edu/"),
                makeURL("School F1 requirement", "http://www.csi.cuny.edu/studentaffairs/healthservices/insurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),
 
                makeURL("Colorado State University (CO)", "http://www.colostate.edu/"),
                makeURL("School F1 requirement", "http://health.colostate.edu/student-health-insurance/international-student-health-insurance/"),
                makeURL("School J1 requirement", "http://wsnet.colostate.edu/cwis30/websites/isss/forms/DS2019_Initial_Request_Packet.pdf"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("Columbia University (NY)", "http://www.columbia.edu/"),
                makeURL("School F1 requirement", "http://health.columbia.edu/insurance/enroll-upgrade-waive/request-waiver"),
                makeURL("School J1 requirement", "http://www.columbia.edu/cu/isso/visa/scholar/J_health.html"),
                makeURL(loc("Health insurance for ") + loc("Columbia University") + loc(" Scholars"), "#icolumbia"),
 
                "Confucius Institute (World Wide)",
                makeURL("", ""),
                makeURL("J1 insurance requirement", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/"),
                makeURL("TaiAn International Health Insurance for Confucius Institutes", "#confucius"),
                
                makeURL("Cornell University (NY)", "http://www.cornell.edu/"),
                makeURL("School F1 requirement", "http://www.gannett.cornell.edu/insurance/undergrads/enrollment/"),
                makeURL("School J1 requirement", "http://www.isso.cornell.edu/academicstaff/j1insurance.php"),
                makeURL(loc("Health insurance for ") + loc("Cornell University") + loc(" Scholars"), "#icornell"),               

                makeURL("CUNY Graduate Center, CUNY (NY)", "http://www.gc.cuny.edu/Home"),
                makeURL("School F1 requirement", "http://www.gc.cuny.edu/CUNY_GC/media/CUNY-Graduate-Center/PDF/Health/Health_and_Insurance_Guide.pdf?ext=.pdf"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),                
                
                makeURL("CUNY Graduate School of Journalism, CUNY (NY)", "http://www.journalism.cuny.edu/"),
                makeURL("School F1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),
                
                makeURL("CUNY School of Law, CUNY (NY)", "http://www.law.cuny.edu/index.html"),
                makeURL("School F1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"), 

                makeURL("CUNY School of Professional Studies, CUNY (NY)", "http://sps.cuny.edu/"),
                makeURL("School F1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),                
                
                makeURL("Dartmouth College (NH)", "http://www.dartmouth.edu/"),
                makeURL("School F1 requirement", "http://www.dartmouth.edu/~health/depts/insurance/waiver04.html"),
                makeURL("School J1 requirement", "http://www.dartmouth.edu/~ovis/updates/j1/health.html"),
                makeURL(loc("Health insurance for ") + loc("Dartmouth College") + loc(" Scholars"), "#idartmouth"),                
                
                makeURL("Depaul University (IL)", "http://www.depaul.edu/Pages/default.aspx"),
                makeURL("School F1 requirement", "http://oiss.depaul.edu/FAQ/index.asp"),
                makeURL("School J1 requirement", "http://oiss.depaul.edu/docs/J-1_EV_health_insurance_requirements.pdf"),
                makeURL(loc("Health insurance for ") + loc("Depaul University") + loc(" International Students and Scholars"), "#idepaul"),                

                makeURL("Drexel University (PA)", "http://www.drexel.edu/"),
                makeURL("School F1 requirement", "http://drexel.edu/healthservices/insurance-immunizations/health-insurance/health-insurance-international/"),
                makeURL("School J1 requirement", "http://drexel.edu/studentaffairs/get_involved/international_students_scholars/hiring_fn/j1_scholars/"),
                makeURL(loc("Health insurance for ") + loc("Drexel University") + loc(" Scholars"), "#idrexel"),


                
                makeURL("Duke University (NC)", "http://www.duke.edu/"),
                makeURL("School F1 requirement", "http://studentaffairs.duke.edu/studenthealth/health-insurance/waiver-criteria-review"),
                makeURL("School J1 requirement", "http://www.visaservices.duke.edu/J_Health_Insurance.html"),
                "Consult your school about their requirements"

                ]));
                endRow(); 
                
                startRow(); 
                writeText("");                
                endRow(); 

                endSubsection();



                startSubsection("e-h"); 
                
                startRow();
                document.write(makeTable(4,
                [
                "School", "F1 Visa", "J1 Visa", "Affordable Insurance that Meets School Requirements",

                
                makeURL("Emory University (GA)", "http://www.emory.edu/"),
                makeURL("School F1 requirement", "http://www.gs.emory.edu/financial_support/health.html"),
                makeURL("School J1 requirement", "http://www.emory.edu/isss/scholars/maintaining_j1_status_scholars/health_insurance.html"),
                makeURL(loc("Health insurance for ") + loc("Emory University") + loc(" Scholars"), "#iemory"),

                makeURL("Florida Atlantic University (FL)", "http://www.fau.edu/"),
                makeURL("School F1 requirement", "http://www.fau.edu/shs/PDFs/Alternate_Insurance_Form_2014_2015.pdf"),
                makeURL("School J1 requirement", "http://www.fau.edu/isss/pdf/INSURANCE_COMPLIANCE_FORM_FOR_J_Exhange_VIsitors_Formfill.pdf"),
                makeURL(loc("Health insurance for ") + loc("Florida Atlantic University") + loc(" International Students and Scholars"), "#ifau"),                

                makeURL("Florida Gulf Coast University (FL)", "http://www.fgcu.edu"),
                makeURL("School F1 requirement", "http://www.fgcu.edu/International/Information/MedicalInsuranceCompliance_3pg_form_090413.pdf"),
                makeURL("School J1 requirement", "http://www.fgcu.edu/International/Information/Sickness_and_Accident_Insurance_Verification_Form_2013.pdf"),
                makeURL(loc("Health insurance for ") + loc("Florida Gulf Coast University") + loc(" International Students and Scholars"), "#ifgcu"),
                
                makeURL("Florida International University (FL)", "https://www.fiu.edu/"),
                makeURL("School F1 requirement", "http://studenthealth.fiu.edu/_assets/docs/Forms/Insurance%20Forms/Alternate%20Insurance%20Compliance%20Form%202013%20to%202014.pdf"),
                makeURL("School J1 requirement", "http://isss.fiu.edu/j1scholars_health.htm"),
                makeURL("Health insurance for Florida International University Students", "#ifiu"),
                
                makeURL("Florida State University (FL)", "http://www.fsu.edu/"),
                makeURL("School F1 requirement", "http://studentinsurance.fsu.edu/forms/comparable_coverage_international.pdf"),
                makeURL("School J1 requirement", "http://cge.fsu.edu/intlScholars/healthinsurance.html"),
                makeURL(loc("Health insurance for ") + loc("Florida State University") + loc(" International Students and Scholars"), "#ifsu"),
                
                makeURL("Fordham University (NY)", "http://www.fordham.edu/"),
                makeURL("School F1 requirement", "http://www.fordham.edu/academics/office_of_the_provos/international_educat/office_for_internati/current_students/health_and_safety/health_insurance_inf/"),
                makeURL("School J1 requirement", "http://www.fordham.edu/academics/office_of_the_provos/international_educat/office_for_internati/current_students/health_and_safety/health_insurance_inf/"),
                makeURL(loc("Health insurance for ") + loc("Fordham University") + loc(" International Students and Scholars"), "#ifordham"),                
                
                makeURL("George Mason University (VA)", "http://www.gmu.edu/"),
                makeURL("School F1 requirement", "http://shs.gmu.edu/insurance/international/insurance-waiver/"),
                makeURL("School J1 requirement", "http://shs.gmu.edu/insurance/j-1-visiting-scholars/"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("Georgetown University (DC)", "http://www.georgetown.edu/"),
                makeURL("School F1 requirement", "http://studenthealth.georgetown.edu/insurance/requirements/full-time/waiver/approval/"),
                makeURL("School J1 requirement", "http://internationalservices.georgetown.edu/j-1scholars/healthinsurance/"),
                makeURL(loc("Health insurance for ") + loc("Georgetown University") + loc(" Scholars"), "#igeorgetown"),
                
                makeURL("George Washington University (DC)", "http://www.gwu.edu/"),
                makeURL("School F1 requirement", "http://studenthealth.gwu.edu/student-health-insurance"),
                makeURL("School J1 requirement", "http://gwired.gwu.edu/iso/CurrentScholarsJ1/HealthInsuranceRequirementforJ1ExchangeVisitors"),
                makeURL(loc("Health insurance for ") + loc("George Washington University") + loc(" Scholars"), "#igwu"),
                
                makeURL("Georgia Institute of Technology", "http://www.gatech.edu/"),
                makeURL("School F1 requirement", "http://www.health.gatech.edu/finance/Pages/insurance.aspx"),
                makeURL("School J1 requirement", "http://www.oie.gatech.edu/scholars/procedures"),
                "Consult your school about their requirements", 
                
                makeURL("Georgia Regents University (GA)", "http://www.gru.edu/"),
                makeURL("School F1 requirement", "http://www.gru.edu/shs/waiver.php"),
                makeURL("School J1 requirement", "http://www.gru.edu/diversity/ipso/students/j1students.php"),
                makeURL(loc("Health insurance for ") + loc("Georgia Regents University") + loc(" Scholars"), "#igru"),                
                
                makeURL("Georgia Southern (GA)", "www.georgiasouthern.edu/"),
                makeURL("School F1 requirement", "http://auxiliary.georgiasouthern.edu/healthservices/accepted-insurance-plans/"),
                makeURL("School J1 requirement", "http://academics.georgiasouthern.edu/international/files/Hosting-an-Exchange-Visitor-Professor-or-Research-Scholar.pdf"),
                makeURL(loc("Health insurance for ") + loc("Georgia Southern University") + loc(" Scholars"), "#igeorgiasouthern"),                
                
                makeURL("Georgia State University", "http://www.gsu.edu/"),
                makeURL("School F1 requirement", "http://isss.gsu.edu/files/2013/02/Updated-FAQ.pdf"),
                makeURL("School J1 requirement", "http://isss.gsu.edu/files/2014/08/J-1-Insurance-Compliance-Form.pdf"),
                makeURL(loc("Health insurance for ") + loc("Georgia State University") + loc(" International Students and Scholars"), "#igsu"),
                
                makeURL("Harvard University and Harvard Medical School(MA)", "http://www.harvard.edu/"),
                makeURL("School F1 requirement", "http://hushp.harvard.edu/waiver-checklist"),
                makeURL("School J1 requirement", "http://hio.harvard.edu/health-care-scholars"),
                makeURL(loc("Health insurance for ") + loc("Harvard University and Harvard Medical School") + loc(" International Students and Scholars"), "#iharvard"),

                makeURL("Hostos Community College, CUNY (NY)", "http://www.hostos.cuny.edu/"),
                makeURL("School F1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),
                
                makeURL("Hunter College, CUNY (NY)", "http://www.hunter.cuny.edu/main/"),
                makeURL("School F1 requirement", "http://www.hunter.cuny.edu/studentservices/counseling-and-wellness/wellness/health-insurance-for-international-students"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny") 
                 
                ]));
                endRow();   

                startRow(); 
                writeText("");                
                endRow();                

                endSubsection();



                startSubsection("i-l"); 
                
                startRow();
                document.write(makeTable(4,
                [
                "School", "F1 Visa", "J1 Visa", "Affordable Insurance that Meets School Requirements",                

                makeURL("Illinois Institute of Technology (IL)", "http://web.iit.edu/"),
                makeURL("School F1 requirement", "http://iit.edu/shwc/insurance/"),
                makeURL("School J1 requirement", "http://www.iit.edu/~internat/faculty%20and%20scholars/j1.php"),
                makeURL(loc("Health insurance for ") + loc("Illinois Institute of Technology") + loc(" Scholars"), "#iiit"), 
                
                makeURL("Indiana University-Bloomington", "http://www.iub.edu/"),
                makeURL("School F1 requirement", "http://ois.iu.edu/living-working/health/insurance/waiver.shtml"),
                makeURL("School J1 requirement", "http://ois.iu.edu/living-working/health/insurance/index.shtml"),
                makeURL(loc("Health insurance for ") + loc("Indiana University-Bloomington") + loc(" International Students and Scholars"), "#iiu"),
                
                makeURL("Indiana University Purdue University-Indianapolis", "http://www.iupui.edu/"),
                makeURL("School F1 requirement", "http://iservices.iupui.edu/health-insurance/students/"),
                makeURL("School J1 requirement", "http://iservices.iupui.edu/health-insurance/scholars/"),
                makeURL("Health Insurance for IUPUI International Students and Scholars", "#iiupui"),
                
                makeURL("Iowa State University (IA)", "http://www.iastate.edu/"),
                makeURL("School F1 requirement", "http://www.hrs.iastate.edu/sship/docs/MandatoryHealthInsuranceInternationalStudents.pdf"),
                makeURL("School J1 requirement", "https://www.isso.iastate.edu/joomla/index.php?option=com_content&view=article&id=206:health-insurance-information&catid=37&Itemid=261"),
                makeURL(loc("Health insurance for ") + loc("Iowa State University") + loc(" Scholars"), "#iiastate"),
                
                makeURL("Johns Hopkins University (MD)", "http://www.jhu.edu/"),
                makeURL("School F1 requirement", "http://web.jhu.edu/registrar/students/health"),
                makeURL("School J1 requirement", "http://oisss.jhu.edu/Presentations/Understanding%20the%20J1%20Visa%20Program.pdf"),
                makeURL(loc("Health insurance for ") + loc("Johns Hopkins University") + loc(" Scholars"), "#ijhu"),                
                
                makeURL("Johns Hopkins Medical (JHMI)", "http://www.hopkinsmedicine.org/intlsvcs/index.html"),
                makeURL("School F1 requirement", "http://ois.johnshopkins.edu/Life_in_Baltimore/Health_and_Safety/Health_Insurance/"),
                makeURL("School J1 requirement", "http://ois.johnshopkins.edu/Immigration_and_%20Visas/J1_Scholar/Maintaining_J1_Scholar_Status/Health_Insurance_Requirements/index.html"),                
                makeURL(loc("Health insurance for ") + loc("Johns Hopkins Medical") + loc(" Scholars"), "#ijhu"),                

                makeURL("John Jay College of Criminal Justice, (NY)", "http://www.jjay.cuny.edu/"),
                makeURL("School F1 requirement", "http://www.jjay.cuny.edu/1996.php"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),
                
                makeURL("Kansas State University (KS)", "http://www.k-state.edu/"),
                makeURL("School F1 requirement", "http://www.k-state.edu/isss/students/health_insurance/Waiver%20Information.html"),
                makeURL("School J1 requirement", "http://www.k-state.edu/isss/scholars-interns/j-exchange-visitor-program/info_for_ev.html"),
                makeURL(loc("Health insurance for ") + loc("Kansas State University") + loc(" Scholars"), "#ikstate"),
    
                makeURL("Kent State University (OH)", "http://www.kent.edu"),
                makeURL("School F1 requirement", "http://www.kent.edu/isss/futurestudents/upload/welcome-guide-aug-2013-4.pdf"),
                makeURL("School J1 requirement", "http://www.kent.edu/isss/scholars/upload/j1-student-and-scholar-guide.pdf"),
                makeURL(loc("Health insurance for ") + loc("Kent State University") + loc(" International Students and Scholars"), "#ikent"),                

                makeURL("Kingsborough Community College, CUNY (NY)", "http://www.kbcc.cuny.edu/Pages/default.aspx"),
                makeURL("School F1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),                

                makeURL("LaGuardia Community College, CUNY (NY)", "http://www.laguardia.cuny.edu/home/"),
                makeURL("School F1 requirement", "http://esl.lagcc.cuny.edu/inter.htm"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),
                
                makeURL("Lehigh University (PA)", "http://www.lehigh.edu/"),
                makeURL("School F1 requirement", "http://www.universityhealthplans.com/letters/letter.cgi?school_id=4"),
                makeURL("School J1 requirement", "https://global.lehigh.edu/oiss/immigration-and-visa/j-1-scholars/general-information-j-1-scholars"),
                makeURL(loc("Health insurance for ") + loc("Lehigh University") + loc(" International Students and Scholars"), "#ilehigh"),                
                
                makeURL("Lehman College, CUNY (NY)", "http://www.lehman.edu/"),
                makeURL("School F1 requirement", "http://www.lehman.edu/student-health-center/health-insurance.php"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),                
                
                makeURL("LSU Baton Rouge(LA)", "http://www.lsu.edu"),
                makeURL("School F1 requirement", "http://international.lsu.edu/IS/current/insuranceinfo-private.php"),
                makeURL("School J1 requirement", "http://international.lsu.edu/IS/faculty/J-1Exchange.php"),
                makeURL(loc("Health insurance for ") + loc("Louisiana State University") + loc(" International Students and Scholars"), "#ilsu")

                ]));
                endRow();   

                 startRow(); 
                writeText("");                
                endRow();               

                endSubsection();



                startSubsection("m-p"); 
                
                startRow();
                document.write(makeTable(4,
                [
                "School", "F1 Visa", "J1 Visa", "Affordable Insurance that Meets School Requirements",
 
                makeURL("Marine Biological Laboratory (MA)", "http://www.mbl.edu/"),
                makeURL("School F1 requirement", "http://www.mbl.edu/foreign-nationals/exchange-visitors-program/"),
                makeURL("School J1 requirement", "http://www.mbl.edu/foreign-nationals/exchange-visitors-program/"),
                makeURL(loc("Health insurance for ") + loc("Marine Biological Laboratory") + loc(" Scholars"), "#imbl"),
 
                makeURL("Massachusetts Institute of Technology (MA)", "http://web.mit.edu/"),
                makeURL("School F1 requirement", "http://medweb.mit.edu/healthplans/student/waiver.html#requirements"),
                makeURL("School J1 requirement", "http://web.mit.edu/scholars/intlscholars/healthinsurance/j1requirements.html"),
                makeURL(loc("Health insurance for ") + loc("MIT") + loc(" Scholars"), "#imit"),

                makeURL("Medgar Evers College, CUNY (NY)", "http://www.mec.cuny.edu/"),
                makeURL("School F1 requirement", "http://www.mec.cuny.edu/Division-of-Student-Affairs/healthservices.aspx"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),                
                
                makeURL("Medical University of South Carolina (MUSC) (SC)", "http://academicdepartments.musc.edu/musc/"),
                makeURL("School F1 requirement", "http://academicdepartments.musc.edu/esl/studenthealth/student_resources/healthinsinfo.html"),
                makeURL("School J1 requirement", "http://academicdepartments.musc.edu/immigrationservices/j1procedures.html"),
                makeURL(loc("Health insurance for ") + loc("MUSC") + loc(" Scholars"), "#imusc"),                
                
                makeURL("Michigan State University (MI)", "http://www.msu.edu/"),
                makeURL("School F1 requirement", "http://oiss.isp.msu.edu/students/health/waiver.htm"),
                makeURL("School J1 requirement", "http://oiss.isp.msu.edu/documents/scholars/DS2019_Scholar_Extension.pdf"),
                makeURL(loc("Health insurance for ") + loc("MSU") + loc(" Scholars"), "#imsu"),                
                
                makeURL("Mississippi State University (MS)", "http://www.msstate.edu/"),
                makeURL("School F1 requirement", "http://admissions.msstate.edu/international/apply/insurance.php"),
                makeURL("School J1 requirement", "http://international.msstate.edu/current/services/"),
                makeURL(loc("Health insurance for ") + loc("Mississippi State University") + loc(" Scholars"), "#imsstate"),
                
                makeURL("Morgan State University (MD)", "http://www.morgan.edu/"),
                makeURL("School F1 requirement", "https://www.formstack.com/forms/ais-msuwaiver_form__20142015"),
                makeURL("School J1 requirement", "http://www.morgan.edu/Documents/ADMINISTRATION/Student%20Affairs/IntlServices/J1%20Insurance%20Overview.pdf"),
                makeURL(loc("Health insurance for ") + loc("Morgan State University") + loc(" International Students and Scholars"), "#imorgan"),                
                
                
                makeURL("Murray State University (KY)", "http://www.murraystate.edu/"),
                makeURL("School F1 requirement", "http://www.murraystate.edu/Students/International/IIS/StudentScholarServices/HealthcareInsurance.aspx"),
                makeURL("School J1 requirement", "http://www.murraystate.edu/Students/International/IIS/StudentScholarServices/HealthcareInsurance.aspx"), 
                makeURL(loc("Health insurance for ") + loc("Murray State University") + loc(" International Students and Scholars"), "#imurraystate"),  

                makeURL("National Institute of Health (MD)", "http://www.nih.gov/"),
                makeURL("F1 requirement", "http://dis.ors.od.nih.gov/visitingprogram/04_vprequirements.html#health"),
                makeURL("J1 requirement", "http://dis.ors.od.nih.gov/forms/NH829_6.PDF"),
                makeURL(loc("Health insurance for ") + loc("National Institute of Health") + loc(" International Students and Scholars"), "#inih"),                   
                
                makeURL("New Jersey Institute of Technology (NJ)", "http://www.njit.edu/"),
                makeURL("School F1 requirement", "http://www.njit.edu/healthservices/insurance/index.php"),
                makeURL("School J1 requirement", "http://www.njit.edu/humanresources/divisions/employment/request_for_DS-2019_J-1_status_sponsorship.pdf"),
                makeURL(loc("Health insurance for ") + loc("New Jersey Institute of Technology") + loc(" Scholars"), "#injit"),

                makeURL("New School (NY)", "http://www.newschool.edu/"),
                makeURL("School F1 requirement", "https://www.universityhealthplans.com/secure/waiver.cgi"),
                makeURL("School J1 requirement", "https://www.newschool.edu/international-student-services/resources/health-insurance-for-internationals/"),
                makeURL(loc("Health insurance for ") + loc("New School") + loc(" Scholars"), "#inewschool"),  

                makeURL("New York Blood Center (NY)", "http://nybloodcenter.org/"),
                "",
                makeURL("J1 requirement", "http://nybloodcenter.org/"),
                makeURL(loc("Health insurance for ") + loc("New York Blood Center") + loc(" Scholars"), "#inybloodcenter"),                

                makeURL("New York City College of Technology, CUNY (NY)", "http://www.citytech.cuny.edu/"),
                makeURL("School F1 requirement", "http://www.citytech.cuny.edu/files/admissions/handbook.pdf"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),
                
                makeURL("New York University and NYU Poly (NY)", "http://www.nyu.edu/"),
                makeURL("School F1 requirement", "http://www.nyu.edu/global/international-immigration-services/students/inbound-to-nyc/pre-arrival/required-health-insurance-coverage.html"),
                makeURL("School J1 requirement", "http://www.nyu.edu/global/international-immigration-services/faculty-and-scholars/inbound-to-nyc/pre-arrival/exchange-visitor/health-insurance-requirement.html"),
                makeURL(loc("Health insurance for ") + loc("New York University and NYU Poly") + loc(" Scholars"), "#inyu"),
                
                makeURL("New York Institute of Technology (NY)", "http://www.nyit.edu/"),
                makeURL("School F1 requirement", "http://www.nyit.edu/health_and_wellness/insurance/"),
                makeURL("School J1 requirement", "http://www.nyit.edu/health_and_wellness/insurance/"),
                makeURL(loc("Health insurance for ") + loc("NYIT") + loc(" Scholars"), "#inyit"),                
                
                makeURL("North Carolina State University (NC)", "http://www.ncsu.edu/"),
                makeURL("School F1 requirement", " http://healthcenter.ncsu.edu/insurance/"),
                makeURL("School J1 requirement", "http://www.ncsu.edu/ois/research/j1require.php"),
                makeURL(loc("Health insurance for ") + loc("North Carolina State University") + loc(" Scholars"), "#incsu"),

                makeURL("Northeastern State University (OK)", "http://www.nsuok.edu/"),
                makeURL("School F1 requirement", "http://offices.nsuok.edu/studentaffairs/StudentHealthServices/ForParents.aspx"),
                makeURL("School J1 requirement", "http://offices.nsuok.edu/studentaffairs/StudentHealthServices/ForParents.aspx"),
                makeURL(loc("Health insurance for ") + loc("Northeastern State University") + loc(" Students and Scholars"), "#insuok"),               
                
                makeURL("Northeastern University (MA)", "http://www.northeastern.edu/"),
                makeURL("School F1 requirement", "http://www.northeastern.edu/issi/insurance.html"),
                makeURL("School J1 requirement", "http://www.northeastern.edu/issi/insurance.html"),
                makeURL(loc("Health insurance for ") + loc("Northeastern University") + loc(" Scholars"), "#inortheastern"),
                
                makeURL("Northwest University (WA)", "http://www.northwestu.edu/"),
                makeURL("School F1 requirement", "http://www.northwestu.edu/international/undergraduate/requirements/"),
                makeURL("School J1 requirement", "http://www.northwestu.edu/international/undergraduate/requirements/"),
                "Consult your school about their requirements",
                
                makeURL("Northwestern University (IL)", "http://www.northwestern.edu/"),
                makeURL("School F1 requirement", "http://www.northwestern.edu/risk/insurance/student-health/waiver-process.html"),
                makeURL("School J1 requirement", "http://www.northwestern.edu/risk/insurance/visiting-scholar/waiver-process.html"),                
                makeURL("Health Insurance for Northwestern University J2/F2 dependents", "#inorthwestern"),

                makeURL("Nova Southeastern University (FL)", "http://www.nova.edu/"),
                makeURL("School F1 requirement", "http://aisstudentinsurance.com/nsu"),
                makeURL("School J1 requirement", "http://www.nova.edu/internationalstudents/forms/exchange_visitor_req.pdf"),
                makeURL(loc("Health insurance for ") + loc("Nova Southeastern University") + loc(" Scholars"), "#inova"),
                
                makeURL("Oakland University (CA)", "https://www.oakland.edu/"),
                makeURL("School F1 requirement", "http://www.oakland.edu/?id=23748&sid=115"),
                makeURL("School J1 requirement", "http://www.oakland.edu/?id=29333&sid=115"),
                makeURL(loc("Health insurance for ") + loc("Oakland University") + loc(" Scholars"), "#ioakland"),                

                makeURL("Ohio University (OH)", "http://www.ohio.edu/"),
                makeURL("School F1 requirement", "http://www.ohio.edu/isfs/arrival/livinginathens.htm#health"),
                makeURL("School J1 requirement", "http://www.ohio.edu/isfs/forms/pdf/evhealthinsurance.pdf"),
                makeURL(loc("Health insurance for ") + loc("Ohio University") + loc(" Scholars"), "#iohio"), 
                
                makeURL("Ohio State University-Columbus(OH)", "http://www.osu.edu/"),
                makeURL("School F1 requirement", "http://shi.osu.edu/coverage-comparison-tools/"),
                makeURL("School J1 requirement", "http://oia.osu.edu/int-scholars/j-1-visiting-scholars/required-health-insurance.html"),
                "Consult your school about their requirements",
                
                makeURL("Oklahoma State University System (OK)", "http://www.system.okstate.edu/"),
                makeURL("School F1 requirement", "https://uhs.okstate.edu/mandatory-insurance#buy_insurance"),
                makeURL("School J1 requirement", "http://iss.okstate.edu/sites/iss.okstate.edu/files/files/docs/HostingEVChecklist.pdf"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("Oregon State University (OR)", "http://oregonstate.edu/"),
                makeURL("School F1 requirement", "http://studenthealth.oregonstate.edu/internationalplan"),
                makeURL("School J1 requirement", "http://oregonstate.edu/international/sites/default/files/atosu/insurance.pdf"),
                makeURL(loc("Health insurance for ") + loc("Oregon State University") + loc(" Scholars"), "#ioregonstate"),
                
                makeURL("Parkland College (IL)", "http://www.parkland.edu/"),
                makeURL("School F1 requirement", "http://www.parkland.edu/international"),
                makeURL("School J1 requirement", "http://www.parkland.edu/international"),
                makeURL(loc("Health insurance for ") + loc("Parkland College") + loc(" International Students and Scholars"), "#iparkland"),                 

                makeURL("Pennington Biomedical Research Center - LSU (LA)", "http://pbrc.edu"),
                makeURL("School F1 requirement", "http://pbrc.edu"),
                makeURL("School J1 requirement", "http://pbrc.edu"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("Pennsylvania State University System (PA)", "http://www.psu.edu/"),
                makeURL("School F1 requirement", "http://studentaffairs.psu.edu/health/services/insurance/waiver.shtml"),
                makeURL("School J1 requirement", "http://global.psu.edu/info/internationals-psu/scholars/becoming-scholar/scholars-medical-insurance"),
                "Consult your school about their requirements",
                
                makeURL("Princeton University (NJ)", "http://www.princeton.edu/"),
                makeURL("School F1 requirement", "http://www.princeton.edu/uhs/student-insurance/student-health-plan/"),
                makeURL("School J1 requirement", "http://www.princeton.edu/intlctr/scholars/new-scholarsfaculty/j-1-exchange-visitor/health-insurance-requirem/"),
                makeURL(loc("Health insurance for ") + loc("Princeton") + loc(" Scholars"), "#iprinceton"),
                
                makeURL("Purdue University (IN)", "http://www.purdue.edu/"),
                makeURL("School F1 requirement", "http://www.purdue.edu/push/insurance/waivers.shtml"),
                makeURL("School J1 requirement", "http://www.iss.purdue.edu/Current/J1/HealthInsurance.cfm"),
                makeURL(loc("Health insurance for ") + loc("Purdue University") + loc(" International Students and Scholars"), "#ipurdue")
                
                ]));
                endRow();   

                startRow(); 
                writeText("");                
                endRow();                

                endSubsection();



                startSubsection("q-t"); 
                
                startRow();
                document.write(makeTable(4,
                [
                "School", "F1 Visa", "J1 Visa", "Affordable Insurance that Meets School Requirements",                
                
 
                makeURL("Queens College, CUNY (NY)", "http://www.qc.cuny.edu/Pages/home.aspx"),
                makeURL("School F1 requirement", "http://www.qc.cuny.edu/StudentLife/services/health/Pages/Health%20Insurance.aspx#internationalstudent"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),
                
                makeURL("Queensborough Community College, CUNY (NY)", "http://www.qcc.cuny.edu/"),
                makeURL("School F1 requirement", "http://www.qcc.cuny.edu/ISA/f1.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny"),                
                
                makeURL("Rensselaer Polytechnic Institute (NY)", "http://www.rpi.edu/"),
                makeURL("School F1 requirement", "http://studenthealth.rpi.edu/insurance.php?catid=1035"),
                makeURL("School J1 requirement", "http://doso.rpi.edu/update.do?artcenterkey=494"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("Rice University (TX)", "http://www.riceinfo.rice.edu/"),
                makeURL("School F1 requirement", "http://studenthealthinsurance.rice.edu/waiverrequirements/"),
                makeURL("School J1 requirement", "http://oiss.rice.edu/uploadedFiles/Docs/J-1%20Health%20Insurance%20Information.pdf"),
                makeURL(loc("Health insurance for ") + loc("Rice University") + loc(" International Students and Scholars"), "#irice"),

                makeURL("Rudolf Steiner College (CA)", "http://www.steinercollege.edu/"),
                makeURL("School F1 requirement", "http://www.steinercollege.edu/international"),
                makeURL("School J1 requirement", "http://www.steinercollege.edu/international"),
                makeURL(loc("Health insurance for ") + loc("Rudolf Steiner College") + loc(" International Students and Scholars"), "#isteinercollege"),                
                
                makeURL("Rush University (IL)", "http://www.rushu.rush.edu/sp/Pages/Home.aspx"),
                makeURL("School F1 requirement", "http://www.rushu.rush.edu/servlet/Satellite?c=RushUnivLevel2Page&cid=1269228871069&pagename=Rush%2FRushUnivLevel2Page%2FLevel_2_Student_Services_Area_Page"),
                makeURL("School J1 requirement", "http://www.rushu.rush.edu/sp/Pages/Home.aspx"),
                makeURL(loc("Health insurance for ") + loc("Rush University, Medical College, College of Nursing, <br/>Graduate College, and College of Health Sciences") + loc(" Scholars"), "#irushu"),                

                
                makeURL("Rutgers University (NJ)", "http://www.rutgers.edu/"),
                makeURL("School F1 requirement", "http://internationalservices.rutgers.edu/content/Center_Staff_Services_and_Programs/Health_Insurance_Program/Rutgers_Health_Insurance_Requirement.html"),
                makeURL("School J1 requirement", "http://internationalservices.rutgers.edu/forms/Insurance_Information_for_DS-2019_Request_Form.pdf"),
                "Consult your school about their requirements",
                
                makeURL("San Diego State University", "http://www.sdsu.edu/"),
                makeURL("School F1 requirement", "http://www.isc.sdsu.edu/content/Future/HealthInsurance.html"),
                makeURL("School J1 requirement", "http://www.isc.sdsu.edu/content/Future/HealthInsurance.html"),
                "Consult your school about their requirements",
 
                makeURL("Scripps Research Institute (CA, FL)", "http://www.scripps.edu/"),
                makeURL("School F1 requirement", "http://www.scripps.edu/resources/isso/"),
                makeURL("School J1 requirement", "http://www.scripps.edu/resources/isso/evpinsurance.html"),
                makeURL(loc("Health insurance for ") + loc("Scripps Research Institute") + loc(" International Students and Scholars"), "#iscripps"),                
                
                makeURL("Shawnee State University (OH)", "http://www.shawnee.edu/"),
                makeURL("School F1 requirement", "http://www.shawnee.edu/offices/international-students/media/pdf/J1-QA.pdf"),
                makeURL("School J1 requirement", "http://www.shawnee.edu/offices/international-students/media/pdf/J1-QA.pdf"),
                makeURL(loc("Health insurance for ") + loc("Shawnee State University") + loc(" International Students and Scholars"), "#ishawnee"),                

                makeURL("Smithsonian Institutions", "http://www.si.edu/"),
                "",
                makeURL("J1 requirement", "http://www.smithsonianofi.com/wp-content/uploads/2014/09/SI-AA-Handbook.pdf"), 
                makeURL(loc("Health insurance for ") + loc("Smithsonian Institutions") + loc(" Scholars"), "#isi"),  
                
                makeURL("Southeast Missouri State University (MO)", "http://www.semo.edu/"),
                makeURL("School F1 requirement", "http://www.semo.edu/ies/faq.html"),
                makeURL("School J1 requirement", "http://www.semo.edu/ies/visiting_scholars.html"),
                makeURL(loc("Health insurance for ") + loc("Southeast Missouri State University") + loc(" Scholars"), "#isemo"),                

                makeURL("Southern Illinois University (IL)", "http://www.siu.edu/"),
                makeURL("School F1 requirement", "http://cie.siu.edu/j1-exchange/index.html"),
                makeURL("School J1 requirement", "http://cie.siu.edu/j1-exchange/index.html"),
                makeURL(loc("Health insurance for ") + loc("Southern Illinois University") + loc(" Scholars"), "#isiu"),                

                makeURL("Stanford University (CA)", "http://www.stanford.edu/"),
                makeURL("School F1 requirement", "http://vaden.stanford.edu/insurance/waiving-cardinal-care/international-students"),
                makeURL("School J1 requirement", "http://icenter.stanford.edu/quick_reference/healthinsurance.html#J1reqs"),
                makeURL(loc("Health insurance for ") + loc("Stanford University") + loc(" International Students and Scholars"), "#ista"),                
                
                makeURL("Stevens Institute of Technology (NJ)", "http://www.stevens.edu/"),
                makeURL("School F1 requirement", "http://www.stevens.edu/sit/ssc/sfs/health-insurance-info"),
                makeURL("School J1 requirement", "http://www.stevens.edu/sit/isss/j1-scholars"),
                makeURL(loc("Health insurance for ") + loc("Stevens Institute of Technology") + loc(" International Students and Scholars"), "#istevens"),               
                
                
                makeURL("SUNY Albany (NY)", "http://www.albany.edu/"),
                makeURL("School F1 requirement", "http://www.albany.edu/ship/waiving_out.shtml"),
                makeURL("School J1 requirement", "http://www.albany.edu/isss/pdf/faculty/State%20Department%20J-1%20Health%20Insurance.pdf"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("SUNY Binghamton (NY)", "http://www.binghamton.edu/"),
                makeURL("School F1 requirement", "http://www2.binghamton.edu/isss/health-insurance/waiverinfo.html"),
                makeURL("School J1 requirement", "http://www2.binghamton.edu/isss/health-insurance/waiverinfo.html"),
                "Consult your school about their requirements",
                
                makeURL("SUNY Buffalo (NY)", "http://www.buffalo.edu/"),
                makeURL("School F1 requirement", "http://wings.buffalo.edu/intlservices/health_stu.html"),
                makeURL("School J1 requirement", "http://wings.buffalo.edu/intlservices/health_sch.html"),
                "Consult your school about their requirements",
                
                makeURL("SUNY Stony Brook (NY)", "http://www.sunysb.edu/"),
                makeURL("School F1 requirement", "http://studentaffairs.stonybrook.edu/shs/insurance/internationalinsurance.shtml"),
                makeURL("School J1 requirement", "http://studentaffairs.stonybrook.edu/shs/insurance/intl_visop.shtml"),
                "Consult your school about their requirements",
                
                makeURL("Syracuse University (NY)", "http://www.syr.edu/"),
                makeURL("School F1 requirement", "http://international.syr.edu/new-students/health-insurance/index.html"),
                makeURL("School J1 requirement", "http://international.syr.edu/international-faculty-staff/j1-exchange-visitors/index.html"),
                makeURL(loc("Health insurance for ") + loc("Syracuse University") + loc(" International Students and Scholars"), "#isyr"),                
                
                makeURL("Temple University (PA)", "http://www.temple.edu/"),
                makeURL("School F1 requirement", "http://www.temple.edu/hr/students/healthinsurance/international/summary.htm"),
                makeURL("School J1 requirement", "http://www.temple.edu/isss/general/health-j-scholar.html"),
                makeURL(loc("Health insurance for ") + loc("Temple University") + loc(" International Students and Scholars"), "#itemple"),                
                
                makeURL("Texas A&M University System (TX)", "http://www.tamu.edu/"),
                makeURL("School F1 requirement", "http://iss.tamu.edu/insurance/insurance.asp"),
                makeURL("School J1 requirement", "http://ifss.tamu.edu/J/insurance"),
                makeURL(loc("Health insurance for ") + loc("Texas A&M") + loc(" Scholars"), "#itamu"),
                
                makeURL("Texas Tech University", "http://www.ttu.edu/"),
                makeURL("School F1 requirement", "http://www.ttuhsc.edu/studenthealth/"),
                makeURL("School J1 requirement", "http://www.iaff.ttu.edu/Main/ISSS/CurrentStudentscholars/JInsReqs.asp"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("Thomas Jefferson University (PA)", "http://www.jefferson.edu/university.html"),
                makeURL("School F1 requirement", "http://www.jefferson.edu/university/international_affairs/current/f1_student_info/Healthinsurance.html"),
                makeURL("School J1 requirement", "http://www.jefferson.edu/university/international_affairs/current/J1_Exchange/j1_insurance.html"),
                makeURL(loc("Health insurance for ") + loc("Thomas Jefferson University") + loc(" Scholars"), "#ijefferson"),                
                
                makeURL("Tufts University (MA)", "http://www.tufts.edu/"),
                makeURL("School F1 requirement", "http://ase.tufts.edu/healthservice/business.htm"),
                makeURL("School J1 requirement", "http://ase.tufts.edu/icenter/life/healthcareScholar.asp"),
                makeURL(loc("Health insurance for ") + loc("Tufts University") + loc(" Scholars"), "#itufts"),
                
                makeURL("Tulane University (LA)", "http://www.tulane.edu/"),
                makeURL("School F1 requirement", "https://tulane.app.box.com/inswaiver"),
                makeURL("School J1 requirement", "https://tulane.app.box.com/inswaiver"),
                "Consult your school about their requirements"




                
                ]));
                endRow();   
                
                startRow(); 
                writeText("");                
                endRow();               

                endSubsection();



                startSubsection("u-v");
                
                startRow();
                document.write(makeTable(4,
                [
                "School", "F1 Visa", "J1 Visa", "Affordable Insurance that Meets School Requirements",                  
 
                makeURL("Union University (TN)", "http://www.UU.edu"),
                makeURL("School F1 requirement", "http://www.uu.edu/institutes/international/students/international-student-resources.cfm#insurance"),
                makeURL("School J1 requirement", "http://www.uu.edu/institutes/international/students/international-student-resources.cfm#insurance"), 
                makeURL(loc("Health insurance for ") + loc("Union University") + loc(" International Students and Scholars"), "#iuu"),                
                
                makeURL("University of Akron (OH)", "http://www.uakron.edu/"),
                makeURL("School F1 requirement", "http://www.uakron.edu/oip/immigration/f1/insurance-for-international-students.dot"),
                makeURL("School J1 requirement", "http://www.uakron.edu/oip/immigration/insurance-for-j1-scholar.dot"),
                makeURL(loc("Health insurance for ") + loc("University of Akron") + loc(" Scholars"), "#iuakron"),                
                
                makeURL("University of Alabama - Birmingham (AL)", "http://www.uab.edu/"),
                makeURL("School F1 requirement", "http://www.uab.edu/studenthealth/insurance-and-waivers/mandatory-insurance-waivers"),
                makeURL("School J1 requirement", "https://www.uab.edu/students/international/scholars"),
                "Consult your school about their requirements",
                
                makeURL("University of Alabama - Huntsville (AL)", "http://www.uah.edu/"),
                makeURL("School F1 requirement", "http://www.uah.edu/ISSO/Students/newstudents.php"),
                makeURL("School J1 requirement", "http://www.uah.edu/isso/scholars-employees/j1-scholars/maintain-status"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),

                makeURL("University of Alabama -Tuscaloosa (AL)", "http://www.ua.edu/"),
                makeURL("School F1 requirement", "http://www.uah.edu/isss/students/accepted-students"),
                makeURL("School J1 requirement", "http://is.ua.edu/international-faculty-staff/j-1-exchange-visitors/j-1-overview-categories/"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("University of Alaska - Fairbanks (AK)", "http://www.uaf.edu/"),
                makeURL("School F1 requirement", "http://www.uaf.edu/files/oip/F-1InsuranceFlyer.pdf"),
                makeURL("School J1 requirement", "http://www.uaf.edu/oip/information-for-uaf-depar/j-1-visa-category/"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("University of Arizona (AZ)", "http://www.arizona.edu/"),
                makeURL("School F1 requirement", "http://www.health.arizona.edu/pdf/insurance/Health%20Coverage%20Guidelines%20for%20an%20Exemption.pdf"),
                makeURL("School J1 requirement", "http://www.health.arizona.edu/pdf/insurance/J1%20Visiting%20Scholars%20Ins%20Requirement.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Arizona") + loc(" Scholars"), "#iarizona"),
                
                makeURL("University of Arkansas - Fayetteville(AR)", "http://www.uark.edu/"),
                makeURL("School F1 requirement", "http://iss.uark.edu/2186.php"),
                makeURL("School J1 requirement", "http://iss.uark.edu/2104.php"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("University of California Berkeley (CA)", "http://www.berkeley.edu/"),
                makeURL("School F1 requirement", "http://www.uhs.berkeley.edu/students/insurance/waiver/compcoverage.shtml"),
                makeURL("School J1 requirement", "http://www.garnett-powers.com/academics/ucb/"),
                makeURL(loc("Health insurance for ") + loc("UC Berkeley") + loc(" Scholars"), "#iucberkeley"),                
                
                makeURL("University of California Davis (CA)", "http://www.ucdavis.edu/"),
                makeURL("School F1 requirement", "http://shcs.ucdavis.edu/information/newstudent/international-ins.html"),
                makeURL("School J1 requirement", "http://siss.ucdavis.edu/resources/intl_scholar_resources/healthcare_scholars.html"),
                makeURL(loc("Health insurance for ") + loc("UC Davis") + loc(" Scholars"), "#iucdav"),
                
                makeURL("University of California Irvine (CA)", "http://www.uci.edu/"),
                makeURL("School F1 requirement", "http://www.shs.uci.edu/Health_Insurance_Privacy/Insurance.aspx#WaiverQ"),
                makeURL("School J1 requirement", "http://www.ic.uci.edu/Scholars/J-1/healthinsurance.php"),
                makeURL(loc("Health insurance for ") + loc("UC Irvine") + loc(" Scholars"), "#iuci"),
                
                makeURL("University of California Los Angeles (CA)", "http://www.ucla.edu/"),
                makeURL("School F1 requirement", "http://www.internationalcenter.ucla.edu/home/handbook/181/196/health"),
                makeURL("School J1 requirement", "http://www.internationalcenter.ucla.edu/home/J1Visa/74/75/Overview"),
                makeURL(loc("Health insurance for ") + loc("UCLA") + loc(" Scholars"), "#iucla"),
                
                makeURL("University of California Merced (CA)", "http://www.ucmerced.edu/"),
                makeURL("School F1 requirement", "http://iss.ucmerced.edu/resources/insurance"),
                makeURL("School J1 requirement", "http://iss.ucmerced.edu/professors-researchers/j-1/health-insurance"),
                makeURL(loc("Health insurance for ") + loc("UC Merced") + loc(" Scholars"), "#iucmerced"),                                
                
                
                makeURL("University of California Riverside (CA)", "http://www.ucr.edu/"),
                makeURL("School F1 requirement", "http://www.campushealth.ucr.edu/"),
                makeURL("School J1 requirement", "http://internationalscholars.ucr.edu/visa/joneinsurance.html"),
                makeURL(loc("Health insurance for ") + loc("UC Riverside") + loc(" Scholars"), "#iucr"),
               
                
                makeURL("University of California San Diego (CA)", "http://www.ucsd.edu/"),
                makeURL("School F1 requirement", "http://icenter.ucsd.edu/ispo/current/F-1/maintain-status/index.html"),
                makeURL("School J1 requirement", "http://icenter.ucsd.edu/ifso/living-in-sd/insurance/index.html"),
                makeURL(loc("Health insurance for ") + loc("UC San Diego") + loc(" Scholars"), "#iucsd"),
                
                makeURL("University of California San Francisco (CA)", "http://www.ucsf.edu/"),
                makeURL("School F1 requirement", "https://studenthealth.ucsf.edu/sites/studenthealth.ucsf.edu/files/UC%20WAIVER%20%20WORK%20SHEET%202013.pdf"),
                makeURL("School J1 requirement", "http://isso.ucsf.edu/scholars/current-scholars/j-1-scholars/health-insurance-requirement"),
                makeURL(loc("Health insurance for ") + loc("UC San Francisco") + loc(" Scholars"), "#iucsf"),
                
                makeURL("University of California Santa Barbara (CA)", "http://www.ucsb.edu/"),
                makeURL("School F1 requirement", "https://studenthealth.sa.ucsb.edu/Insurance/UCwaivercriteria.aspx"),
                makeURL("School J1 requirement", "http://oiss.sa.ucsb.edu/scholars/prospective-j-1-scholars/insurance"),
                makeURL(loc("Health insurance for ") + loc("UC Santa Barbara") + loc(" Scholars"), "#iucsb"),
                
                makeURL("University of California Santa Cruz (CA)", "http://www.ucsc.edu/"),
                makeURL("School F1 requirement", "http://healthcenter.ucsc.edu/forms/14-15-online-waiver-questions.pdf"),
                makeURL("School J1 requirement", "http://ieo.ucsc.edu/intl-scholars/j1/post-arrival-insurance.html#Federal"),
                makeURL(loc("Health insurance for ") + loc("UC Santa Cruz") + loc(" Scholars"), "#iucsc"),

                makeURL("University of Central Florida (FL)", "http://www.ucf.edu/"),
                makeURL("School F1 requirement", "http://hs.sdes.ucf.edu/docs/visa_compliance.pdf"),
                makeURL("School J1 requirement", "http://www.intl.ucf.edu/index.cfm?PageID=303"),
                makeURL(loc("Health insurance for ") + loc("University of Central Florida") + loc(" Scholars"), "#iucf"),
            
                makeURL("University of Chicago (IL)", "http://www.uchicago.edu/"),
                makeURL("School F1 requirement", "http://studenthealth.uchicago.edu/page/enrollment-and-waivers"),
                makeURL("School J1 requirement", "https://internationalaffairs.uchicago.edu/page/health-insurance-requirements-j-1-exchange-visitors"),
                makeURL(loc("Health insurance for ") + loc("University of Chicago") + loc(" Scholars"), "#iuchicago"),
                
                makeURL("University of Cincinnati (OH)", "http://www.uc.edu/"),
                makeURL("School F1 requirement", "http://www.uc.edu/uhs/student_health_insurance.html"),
                makeURL("School J1 requirement", "http://www.uc.edu/international/services/scholars/maintaining_status/health_insurance.html"),
                makeURL(loc("Health insurance for ") + loc("University of Cincinnati") + loc(" Scholars"), "#iucincinnati"),
                
                makeURL("University of Colorado at Boulder", "http://www.colorado.edu/"),
                makeURL("School F1 requirement", "http://www.colorado.edu/healthcenter/insurance"),
                makeURL("School J1 requirement", "http://www.colorado.edu/oie/sites/default/files/attached-files/21%20Insurance%20Compliance%20Form.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Colorado - Boulder") + loc(" International Students and Scholars"), "#icolorado"),                

                makeURL("University of Colorado - Denver (CO)", "http://www.ucdenver.edu"),
                makeURL("School F1 requirement", "http://www.ucdenver.edu/life/services/studentlife/healthandrecreation/HealthInsurance/Pages/InternationalStudents.aspx"),
                makeURL("School J1 requirement", "http://www.ucdenver.edu/academics/InternationalPrograms/oia/isss/HRImmigrationAdministrator/Documents/J-1%20Overview%20and%20Summary%20of%20Regulation.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Colorado - Denver") + loc(" Scholars"), "#iucdenver"),

                
                makeURL("University of Connecticut (CT)", "http://www.uconn.edu/"),
                makeURL("School F1 requirement", "http://www.shs.uconn.edu/insurance.html"),
                makeURL("School J1 requirement", "http://global.uconn.edu/about/isss/visiting-scholars/insurance-requirements-for-j-1-exchange-visitors/"),
                makeURL(loc("Health insurance for ") + loc("University of Connecticut") + loc(" International Students and Scholars"), "#iuconn"),                
                
                makeURL("University of Dayton (OH)", "http://www.udayton.edu/"),
                makeURL("School F1 requirement", "http://www.udayton.edu/international/arrival/health_insurance.php"),
                makeURL("School J1 requirement", "https://www.udayton.edu/international/_resources/docs/isss/j1_request_form.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Dayton") + loc(" International Students and Scholars"), "#iudayton"),
                
                makeURL("University of Delaware (DE)", "http://www.udel.edu/"),
                makeURL("School F1 requirement", "http://www.udel.edu/oiss/students/health.html"),
                makeURL("School J1 requirement", "http://www.udel.edu/oiss/scholars/pre_arrival.html"),
                makeURL(loc("Health insurance for ") + loc("University of Delaware") + loc(" Scholars"), "#iudel"),
                
                makeURL("University of Florida (FL)", "http://www.ufl.edu/"),
                makeURL("School F1 requirement", "http://www.ufic.ufl.edu/ISS/Forms/Insurance%20Verification.pdf"),
                makeURL("School J1 requirement", "http://www.ufic.ufl.edu/evs/Insurance.html"),
                makeURL(loc("Health insurance for ") + loc("University of Florida") + loc(" Scholars"), "#iufl"),
                
                makeURL("University of Georgia (GA)", "http://www.uga.edu/"),
                makeURL("School F1 requirement", "http://www.hr.uga.edu/mandatory-plan-waiver"),
                makeURL("School J1 requirement", "http://issis.uga.edu/docs/Fac_Scholar_Section/Health_%20Ins_Companies_Requirements.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Georgia") + loc(" International Students and Scholars"), "#iuga"),
                
                makeURL("University of Hawaii - Manoa (HI)", "http://www.uhm.hawaii.edu/"),
                makeURL("School F1 requirement", "http://www.hawaii.edu/issmanoa/pages/home/health-insurance.php"),
                    makeBulletedListWithTitle("", [
                        makeURL("J1 student requirement", 
                        "http://www.hawaii.edu/issmanoa/pages/home/health-insurance.php"),
                        makeURL("J1 scholar requirement", 
                        "http://www.hawaii.edu/fsis/downloads/JHealthComplianceForm.pdf")
                        ]),  
                makeURL("Health Insurance for University of Hawaii Students and Scholars", "#ihawaii"),
                
                makeURL("University of Houston (TX)", "http://www.uh.edu/"),
                makeURL("School F1 requirement", "http://www.uh.edu/healthcenter/insurance/"),
                makeURL("School J1 requirement", "http://www.uh.edu/oisss/scholars/for-j1-research-scholars-and-professors/j1-j2-insurance-requirements/"),
                makeURL(loc("Health insurance for ") + loc("University of Houston") + loc(" Scholars"), "#iuh"),
                
                makeURL("University of Idaho (ID)", "http://www.uidaho.edu/"),
                makeURL("School F1 requirement", "http://www.uidaho.edu/~/media/Files/orgs/Academic%20Affairs/IPO/ISSS/F1%20Student%20UI%20Health%20Insurance%20Requirements%20%20Companies.ashx"),
                makeURL("School J1 requirement", "http://www.uidaho.edu/~/media/Files/orgs/Academic%20Affairs/IPO/ISSS/International%20Scholars/JI%20PreArrival%20Document.ashx"),
                makeURL(loc("Health insurance for ") + loc("University of Idaho") + loc(" International Students and Scholars"), "#iuidaho"),
                
                
                makeURL("University of Illinois ,Urbana-Champaign (IL)", "http://www.uiuc.edu/"),
                makeURL("School F1 requirement", "http://www.si.uiuc.edu/Default.aspx?tabid=64"),
                makeURL("School J1 requirement", "http://isss.illinois.edu/download_forms/handbooks/j1_prog_handbook.pdf#page=16"),
                makeURL(loc("Health insurance for ") + loc("UIUC") + loc(" International Students and Scholars"), "#iuiuc"),
                
                makeURL("University of Illinois, Chicago (IL)", "http://www.uic.edu/"),
                makeURL("School F1 requirement", "https://www.google.com/url?q=http://www.obfs.uillinois.edu/common/pages/DisplayFile.aspx%3FitemId%3D929186&amp;sa=U&amp;ei=V93jT-nTAcWNmQWZ6JCSCw&amp;ved=0CAgQFjAB&amp;client=internal-uds-cse&amp;usg=AFQjCNEUIscgKqfoSRPZ3LjDurIWAfOkKQ"),
                makeURL("School J1 requirement", "http://www.ois.uic.edu/cms/one.aspx?portalId=1138157&pageId=1143737"),
                makeURL(loc("Health insurance for ") + loc("University of Illinois at Chicago") + loc(" Scholars"), "#iuic"),
                
                makeURL("University of Iowa (IA)", "http://www.uiowa.edu/"),
                makeURL("School F1 requirement", "http://hr.uiowa.edu/benefits/health-insurance-undergraduate"),
                makeURL("School J1 requirement", "http://international.uiowa.edu/international-scholars/health-insurance-requirements"),
                "Consult your school about their requirements",
                
                makeURL("University of Kansas (KS)", "http://www.ku.edu/"),
                makeURL("School F1 requirement", "http://iss.drupal.ku.edu/minimum-required-coverages"),
                makeURL("School J1 requirement", "http://www.iss.ku.edu/insurance/"),
                "Consult your school about their requirements",
                
                makeURL("University of Kentucky (KY)", "http://www.uky.edu/"),
                makeURL("School F1 requirement", "https://www.academichealthplans.com/enroll_waive/index.php5?school_id=136"),
                makeURL("School J1 requirement", "http://www.uky.edu/international/Health_Insurance_J1"),
                "Consult your school about their requirements",
                
                makeURL("University of Louisville (KY)", "http://www.louisville.edu"),
                makeURL("School F1 requirement", "http://louisville.edu/internationalcenter/isss/documents-and-forms/insurance-waiver-form"),
                makeURL("School J1 requirement", "http://louisville.edu/internationalcenter/isss/documents-and-forms/j1-exchange-visitor-welcome-brochure"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("University of Maine - Orono (ME)", "http://www.umaine.edu/"),
                makeURL("School F1 requirement", "http://umaine.edu/international/isss/students/health-insurance/"),
                makeURL("School J1 requirement", "http://umaine.edu/international/current-students/health-insurance/"),
                makeURL(loc("Health insurance for ") + loc("University of Maine") + loc(" International Students and Scholars"), "#iumaine"),
                
                makeURL("University of Maryland - College Park (MD)", "http://www.umcp.umd.edu/"),
                makeURL("School F1 requirement", "http://globalmaryland.umd.edu/offices/international-students-scholar-services/health-insurance-0"),
                makeURL("School J1 requirement", "http://globalmaryland.umd.edu/offices/international-students-scholar-services/health-insurance-0"),
                makeURL(loc("Health insurance for ") + loc("University of Maryland") + loc(" International Students and Scholars"), "#iuom"),                
                
                makeURL("University of Massachusetts - Amherst (MA)", "http://www.umass.edu/"),
                makeURL("School F1 requirement", "http://www.umass.edu/uhs/insurance/ship/"),
                makeURL("School J1 requirement", "http://www.umass.edu/ipo/iss/health"),
                makeURL(loc("Health insurance for ") + loc("UMASS Amherst") + loc(" Scholars"), "#iumass"),
                
                makeURL("University of Massachusetts - Boston (MA)", "http://www.umb.edu/"),
                makeURL("School F1 requirement", "http://cdn.umb.edu/images/healthservices/enrolling_in_or_waiving_student_health-insurance.pdf"),
                makeURL("School J1 requirement", "http://www.umb.edu/academics/global/isss/scholar_services#insurance"),  
                makeURL(loc("Health insurance for ") + loc("UMASS Boston") + loc(" Scholars"), "#iumb"),                

                makeURL("University of Massachusetts - Dartmouth (MA)", "http://www.umassd.edu/"),
                makeURL("School F1 requirement", "http://www.umassd.edu/studentaffairs/health/healthinsurance/"),
                makeURL("School J1 requirement", "http://www.umassd.edu/international_students/informationforj-1scholars/healthinsurance/"),
                makeURL(loc("Health insurance for ") + loc("UMASS Dartmouth") + loc(" Scholars"), "#iumassd"),                
                
                makeURL("University of Massachusetts - Lowell (MA)", "http://www.uml.edu/"),
                makeURL("School F1 requirement", "http://www.uml.edu/Tuition-fees/Tuition-Costs/Undergraduate-Students/Additional-Fees.aspx"),
                makeURL("School J1 requirement", "http://www.uml.edu/ISSO/Employment/j1-training.aspx"),
                makeURL(loc("Health insurance for ") + loc("UMASS Lowell") + loc(" Scholars"), "#iumassl"),
                
                makeURL("University of Miami (FL)", "http://www.miami.edu/"),
                makeURL("School F1 requirement", "http://www.miami.edu/sa/index.php/student_health_center/insurance_information/"),
                makeURL("School J1 requirement", "http://www.miami.edu/sa/index.php/isss/current_international_scholars/health_insurance_requirement/"),
                makeURL(loc("Health insurance for ") + loc("University of Miami") + loc(" Scholars"), "#imiami"),
                
                makeURL("University of Michigan - Ann Arbor (MI)", "http://www.umich.edu/"),
                makeURL("School F1 requirement", "http://internationalcenter.umich.edu/healthins/waiver.html#standards"),
                makeURL("School J1 requirement", "http://internationalcenter.umich.edu/healthins/requirements.html"),
                "Consult your school about their requirements",
                
                makeURL("University of Minnesota - Twin Cities (MN)", "http://www.umn.edu/"),
                "",
                makeURL("School J1 requirement", "http://www.isss.umn.edu/Departments/InsuranceRJlet.pdf"),
                "Consult your school about their requirements",
                
                makeURL("University of Mississippi (MS)", "http://www.olemiss.edu/"),
                makeURL("School F1 requirement", "http://healthcenter.olemiss.edu/fees-billing-and-insurance/"),
                makeURL("School J1 requirement", "http://international.olemiss.edu/j-1-scholar-health-insurance/"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("University of Missouri - Columbia (MO)", "http://www.missouri.edu/"),
                makeURL("School F1 requirement", "http://international.missouri.edu/come-to-mu/students/insurance.php"),
                makeURL("School J1 requirement", "http://international.missouri.edu/come-to-mu/faculty-staff/j1-scholars/insurance.php"),
                makeURL(loc("Health insurance for ") + loc("University of Missouri - Columbia") + loc(" Scholars"), "#imissouri"),
                
                makeURL("University of Missouri - Kansas City (MO)", "http://www.umkc.edu/"),
                makeURL("School F1 requirement", "http://www.umkc.edu/isao/healthinsurance_waivers.cfm"),
                makeURL("School J1 requirement", "http://www.umkc.edu/isao/pdf/J_regulations.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Missouri - Kansas City") + loc(" Scholars"), "#imissouri"),                

                makeURL("University of Missouri Saint Louis (MO)", "http://www.umsl.edu/"),
                makeURL("School F1 requirement", "http://www.umsl.edu/~intelstu/Files/PDFs/Health%20Insurance%20Waiver%20Request.pdf"),
                makeURL("School J1 requirement", "http://www.umsl.edu/~intelstu/International%20Scholars/j1info.html#healthinsurance"), 
                makeURL(loc("Health insurance for ") + loc("University of Missouri Saint Louis") + loc(" International Students and Scholars"), "#iumsl"),                
                
                makeURL("University of Nebraska - Lincoln (NE)", "http://www.unl.edu/"),
                makeURL("School F1 requirement", "http://health.unl.edu/billing/insurancewaiverpolicy/"),
                makeURL("School J1 requirement", "http://isso.unl.edu/j.status.health.insurance.requirement"),
                makeURL(loc("Health insurance for ") + loc("University of Nebraska (Lincoln)") + loc(" Scholars"), "#iunl"),
                
                makeURL("University of Nebraska - Omaha (NE)", "http://www.unomaha.edu/"),
                makeURL("School F1 requirement", "http://healthservices.unomaha.edu/insurance.php"),
                makeURL("School J1 requirement", "http://healthservices.unomaha.edu/insurance.php"),
                makeURL(loc("Health insurance for ") + loc("University of Nebraska (Omaha)") + loc(" Scholars"), "#iunomaha"),                

                makeURL("University of Nevada - Reno (NV)", "http://www.unr.edu/"),
                makeURL("School F1 requirement", "http://www.unr.edu/oiss/resources/health-care"),
                makeURL("School J1 requirement", "http://www.unr.edu/oiss/international-scholars/j-1-scholars/health-insurance"),
                makeURL(loc("Health insurance for ") + loc("University of Nevada - Reno") + loc(" Scholars"), "#iunr"),              
                
                makeURL("University of New Hampshire (NH)", "http://www.unh.edu/"),
                makeURL("School F1 requirement", "http://www.unh.edu/health-services/shbp/"),
                makeURL("School J1 requirement", "http://unh.edu/oiss/department-state-mandatory-j-1-insurance-regulations"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("University of New Mexico (NM)", "http://www.unm.edu/"),
                makeURL("School F1 requirement", "http://geo.unm.edu/health_insurance_student.html"),
                makeURL("School J1 requirement", "http://geo.unm.edu/health_insurance_scholar.html"),
                makeURL(loc("Health insurance for ") + loc("University of New Mexico") + loc(" International Students and Scholars"), "#iunm"),
                
                makeURL("University of North Carolina - Chapel Hill (NC)", "http://www.unc.edu/"),
                makeURL("School F1 requirement", "http://campushealth.unc.edu/charges-insurance/mandatory-student-health-insurance-hard-waiver-process/international-student"),
                makeURL("School J1 requirement", "http://oisss.unc.edu/international-faculty-and-researchers/j1/mandatory-medical-insurance/"),
                makeURL(loc("Health insurance for ") + loc("University of North Carolina (Chapel Hill)") + loc(" International Students and Scholars"), "#iunc"),                
                
                makeURL("University of North Carolina - Charlotte (NC)", "http://www.uncc.edu/"),
                makeURL("School F1 requirement", "http://studenthealth.uncc.edu/insurance/international-student-insurance-requirements"),
                makeURL("School J1 requirement", "https://isso.uncc.edu/international-facultyscholars/resources-departments/how-guide/help-visitoremployee-prepare-arrival/h"), 
                makeURL(loc("Health insurance for ") + loc("University of North Carolina (Charlotte)") + loc(" International Students and Scholars"), "#iunc"),                

                makeURL("University of North Carolina - Greensboro (NC)", "http://www.uncg.edu/"),
                makeURL("School F1 requirement", "http://www.uncg.edu/ipg/healthinsurance.html"),
                makeURL("School J1 requirement", "http://www.uncg.edu/ipg/insurattestationform.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of North Carolina (Greensboro)") + loc(" International Students and Scholars"), "#iunc"), 

                makeURL("University of North Carolina - Wilmington (NC)", "http://uncw.edu/"),
                makeURL("School F1 requirement", "http://uncw.edu/international/isss/prearrivalhealthinsurance.html#requirement"),
                makeURL("School J1 requirement", "http://uncw.edu/international/isss/healthins.html"), 
                makeURL(loc("Health insurance for ") + loc("University of North Carolina (Wilmington)") + loc(" International Students and Scholars"), "#iunc"),                
                
                makeURL("University of Notre Dame (IN)", "http://www.nd.edu/"),
                makeURL("School F1 requirement", "http://uhs.nd.edu/insurance-billing/"),
                makeURL("School J1 requirement", "https://hr.nd.edu/assets/20192/j_1_visa.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Notre Dame") + loc(" Scholars"), "#ind"),
                               
                
                makeURL("University of Oklahoma (OK)", "http://www.ou.edu/"),
                makeURL("School F1 requirement", "http://hr.ou.edu/studenthealth/StudentHealthWaiver.asp"),
                    makeBulletedListWithTitle("", [
                        makeURL("J1 student requirement", 
                        "http://hr.ou.edu/studenthealth/StudentHealthWaiver.asp"),
                        makeURL("J1 scholar requirement", 
                        "http://hr.ou.edu/%5C/ifss/documents/J-1MedicalHealthInsuranceRequirement.pdf")
                        ]), 
                makeURL(loc("Health insurance for ") + loc("University of Oklahoma") + loc(" International Students and Scholars"), "#iou"),
                
                makeURL("University of Oregon (OR)", "http://www.uoregon.edu/"),
                makeURL("School F1 requirement", "https://international.uoregon.edu/sites/default/files/isss/Insurance%20waiver%20criteria%20explanation.pdf"),
                makeURL("School J1 requirement", "http://international.uoregon.edu/sites/default/files/J-INSURANCE-REQUIREMENTS.pdf"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("University of Pennsylvania (PA)", "http://www.upenn.edu/"),
                makeURL("School F1 requirement", "http://www.vpul.upenn.edu/shs/insurance.php"),                
                     makeBulletedListWithTitle("", [
                        makeURL("J1 student requirement", 
                        "http://global.upenn.edu/isss/j1"),
                        makeURL("J1 scholar requirement", 
                        "http://global.upenn.edu/isss/j1scholar")
                        ]),           
                makeURL(loc("Health insurance for ") + loc("University of Pennsylvania") + loc(" International Students and Scholars"), "#iuop"),
                
                makeURL("University of Pittsburgh (PA)", "http://www.pitt.edu/"),
                makeURL("School F1 requirement", "http://www.ois.pitt.edu/immigration-related-stuff/health-insurance/#student"),
                makeURL("School J1 requirement", "http://www.ois.pitt.edu/immigration-related-stuff/health-insurance/#nonstudent"),
                makeURL(loc("Health insurance for ") + loc("University of Pittsburgh") + loc(" International Students and Scholars"), "#iupitt"),                
                
                makeURL("University of Rhode Island (RI)", "http://www.uri.edu/"),
                makeURL("School F1 requirement", "http://health.uri.edu/docs/insuranceletter.pdf"),
                makeURL("School J1 requirement", "http://www.uri.edu/iss/PDF/j%20insurance%20info.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Rhode Island") + loc(" Scholars"), "#iuri"),
                
                makeURL("University of Rochester (NY)", "http://www.rochester.edu/"),
                makeURL("School F1 requirement", "http://www.rochester.edu/uhs/studentinsurance/files/WaiverCriteria2014.pdf"),
                makeURL("School J1 requirement", "http://www.iso.rochester.edu/employment/scholars/insurance.html"),
                makeURL(loc("Health insurance for ") + loc("University of Rochester") + loc(" Scholars"), "#irochester"),
                
                makeURL("University of South Carolina - Columbia (SC)", "http://www.sc.edu/"),
                makeURL("School F1 requirement", "http://www.sa.sc.edu/shs/billing/insurance/"),
                makeURL("School J1 requirement", "http://iss.sc.edu/index.php?option=com_content&view=article&id=141&Itemid=396"),
                makeURL("Plan that meets this school's standards for J scholar", "#usdos"),
                
                makeURL("University of Southern California (CA)", "http://www.usc.edu/"),
                makeURL("School F1 requirement", "http://engemannshc.usc.edu/insurance/waivers/"),
                makeURL("School J1 requirement", "http://sait.usc.edu/ois/j1-scholars/scholar-resources/insurance.aspx"),
                makeURL(loc("Health insurance for ") + loc("USC") + loc(" Scholars"), "#iusc"),                
                
                makeURL("University of South Florida (FL)", "http://www.usf.edu/"),
                makeURL("School F1 requirement", "http://www.usf.edu/student-affairs/student-health-services/insurance/inscompliance.aspx"),
                makeURL("School J1 requirement", "http://global.usf.edu/is/downloads/J1_DS2019.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of South Florida") + loc(" International Students and Scholars"), "#iusf"),
                
                makeURL("University of Tennessee - Knoxville (TN)", "http://www.utk.edu/"),
                makeURL("School F1 requirement", "http://studenthealth.utk.edu/insrec_intl.php"),
                makeURL("School J1 requirement", "http://international.utk.edu/health-insurance-information/scholars-2/"),
                makeURL(loc("Health insurance for ") + loc("University of Tennessee - Knoxville") + loc(" International Students and Scholars"), "#iutk"),
                
                makeURL("University of Texas - Austin (TX)", "http://www.utexas.edu/"),
                makeURL("School F1 requirement", "http://world.utexas.edu/forms/isss/PVT_Waiver.pdf"),
                makeURL("School J1 requirement", "http://world.utexas.edu/isss/insurance/vs-overview"),
                makeURL(loc("Health insurance for ") + loc("UT Austin") + loc(" Scholars"), "#iutaustin"),
                
                makeURL("University of Texas - Arlington (TX)", "http://www.uta.edu/"),
                makeURL("School F1 requirement", "http://www.uta.edu/oie/?page=forms&form=HealthInsuranceWaiver"),
                makeURL("School J1 requirement", "http://www.uta.edu/oie/?page=JScholar"),
                makeURL(loc("Health insurance for ") + loc("UT Arlington") + loc(" Scholars"), "#iuta"),

                makeURL("University of Texas - Brownsville (TX)", "http://www.utb.edu/Pages/default.aspx"),
                makeURL("School F1 requirement", "https://www.academichealthplans.com/utb/2013-2014/eligibilityGuidelines.php"),
                makeURL("School J1 requirement", "http://www.utb.edu/ba/hr/internationalfaculty/J1/Pages/J1Health.aspx"),
                makeURL(loc("Health insurance for ") + loc("University of Texas - Brownsville") + loc(" Scholars"), "#iutb"),                  
                
                
                 makeURL("University of Texas - Dallas (TX)", "http://www.utdallas.edu/"),
                makeURL("School F1 requirement", "http://www.utdallas.edu/healthcenter/insurance/intl-waivers.html"),
                makeURL("School J1 requirement", "http://www.utdallas.edu/hrm/forms/insreqvisitors.pdf"),
                makeURL(loc("Health insurance for ") + loc("UT Dallas") + loc(" Scholars"), "#iutdallas"),               

                makeURL("University of Texas - El Paso (TX)", "http://utep.edu/"),
                makeURL("School F1 requirement", "http://sa.utep.edu/oip/health-care-and-insurance/"),
                makeURL("School J1 requirement", "http://sa.utep.edu/oip/health-care-and-insurance/"),
                makeURL(loc("Health insurance for ") + loc("University of Texas - El Paso") + loc(" Scholars"), "#iutep"),  
                
                makeURL("University of Texas - Health Center Houston (TX)", "http://www.uth.edu"),
                makeURL("School F1 requirement", "http://www.uth.edu/auxiliary-enterprises/insurance/index.htm"),
                makeURL("School J1 requirement", "http://www.uth.edu/international-affairs/exchange-visitors-j-1/j-1-health-insurance.htm"),
                makeURL(loc("Health insurance for ") + loc("University of Texas - Health Center Houston") + loc(" Scholars"), "#iuth"),                

                makeURL("University of Texas - Health Science Center at San Antonio (TX)", "http://uthscsa.edu/"),
                makeURL("School F1 requirement", "http://uthscsa.edu/ois/Insurance%20Attestation.pdf"),
                makeURL("School J1 requirement", "http://uthscsa.edu/ois/faq.asp#q2"),
                makeURL(loc("UT Health Science Center San Antonio ") + loc("International Students and Scholar Requirements"), "#iuthscsa"),                
                
                makeURL("University of Texas - MD Anderson (TX)", "http://www.mdanderson.org/"),
                makeURL("School F1 requirement", "http://www.mdanderson.org/education-and-research/education-and-training/schools-and-programs/school-of-health-professions/school-of-health-professions-student-catalog/policies-and-procedures/student-health-insurance.html"),
                makeURL("School J1 requirement", "https://www.academichealthplans.com/uthouston/2012-2013/FAQs.php"),
                makeURL(loc("Health insurance for ") + loc("University of Texas - MD Anderson") + loc(" Scholars"), "#iutmda"),
                
                makeURL("University of Texas - Medical Branch at Galveston (TX)", "http://www.utmb.edu/"),
                makeURL("School F1 requirement", "http://www.utmb.edu/studenthealth/insurance.asp"),
                makeURL("School J1 requirement", "http://www.utmb.edu/studenthealth/insurance.asp"),
                makeURL(loc("UT Medical Branch at Galveston ") + loc("International Students and Scholar Requirements"), "#iutmb"),                

                makeURL("University of Texas - Pan American (TX)", "http://www.utpa.edu/"),
                makeURL("School F1 requirement", "http://portal.utpa.edu/utpa_main/dsa_home/oias_home/resources/insurance"),
                makeURL("School J1 requirement", "https://portal.utpa.edu/portal/page/portal/utpa_main/daa_home/intlprograms_home/intlprg_imagesfiles/j-1_application_(rev_9-20-11_final).pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Texas - Pan American") + loc(" Scholars"), "#iutpa"),
                
                makeURL("University of Texas - Permian Basin (TX)", "http://www.utpb.edu/"),
                makeURL("School F1 requirement", "http://www.utpb.edu/admissions/apply-now!/international"),
                makeURL("School J1 requirement", "http://www.utpb.edu/admissions/apply-now!/international"),
                makeURL(loc("UT Permian Basin ") + loc("International Students and Scholar Requirements"), "#iutpb"),                

                
                makeURL("University of Texas - San Antonio (TX)", "https://utsa.edu/"),
                makeURL("School F1 requirement", "http://international.utsa.edu/insurance/health-insurance-waiver/"),
                makeURL("School J1 requirement", "http://international.utsa.edu/insurance/health-insurance-waiver/"),
                makeURL(loc("Health insurance for ") + loc("UT - San Antonio") + loc(" Scholars"), "#iutsa"), 

                makeURL("University of Texas - Southwestern Medical Center (TX)", "http://www.utsouthwestern.edu/"),
                makeURL("School F1 requirement", "http://www.utsouthwestern.edu/edumedia/edufiles/about_us/admin_offices/human_resources/annual_enrollment/WaiveHealth07.pdf"),
                makeURL("School J1 requirement", "http://www.utsouthwestern.edu/about-us/administrative-offices/international-affairs/index.html"),
                makeURL(loc("Health insurance for ") + loc("University of Texas - Southwestern Medical Center") + loc(" Scholars"), "#iutsouthwestern"),                
                
                makeURL("University of Texas - Tyler (TX)", "http://www.uttyler.edu/"),
                makeURL("School F1 requirement", "http://www.uttyler.edu/oip/insurance.php"),
                makeURL("School J1 requirement", "http://www.uttyler.edu/oip/issfs.php"),
                makeURL(loc("Health insurance for ") + loc("UT - Tyler") + loc(" Scholars"), "#iuttyler"), 

                
                makeURL("University of Toledo (OH)", "http://www.utoledo.edu"),
                makeURL("School F1 requirement", "http://www.utoledo.edu/healthservices/student/health_insurance/Waiver_Criteria.html"),
                makeURL("School J1 requirement", "http://www.utoledo.edu/cisp/international/ExchangeVisitors/pdfs/J-1%20Handbook.pdf"),
                makeURL(loc("Health insurance for ") + loc("University of Toledo") + loc(" International Students and Scholars"), "#iutoledo"),                
                
                makeURL("University of Utah (UT)", "http://www.utah.edu/"),
                makeURL("School F1 requirement", "http://internationalcenter.utah.edu/students/admissions/health.php#health"),
                makeURL("School J1 requirement", "http://ic.utah.edu/scholars/family-dependents/health.php"),
                makeURL(loc("Health insurance for ") + loc("University of Utah") + loc(" Scholars"), "#iutah"),
                
                makeURL("University of Vermont (VT)", "http://www.uvm.edu/"),
                makeURL("School F1 requirement", "http://www.uvm.edu/~CHWB/insurance/?Page=mandatory.html"),
                makeURL("School J1 requirement", "https://www.uvm.edu/oie/?Page=services/intl_students_health.html"),
                "Consult your school about their requirements",
                
                makeURL("University of Virginia (VA)", "http://www.virginia.edu/"),
                makeURL("School F1 requirement", "http://www.virginia.edu/studenthealth/insurance/HardWaiver1415.html"),
                makeURL("School J1 requirement", "http://www.virginia.edu/iso/issp/NewWindows/HealthInsScholarExchange.html"),
                makeURL(loc("Health insurance for ") + loc("University of Virginia") + loc(" Scholars"), "#iuva"),
                
                makeURL("University of Washington", "http://www.washington.edu/"),
                makeURL("School F1 requirement", "http://iss.washington.edu/health-insurance"),
                makeURL("School J1 requirement", "http://iss.washington.edu/health-insurance"),
                makeURL(loc("Health insurance for ") + loc("University of Washington") + loc(" International Students and Scholars"), "#iwashington"),
                
                makeURL("University of Wisconsin - Madison (WI)", "http://www.wisc.edu/"),
                makeURL("School F1 requirement", "http://www.uhs.wisc.edu/ship/documents/ship-waiver.pdf"),
                makeURL("School J1 requirement", "http://www.uhs.wisc.edu/ship/documents/ship-waiver.pdf"),
                "Consult your school about their requirements",

                makeURL("University of Wisconsin - Milwaukee (WI)", "http://www4.uwm.edu/"),
                makeURL("School F1 requirement", "http://www4.uwm.edu/cie/students/97/"),
                makeURL("School J1 requirement", "http://taianfinancial.com/schoolstandards/UWM.png"),
                makeURL(loc("Health insurance for ") + loc("University of Wisconsin - Milwaukee") + loc(" Scholars"), "#iuwm"),

                
                makeURL("Utah State University (UT)", "http://www.usu.edu/"),
                makeURL("School F1 requirement", "http://globalengagement.usu.edu/htm/study-abroad/incoming-students/health-insurance"),
                makeURL("School J1 requirement", "http://globalengagement.usu.edu/htm/study-abroad/incoming-students/health-insurance"),
                makeURL(loc("Health insurance for ") + loc("Utah State University") + loc(" International Students and Scholars"), "#iusu"),

                makeURL("Vanderbilt University (TN)", "http://www.vanderbilt.edu/"),
                makeURL("School F1 requirement", "http://www.vanderbilt.edu/isss/wp-content/uploads/HealthInsWaiverRequest.pdf"),
                makeURL("School J1 requirement", "http://www.vanderbilt.edu/isss/financial-statements/j-1-student-intern/j-1-student-intern-orientation/"),
                makeURL(loc("Health insurance for ") + loc("Vanderbilt University") + loc(" Scholars"), "#ivanderbilt"),
                
                makeURL("Virginia Commonwealth University (VA)", "http://www.vcu.edu/"),
                makeURL("School F1 requirement", "http://www.global.vcu.edu/students/connections/started/insurance.html"),
                makeURL("School J1 requirement", "http://www.global.vcu.edu/pdf/immigration/j1/J-1_Health_Insurance_Requirements.pdf"),
                makeURL(loc("Health insurance for ") + loc("Virginia Commonwealth University") + loc(" International Students and Scholars"), "#ivcu"),
                
                makeURL("Virginia Tech (VA)", "http://www.vt.edu/"),
                makeURL("School F1 requirement", "http://www.co.vt.edu/Risk/studenthealthinsr/Aetna/2014-2015/2014-2015_International_Waiver.pdf"),
                makeURL("School J1 requirement", "http://www.iss.vt.edu/index.php/foreign-national/j-1/health-insurance"),
                makeURL(loc("Health insurance for ") + loc("Virginia Tech") + loc(" Scholars"), "#ivt")


                
                ]));
                endRow(); 

                startRow(); 
                writeText("");                
                endRow();                

                endSubsection();



                startSubsection("w-z");
                
                startRow();
                document.write(makeTable(4,
                [
                "School", "F1 Visa", "J1 Visa", "Affordable Insurance that Meets School Requirements",  

                

                
                makeURL("Wake Forest University (NC)", "http://www.wfu.edu/"),
                makeURL("School F1 requirement", "http://sip.studentlife.wfu.edu/enrollment/"),
                makeURL("School J1 requirement", "http://global.wfu.edu/iss/j1/insurance/"),
                makeURL(loc("Health insurance for ") + loc("Wake Forest University") + loc(" Scholars"), "#iwfu"),

                makeURL("Washington State University", "http://www.wsu.edu/"),
                makeURL("School F1 requirement", "http://studentinsurance.wsu.edu/international-students/"),
                makeURL("School J1 requirement", "http://ip.wsu.edu/global-services/scholars/J-1/medical-insurance.html"),
                makeURL(loc("Health insurance for ") + loc("Washington State University") + loc(" Scholars"), "#iwsu"),
                
                makeURL("Washington University in St. Louis & WUSTL Medical School(MO)", "http://www.wustl.edu/"),
                makeURL("School F1 requirement", "http://shs.wustl.edu/Insurance/Pages/default.aspx"),
                makeURL("School J1 requirement", "http://oiss.wustl.edu/scholars/j-1-exchange-visitors/maintaining-j-1status/"),
                makeURL(loc("Health insurance for ") + loc("Washington University in St. Louis & WUSTL Medical School") + loc(" Scholars"), "#iwustl"),
                
                makeURL("Wayne State University (MI)", "http://www.wayne.edu/"),
                makeURL("School F1 requirement", "http://www.oiss.wayne.edu/health-insurance/health-insurance.php#scholars"),
                makeURL("School J1 requirement", "http://www.oiss.wayne.edu/health-insurance/health-insurance.php#student"),
                "Consult your school about their requirements",
                
                makeURL("West Virginia University (WV)", "http://www.wvu.edu/"),
                makeURL("School F1 requirement", "http://oiss.wvu.edu/students/current_students/health_insurance_requirements_for_all_international_students"),
                makeURL("School J1 requirement", "http://oiss.wvu.edu/scholars/j1_scholars/international-scholar-j-1-information"),
                makeURL(loc("Health insurance for ") + loc("West Virginia University") + loc(" International Students and Scholars"), "#iwvu"),

                makeURL("Western University of Health Sciences (CA, OR)", "http://www.westernu.edu/"),
                    makeBulletedListWithTitle("", [
                        makeURL("CA F1 student requirement", 
                        "http://www.westernu.edu/students/students-services/students-services-insurance/"),
                        makeURL("OR F1 student requirement", 
                        "http://www.westernu.edu/students-or/students-services-or/students-services-insurance-or/")
                        ]),  
                makeURL("School J1 requirement", "http://www.westernu.edu/exchange-visitors/exchange-visitors-prospective-information/exchange-visitors-health-insurance/"),
                makeURL(loc("Health insurance for ") + loc("Western University of Health Sciences") + loc(" International Students and Scholars"), "#iwesternu"),                
                
                makeURL("Western Washington University (WA)", "http://www.wwu.edu/"),
                makeURL("School F1 requirement", "http://www.wwu.edu/chw/student_health/billing.shtml"),
                makeURL("School J1 requirement", "http://www.wwu.edu/chw/student_health/billing.shtml"),
                makeURL(loc("Health insurance for ") + loc("Western Washington University") + loc(" International Students and Scholars"), "#iwwu"),                 
                
                makeURL("William & Mary (VA)", "http://www.wm.edu"),
                makeURL("School F1 requirement", "http://www.wm.edu/offices/healthcenter/studentinsurance/waiverinfo/index.php#International"),
                makeURL("School J1 requirement", "http://www.wm.edu/offices/revescenter/issp/life/insurance/scholar/index.php"),
                makeURL(loc("Health insurance for ") + loc("William & Mary") + loc(" Scholars"), "#iwm"),                
                
                makeURL("Yale University (CT)", "http://www.yale.edu/"),
                makeURL("School F1 requirement", "http://www.yale.edu/oiss/life/practical/health/index.html"),
                makeURL("School J1 requirement", "http://www.yale.edu/oiss/immigration/common/j1students/health.html"),
                makeURL(loc("Health insurance for ") + loc("Yale University") + loc(" International Students and Scholars"), "#iyale"),
                
                makeURL("Yeshiva University (NY)", "http://www.yu.edu/"),
                makeURL("School F1 requirement", "https://yu.myahpcare.com/waiver"),
                makeURL("School J1 requirement", "http://yu.edu/student-life/resources/international/insurance/"),
                makeURL(loc("Health insurance for ") + loc("Yeshiva University") + loc(" Scholars"), "#iyu"),                 
                
                makeURL("York College, CUNY (NY)", "http://www.york.cuny.edu/"),
                makeURL("School F1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("School J1 requirement", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                makeURL("Health insurance for CUNY Students and Scholars", "#icuny")                
                
                ]));
    endRow();
    
    endSubsection();


    endSubsections();  
    
    endSection();
}

function writeSections(legacy) {

    var homePageText = [
        makeText("We are qualified insurance agents with over 20 years experience working with insurance companies."),
        makeText("We have native English and Chinese speakers to answer all of your questions."),
        makeText("Ask us about student coverage that meets your university insurance standards.")
    ];

    if (!legacy) {
        startSection("pivot-home", "");

        startRow();

        document.write(makeTableWithStyle("invisibleTableNormalText", 3, [
                        makeStartPivotURLWithIsTopLevel("pivot-international-student", false) + makeImage("international-student.jpg") + makeText("International Student & Scholar (F1&J1 visa). Coverage meets most university standards. $48.62/month with $5,000,000 Benefit") + makeEndPivotURL(),
                        makeStartPivotURLWithIsTopLevel("pivot-global-medical", false) + makeImage("global-medical.jpg") + makeText("Global Medical - Global insurance designed for non-US citizens to use worldwide, and US citizens to use outside of the United States.") + makeEndPivotURL(),
                        makeStartPivotURLWithIsTopLevel("pivot-travel-insurance", false) + makeImage("traveler.jpg") + makeText("Traveler's insurance: Business travel, family visiting, leisure travel. 5 days - 2 years.  Prices start at about $1/day") + makeEndPivotURL(),

                        homePageText
                    ]));

        endRow();

        endSection();
    } else {
        document.write(makeTableWithStyle("invisibleTableNormalText", 3, [
                    homePageText,
                    "","","",
                    "",
                    makeContactInfo(),
                    ""
                    ]));
    }



    // New DOS Standards
    startSection("pivot-new-standards", "New US Department of State J Visa Insurance Standards Effective Jan. 5, 2015");

    startRow();
    writeText("");   
    endRow();   
    writeSectionForNewDosStandards();    
    writeSectionForNewDosStandardschart();    
    endSection();
    
function writeSectionForNewDosStandards() {
    startRow();
    writeText("The US Department of State is changing the J visa required insurance coverage.  The new requirement will be:");
    writeText("Benefit per illness or injury needs to increase from $50,000 to $100,000."); 
    writeText("Repatriation of remains benefit needs to increase from $7,500 to $25,000.");
    writeText("Medical Evacuation benefit needs to increase from $10,000 to $50,000."); 
    writeText(""); 
    writeText("All other current requirements are the same.");
    writeText("This requirement is effective January 5, 2015, with some sponsors having until May 15, 2015 to have their scholars in compliance.  Some schools are changing their requirements now, and some schools will wait.  TaiAn has the coverage you will need now.  Plan B - TaiAn Patriot Exchange with $100,000 benefit per illness or injury and three deductible options meets the new standards.");
    writeText(""); 

  
    endRow(); 
}

function writeSectionForNewDosStandardschart() {
    startRow();
    writeText(makeURL("NEW US Department of State Insurance Requirements for J visa", "https://www.federalregister.gov/articles/2014/10/06/2014-23510/exchange-visitor-program-general-provisions#h-22"));    
    
    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();   
    startRow();
    document.write(makeTable(4,
            [
            // Column headers:
            "TaiAn Scholars and Students",
            loc(makeRawURL("Plan A (Student Health Advantage)<br />Two levels: Standard Plan A, ", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699")) + loc(makeRawURL("Platinum Plan A", "https://purchase.imglobal.com/Quote/student_health_advantage_platinum/pre-quote?imgac=80000699")),
            makeRawURL("Plan B (Taian Patriot Exchange), $100 per illness deductible", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeRawURL("Plan B (Taian Patriot Exchange)- Annual Deductible<br />ONLY AVAILABLE FROM TAIAN", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),            
            // Rest of the table:
            // Row 2
            "Insurance Provider", "IMG (International Medical Group)", "IMG (International Medical Group)", "IMG (International Medical Group)",
            "Plan Type", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 5 years if initial purchase is 3 months or more.", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.",

            // Row 3
            "Maximum Limit", "Standard Plan: $500,000  maximum per period of coverage, $300,000 per illness/injury<br />Platinum Plan: $1,000,000 maximum per period of coverage, $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury",



            "Deductible (Insured pays before insurance pays)", "Standard Plan: $100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays.<br />Platinum Plan: $25 per illness/injury In PPO, $50 per illness/injury Out of PPO", "$100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays 100%.", "$250 or $500 annual deductible: During whole policy period (not over a year), insured pays $250 or $500 before insurance pays 100%.<br />IMG product, Taian Exclusive!",
            "Student Health Center Copay", "$5 copay, no deductible", "$5 copay, no deductible", "$5 copay, no deductible",
            "Illness or Injury Coinsurance", "No coinsurance outside of U.S or in PPO within U.S.  Out of PPO within U.S.: 80% of the first $5,000 of eligible charges, then 100%.", "No coinsurance in PPO or out of PPO", "No coinsurance in PPO or out of PPO",
            "Hospital Room & Board", "Average semi-private room", "Average semi-private room", "Average semi-private room", 
            "Intensive Care", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)",
            "Maternity Coinsurance", "Not covered - If you are pregnant before your policy is effective.<br />Standard Plan: In US/Canada In PPO 80%/20% - Plan pays 80% of URC. 60%/40% Out of PPO.  Outside US/Canada covered 100% of URC.<br />Platinum Plan: Same as any illness or injury coinsurance.", "N/A", "N/A",
            "Mental Health", "In-patient URC to $10,000, out-patient $50/day to $500", "N/A", "N/A",
            "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
            "Prescription Drugs", "In-patient URC, out-patient 50%", "URC", "URC",
            "Accident Dental", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350",
            "Accidental Death & Loss of Limb", "$25,000", "$25,000", "$25,000",
            "Medical Evacuation", "$500,000", "$50,000", "$50,000",
            "Repatriation of remains", "$50,000", "$25,000", "$25,000",
            "Pre-existing conditions (Illness or Injury)", "Standard Plan: After 12 months of continuous coverage<br />Platinum Plan: After 6 months of continuous coverage", "After 12 months of continuous coverage", "After 12 months of continuous coverage",
            "Group Pricing", "2 or more primary insured have about 10% discount", "2 or more primary insured have about 10% discount", "2 or more primary insured have about 10% discount", 

            // Table within a table
            "Cost Per Month (Non-US Citizens)",
            loc("Standard Plan") +
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 19", "$69",   "$372",   "$79",
                    "19-23",   "$92",   "$372",   "$79",
                    "24-30",   "$106",  "$411",   "$79",
                    "31-40",   "$190",  "$547",   "$79",
                    "41-50",   "$311",  "$565",   "$79",
                    "51-64",   "$415",  "$547",   "$79"
                    ]) +
            loc("<br /><br />") +                    
            loc("Platinum Plan") +
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 19", "$111",   "$594",   "$126",
                    "19-23",   "$146",   "$594",   "$126",
                    "24-30",   "$169",  "$656",   "$126",
                    "31-40",   "$303",  "$873",   "$126",
                    "41-50",   "$496",  "$902",   "$126",
                    "51-64",   "$662",  "$873",   "$126"
                    ]), 

            loc("$100,000 per illness/injury, $100 per illness deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$56.45","$56.45",  "$56.45",
                    "25-49",   "$73.50","$73.50",  "$56.45",
                    "50-64",   "$157.35","$157.35","$56.45"
                    ]) +
            loc("<br /><br />") +
            loc("$250,000 per illness/injury benefit, $100 per illness/injury deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$60.36","$60.36",  "$60.36",
                    "25-49",   "$78.59","$78.59",  "$60.36",
                    "50-64",   "$168.27","$168.27","$60.36"
                    ]) + 
            loc("<br /><br />") +
            loc("$500,000 per illness/injury benefit, $100 per illness/injury deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$63.66","$63.66",  "$63.66",
                    "25-49",   "$82.90","$82.90",  "$63.66",
                    "50-64",   "$177.53","$177.53","$63.66"
                    ])
                    + makeURL(loc("Click here for more benefit level and deductible options"),"#p=pivot-taian-patriotexchange"),                      

            loc("$100,000 per illness/injury, $500 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$50.92","$50.92",  "$50.92",
                    "25-49",   "$66.30","$66.30",  "$50.92",
                    "50-64",   "$141.95","$141.95","$50.92"
                    ]) +
            loc("<br /><br />") +                    
            loc("$100,000 per illness/injury benefit, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$54.76","$54.76",  "$54.76",
                    "25-49",   "$71.30","$71.30",  "$54.76",
                    "50-64",   "$152.63","$152.63","$54.76"
                    ]) +
            loc("<br /><br />") +                    
            loc("$250,000 per illness/injury, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$58.55","$58.55",  "$58.55",
                    "25-49",   "$76.23","$76.23",  "$58.55",
                    "50-64",   "$163.22","$163.22","$58.55"
                    ])                   
                    + makeURL(loc("Click here for more benefit level and deductible options"),"#p=pivot-taian-patriotexchange"), 
                    
            "", 
            loc(makeBuyURL(loc("Buy Plan A Standard") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699")) + loc(makeBuyURL(loc("Buy Plan A Platinum") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/Quote/student_health_advantage_platinum/pre-quote?imgac=80000699")),
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Taian Patriot Exchange"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Taian Patriot Exchange"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),            

                "", 
            loc(makeBuyURL(loc("Buy Group A Standard (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/student_health_advantage_group/pre-quote?imgac=80000699")) + loc(makeBuyURL(loc("Buy Group A Platinum (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/student_health_advantage_platinum_group/pre-quote?imgac=80000699")),

            makeBuyURL(loc("Buy Group B (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Group B (10% off, $39 and up)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699"),
            "",
            makeResourceCenterURL(loc("Questions and Answers about Plan A"),"pivot-qanda-plana"),            
            makeResourceCenterURL(loc("Questions and Answers about Plan B"),"pivot-qanda-planb"),
            makeResourceCenterURL(loc("Questions and Answers about Plan B"),"pivot-qanda-planb")           
          

            ])
            );
    endRow();   
    
    startRow();
    writeText("");
    endRow();    

    

    startRow();
    writeText("");
    endRow();
            
    startRow();
    writeText("More plan details:");
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More about Student Health Advantage",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "On the Plan A effective date you need to have a valid J1/F1 visa and be outside of your home country for your study or program.  Taian Plan A covers maternity only if the pregnancy begins after the plan is effective.",
                        "Routine Nursery Care $750 maximum for 31 days after birth if the birth is covered under the plan",
                        "In vitro fertilization or artificial insemination is not covered.",                        
                        "Emergency Room: Injury: URC; Illness resulting in hospitalization: URC; Illness without hospitalization: Subject to addtional $250 deductible",
                        "Physical Therapy: URC -limit once per day",
                        "Standard Plan Local Ambulance: Per injury up to $350, Per illness only if admitted in-patient up to $350",
                        "Platinum Plan Local Ambulance: Per injury up to $750, Per illness only if admitted in-patient up to $750",
                        "Dental: Injury due to covered accident $500; Sudden & unexpected pain $350",
                        "Intercollegiate/Interscholastic/intramural or club sports: $5,000 per injury/illness medical expenses only",
                        "Incidental home country coverage: up to cumulative two weeks",
                        "Terrorism coverage: up to 50,000 lifetime maximum",
                        "F2/J2 dependents can only purchase when the F1/J1 purchases.  Maximum limit per period of coverage and per illness maximum for dependents is $50,000 (Standard Plan A) or $100,000 (Platinum Plan A)",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays.",                        
                        "Standard Plan: Optional benefit change in Florida, Hawaii, Idaho, Massachusetts to shorten the preexisting condition exclusion from 12 months to 6 months. With 6 month preexisting condition benefit change there is a 10 month wait for maternity benefits."                        
                        ]),


                "Full Brochure", makeURL("Full Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1938&a=80000699")



                ]));

    endRow();

    startRow();
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More on Taian Patriot Exchange",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "Taian Patriot Exchange Plan B with $100,000 limit per illness/injury is the most affordable plan that meets the NEW US Dept of State standards for Exchange visitors (J visa) which are: At least $100,000 per illness, repatriation of remains of $25,000, Medical evacuation benefits of $50,000, and a deductible not over $500.",
                        "J2/F2 can buy TaiAn Plan B with the F1/J1. If the J1/F1 has purchased school insurance the J2/F2 dependents can purchase TaiAn Plan B alone. If the J1/F1 has purchased TaiAn Plan B and his/her J2/F2 dependents come later, they can purchase Plan B alone for different dates.",                        
                        "Plastic ID card (ONLY AVAILABLE FROM TAIAN) available for purchases of six months or longer",
                        "You can select the day after you submit application or any later date as your insurance effective date.  The insurance can only be effective after you arrive in the foreign country for your exchange program.",                        
                        "Taian Patriot Exchange Group plan available for groups of 2 or more primary applicants. Use one credit card to pay for the whole group. Use the credit card holder\'s initials as the \"Sponsoring Organization\". Use the credit card holders name as the \"Contact Name\".  Use the credit card holder's email as the group contact for the plan.",
                        "Other available options include: travel protection for baggage and valuables, legal assistance, personal liability coverage, adventure sports coverage",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays."
                        ]),

                "Full Brochures", 
                makeBulletedListWithTitle("", [
                        makeURL("Taian Patriot Exchange Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2857"),  

                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2943") : ""),

                        makeURL("Taian Patriot Exchange Group Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2858"),                        
                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Group Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2944") + loc("<br />If Chinese version is in conflict with English one, please follow the  English one") : "")
                        

                        ])
     
                      


               ]));

    endRow();    
    
}    
    

    
    // International Student
    startSection("pivot-international-student", "International Scholars and Students");

    startRow();
    writeText("<strong>" + makePivotURL("pivot-school-waiver", "Find your school insurance requirements and most affordable plan here") + "</strong>");
    endRow();    
    
    startRow();
    writeText("Taian International Health Insurance provides IMG International Scholar and Student Insurance for US visa holders (F1 visa, J1 visa, OPT, and M1 visa) and their dependents. Taian Insurance Plan A and Plan B meet many schools\' student insurance standards and almost every schools\' J1 scholar insurance standards and are more affordable than most school plans. All J visa holders are required to meet the US Department of State (USDOS) requirements and their school requirements for the duration of their visa. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the USDOS requirements. Most schools requirements for J1 scholars are the same as the USDOS, however some schools have higher requirements. Please click the links to see your school requirements and US Department of State requirements. The USDOS is changing the required insurance coverage.  See link below.");
    endRow();

    var partnerShip = getPartnership(getPageAttribute("partner"));
    var internationalStudentPartnerContent = partnerShip["internationalStudentContent"];
    var hasIStPartnerContent = !(typeof internationalStudentPartnerContent === "undefined");
    if (hasIStPartnerContent) {
        internationalStudentPartnerContent();
    }


   


    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("We have native English and Chinese speakers to answer all of your questions.");
    endRow();

    startRow();
    writeText("Contact us to ensure a plan meets your requirements.");
    endRow();

    startRow();
    writeText(loc("Other plans that cover more visa types:") + " " + makePivotURL("pivot-global-medical", "Global Medical") + " " + loc("and") + " " + makePivotURL("pivot-travel-insurance", "Patriot Travel"));
    endRow();

    startRow();
    writeText("Insurance policy is underwritten by a health insurance company that is 'A' rated by A.M.Best");
    endRow();

    writeDontSeeWhatYouNeedRow();
    endSection();

    // International Scholar
    startSection("pivot-international-scholar", "International Scholars and Students");

    startRow();
    writeText("");
    endRow();

    var partnerShip = getPartnership(getPageAttribute("partner"));
    var internationalScholarPartnerContent = partnerShip["internationalScholarContent"];
    var hasIStPartnerContent = !(typeof internationalScholarPartnerContent === "undefined");
    if (hasIStPartnerContent) {
        internationalScholarPartnerContent();
    }

    startRow();
    writeText("<strong>" + makePivotURL("pivot-school-waiver", "Find your school insurance requirements and most affordable plan here") + "</strong>");
    endRow();
   
    startRow();
    writeText(makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/"));
    endRow();   
    
    startRow();

    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    startRow();
    document.write(makeTable(4,
            [
            // Column headers:
            "TaiAn Scholars and Students",
            loc(makeRawURL("Plan A (Student Health Advantage)<br />Two levels: Standard Plan A, ", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699")) + loc(makeRawURL("Platinum Plan A", "https://purchase.imglobal.com/Quote/student_health_advantage_platinum/pre-quote?imgac=80000699")),
            makeRawURL("Plan B (Taian Patriot Exchange), $100 per illness deductible", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeRawURL("Plan B (Taian Patriot Exchange)- Annual Deductible<br />ONLY AVAILABLE FROM TAIAN", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),            

            // Rest of the table:
            // Row 2
            "Insurance Provider", "IMG (International Medical Group)", "IMG (International Medical Group)", "IMG (International Medical Group)",            
            "Plan Type", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 5 years if initial purchase is 3 months or more.", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.",

            // Row 3
            "Maximum Limit", "Standard Plan: $500,000  maximum per period of coverage, $300,000 per illness/injury<br />Platinum Plan: $1,000,000 maximum per period of coverage, $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury",



            "Deductible (Insured pays before insurance pays)", "Standard Plan: $100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays.<br />Platinum Plan: $25 per illness/injury In PPO, $50 per illness/injury Out of PPO", "$100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays 100%.", "$250 or $500 annual deductible: During whole policy period (not over a year), insured pays $250 or $500 before insurance pays 100%.<br />IMG product, Taian Exclusive!",
            "Student Health Center Copay", "$5 copay, no deductible", "$5 copay, no deductible", "$5 copay, no deductible",
            "Illness or Injury Coinsurance", "No coinsurance outside of U.S or in PPO within U.S.  Out of PPO within U.S.: 80% of the first $5,000 of eligible charges, then 100%.", "No coinsurance in PPO or out of PPO", "No coinsurance in PPO or out of PPO",
            "Hospital Room & Board", "Average semi-private room", "Average semi-private room", "Average semi-private room", 
            "Intensive Care", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)",
            "Maternity Coinsurance", "Not covered - If you are pregnant before your policy is effective.<br />Standard Plan: In US/Canada In PPO 80%/20% - Plan pays 80% of URC. 60%/40% Out of PPO.  Outside US/Canada covered 100% of URC.<br />Platinum Plan: Same as any illness or injury coinsurance.", "N/A", "N/A",
            "Mental Health", "In-patient URC to $10,000, out-patient $50/day to $500", "N/A", "N/A",
            "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
            "Prescription Drugs", "In-patient URC, out-patient 50%", "URC", "URC",
            "Accident Dental", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350",
            "Accidental Death & Loss of Limb", "$25,000", "$25,000", "$25,000",
            "Medical Evacuation", "$500,000", "$50,000", "$50,000",
            "Repatriation of remains", "$50,000", "$25,000", "$25,000",
            "Pre-existing conditions (Illness or Injury)", "Standard Plan: After 12 months of continuous coverage<br />Platinum Plan: After 6 months of continuous coverage", "After 12 months of continuous coverage", "After 12 months of continuous coverage",
            "Group Pricing", "2 or more primary insured have about 10% discount", "2 or more primary insured have about 10% discount", "2 or more primary insured have about 10% discount", 
                        
            // Table within a table
            "Cost Per Month (Non-US Citizens)",
            loc("Standard Plan") +
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 19", "$69",   "$372",   "$79",
                    "19-23",   "$92",   "$372",   "$79",
                    "24-30",   "$106",  "$411",   "$79",
                    "31-40",   "$190",  "$547",   "$79",
                    "41-50",   "$311",  "$565",   "$79",
                    "51-64",   "$415",  "$547",   "$79"
                    ]) +
            loc("<br /><br />") +                    
            loc("Platinum Plan") +
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 19", "$111",   "$594",   "$126",
                    "19-23",   "$146",   "$594",   "$126",
                    "24-30",   "$169",  "$656",   "$126",
                    "31-40",   "$303",  "$873",   "$126",
                    "41-50",   "$496",  "$902",   "$126",
                    "51-64",   "$662",  "$873",   "$126"
                    ]), 

            loc("$50,000 per illness/injury benefit, $100 per illness/injury deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$48.62","$48.62",  "$48.62",
                    "25-49",   "$63.37","$63.37",  "$48.62",
                    "50-64",   "$135.70","$135.70","$48.62"
                    ]) +

            loc("$250,000 per illness/injury benefit, $100 per illness/injury deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$60.36","$60.36",  "$60.36",
                    "25-49",   "$78.59","$78.59",  "$60.36",
                    "50-64",   "$168.27","$168.27","$60.36"
                    ]) + 

            loc("$500,000 per illness/injury benefit, $100 per illness/injury deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$63.66","$63.66",  "$63.66",
                    "25-49",   "$82.90","$82.90",  "$63.66",
                    "50-64",   "$177.53","$177.53","$63.66"
                    ])
                    + makeURL(loc("Click here for more benefit level and deductible options"),"#p=pivot-taian-patriotexchange"),                    

            loc("$50,000 per illness/injury benefit, $500 annual deductible<br />***LOWEST PRICE***") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$43.86","$43.86",  "$43.86",
                    "25-49",   "$57.17","$57.17",  "$43.86",
                    "50-64",   "$122.41","$122.41","$43.86"
                    ]) +
            loc("$50,000 per illness/injury benefit, $250 annual deductible<br />*******BEST VALUE*******") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$47.16","$47.16",  "$47.16",
                    "25-49",   "$61.47","$61.47",  "$47.16",
                    "50-64",   "$131.63","$131.63","$47.16"
                    ]) +
            loc("$100,000 per illness/injury benefit, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$54.76","$54.76",  "$54.76",
                    "25-49",   "$71.30","$71.30",  "$54.76",
                    "50-64",   "$152.63","$152.63","$54.76"
                    ])
                    + makeURL(loc("Click here for more benefit level and deductible options"),"#p=pivot-taian-patriotexchange"),                    
 
                    
            "", 
            loc(makeBuyURL(loc("Buy Plan A Standard") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699")) + loc(makeBuyURL(loc("Buy Plan A Platinum") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/Quote/student_health_advantage_platinum/pre-quote?imgac=80000699")),
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Taian Patriot Exchange"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Taian Patriot Exchange"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),            

                "", 
            loc(makeBuyURL(loc("Buy Group A Standard (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/student_health_advantage_group/pre-quote?imgac=80000699")) + loc(makeBuyURL(loc("Buy Group A Platinum (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/student_health_advantage_platinum_group/pre-quote?imgac=80000699")),
            makeBuyURL(loc("Buy Group B (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Group B (10% off, $39 and up)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699"),

            "",
            makeResourceCenterURL(loc("Questions and Answers about Plan A"),"pivot-qanda-plana"),
            makeResourceCenterURL(loc("Questions and Answers about Plan B"),"pivot-qanda-planb"),
            makeResourceCenterURL(loc("Questions and Answers about Plan B"),"pivot-qanda-planb")            
           

            ])
            );
    endRow();

    startRow();
    writeText("");
    endRow();    

    

    startRow();
    writeText("");
    endRow();
            
    startRow();
    writeText("More plan details:");
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More about Student Health Advantage",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "On the Plan A effective date you need to have a valid J1/F1 visa and be outside of your home country for your study or program.  Taian Plan A covers maternity only if the pregnancy begins after the plan is effective.",
                        "Routine Nursery Care $750 maximum for 31 days after birth if the birth is covered under the plan",
                        "In vitro fertilization or artificial insemination is not covered.",                        
                        "Emergency Room: Injury: URC; Illness resulting in hospitalization: URC; Illness without hospitalization: Subject to addtional $250 deductible",
                        "Physical Therapy: URC -limit once per day",
                        "Standard Plan Local Ambulance: Per injury up to $350, Per illness only if admitted in-patient up to $350",
                        "Platinum Plan Local Ambulance: Per injury up to $750, Per illness only if admitted in-patient up to $750",
                        "Dental: Injury due to covered accident $500; Sudden & unexpected pain $350",
                        "Intercollegiate/Interscholastic/intramural or club sports: $5,000 per injury/illness medical expenses only",
                        "Incidental home country coverage: up to cumulative two weeks",
                        "Terrorism coverage: up to 50,000 lifetime maximum",
                        "F2/J2 dependents can only purchase when the F1/J1 purchases.  Maximum limit per period of coverage and per illness maximum for dependents is $50,000 (Standard Plan A) or $100,000 (Platinum Plan A)",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays.",                        
                        "Standard Plan: Optional benefit change in Florida, Hawaii, Idaho, Massachusetts to shorten the preexisting condition exclusion from 12 months to 6 months. With 6 month preexisting condition benefit change there is a 10 month wait for maternity benefits."                        
                        ]),


                "Full Brochure", makeURL("Full Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1938&a=80000699")



                ]));

    endRow();

    startRow();
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More on Taian Patriot Exchange",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "Taian Patriot Exchange Plan B with $50,000 limit per illness/injury is the most affordable plan that meets the US Dept of State standards for Exchange visitors (J visa) which are: At least $50,000 per illness, repatriation of remains of $7,500, Medical evacuation benefits of $10,000, and a deductible not over $500.",
                        "All Taian Patriot Exchange plans meet the USDOS standards.",
                        "J2/F2 can buy TaiAn Plan B with the F1/J1. If the J1/F1 has purchased school insurance the J2/F2 dependents can purchase TaiAn Plan B alone. If the J1/F1 has purchased TaiAn Plan B and his/her J2/F2 dependents come later, they can purchase Plan B alone for different dates.",                        
                        "Plastic ID card (ONLY AVAILABLE FROM TAIAN) available for purchases of six months or longer",
                        "You can select the day after you submit application or any later date as your insurance effective date.  The insurance can only be effective after you arrive in the foreign country for your exchange program.",                        
                        "Taian Patriot Exchange Group plan available for groups of 2 or more primary applicants. Use one credit card to pay for the whole group. Use the credit card holder\'s initials as the \"Sponsoring Organization\". Use the credit card holders name as the \"Contact Name\".  Use the credit card holder's email as the group contact for the plan.",
                        "Other available options include: travel protection for baggage and valuables, legal assistance, personal liability coverage, adventure sports coverage",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays."
                        ]),

                "Full Brochures", 
                makeBulletedListWithTitle("", [
                        makeURL("Taian Patriot Exchange Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2857"),  

                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2943") : ""),

                        makeURL("Taian Patriot Exchange Group Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2858"),                        
                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Group Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2944") + loc("<br />If Chinese version is in conflict with English one, please follow the  English one") : "")
                        

                        ])


               ]));

    endRow();

    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("We have native English and Chinese speakers to answer all of your questions.");
    endRow();

    startRow();
    writeText("Contact us to ensure a plan meets your requirements.");
    endRow();

    startRow();
    writeText(loc("Other plans that cover more visa types:") + " " + makePivotURL("pivot-global-medical", "Global Medical") + " " + loc("and") + " " + makePivotURL("pivot-travel-insurance", "Patriot Travel"));
    endRow();

    startRow();
    writeText("Insurance policy is underwritten by a health insurance company that is 'A' rated by A.M.Best");
    endRow();

    writeDontSeeWhatYouNeedRow();
    endSection();
    
    
    // Confucius Educator
    startSection("pivot-confucius-educator", "Confucius Teachers and Volunteers");

    startRow();
    writeText("Confucius Institute volunteer teachers come to the US with J1 visas. Their exchange program requires them to have health insurance that meets the US Department of State (USDOS) requirements for the duration of their stay. Taian International Health Insurance provides insurance for J1 educators and their dependents. Taian Insurance Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the USDOS requirements. Many Confucius teachers choose Plan B with $250,000 or $500,000 of benefits to get the best coverage. Taian Insurance Plan A also meets the requirements and offers affordable coverage with maternity benefits. Plan A and Plan B are also good for Confucius teachers anywhere around the world, not just in the US.");
    endRow();
   

    startRow();    
    document.write(makeBulletedListWithTitle("The USDOS requires:", [

                        "Medical benefits of at least $50,000 per accident or illness",
                        "Repatriation of remains in the amount of $7,500",
                        "Expenses associated with the medical evacuation of the exchange visitor to his or her home country in the amount of $10,000",
                        "A deductible not to exceed $500 per accident or illness."
                       
                        ]));

    endRow();
                        
    startRow();
    writeText(makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/"));
    endRow();   
    
    startRow();

    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    startRow();
    document.write(makeTable(4,
            [
            // Column headers:
            "TaiAn Insurance for Educators",
            loc(makeRawURL("Plan A (Student Health Advantage)<br />Two levels: Standard Plan A, ", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699")) + loc(makeRawURL("Platinum Plan A", "https://purchase.imglobal.com/Quote/student_health_advantage_platinum/pre-quote?imgac=80000699")),
            makeRawURL("Plan B (Taian Patriot Exchange), $100 per illness deductible", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeRawURL("Plan B (Taian Patriot Exchange)- Annual Deductible<br />ONLY AVAILABLE FROM TAIAN", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),            

            // Rest of the table:
            // Row 2
            "Insurance Provider", "IMG (International Medical Group)", "IMG (International Medical Group)", "IMG (International Medical Group)",           
            "Plan Type", "Designed specifically for international scholars，educators，students and their families (US visa J1/J2, F1/F2). Purchase monthly increments (from 1 to 12 months), renewable up to 5 years if initial purchase is 3 months or more.", "Designed specifically for international scholars，educators，students and their families (US visa J1/J2, F1/F2). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.", "Designed specifically for international scholars，educators，students and their families (US visa J1/J2, F1/F2). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.",

            // Row 3
            "Maximum Limit", "Standard Plan: $500,000  maximum per period of coverage, $300,000 per illness/injury<br />Platinum Plan: $1,000,000 maximum per period of coverage, $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury",


            "Deductible (Insured pays before insurance pays)", "Standard Plan: $100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays.<br />Platinum Plan: $25 per illness/injury In PPO, $50 per illness/injury Out of PPO", "$100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays 100%.", "$250 or $500 annual deductible: During whole policy period (not over a year), insured pays $250 or $500 before insurance pays 100%.<br />IMG product, Taian Exclusive!",
            "Student Health Center Copay", "$5 copay, no deductible", "$5 copay, no deductible", "$5 copay, no deductible",
            "Illness or Injury Coinsurance", "No coinsurance outside of U.S or in PPO within U.S.  Out of PPO within U.S.: 80% of the first $5,000 of eligible charges, then 100%.", "No coinsurance in PPO or out of PPO", "No coinsurance in PPO or out of PPO",
            "Hospital Room & Board", "Average semi-private room", "Average semi-private room", "Average semi-private room", 
            "Intensive Care", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)",
            "Maternity Coinsurance", "Not covered - If you are pregnant before your policy is effective.<br />Standard Plan: In US/Canada In PPO 80%/20% - Plan pays 80% of URC. 60%/40% Out of PPO.  Outside US/Canada covered 100% of URC.<br />Platinum Plan: Same as any illness or injury coinsurance.", "N/A", "N/A",
            "Mental Health", "In-patient URC to $10,000, out-patient $50/day to $500", "N/A", "N/A",
            "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
            "Prescription Drugs", "In-patient URC, out-patient 50%", "URC", "URC",
            "Accident Dental", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350",
            "Accidental Death & Loss of Limb", "$25,000", "$25,000", "$25,000",
            "Medical Evacuation", "$500,000", "$50,000", "$50,000",
            "Repatriation of remains", "$50,000", "$25,000", "$25,000",
            "Pre-existing conditions (Illness or Injury)", "Standard Plan: After 12 months of continuous coverage<br />Platinum Plan: After 6 months of continuous coverage", "After 12 months of continuous coverage", "After 12 months of continuous coverage",
            "Group Pricing", "2 or more primary insured have about 10% discount", "2 or more primary insured have about 10% discount", "2 or more primary insured have about 10% discount", 
            // Table within a table
            "Cost Per Month (Non-US Citizens)",
            loc("Standard Plan") +
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 19", "$69",   "$372",   "$79",
                    "19-23",   "$92",   "$372",   "$79",
                    "24-30",   "$106",  "$411",   "$79",
                    "31-40",   "$190",  "$547",   "$79",
                    "41-50",   "$311",  "$565",   "$79",
                    "51-64",   "$415",  "$547",   "$79"
                    ]) +
            loc("<br /><br />") +                    
            loc("Platinum Plan") +
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 19", "$111",   "$594",   "$126",
                    "19-23",   "$146",   "$594",   "$126",
                    "24-30",   "$169",  "$656",   "$126",
                    "31-40",   "$303",  "$873",   "$126",
                    "41-50",   "$496",  "$902",   "$126",
                    "51-64",   "$662",  "$873",   "$126"
                    ]),  

            loc("$50,000 per illness/injury benefit, $100 per illness/injury deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$48.62","$48.62",  "$48.62",
                    "25-49",   "$63.37","$63.37",  "$48.62",
                    "50-64",   "$135.70","$135.70","$48.62"
                    ]) +

            loc("$250,000 per illness/injury benefit, $100 per illness/injury deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$60.36","$60.36",  "$60.36",
                    "25-49",   "$78.59","$78.59",  "$60.36",
                    "50-64",   "$168.27","$168.27","$60.36"
                    ]) + 

            loc("$500,000 per illness/injury benefit, $100 per illness/injury deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$63.66","$63.66",  "$63.66",
                    "25-49",   "$82.90","$82.90",  "$63.66",
                    "50-64",   "$177.53","$177.53","$63.66"
                    ])
                    + makeURL(loc("Click here for more benefit level and deductible options"),"#p=pivot-taian-patriotexchange"),                   

            loc("$50,000 per illness/injury benefit, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$47.16","$47.16",  "$47.16",
                    "25-49",   "$61.47","$61.47",  "$47.16",
                    "50-64",   "$131.63","$131.63","$47.16"
                    ]) +

            loc("$100,000 per illness/injury benefit, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$54.76","$54.76",  "$54.76",
                    "25-49",   "$71.30","$71.30",  "$54.76",
                    "50-64",   "$152.63","$152.63","$54.76"
                    ]) +
            loc("$500,000 per illness/injury, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$61.75","$61.75",  "$61.75",
                    "25-49",   "$80.41","$80.41",  "$61.75",
                    "50-64",   "$172.20","$172.20","$61.75"
                    ])
                     + makeURL(loc("Click here for more benefit level and deductible options"),"#p=pivot-taian-patriotexchange"),                   
 
                    
            "", 
            loc(makeBuyURL(loc("Buy Plan A Standard") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699")) + loc(makeBuyURL(loc("Buy Plan A Platinum") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/Quote/student_health_advantage_platinum/pre-quote?imgac=80000699")),
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Taian Patriot Exchange"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Taian Patriot Exchange"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),            

                "", 
            loc(makeBuyURL(loc("Buy Group A Standard (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/student_health_advantage_group/pre-quote?imgac=80000699")) + loc(makeBuyURL(loc("Buy Group A Platinum (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/student_health_advantage_platinum_group/pre-quote?imgac=80000699")),
            makeBuyURL(loc("Buy Group B (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Group B (10% off, $39 and up)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699"),

            "",
            makeResourceCenterURL(loc("Questions and Answers about Plan A"),"pivot-qanda-plana"),
            makeResourceCenterURL(loc("Questions and Answers about Plan B"),"pivot-qanda-planb"),
            makeResourceCenterURL(loc("Questions and Answers about Plan B"),"pivot-qanda-planb")            
           

            ])
            );
    endRow();

    startRow();
    writeText("");
    endRow();    

    

    startRow();
    writeText("");
    endRow();
            
    startRow();
    writeText("More plan details:");
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More about Student Health Advantage",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "On the Plan A effective date you need to have a valid J1/F1 visa and be outside of your home country for your study or program.  Taian Plan A covers maternity only if the pregnancy begins after the plan is effective.",
                        "Routine Nursery Care $750 maximum for 31 days after birth if the birth is covered under the plan",
                        "In vitro fertilization or artificial insemination is not covered.",                        
                        "Emergency Room: Injury: URC; Illness resulting in hospitalization: URC; Illness without hospitalization: Subject to addtional $250 deductible",
                        "Physical Therapy: URC -limit once per day",
                        "Standard Plan Local Ambulance: Per injury up to $350, Per illness only if admitted in-patient up to $350",
                        "Platinum Plan Local Ambulance: Per injury up to $750, Per illness only if admitted in-patient up to $750",
                        "Dental: Injury due to covered accident $500; Sudden & unexpected pain $350",
                        "Intercollegiate/Interscholastic/intramural or club sports: $5,000 per injury/illness medical expenses only",
                        "Incidental home country coverage: up to cumulative two weeks",
                        "Terrorism coverage: up to 50,000 lifetime maximum",
                        "F2/J2 dependents can only purchase when the F1/J1 purchases.  Maximum limit per period of coverage and per illness maximum for dependents is $50,000 (Standard Plan A) or $100,000 (Platinum Plan A)",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays.",                        
                        "Standard Plan: Optional benefit change in Florida, Hawaii, Idaho, Massachusetts to shorten the preexisting condition exclusion from 12 months to 6 months. With 6 month preexisting condition benefit change there is a 10 month wait for maternity benefits."                        
                        ]),


                "Full Brochure", makeURL("Full Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1938&a=80000699")



                ]));

    endRow();

    startRow();
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More on Taian Patriot Exchange",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "Taian Patriot Exchange Plan B with $50,000 limit per illness/injury is the most affordable plan that meets the US Dept of State standards for Exchange visitors (J visa) which are: At least $50,000 per illness, repatriation of remains of $7,500, Medical evacuation benefits of $10,000, and a deductible not over $500.",
                        "All Taian Patriot Exchange plans meet the USDOS standards.",
                        "J2/F2 can buy TaiAn Plan B with the F1/J1. If the J1/F1 has purchased school insurance the J2/F2 dependents can purchase TaiAn Plan B alone. If the J1/F1 has purchased TaiAn Plan B and his/her J2/F2 dependents come later, they can purchase Plan B alone for different dates.",                        
                        "Plastic ID card (ONLY AVAILABLE FROM TAIAN) available for purchases of six months or longer",
                        "You can select the day after you submit application or any later date as your insurance effective date.  The insurance can only be effective after you arrive in the foreign country for your exchange program.",                        
                        "Taian Patriot Exchange Group plan available for groups of 2 or more primary applicants. Use one credit card to pay for the whole group. Use the credit card holder\'s initials as the \"Sponsoring Organization\". Use the credit card holders name as the \"Contact Name\".  Use the credit card holder's email as the group contact for the plan.",
                        "Other available options include: travel protection for baggage and valuables, legal assistance, personal liability coverage, adventure sports coverage",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays."
                        ]),

                "Full Brochures", 
                makeBulletedListWithTitle("", [
                        makeURL("Taian Patriot Exchange Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2857"),  

                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2943") : ""),

                        makeURL("Taian Patriot Exchange Group Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2858"),                        
                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Group Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2944") + loc("<br />If Chinese version is in conflict with English one, please follow the  English one") : "")
                        

                        ])


               ]));

    endRow();

    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("We have native English and Chinese speakers to answer all of your questions.");
    endRow();

    startRow();
    writeText("Contact us to ensure a plan meets your requirements.");
    endRow();

    startRow();
    writeText(loc("Other plans that cover more visa types:") + " " + makePivotURL("pivot-global-medical", "Global Medical") + " " + loc("and") + " " + makePivotURL("pivot-travel-insurance", "Patriot Travel"));
    endRow();

    startRow();
    writeText("Insurance policy is underwritten by a health insurance company that is 'A' rated by A.M.Best");
    endRow();

    writeDontSeeWhatYouNeedRow();
    endSection();
    
    

    // International Student and scholar
    startSection("pivot-international-studentandscholar", "International Scholars and Students");



    var partnerShip = getPartnership(getPageAttribute("partner"));
    var internationalStudentandscholarPartnerContent = partnerShip["internationalStudentandscholarContent"];
    var hasIStSchPartnerContent = !(typeof internationalStudentandscholarPartnerContent === "undefined");
    if (hasIStSchPartnerContent) {
        internationalStudentandscholarPartnerContent();
    }

    startRow();
    writeText("");
    endRow();
    
    startRow();
    writeText("<strong>" + makePivotURL("pivot-school-waiver", "Find your school insurance requirements and most affordable plan here") + "</strong>");
    endRow();
   
    startRow();
    writeText(makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/"));
    writeText("<strong>" + makePivotURL("pivot-new-standards", "The US Department of State is Changing the required insurance coverage for J Visa holders January 5, 2015.  Learn more here.") + "</strong>");
    endRow();   
    
    startRow();

    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    startRow();
    document.write(makeTable(4,
            [
            // Column headers:
            "TaiAn Scholars and Students",
            loc(makeRawURL("Plan A (Student Health Advantage)<br />Two levels: Standard Plan A, ", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699")) + loc(makeRawURL("Platinum Plan A", "https://purchase.imglobal.com/Quote/student_health_advantage_platinum/pre-quote?imgac=80000699")),

            makeRawURL("Plan B (Taian Patriot Exchange)", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"), 
            makeRawURL("Plan C (Patriot Travel for non-US citizens)", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),            

            // Rest of the table:
            // Row 2
            "Insurance Provider", "IMG (International Medical Group)", "IMG (International Medical Group)", "IMG (International Medical Group)",            
            "Plan Type", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 5 years if initial purchase is 3 months or more.", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.", "Designed for anyone traveling outside their home country. F2/J2 can buy alone. Purchase daily (at least 5 days) or monthly, renewable up to 2 years if 1 month or more is purchased.",

            // Row 3
            "Maximum Limit", "Standard Plan: $500,000  maximum per period of coverage, $300,000 per illness/injury<br />Platinum Plan: $1,000,000 maximum per period of coverage, $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury", "$50,000, $100,000, $500,000, $1,000,000 lifetime maximum",



            "Deductible (Insured pays before insurance pays)", "Standard Plan: $100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays.<br />Platinum Plan: $25 per illness/injury In PPO, $50 per illness/injury Out of PPO", "Two options: 1) $100 per illness/injury; 2) Annual deductible ($250 or $500)<br />Annual deductible is Taian Exclusive!", "$0, $100, $250, $500, $1,000, $2,500 annual deductible",
            "Student Health Center Copay", "$5 copay, no deductible", "$5 copay, no deductible", "N/A",
            "Illness or Injury Coinsurance", "No coinsurance outside of U.S or in PPO within U.S.  Out of PPO within U.S.: 80% of the first $5,000 of eligible charges, then 100%.", "No coinsurance in PPO or out of PPO", "In-PPO 90% to $5,000, then 100%<br />Out-PPO, 80% to $5,000 then 100%",
            "Hospital Room & Board", "Average semi-private room", "Average semi-private room", "Average semi-private room", 
            "Intensive Care", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)",
            "Maternity Coinsurance", "Not covered - If you are pregnant before your policy is effective.<br />Standard Plan: In US/Canada In PPO 80%/20% - Plan pays 80% of URC. 60%/40% Out of PPO.  Outside US/Canada covered 100% of URC.<br />Platinum Plan: Same as any illness or injury coinsurance.", "N/A", "N/A",
            "Mental Health", "In-patient URC to $10,000, out-patient $50/day to $500", "N/A", "N/A",
            "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
            "Prescription Drugs", "In-patient URC, out-patient 50%", "URC", "URC",
            "Accident Dental", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350", "Injury up to policy max, Sudden pain N/A",
            "Accidental Death & Loss of Limb", "$25,000", "$25,000", "$25,000",
            "Medical Evacuation", "$500,000", "$50,000", "$500,000",
            "Repatriation of remains", "$50,000", "$25,000", "$50,000",
            "Pre-existing conditions (Illness or Injury)", "Standard Plan: After 12 months of continuous coverage<br />Platinum Plan: After 6 months of continuous coverage", "After 12 months of continuous coverage", "Up to $50,000 coverage ($2,500 for over 65 years old) for sudden and unexpected recurrence. Otherwise not covered.",
            "Group Pricing", "2 or more primary insured have about 10% discount", "2 or more primary insured have about 10% discount", "5 or more primary insured have about 10% discount",
            "",
            makeResourceCenterURL(loc("Questions and Answers about Plan A"),"pivot-qanda-plana"),
            makeResourceCenterURL(loc("Questions and Answers about Plan B"),"pivot-qanda-planb"),
            makeResourceCenterURL(loc("Questions and Answers about Patriot Travel"),"pivot-qanda-travel")  
           

            ])
            );
    endRow();

    startRow();
    writeText("");
    endRow();    

    

    startRow();
    writeText("");
    endRow();
            
    startRow();
    writeText("More plan details:");
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More about Student Health Advantage",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "On the Plan A effective date you need to have a valid J1/F1 visa and be outside of your home country for your study or program.  Taian Plan A covers maternity only if the pregnancy begins after the plan is effective.",
                        "Routine Nursery Care $750 maximum for 31 days after birth if the birth is covered under the plan",
                        "In vitro fertilization or artificial insemination is not covered.",                        
                        "Emergency Room: Injury: URC; Illness resulting in hospitalization: URC; Illness without hospitalization: Subject to addtional $250 deductible",
                        "Physical Therapy: URC -limit once per day",
                        "Standard Plan Local Ambulance: Per injury up to $350, Per illness only if admitted in-patient up to $350",
                        "Platinum Plan Local Ambulance: Per injury up to $750, Per illness only if admitted in-patient up to $750",
                        "Dental: Injury due to covered accident $500; Sudden & unexpected pain $350",
                        "Intercollegiate/Interscholastic/intramural or club sports: $5,000 per injury/illness medical expenses only",
                        "Incidental home country coverage: up to cumulative two weeks",
                        "Terrorism coverage: up to 50,000 lifetime maximum",
                        "F2/J2 dependents can only purchase when the F1/J1 purchases.  Maximum limit per period of coverage and per illness maximum for dependents is $50,000 (Standard Plan A) or $100,000 (Platinum Plan A)",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays.",                        
                        "Standard Plan: Optional benefit change in Florida, Hawaii, Idaho, Massachusetts to shorten the preexisting condition exclusion from 12 months to 6 months. With 6 month preexisting condition benefit change there is a 10 month wait for maternity benefits."                        
                        ]),


                "Full Brochure", makeURL("Full Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1938&a=80000699")



                ]));

    endRow();

    startRow();
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More on Taian Patriot Exchange",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "Taian Patriot Exchange Plan B with $50,000 limit per illness/injury is the most affordable plan that meets the US Dept of State standards for Exchange visitors (J visa) which are: At least $50,000 per illness, repatriation of remains of $7,500, Medical evacuation benefits of $10,000, and a deductible not over $500.",
                        "All Taian Patriot Exchange plans meet the USDOS standards.",
                        "J2/F2 can buy TaiAn Plan B with the F1/J1. If the J1/F1 has purchased school insurance the J2/F2 dependents can purchase TaiAn Plan B alone. If the J1/F1 has purchased TaiAn Plan B and his/her J2/F2 dependents come later, they can purchase Plan B alone for different dates.",                        
                        "Plastic ID card (ONLY AVAILABLE FROM TAIAN) available for purchases of six months or longer",
                        "You can select the day after you submit application or any later date as your insurance effective date.  The insurance can only be effective after you arrive in the foreign country for your exchange program.",                        
                        "Taian Patriot Exchange Group plan available for groups of 2 or more primary applicants. Use one credit card to pay for the whole group. Use the credit card holder\'s initials as the \"Sponsoring Organization\". Use the credit card holders name as the \"Contact Name\".  Use the credit card holder's email as the group contact for the plan.",
                        "Other available options include: travel protection for baggage and valuables, legal assistance, personal liability coverage, adventure sports coverage",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays."
                        ]),

                "Full Brochures", 
                makeBulletedListWithTitle("", [
                        makeURL("Taian Patriot Exchange Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2857"),  

                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2943") : ""),

                        makeURL("Taian Patriot Exchange Group Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2858"),                        
                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Group Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2944") + loc("<br />If Chinese version is in conflict with English one, please follow the  English one") : "")
                        

                        ])


               ]));

    endRow();    
    
    startRow();
    writeText("");
    endRow();
    
    startRow();
    writePatriotTravelTable();
    endRow();    
    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("We have native English and Chinese speakers to answer all of your questions.");
    endRow();

    startRow();
    writeText("Contact us to ensure a plan meets your requirements.");
    endRow();

    startRow();
    writeText(loc("Other plans that cover more visa types:") + " " + makePivotURL("pivot-global-medical", "Global Medical") + " " + loc("and") + " " + makePivotURL("pivot-travel-insurance", "Patriot Travel"));
    endRow();

    startRow();
    writeText("Insurance policy is underwritten by a health insurance company that is 'A' rated by A.M.Best");
    endRow();

    writeDontSeeWhatYouNeedRow();
    endSection();


    // Taian Patriot Exchange Price Chart
    startSection("pivot-taian-patriotexchange", "Taian Patriot Exchange Price Chart");



    startRow();
    writeText("");
    endRow();
    

    startRow();

    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    startRow();
    document.write(makeTable(4,
            [
            // Column headers:
            "TaiAn Scholars and Students",

            makeRawURL("Plan B (Taian Patriot Exchange), $100 per illness deductible", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeRawURL("Plan B (Taian Patriot Exchange), $250 annual deductible", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeRawURL("Plan B (Taian Patriot Exchange), $500 annual deductible", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),            
            
            // Rest of the table:
            // Row 2
            "Plan Type", "Per Illness or Injury Deductible", "Annual Deductible", "Annual Deductible",

            // Row 3
            "Deductible (Insured pays before insurance pays)", "$100 per illness/injury", "$250 per policy year", "$500 per policy year",
            "Maximum Limit", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury",

            "", "", "*******BEST VALUE*******", "******LOWEST PRICE******",

            "Cost Per Month (Non-US Citizens)",
            loc("$50,000 per illness/injury, $100 per illness deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$48.62","$48.62",  "$48.62",
                    "25-49",   "$63.37","$63.37",  "$48.62",
                    "50-64",   "$135.70","$135.70","$48.62"
                    ]) +

            loc("$100,000 per illness/injury, $100 per illness deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$56.45","$56.45",  "$56.45",
                    "25-49",   "$73.50","$73.50",  "$56.45",
                    "50-64",   "$157.35","$157.35","$56.45"
                    ]) + 
                    
            loc("$250,000 per illness/injury, $100 per illness deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$60.36","$60.36",  "$60.36",
                    "25-49",   "$78.59","$78.59",  "$60.36",
                    "50-64",   "$168.27","$168.27","$60.36"
                    ]) + 

            loc("$500,000 per illness/injury, $100 per illness deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$63.66","$63.66",  "$63.66",
                    "25-49",   "$82.90","$82.90",  "$63.66",
                    "50-64",   "$177.53","$177.53","$63.66"
                    ]),

            loc("$50,000 per illness/injury, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$47.16","$47.16",  "$47.16",
                    "25-49",   "$61.47","$61.47",  "$47.16",
                    "50-64",   "$131.63","$131.63","$47.16"
                    ]) +

            loc("$100,000 per illness/injury, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$54.76","$54.76",  "$54.76",
                    "25-49",   "$71.30","$71.30",  "$54.76",
                    "50-64",   "$152.63","$152.63","$54.76"
                    ]) + 
                    
            loc("$250,000 per illness/injury, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$58.55","$58.55",  "$58.55",
                    "25-49",   "$76.23","$76.23",  "$58.55",
                    "50-64",   "$163.22","$163.22","$58.55"
                    ]) + 

            loc("$500,000 per illness/injury, $250 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$61.75","$61.75",  "$61.75",
                    "25-49",   "$80.41","$80.41",  "$61.75",
                    "50-64",   "$172.20","$172.20","$61.75"
                    ]),   
            loc("$50,000 per illness/injury, $500 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$43.86","$43.86",  "$43.86",
                    "25-49",   "$57.17","$57.17",  "$43.86",
                    "50-64",   "$122.41","$122.41","$43.86"
                    ]) +

            loc("$100,000 per illness/injury, $500 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$50.92","$50.92",  "$50.92",
                    "25-49",   "$66.30","$66.30",  "$50.92",
                    "50-64",   "$141.95","$141.95","$50.92"
                    ]) + 
                    
            loc("$250,000 per illness/injury, $500 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$54.45","$54.45",  "$54.45",
                    "25-49",   "$70.90","$70.90",  "$54.45",
                    "50-64",   "$151.80","$151.80","$54.45"
                    ]) + 

            loc("$500,000 per illness/injury, $500 annual deductible") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$57.43","$57.43",  "$57.43",
                    "25-49",   "$74.78","$74.78",  "$57.43",
                    "50-64",   "$160.15","$160.15","$57.43"
                    ]),                      
     
            "", 
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Taian Patriot Exchange"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Taian Patriot Exchange"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Taian Patriot Exchange"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),

                "", 
            makeBuyURL(loc("Buy Group B (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Group B (10% off)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699"),
            makeBuyURL(loc("Buy Group B (10% off, $39 and up)") + "<br />" + loc("For 2 primary insured or more"), "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699"),            
            
            "", "Group price 10% below individual", "Group price 10% below individual", "Group price 10% below individual"
            
                
           
            
            ])
            );
    endRow();

    startRow();
    writeText("");
    endRow();    


    startRow();
    writeText("");
    endRow();
            



    endSection();

    
 
    
    
    // J Scholar
    startSection("pivot-j-scholar", "J Scholar");

    var partnerShip = getPartnership(getPageAttribute("partner"));
    var jScholarPartnerContent = partnerShip["jScholarContent"];
    var hasISPartnerContent = !(typeof jScholarPartnerContent === "undefined");
    if (hasISPartnerContent) {
        jScholarPartnerContent();
    }

    startRow();
    writeText("<strong>" + makePivotURL("pivot-school-waiver", "Find your school insurance requirements and most affordable plan here") + "</strong>");
    endRow();
   
    startRow();
    writeText(makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/"));
    endRow(); 



    startRow();

    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    document.write(makeTable(3, [
                "Taian Travel Insurance",
                makeRawURL("Patriot America For non-US citizens traveling internationally", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                makeRawURL("Patriot International For US citizens traveling outside  home country", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                "Insurance Provider", "IMG (International Medical Group)", "IMG (International Medical Group)", 
                "Lifetime maximum", "$50,000, $100,000, $500,000, $1,000,000", "$50,000, $100,000, $500,000, $1,000,000", 
                "Term", "5 days to 2 years", "5 days to 2 years", 
                "Deductible", "$0, $100, $250, $500, $1,000, $2,500", "$0, $100, $250, $500, $1,000, $2,500", 
                "Coinsurance", "In-PPO 90% to $5,000, then 100%<br />Out-PPO, 80% to $5,000 then 100%", "No coinsurance outside of U.S.",
                "Intensive care unit", "Up to the Maximum", "Up to the Maximum",
                "Hospitalization / room & board", "Up to the Max for average semi-private room rate", "Up to the Maximum for average semi-private room rate",
                "Hospital Daily Indemnity", "$100 per day.  10 day maximum.", "$100 per day.  10 day maximum.",
                "Prescription Drugs", "Up to the Maximum", "Up to the Maximum",
                "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
                "Local Ambulance", "Up to Maximum for injury resulting in needed emergency care, or illness resulting in overnight hospital stay. Otherwise not covered.", "Up to Maximum for injury resulting in needed emergency care, or illness resulting in overnight hospital stay. Otherwise not covered.",
                "Accidental Dental Injury", "Up to the Maximum", "Up to the Maximum",
                "Sport & Activities Coverage", "Up to the Maximum for basic sports", "Up to the Maximum for basic sports",
                "Trip Interruption", "Up to $5,000", "Up to $5,000", 
                "Accidental Death & Loss of Limb", "$25,000 principal sum", "$25,000 principal sum", 
                "Emergency Medical Evacuation", "$500,000", "$500,000", 
                "Repatriation of remains", "$50,000", "$50,000", 
                "Pre-existing conditions", "Up to $50,000 coverage ($2,500 for over 65 years old) for sudden and unexpected recurrence. Otherwise not covered.", "Up to policy limit for sudden and unexpected recurrence if covered by domestic health policy ($2,500 for over 65 years old). Up to $20,000 if not covered by domestic policy. Otherwise not covered.",


                "",
                makeBuyURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                makeBuyURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699")

                ]));
    endRow();

    startRow();
    writeText("");
    endRow();
    
    startRow();
    writeText("More about Patriot Travel");
    endRow();
    
    startRow();
    writePatriotTravelTable();
    endRow();









    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("Why do I need travel medical insurance?");
    endRow();

    startRow();
    document.write(makeTableWithStyle("invisibleTableNormalText", 3, [
                makeText(makeBold("Most medical insurance coverage will not provide benefits in a different country.")+ " "+ loc("If you are a US citizen, your passport says, \"Health Insurance: Medical costs abroad can be extremely expensive. Does your insurance apply overseas, including medical evacuation, payment to the overseas hospital or doctor, or reimbursement to you later?.....Medicare/Medicaid does not cover healthcare costs outside the US.\"")),
                makeText(makeBold("Medical Evacuation is an important benefit.") + " " + loc("Maybe you are visiting a part of the world with a lesser developed healthcare system. You planned ahead and had your travel vaccines before you left, but what if you get injured on your trip? You might need to be evacuated to an adequate hospital. A medical evacuation benefit will provide what you need.")),
                makeText(makeBold("Trip cancellation, lost baggage, travel delay benefits.")+ " " + loc("You spent a year planning for and saving for your trip. Now, you arrive at the airport for a connecting flight and the flight is cancelled. You don’t need a health insurance benefit, but you sure could use a travel insurance benefit. Help cover your costs for unforeseen travel problems with the right travel insurance coverage for you."))
                ]));
    endRow();

    startRow();
    writeText("");
    document.write(makeBulletedListWithTitle("Travel Tips", [
                loc("Visit") + " " + makeURL("CDC (Center for Disease Control)", "http://www.cdc.gov/") + " " + loc(" to learn about travel vaccine recommendations. They provide an up to date list by country of which travel vaccinations are required or recommended. They also provide up to date health information by location. Did you know a vaccine booster for Polio is recommended for travel to some locations? Also, the vaccines for Hepatitis A and B are good for life – be safe once now and you are covered forever! Once you have your passport health care preparations are critical."),
                loc("Travel visa requirements depend on the country you are visiting. A US citizen might need a visa depending on where they are going. A visitor to the United States might need a visa depending on the nature of their visit. For details see the") + " " + makeURL("State Department website", "http://travel.state.gov/visa/visa_1750.html") + "."
                ]));
    endRow();

    writeDontSeeWhatYouNeedRow();

    endSection();
 

   
   
    // International Scholar
    startSection("pivot-scholar-student", "International Scholar/Student");

    var partnerShip = getPartnership(getPageAttribute("partner"));
    var scholarStudentPartnerContent = partnerShip["scholarStudentContent"];
    var hasSStuPartnerContent = !(typeof scholarStudentPartnerContent === "undefined");
    if (hasSStuPartnerContent) {
        scholarStudentPartnerContent();
    }

    startRow();
    writeText("");
    endRow();
    
    startRow();
    writeText("<strong>" + makePivotURL("pivot-school-waiver", "Find your school insurance requirements and most affordable plan here") + "</strong>");
    endRow();
   
    startRow();
    writeText(makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/"));
    endRow();   
    
    startRow();

    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    startRow();
    document.write(makeTable(4,
            [
            // Column headers:
            "TaiAn Scholars and Students",
            makeRawURL("Plan B (Taian Patriot Exchange), $100 per illness deductible", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"),

            makeRawURL("Plan B (Taian Patriot Exchange)- Annual Deductible<br />ONLY AVAILABLE FROM TAIAN", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699"), 
            makeRawURL("Plan C (Patriot Travel for non-US citizens)", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),            

            // Rest of the table:
            // Row 2
            "Insurance Provider", "IMG (International Medical Group)", "IMG (International Medical Group)", "IMG (International Medical Group)",            
            "Plan Type", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.", "Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.", "Designed for anyone traveling outside their home country. F2/J2 can buy alone. Purchase daily (at least 5 days) or monthly, renewable up to 2 years if 1 month or more is purchased.",

            // Row 3
            "Maximum Limit", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury", "$50,000, $100,000, $500,000, $1,000,000 lifetime maximum",



            "Deductible (Insured pays before insurance pays)", "$100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays.", "$250 or $500 annual deductible: During whole policy period (not over a year), insured pays $250 or $500 before insurance pays 100%.<br />IMG product, Taian Exclusive!", "$0, $100, $250, $500, $1,000, $2,500 annual deductible",
            "Student Health Center Copay", "$5 copay, no deductible", "$5 copay, no deductible", "N/A",
            "Coinsurance", "No coinsurance in PPO or out of PPO", "No coinsurance in PPO or out of PPO", "In-PPO 90% to $5,000, then 100%<br />Out-PPO, 80% to $5,000 then 100%",
            "Hospital Room & Board", "Average semi-private room", "Average semi-private room", "Average semi-private room", 
            "Intensive Care", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)",
            "Maternity", "N/A", "N/A", "N/A",
            "Mental Health", "N/A", "N/A", "N/A",
            "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
            "Prescription Drugs", "URC", "URC", "URC",
            "Accident Dental", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350", "Injury up to policy max, Sudden pain N/A",
            "Accidental Death & Loss of Limb", "$25,000", "$25,000", "$25,000",
            "Medical Evacuation", "$50,000", "$50,000", "$500,000",
            "Repatriation of remains", "$25,000", "$25,000", "$50,000",
            "Pre-existing conditions", "After 12 months of continuous coverage", "After 12 months of continuous coverage", "Up to $50,000 coverage ($2,500 for over 65 years old) for sudden and unexpected recurrence. Otherwise not covered.",
            "Group Pricing", "2 or more primary insured have about 10% discount", "2 or more primary insured have about 10% discount", "5 or more primary insured have about 10% discount",
            "",
            makeResourceCenterURL(loc("Questions and Answers about Plan B"),"pivot-qanda-planb"),
            makeResourceCenterURL(loc("Questions and Answers about Plan B"),"pivot-qanda-planb"),
            makeResourceCenterURL(loc("Questions and Answers about Patriot Travel"),"pivot-qanda-travel")  

           

            ])
            );
    endRow();

    startRow();
    writeText("");
    endRow();    

    

    startRow();
    writeText("");
    endRow();
            


    startRow();
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More on Taian Patriot Exchange",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "Taian Patriot Exchange Plan B with $50,000 limit per illness/injury is the most affordable plan that meets the US Dept of State standards for Exchange visitors (J visa) which are: At least $50,000 per illness, repatriation of remains of $7,500, Medical evacuation benefits of $10,000, and a deductible not over $500.",
                        "All Taian Patriot Exchange plans meet the USDOS standards.",
                        "J2/F2 can buy TaiAn Plan B with the F1/J1. If the J1/F1 has purchased school insurance the J2/F2 dependents can purchase TaiAn Plan B alone. If the J1/F1 has purchased TaiAn Plan B and his/her J2/F2 dependents come later, they can purchase Plan B alone for different dates.",                        
                        "Plastic ID card (ONLY AVAILABLE FROM TAIAN) available for purchases of six months or longer",
                        "You can select the day after you submit application or any later date as your insurance effective date.  The insurance can only be effective after you arrive in the foreign country for your exchange program.",                        
                        "Taian Patriot Exchange Group plan available for groups of 2 or more primary applicants. Use one credit card to pay for the whole group. Use the credit card holder\'s initials as the \"Sponsoring Organization\". Use the credit card holders name as the \"Contact Name\".  Use the credit card holder's email as the group contact for the plan.",
                        "Other available options include: travel protection for baggage and valuables, legal assistance, personal liability coverage, adventure sports coverage",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays."
                        ]),

                "Full Brochures", 
                makeBulletedListWithTitle("", [
                        makeURL("Taian Patriot Exchange Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2857"),  

                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2943") : ""),

                        makeURL("Taian Patriot Exchange Group Full Brochure", 
                        "http://producer.imglobal.com/producerdocuments.ashx?documentid=2858"),                        
                        (langIsChinese() ?  makeURL("TaiAn Patriot Exchange Group Chinese Brochure", "http://producer.imglobal.com/producerdocuments.ashx?documentid=2944") + loc("<br />If Chinese version is in conflict with English one, please follow the  English one") : "")
                        

                        ])


               ]));

    endRow();    
    
    startRow();
    writeText("");
    endRow();
    
    startRow();
    writePatriotTravelTable();
    endRow();    
    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("We have native English and Chinese speakers to answer all of your questions.");
    endRow();

    startRow();
    writeText("Contact us to ensure a plan meets your requirements.");
    endRow();

    startRow();
    writeText(loc("Other plans that cover more visa types:") + " " + makePivotURL("pivot-global-medical", "Global Medical") + " " + loc("and") + " " + makePivotURL("pivot-travel-insurance", "Patriot Travel"));
    endRow();

    startRow();
    writeText("Insurance policy is underwritten by a health insurance company that is 'A' rated by A.M.Best");
    endRow();

    writeDontSeeWhatYouNeedRow();



    endSection();
    

    
    
    // Global Medical
    //
    startSection("pivot-global-medical", "Global Medical");

    startRow();
    writeText(loc("Global insurance designed for non-US citizens to use worldwide, and US citizens to use outside of the United States.") + "    " + loc("A good choice for a baby born in the US and living outside the US."));
    endRow();


    var partnerShip = getPartnership(getPageAttribute("partner"));
    var globalCitizenPartnerContent = partnerShip["globalCitizenContent"];
    var hasGCiPartnerContent = !(typeof globalCitizenPartnerContent === "undefined");
    if (hasGCiPartnerContent) {
        globalCitizenPartnerContent();
    }
    
    
    startRow();
    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    startRow();
    document.write(makeTable(4,
            [
            // Column headers:
            "TaiAn Global Medical",
            makeRawURL("Global Medical (Silver Plan) $250 deductible", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
            makeRawURL("Global Medical (Gold Plan and Gold Plus Plan) $500 deductible (See Notes below)", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
            makeRawURL("Global Medical (Platinum Plan) $1000 deductible", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),


		    "Annual Deductible", "$250, $500, $1,000, $2,500, $5,000, $10,000", "$250, $500, $1,000, $2,500, $5,000, $10,000", "$100, $250, $500, $1,000, $2,500, $5,000, $10,000",	
            "Family Deductible", "3 times the individual", "3 times the individual", "2 times the individual", 
            "Lifetime Max limit", "$5,000,000 per individual",  "$5,000,000 per individual", "$8,000,000 per individual", 
            "Treatment inside the U.S.", "In-PPO: deductible 50% waived (up to $2500). No coinsurance.<br />Non-PPO: 20% of next $5000 expenses after deductible", "In-PPO: deductible 50% waived (up to $2500). No coinsurance.<br />Non-PPO: 20% of next $5000 expenses after deductible", "In-PPO: deductible 50% waived (up to $2500). No coinsurance<br />Non-PPO: 10% of next $5000 expenses after deductible",
            "Treatment outside the U.S. (Except Canada)", "Subject to deductible. No coinsurance", "Subject to deductible. No coinsurance", "Subject to deductible. No coinsurance",
            "Treatment in Canada", "Subject to deductible.  20% of next $5000 expenses after deductible", "Subject to deductible.  20% of next $5000 expenses after deductible", "Subject to deductible.  10% of next $5000 expenses after deductible",
            "Intensive care unit", "$1,500/day, 180 day /event", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)",
            "Hospitalization/room & board", "In U.S. average semi-private room rate. Outside of U.S. URC of private room rate (not exceed 150% semi-private). All subject to $600/day, 240 day max", "In U.S. average semi-private room rate. Outside of U.S. URC of private room rate (not exceed 150% semi-private).", "Private room rate",
            "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
            "Local Ambulance", "$1500/event - not subject to deductible or coinsurance", "URC", "URC",
            "Child Wellness (under 18 y/o)", "3 visit/period, $70 max/period. Available after 12 months of coverage", "$200/period, not subject to deductible or coinsurance. Available after 12 months of coverage", "$400/period, not subject to deductible or coinsurance. Available after 6 months of coverage",
            "Adult Wellness", "NA", "$250/period, not subject to deductible or coinsurance.  Available for those at least 30 years old after 12 months of coverage", "$500/period, not subject to deductible or coinsurance. Available for those at least 18 years old after 6 months of coverage", 
            "Emergency Dental (accident)", "$1,000/period", "URC", "URC", 
            "Non-emergency Dental", "Optional Rider", "Optional Rider", "$750/year", 
            "Vision", "Optional Rider", "Optional Rider", "Exams-up to $100. Materials-up to $150 per 24 months", 
            "Surgery", "URC", "URC", "URC", 
            "Emergency Evacuation", "$50,000 per period, not subject to deductible or coinsurance", "Up to the maximum limit, not subject to deductible or coinsurance", "Up to the maximum limit, not subject to deductible or coinsurance", 
            "Repatriation of remains", "$25,000 per insured, not subject to deductible or coinsurance", "$25,000 per insured, not subject to deductible or coinsurance", "$50,000 per insured, not subject to deductible or coinsurance", 
            "Mental/Nervous", "Out-patient only, after 12 month of coverage", "$10,000 per year - $50,000 max, after 12 month of coverage", "$50,000 max, after 12 month of coverage", 
            "Pre-existing conditions", "May have limited coverage after 24 months or be excluded at time of underwriting", "May have limited coverage after 24 months or be excluded at time of underwriting", "May be covered same as any illness or excluded at time of underwriting",
            "Maternity", "Optional Rider (cost $4000 per year) - Maternity is covered same as any illness for any maternity related claim with a service date that occurs after 12 months of coverage. - $50,000 lifetime max. Max of $5000 for normal delivery, $7500 for C-section. $200 child wellness for first 12 month. new born care & congenital disorders max of $250,000 for the first 31 days (benefits reduced by 50% for births that occur in the 11th or 12th month of coverage).  Maternity related claims with dates of service before 10 months are not covered.", "Optional Rider (cost $4000 per year) - Maternity is covered same as any illness for any maternity related claim with a service date that occurs after 12 months of coverage. - $50,000 lifetime max. Max of $5000 for normal delivery, $7500 for C-section. $200 child wellness for first 12 month. new born care & congenital disorders max of $250,000 for the first 31 days (benefits reduced by 50% for births that occur in the 11th or 12th month of coverage).  Maternity related claims with dates of service before 10 months are not covered.", "Maternity is covered same as any illness for any maternity related claim with a service date that occurs after 10 months of coverage - $1000 additional deductible, $50,000 lifetime max. $200 child wellness for the first 12 months. new born care & congenital disorders max of $250,000 for the first 31 days. Maternity related claims with dates of service before 10 months are not covered.",

            "Monthly Rate",
            loc("Dependent child - see notes below") +
            makeTable(3, [
                    "Age", "Male", "Female",
    
                    "14 days - 9", "$0/$26",    "$0/$26",  
                    "10-18", "$27",    "$27"  

                    ]) +
              loc("Adult") +
            makeTable(3, [
                    "Age", "Male", "Female",
                    
                    "19-24", "$61",    "$76",
                    "25-29", "$64",    "$87",
                    "30-34", "$72",    "$96",
                    "35-39", "$82",    "$116",
                    "40-44", "$104",   "$127",
                    "45-49", "$116",   "$140",
                    "50-54", "$142",   "$156",
                    "55-59", "$175",   "$175",
                    "60-64", "$257",   "$242"
                    ]),
            loc("GOLD PLAN ") +                    
            loc("Dependent child - see notes below") +                    
            makeTable(3, [
                    "Age", "Male", "Female",
    
                    "14 days - 9", "$0/$31",    "$0/$31",  
                    "10-18", "$33",    "$33" 

                    ]) +
              loc("Adult") +                    
            makeTable(3, [
                    "Age", "Male", "Female",
                    
                    "19-24", "$73",    "$106",
                    "25-29", "$74",    "$115",
                    "30-34", "$79",    "$122",
                    "35-39", "$82",    "$129",
                    "40-44", "$115",   "$149",
                    "45-49", "$132",   "$161",
                    "50-54", "$155",   "$169",
                    "55-59", "$204",   "$198",
                    "60-64", "$300",   "$282"
                    ]),                     

            loc("Dependent child - see notes below") +                    
             makeTable(3, [
                    "Age", "Male", "Female",
    
                    "14 days - 9", "$0/$125",    "$0/$125",  
                    "10-18", "$130",    "$130" 

                    ]) +
              loc("Adult") +                     
             makeTable(3, [
                    "Age", "Male", "Female",
                 
                    "19-24", "$199",    "$293",
                    "25-29", "$205",    "$352",
                    "30-34", "$224",    "$409",
                    "35-39", "$236",    "$455",
                    "40-44", "$290",   "$497",
                    "45-49", "$355",   "$396",
                    "50-54", "$803",   "$858",
                    "55-59", "$1066",   "$1058",
                    "60-64", "$1268",   "$1188"
                    ]),   

              "Monthly Rate", "",

            loc("GOLD PLUS PLAN ") +      

            loc("Dependent child - see notes below") +                    
            makeTable(3, [
                    "Age", "Male", "Female",
    
                    "14 days - 9", "$0/$41",    "$0/$41",  
                    "10-18", "$43",    "$43" 

                    ]) +
              loc("Adult") +                    
            makeTable(3, [
                    "Age", "Male", "Female",
                    
                    "19-24", "$80",    "$112",
                    "25-29", "$83",    "$125",
                    "30-34", "$93",    "$144",
                    "35-39", "$104",    "$162",
                    "40-44", "$134",   "$179",
                    "45-49", "$168",   "$193",
                    "50-54", "$342",   "$368",
                    "55-59", "$464",   "$455",
                    "60-64", "$578",   "$530"
                    ]),                     

                    "",           




            "", 
            makeBuyURL("Buy Global Medical (Silver Plan)", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
            makeBuyURL("Buy Global Medical (Gold and Gold Plus)", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
            makeBuyURL("Buy Global Medical (Platinum Plan)", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699")
            ]));
    endRow();

    startRow();
    writeText("");
    writeText("More details on Global medical:");
    endRow();

    startRow();
    document.write(makeTable(2, [
                "Plan", makeRawURL("Global Medical Insurance", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),

                "More about Child/Children Rates", 
                makeBulletedListWithTitle("", [
                        "Up to 2 dependent children 14 days to 9 years old are no charge for first year of coverage with two parents covered.",
                        "One parent with dependent children 14 days to 9 years old use these rates (per child):  Silver  - $26, Gold - $31, Gold Plus - $41, Platinum - $125.",
                        "Dependent child/children rates (ages 10- 18) are only available when one or two parents are covered. See chart for the rates.  The rates are per child.",
                        "Children alone (14 days to 18 years old) use the single male 19 year old rate."
                      
                        ]),  
                "More about Gold Plan and Gold Plus Plan", 
                makeBulletedListWithTitle("", [
                        "Benefits for Gold Plan and Gold Plus Plan are the same for the first three years.",
                        "Gold Plan benefits are reduced after three years. Reduced benefits include: hospital room and board reimbursement rate, Intensive care reimbursement rate, physician charges, anesthetist and more.",
                        "Gold Plus Plan is better for those planning to keep the policy over three years."
                      
                        ]),                        
                
                "Plan Highlights", 
                makeBulletedListWithTitle("", [
                        "Annually renewable comprehensive worldwide medical coverage for non-US nationals worldwide or US citizen working abroad",
                        "Available up to age 74",
                        "Deductible options from $100 to $10,000.",
                        "Maximum policy benefits from $5,000,000 to $8,000,000",
                        "Hospitalization / room & board covers average semi-private room rate.",
                        "Up to $50,000 medical evacuation",
                        "Up to $5,000-50,000 repatriation of remains to home country.",
                        "Flexible, comprehensive medical coverage",
                        "Coverage for individuals and families",
                        "Four unique plan designs - Silver, Gold, Gold Plus and Platinum",
                        "Optional riders: Global Term Life Insurance, Global Daily Indemnity, Maternity, Terrorism, Sports, Dental, Vision",
                        "Choose your area of coverage (worldwide or worldwide excluding the U.S., Canada, China, Hong Kong, Macau, Taiwan, Singapore and Japan)",
                        "Select from multiple deductible options",

                        "Choose from several payment modes",
                        "Rates illustrated above are for annual premium, rates are higher for monthly payment",
                        "Multiple underwriting options to fit your needs",
                        "Freedom to seek treatment with hospital or doctor of your choice",
                        "Access to two extensive provider networks",
                        "Emergency Medical Evacuation and other evacuation benefits",
                        "Medical Concierge Program",
                        "Medical professionals to coordinate your care",
                        "24 hour access to information",
                        "To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays."                        
                        ]),

                "Who the plan is designed for",
                makeBulletedListWithTitle("", [
                        "Coverage for individuals or families living or working abroad",
                        "Contract employees living and working abroad",
                        "Seniors with dual residencies six months or longer outside the U.S.",
                        "Non-US citizens coming to the US to have a baby. For maternity coverage you must purchase before becoming pregnant.  Maternity related claims with dates of service before 10 months are not covered."
                        ]),

                "Which Plan is best for you?",
                makeBulletedListWithTitle("", [
                        "Silver plan is most economical",
                        "Gold Plan is the best value",
                        "Platinum is best for those wanting the best coverage or considering having a baby.  Maternity related claims with dates of service before 10 months are not covered."
                        ]),


                "Complete Brochure", 
                makeBulletedListWithTitle("", [
                        makeURL("Complete Brochure English", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1804&a=80000699"),
                        makeURL("Chinese Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=2963&a=80000699"),
                        makeURL("Spanish Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1813&a=80000699")+ loc("<br />If the brochure in your language is in conflict with the English one, please follow the English one")                     

                        ]),
                "", makeBuyURL("Buy Global Medical Insurance", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699")                        
                        ])
                );
    endRow();

    writeDontSeeWhatYouNeedRow();

    endSection();

    // Travel Insurance
    startSection("pivot-travel-insurance", "Travel Insurance");

    startRow();
    writeText("Taian Travel Insurance is designed for anyone (U.S. and non-U.S. citizens) traveling out of their home country, regardless of visa requirements. Cost starts at about $1/day. Purchase 5 days - 1 year, and renewable up to 2 years if 1 month or more is purchased initially. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter).  You can use the confirmation letter as proof of your insurance.");
    endRow();
    
    var partnerShip = getPartnership(getPageAttribute("partner"));
    var travelStudentPartnerContent = partnerShip["travelStudentContent"];
    var hasTStPartnerContent = !(typeof travelStudentPartnerContent === "undefined");
    if (hasTStPartnerContent) {
        travelStudentPartnerContent();
    }    

    startRow();
    document.write(makeTableWithStyle("invisibleTableNormalText", 3, [
                makeSubsectionURL("travel-subsections", "patriot-travel", "Patriot Travel Medical Insurance"),
                makeSubsectionURL("travel-subsections", "patriot-platinum", "Patriot Platinum Travel Medical Insurance"),
                makeSubsectionURL("travel-subsections", "trip-travel", "TRIP Insurance"),

                makeBulletedListWithTitle("", [
                        "Medical coverage for most international travelers",
                        "Plan designs for U.S. citizens and non-U.S. citizens"
                        ]),

                makeBulletedListWithTitle("", [
                        "Similar to Patriot Travel but more coverage",
                        "Great for Ages 70 and over"
                        ]),

                makeBulletedListWithTitle("", [
                        "Coverage to protect your travel cost and basic emergency medical coverage"
                        ])
                ]));
    endRow();

    startSubsections("travel-subsections");

    startSubsection("patriot-travel");

    startRow();

    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    document.write(makeTable(3, [
                "Taian Travel Insurance",
                makeRawURL("Patriot America For non-US citizens traveling internationally", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                makeRawURL("Patriot International For US citizens traveling outside  home country", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),

                "Lifetime maximum", "$50,000, $100,000, $500,000, $1,000,000", "$50,000, $100,000, $500,000, $1,000,000", 
                "Term", "5 days to 2 years", "5 days to 2 years", 
                "Deductible", "$0, $100, $250, $500, $1,000, $2,500", "$0, $100, $250, $500, $1,000, $2,500", 
                "Coinsurance", "In-PPO 90% to $5,000, then 100%<br />Out-PPO, 80% to $5,000 then 100%", "No coinsurance outside of U.S.",
                "Intensive care unit", "Up to the Maximum", "Up to the Maximum",
                "Hospitalization / room & board", "Up to the Max for average semi-private room rate", "Up to the Maximum for average semi-private room rate",
                "Hospital Daily Indemnity", "$100 per day.  10 day maximum.", "$100 per day.  10 day maximum.",
                "Prescription Drugs", "Up to the Maximum", "Up to the Maximum",
                "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
                "Local Ambulance", "Up to Maximum for injury resulting in needed emergency care, or illness resulting in overnight hospital stay. Otherwise not covered.", "Up to Maximum for injury resulting in needed emergency care, or illness resulting in overnight hospital stay. Otherwise not covered.",
                "Accidental Dental Injury", "Up to the Maximum", "Up to the Maximum",
                "Sport & Activities Coverage", "Up to the Maximum for basic sports", "Up to the Maximum for basic sports",
                "Trip Interruption", "Up to $5,000", "Up to $5,000", 
                "Accidental Death & Loss of Limb", "$25,000 principal sum", "$25,000 principal sum", 
                "Emergency Medical Evacuation", "$500,000", "$500,000", 
                "Repatriation of remains", "$50,000", "$50,000", 
                "Pre-existing conditions", "Up to $50,000 coverage ($2,500 for over 65 years old) for sudden and unexpected recurrence. Otherwise not covered.", "Up to policy limit for sudden and unexpected recurrence if covered by domestic health policy ($2,500 for over 65 years old). Up to $20,000 if not covered by domestic policy. Otherwise not covered.",
                "Group Pricing", "5 or more primary insured have about 10% discount", "5 or more primary insured have about 10% discount",
                "Monthly rate for $50,000 maximum and $250 deductible ($10,000 max for 80+ age) - minimum purchase 5 days",
                makeTable(2, [
                    "Age", "Rate",
                    "dependent child", "$34.00",
                    "&lt; 30", "$37.00",
                    "30-39", "$49.00",
                    "40-49", "$73.00",
                    "50-59", "$107.00",
                    "60-64", "$135.00",
                    "65-69", "$154.00",
                    "70-79", "$208.00",
                    "80+",   "$362.00"
                    ]),
                makeTable(2, [
                    "Age", "Rate",
                    "dependent child", "$21.00",
                    "&lt; 30", "$23.00",
                    "30-39", "$28.00",
                    "40-49", "$50.00",
                    "50-59", "$81.00",
                    "60-64", "$98.00",
                    "65-69", "$116.00",
                    "70-79", "$170.00",
                    "80+",   "$340.00"
                    ]),

                "Monthly rate for $50,000 maximum and $1000 deductible ($10,000 max for 80+ age) - minimum purchase 5 days",
                makeTable(2, [
                    "Age", "Rate",
                    "dependent child", "$27.20",
                    "&lt; 30", "$29.60",
                    "30-39", "$39.20",
                    "40-49", "$58.40",
                    "50-59", "$85.60",
                    "60-64", "$108.00",
                    "65-69", "$123.20",
                    "70-79", "$166.40",
                    "80+",   "$289.60"
                    ]),
                makeTable(2, [
                    "Age", "Rate",
                    "dependent child", "$16.80",
                    "&lt; 30", "$18.40",
                    "30-39", "$22.40",
                    "40-49", "$40.00",
                    "50-59", "$64.80",
                    "60-64", "$78.40",
                    "65-69", "$92.80",
                    "70-79", "$136.00",
                    "80+",   "$272.00"
                    ]),

                "",
                makeBuyURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                makeBuyURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                
                "", 

                makeBuyURL(loc("Buy Group (10% off)")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699"),
                makeBuyURL(loc("Buy Group (10% off)")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699"),
                "",
                makeResourceCenterURL(loc("Questions and Answers about Patriot Travel"),"pivot-qanda-travel"),
                makeResourceCenterURL(loc("Questions and Answers about Patriot Travel"),"pivot-qanda-travel")
                ]));
    endRow();

    startRow();
    writeText("");
    endRow();
    
    startRow();
    writeText("More about Patriot Travel");
    endRow();
    
    startRow();
    writePatriotTravelTable();
    endRow();

    endSubsection();


    startSubsection("patriot-platinum");

    startRow();
    writeText("Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    writeText("");    
    writeText("Patriot Platinum Travel Medical Insurance is a similar plan with more coverage (up to $8,000,000):");
    document.write(makeTable(2, [
                "", makeRawURL("Patriot Platinum Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot_platinum?imgac=80000699"),

                "Changes from Patriot Travel Medical Insurance",
                makeBulletedListWithTitle("", [
                    "Short-term travel medical coverage (5 days to 3 years)",
                    "Maximum Limits from $1,000,000 to $8,000,000",
                    "Deductible options from $0 to $25,000",
                    "Hospital Daily Indemnity increases from $100 per day 10 day maximum to $250 per day 10 day maximum.",                    
                    "Renewable up to 36 months if three months or more are purchased",
                    "Ages 70-79 have $100,000 coverage (with $1,000 deductible the cost is $355.20 per month)",
                    "Ages 80 and over have $20,000 coverage (with $1,000 deductible the cost is $515.20 per month)"
                    ]),

                "Shared features",
                makeBulletedListWithTitle("", [
                    "Coverage for individuals and dependents",
                    "Two plan designs for U.S. citizens and non-U.S. citizens traveling outside their home country",
                    "Available in daily and monthly rates",
                    "Freedom to seek treatment with hospital or doctor of your choice",
                    "Trip cancellation, travel delay and baggage delay benefits available",
                    "Universal Rx pharmacy discount savings",
                    "24 hour secure access from anywhere in the world to manage your account at any time"
                    ]),

                "Patriot Platinum Brochure", makeURL("Patriot Platinum Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1964&a=80000699"),

                "", makeBuyURL("Buy Patriot Platinum Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot_platinum?imgac=80000699")
                ]));
    endRow();

    endSubsection();


    startSubsection("trip-travel");

    startRow();
    writeText("Alternatively, consider Patriot T.R.I.P. Travel if you need a coverage for trip cancellation, travel and baggage delays, and emergency medical treatment.");
    document.write(makeTable(2, [
                "", makeURL("Patriot T.R.I.P.® Travel", "https://www.imglobal.com/applications/pti/index.cfm?imgac=80000699&show=PTI"),
                
                "Plan Highlights",
                makeBulletedListWithTitle("", [
                    "$20,000 coverage for trip cancellation/interruption",
                    "$10,000 coverage for emergency medical/dental expenses",
                    "$500 coverage for travel delay",
                    "$1,000 coverage for baggage/personal possessions",
                    "$100 Baggage delay",
                    "$20,000 Emergency medical evacuation/repatriation",
                    "$3,000 Repatriation of mortal remains",
                    "$100,000 Common carrier accidental death and dismemberment"
                    ]),

                "Sample Cost", "A 35 year old spends $5000 on a trip, insurance costs $200. A 25 year old spends $1500 on a trip, insurance costs $60.",

                "Brochure", makeURL("Patriot Trip Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1871&a=80000699"),
                "", makeBuyURL("Buy Patriot T.R.I.P.® Travel", "https://www.imglobal.com/applications/pti/index.cfm?imgac=80000699&show=PTI")
                ]));

    writeText("");
    writeText("More Options:");
    document.write(makeTable(2, [
                "Plan", "",
                
                makeURL("Patriot T.R.I.P.® Elite", "https://www.imglobal.com/applications/pte/index.cfm?imgac=80000699&show=PTEAI,PTEII"),
                makeBulletedListWithTitle("", [
                    "Offers more coverage than Patriot T.R.I.P. Travel Insurance.",
                    makeURL("Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1879&a=80000699"),
                    makeBuyURL("Buy", "https://www.imglobal.com/applications/pte/index.cfm?imgac=80000699&show=PTEAI,PTEII")
                    ]),

                makeURL("Patriot T.R.I.P.® Student", "https://www.imglobal.com/applications/pts/index.cfm?imgac=80000699&show=PTS"),
                makeBulletedListWithTitle("", [
                    "Designed just for students and is more affordable than Patriot T.R.I.P. Travel Insurance.",
                    makeURL("Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1877&a=80000699"),
                    makeBuyURL("Buy", "https://www.imglobal.com/applications/pts/index.cfm?imgac=80000699&show=PTS")
                    ])
                ]));
    endRow();

    endSubsection();


    endSubsections();


    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("Why do I need travel medical insurance?");
    endRow();

    startRow();
    document.write(makeTableWithStyle("invisibleTableNormalText", 3, [
                makeText(makeBold("Most medical insurance coverage will not provide benefits in a different country.")+ " "+ loc("If you are a US citizen, your passport says, \"Health Insurance: Medical costs abroad can be extremely expensive. Does your insurance apply overseas, including medical evacuation, payment to the overseas hospital or doctor, or reimbursement to you later?.....Medicare/Medicaid does not cover healthcare costs outside the US.\"")),
                makeText(makeBold("Medical Evacuation is an important benefit.") + " " + loc("Maybe you are visiting a part of the world with a lesser developed healthcare system. You planned ahead and had your travel vaccines before you left, but what if you get injured on your trip? You might need to be evacuated to an adequate hospital. A medical evacuation benefit will provide what you need.")),
                makeText(makeBold("Trip cancellation, lost baggage, travel delay benefits.")+ " " + loc("You spent a year planning for and saving for your trip. Now, you arrive at the airport for a connecting flight and the flight is cancelled. You don’t need a health insurance benefit, but you sure could use a travel insurance benefit. Help cover your costs for unforeseen travel problems with the right travel insurance coverage for you."))
                ]));
    endRow();

    startRow();
    writeText("");
    document.write(makeBulletedListWithTitle("Travel Tips", [
                loc("Visit") + " " + makeURL("CDC (Center for Disease Control)", "http://www.cdc.gov/") + " " + loc(" to learn about travel vaccine recommendations. They provide an up to date list by country of which travel vaccinations are required or recommended. They also provide up to date health information by location. Did you know a vaccine booster for Polio is recommended for travel to some locations? Also, the vaccines for Hepatitis A and B are good for life – be safe once now and you are covered forever! Once you have your passport health care preparations are critical."),
                loc("Travel visa requirements depend on the country you are visiting. A US citizen might need a visa depending on where they are going. A visitor to the United States might need a visa depending on the nature of their visit. For details see the") + " " + makeURL("State Department website", "http://travel.state.gov/visa/visa_1750.html") + "."
                ]));
    endRow();

    writeDontSeeWhatYouNeedRow();

    endSection();


    // Indiana Residents
    startSection("pivot-indiana-residents", "Indiana Residents");
    startRow();
    document.write(makeTableWithStyle("invisibleTable", 2, [
                makeImage("anthem.jpg"),
                "Comprehensive medical coverage for individuals and families (in the U.S. for 1 yr or longer) from Anthem Blue Cross."
                ]));
    writeText("Some example plans:");
    endRow();

    startRow();


    document.write(makeTableWithStyle("invisibleTableNormalText", 3, [
                makeLinesWithTitle("Core Share", [
                    "Great for new college graduates",
                    "Deductible $750 and higher",
                    "The plan with the lowest premium rates"
                    ]),
                makeLinesWithTitle("Premier Plus", [
                    "Deductible $500 and higher",
                    "20% coinsurance",
                    "The plan with the most benefit"
                    ]),
                makeLinesWithTitle("Smart Sense", [
                    "Deductible $500 and higher",
                    "30% coinsurance so premium cost is less than Premier Plus"
                    ]),
                makeLinesWithTitle("Lumenos HSA", [
                    "Deductible from $1,500 to 5,500 for single, $3,000 to 11,000 for family",
                    "Tax advantaged saving account"
                    ]),
                makeText(loc("Call or email us to learn more or browse online:") + " " + makeURL("Quote/Purchase Anthem Insurance", "https://pd.secure.anthem.com/AgentConnect/gen/link.htm?linkid=D7_i08ReAFF-O9lX3HcGT_120121774037399"))
    ]));
    endRow();

    writeRowForUnitedHealthOne();

    endSection();





    // About Us
    startSection("pivot-aboutus", "About Us");




    startRow();
    document.write(makeBulletedListWithTitle("Who is TaiAn Financial LLC, an IMG Endorsed Independent Chinese Sales Center!", [
                "International Medical Group (IMG) is a worldwide leader in the International medical insurance business, and TaiAn Financial LLC is an IMG Endorsed Independent Chinese Sales Center.  As an IMG Endorsed Independent Chinese Sales Center, we can provide our customers professional, prompt service and make their insurance experience as easy as possible.",
                "We have more than 27 years of health insurance experience serving the people in the Unites States and globally.",
                "We specialize in service for international scholars, educators and students with both native Chinese speakers and native English speakers.",
                "We are located in the United States and have extended work hours to serve our customers whenever they need us. Our work hours are 7 days a week, 9:00am-11:00pm Eastern Time.",   
                "We have both English and Chinese local phone numbers in the US. We also have China local phone service, by calling this number our customers in China don't pay long distance charges. We communicate with our customers through  WeChat and Skype as well.",
                loc("We have a highly experienced IT team to keep our website up-to-date to make sure our customers get the most updated information. For example, we check our webpage") + " " + makePivotURL("pivot-school-waiver", "Find your school insurance requirements and most affordable plan here") + loc(" every week or whenever our customers tell us their school requirements changed. This webpage is very popular because it provides requirements for all schools for F and J visa, and identifies the insurance plan that is best for each schools international scholars and students."),                
                "We work with only the most financially secure insurers with top quality ratings from A.M. Best and Standard and Poor's.",
                "Our website is accessible around the world, including mainland China."
                ]));
    endRow();


    
    startRow();
    document.write(makeBulletedListWithTitle("Partnering with TaiAn Financial", [


                     makeLinesWithTitle("Universities, Colleges, Institutes and other schools", [
                         "If your school is sending students or teachers abroad, or has students or teachers visiting we would make a good partner."
                         ]),

                     makeLinesWithTitle("Teachers", [
                         "Whether you are traveling abroad with your students, have foreign students coming to the US to your class, or are sending US students abroad we have solutions for you."
                         ]),

                     makeLinesWithTitle("Students", [
                         "Help your peers find the insurance they need as they travel abroad for university or vacation."
                         ]),
                         
                     makeLinesWithTitle("Travel Agents", [
                         "Pairing travel services with travel and health insurance can be mutually beneficial."
                         ]),


                     makeLinesWithTitle("Organizations", [
                         "We work with representatives of International organizations, student or scholar organizations, and travel clubs to help your membership with their travel insurance needs."
                         ])




    ]));

    endRow();    
    


    startRow();
    document.write(makeBulletedListWithTitle("Want to know more? Contact us:", getContactInfo()));
    endRow();

    endSection();

    writeSectionForSchoolWaiverRequirements();

    if (!legacy) {
        writeSectionsForApps();
        writeSectionsForForms();
    }
}

