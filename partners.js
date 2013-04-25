
function getPartnership(partner) {
    var defaultPartner = "taian";


    var partnerShips = {

        taian: {
                    windowTitle: "TaiAn International Health Insurance",
                    pageTitle: "TaiAn International Health Insurance",
                    logoImage: "longevity.gif",
                    logoHeight: "30",
                    logoWidth: "30",
                    contactInfo: ["Call: +1 (317) 318-8258 (Chinese)",
                                  "Call: +1 (317) 318-8259 (English)",
                                  "WeChat ID: wxid_taian_usa",
                                  "Skype: chris.lee136",
                                  "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>"
                                 ],
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-indiana-residents",
                            "pivot-texas-residents",
                            "pivot-life-insurance",
                            "pivot-partnerships"
                          ]
               },

        using: {
                    windowTitle: "Using Education Group Insurance",
                    pageTitle: "Using Health Insurance",
                    logoImage: "partnerLogos/using.gif",
                    logoHeight: "36",
                    logoWidth: "70",
                    contactInfo: ["电话: 626-532-7811, 626-264-0123",
                                  "传真: 626-254-0286",
                                  "Email: <a href=\"mailto:ushres123@gmail.com\">ushres123@gmail.com</a>"
                                 ],
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ]
              },

        mei: {
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ]
              },              

        iupui: {
                    windowTitle: "TaiAn Health Insurance for IUPUI",
                    pageTitle: "TaiAn Health Insurance for IUPUI",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ]
              },   

       jhmi: {
                    windowTitle: "TaiAn Health Insurance for JHMI",
                    pageTitle: "TaiAn Health Insurance for JHMI",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ]
              },  

       psu: {
                    windowTitle: "TaiAn Health Insurance for Pennsylvania State University",
                    pageTitle: "TaiAn Health Insurance for Pennsylvania State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ]
              },                

        usc: {
                    windowTitle: "TaiAn Health Insurance for University of Southern California",
                    pageTitle: "TaiAn Health Insurance for University of Southern California",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet USC J scholar standards. Exchange visitors (J visa) enrolled in under 6 credits have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to USC to waive the school plan.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("USC Scholar Requirements", "http://sait.usc.edu/ois/j1-scholars/scholar-resources/insurance.aspx"),
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow();
                    }
              },

        sta: {
                    windowTitle: "TaiAn Health Insurance for Stanford University",
                    pageTitle: "TaiAn Health Insurance for Stanford University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Stanford University J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Stanford to waive the school plan.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Stanford Scholar Requirements", "http://icenter.stanford.edu/quick_reference/healthinsurance.html#J1reqs"),
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow();
                    }
              },               

        uiuc: {
                    windowTitle: "TaiAn Health Insurance for University of Illinois Urbana Champaign",
                    pageTitle: "TaiAn Health Insurance for University of Illinois Urbana Champaign",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Insurance Plan A and Plan B meet UIUC scholar and student insurance standards.  Students are required to carry $200,000 per illness or injury.  J Scholars must meet the US department of State $50,000 minimum.");

                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Student Requirements", "http://www.si.uiuc.edu/Default.aspx?tabid=64"),
                                makeURL("US Department of State and UIUC Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow();
                    }
              },        

        nyu: {
                    windowTitle: "TaiAn Health Insurance for New York University",
                    pageTitle: "TaiAn Health Insurance for New York University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet NYU J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to NYU as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("NYU Scholar Requirements", "http://www.nyu.edu/global/international-immigration-services/faculty-and-scholars/inbound-to-nyc/pre-arrival/exchange-visitor/health-insurance-requirement.html"),                               
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow();
                    }
              },  

        purdue: {
                    windowTitle: "TaiAn Health Insurance for Purdue University",
                    pageTitle: "TaiAn Health Insurance for Purdue University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Purdue University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Purdue as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Purdue University Scholar Requirements", "http://www.iss.purdue.edu/Current/J1/HealthInsurance.cfm"),                               
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow();
                    }
              },  

        usdos: {
                    windowTitle: "TaiAn International Health Insurance",
                    pageTitle: "TaiAn International Health Insurance",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet your school J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [                               
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")                                
                                ]));
                        endRow();
                    }
              },                

        columbia: {
                    windowTitle: "TaiAn Health Insurance for Columbia University",
                    pageTitle: "TaiAn Health Insurance for Columbia University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Columbia J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Columbia as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Columbia Scholar Requirements", "http://www.columbia.edu/cu/isso/visa/scholar/J_health.html"),                               
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow(); 
                    }
              },      

        ucla: {
                    windowTitle: "TaiAn Health Insurance for UCLA",
                    pageTitle: "TaiAn Health Insurance for UCLA",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UCLA J scholar standards. Some scholars are required to have coverage of $100,000 per illness or injury and the waiver is approved by VSISP/Garnett-Powers. This requirement is met by Taian Scholar/Student Plan A or Plan B with $250,000 benefit per illness or injury.  Other scholars have the waiver approved at the Dashew Center for International Students and Scholars.  They are required to have coverage of $50,000 per illness or injury. This requirement is met by Taian Scholar/Student Plan B with $50,000 benefit per illness or injury. Each of these requirements meets the US Department of State standards. You can check your required coverage level at the link below.");
                        writeText("");
                         writeText("A few minutes after submitting an application, you will receive a confirmation letter of your coverage which you can send to UCLA to waive the school mandatory plan.");                       
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UCLA Scholar Requirements", "http://www.internationalcenter.ucla.edu/home/J1Visa/74/75/Overview#divHealth"),
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow();
                    }
              },      
              
        ucdav: {
                    windowTitle: "TaiAn Health Insurance for UC Davis",
                    pageTitle: "TaiAn Health Insurance for UC Davis",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ]
              },                  
              
        iu: {
                    windowTitle: "TaiAn Health Insurance for IU Bloomington",
                    pageTitle: "TaiAn Health Insurance for IU Bloomington",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Indiana University - Bloomington allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to IU Bloomington to waive the school plan.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("IU Bloomington Student Requirements", "http://ois.indiana.edu/newstudents/livingintheus/insurance/"),
                                makeURL("IU Bloomington Scholar Requirements", "http://ois.indiana.edu/scholars/status/med_insurance.php"),                               
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow();
                    }
              },                  

        utaustin: {
                    windowTitle: "TaiAn Health Insurance for UT Austin",
                    pageTitle: "TaiAn Health Insurance for UT Austin",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UT Austin enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Austin as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UT Austin Student Waiver", "http://world.utexas.edu/forms/isss/PVT_Waiver.pdf"), 
                                makeURL("UT Austin Scholar requirements", "http://world.utexas.edu/isss/insurance/vs-overview"),                                
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow();
                    }
              },                                
              
        univtemplate: {
                    windowTitle: "TaiAn Health Insurance for Univtemplate",
                    pageTitle: "TaiAn Health Insurance for Univtemplate",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Univtemplate allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to Univtemplate to waive the school plan.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("US Department of State Insurance Requirements for J visa", "http://j1visa.state.gov/sponsors/how-to-administer-a-program/")
                                ]));
                        endRow();
                    }                          
              },                  
              
        ucdavis: {
                    windowTitle: "TaiAn Health Insurance for UC Davis J Scholars",
                    pageTitle: "TaiAn Health Insurance for UC Davis J Scholars",
                    tabs: [
                            "pivot-international-scholar"
                          ],
                    internationalScholarContent: function () {
                        startRow();
                        writeText("Taian International Health Insurance provides International Scholar Insurance for US visa scholars (J visa). Taian Scholar Insurance Plan A and Plan B meet UC Davis scholar insurance standards and are more affordable.  UC Davis requires a minimum of $50,000.00 per illness or injury and our Plan B Standard Plan meets this requirement.");
                        endRow();
                    }
              },                            

        econnect: {
                    windowTitle: "TaiAn Financial Health Insurance for econnectionchina",
                    pageTitle: "TaiAn Financial Health Insurance for econnectionchina",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ]
              },              
              
        springivy: {
                    contactInfo: ["Call: 1-317-318-8258 (Chinese)",
                                  "Call: 1-317-318-8259 (English)",
                                  "WeChat ID: wxid_taian_usa",
                                  "Skype: chris.lee136",
                                  "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>"
                                 ],
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ]
              }
              
    };



    var partnerConfig = partnerShips[defaultPartner];

    var overrides = partnerShips[partner];
    if (!(typeof overrides === "undefined")) {
        for (var key in overrides) {
            partnerConfig[key] = overrides[key];
        }
    }

    return partnerConfig;
}
