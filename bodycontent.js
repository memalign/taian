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

function updateHash(keyToUpdate, newValue) {
    var map = getPageAttributes();

    if (keyToUpdate && keyToUpdate.length > 0)
        map[keyToUpdate] = newValue;

    var newHash = "#";
    var delim = "";
    for (var key in map) {
        if (key.length > 0 && map[key] && map[key].length > 0) {
            newHash = newHash + delim + key + "=" + map[key];
            delim = "&";
        }
    }

    document.location.hash = newHash;
    window.scrollTo(0, 0);
}

function getAdId() {
    var partnership = getPageAttribute("partner");
    var hasPartnership = !(typeof partnership === "undefined");
    if (hasPartnership)
        return partnership;

    var adId = getPageAttribute("adid");
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

function showPivot(pivotName) {
    var defaultTab = "pivot-home";
    if (pivotName.length == 0)
        pivotName = defaultTab;

    updateHash("p", pivotName);
    var toHide = document.getElementsByClassName("pivot ");
    for (var i = 0; i < toHide.length; i++) {
        toHide[i].style.display = "none";
    }
    var toShow = document.getElementById(pivotName);
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
        "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699" : "SHAPlanA",
        "https://purchase.imglobal.com/quote/patriot?imgac=80000699" : "Travel",
        "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699" : "TravelGroup",
    };
    
    var perLang = {
        "cn" : urlsToAppIds,
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

function startCell() {
    document.write('\
        <div class="grid-unit">\
            <div bi:type="highlight">\
            ');
}

function endCell() {
    document.write('\
            </div>\
        </div>\
        ');
}

function makeText(text) {
    return '<p align="left">'+loc(text)+'</p>';
}

function writeText(text) {
    document.write(makeText(text));
}

function writeCellWithText(text) {
    startCell();
    writeText(text);
    endCell();
}

function makeImage(filename) {
    return '<img src="'+filename+'" width="100%"></img>';
}

function writeImage(filename) {
    document.write(makeImage(filename));
}

function makeTableWithStyle(styleClass, numColumns, cells) {
    var tableCode = "";
    tableCode += '<div bi:type="highlight">';
    tableCode += '<table class="'+styleClass+'">';
    for (var i = 0; i < cells.length; ++i) {
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
        tableCode += loc(cells[i]);
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

function makeBulletedListWithTitle(title, list) {
    var listCode = '<h2>'+loc(title)+'</h2>';
    listCode += '<ul class="styled-ul">';

    for (var i = 0; i < list.length; ++i) {
        listCode += '<li class="styled-li">'+loc(list[i])+"</li>";
    }
    
    listCode += "</ul>";
    return listCode;
}

function writeLinesWithTitle(title, lines) {
    var code = "";

    code += makeBold(title);
    for (var i = 0; i < lines.length; ++i) {
        code += "<br />" + loc(lines[i]);
    }
    
    document.write(code);
}

function writeRowForUnitedHealthOne() {
    startRow();
    document.write(makeTableWithStyle("invisibleTable", 2, [
                makeImage("uhone.png"),
                "Major medical, short term, dental insurance, critical illness coverage for residents (in the U.S. for 1 yr or longer) of Indiana and Texas. UnitedHealthOne coverage is low cost and high quality.",
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
                    "Monthly Rate (deductible $2500): $35 for 25 y/o, $40 for 35 y/o, $64 for 45 y/o",
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
                    "Monthly Rate (deductible $2500): $99 for 25 y/o, $133 for 35 y/o, $194 for 45 y/o",
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
                        "Monthly Rate (deductible $2500): $106 for 25 y/o, $144 for 35 y/o, $209 for 45 y/o",
                        ]),

                "",
                makeBuyURL("Quote/Purchase UnitedHealthOne Insurance® - You can get a quote without entering any personal information.", "https://www.uhone.com/quote/GetQuote.ashx?BrokerID=AA4324968&ArrangementID=01"),
                ]));

    writeText("");
    writeText("More information about these medical plans:");
    document.write(makeBulletedListWithTitle("", [
                "Deductible credit means your deductible goes down by 20% each year your medical expenses are less than your deductible. A 50% reduction in your deductible is your maximum benefit.",
                "Nationwide network gives you access to providers throughout the U.S.",
                "In Indiana and Texas dental insurance and critical illness insurance can be purchased seperately from medical coverage.",
                "All plans are available through the quote link. This includes other copay plans, high deductible health insurance, health saving accounts, self employed health insurance coverage.",
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
            "Nearly 754,000 physicians and 5,400 hospitals in the largest national provider network.",
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
    document.write("<br />" + loc("Great new look - same TaiAn Financial"));
}

function writeContactInfo() {
    var partnerShip = getPartnership(getPageAttribute("partner"));
    var contactInfo = partnerShip["contactInfo"];

    document.write("<ul>");

    for (var i = 0; i < contactInfo.length; ++i) {
        document.write("<li>");
        document.write(loc(contactInfo[i]));
        document.write("</li>");
    }

    document.write("<li id=\"mscom-legal-copyright\">");
    document.write(loc("2012 TaiAn Financial LLC. All rights reserved."));
    document.write("</li>");

    document.write("</ul>");
}

function writeTabs() {
    var topLevelNames = { "pivot-home": "Home",
                          "pivot-international-student": "International Student",
                          "pivot-global-medical": "Global Medical",
                          "pivot-travel-insurance": "Travel Insurance",
                          "pivot-indiana-residents": "Indiana Residents",
                          "pivot-texas-residents": "Texas Residents",
                          "pivot-life-insurance": "Life Insurance",
    };

    var partnership = getPartnership(getPageAttribute("partner"));
    var tabs = partnership["tabs"];

    var topLevelLinks = [];

    for (var i = 0; i < tabs.length; ++i) {
        topLevelLinks.push(makeTopLevelURL(tabs[i], topLevelNames[tabs[i]]));
    }
    document.write(makeTableWithStyle("invisibleTable", topLevelLinks.length, topLevelLinks));
}

function writeDontSeeWhatYouNeedRow() {
    startRow();
    writeText("");

    var bullets = [
        makeURL("Explore other choices on your own.", "https://producer.imglobal.com/international-insurance-plans.aspx?imgac=80000699"),
    ];

    var partnerShip = getPartnership(getPageAttribute("partner"));
    var contactInfo = partnerShip["contactInfo"];

    bullets = bullets.concat(contactInfo);
    bullets = bullets.concat([
                "We have plans to meet many diverse needs:",
                "Adventure Travel",
                "Multi trip travel medical insurance",
                "Student coverage for non us citizens with a visa",
                "Student coverage for US citizens abroad",
                "Coverage for professionals living outside their home country",
                "Travel insurance plans for groups traveling together",
                "More – Just ask!",
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
                    "Renewable up to 24 months if three months or more are purchased",
                    "Freedom to seek treatment with hospital or doctor of your choice",
                    "Trip cancellation, travel delay and baggage delay benefits available",
                    "Universal Rx pharmacy discount savings",
                    "24 hour secure access from anywhere in the world to manage your account at any time",
                    "Groups of 5 or more can purchase Patriot Travel Group offering at a lower price",
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
                    "Recently arrived immigrants",
                    ]),
                "",
                "You have enough to worry about when you're traveling. Don't let your medical coverage be an uncertainty. Patriot International® provides coverage for U.S. citizens traveling outside the U.S. with coverage for brief returns to the U.S., while Patriot America® provides coverage for non-U.S. citizens traveling outside their home country. Both plans are available for a minimum of 5 days up to a maximum of two years.",

                "",
                "The international medical plans offer excellent benefits and services to meet your global needs. You have access to international, multilingual customer service centers, claims administrators who process claims from all over the world, handling virtually every language and currency, and 24 hour access to highly qualified coordinators of emergency medical services and international treatment. You can also choose from a wide range of deductibles, several Maximum Limits, and you have access to more than 17,000 providers through the International Provider AccessSM (IPA) when seeking treatment outside the U.S.  You can also reduce your out-of-pocket costs when seeking treatment in the U.S. by locating providers through the independent Preferred Provider Organization.",

                "Patriot Travel Brochure", makeURL("Patriot Travel Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1801&a=80000699"),
                "Group Patriot Travel Brochure", makeURL("Group Patriot Travel Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1802&a=80000699"),

                "", makeBuyURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                "", makeBuyURL("Buy Patriot Group Travel Insurance", "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699"),

                ]));
}

function writeSections() {
    startSection("pivot-home", "");

    startRow();

    startCell();
    startPivotURL("pivot-international-student");
    writeImage("international-student.jpg");
    writeText("International Student & Scholar (F1&J1 visa). Coverage meets most university standards. $48.62/month with $5,000,000 Benefit");
    endPivotURL();
    endCell();

    startCell();
    startPivotURL("pivot-global-medical");
    writeImage("global-medical.jpg");
    writeText("Global Medical - Global insurance designed for non-US citizens to use worldwide, and US citizens to use outside of the United States.");
    endPivotURL();
    endCell();

    startCell();
    startPivotURL("pivot-travel-insurance");
    writeImage("traveler.jpg");
    writeText("Traveler's insurance: Business travel, family visiting, leisure travel. 5 days - 2 years.  Prices start at about $1/day");
    endPivotURL();
    endCell();

    endRow();
   

    startRow();
    writeText("");
    endRow();

    startRow();
    writeCellWithText("We are qualified insurance agents with over 20 years experience working with insurance companies.");
    writeCellWithText("We have native English and Chinese speakers to answer all of your questions.");
    writeCellWithText("Ask us about student coverage that meets your university insurance standards.");
    endRow();

    endSection();


    // School waiver requirements
    startSection("pivot-school-waiver", "School Waiver Requirements");
    startRow();
    writeText("Contact us to ensure a plan meets your requirements.");
    endRow();

    startRow();
    document.write(makeTable(3,
                [
                "School", "F1 Visa", "J1 Visa",

                makeURL("Arizona State University (AZ)", "http://www.asu.edu/"),
                makeURL("Click to View", "https://students.asu.edu/internationalstudenthealth"),
                makeURL("Click to View", "https://students.asu.edu/internationalstudenthealth"),

                makeURL("Auburn University (AL)", "http://www.auburn.edu/"),
                makeURL("Click to View", "http://www.auburn.edu/academic/international/insurance2011/insurance_plan.htm"),
                makeURL("Click to View", "http://www.auburn.edu/academic/international/insurance2011/insurance_plan.htm"),

                makeURL("Boston University (MA)", "http://www.bu.edu/"),
                makeURL("Click to View", "http://www.bu.edu/studentaccountingservices/resources/medical-insurance/"),
                makeURL("Click to View", "http://www.bu.edu/studentaccountingservices/resources/medical-insurance/"),

                makeURL("Brandeis University (MA)", "http://www.brandeis.edu/"),
                makeURL("Click to View", "http://heller.brandeis.edu/admissions/admitted-students/grad-selection-form-8-2011.pdf"),
                makeURL("Click to View", "http://www.brandeis.edu/acserv/isso/scholar/currentscholars/healthinsurance.html"),

                makeURL("Brigham Young University (UT)", "http://www.byu.edu/"),
                makeURL("Click to View", "http://health.byu.edu/health_plan/req.php"),
                makeURL("Click to View", "https://internationalservices.byu.edu/content/insurance"),

                makeURL("Brown University (RI)", "http://www.brown.edu/"),
                makeURL("Click to View", "http://www.universityhealthplans.com/letters/letter.cgi?school_id=165"),
                makeURL("Click to View", "http://brown.edu/Administration/OISSS/scholars/docs/J1_health_insurance_memo.pdf"),

                makeURL("California Institute of Technology (CA)", "http://www.caltech.edu/"),
                makeURL("Click to View", "http://www.gradoffice.caltech.edu/documents/94-student_waiver_requirements_2011-2012.pdf"),
                makeURL("Click to View", "http://www.hr.caltech.edu/postdoc/upon_arrival/international_insurance.htm"),

                makeURL("Carnegie Mellon University (PA)", "http://www.cmu.edu/"),
                makeURL("Click to View", "http://www.cmu.edu/health-services/student-insurance/medical/med_info/medical_insurance_waiver_enrollment_process.html"),
                makeURL("Click to View", "http://www.studentaffairs.cmu.edu/oie/forscho/j1/conditions.html"),

                makeURL("Case Western Reserve University (OH)", "http://www.case.edu"),
                makeURL("Click to View", "http://studentaffairs.case.edu/medicalplan/news/4915.newx"),
                makeURL("Click to View", "http://www.case.edu/finadmin/humres/ffs/j1.html"),

                makeURL("Clemson University (SC)", "http://www.clemson.edu/"),
                makeURL("Click to View", "http://www.studentinsurance.com/Schools/SC/Clemson/WaiverRequirements.asp?Show=Int&MenuNum=2"),
                makeURL("Click to View", "http://www.studentinsurance.com/Schools/SC/Clemson/WaiverRequirements.asp?Show=Int&MenuNum=2"),

                makeURL("Colorado State University (OH)", "http://www.csuohio.edu/"),
                makeURL("Click to View", "http://www.csuohio.edu/offices/health/InsuranceWaiver.html"),
                makeURL("Click to View", "http://www.csuohio.edu/offices/health/InsuranceWaiver.html"),

                makeURL("Colorado at boulder", ""),
                makeURL("Click to View", "http://healthcenter.colorado.edu/insurance/select-or-waive-coverage/"),
                makeURL("Click to View", "http://www.colorado.edu/oie/isss/pdf/InsuranceComplianceForm.pdf"),

                makeURL("Columbia University (NY)", "http://www.columbia.edu/"),
                makeURL("Click to View", "http://www.cumc.columbia.edu/student/health/pdf/11-12%20Insurance%20Waiver%20Criteria.pdf"),
                makeURL("Click to View", "http://www.columbia.edu/cu/isso/visa/scholar/J_health.html"),

                makeURL("Cornell University (NY)", "http://www.cornell.edu/"),
                makeURL("Click to View", "http://www.gannett.cornell.edu/insurance/undergrads/enrollment/"),
                makeURL("Click to View", "http://www.isso.cornell.edu/immigration/j1student/j1insurance.php"),

                makeURL("Dartmouth College (NH)", "http://www.dartmouth.edu/"),
                makeURL("Click to View", "http://www.dartmouth.edu/~health/depts/insurance/waiver04.html"),
                makeURL("Click to View", "http://www.dartmouth.edu/~ovis/updates/j1/health.html"),

                makeURL("Duke University (NC)", "http://www.duke.edu/"),
                makeURL("Click to View", "http://studentaffairs.duke.edu/studenthealth/new-students/health-insurance-requirements"),
                makeURL("Click to View", "http://studentaffairs.duke.edu/studenthealth/new-students/health-insurance-requirements"),

                makeURL("Emory University (GA)", "http://www.emory.edu/"),
                makeURL("Click to View", "http://studenthealth.emory.edu/hs/hs_manins_fall_2012.php"),
                makeURL("Click to View", "http://www.emory.edu/isss/scholars/Maintaining%20J-1%20Status%20Scholars/Health%20Insurance.html"),

                makeURL("Florida State University (FL)", "http://www.fsu.edu/"),
                makeURL("Click to View", "http://studentinsurance.fsu.edu/forms/comparable_coverage_international.pdf"),
                makeURL("Click to View", "http://cge.fsu.edu/forms/j1schforms/health_insurance_eval.pdf"),

                makeURL("George Mason University (VA)", "http://www.gmu.edu/"),
                makeURL("Click to View", "ttp://shs.gmu.edu/insurance/international.php#Student"),
                makeURL("Click to View", "http://universitypolicy.gmu.edu/6002stu.html"),

                makeURL("Georgetown University (DC)", "http://www.georgetown.edu/"),
                makeURL("Click to View", "http://studentaffairs.georgetown.edu/insurance/letterwaiver.html"),
                makeURL("Click to View", "http://oip.georgetown.edu/isss/j1healthinsurance.htm"),

                makeURL("George Washington University (DC)", "http://www.gwu.edu/"),
                makeURL("", ""),
                makeURL("Click to View", "http://gwired.gwu.edu/iso/CurrentScholarsJ1/HealthInsuranceRequirementforJ1ExchangeVisitors"),

                makeURL("Georgia Institute of Technology", ""),
                makeURL("Click to View", "http://www.health.gatech.edu/finance/Pages/insurance.aspx"),
                makeURL("Click to View", "http://oie.gatech.edu/archive/isss/forms/schol_insurance.pdf?archive=1"),

                makeURL("Georgia State University", ""),
                makeURL("Click to View", "http://www.gsu.edu/isss/health_insurance_FAQ.html"),
                makeURL("Click to View", "http://www.gsu.edu/enrollment/images/ISSS/J-1_Insurance_Compliance_Form.pdf"),

                makeURL("Harvard University (MA)", "http://www.harvard.edu/"),
                makeURL("Click to View", "http://www.hio.harvard.edu/healthcareandinsurance/students/healthinsurancerequirementsandwaivers/"),
                makeURL("Click to View", "http://www.hio.harvard.edu/healthcareandinsurance/scholars/requirementsforjvisaholders/"),

                makeURL("Indiana University-Bloomington", "http://www.iub.edu/"),
                makeURL("Click to View", "http://iservices.iupui.edu/health-insurance/students/"),
                makeURL("Click to View", "http://iservices.iupui.edu/health-insurance/students/"),

                makeURL("Iowa State University (IA)", "http://www.iastate.edu/"),
                makeURL("Click to View", "http://www.hrs.iastate.edu/sship/docs/MandatoryHealthInsuranceInternationalStudents.pdf"),
                makeURL("Click to View", "http://www.hrs.iastate.edu/sship/docs/MandatoryHealthInsuranceInternationalStudents.pdf"),

                makeURL("Johns Hopkins University (MD)", "http://www.jhu.edu/"),
                makeURL("Click to View", "https://www.aetnastudenthealth.com/schools/jhuhc/brochure1213.pdf"),
                makeURL("Click to View", "https://www.aetnastudenthealth.com/schools/jhuhc/brochure1213.pdf"),

                makeURL("Kansas State University (KS)", "http://www.k-state.edu/"),
                makeURL("Click to View", "http://www.k-state.edu/isss/current/healthinsurance.html"),
                makeURL("Click to View", "http://www.k-state.edu/isss/j-1/jhealthins.htm"),

                makeURL("Lehigh University (PA)", "http://www.lehigh.edu/"),
                makeURL("Click to View", "http://www.lehigh.edu/~intnl/undergraduate.html"),
                makeURL("Click to View", "http://www.lehigh.edu/oiss/j1health.html"),

                makeURL("LSU Baton Rouge(LA", "http://www.lsu.edu"),
                makeURL("Click to View", "http://www.oip.lsu.edu/iso/iso_Insurance_Important_Info.htm"),
                makeURL("Click to View", "&quot;http://www.oip.lsu.edu/ISO/pdfs/Spring%20%202012%20J%20-1%20AND%20J-2%20Student%20insurance%20cov%20eval.pdf"),

                makeURL("Massachusetts Institute of Technology (MA", "http://web.mit.edu/"),
                makeURL("Click to View", "http://medweb.mit.edu/healthplans/student/waiver.html#requirements"),
                makeURL("Click to View", "http://web.mit.edu/scholars/intlscholars/healthinsurance/j1requirements.html"),

                makeURL("Michigan State University (MI)", "http://www.msu.edu/"),
                makeURL("Click to View", "http://www.hr.msu.edu/benefits/studenthealth/studenthealth_docs/MSUwaivercriteria.pdf"),
                makeURL("Click to View", "http://oiss.isp.msu.edu/documents/scholars/DS2019_Scholar_Extension.pdf"),

                makeURL("Mississippi State University (MS)>", "http://www.msstate.edu/"),
                makeURL("Click to View", "http://admissions.msstate.edu/international/apply/insurance.php"),
                makeURL("Click to View", "http://admissions.msstate.edu/international/services/insurance.php"),

                makeURL("New Jersey Institute of Technology (NJ)", "http://www.njit.edu/"),
                makeURL("Click to View", "http://www.njit.edu/healthservices/health-insurance.php"),
                makeURL("Click to View", "http://www.njit.edu/humanresources/divisions/employment/request_for_DS-2019_J-1_status_sponsorship.pdf"),

                makeURL("New York University (NY)", "http://www.nyu.edu/"),
                makeURL("Click to View", "http://www.nyu.edu/shc/about/waiving.plans.html"),
                makeURL("Click to View", "http://www.nyu.edu/life/student-life/international-students-and-scholars/scholars/immigration-matters-/visa-types-/j-11.html"),

                makeURL("North Carolina State University (NC)", "http://www.ncsu.edu/"),
                makeURL("Click to View", " http://healthcenter.ncsu.edu/insurance/"),
                makeURL("Click to View", "http://www.ncsu.edu/ois/studentintern/internhealthins.php"),

                makeURL("Northeastern University (MA)", "http://www.northeastern.edu/"),
                makeURL("Click to View", "http://www.northeastern.edu/uhcs/pdfs/nushpPetToWaive.pdf"),
                makeURL("Click to View", "http://www.northeastern.edu/issi/insurance.html"),

                makeURL("Northwest University (WA)", "http://www.northwestu.edu/"),
                makeURL("Click to View", "http://www.northwestu.edu/international/undergraduate/requirements/"),
                makeURL("Click to View", "http://www.northwestu.edu/international/undergraduate/requirements/"),

                makeURL("Ohio State University-Columbus(OH)", "http://www.osu.edu/"),
                makeURL("Click to View", "http://shi.osu.edu/coverage-comparison-tools/"),
                makeURL("Click to View", "http://oia.osu.edu/international-scholars/j-1-visiting-scholars/required-health-insurance.html"),

                makeURL("Oklahoma State University System (OK)", "http://www.system.okstate.edu/"),
                makeURL("Click to View", "http://www.okstate.edu/UHS/insurance.php"),
                makeURL("Click to View", "http://union.okstate.edu/iss/Scholars/Immigration/Insurance.htm"),

                makeURL("Oregon State University (OR)", "http://oregonstate.edu/"),
                makeURL("Click to View", "http://studenthealth.oregonstate.edu/internationalplan"),
                makeURL("Click to View", "http://oregonstate.edu/international/sites/default/files/atosu/insurance.pdf"),

                makeURL("Pennsylvania State University System (PA)", ""),
                makeURL("Click to View", "http://studentaffairs.psu.edu/health/services/insurance/waiver.shtml"),
                makeURL("Click to View", "http://global.psu.edu/faculty_staff/scholars/j1.cfm"),

                makeURL("Princeton University (NJ)", "http://www.princeton.edu/"),
                makeURL("Click to View", "http://www.internationalstudentguidetotheusa.com/articles/healthcare_insurance.php"),
                makeURL("Click to View", "http://www.princeton.edu/intlctr/scholars/new-scholarsfaculty/j-1-exchange-visitor/health-insurance-requirem/&quot;"),

                makeURL("Purdue University (IN)", "http://www.purdue.edu/"),
                makeURL("Click to View", "http://www.purdue.edu/push/insurance/waivers.shtml"),
                makeURL("Click to View", "http://www.iss.purdue.edu/Current/J1/HealthInsurance.cfm"),

                makeURL("Rensselaer Polytechnic Institute (NY)", "http://www.rpi.edu/"),
                makeURL("Click to View", "http://studenthealth.rpi.edu/insurance.php?catid=1035"),
                makeURL("Click to View", "http://doso.rpi.edu/update.do?artcenterkey=494"),

                makeURL("Rice University (TX)", "http://www.riceinfo.rice.edu/"),
                makeURL("Click to View", "http://oiss.rice.edu/gateway.aspx?id=208"),
                makeURL("Click to View", "http://oiss.rice.edu/gateway.aspx?id=228"),

                makeURL("Rutgers University (NJ)", ""),
                makeURL("Click to View", "http://internationalservices.rutgers.edu/content/Center_Staff_Services_and_Programs/Health_Insurance_Program/Rutgers_Health_Insurance_Requirement.html"),
                makeURL("Click to View", "http://internationalservices.rutgers.edu/content/Center_Staff_Services_and_Programs/Health_Insurance_Program/Rutgers_Health_Insurance_Requirement.html#Minimum_Requirements_for_Health_Insurance_Coverage_at_Rutgers"),

                makeURL("San Diego State University", "http://www.sdsu.edu/"),
                makeURL("Click to View", "http://www.isc.sdsu.edu/Current/res_insurance.htm"),
                makeURL("Click to View", "http://icenter.ucsd.edu/_files/ispo/departments/healthmemo_form.pdf"),

                makeURL("Stanford University (CA)", "http://www.stanford.edu/"),
                makeURL("Click to View", "http://www.stanford.edu/group/vaden/insurance/using_your_own.html"),
                makeURL("Click to View", "http://icenter.stanford.edu/quick_reference/healthinsurance.html#J1reqs"),

                makeURL("SUNY Albany (NY)", "http://www.albany.edu/"),
                makeURL("Click to View", "http://www.albany.edu/ship/waiving_out.shtml"),
                makeURL("Click to View", "http://www.albany.edu/isss/pdf/faculty/State%20Department%20J-1%20Health%20Insurance.pdf"),

                makeURL("SUNY Binghamton (NY)", "http://www.binghamton.edu/"),
                makeURL("Click to View", "http://www2.binghamton.edu/isss/health-insurance/waiverinfo.html"),
                makeURL("Click to View", "http://www2.binghamton.edu/isss/health-insurance/health_ins.html"),

                makeURL("SUNY Buffalo (CA)", "http://www.buffalo.edu/"),
                makeURL("Click to View", "http://wings.buffalo.edu/intlservices/health_stu.html"),
                makeURL("Click to View", "http://wings.buffalo.edu/intlservices/health_stu.html"),

                makeURL("SUNY Stony Brook (CA)", "http://www.sunysb.edu/"),
                makeURL("Click to View", "http://studentaffairs.stonybrook.edu/shs/intl.shtml"),
                "",

                makeURL("Syracuse University (NY)", "http://www.syr.edu/"),
                makeURL("Click to View", "http://international.syr.edu/new-students/health-insurance/index.html"),
                makeURL("Click to View", "http://international.syr.edu/new-students/health-insurance/index.html"),

                makeURL("Temple University (PA)", "http://www.temple.edu/"),
                makeURL("Click to View", "http://www.temple.edu/hr/students/waiver.htm"),
                makeURL("Click to View", "http://www.temple.edu/isss/home/h1b1j1/MandatoryHealthinsuranceRequirementsforJExchangeVisitors.htm"),

                makeURL("Texas A&M University System (TX)", ""),
                makeURL("Click to View", "http://international.tamu.edu/iss/insurance/forstudents.asp"),
                makeURL("Click to View", "http://www.nafsa.org/_/file/_/amresource/22cfr62.htm#6214"),

                makeURL("Texas Tech University", "http://www.ttu.edu/"),
                makeURL("Click to View", "http://www.ttuhsc.edu/studenthealth/"),
                makeURL("Click to View", "http://www.iaff.ttu.edu/Main/ISSS/CurrentStudentscholars/JInsReqs.asp"),

                makeURL("Tufts University (MA)", "http://www.tufts.edu/"),
                makeURL("Click to View", "http://medicine.tufts.edu/Who-We-Are/Administrative-Offices/Student-"),
                makeURL("Click to View", "http://ase.tufts.edu/icenter/currentImmigrationFacultyJ1-2yrInsurance.htm"),

                makeURL("Tulane University (LA)", "http://www.tulane.edu/"),
                makeURL("Click to View", "http://pandora.tcs.tulane.edu/acctrec/healthinsurance.asp"),
                makeURL("Click to View", "https://greenspace.tulane.edu/ciss/www/J-1 Insurance Requirement.pdf"),

                makeURL("University of Alabama -Tuscaloosa (AL)", "http://www.ua.edu/"),
                "",
                makeURL("Click to View", "http://is.ua.edu/international-faculty-staff/j-1-exchange-visitors/j-1-overview-categories/"),

                makeURL("University of Alabama - Birmingham (AL)", "http://www.uab.edu/"),
                makeURL("Click to View", "http://www.uab.edu/studenthealth/insurance-and-waivers/mandatory-insurance-waivers"),
                makeURL("Click to View", "https://www.uab.edu/medicine/home/education/current/visiting"),

                makeURL("University of Alabama - Huntsville (AL)", "http://www.uah.edu/"),
                makeURL("Click to View", "http://www.uah.edu/ISSO/Students/newstudents.php"),
                makeURL("Click to View", "http://www.uah.edu/admin/immigration/medins.html"),

                makeURL("University of Alaska - Fairbanks (AK)", "http://www.uaf.edu/"),
                makeURL("Click to View", "http://www.uaf.edu/files/oip/F-1InsuranceFlyer.pdf"),
                makeURL("Click to View", "http://www.uaf.edu/oip/information-for-uaf-depar/j-1-visa-category/"),

                makeURL("University of Arizona (AZ)", "http://www.arizona.edu/"),
                makeURL("Click to View", "http://www.health.arizona.edu/pdf/insurance/Health%20Coverage%20Guidelines%20for%20an%20Exemption.pdf"),
                makeURL("Click to View", "http://www.health.arizona.edu/pdf/insurance/J1%20Visiting%20Scholars%20Ins%20Requirement.pdf"),

                makeURL("University of Arkansas - Fayetteville(AR)", "http://www.uark.edu/"),
                makeURL("", ""),
                makeURL("Click to View", "http://iss.uark.edu/2104.php"),

                makeURL("University of California Berkeley (CA)", "http://www.berkeley.edu/"),
                makeURL("Click to View", "http://www.uhs.berkeley.edu/students/insurance/waiver/compcoverage.shtml"),
                makeURL("Click to View", "http://internationaloffice.berkeley.edu/j_insurance"),

                makeURL("University of California Davis (CA)", "http://www.ucdavis.edu/"),
                makeURL("Click to View", "http://shcs.ucdavis.edu/insurance/waiver/waiver-guidelines.html"),
                makeURL("Click to View", "http://siss.ucdavis.edu/health_j1.cfm"),

                makeURL("University of California Irvine (CA)", "http://www.uci.edu/"),
                makeURL("Click to View", "http://summer.uci.edu/pdfs/forms/intl_insuranceWaiver.pdf"),
                makeURL("Click to View", "http://www.ic.uci.edu/Scholars/J-1/healthinsurance.php"),

                makeURL("University of California Los Angeles (CA)", "http://www.ucla.edu/"),
                makeURL("Click to View", "http://www.admissions.ucla.edu/NewBruins/Intl_insurance.htm"),
                makeURL("Click to View", "http://www.admissions.ucla.edu/NewBruins/Intl_insurance.htm"),

                makeURL("University of California Riverside (CA)", "http://www.ucr.edu/"),
                makeURL("Click to View", "http://www.campushealth.ucr.edu/SiteCollectionDocuments/ucrub1011.pdf"),
                makeURL("Click to View", "http://internationalcenter.ucr.edu/SiteCollectionDocuments/importantregulationsforj1students.pdf"),

                makeURL("University of California San Diego (CA)", "http://www.ucsd.edu/"),
                makeURL("Click to View", "http://studenthealth.ucsd.edu/shipwaiver.shtml#howto"),
                makeURL("Click to View", "http://icenter.ucsd.edu/_files/ispo/departments/healthmemo_form.pdf"),

                makeURL("University of California San Francisco (CA)", "http://www.ucsf.edu/"),
                makeURL("Click to View", "http://studenthealth.ucsf.edu/waiver#eli"),
                makeURL("Click to View", "http://isso.ucsf.edu/immigration-visas/for-scholars/j-1-scholars/health-insurance-requirement"),

                makeURL("University of California Santa Barbara (CA)", "http://www.ucsb.edu/"),
                makeURL("Click to View", "http://studenthealth.sa.ucsb.edu/CMSMedia/Documents/UCSHIP%20Policy%20Brochure.pdf"),
                makeURL("Click to View", "http://oiss.sa.ucsb.edu/scholars/Insurance.aspx"),

                makeURL("University of California Santa Cruz (CA)", "http://www.ucsc.edu/"),
                makeURL("Click to View", "http://shs-manual.ucsc.edu/policy/student-health-insurance"),
                makeURL("Click to View", "http://ieo.ucsc.edu/intl-scholars/j1/post-arrival-insurance.html#Federal"),

                makeURL("University of Chicago (IL)", "http://www.uchicago.edu/"),
                makeURL("Click to View", "http://studenthealth.uchicago.edu/page/enrollment-and-waivers"),
                makeURL("Click to View", "https://internationalaffairs.uchicago.edu/page/health-insurance-requirements-j-1-exchange-visitors"),

                makeURL("University of Cincinnati (OH)", "http://www.uc.edu/"),
                makeURL("Click to View", "http://www.uc.edu/uhs/student_health_insurance.html"),
                makeURL("Click to View", "http://www.uc.edu/international/services/scholars/maintaining_status/health_insurance.html"),

                makeURL("University of Connecticut (CT)", "http://www.uconn.edu/"),
                makeURL("Click to View ", "http://global.uconn.edu/?page_id=972"),
                makeURL("Click to View", "http://www.disp.uconn.edu/scholars/J1insurance.html"),

                makeURL("University of Dayton (OH)", "http://www.udayton.edu/"),
                makeURL("Click to View", "http://www.udayton.edu/international/isss/arrival_and_orientation/health_insurance.php"),
                makeURL("Click to View", "http://www.udayton.edu/international/isss/arrival_and_orientation/health_insurance.php"),

                makeURL("University of Delaware (DE)", "http://www.udel.edu/"),
                makeURL("Click to View", "http://www.udel.edu/oiss/forms/insurance_waiver_international.pdf"),
                makeURL("Click to View", "http://www.udel.edu/oiss/information/j1j2health.html"),

                makeURL("University of Florida (FL)", "http://www.ufl.edu/"),
                makeURL("Click to View", "http://www.ufic.ufl.edu/ISS/Forms/Insurance%20Verification.pdf"),
                makeURL("Click to View", "http://www.ufic.ufl.edu/ISS/Forms/Insurance%20Verification.pdf"),

                makeURL("University of Georgia (GA)", "http://www.uga.edu/"),
                makeURL("Click to View", "http://www.hr.uga.edu/benefits/stuins/ins_min_table.html"),
                makeURL("Click to View", "https://www.google.com/url?q=http://www.issis.uga.edu/images/docs/for_scholars/j_insurance.doc&amp;sa=U&amp;ei=ttbjT9qKJa2XmQXNuYmACw&amp;ved=0CAkQFjAC&amp;client=internal-uds-cse&amp;usg=AFQjCNFG8_13xA0PfuLZ74_htXpCNruYAg"),

                makeURL("University of Hawaii - Manoa (HI)", "http://www.uhm.hawaii.edu/"),
                makeURL("Click to View", "http://www.hawaii.edu/shs/international.html"),
                makeURL("Click to View", "http://www.hawaii.edu/fsis/downloads/JHealthComplianceForm.pdf"),

                makeURL("University of Houston (TX)", "http://www.uh.edu/"),
                makeURL("Click to View", "http://www.issso.uh.edu/pdf/HealthInsuranceRequirementsforNon-ImmigrantInternationalStudentsFall2011.pdf"),
                makeURL("Click to View", "http://www.issso.uh.edu/finances/healthinsurance.html"),

                makeURL("University of Idaho (ID)", "http://www.uidaho.edu/"),
                makeURL("Click to View", "http://www.uidaho.edu/international/issfs/international-"),
                makeURL("Click to View", "http://www.uidaho.edu/international/issfs/international-students/f1status/f1info/j1healthinsurance"),

                makeURL("University of Illinois ,Urbana-Champaign (IL)", "http://www.uiuc.edu/"),
                makeURL("Click to View", "http://www.si.uiuc.edu/Default.aspx?tabid=64"),
                makeURL("Click to View", "http://www.si.uiuc.edu/Default.aspx?tabid=64"),

                makeURL("University of Illinois, Chicago (IL)", "http://www.uic.edu/"),
                makeURL("Click to View", "https://www.google.com/url?q=http://www.obfs.uillinois.edu/common/pages/DisplayFile.aspx%3FitemId%3D929186&amp;sa=U&amp;ei=V93jT-nTAcWNmQWZ6JCSCw&amp;ved=0CAgQFjAB&amp;client=internal-uds-cse&amp;usg=AFQjCNEUIscgKqfoSRPZ3LjDurIWAfOkKQ"),
                makeURL("Click to View", "https://www.google.com/url?q=http://www.uic.edu/depts/uicforum/docs/InsuranceRequirements.pdf&amp;sa=U&amp;ei=V93jT-nTAcWNmQWZ6JCSCw&amp;ved=0CAYQFjAA&amp;client=internal-uds-cse&amp;usg=AFQjCNGZX75ex7INqxY4-Fz52tLESfQhpw"),

                makeURL("University of Iowa (IA)", "http://www.uiowa.edu/"),
                makeURL("Click to View", "http://www.uiowa.edu/admissions/undergrad/international/exempt-guidelines.htm"),
                makeURL("Click to View", "http://international.uiowa.edu/international-scholars/health-insurance-requirements"),

                makeURL("University of Kansas (KS)", "http://www.ku.edu/"),
                makeURL("Click to View", "http://www.iss.ku.edu/insurance/index.shtml"),
                makeURL("Click to View", "http://www.iss.ku.edu/pdf/insurance/insurance-waiver-sum12.pdf"),

                makeURL("University of Kentucky (KY)", "http://www.uky.edu/"),
                makeURL("Click to View", "https://www.academichealthplans.com/enroll_waive/index.php5?school_id=136"),
                makeURL("Click to View", "https://www.academichealthplans.com/enroll_waive/index.php5?school_id=136"),

                makeURL("University of Lousiana - Lafayette (LA)", "http://www.ull.edu/"),
                "",
                "",

                makeURL("University of Louisville (KY)", "http://www.louisville.edu"),
                makeURL("Click to View", "http://louisville.edu/campushealth/forms/international%20insurance%20waiver%20Description.pdf"),
                makeURL("Click to View", "http://louisville.edu/internationalcenter/iss/forms-and-documents/J-1DS2019a.pdf"),

                makeURL("University of Maine - Orono (ME)", "http://www.umaine.edu/"),
                makeURL("Click to View", "http://umaine.edu/international/files/2010/07/Insurance-Waiver-Spring-2012-2.pdf"),
                makeURL("Click to View", "https://www.google.com/url?q=http://umaine.edu/international/files/2009/08/Exchange-Visitor-J-1-Application-Form-3-28-12.pdf&amp;sa=U&amp;ei=WeHjT5P7BKibmQX0seWXCw&amp;ved=0CAcQFjAB&amp;client=internal-uds-cse&amp;usg=AFQjCNGd2nktXg2gXkY6bVRIKeOBB2mINg"),

                makeURL("University of Maryland - College Park (MD)", "http://www.umcp.umd.edu/"),
                makeURL("Click to View", "https://studentcenter.uhcsr.com/umd/?type=waiver"),
                makeURL("Click to View", "https://studentcenter.uhcsr.com/umd/?type=waiver"),

                makeURL("University of Massachusetts - Amherst (MA)", "http://www.umass.edu/"),
                makeURL("Click to View", "http://www.umass.edu/uhs/insurance/ship/"),
                makeURL("Click to View", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/"),

                makeURL("University of Massachusetts - Lowell (MA)", "http://www.uml.edu/"),
                "",
                makeURL("Click to View", "http://www.uml.edu/ISSO/Employment/j1-training.aspx"),

                makeURL("University of Miami (FL)", "http://www.miami.edu/"),
                makeURL("Click to View", "http://www.miami.edu/sa/index.php/student_health_center/insurance_information/"),
                makeURL("Click to View", "http://www.miami.edu/sa/index.php/student_life/student_services/isss/current_international_students/j-1_visa/health_insurance_requirement/"),

                makeURL("University of Michigan - Ann Arbor (MI)", "http://www.umich.edu/"),
                makeURL("Click to View", "http://internationalcenter.umich.edu/healthins/waiver.html#standards"),
                makeURL("Click to View", "http://internationalcenter.umich.edu/healthins/requirements.html"),

                makeURL("University of Minnesota - Twin Cities (MN)", "http://www.umn.edu/"),
                "",
                makeURL("Click to View", "http://www.isss.umn.edu/Departments/InsuranceRJlet.pdf"),

                makeURL("University of Mississippi (MS)", "http://www.olemiss.edu/"),
                makeURL("Click to View", "http://www.olemiss.edu/gradschool/student_health_insurance.html"),
                makeURL("Click to View", "http://www.international.olemiss.edu/healthinsurancenewly.html"),

                makeURL("University of Missouri - Columbia (MO)", "http://www.missouri.edu/"),
                "",
                makeURL("Click to View", "http://international.missouri.edu/come-to-mu/faculty-staff/j1-scholars/insurance.php"),

                makeURL("University of Nebraska - Lincoln (NE)", "http://www.unl.edu/"),
                makeURL("Click to View", "http://health.unl.edu/billing/insurancewaiverpolicy/"),
                makeURL("Click to View", "http://www.unl.edu/iaffairs/iss/forms/J-1%20Scholar%20Extension%20Form.pdf"),

                makeURL("University of New Hampshire (NH)", "http://www.unh.edu/"),
                makeURL("Click to View", "http://www.unh.edu/health-services/shbp/"),
                makeURL("Click to View", "http://unh.edu/oiss/department-state-mandatory-j-1-insurance-regulations"),

                makeURL("University of New Mexico (NM)", "http://www.unm.edu/"),
                makeURL("Click to View", "http://www.unm.edu/oips/health_information.html"),
                makeURL("Click to View", "http://www.unm.edu/oips/health_information_scholars.html"),

                makeURL("University of North Carolina - Chapel Hill (NC)", "http://www.unc.edu/"),
                "",
                makeURL("Click to View", "http://oisss.unc.edu/academic_staff/j/j_insurance.pdf"),

                makeURL("University of Notre Dame (IN)", "http://www.nd.edu/"),
                makeURL("Click to View", "http://uhs.nd.edu/insurance-billing/"),
                makeURL("Click to View", "https://hr.nd.edu/assets/20192/j_1_visa.pdf"),

                makeURL("University of Oklahoma (OK)", "http://www.ou.edu/"),
                makeURL("Click to View", "http://hr.ou.edu/studenthealth/StudentHealthWaiver.asp"),
                makeURL("Click to View", "http://hr.ou.edu/%5C/ifss/documents/J-1MedicalHealthInsuranceRequirement.pdf"),

                makeURL("University of Oregon (OR)", "http://www.uoregon.edu/"),
                makeURL("Click to View", "http://www.google.com/url?q=https://healthcenter.uoregon.edu/Portals/0/fall2012-intl-waiver-requirements.doc&amp;sa=U&amp;ei=n2fLT_TqMeXYigewveS3Bg&amp;ved=0CBEQFjAG&amp;client=internal-uds-cse&amp;usg=AFQjCNHjtiSLKWN1y3FxZr2pQkoTuCGpPA"),
                makeURL("Click to View", "http://www.google.com/url?q=http://international.uoregon.edu/index.php/component/docman/doc_download/21-statement-of-compliance-with-insurance&amp;sa=U&amp;ei=hmbLT8XIOMe7iAeM-d3KBg&amp;ved=0CAkQFjAC&amp;client=internal-uds-cse&amp;usg=AFQjCNEJxniji9kFkgpJRkB5X4HIkkS2yA"),

                makeURL("University of Pennsylvania (PA)", "http://www.upenn.edu/"),
                makeURL("Click to View", "http://www.vpul.upenn.edu/shs/insurance.php"),
                makeURL("Click to View", "http://www.upenn.edu/oip/isss/j1/scholar"),

                makeURL("University of Pittsburgh (PA)", "http://www.pitt.edu/"),
                makeURL("Click to View", "http://www.ois.pitt.edu/immigration-related-stuff/health-insurance/#student"),
                makeURL("Click to View", "http://www.ois.pitt.edu/immigration-related-stuff/health-insurance/#nonstudent"),

                makeURL("University of Rhode Island (RI)", "http://www.uri.edu/"),
                makeURL("Click to View", "http://www.uri.edu/businessservices/pdfs/Cert%20of%20Ins_Standard%20Requirements.pdf"),
                makeURL("Click to View", "http://www.uri.edu/iss/PDF/j%20insurance%20info.pdf"),

                makeURL("University of Rochester (NY)", "http://www.rochester.edu/"),
                makeURL("Click to View", "http://www.rochester.edu/uhs/main/InsCriteria2012.pdf"),
                makeURL("Click to View", "http://www.iso.rochester.edu/employment/scholars/insurance.html"),

                makeURL("University of South Carolina - Columbia (SC)", "http://www.sc.edu/"),
                makeURL("Click to View", "http://www.sa.sc.edu/shs/billing/insurance/"),
                makeURL("Click to View", "http://iss.sc.edu/index.php?option=com_docman&amp;task=doc_view&amp;gid=493&amp;Itemid="),

                makeURL("University of Southern California (CA)", "http://www.usc.edu/"),
                makeURL("Click to View", "http://www.usc.edu/student-affairs/Health_Center/insurance/waiver.information.shtml#criteria"),
                makeURL("Click to View", "http://sait.usc.edu/ois/j1-scholars/scholar-resources/insurance.aspx"),

                makeURL("University of South Florida (FL)", "http://www.usf.edu/"),
                makeURL("Click to View", "http://www.shs.usf.edu/insurance.aspx"),
                makeURL("Click to View", "http://global.usf.edu/is/downloads/J1_DS2019.pdf"),

                makeURL("University of Tennessee - Knoxville (TN)", "http://www.utk.edu/"),
                makeURL("Click to View", "http://studenthealth.utk.edu/files/intl_student_insurance.pdf"),
                makeURL("Click to View", "http://international.utk.edu/files/2011/07/J-1-Health-Insurance-Regulations-and-Procedures.pdf"),

                makeURL("University of Texas - Austin (TX)", "http://www.utexas.edu/"),
                makeURL("Click to View", "http://world.utexas.edu/forms/isss/PVT_Waiver.pdf"),
                makeURL("Click to View", "http://world.utexas.edu/isss/insurance/vs-overview"),

                makeURL("University of Texas - Arlington (TX)", "http://www.uta.edu/"),
                makeURL("Click to View", "http://www.uta.edu/oie/forms/HealthInsuranceWaiver.php"),
                "",

                makeURL("University of Utah (UT)", "http://www.utah.edu/"),
                makeURL("Click to View", "http://studenthealth.utah.edu/pdfs/INTERNATIONALSTUDENTFrontpageformfield.pdf"),
                makeURL("Click to View", "http://studenthealth.utah.edu/pdfs/INTERNATIONALSTUDENTFrontpageformfield.pdf"),

                makeURL("University of Vermont (VT)", "http://www.uvm.edu/"),
                makeURL("Click to View", "http://www.uvm.edu/~CHWB/insurance/?Page=mandatory.html"),
                "",

                makeURL("University of Virginia (VA)", "http://www.virginia.edu/"),
                makeURL("Click to View", "http://www.virginia.edu/studenthealth/insurance/HardWaiver1011.html"),
                makeURL("Click to View", "http://www.virginia.edu/iso/issp/NewWindows/HealthInsScholarExchange.html"),

                makeURL("University of Washington", "http://www.washington.edu/"),
                makeURL("Click to View", "http://iss.washington.edu/health-insurance"),
                makeURL("Click to View", "http://unh.edu/oiss/department-state-mandatory-j-1-insurance-regulations"),

                makeURL("University of Wisconsin - Madison (WI)", "http://www.wisc.edu/"),
                makeURL("Click to View", "http://www.uhs.wisc.edu/ship/documents/ship-waiver.pdf"),
                makeURL("Click to View", "http://www.uhs.wisc.edu/ship/documents/ship-waiver.pdf"),

                makeURL("Utah State University (UT)", "http://www.usu.edu/"),
                makeURL("Click to View", "http://www.usu.edu/oiss/htm/current-students/insurance"),
                makeURL("Click to View", "http://www.usu.edu/oiss/htm/current-students/insurance"),

                makeURL("Vanderbilt University (TN)", "http://www.vanderbilt.edu/"),
                makeURL("Click to View", "http://www.vanderbilt.edu/isss/wp-content/uploads/HealthInsWaiverRequest.pdf"),
                makeURL("Click to View", "http://www.vanderbilt.edu/isss/financial-statements/j-1-student-intern/j-1-student-intern-orientation/"),

                makeURL("Virginia Commonwealth University (VA)", "http://www.vcu.edu/"),
                makeURL("Click to View", "http://www.global.vcu.edu/students/connections/started/insurance.html"),
                makeURL("Click to View", "http://www.global.vcu.edu/pdf/immigration/j1/J-1_Health_Insurance_Requirements.pdf"),

                makeURL("Virginia Tech (VA)", "http://www.vt.edu/"),
                makeURL("Click to View", "http://graduateschool.vt.edu/igss/application_prearrival/insurance.html"),
                makeURL("Click to View", "http://www.oired.vt.edu/iss/jvisa/insurance.html"),

                makeURL("Washington State University", "http://www.wsu.edu/"),
                makeURL("Click to View", "http://hws.wsu.edu/Content/Files/angie/spring%202012%20international%20student%20waiver.pdf"),
                makeURL("Click to View", "http://ip.wsu.edu/oiss/students/J-1-student-interns/J-1-health-insurance-info-compliance-statement.pdf"),

                makeURL("Washington University in St. Louis (MO)", "http://www.wustl.edu/"),
                "",
                makeURL("Click to View", "http://oisshome.wustl.edu/scholars/J1EV/J1HealthInsurance.pdf"),

                makeURL("Wayne State University (MI)", "http://www.wayne.edu/"),
                makeURL("Click to View", "http://www.oiss.wayne.edu/health-insurance/health-insurance.php#scholars"),
                makeURL("Click to View", "http://www.oiss.wayne.edu/health-insurance/health-insurance.php#student"),

                makeURL("West Virginia University (WV)", "http://www.wvu.edu/"),
                makeURL("Click to View", "http://oiss.wvu.edu/students/current_students/health_insurance_requirements_for_all_international_students"),
                makeURL("Click to View", "http://oiss.wvu.edu/scholars/j1_scholars/immigration_requirements_for_j_1_scholars/insurance_requirements_for_j_1_scholars"),

                makeURL("Yale University (CT)", "http://www.yale.edu/"),
                "",
                makeURL("Click to View", "http://www.yale.edu/oiss/immigration/common/j1students/health.html"),

                ]));
    endRow();
    endSection();


    // International Student
    startSection("pivot-international-student", "International Student");

    startRow();
    writeText("Taian International Health Insurance provides International Student Insurance for US visa students (F1 visa, J1 visa, and M1 visa). Taian Student Insurance Plan A and Plan B meet most school student insurance standards and are more affordable.");
    endRow();
   
    startRow();
    writeText("Our highlighted plans:");
    endRow();

    startRow();
    document.write(makeTable(3,
            [
            // Column headers:
            "TaiAn International Students",
            makeRawURL("Plan A (Student Health Advantage)", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699"),
            makeRawURL("Plan B (Standard) (Patriot Exchange Program)", "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),

            // Rest of the table:
            // Row 2
            "Plan Type", "Designed specifically for international students (F1,F2,J1,J2). Renewable up to 5 years if 3 months or more are purchased. For those who have been in the US for less than 6 months.", "Designed specifically for international students (F1,F2,J1,J2). Renewable up to 4 years if 3 months or more are purchased. No limitation for how long you have been in the US.",

            // Row 3
            "Maximum Limit", "$500,000 lifetime maximum, $300,000 per illness/injury", "$5,000,000 lifetime. Options $50,000, $250,000 or $500,000 per illness/injury",



            "Deductible", "$100 per illness/injury, $5 co-pay per visit in Student Health Center.", "$100 per illness/injury, $5 co-pay per visit in Student Health Center.", 
            "Coinsurance", "No coinsurance in PPO", "No coinsurance in PPO", 
            "Hospital Room & Board", "Average semi-private room", "Average semi-private room", 
            "Intensive Care", "URC(Usual Reasonable and Customary)", "URC(Usual Reasonable and Customary)", 
            "Maternity", "URC", "N/A", 
            "Mental Health", "In-patient URC to $10,000, out-patient $50/day to $500", "N/A", 
            "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", 
            "Prescription Drugs", "In-patient URC, out-patient 50%", "URC", 
            "Accident Dental", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350", 
            "Accidental Death & Dismemberment", "$25,000", "$25,000", 
            "Medical Evacuation", "$500,000", "$50,000", 
            "Repatriation of remains", "$50,000", "$25,000", 
            "Pre-existing conditions", "After 12 months of continuous coverage", "After 12 months of continuous coverage",

            // Table within a table
            "Cost Per Month (Non-US Citizens)",
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 19", "$72",   "$386",   "$82",
                    "19-23",   "$95",   "$386",   "$82",
                    "24-30",   "$110",  "$426",   "$82",
                    "31-40",   "$197",  "$567",   "$82",
                    "41-50",   "$322",  "$586",   "$82",
                    "51-64",   "$430",  "$567",   "$82",
                    ]), 

            loc("$50,000 per illness/injury") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$48.62","$48.62",  "$48.62",
                    "25-49",   "$63.37","$63.37",  "$48.62",
                    "50-64",   "$135.70","$135.70","$48.62",
                    ]) +

            loc("$250,000 per illness/injury") +         
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$60.36","$60.36",  "$60.36",
                    "25-49",   "$78.59","$78.59",  "$60.36",
                    "50-64",   "$168.27","$168.27","$60.36",
                    ]),         
            "", 
            makeBuyURL(loc("Buy Plan A") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699"),
            makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Patriot Exchange Program - Standard"), "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),

            ])
            );
    endRow();
    
    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("More plan details:");
    writeText("");
    document.write(makeTable(2, [
                "Plan", "Student Health Advantage more benefits",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "Routine Nursery Care: $750 maximum per period of coverage",
                        "Emergency Room: Injury: URC; Illness resulting in hospitalization: URC; Illness without hospitalization: Subject to addtional $250 deductible",
                        "Physical Therapy: URC -limit once per day",
                        "Local Ambulance: Per injury up to $350, Per illness only if admitted in-patient up to $350",
                        "Dental: Injury due to covered accident $500; Sudden & unexpected pain $350",
                        "Intercollegiate/Interscholastic/intramural or club sports: $5,000 per injury/illness medical expenses only",
                        "Incidental home country coverage: up to cumulative two weeks",
                        "Terrorism coverage: up to 50,000 lifetime maximum",
                        "Dependents can only purchase when the student purchases",
                        ]),


                "Full Brochure", makeURL("Full Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1938&a=80000699"),
                "", makeBuyURL("Buy Student Health Advantage", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699"),


                ]));

    endRow();

    startRow();
    writeText("");
    document.write(makeTable(2, [
                "Plan", "More on Patriot Exchange",

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                        "F2/J2 can buy Patriot Exchange alone (if F1/J1 buys schools plan) or buy with F1/J1",                        
                        "Patriot Exchange Group plan available for groups of 2 or more",
                        "Patriot Exchange Basic Plan available at a lower cost (may not meet your visa requirements - ask us!)",
                        "Other available options include: travel protection for baggage and valuables, legal assistance, personal liability coverage, adventure sports coverage",                       
                        ]),

                "Full Brochures", 
                makeBulletedListWithTitle("", [
                        makeURL("Patriot Exchange Brochure", 
                        "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1932&a=80000699"),

                        makeURL("Patriot Exchange Group Brochure", 
                        "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1905&a=80000699"),
                        ]),

                "Apply Now", 
                makeBulletedListWithTitle("", [
                        makeBuyURL("Buy Plan B (Patriot Exchange Program)", "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),
                        makeBuyURL("Buy Plan B Group (Patriot Exchange Group)", "https://purchase.imglobal.com/quote/patriot_group_exchange?imgac=80000699"),
                        ]),
               ]));

    endRow();

    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("We have native English and Chinese speakers to answer all of your questions.");
    endRow();

    startRow();
    writeText(makePivotURL("pivot-school-waiver", "Check your school waiver requirements.") + " " + loc("Contact us to ensure a plan meets your requirements."));
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

    startRow();
    writeText("Our highlighted example plans:");
    endRow();

    startRow();
    document.write(makeTable(4,
            [
            // Column headers:
            "TaiAn Global Medical",
            makeRawURL("Global Medical (Silver Plan) $250 deductible", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
            makeRawURL("Global Medical (Gold Plan) $500 deductible", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
            makeRawURL("Global Medical (Platinum Plan) $1000 deductible", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),


		    "Individual Deductible", "$250, $500, $1,000, $2,500, $5,000, $10,000", "$250, $500, $1,000, $2,500, $5,000, $10,000", "$100, $250, $500, $1,000, $2,500, $5,000, $10,000",	
            "Family Deductible", "3 times the individual", "3 times the individual", "2 times the individual", 
            "Lifetime Max limit", "$5,000,000 per individual",  "$5,000,000 per individual", "$8,000,000 per individual", 
            "Treatment inside the U.S.", "In-PPO: deductible 50% waived (up to $2500). No coinsurance.<br />Non-PPO: 20% of next $5000 expenses after deductible", "In-PPO: deductible 50% waived (up to $2500). No coinsurance.<br />Non-PPO: 20% of next $5000 expenses after deductible", "In-PPO: deductible 50% waived (up to $2500). No coinsurance<br />Non-PPO: 10% of next $5000 expenses after deductible",
            "Treatment outside the U.S.", "Subject to deductible. No coinsurance", "Subject to deductible. No coinsurance", "Subject to deductible. No coinsurance",
            "Intensive care unit", "$1,500/day, 180 day /event", "URC", "URC",
            "Hospitalization/room & board", "In U.S. average semi-private room rate. Outside of U.S. URC of private room rate (not exceed 150% semi-private). All subject to $600/day, 240 day max", "In U.S. average semi-private room rate. Outside of U.S. URC of private room rate (not exceed 150% semi-private).", "Private room rate",
            "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
            "Local Ambulance", "$1500/event - not subject to deductible or coinsurance", "URC", "URC",
            "Child Wellness (under 18 y/o)", "3 visit/period, $70 max/period. Available after 12 months of coverage", "$200/period, not subject to deductible or coinsurance. Available after 12 months of coverage", "$400/period, not subject to deductible or coinsurance. Available after 6 months of coverage",
            "Adult Wellness", "NA", "$250/period, not subject to deductible or coinsurance.  Available for those at least 30 years old after 12 months of coverage", "$500/period, not subject to deductible or coinsurance. Available for those at least 18 years old after 6 months of coverage", 
            "Emergency Dental (accident)", "$1,000/period", "URC", "URC", 
            "Non-emergency Dental", "NA", "NA", "$750/year", 
            "Vision", "NA", "NA", "Exams-up to $100. Materials-up to $150 per 24 months", 
            "Surgery", "URC", "URC", "URC", 
            "Emergency Evacuation", "$50,000 per period, not subject to deductible or coinsurance", "Up to the maximum limit, not subject to deductible or coinsurance", "Up to the maximum limit, not subject to deductible or coinsurance", 
            "Repatriation of remains", "$25,000 per insured, not subject to deductible or coinsurance", "$25,000 per insured, not subject to deductible or coinsurance", "$50,000 per insured, not subject to deductible or coinsurance", 
            "Mental/Nervous", "Out-patient only, after 12 month of coverage", "$10,000 per year - $50,000 max, after 12 month of coverage", "$50,000 max, after 12 month of coverage", 
            "Pre-existing conditions", "May have limited coverage after 24 months or be excluded at time of underwriting", "May have limited coverage after 24 months or be excluded at time of underwriting", "May be covered same as any illness or excluded at time of underwriting",
            "Maternity", "Optional Rider (cost $2500 per year) - $50,000 lifetime max. Max of $5000 for normal delivery, $7500 for C-section. $200 child wellness for first 12 month. new born care & congenital disorders max of $250,000 for the first 31 days (benefits reduced by 50% for births that occur in the 11th or 12th month of coverage)", "Optional Rider (cost $2500 per year) - $50,000 lifetime max. Max of $5000 for normal delivery, $7500 for C-section. $200 child wellness for first 12 month. new born care & congenital disorders max of $250,000 for the first 31 days (benefits reduced by 50% for births that occur in the 11th or 12th month of coverage)", "Maternity is covered same as any illness for any birth that occurs after 10 months of coverage- $1000 additional deductible, $50,000 lifetime max. $200 child wellness for the first 12 months. new born care & congenital disorders max of $250,000 for the first 31 days",

            "Monthly Rate",
            makeTable(3, [
                    "Age", "Male", "Female",
                    "18", "$60",    "$60",
                    "25", "$63",    "$85",
                    "30", "$71",    "$94",
                    "35", "$79",    "$111",
                    "40", "$100",   "$122",
                    "45", "$112",   "$135",
                    "50", "$136",   "$150",
                    "55", "$165",   "$165",
                    "60", "$242",   "$228",
                    ]),
            makeTable(3, [
                    "Age", "Male", "Female",
                    "18", "$71",    "$71",
                    "25", "$73",    "$112",
                    "30", "$77",    "$119",
                    "35", "$79",    "$124",
                    "40", "$110",   "$143",
                    "45", "$127",   "$155",
                    "50", "$149",   "$163",
                    "55", "$192",   "$186",
                    "60", "$283",   "$266",
                    ]),

             makeTable(3, [
                    "Age", "Male", "Female",
                    "18", "$195",    "$195",
                    "25", "$201",    "$354",
                    "30", "$220",    "$401",
                    "35", "$227",    "$437",
                    "40", "$279",   "$478",
                    "45", "$341",   "$381",
                    "50", "$772",   "$825",
                    "55", "$1006",   "$998",
                    "60", "$1197",   "$1120",
                    ]),



            "Brochure", makeURL("Complete Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1804&a=80000699"), makeURL("Complete Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1804&a=80000699"), makeURL("Complete Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1804&a=80000699"),

            "", 
            makeBuyURL("Buy Global Medical (Silver Plan)", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
            makeBuyURL("Buy Global Medical (Gold Plan)", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
            makeBuyURL("Buy Global Medical (Platinum Plan)", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
            ]));
    endRow();

    startRow();
    writeText("");
    writeText("More details on Global medical:");
    endRow();

    startRow();
    document.write(makeTable(2, [
                "Plan", makeRawURL("Global Medical Insurance", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),

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
                        "Optional riders: Global Term Life Insurance, Global Daily Indemnity, Maternity, Terrorism, Sports",
                        "Choose your area of coverage (worldwide or worldwide excluding the U.S., Canada, China, Hong Kong, Macau, Taiwan, Singapore and Japan)",
                        "Select from multiple deductible options",
                        "Family premium covers first two children between 14 days and 9 years at no additional cost for the first year",
                        "Choose from several payment modes",
                        "Rates illustrated above are for annual premium, rates are higher for monthly payment",
                        "Multiple underwriting options to fit your needs",
                        "Freedom to seek treatment with hospital or doctor of your choice",
                        "Access to two extensive provider networks",
                        "Emergency Medical Evacuation and other evacuation benefits",
                        "Medical Concierge Program",
                        "Medical professionals to coordinate your care",
                        "24 hour access to information",
                        ]),

                "Who the plan is designed for",
                makeBulletedListWithTitle("", [
                        "Coverage for individuals or families living or working abroad",
                        "Contract employees living and working abroad",
                        "Seniors with dual residencies six months or longer outside the U.S.",
                        "Non-US citizens coming to the US to have a baby.  For maternity coverage you must purchase before becoming pregnant.",
                        ]),

                "Which Plan is best for you?",
                makeBulletedListWithTitle("", [
                        "Silver plan is most economical",
                        "Gold Plan is the best value",
                        "Platinum is best for those wanting the best coverage or considering having a baby",
                        ]),

                "", makeBuyURL("Buy Global Medical Insurance", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),
                ])
                );
    endRow();

    writeDontSeeWhatYouNeedRow();

    endSection();

    // Travel Insurance
    startSection("pivot-travel-insurance", "Travel Insurance");

    startRow();
    writeText("Taian Travel Insurance is designed for anyone (U.S. and non-U.S. citizens) traveling out of their home country, regardless of visa requirements.  Cost starts at about $1/day.  Purchase 5 days - 1 year, and renewable up to 2 years if 3 months are purchased initially.");
    endRow();

    startRow();
    document.write(makeTableWithStyle("invisibleTableNormalText", 3, [
                makeSubsectionURL("travel-subsections", "patriot-travel", "Patriot Travel Medical Insurance"),
                makeSubsectionURL("travel-subsections", "patriot-platinum", "Patriot Platinum Travel Medical Insurance"),
                makeSubsectionURL("travel-subsections", "trip-travel", "TRIP Insurance"),

                makeBulletedListWithTitle("", [
                        "Medical coverage for most international travelers",
                        "Plan designs for U.S. citizens and non-U.S. citizens",
                        ]),

                makeBulletedListWithTitle("", [
                        "Similar to Patriot Travel but more coverage",
                        "Great for Ages 70 and over",
                        ]),

                makeBulletedListWithTitle("", [
                        "Coverage to protect your travel cost and basic emergency medical coverage",
                        ]),
                ]));
    endRow();

    startSubsections("travel-subsections");

    startSubsection("patriot-travel");

    startRow();

    writeText("Sample rates and benefits for Patriot Travel Medical Insurance:");
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
                "Prescription Drugs", "Up to the Maximum", "Up to the Maximum",
                "Emergency Room", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization", "URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization",
                "Local Ambulance", "Up to the Maximum", "Up to the Maximum",
                "Accidental Dental Injury", "Up to the Maximum", "Up to the Maximum",
                "Sport & Activities Coverage", "Up to the Maximum for basic sports", "Up to the Maximum for basic sports",
                "Trip Interruption", "Up to $5,000", "Up to $5,000", 
                "Accidental Death & Dismemberment", "$25,000 principal sum", "$25,000 principal sum", 
                "Emergency Medical Evacuation", "$500,000", "$500,000", 
                "Repatriation of remains", "$50,000", "$50,000", 
                "Pre-existing conditions", "Not covered", "Limited coverage for sudden and unexpected recurrence",

                "Monthly rate for $50,000 maximum and $250 deductible ($10,000 max for 80+ age) - minimum purchase 5 days",
                makeTable(2, [
                    "Age", "Rate",
                    "dependent child", "$35.00",
                    "&lt; 30", "$39.00",
                    "30-39", "$52.00",
                    "40-49", "$78.00",
                    "50-59", "$113.00",
                    "60-64", "$142.00",
                    "65-69", "$162.00",
                    "70-79", "$219.00",
                    "80+",   "$381.00",
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
                    "80+",   "$340.00",
                    ]),

                "Monthly rate for $50,000 maximum and $1000 deductible ($10,000 max for 80+ age) - minimum purchase 5 days",
                makeTable(2, [
                    "Age", "Rate",
                    "dependent child", "$28.00",
                    "&lt; 30", "$31.20",
                    "30-39", "$41.60",
                    "40-49", "$62.40",
                    "50-59", "$90.40",
                    "60-64", "$113.60",
                    "65-69", "$129.60",
                    "70-79", "$175.20",
                    "80+",   "$304.80",
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
                    "80+",   "$272.00",
                    ]),

                "",
                makeBuyURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                makeBuyURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),

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
    writeText("Patriot Platinum Travel Medical Insurance is a similar plan with more coverage (up to $8,000,000):");
    document.write(makeTable(2, [
                "", makeRawURL("Patriot Platinum Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot_platinum?imgac=80000699"),

                "Changes from Patriot Travel Medical Insurance",
                makeBulletedListWithTitle("", [
                    "Short-term travel medical coverage (5 days to 3 years)",
                    "Maximum Limits from $1,000,000 to $8,000,000",
                    "Deductible options from $0 to $25,000",
                    "Renewable up to 36 months if three months or more are purchased",
                    "Ages 70-79 have $100,000 coverage (with $1,000 deductible the cost is $355.20 per month)",
                    "Ages 80 and over have $20,000 coverage (with $1,000 deductible the cost is $515.20 per month)",
                    ]),

                "Shared features",
                makeBulletedListWithTitle("", [
                    "Coverage for individuals and dependents",
                    "Two plan designs for U.S. citizens and non-U.S. citizens traveling outside their home country",
                    "Available in daily and monthly rates",
                    "Freedom to seek treatment with hospital or doctor of your choice",
                    "Trip cancellation, travel delay and baggage delay benefits available",
                    "Universal Rx pharmacy discount savings",
                    "24 hour secure access from anywhere in the world to manage your account at any time",
                    ]),

                "Patriot Platinum Brochure", makeURL("Patriot Platinum Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1964&a=80000699"),

                "", makeBuyURL("Buy Patriot Platinum Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot_platinum?imgac=80000699"),
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
                    "$100,000 Common carrier accidental death and dismemberment",
                    ]),

                "Sample Cost", "A 35 year old spends $5000 on a trip, insurance costs $200. A 25 year old spends $1500 on a trip, insurance costs $60.",

                "Brochure", makeURL("Patriot Trip Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1871&a=80000699"),
                "", makeBuyURL("Buy Patriot T.R.I.P.® Travel", "https://www.imglobal.com/applications/pti/index.cfm?imgac=80000699&show=PTI"),
                ]));

    writeText("");
    writeText("More Options:");
    document.write(makeTable(2, [
                "Plan", "",
                
                makeURL("Patriot T.R.I.P.® Elite", "https://www.imglobal.com/applications/pte/index.cfm?imgac=80000699&show=PTEAI,PTEII"),
                makeBulletedListWithTitle("", [
                    "Offers more coverage than Patriot T.R.I.P. Travel Insurance.",
                    makeURL("Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1879&a=80000699"),
                    makeBuyURL("Buy", "https://www.imglobal.com/applications/pte/index.cfm?imgac=80000699&show=PTEAI,PTEII"),
                    ]),

                makeURL("Patriot T.R.I.P.® Student", "https://www.imglobal.com/applications/pts/index.cfm?imgac=80000699&show=PTS"),
                makeBulletedListWithTitle("", [
                    "Designed just for students and is more affordable than Patriot T.R.I.P. Travel Insurance.",
                    makeURL("Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1877&a=80000699"),
                    makeBuyURL("Buy", "https://www.imglobal.com/applications/pts/index.cfm?imgac=80000699&show=PTS"),
                    ]),
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
    writeCellWithText(makeBold("Most medical insurance coverage will not provide benefits in a different country.")+ " "+ loc("If you are a US citizen, your passport says, \"Health Insurance: Medical costs abroad can be extremely expensive. Does your insurance apply overseas, including medical evacuation, payment to the overseas hospital or doctor, or reimbursement to you later?.....Medicare/Medicaid does not cover healthcare costs outside the US.\""));
    writeCellWithText(makeBold("Medical Evacuation is an important benefit.") + " " + loc("Maybe you are visiting a part of the world with a lesser developed healthcare system. You planned ahead and had your travel vaccines before you left, but what if you get injured on your trip? You might need to be evacuated to an adequate hospital. A medical evacuation benefit will provide what you need."));
    writeCellWithText(makeBold("Trip cancellation, lost baggage, travel delay benefits.")+ " " + loc("You spent a year planning for and saving for your trip. Now, you arrive at the airport for a connecting flight and the flight is cancelled. You don’t need a health insurance benefit, but you sure could use a travel insurance benefit. Help cover your costs for unforeseen travel problems with the right travel insurance coverage for you."));
    endRow();

    startRow();
    writeText("");
    document.write(makeBulletedListWithTitle("Travel Tips", [
                loc("Visit") + " " + makeURL("CDC (Center for Disease Control)", "http://www.cdc.gov/") + " " + loc(" to learn about travel vaccine recommendations. They provide an up to date list by country of which travel vaccinations are required or recommended. They also provide up to date health information by location. Did you know a vaccine booster for Polio is recommended for travel to some locations? Also, the vaccines for Hepatitis A and B are good for life – be safe once now and you are covered forever! Once you have your passport health care preparations are critical."),
                loc("Travel visa requirements depend on the country you are visiting. A US citizen might need a visa depending on where they are going. A visitor to the United States might need a visa depending on the nature of their visit. For details see the") + " " + makeURL("State Department website", "http://travel.state.gov/visa/visa_1750.html") + ".",
                ]));
    endRow();

    writeDontSeeWhatYouNeedRow();

    endSection();


    // Indiana Residents
    startSection("pivot-indiana-residents", "Indiana Residents");
    startRow();
    document.write(makeTableWithStyle("invisibleTable", 2, [
                makeImage("anthem.jpg"),
                "Comprehensive medical coverage for individuals and families (in the U.S. for 1 yr or longer) from Anthem Blue Cross.",
                ]));
    writeText("Some example plans:");
    endRow();

    startRow();
    startCell();
    writeLinesWithTitle("Core Share", [
            "Great for new college graduates",
            "Deductible $750 and higher",
            "The plan with the lowest premium rates",
            ]);
    endCell();

    startCell();
    writeLinesWithTitle("Premier Plus", [
            "Deductible $500 and higher",
            "20% coinsurance",
            "The plan with the most benefit",
            ]);
    endCell();

    startCell();
    writeLinesWithTitle("Smart Sense", [
            "Deductible $500 and higher",
            "30% coinsurance so premium cost is less than Premier Plus",
            ]);
    endCell();

    endRow();

    startRow();
    startCell();
    writeLinesWithTitle("Lumenos HSA", [
            "Deductible from $1,500 to 5,500 for single, $3,000 to 11,000 for family",
            "Tax advantaged saving account",
            ]);
    endCell();

    writeCellWithText(loc("Call or email us to learn more or browse online:") + " " + makeURL("Quote/Purchase Anthem Insurance", "https://pd.secure.anthem.com/AgentConnect/gen/link.htm?linkid=D7_i08ReAFF-O9lX3HcGT_120121774037399"));

    endRow();

    writeRowForUnitedHealthOne();

    endSection();

    // Texas Residents
    startSection("pivot-texas-residents", "Texas Residents");

    writeRowForUnitedHealthOne();

    endSection();

    // Life Insurance
    startSection("pivot-life-insurance", "Life Insurance");

    startRow();
    document.write(makeTableWithStyle("invisibleTable", 2, [
                makeImage("oneamerica.png"),
                "Delivering on our promise to provide peace of mind and financial security for clients has been the focus of American United Life Insurance Company® (AUL) a OneAmerica company, for more than 130 years. OneAmerica and its operating companies’ ratings have remained stable, providing peace of mind to our customers. A.M. Best rating A (Excellent) positive outlook The third-highest of 15 possible ratings, according to the release dated June 9, 2010. Standard & Poor’s rating AA- (Very Strong) stable outlook The fourth-highest of 21 possible ratings, according to the report dated August 3, 2010.",
                ]));
    endRow();


    startRow();
    writeText("");
    writeText(loc("Low Cost Term Life Insurance") + " - " + loc("Sample (most preferred) rates:"));
    document.write(makeTable(3, [
                "Term Life Insurance",
                "10 yr level $249,999",
                "20 yr level $249,999",

                "30 yrs old Male",
                "$142.50/yr",
                "$215.00/yr",

                "30 yrs old Female",
                "$127.50/yr",
                "$170.00/yr",

                "40 yrs old Male",
                "$175.00/yr",
                "$325.85/yr",

                "40 yrs old Female",
                "$167.50/yr",
                "$237.50/yr",
                ]));
    writeText("Call or email for a quote!");
    writeText("We also offer Whole Life Insurance and Annuities. Please call or email for a quote!");
    endRow();


    writeDontSeeWhatYouNeedRow();

    endSection();


    writeSectionsForApps();
}
