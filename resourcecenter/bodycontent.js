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
        map["p"] = "pivot-qanda-planb";
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
        cn2: "l=cn&p=pivot-school-waiver" 

      

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
    var defaultTab = "pivot-qanda-planb";
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
        
        "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699" : "PatExchPlanB",


        "https://purchase.imglobal.com/quote/patriot?imgac=80000699" : "Travel",
        "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699" : "TravelGroup"
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
        imageURL = "../annotatedApps/index.html#l="+getPageAttribute("l")+"&p="+imageURL;
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



function writeSectionsForApps() {
    var urlsForLang = urlsToAppIds()[getPageAttribute("l")];

    for (url in urlsForLang) {
        var name = "pivot-"+urlsForLang[url];
        startSection(name, "");
        startRow();
        writeText(loc("Annotated directions are in the top frame, the real application is below.") + " " + makeRawURL("Alternatively, see the application in a separate page.", url));
        endRow();

        startRow();
        var imgURL = "../annotatedApps/index.html#l="+getPageAttribute("l")+"&p="+name;
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
        return buyURL + "&nbsp;&nbsp;" + makeRawURL(loc("Annotated Application"), imageURLForURL(url));
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


function appendAdIdPartner(url) {
    var adId = getPageAttribute("adid");
    var hasAdId = !(typeof adId === "undefined");
    if (hasAdId) {
        url += "&adid="+adId;
    }

    var partner = getPageAttribute("partner");
    var hasPartner = !(typeof partner === "undefined");
    if (hasPartner) {
        url += "&partner="+partner;
    }

    return url;
}

function makeMainSiteURL(title, pivot) {
    return makeURL(title, appendAdIdPartner("../index.html#l="+getPageAttribute("l")+"&p="+pivot));
}

function makeBuyStyle(text) {
    return "<h2 class=\"uglyBuyStyle\">" + text + "</h2>";
}



function makeBulletedListWithTitle(title, list) {
    var listCode = '<h2>'+loc(title)+'</h2>';
    listCode += '<ul class="styled-ul">';

    for (var i = 0; i < list.length; i++) {
        listCode += '<li class="styled-li">'+loc(list[i])+"</li>";
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
    var topLevelNames = { 
                          "pivot-qanda-plana": "TaiAn Plan A (Student Health Advantage) Questions and Answers",
                          "pivot-qanda-planb": "TaiAn Plan B (TaiAn Patriot Exchange) Questions and Answers",
                          "pivot-qanda-travel": "Patriot Travel Questions and Answers"                          
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


function writeSections(legacy) {
    // Questions and Answers
    startSection("pivot-qanda-planb", "TaiAn Plan B (TaiAn Patriot Exchange) Questions and Answers");

    var partnerShip = getPartnership(getPageAttribute("partner"));
    var travelStudentPartnerContent = partnerShip["travelStudentContent"];
    var hasTStPartnerContent = !(typeof travelStudentPartnerContent === "undefined");
    if (hasTStPartnerContent) {
        travelStudentPartnerContent();
    }    




    startRow();
    writeText("");
    endRow();

    startRow();

    writeText("Call from US - 8:00AM to 9:00PM Eastern time: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time  8:00pm-12:00am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    startRow();

    writeText("<strong>" + loc("1. ") + loc("Why Should I buy IMG insurance through TaiAn?") + "</strong>" + "<br />" + loc("International Medical Group (IMG) is a worldwide leader in the International medical insurance business, and TaiAn Financial LLC is leading producer for IMG.  TaiAn\'s custom product offering and extended service hours enable us provide our customers industry leading, professional, prompt service and make their insurance experience as easy as possible."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("2. ") + loc("Does Plan B meet US Department of State Insurance (USDOS) Requirements for J visa?") + "</strong>" + "<br />" + loc("US Department of State Insurance Requirements for J visa:") + "<br />" + loc("1) Medical benefits of at least $100,000 per accident or illness") + "<br />" + loc("2) Repatriation of remains in the amount of $25,000") + "<br />" + loc("3) Expenses associated with the medical evacuation of the exchange visitor to his or her home country in the amount of $50,000") + "<br />" + loc("4) A deductible not to exceed $500 per accident or illness") + "<br />" + loc("5) An insurance policy secured to meet the benefits requirements must be underwritten by an insurance corporation with an A.M. Best rating of \"A-\" or above, an Insurance Solvency International, Ltd. (ISI) rating of \"A-I\" or above, a Standard and Poor's Claims Paying Ability rating of \"A-\" or above, or a Weiss Research, Inc. rating of B+ or above") + "<br />" + "<br />" + loc("If you select a $100,000 benefit per illness or injury (or higher benefit) all the options in TaiAn Plan B meet USDOS requirements.  The insurer rating by A.M. Best is \"A\", and also meets the requirements."));
    
    endRow();   

    startRow();

    writeText("<strong>" + loc("3. ") + loc("Who is eligible to buy Plan B and what do I need to know before purchase?") + "</strong>" + "<br />" + loc("TaiAn Plan B is designed specifically for international scholars, students and their dependents (F1,F2,J1,J2,OPT).") + "<br />" + loc("F1 College Student: You need to confirm TaiAn Plan B meets your school F1 insurance waiver requirements.") + "<br />" + loc("J1 Visiting Scholar: J1 scholar's insurance needs to meet USDOS standard and school standard. Since Plan B meets the USDOS standard, you only need to confirm Plan B also meets your school J1 insurance requirements.") + "<br />" + loc("OPT student: You can buy Plan B with any options.") + "<br />" + loc("F1/J1 high school student or ESL student:  You can buy after confirming school requirements.") + "<br />" + loc("F2/J2 visa holder: You can buy with your F1/J1. If the J1/F1 visa holder has purchased school insurance the J2/F2 dependents can purchase TaiAn Plan B alone.  If the J1/F1 visa holder has purchased TaiAn Plan B and his/her J2/F2 dependents come later, they can purchase Plan B alone for different dates."));
    
    endRow();  
    
    startRow();

    writeText("<strong>" + loc("4. ") + loc("How do I make sure Plan B meets my school requirement?") + "</strong>" + "<br />" + loc("1) Click on the link:  ") + "<strong>" + makeMainSiteURL("Find your school insurance requirements and most affordable plan here", "pivot-school-waiver") + "</strong>" + "<br />" + loc("2) Find your school in the first column on the chart, click on the corresponding fourth column that will show you what insurance plan meets your school requirements") + "<br />" + loc("3) You can also send email with your school requirements to TaiAn at <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>") + "<br />" + loc("TaiAn will help you to figure it out."));
    
    endRow();   

    startRow();

    writeText("<strong>" + loc("5. ") + loc("How do I buy Plan B and how long will it take to receive the fulfillment?") + "</strong>" + "<br />" + loc("Buy Plan B online and receive the fulfillment instantly.  Purchase steps are as follows:") + "<br />" + loc("1) Click on the link:  ") + makeMainSiteURL("Plan B (Taian Patriot Exchange)", "pivot-international-student") + "<br />" + loc("2) Read Plan B benefits chart and brochure") + "<br />" + loc("3) Click on ") + makeURL("Buy Plan B TaiAn Patriot Exchange", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE/pre-quote?imgac=80000699") + "<br />" + loc("4) According to your school requirements and your own needs, select a deductible and benefit maximum.") + "<br />" + loc("5) Payment is on the last page of application. You can use a credit card or a debit card which has a Visa, MasterCard or American Express logo to pay.  Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address.") + "<br />" + loc("6) After you submit an application online successfully, you will receive an Email from IMG in a few minutes (If you do not receive it, please check your spam), which contains your insurance card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school to prove that you have qualified medical insurance."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("6. ") + loc("How do I buy Group Plan B to get 10% off?") + "</strong>" + "<br />" + loc("TaiAn Patriot Exchange Group plan is available for groups of 2 or more primary applicants (F1/J1).") + "<br />" + loc("1) Click on the link:  ") + makeMainSiteURL("Plan B (Taian Patriot Exchange)", "pivot-international-student") + "<br />" + loc("2) After reading Plan B benefits chart and brochure, click on ") + makeURL("Buy Group B (10% off) For 2 primary insured or more", "https://purchase.imglobal.com/Quote/TAIAN_PATRIOT_EXCHANGE_GROUP/pre-quote?imgac=80000699") + "<br />" + loc("3) The total length of group duration cannot be more than a year, you can renew before the plan is expired if you are still eligible. The primary applicants in the group may have different insurance dates. No one can have an expiration date beyond one year from the group start date until the group renews for a second year.") + "<br />" + loc("4)  According to your school requirements and your group needs, select a deductible and benefit maximum.") + "<br />" + loc("5)  Payment is on the last page of application. You have to use one credit card (or debit card which has a Visa, MasterCard or American Express logo) to pay for the whole group. Please use the credit card holder\'s initials as the \"Sponsoring Organization\". Use the credit card holders name as the \"Contact Name\".  Use the credit card holder\'s email as the group contact for the plan. Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address."));
    
    endRow();   
    
    startRow();

    writeText("<strong>" + loc("7. ") + loc("What is the difference between the two Plan Bs with different deductibles, how do I choose?") + "</strong>" + "<br />" + loc("The two Plan Bs with different deductibles don't have anything different except for the deductible. Deductible is the medical expense that the insured pays before insurance pays.  These two deductibles are: 1) $100 per illness or injury deductible, which means the insured pays $100 for each illness or injury before insurance pays.  Sometimes an illness or injury needs to see a doctor more than once.   As long as it is the same illness or injury, you only need to pay one deductible of $100. 2) Annual deductible $250 or $500: This deductible covers a policy period (not in excess of one year).  The insurance pays covered charges after the insured pays an accumulated $250 or $500 in a policy period, no matter how many times the insured gets sick or injured.  If an insured is likely to get multiple illnesses in a policy period, an annual deductible is a better choice. All the deductible options in Plan B meets USDOS standard. You need to check your school requirement on deductible when you make decision."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("8. ") + loc("How do I make the payment?  What do I do if the payment gets declined?") + "</strong>" + "<br />" + loc("You will have an instant quote online and can pay with your credit card or debit card which has a Visa, MasterCard or American Express logo") + "<br />" + loc("Some common reasons for a declined payment are:") + "<br />" + loc("1) Your credit limit ") + "<br />" + loc("2) Some banks need to be notified in advance when you make a credit card charge outside your home country.  You may need to call the number on the back of your card to tell them this is a genuine charge.") + "<br />" + loc("3) Inaccurate billing address.  When IMG asks for billing address, you need to fill in the address that your credit card bill is sent. This will not impact where your insurance material are sent, but is needed to verify your card.") + "<br />" + loc("4) On the payment page, the electronic signature should be the same as the name on the credit card.") + "<br />" + loc("If your card is declined you can submit a new on line application after fixing the problem."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("9. ") + loc("How do I renew?") + "</strong>" + "<br />" + loc("If you have an individual policy, you will receive a few renewal Email notices.  The notices have the same renew link.  Click the renew link, enter your information, and pay with a credit card.  You can finish the renewal online easily.  You can change your phone number, Email address, mailing address and credit card during your renewal.  If you have a group policy, you will receive a renew notice before the policy expires.  The notice will tell you how to write an Email to IMG to renew."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("10. ") + loc("How do I get medical treatment when I get sick?") + "</strong>" + "<br />" + loc("Plan B customers can go to any provider, in-PPO or out of PPO you get the same benefits.  This doesn't necessarily mean every hospital provides direct billing service.  Medical providers decide whether to provide direct billing or not, the decision is not made by the insurance company.  Different providers, or the same provider for different illness /injury, can make different decisions.") + "<br />" + loc("When you get sick you can try first going to your Student Health Center where you will only pay a $5 copay. If you need urgent care and the student health center won't meet your needs, an Urgent Care center might. They usually have evening and weekend hours and no appointment is necessary. If you need to go to a doctor in the United States, you need an appointment. For your own benefit, usually try to go to IMG's designated provider (doctor, hospital or urgent care center) although you are not required to go to this network.  You can search ") + makeURL("First Health Network", "http://www.providerlookuponline.com/coventry/po7/gateway.aspx?plancode=141") + "<br />" + loc(" PPO network link to find a medical provider.") + "<br />" + loc("When you see a doctor, carry your insurance card and personal ID (to verify your identity). In the United States if you do not have an appointment and go directly to the hospital, you go to the Emergency Room. If you go to the Emergency room and are not admitted to the hospital you have to pay a $250 additional deductible. In a real emergency situation (that is life-threatening or disabling), go to the nearest Emergency Room."));
    
    endRow();
    
    startRow();

    writeText("<strong>" + loc("11. ") + loc("Do I need to pre-certify before going to see a doctor?") + "</strong>" + "<br />" + loc("You must call IMG to pre-certify any of the following conditions: any treatment requiring hospitalization; out-patient surgery, CAT scans, MRI\'s; within 48 hours after an emergency admission to the hospital; care in an extended care facility; home nursing care; Durable medical equipment including artificial limbs; or transplant. You don\'t need to pre-certify if your illness or injury is not serious and can be treated in a doctor\'s office.  See details at ") + makeURL("Pre-certification", "https://myimg.imglobal.com/UnAuth/PrecertForm.aspx") );
    
    endRow();    

    startRow();

    writeText("<strong>" + loc("12. ") + loc("How do I submit a claim?") + "</strong>" + "<br />" + loc("There are two ways to file a claim in the IMG system. One is that the medical provider directly bills IMG, the other is that the customer needs to pay upfront before filing a claim with IMG for reimbursement. For both situations you always need to submit a claim to IMG. If your provider is direct billing IMG, you just submit the claims form. If you need to pay upfront, you need to submit the claim form along with all the payment receipts to IMG.  You can create a ") + makeURL("MyIMG account", "https://myimg.imglobal.com/unauth/homepage.aspx") + loc( " after submitting the claim form, and then you can check whether IMG has received the medical provider bills and the claim status. You also can call IMG about your claims questions (1-800-628-4664 or 317-655-4500). Please have your insurance ID card ready when you call.  If you prefer to speak to IMG in a language other than English, you can ask for foreign language assistance, and tell them your preferred language."));
    
    endRow(); 

    startRow();

    writeText("<strong>" + loc("13. ") + loc("What is the coinsurance?") + "</strong>" + "<br />" + loc("There is no coinsurance for TaiAn Plan B. After you pay your deductible, the insurance pays 100% of eligible medical expenses."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("14. ") + loc("How much can I get reimbursed for prescription medicine?") + "</strong>" + "<br />" + loc("If the illness or injury is covered, the prescription medicine will be covered (subject to deductible) at 100% of usual charges until the per illness or injury maximum that you bought is met. When you need to fill a prescription you go to the pharmacy with the prescription you received from the doctor. Make sure to bring the Universal URX Discount Card with you. You will have to pay for your prescription at the pharmacy but may receive a 10% to 50% discount with the card. You can then submit your receipts and a claim form to IMG for reimbursement."));
    
    endRow();  

    startRow();

    writeText("<strong>" + loc("15. ") + loc("Does the plan cover child physical exams and vaccines?") + "</strong>" + "<br />" + loc("No, it doesn't. In the U.S., insurance that covers child physical exams and vaccines normally cost more than $200-$300 per month.  Contact us for ways to get inexpensive, and sometimes free, vaccines or immunizations, as well as child physical exams."));
    
    endRow();   

    startRow();

    writeText("<strong>" + loc("16. ") + loc("Does the plan cover dental and vision?") + "</strong>" + "<br />" + loc("For dental the plan covers injuries up to $500, and treatment for sudden pain up to $350.  For vision the plan covers injuries.  If you are looking for coverage for routine dental or vision exams, or if you already know you need dental work or glasses you should consider supplementing the medical plan with a Careington Dental and Vision Discount Plan.  This plan provides discounts on dental and vision treatments, and there are no waiting periods before you can get a discount.  You can buy today and get a discount on your dental cleaning, periodontics, major dental procedures, vision exams, or glasses as soon as you receive your membership kit. You can pay monthly and cancel anytime.") + "<br />" + loc("You can search the network for providers around you and learn more about the discount details before purchase. For more information and to purchase click on:  ") + makeURL("Careington Dental/Vision Discount Plan", "http://taianfinancial.com/dental/#p=pivot-careington-dental&l="+getPageAttribute("l")));
    
    endRow();    
    


    startRow();
    writeText("");
    endRow();

    endSection();


    // Questions and Answers
    startSection("pivot-qanda-plana", "TaiAn Plan A (Student Health Advantage) Questions and Answers");

    var partnerShip = getPartnership(getPageAttribute("partner"));
    var travelStudentPartnerContent = partnerShip["travelStudentContent"];
    var hasTStPartnerContent = !(typeof travelStudentPartnerContent === "undefined");
    if (hasTStPartnerContent) {
        travelStudentPartnerContent();
    }    




    startRow();
    writeText("");
    endRow();

    startRow();

    writeText("Call from US - 8:00AM to 9:00PM Eastern time: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time  8:00pm-12:00am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    startRow();

    writeText("<strong>" + loc("1. ") + loc("Why Should I buy IMG insurance through TaiAn?") + "</strong>" + "<br />" + loc("International Medical Group (IMG) is a worldwide leader in the International medical insurance business, and TaiAn Financial LLC is leading producer for IMG.  TaiAn\'s custom product offering and extended service hours enable us provide our customers industry leading, professional, prompt service and make their insurance experience as easy as possible."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("2. ") + loc("Does Plan A meet US Department of State Insurance (USDOS) Requirements for J visa?") + "</strong>" + "<br />" + loc("US Department of State Insurance Requirements for J visa:") + "<br />" + loc("1) Medical benefits of at least $100,000 per accident or illness") + "<br />" + loc("2) Repatriation of remains in the amount of $25,000") + "<br />" + loc("3) Expenses associated with the medical evacuation of the exchange visitor to his or her home country in the amount of $50,000") + "<br />" + loc("4) A deductible not to exceed $500 per accident or illness") + "<br />" + loc("5) An insurance policy secured to meet the benefits requirements must be underwritten by an insurance corporation with an A.M. Best rating of \"A-\" or above, an Insurance Solvency International, Ltd. (ISI) rating of \"A-I\" or above, a Standard and Poor's Claims Paying Ability rating of \"A-\" or above, or a Weiss Research, Inc. rating of B+ or above") + "<br />" + "<br />" + loc("All the options in TaiAn Plan A meet USDOS requirements.  The insurer rating by A.M. Best is \"A\", and also meets the requirements."));
 
    startRow();

    writeText("<strong>" + loc("3. ") + loc("Who is eligible to buy Plan A and what do I need to know before purchase?") + "</strong>" + "<br />" + loc("TaiAn Plan A is designed specifically for international scholars, students and their dependents (F1,F2,J1,J2,OPT).  You can buy online after you confirm the plan meets your school standard. Dependents can only purchase when the student purchases. For example, F2/J2 cannot buy alone, but they can buy with their F1/J1.  On the Plan A effective date you need to have a valid J1/F1 visa and be outside of your home country for your study or program. "));
    
    endRow(); 
    
    startRow();

    writeText("<strong>" + loc("4. ") + loc("How do I make sure Plan A meets my school requirement?") + "</strong>" + "<br />" + loc("1) Click on the link:  ") + "<strong>" + makeMainSiteURL("Find your school insurance requirements and most affordable plan here", "pivot-school-waiver") + "</strong>" + "<br />" + loc("2) Find your school in the first column on the chart, click on the corresponding fourth column that will show you what insurance plan meets your school requirements") + "<br />" + loc("3) You can also send email with your school requirements to TaiAn at <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>") + "<br />" + loc("TaiAn will help you to figure it out."));
    
    endRow();  

    startRow();

    writeText("<strong>" + loc("5. ") + loc("How do I buy Plan A and how long will it take to receive the fulfillment?") + "</strong>" + "<br />" + loc("Buy Plan A online and receive the fulfillment instantly.  Purchase steps are as follows:") + "<br />" + loc("1) Click on the link:  ") + makeMainSiteURL("Plan A (Student Health Advantage)", "pivot-international-student") + "<br />" + loc("2) Read Plan A benefits chart and brochure") + "<br />" + loc("3) Click on ") + makeURL("Buy Plan A Standard Student Health Advantage", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699") + loc(" or ") + makeURL("Buy Plan A Platinum Student Health Advantage", "https://purchase.imglobal.com/Quote/student_health_advantage_platinum/pre-quote?imgac=80000699") + "<br />" + loc("4) Payment is on the last page of application. You can use a credit card or a debit card which has a Visa, MasterCard or American Express logo to pay.  Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address.") + "<br />" + loc("5) After you submit an application online successfully, you will receive an Email from IMG in a few minutes (If you do not receive it, please check your spam), which contains your insurance card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school to prove that you have qualified medical insurance."));
    
    endRow(); 

    startRow();

    writeText("<strong>" + loc("6. ") + loc("How do I buy Group Plan A to get 10% off?") + "</strong>" + "<br />" + loc("Student Health Advantage Group plan is available for groups of 2 or more primary applicants (F1/J1).") + "<br />" + loc("1) Click on the link:  ") + makeMainSiteURL("Plan A (Student Health Advantage)", "pivot-international-student") + "<br />" + loc("2) After reading Plan A benefits chart and brochure, click on ") + makeURL("Buy Group A Standard (10% off) For 2 primary insured or more", "https://purchase.imglobal.com/Quote/student_health_advantage_group/pre-quote?imgac=80000699") + loc(" or ") + makeURL("Buy Group A Platinum (10% off) For 2 primary insured or more", "https://purchase.imglobal.com/Quote/student_health_advantage_platinum_group/pre-quote?imgac=80000699")+ "<br />" + loc("3) The total length of group duration cannot be more than a year, you can renew before the plan is expired if you are still eligible. The primary applicants in the group may have different insurance dates. No one can have an expiration date beyond one year from the group start date until the group renews for a second year.") + "<br />" + loc("4) Payment is on the last page of application. You have to use one credit card (or debit card which has a Visa, MasterCard or American Express logo) to pay for the whole group. Please use the credit card holder\'s initials as the \"Sponsoring Organization\". Use the credit card holders name as the \"Contact Name\".  Use the credit card holder\'s email as the group contact for the plan. Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address.") + "<br />" + loc("5) After you submit an application online successfully, you will receive an Email from IMG in a few minutes (If you do not receive it, please check your spam), which contains every member's insurance card and confirmation letter (Visa Letter). You can send the confirmation letter to your school to prove that you have qualified medical insurance."));
    
    endRow();   
    

    startRow();

    writeText("<strong>" + loc("7. ") + loc("How do I make the payment?  What do I do if the payment gets declined?") + "</strong>" + "<br />" + loc("You will have an instant quote online and can pay with your credit card or debit card which has a Visa, MasterCard or American Express logo") + "<br />" + loc("Some common reasons for a declined payment are:") + "<br />" + loc("1) Your credit limit ") + "<br />" + loc("2) Some banks need to be notified in advance when you make a credit card charge outside your home country.  You may need to call the number on the back of your card to tell them this is a genuine charge.") + "<br />" + loc("3) Inaccurate billing address.  When IMG asks for billing address, you need to fill in the address that your credit card bill is sent. This will not impact where your insurance material are sent, but is needed to verify your card.") + "<br />" + loc("4) On the payment page, the electronic signature should be the same as the name on the credit card.") + "<br />" + loc("If your card is declined you can submit a new on line application after fixing the problem."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("8. ") + loc("How do I renew?") + "</strong>" + "<br />" + loc("If you have an individual policy, you will receive a few renewal Email notices.  The notices have the same renew link.  Click the renew link, enter your information, and pay with a credit card.  You can finish the renewal online easily.  You can change your phone number, Email address, mailing address and credit card during your renewal.  If you have a group policy, you will receive a renew notice before the policy expires.  The notice will tell you how to write an Email to IMG to renew."));
    
    endRow();
    
    startRow();

    writeText("<strong>" + loc("9. ") + loc("What do I need to know if  I need the maternity coverage from Plan A?") + "</strong>" + "<br />" + loc("1) TaiAn Plan A covers maternity only if the pregnancy begins after the plan is effective. In order to ensure that the insurance is purchased before pregnancy, it is usually recommended after your plan is effective, wait until after a menstruation, and then try to get pregnant.") + "<br />" + loc("2) The plan is renewable only if 3 months or more are purchased. If you get pregnant during these three months, you need to renew not rebuy a new plan. With renewal the pregnancy is covered. With a rebuy the maternity is a pre-existing condition and not covered. So, it is very important to buy at least three months initially, and to renew on time.") + "<br />" + loc("3) If the pregnancy test is positive and it is found that conception was after the effective date, then it would be covered. If the conception was prior to the effective date or the pregnancy test is negative, it would not be covered. You don't need to do pre-certification until your pregnancy is confirmed by a doctor.") + "<br />" + loc("4) Please pre-certify with IMG after your pregnancy is confirmed by a doctor. Create a MyIMG account (myimg.imglobal.com) and you will be able to see your precertification result and claim status.  It would be best if you can find a doctor who will provide direct billing and send all bills to IMG. Note that in order to maximize your benefits, the hospital for the delivery needs to be in the PPO network and precertification is required at time of delivery. You may advise the hospital of this at time of delivery, they will begin the Precertification Process."));
    
    endRow(); 

    startRow();

    writeText("<strong>" + loc("10. ") + loc("What is the 6 month Pre-existing Condition Rider and how does it change the maternity benefit?") + "</strong>" + "<br />" + loc("In Florida, Hawaii, Idaho, and Massachusetts you can shorten pre-ex from 12 months to 6 months in Plan A, but this change will results in a 10 month wait for maternity benefits, and an increase in the premium. Normally for Student Health Advantage a maternity is covered so long as the conception is after the effective date. When someone selects the optional 6 month pre-ex rider, there is a 10 month wait for maternity benefits. This means any maternity related claim filed for services provided during the first 10 months of the policy will be declined. A maternity claim filed in the 11th month is covered. If a baby is born in the 11th month, the delivery charges would be covered. It doesn't mean they need to have a conception date of the 11th month or later."));
    
    endRow();   


    
    startRow();

    writeText("<strong>" + loc("11. ") + loc("Do I need to pre-certify before going to see a doctor?") + "</strong>" + "<br />" + loc("You must call IMG to pre-certify any of the following conditions: any treatment requiring hospitalization; out-patient surgery, CAT scans, MRI\'s; within 48 hours after an emergency admission to the hospital; care in an extended care facility; home nursing care; Durable medical equipment including artificial limbs; or transplant. You don\'t need to pre-certify if your illness or injury is not serious and can be treated in a doctor\'s office.  See details at ") + makeURL("Pre-certification", "https://myimg.imglobal.com/UnAuth/PrecertForm.aspx") );
    
    endRow();  

    startRow();

    writeText("<strong>" + loc("12. ") + loc("How do I get medical treatment when I get sick?") + "</strong>" + "<br />" + loc("Plan A customers go to in-PPO network get more benefits.  When you get sick you can try first going to your Student Health Center where you will only pay a $5 copay. If you need urgent care and the student health center won't meet your needs, an Urgent Care center might. They usually have evening and weekend hours and no appointment is necessary. If you need to go to a doctor in the United States, you need an appointment. For your own benefit, usually try to go to IMG's designated provider (doctor, hospital or urgent care center).  You can search \"First Health Network\" PPO network link to find a medical provider: ") + makeURL("First Health Network", "http://www.providerlookuponline.com/coventry/po7/gateway.aspx?plancode=141") + "<br />" + loc("When you see a doctor, carry your insurance card and personal ID (to verify your identity). In the United States if you do not have an appointment and go directly to the hospital, you go to the Emergency Room. If you go to the Emergency room and are not admitted to the hospital you have to pay a $250 additional deductible. In a real emergency situation (that is life-threatening or disabling), go to the nearest Emergency Room."));
    
    endRow();    

    startRow();

    writeText("<strong>" + loc("13. ") + loc("How do I submit a claim?") + "</strong>" + "<br />" + loc("There are two ways to file a claim in the IMG system. One is that the medical provider directly bills IMG, the other is that the customer needs to pay upfront before filing a claim with IMG for reimbursement. For both situations you always need to submit a claim to IMG. If your provider is direct billing IMG, you just submit the claims form. If you need to pay upfront, you need to submit the claim form along with all the payment receipts to IMG.  You can create a ") + makeURL("MyIMG account", "https://myimg.imglobal.com/unauth/homepage.aspx") + loc( " after submitting the claim form, and then you can check whether IMG has received the medical provider bills and the claim status. You also can call IMG about your claims questions (1-800-628-4664 or 317-655-4500). Please have your insurance ID card ready when you call.  If you prefer to speak to IMG in a language other than English, you can ask for foreign language assistance, and tell them your preferred language."));
    
    endRow(); 



    startRow();

    writeText("<strong>" + loc("14. ") + loc("Does the plan cover child physical exams and vaccines?") + "</strong>" + "<br />" + loc("No, it doesn't. In the U.S., insurance that covers child physical exams and vaccines normally cost more than $200-$300 per month.  Contact us for ways to get inexpensive, and sometimes free, vaccines or immunizations, as well as child physical exams."));
    
    endRow();    

    startRow();

    writeText("<strong>" + loc("15. ") + loc("Does the plan cover dental and vision?") + "</strong>" + "<br />" + loc("For dental the plan covers injuries up to $500, and treatment for sudden pain up to $350.  For vision the plan covers injuries.  If you are looking for coverage for routine dental or vision exams, or if you already know you need dental work or glasses you should consider supplementing the medical plan with a Careington Dental and Vision Discount Plan.  This plan provides discounts on dental and vision treatments, and there are no waiting periods before you can get a discount.  You can buy today and get a discount on your dental cleaning, periodontics, major dental procedures, vision exams, or glasses as soon as you receive your membership kit. You can pay monthly and cancel anytime.") + "<br />" + loc("You can search the network for providers around you and learn more about the discount details before purchase. For more information and to purchase click on:  ") + makeURL("Careington Dental/Vision Discount Plan", "http://taianfinancial.com/dental/#p=pivot-careington-dental&l="+getPageAttribute("l")));    

    endRow();    
 
    endRow();
    startRow();
    writeText("");
    endRow();

    endSection();

    startSection("pivot-qanda-travel", "Patriot Travel Questions and Answers");

    var partnerShip = getPartnership(getPageAttribute("partner"));
    var travelStudentPartnerContent = partnerShip["travelStudentContent"];
    var hasTStPartnerContent = !(typeof travelStudentPartnerContent === "undefined");
    if (hasTStPartnerContent) {
        travelStudentPartnerContent();
    }    




    startRow();
    writeText("");
    endRow();

    startRow();

    writeText("Call from US - 8:00AM to 9:00PM Eastern time: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time  8:00pm-12:00am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>");
    endRow();

    startRow();

    writeText("<strong>" + loc("1. ") + loc("Why Should I buy IMG insurance through TaiAn?") + "</strong>" + "<br />" + loc("International Medical Group (IMG) is a worldwide leader in the International medical insurance business, and TaiAn Financial LLC is leading producer for IMG.  TaiAn\'s custom product offering and extended service hours enable us provide our customers industry leading, professional, prompt service and make their insurance experience as easy as possible."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("2. ") + loc("Who is eligible for Patriot Travel Insurance? What is the advantage of the plan?") + "</strong>" + "<br />" + loc("Patriot Travel Medical Insurance is designed for anyone (U.S. and non-U.S. citizens) traveling out of their home country, regardless of visa requirements. Cost starts at about $1/day. Purchase from 5 days to 1 year, and renewable up to 2 years if 1 month or more is purchased initially."));
    
    endRow();     

    startRow();

    writeText("<strong>" + loc("3. ") + loc("How do I buy Patriot Travel Medical Insurance and how long will it take to receive the fulfillment?") + "</strong>" + "<br />" + loc("Buy Travel Insurance online and receive the fulfillment instantly. Purchase steps are as follows:") + "<br />" + loc("1) Click on the link:  ") + makeMainSiteURL("Patriot Travel", "pivot-travel-insurance") + "<br />" + loc("2) Read Patriot America benefits chart and brochure") + "<br />" + loc("3) Click on ") + makeURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/Quote/patriot/pre-quote?imgac=80000699") + "<br />" + loc("4) According to your needs, select a deductible and benefit maximum.") + "<br />" + loc("5) Payment is on the last page of application. You can use a credit card or a debit card which has a Visa, MasterCard or American Express logo to pay.  Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address.") + "<br />" + loc("6) After you submit an application online successfully, you will receive an Email from IMG in a few minutes (If you do not receive it, please check your spam), which contains your insurance card and your confirmation letter (Visa Letter).  The confirmation letter can be used as proof of insurance."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("4. ") + loc("How do I buy Patriot Group Travel Medical Insurance to get 10% off?") + "</strong>" + "<br />" + loc("Patriot America Group plan is available for groups of 5 or more primary applicants (any visa types).") + "<br />" + loc("1) Click on the link:  ") + makeMainSiteURL("Patriot Travel", "pivot-travel-insurance") + "<br />" + loc("2) Read Patriot America chart and brochure. Click on purchase link ") + makeURL("Buy Group 10% off , Group for 5 or More", "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699)") + "<br />" + loc("3) The total length of group duration cannot be more than a year, you can renew before the plan is expired if you are still eligible. The primary applicants in the group may have different insurance dates. No one can have an expiration date beyond one year from the group start date until the group renews for a second year.") + "<br />" + loc("4) According to your group needs, select a deductible and benefit maximum.") + "<br />" + loc("5)  Payment is on the last page of application. You have to use one credit card (or debit card which has a Visa, MasterCard or American Express logo) to pay for the whole group. Please use the credit card holder\'s initials as the \"Sponsoring Organization\". Use the credit card holders name as the \"Contact Name\".  Use the credit card holder\'s email as the group contact for the plan. Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address."));
    
    endRow();   
    

    startRow();

    writeText("<strong>" + loc("5. ") + loc("How do I make the payment?  What do I do if the payment gets declined?") + "</strong>" + "<br />" + loc("You will have an instant quote online and can pay with your credit card or debit card which has a Visa, MasterCard or American Express logo") + "<br />" + loc("Some common reasons for a declined payment are:") + "<br />" + loc("1) Your credit limit ") + "<br />" + loc("2) Some banks need to be notified in advance when you make a credit card charge outside your home country.  You may need to call the number on the back of your card to tell them this is a genuine charge.") + "<br />" + loc("3) Inaccurate billing address.  When IMG asks for billing address, you need to fill in the address that your credit card bill is sent. This will not impact where your insurance material are sent, but is needed to verify your card.") + "<br />" + loc("4) On the payment page, the electronic signature should be the same as the name on the credit card.") + "<br />" + loc("If your card is declined you can submit a new on line application after fixing the problem."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("6. ") + loc("How do I renew?") + "</strong>" + "<br />" + loc("If you have an individual policy, you will receive a few renewal Email notices.  The notices have the same renew link.  Click the renew link, enter your information, and pay with a credit card.  You can finish the renewal online easily.  You can change your phone number, Email address, mailing address and credit card during your renewal.  If you have a group policy, you will receive a renew notice before the policy expires.  The notice will tell you how to write an Email to IMG to renew."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("7. ") + loc("How do I get medical treatment when I get sick?") + "</strong>" + "<br />" + loc("Patriot America customers can go to any provider, but will receive more benefits in-PPO. In-PPO, after deductible, you pay co-insurance 10% up to $500. Out-PPO; after deductible, you co-insurance 20% up to $1000. Then plan pays 100% eligible charges.  If you need to go to a doctor in the United States, you need an appointment. For your own benefit, usually try to go to IMG's designated provider (doctor, hospital or urgent care center). You can search ") + makeURL("First Health Network", "http://www.providerlookuponline.com/coventry/po7/gateway.aspx?plancode=141") + "<br />" + loc(" to find a medical provider.  When you see a doctor, carry your insurance card and personal ID (to verify your identity). In the United States if you do not have an appointment and go directly to the hospital, you go to the Emergency Room. If you go to the Emergency room and are not admitted to the hospital you have to pay a $250 additional deductible. In a real emergency situation (that is life-threatening or disabling), go to the nearest Emergency Room.  When you need urgent care and it is not an emergency, an Urgent Care center may be a good choice. They usually have evening and weekend hours and no appointment is necessary."));
    
    endRow();
    
    startRow();

    writeText("<strong>" + loc("8. ") + loc("Do I need to pre-certify before going to see a doctor?") + "</strong>" + "<br />" + loc("You must call IMG to pre-certify any of the following conditions: any treatment requiring hospitalization; out-patient surgery, CAT scans, MRI\'s; within 48 hours after an emergency admission to the hospital; care in an extended care facility; home nursing care; Durable medical equipment including artificial limbs; or transplant. You don\'t need to pre-certify if your illness or injury is not serious and can be treated in a doctor\'s office.  See details at ") + makeURL("Pre-certification", "https://myimg.imglobal.com/UnAuth/PrecertForm.aspx") );
    
    endRow();    

    startRow();

    writeText("<strong>" + loc("9. ") + loc("How do I submit a claim?") + "</strong>" + "<br />" + loc("There are two ways to file a claim in the IMG system. One is that the medical provider directly bills IMG, the other is that the customer needs to pay upfront before filing a claim with IMG for reimbursement. For both situations you always need to submit a claim to IMG. If your provider is direct billing IMG, you just submit the claims form. If you need to pay upfront, you need to submit the claim form along with all the payment receipts to IMG.  You can create a ") + makeURL("MyIMG account", "https://myimg.imglobal.com/unauth/homepage.aspx") + loc( " after submitting the claim form, and then you can check whether IMG has received the medical provider bills and the claim status. You also can call IMG about your claims questions (1-800-628-4664 or 317-655-4500). Please have your insurance ID card ready when you call.  If you prefer to speak to IMG in a language other than English, you can ask for foreign language assistance, and tell them your preferred language."));
    
    endRow(); 

    startRow();

    writeText("<strong>" + loc("10. ") + loc("What is the coinsurance for Patriot America plan?") + "</strong>" + "<br />" + loc("Patriot customers can go to any provider, but will receive more benefits in-PPO. In-PPO, after deductible you pay co-insurance of 10% up to $500. Out of the PPO, after the deductible you pay co-insurance of 20% up to $1000.  Then the plan pays 100% of eligible charges."));
    
    endRow();

    startRow();

    writeText("<strong>" + loc("11. ") + loc("How much can I get reimbursed for prescription medicine?") + "</strong>" + "<br />" + loc("If the illness or injury is covered, the prescription medicine will be covered (subject to deductible and coinsurance) at 100% of usual charges until the maximum that you bought is met. When you need to fill a prescription you go to the preferred pharmacy with the prescription you received from the doctor. Make sure to bring the Universal URX Discount Card with you. You will have to pay for your prescription at the pharmacy but may receive a 10% to 50% discount with the card. You can then submit your receipts and a claim form to IMG for reimbursement."));
    
    endRow();  

    startRow();

    writeText("<strong>" + loc("12. ") + loc("Does the plan cover child physical exams and vaccines?") + "</strong>" + "<br />" + loc("No, it doesn't. In the U.S., insurance that covers child physical exams and vaccines normally cost more than $200-$300 per month.  Contact us for ways to get inexpensive, and sometimes free, vaccines or immunizations, as well as child physical exams."));
    
    endRow();   

    startRow();

    writeText("<strong>" + loc("13. ") + loc("Does the plan cover dental and vision?") + "</strong>" + "<br />" + loc("For dental the plan covers injuries up to $500, and treatment for sudden pain up to $350.  For vision the plan covers injuries.  If you are looking for coverage for routine dental or vision exams, or if you already know you need dental work or glasses you should consider supplementing the medical plan with a Careington Dental and Vision Discount Plan.  This plan provides discounts on dental and vision treatments, and there are no waiting periods before you can get a discount.  You can buy today and get a discount on your dental cleaning, periodontics, major dental procedures, vision exams, or glasses as soon as you receive your membership kit. You can pay monthly and cancel anytime.") + "<br />" + loc("You can search the network for providers around you and learn more about the discount details before purchase. For more information and to purchase click on:  ") + makeURL("Careington Dental/Vision Discount Plan", "http://taianfinancial.com/dental/#p=pivot-careington-dental&l="+getPageAttribute("l")));
    
    endRow();    
    


    startRow();
    writeText("");
    endRow();

    endSection();




 

    writeSectionForSchoolWaiverRequirements();

    if (!legacy) {
        writeSectionsForApps();
        writeSectionsForForms();
    }
}

