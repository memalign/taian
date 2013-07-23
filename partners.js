
function getPartnership(partner) {
    var defaultPartner = "taian";


    var partnerShips = {

        taian: {
                    windowTitle: "TaiAn International Health Insurance",
                    pageTitle: "TaiAn International Health Insurance",
                    logoImage: "longevity.gif",
                    logoHeight: "30",
                    logoWidth: "30",
                    contactInfo: ["Call from US: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English)",
                                  "Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges)",
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
              
        lng: {
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ]
              },                 

        mdy: {
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
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("IUPUI allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to IUPUI to waive the school plan.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("IUPUI Student Requirements", "http://iservices.iupui.edu/health-insurance/students/"),
                                makeURL("IUPUI Scholar Requirements", "http://iservices.iupui.edu/health-insurance/scholars/")                               
                                ]));
                        endRow();
                    }                          
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
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet USC J scholar standards. Exchange visitors (J visa) enrolled in under 6 credits have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to USC to waive the school plan.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("USC Scholar Requirements", "http://sait.usc.edu/ois/j1-scholars/scholar-resources/insurance.aspx")
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
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Stanford University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500.  Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Stanford to waive the school plan.");
                        writeText("Enrolled students with F or J visa are required to have additional coverage (see link below). Taian Plan A meets these requirements.  Shortly after submitting an application you will receive confirmation of your coverage.  You will then need to submit a certification form to Stanford which we can help you with.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Stanford Scholar Requirements", "http://icenter.stanford.edu/quick_reference/healthinsurance.html#J1reqs"),
                                makeURL("Stanford Student Requirements", "http://www.stanford.edu/group/vaden/insurance/using_your_own.html"),
                                ]));
                        endRow();
                    }
              },               

         jhu: {
                    windowTitle: "TaiAn Health Insurance for Johns Hopkins University",
                    pageTitle: "TaiAn Health Insurance for Johns Hopkins University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Johns Hopkins University and Johns Hopkins Medical Institutions J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Johns Hopkins University or Johns Hopkins Medical Institutions as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Johns Hopkins University Scholar Requirements", "http://oisss.jhu.edu/Presentations/Understanding%20the%20J1%20Visa%20Program.pdf"),
                                makeURL("Johns Hopkins Medical Institutions Scholar Requirements", "http://www.hopkinsmedicine.org/intlsvcs/j1insurance.html")
                                ]));
                        endRow();
                    }
              },  

         uom: {
                    windowTitle: "TaiAn Health Insurance for University of Maryland",
                    pageTitle: "TaiAn Health Insurance for University of Maryland",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Maryland J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Maryland as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Maryland Scholar Requirements", "http://www.international.umd.edu/ies/2750")
                                ]));
                        endRow();
                    }
              }, 
              
         upitt: {
                    windowTitle: "TaiAn Health Insurance for University of Pittsburgh",
                    pageTitle: "TaiAn Health Insurance for University of Pittsburgh",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Pittsburgh enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Pittsburgh as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Pittsburgh Scholar Requirements", "http://www.ois.pitt.edu/immigration-related-stuff/health-insurance/#nonstudent"),
                                makeURL("University of Pittsburgh Student Requirements", "http://www.ois.pitt.edu/immigration-related-stuff/health-insurance/#student")                        
                                ]));
                        endRow();
                    }
              }, 
              
         unc: {
                    windowTitle: "TaiAn Health Insurance for University of North Carolina",
                    pageTitle: "TaiAn Health Insurance for University of North Carolina",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of North Carolina enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of North Carolina as proof of insurance.");
                        writeText("Enrolled international students need to complete an online waiver.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of North Carolina Scholar Requirements", "http://oisss.unc.edu/academic_staff/j/j_insurance.pdf"),
                                makeURL("University of North Carolina Student Requirements", "https://www.bcbsnc.com/assets/studentblue/pdfs/U9308b%20International%20Brochure%20Enroll-Waiver%20Process%20FINAL%20for%20UNC.pdf")                        
                                ]));
                        endRow();
                    }
              },   

         temple: {
                    windowTitle: "TaiAn Health Insurance for Temple University",
                    pageTitle: "TaiAn Health Insurance for Temple University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Temple University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Temple University as proof of insurance.");
                        writeText("Enrolled international students need to complete an online waiver.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Temple University Scholar Requirements", "http://www.temple.edu/isss/general/health-j-scholar.html"),
                                makeURL("Temple University Student Requirements", "http://www.temple.edu/hr/students/healthinsurance/international/summary.htm")                        
                                ]));
                        endRow();
                    }
              }, 

         colorado: {
                    windowTitle: "TaiAn Health Insurance for University of Colorado",
                    pageTitle: "TaiAn Health Insurance for University of Colorado",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Colorado enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Colorado as proof of insurance.");
                        writeText("Enrolled international students need to complete an online waiver.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Colorado Scholar Requirements", "http://www.colorado.edu/oie/sites/default/files/attached-files/21%20Insurance%20Compliance%20Form.pdf"),
                                makeURL("University of Colorado Student Requirements", "http://www.colorado.edu/healthcenter/insurance")                        
                                ]));
                        endRow();
                    }
              }, 

         bvc: {
                    windowTitle: "TaiAn Health Insurance for Bellevue College",
                    pageTitle: "TaiAn Health Insurance for Bellevue College",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Bellevue College enrolled international student standards (J visa only) and J scholar standards. Both students and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Bellevue College as proof of insurance.");
                        writeText("Enrolled international students with J visa need to complete a waiver.  Students with other visas can not waive school plan.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Bellevue College Scholar Requirements", "http://bellevuecollege.edu/isp/insurance.html"),
                                makeURL("University of Bellevue College Student Requirements", "http://bellevuecollege.edu/isp/insurance.html")                        
                                ]));
                        endRow();
                    }
              },               
              
         cwu: {
                    windowTitle: "TaiAn Health Insurance for Central Washington University",
                    pageTitle: "TaiAn Health Insurance for Central Washington University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Central Washington University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Central Washington University as proof of insurance.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Central Washington University Scholar Requirements", "http://www.cwu.edu/international-programs/medical-insurance"),
                                makeURL("Central Washington University Student Requirements", "http://www.cwu.edu/contracts/insurance")                        
                                ]));
                        endRow();
                    }
              },             

         wwu: {
                    windowTitle: "TaiAn Health Insurance for Western Washington University",
                    pageTitle: "TaiAn Health Insurance for Western Washington University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Western Washington University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Western Washington University as proof of insurance.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Western Washington University Scholar Requirements", "http://www.wwu.edu/chw/student_health/billing.shtml"),
                                makeURL("Western Washington University Student Requirements", "http://www.wwu.edu/chw/student_health/billing.shtml")                        
                                ]));
                        endRow();
                    }
              },                  

         uconn: {
                    windowTitle: "TaiAn Health Insurance for University of Connecticut",
                    pageTitle: "TaiAn Health Insurance for University of Connecticut",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Connecticut enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Connecticut as proof of insurance.");
                        writeText("Enrolled international students need to complete an online waiver.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Connecticut Scholar Requirements", "http://global.uconn.edu/about/immigration-services/visiting-scholars/insurance-requirements-for-j-1-exchange-visitors/"),
                                makeURL("University of Connecticut Student Requirements", "http://www.shs.uconn.edu/insurance.html")                        
                                ]));
                        endRow();
                    }
              },                           

         clemson: {
                    windowTitle: "TaiAn Health Insurance for Clemson University",
                    pageTitle: "TaiAn Health Insurance for Clemson University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Clemson University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Clemson University as proof of insurance.");
                        writeText("Enrolled international students have to buy Plan A to meet Clemson University standards, and complete an online waiver.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Clemson University Scholar Requirements", "http://www.clemson.edu/administration/ia/services/students/scholars.html"),
                                makeURL("Clemson University Student Requirements", "http://www.studentinsurance.com/Schools/SC/Clemson/WaiverRequirements.asp?Show=Int&MenuNum=2")                        
                                ]));
                        endRow();
                    }
              }, 

         vt: {
                    windowTitle: "TaiAn Health Insurance for Virginia Tech",
                    pageTitle: "TaiAn Health Insurance for Virginia Tech",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Virginia Tech enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Virginia Tech as proof of insurance.");
                        writeText("Enrolled international students have to buy Plan A to meet Virginia Tech standards, and complete an online waiver.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Virginia Tech Scholar Requirements", "http://www.oired.vt.edu/iss/jvisa/health-insurance.html"),
                                makeURL("Virginia Tech Student Requirements", "http://graduateschool.vt.edu/igss/application_prearrival/insurance.html")                        
                                ]));
                        endRow();
                    }
              },               
              
         ncsu: {
                    windowTitle: "TaiAn Health Insurance for North Carolina State University",
                    pageTitle: "TaiAn Health Insurance for North Carolina State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet North Carolina State University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to North Carolina State University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("North Carolina State University Scholar Requirements", "http://www.ncsu.edu/ois/research/j1require.php")                       
                                ]));
                        endRow();
                    }
              },               
              
        uop: {
                    windowTitle: "TaiAn Health Insurance for University of Pennsylvania",
                    pageTitle: "TaiAn Health Insurance for University of Pennsylvania",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Pennsylvania J scholar standards and J student standards (Not F visa student standards).  J visa holders have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Pennsylvania as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Pennsylvania J1 student requirement", "http://global.upenn.edu/isss/j1"),                         
                                makeURL("University of Pennsylvania J1 scholar requirement", "http://global.upenn.edu/isss/j1scholar") 
                                ]));
                        endRow();
                    }
              }, 
              
        harvard: {
                    windowTitle: "TaiAn Health Insurance for Harvard University",
                    pageTitle: "TaiAn Health Insurance for Harvard University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Harvard University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Harvard University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Harvard University Scholar Requirements", "http://www.hio.harvard.edu/healthcareandinsurance/scholars/requirementsforjvisaholders/")                         

                                ]));
                        endRow();
                    }
              },    

        bu: {
                    windowTitle: "TaiAn Health Insurance for Boston University",
                    pageTitle: "TaiAn Health Insurance for Boston University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Boston University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Boston University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Boston University Scholar Requirements", "http://www.bu.edu/isso/administrators/j1/ev-overview.html")                         

                                ]));
                        endRow();
                    }
              },    

        brown: {
                    windowTitle: "TaiAn Health Insurance for Brown University",
                    pageTitle: "TaiAn Health Insurance for Brown University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Brown University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Brown University as proof of insurance.");
                        writeText("Enrolled international students have to buy Plan A to meet Brown University standards, and complete an online waiver.");       
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Brown University Scholar Requirements", "http://brown.edu/Administration/OISSS/scholars/docs/J1_health_insurance_memo.pdf"),                         
                                makeURL("Brown University Student Requirements", "http://www.universityhealthplans.com/letters/letter.cgi?school_id=165")
                                ]));
                        endRow();
                    }
              }, 
              
        caltech: {
                    windowTitle: "TaiAn Health Insurance for Caltech",
                    pageTitle: "TaiAn Health Insurance for Caltech",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Caltech enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Caltech as proof of insurance.");
                        writeText("Enrolled international students have to buy Plan A to meet Caltech standards, and complete an online waiver.");       
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Caltech Scholar Requirements", "http://www.international.caltech.edu/maintainstatus/j1scholar"),                         
                                makeURL("Caltech Student Requirements", "http://www.gradoffice.caltech.edu/documents/94-student_waiver_requirements_2011-2012.pdf")
                                ]));
                        endRow();
                    }
              },              

        uri: {
                    windowTitle: "TaiAn Health Insurance for University of Rhode Island",
                    pageTitle: "TaiAn Health Insurance for University of Rhode Island",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Rhode Island J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Rhode Island as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Rhode Island Scholar Requirements", "http://www.uri.edu/iss/PDF/j%20insurance%20info.pdf")                         

                                ]));
                        endRow();
                    }
              }, 

        wsu: {
                    windowTitle: "TaiAn Health Insurance for Washington State University",
                    pageTitle: "TaiAn Health Insurance for Washington State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Washington State University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Washington State University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Washington State University Scholar Requirements", "http://ip.wsu.edu/global-services/scholars/J-1/medical-insurance.html")                         

                                ]));
                        endRow();
                    }
              }, 

        csuohio: {
                    windowTitle: "TaiAn Health Insurance for Cleveland State University",
                    pageTitle: "TaiAn Health Insurance for Cleveland State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Cleveland State University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Cleveland State University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Cleveland State University Scholar Requirements", "http://www.csuohio.edu/offices/international/academic/exchange_visitors/exchange_form.html")                         

                                ]));
                        endRow();
                    }
              }, 

        gwu: {
                    windowTitle: "TaiAn Health Insurance for George Washington University",
                    pageTitle: "TaiAn Health Insurance for George Washington University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet George Washington University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to George Washington University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("George Washington University Scholar Requirements", "http://gwired.gwu.edu/iso/CurrentScholarsJ1/HealthInsuranceRequirementforJ1ExchangeVisitors")                         

                                ]));
                        endRow();
                    }
              }, 

        iastate: {
                    windowTitle: "TaiAn Health Insurance for Iowa State University",
                    pageTitle: "TaiAn Health Insurance for Iowa State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Iowa State University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Iowa State University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Iowa State University Scholar Requirements", "https://www.isso.iastate.edu/joomla/index.php?option=com_content&view=article&id=206:health-insurance-information&catid=37&Itemid=261")                         

                                ]));
                        endRow();
                    }
              }, 

        tulane: {
                    windowTitle: "TaiAn Health Insurance for Tulane University",
                    pageTitle: "TaiAn Health Insurance for Tulane University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Tulane University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Tulane as proof of insurance.");
                        writeText("Enrolled international students are required to carry $250,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Tulane University Scholar Requirements", "https://greenspace.tulane.edu/ciss/www/J-1 Insurance Requirement.pdf"),                         
                                makeURL("Tulane University Student Requirements", "http://pandora.tcs.tulane.edu/acctrec/healthinsurance.asp")
                                ]));
                        endRow();
                    }
              }, 
              
        georgetown: {
                    windowTitle: "TaiAn Health Insurance for Georgetown University",
                    pageTitle: "TaiAn Health Insurance for Georgetown University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Georgetown University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Georgetown as proof of insurance.");
                        writeText("Enrolled international students are required to carry $500,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $500,000 benefit per illness or injury is the most affordable plan that meets the standards.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Georgetown University Scholar Requirements", "http://internationalservices.georgetown.edu/j-1scholars/healthinsurance/"),                         
                                makeURL("Georgetown University Student Requirements", "http://studenthealth.georgetown.edu/insurance/requirements/full-time/waiver/approval/")
                                ]));
                        endRow();
                    }
              },               

        musc: {
                    windowTitle: "TaiAn Health Insurance for MUSC",
                    pageTitle: "TaiAn Health Insurance for MUSC",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet MUSC J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to MUSC as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("MUSC Scholar Requirements", "http://academicdepartments.musc.edu/immigrationservices/j1procedures.html")                         

                                ]));
                        endRow();
                    }
              },    

        ucberkeley: {
                    windowTitle: "TaiAn Health Insurance for University of California at Berkeley",
                    pageTitle: "TaiAn Health Insurance for University of California at Berkeley",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    globalCitizenContent: function () {
                        startRow();
                        writeText("Taian Global Medical Silver Plan with $250.00 deductible meets UC Berkeley J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $100,000 per illness/injury; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Annual deductible not over $250.00. Global Silver plan with $250.00 deductible is the most affordable plan that meets the standards, and the US Department of State requirements. After your application is reviewed and approved without exclusion of any pre-existing condition, this means you don\'t have pre-existing conditions, your coverage will meet your school requirement about pre-existing conditions. You will receive confirmation of your coverage which you can send to UC Berkeley as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UC Berkeley Scholar Requirements", "http://www.uhs.berkeley.edu/vspd/visitingscholar.shtml")                         

                                ]));
                        endRow();
                    },

                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Global Medical Silver Plan with $250.00 deductible meets UC Berkeley J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $100,000 per illness/injury; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Annual deductible not over $250.00. Global Silver plan with $250.00 deductible is the most affordable plan that meets the standards, and the US Department of State requirements. After your application is reviewed and approved without exclusion of any pre-existing condition, this means you don\'t have pre-existing conditions, your coverage will meet your school requirement about pre-existing conditions. You will receive confirmation of your coverage which you can send to UC Berkeley as proof of insurance.");
                        writeText("Please click on Global Medical tab at top of page.  Student Plan A and Plan B do not meet UC Berkeley requirements.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UC Berkeley Scholar Requirements", "http://www.uhs.berkeley.edu/vspd/visitingscholar.shtml")                         

                                ]));
                        endRow();
                    }                    
                    
              },               

        ufl: {
                    windowTitle: "TaiAn Health Insurance for University of Florida",
                    pageTitle: "TaiAn Health Insurance for University of Florida",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Florida J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Florida as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Florida Scholar Requirements", "http://www.ufic.ufl.edu/evs/Insurance.html")                         

                                ]));
                        endRow();
                    }
              }, 

        northeastern: {
                    windowTitle: "TaiAn Health Insurance for Northeastern University",
                    pageTitle: "TaiAn Health Insurance for Northeastern University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Northeastern University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Northeastern University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Northeastern University Scholar Requirements", "http://www.northeastern.edu/issi/insurance.html")                         

                                ]));
                        endRow();
                    }
              },        

        gatech: {
                    windowTitle: "TaiAn Health Insurance for Georgia Institute of Technology",
                    pageTitle: "TaiAn Health Insurance for Georgia Institute of Technology",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Georgia Institute of Technology J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Georgia Institute of Technology as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Georgia Institute of Technology Scholar Requirements", "http://www.oie.gatech.edu/scholars/procedures")                         

                                ]));
                        endRow();
                    }
              },       

        asu: {
                    windowTitle: "TaiAn Health Insurance for Arizona State University",
                    pageTitle: "TaiAn Health Insurance for Arizona State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Arizona State University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Arizona State University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Arizona State University Scholar Requirements", "https://global.asu.edu/sites/default/files/DS2019Packet.pdf")                         

                                ]));
                        endRow();
                    }
              },  
              
        ucsd: {
                    windowTitle: "TaiAn Health Insurance for University of California at San Diego",
                    pageTitle: "TaiAn Health Insurance for University of California at San Diego",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UC San Diego J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UC San Diego as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UC San Diego Scholar Requirements", "http://icenter.ucsd.edu/ifso/living-in-sd/insurance/index.html")                         

                                ]));
                        endRow();
                    }
              },              

        arizona: {
                    windowTitle: "TaiAn Health Insurance for University of Arizona",
                    pageTitle: "TaiAn Health Insurance for University of Arizona",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Arizona J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Arizona as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Arizona Scholar Requirements", "http://www.health.arizona.edu/pdf/insurance/J1%20Visiting%20Scholars%20Ins%20Requirement.pdf")                         

                                ]));
                        endRow();
                    }
              },   

        uchicago: {
                    windowTitle: "TaiAn Health Insurance for University of Chicago",
                    pageTitle: "TaiAn Health Insurance for University of Chicago",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Chicago J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Chicago as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Chicago Scholar Requirements", "https://internationalaffairs.uchicago.edu/page/health-insurance-requirements-j-1-exchange-visitors")                         

                                ]));
                        endRow();
                    }
              },    

        emory: {
                    windowTitle: "TaiAn Health Insurance for Emory University",
                    pageTitle: "TaiAn Health Insurance for Emory University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Emory University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Emory University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Emory University Scholar Requirements", "http://www.emory.edu/isss/scholars/Maintaining%20J-1%20Status%20Scholars/Health%20Insurance.html")                         

                                ]));
                        endRow();
                    }
              },                
              
        tamu: {
                    windowTitle: "TaiAn Health Insurance for Texas A&M University",
                    pageTitle: "TaiAn Health Insurance for Texas A&M University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Texas A&M University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Texas A&M University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Texas A&M University Scholar Requirements", "http://ifss.tamu.edu/J/insurance")                         

                                ]));
                        endRow();
                    }
              }, 

        cornell: {
                    windowTitle: "TaiAn Health Insurance for Cornell University",
                    pageTitle: "TaiAn Health Insurance for Cornell University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Cornell University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Cornell University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Cornell University Scholar Requirements", "http://www.isso.cornell.edu/immigration/j1student/j1insurance.php")                         

                                ]));
                        endRow();
                    }
              },   

        uh: {
                    windowTitle: "TaiAn Health Insurance for University of Houston",
                    pageTitle: "TaiAn Health Insurance for University of Houston",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Houston J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Houston as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Houston Scholar Requirements", "http://www.issso.uh.edu/finances/healthinsurance.html")                         

                                ]));
                        endRow();
                    }
              },               

        utmda: {
                    windowTitle: "TaiAn Health Insurance for University of Texas MD Anderson",
                    pageTitle: "TaiAn Health Insurance for University of Texas MD Anderson",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Texas MD Anderson J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Texas MD Anderson as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Texas MD Anderson Scholar Requirements", "https://www.academichealthplans.com/uthouston/2012-2013/FAQs.php")                         
                                ]));
                        endRow();
                    }
              }, 

        uva: {
                    windowTitle: "TaiAn Health Insurance for University of Virginia",
                    pageTitle: "TaiAn Health Insurance for University of Virginia",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Virginia J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Virginia as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Virginia Scholar Requirements", "http://www.virginia.edu/iso/issp/NewWindows/HealthInsScholarExchange.html")                        
                                ]));
                        endRow();
                    }
              },    

        mit: {
                    windowTitle: "TaiAn Health Insurance for Massachusetts Institute of Technology (MIT)",
                    pageTitle: "TaiAn Health Insurance for Massachusetts Institute of Technology (MIT)",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet MIT J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to MIT as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("MIT Scholar Requirements", "http://web.mit.edu/scholars/intlscholars/healthinsurance/j1requirements.html")                        
                                ]));
                        endRow();
                    }
              },  

        princeton: {
                    windowTitle: "TaiAn Health Insurance for Princeton University",
                    pageTitle: "TaiAn Health Insurance for Princeton University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Princeton University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Princeton University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Princeton University Scholar Requirements", "http://www.princeton.edu/intlctr/scholars/new-scholarsfaculty/j-1-exchange-visitor/health-insurance-requirem/")                        
                                ]));
                        endRow();
                    }
              },    

        tufts: {
                    windowTitle: "TaiAn Health Insurance for Tufts University",
                    pageTitle: "TaiAn Health Insurance for Tufts University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Tufts University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Tufts University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Tufts University Scholar Requirements", "http://ase.tufts.edu/icenter/currentImmigrationFacultyJ1-2yrInsurance.htm")                        
                                ]));
                        endRow();
                    }
              },       

        cmu: {
                    windowTitle: "TaiAn Health Insurance for Carnegie Mellon University",
                    pageTitle: "TaiAn Health Insurance for Carnegie Mellon University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Carnegie Mellon University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Carnegie Mellon University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Carnegie Mellon University Scholar Requirements", "http://www.studentaffairs.cmu.edu/oie/forscho/j1/conditions.html")                        
                                ]));
                        endRow();
                    }
              },           

        brandeis: {
                    windowTitle: "TaiAn Health Insurance for Brandeis University",
                    pageTitle: "TaiAn Health Insurance for Brandeis University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Brandeis University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Brandeis University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Brandeis University Scholar Requirements", "http://www.brandeis.edu/acserv/isso/scholar/currentscholars/healthinsurance.html")                        
                                ]));
                        endRow();
                    }
              }, 

        duke: {
                    windowTitle: "TaiAn Health Insurance for Duke University",
                    pageTitle: "TaiAn Health Insurance for Duke University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Duke University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Duke University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Duke University Scholar Requirements", "http://www.visaservices.duke.edu/J_Health_Insurance.html")                        
                                ]));
                        endRow();
                    }
              },               
              
        uga: {
                    windowTitle: "TaiAn Health Insurance for University of Georgia",
                    pageTitle: "TaiAn Health Insurance for University of Georgia",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Georgia J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Georgia as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Georgia Scholar Requirements", "http://issis.uga.edu/docs/Fac_Scholar_Section/Health_%20Ins_Companies_Requirements.pdf")                        
                                ]));
                        endRow();
                    }
              },                           

        washington: {
                    windowTitle: "TaiAn Health Insurance for University of Washington",
                    pageTitle: "TaiAn Health Insurance for University of Washington",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Washington enrolled international student standards and J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Washington as proof of insurance.");
                        writeText("Enrolled international students are allowed to waive only if they are an exchange student visiting through an official exchange program.  They are required to carry $250,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Washington Student Requirements", "http://iss.washington.edu/health-insurance"),
                                makeURL("University of Washington Scholar Requirements", "http://iss.washington.edu/health-insurance")                        
                                ]));
                        endRow();
                    }
              }, 
              
        vanderbilt: {
                    windowTitle: "TaiAn Health Insurance for Vanderbilt University",
                    pageTitle: "TaiAn Health Insurance for Vanderbilt University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Vanderbilt University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Vanderbilt University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Vanderbilt University Scholar Requirements", "http://www.vanderbilt.edu/isss/financial-statements/j-1-student-intern/j-1-student-intern-orientation/")                        
                                ]));
                        endRow();
                    }
              }, 

        miami: {
                    windowTitle: "TaiAn Health Insurance for University of Miami",
                    pageTitle: "TaiAn Health Insurance for University of Miami",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Miami J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Miami as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Miami Scholar Requirements", "http://www.miami.edu/sa/index.php/isss/current_international_scholars/health_insurance_requirement/")                        
                                ]));
                        endRow();
                    }
              }, 

        fsu: {
                    windowTitle: "TaiAn Health Insurance for Florida State University",
                    pageTitle: "TaiAn Health Insurance for Florida State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Florida State University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Florida State University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Florida State University Scholar Requirements", "http://cge.fsu.edu/forms/j1schforms/health_insurance_eval.pdf")                        
                                ]));
                        endRow();
                    }
              },               
 
        lsu: {
                    windowTitle: "TaiAn Health Insurance for Louisiana State University",
                    pageTitle: "TaiAn Health Insurance for Louisiana State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Louisiana State University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Louisiana State University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Louisiana State University Scholar Requirements", "http://www.oip.lsu.edu/iso/pdfs/J-1%20Scholar%20Insurance%20Coverage%20Evaluation%20Form.pdf")                        
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
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UIUC enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UIUC as proof of insurance.");
                        writeText("Enrolled international students are required to carry $200,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UIUC Student Requirements", "http://www.si.uiuc.edu/Default.aspx?tabid=64"),
                                makeURL("UIUC Scholar Requirements", "http://isss.illinois.edu/download_forms/handbooks/j1_prog_handbook.pdf")                                

                                ]));
                        endRow();
                    }
              },     

        msu: {
                    windowTitle: "TaiAn Health Insurance for Michigan State University",
                    pageTitle: "TaiAn Health Insurance for Michigan State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Michigan State University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Michigan State University as proof of insurance.");
                        writeText("Enrolled international students are required to carry $250,000 per illness or injury, have coverage for mental nervous claims, and complete a waiver. Taian Scholar/Student Insurance Plan A is the most affordable plan that meets the standards.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Michigan State University Student Requirements", "http://oiss.isp.msu.edu/students/health/policy.htm"),
                                makeURL("Michigan State University Scholar Requirements", "http://oiss.isp.msu.edu/documents/scholars/DS2019_Scholar_Extension.pdf")                                

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
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet NYU J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to NYU as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("NYU Scholar Requirements", "http://www.nyu.edu/global/international-immigration-services/faculty-and-scholars/inbound-to-nyc/pre-arrival/exchange-visitor/health-insurance-requirement.html")                              
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
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Purdue University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Purdue as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Purdue University Scholar Requirements", "http://www.iss.purdue.edu/Current/J1/HealthInsurance.cfm")                               
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
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Columbia J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Columbia as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Columbia Scholar Requirements", "http://www.columbia.edu/cu/isso/visa/scholar/J_health.html")                               
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
                                makeURL("UCLA Scholar Requirements", "http://www.internationalcenter.ucla.edu/home/J1Visa/74/75/Overview#divHealth")
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
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UC Davis J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UC Davis as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UC Davis Scholar Requirements", "http://siss.ucdavis.edu/health_j1.cfm")                              
                                ]));
                        endRow();
                    }                          
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
                        writeText("Indiana University - Bloomington allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to IU Bloomington to waive the school plan.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("IU Bloomington Student Requirements", "http://ois.indiana.edu/newstudents/livingintheus/insurance/"),
                                makeURL("IU Bloomington Scholar Requirements", "http://ois.indiana.edu/scholars/status/med_insurance.php")                               
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
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UT Austin enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Austin as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UT Austin Student Waiver", "http://world.utexas.edu/forms/isss/PVT_Waiver.pdf"), 
                                makeURL("UT Austin Scholar requirements", "http://world.utexas.edu/isss/insurance/vs-overview")                               
                                ]));
                        endRow();
                    }
              },   

        yale: {
                    windowTitle: "TaiAn Health Insurance for Yale University",
                    pageTitle: "TaiAn Health Insurance for Yale University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Yale University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Yale University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Yale University Student requirements", "https://www.yhpstudentwaiver.yale.edu/"), 
                                makeURL("Yale University Scholar requirements", "http://www.yale.edu/oiss/immigration/common/j1students/health.html")                               
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
                        writeText("Univtemplate allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to Univtemplate to waive the school plan.");
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
                    contactInfo: ["Call from US: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English)",
                                  "Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am)",
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
