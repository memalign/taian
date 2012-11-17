
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

function makeStartPivotURLWithIsTopLevel(divID, isTopLevel) {
    return '<a href="#" onclick="showPivot(\''+divID+'\'); return false;"'+ (isTopLevel ? 'class="pivot-switch">' : '>');
}

function startPivotURL(divID) {
    document.write(makeStartPivotURLWithIsTopLevel(divID, false));
}

function endPivotURL() {
    document.write('</a>');
}

function makePivotURL(divID, title) {
    var urlCode = "";
    urlCode += makeStartPivotURLWithIsTopLevel(divID, false);
    urlCode += loc(title);
    urlCode += '</a>';
    return urlCode;
}

function writeTopLevelURL(divID, titleString) {
    document.write(makeStartPivotURLWithIsTopLevel(divID, true));
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
    writeText("Global Medical - International professional and family: Good for green card holder, H1B visa, TN1 visa, O visa and their dependents.");
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
    writeCellWithText("We are qualified insurance agents with over 20 years experience working with insurance companies.");
    writeCellWithText("We have native English and Chinese speakers to answer all of your questions.");
    writeCellWithText(makePivotURL("pivot-school-waiver", "Check your school waiver requirements.") + " " + loc("Contact us to ensure a plan meets your requirements."));
    endRow();

    startRow();
    writeCellWithText("This table illustrates two of our highlight plans. See other plans below.");
    writeCellWithText("As long as F1/J1 is full time student, F2/J2 can buy Plan B alone or buy with F1/J1");
    writeCellWithText("Other plans that cover more visa types:" + " " + makeURL("Global Medical", "https://purchase.imglobal.com/quote/Global_Medical?imgac=80000699") + " and " + makeURL("Patriot Travel", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"));
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
