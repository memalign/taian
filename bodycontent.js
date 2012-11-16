
function showPivot(pivotName) {
    var defaultTab = "pivot-home";
    if (pivotName.length == 0)
        pivotName = defaultTab;

    document.location.hash = '#' + langTag() + '-' + pivotName; 
    var toHide = document.getElementsByClassName("pivot ");
    for (var i = 0; i < toHide.length; i++) {
        toHide[i].style.display = "none";
    }
    var toShow = document.getElementById(pivotName);
    toShow.style.display = "block";
}

function startPivotURLWithIsTopLevel(divID, isTopLevel) {
    document.write('<a href="#" onclick="showPivot(\''+divID+'\'); return false;"'+ (isTopLevel ? 'class="pivot-switch">' : '>'));
}

function startPivotURL(divID) {
    startPivotURLWithIsTopLevel(divID, false);
}

function endPivotURL() {
    document.write('</a>');
}

function writeTopLevelURL(divID, titleString) {
    startPivotURLWithIsTopLevel(divID, true);
    document.write(loc(titleString));
    endPivotURL();
}

function startSection(divID, titleString) {
    document.write('<div id="'+divID+'" class="pivot " bi:type="pivot">');
    document.write('<h2 bi:titleflag="t1" bi:title="t1" class="heading">'+titleString+'</h2>');
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

function writeText(text) {
    document.write('<p>'+loc(text)+'</p>');
}

function writeCellWithText(text) {
    startCell();
    writeText(text);
    endCell();
}

function writeImage(filename) {
    document.write('<img src="'+filename+'"></img>');
}

function makeTable(numColumns, cells) {
    var tableCode = "";
    tableCode += '<div bi:type="highlight">';
    tableCode += '<table>';
    for (var i = 0; i < cells.length; ++i) {
        if ((i % numColumns) == 0) {
            if (i != 0) {
                tableCode += '</tr>';
                tableCode += '<tr>';
            } else {
                tableCode += '<tr class="tableHeader">';
            }
        }
        tableCode += '<td>';
        tableCode += loc(cells[i]);
        tableCode += '</td>';
    }
    tableCode += '</tr>';
    tableCode += '</table>';
    tableCode += '</div>';
    return tableCode;
}

function makeURL(title, url) {
    return '<a href="'+url+'" bi:cpid="workHighlight">'+loc(title)+'</a>';
}

function makeBulletedListWithTitle(title, list) {
    var listCode = '<h2>'+loc(title)+'</h2><ul class="styled-ul">';

    for (var i = 0; i < list.length; ++i) {
        listCode += '<li class="styled-li">'+loc(list[i])+"</li>";
    }
    
    listCode += "</ul>";
    return listCode;
}

function writeTabs() {
    document.write('<h2 bi:titleflag="t1" bi:title="t1">');
    writeTopLevelURL("pivot-home", "Home");
    writeTopLevelURL("pivot-international-student", "International Student");
    writeTopLevelURL("pivot-global-medical", "Global Medical");
    writeTopLevelURL("pivot-travel-insurance", "Travel Insurance");
    writeTopLevelURL("pivot-texas-indiana-residents", "Texas Residents");
    writeTopLevelURL("pivot-texas-indiana-residents", "Indiana Residents");
    writeTopLevelURL("pivot-life-insurance", "Life Insurance");
    document.write('</h2>');
}


function writeSections() {
    startSection("pivot-home", "");

    startRow();
    writeCellWithText("We are qualified insurance agents with over 20 years experience working with insurance companies.");
    writeCellWithText("We have native English and Chinese speakers to answer all of your questions.");
    writeCellWithText("Ask us about student coverage that meets your university insurance standards.");
    endRow();

    // Row 2
    startRow();

    startCell();
    startPivotURL("pivot-international-student");
    writeImage("international-student.jpg");
    writeText("International Student & Scholar (F1&J1 visa). Coverage meets most university standards. $59.85/month with $5,000,000 Maximum");
    endPivotURL();
    endCell();

    startCell();
    startPivotURL("pivot-global-medical");
    writeImage("global-medical.jpg");
    writeText("International professional and family: Good for green card holder, H1B visa, TN1 visa, O visa and their dependents.");
    endPivotURL();
    endCell();

    startCell();
    startPivotURL("pivot-travel-insurance");
    writeImage("traveler.jpg");
    writeText("Traveler's insurance: Business travel, family visiting, leisure travel. 5 days - 2 years, $39/month and up.");
    endPivotURL();
    endCell();


    endRow();

    endSection();


    // International Student
    startSection("pivot-international-student", "International Student");

    startRow();
    writeCellWithText("This table illustrates two of our highlight plans. See other plans below.");
    writeCellWithText("We are qualified insurance agents with over 20 years experience working with insurance companies.");
    writeCellWithText("We have native English and Chinese speakers to answer all of your questions.");
    endRow();

    startRow();
    writeText("Our highlight plans:");
    endRow();

    startRow();
    document.write(makeTable(3,
            [
            // Column headers:
            "TaiAn International Students",
            makeURL("Plan A (Student Health Advantage)", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699"),
            makeURL("Plan B (Standard) (Patriot Exchange Program)", "https://purchase.imglobal.com/quote/patriot_exchange?IMGAC=80000699"),

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
            "Emergency Room", "URC", "URC", 
            "Prescription Drugs", "In-patient URC, out-patient 50%", "URC", 
            "Accident Dental", "Injury $500, Sudden pain $350", "Injury $500, Sudden pain $350", 
            "Accidental Death & Dismemberment", "$25,000", "$25,000", 
            "Medical Evacuation", "$500,000", "$50,000", 
            "Repatriation of remains", "$50,000", "$25,000", 
            "Pre-existing conditions", "After 12 mos of continuous coverage", "After 12 mos of continuous coverage",

            // Table within a table
            "Cost Per Month",
            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 19", "$72",   "$386",   "$82",
                    "19-23",   "$95",   "$386",   "$82",
                    "24-34",   "$110",  "$426",   "$82",
                    ]), 

            makeTable(4, [
                    "Age",     "F1/J1", "Spouse", "Children",
                    "&lt; 25", "$48.62","$48.62",  "$48.62",
                    "25-49",   "$63.37","$63.37",  "$48.62",
                    "50-64",   "$135.70","$135.70","$48.62",
                    ]), 

            "", 
            makeURL("Buy Plan A (Student Health Advantage)", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699"),
            makeURL("Buy Plan B (Standard) (Patriot Exchange Program)", "https://purchase.imglobal.com/quote/patriot_exchange?IMGAC=80000699"),

            ])
            );
    endRow();
    
    startRow();
    writeText("");
    endRow();

    startRow();
    writeText("Other available plans:");
    document.write(makeTable(2, [
                "Plan", makeURL("Global Medical Insurance", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),

                "Plan Highlights", 
                makeBulletedListWithTitle("", [
                 "Flexible, comprehensive medical coverage",
                 "Coverage for individuals and families",
                 "Four unique plan designs - Silver, Gold, Gold Plus and Platinum",
                 "Optional riders: Global Term Life Insurance, Global Daily Indemnity, Maternity, Terrorism, Sports",
                 "Choose your area of coverage (worldwide or worldwide excluding the U.S., Canada, China, Hong Kong, Macau, Taiwan, Singapore and Japan)",
                 "Select from multiple deductible options",
                 "Family premium covers first two children between 14 days and 9 years at no additional cost for the first year",
                 "Choose from several payment modes",
                 "Multiple underwriting options to fit your needs",
                 "Freedom to choose your provider",
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
                        ]),

                "", makeURL("Buy Global Medical Insurance", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699"),


                ])
                );

    writeText("");
    document.write(makeTable(2, [
                "Plan", makeURL("Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),

                "Plan Highlights",
                makeBulletedListWithTitle("", [
                     "Short-term travel medical coverage",
                     "Coverage for individuals and dependents",
                     "Two plan designs - one for U.S. citizens and one for non-U.S. citizens traveling outside their home country",
                     "Maximum Limits from $50,000 to $2,000,000",
                     "Deductible options from $0 to $2,500",
                     "Available in daily and monthly rates",
                     "Renewable up to 24 months if three months or more are purchased",
                     "Freedom to seek treatment with hospital or doctor of your choice",
                     "Trip cancellation, travel delay and baggage delay benefits available",
                     "Universal Rx pharmacy discount savings",
                     "24 hour secure access from anywhere in the world to manage your account at any time",
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

                "Full Brochure", makeURL("Full Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1932&a=80000699"),
                "", makeURL("Buy Patriot Travel Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                "", makeURL("Buy Patriot Group Exchange Insurance", "https://purchase.imglobal.com/Quote/patriot_group_exchange/pre-quote?imgac=80000699"),

                ]));


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
                        "incidental home country coverage: up to cumulative two weeks",
                        "Terrorism coverage: up to 50,000 lifetime maximum",
                        ]),


                "Individual Rates (Non-U.S. Citizens)",
                makeTable(4, [
                    "Age",   "Student", "Spouse", "Dependent Child",
                    "&lt; 19", "$72",    "$386",     "$82",
                    "19-23",   "$95",    "$386",     "$82",
                    "24-30",  "$110",    "$426",     "$82",
                    "31-40",  "$197",    "$567",     "$82",
                    ]),

                "Full Brochure", makeURL("Full Brochure", "http://producer.imglobal.com/ProducerDocuments.ashx?documentId=1938&a=80000699"),
                "", makeURL("Buy Student Health Advantage", "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699"),


                ]));

    endRow();

    startRow();
    writeText("");
    document.write(makeBulletedListWithTitle("Don't see what you need?", [
                makeURL("Explore other choices on your own.", "https://producer.imglobal.com/international-insurance-plans.aspx?imgac=80000699"),
                makeURL("Email us: chris@taianfinancial.com", "mailto:chris@taianfinancial.com"),
                "Call us at 317-318-8258",
                "We have plans to meet many diverse needs:",
                "Adventure Travel",
                "Multi trip travel medical insurance",
                "Student coverage for non us citizens with a visa",
                "Student coverage for US citizens abroad",
                "Coverage for professionals living outside their home country",
                "Travel insurance plans for groups traveling together",
                "More – Just ask!",
                ]));
    endRow();

    endSection();
}
