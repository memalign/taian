
function getPartnership(partner) {
    var defaultPartner = "taian";


    var partnerShips = {

        taian: {
                    windowTitle: "TaiAn International Health Insurance | 泰安国际医疗保险",
                    pageTitle: "TaiAn International Health Insurance",
                    logoImage: "longevity.gif",
                    logoHeight: "30",
                    logoWidth: "30",
                    contactInfo: ["Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English)",
                                  "Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges)",
                                  "WeChat ID: wxid_taian_usa",
                                  "Skype: chris.lee136",
                                  "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>"
                                 ],
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-indiana-residents",


                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"                            
                            
                          ]
              },   
  
        friendship: {
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"                            
                            
                          ]
              },   
  
        upgrade: {
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ]
              },                 
              
        uclaj: {
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ]
              },                
              
        lng: {
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ]
              },                 

        mdy: {
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ]
              },              

        xyf: {
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ]
              },                           

        iupui: {
                    windowTitle: "TaiAn International Health Insurance",
                    pageTitle: "TaiAn International Health Insurance",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("IUPUI allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to IUPUI to waive the school plan.");

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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ]
              },  

       psu: {
                    windowTitle: "TaiAn Health Insurance for Pennsylvania State University",
                    pageTitle: "TaiAn Health Insurance for Pennsylvania State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ]
              },                

        usc: {
                    windowTitle: "TaiAn Health Insurance for University of Southern California",
                    pageTitle: "TaiAn Health Insurance for University of Southern California",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Johns Hopkins University and Johns Hopkins Medical Institutions J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Johns Hopkins University or Johns Hopkins Medical Institutions as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Johns Hopkins University Scholar Requirements", "http://oisss.jhu.edu/Presentations/Understanding%20the%20J1%20Visa%20Program.pdf"),
                                makeURL("Johns Hopkins Medical Institutions Scholar Requirements", "http://ois.johnshopkins.edu/Immigration_and_%20Visas/J1_Scholar/Maintaining_J1_Scholar_Status/Health_Insurance_Requirements/index.html")
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Maryland enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Maryland as proof of insurance.");
                        writeText("Enrolled international students need to complete an online waiver.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Maryland Scholar Requirements", "http://www.international.umd.edu/ies/2750"),
                                makeURL("University of Maryland Student Requirements", "http://www.international.umd.edu/ies/123")                                
                                ]));
                        endRow();
                    }
              }, 
              
         umb: {
                    windowTitle: "TaiAn Health Insurance for UMASS Boston",
                    pageTitle: "TaiAn Health Insurance for UMASS Boston",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Massachusetts - Boston J scholar standards (and enrolled undergraduate students with 8 or fewer credit hours per semester and enrolled graduate students with 6 or fewer credit hours per semester). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Massachusetts - Boston as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UMASS Boston Scholar Requirements", "http://www.umb.edu/academics/oita/isss/scholar_services#insurance")
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Pittsburgh enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Pittsburgh as proof of insurance.");
                        writeText("Enrolled students are required to attest that they have coverage at the beginning of each fall semester.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Pittsburgh Scholar Requirements", "http://www.ois.pitt.edu/immigration-related-stuff/health-insurance/#nonstudent"),
                                makeURL("University of Pittsburgh Student Requirements", "http://www.ois.pitt.edu/immigration-related-stuff/health-insurance/#student"),  
                                makeURL("Student attestation", " https://my.pitt.edu/")                                
                                ]));
                        endRow();
                    }
              }, 
              
         hawaii: {
                    windowTitle: "TaiAn Health Insurance for University of Hawaii",
                    pageTitle: "TaiAn Health Insurance for University of Hawaii",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Hawaii standards for F visa and J visa  standards. J visa holders (enrolled students or visiting scholars) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Hawaii as proof of insurance.  J students have their insurance approved by ISS.");
                        writeText("University of Hawaii F visa student insurance is approved by Student Health Insurance Office.  F visa holders have required coverage as follows: 1. Medical benefits of $100,000 per accident or illness; 2. Coinsurance coverage of 75% or more and mental nervous benefits ; 3.Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Deductible not over $500; 6. Pre-existing waiting period not over 6 months.  Plan A is the most affordable plan that meets the standards. You need to select the optional rider for a 6 month pre-existing condition waiting period.");                        
                        writeText("We can assist with the forms required for each visa.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Hawaii J scholar", "http://www.hawaii.edu/fsis/downloads/JHealthComplianceForm.pdf"),
                                makeURL("University of Hawaii F or J student", "http://www.hawaii.edu/issmanoa/pages/home/health-insurance.php")                        
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Central Washington University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Central Washington University as proof of insurance.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Central Washington University Scholar Requirements", "http://www.cwu.edu/international-programs/medical-insurance"),
                                makeURL("Central Washington University Student Requirements", "http://www.cwu.edu/international-programs/medical-insurance")                        
                                ]));
                        endRow();
                    }
              },    
              
         cuny: {
                    windowTitle: "TaiAn Health Insurance for CUNY",
                    pageTitle: "TaiAn Health Insurance for CUNY",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet CUNY enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to CUNY as proof of insurance.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("CUNY Scholar Requirements", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html"),
                                makeURL("CUNY Student Requirements", "http://cuny.edu/about/administration/offices/sa/services/international-students/ISinsurance.html")                        
                                ]));
                        endRow();
                    }
              },                  

         kent: {
                    windowTitle: "TaiAn Health Insurance for Kent State University",
                    pageTitle: "TaiAn Health Insurance for Kent State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Kent State University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Kent State University as proof of insurance.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Kent State University Scholar Requirements", "http://www.kent.edu/isss/scholars/upload/j1-student-and-scholar-guide.pdf"),
                                makeURL("Kent State University Student Requirements", "http://www.kent.edu/isss/futurestudents/upload/welcome-guide-aug-2013-4.pdf")                        
                                ]));
                        endRow();
                    }
              },              

         murraystate: {
                    windowTitle: "TaiAn Health Insurance for Murray State University",
                    pageTitle: "TaiAn Health Insurance for Murray State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Murray State University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Murray State University as proof of insurance.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Murray State University Scholar Requirements", "http://www.murraystate.edu/Students/International/IIS/StudentScholarServices/HealthcareInsurance.aspx"),
                                makeURL("Murray State University Student Requirements", "http://www.murraystate.edu/Students/International/IIS/StudentScholarServices/HealthcareInsurance.aspx")                        
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
              
         cst: {
                    windowTitle: "TaiAn Health Insurance for Claremont School of Theology",
                    pageTitle: "TaiAn Health Insurance for Claremont School of Theology",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Claremont School of Theology enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Claremont School of Theology as proof of insurance.");

                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Claremont School of Theology Scholar Requirements", "http://www.cst.edu/international-students/visiting-scholars/"),
                                makeURL("Claremont School of Theology Student Requirements", "http://www.cst.edu/international-students/incoming-students/health-insurance/")                        
                                ]));
                        endRow();
                    }
              },               
              
         dartmouth: {
                    windowTitle: "TaiAn Health Insurance for Dartmouth College",
                    pageTitle: "TaiAn Health Insurance for Dartmouth College",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Dartmouth College enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Dartmouth College as proof of insurance.");
                        writeText("Enrolled international students have to buy Plan A to meet Dartmouth College standards, and complete a waiver.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Dartmouth College Scholar Requirements", "http://www.dartmouth.edu/~ovis/updates/j1/health.html"),
                                makeURL("Dartmouth College Student Requirements", "http://www.dartmouth.edu/~health/depts/insurance/waiver04.html")                        
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Virginia Tech J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Virginia Tech as proof of insurance.");

                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Virginia Tech Scholar Requirements", "http://www.oired.vt.edu/iss/jvisa/health-insurance.html")
                        
                                ]));
                        endRow();
                    }
              },

         vcu: {
                    windowTitle: "TaiAn Health Insurance for Virginia Commonwealth University",
                    pageTitle: "TaiAn Health Insurance for Virginia Commonwealth University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Virginia Commonwealth University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Virginia Commonwealth University as proof of insurance.");
                        writeText("Enrolled international students are required to carry $250,000 per illness or injury. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Virginia Commonwealth Scholar Requirements", "http://www.global.vcu.edu/pdf/immigration/j1/J-1_Health_Insurance_Requirements.pdf"),
                                makeURL("Virginia Commonwealth Student Requirements", "http://www.global.vcu.edu/students/connections/started/insurance.html")                        
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Harvard University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Pre-existing condition coverage after a reasonable wait; 6. Patient share of expenses not over 25%.  Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Harvard University as proof of insurance.");
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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

        babson: {
                    windowTitle: "TaiAn Health Insurance for Babson College",
                    pageTitle: "TaiAn Health Insurance for Babson College",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Babson College J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Babson College as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Babson College Scholar Requirements", "http://www.babson.edu/about-babson/global/mie/isss/visiting-scholars/Pages/health-insurance-requirement.aspx")                         

                                ]));
                        endRow();
                    }
              },              
              
        bc: {
                    windowTitle: "TaiAn Health Insurance for Boston College",
                    pageTitle: "TaiAn Health Insurance for Boston College",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Boston College J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Boston College as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Boston College Scholar Requirements", "http://www.bc.edu/content/bc/offices/oiss/scholars/department.html")                         

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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Caltech J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Caltech as proof of insurance.");
      
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Caltech Scholar Requirements", "http://www.international.caltech.edu/maintainstatus/j1scholar")                        

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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
              
        usf: {
                    windowTitle: "TaiAn Health Insurance for University of South Florida",
                    pageTitle: "TaiAn Health Insurance for University of South Florida",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of South Florida J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of South Florida as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of South Florida Scholar Requirements", "http://global.usf.edu/is/downloads/J1_DS2019.pdf")                         

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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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

 
              
        georgetown: {
                    windowTitle: "TaiAn Health Insurance for Georgetown University",
                    pageTitle: "TaiAn Health Insurance for Georgetown University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
              
        nd: {
                    windowTitle: "TaiAn Health Insurance for University of Notre Dame",
                    pageTitle: "TaiAn Health Insurance for University of Notre Dame",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Notre Dame enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Notre Dame as proof of insurance.");
                        writeText("Enrolled international students are required to carry $500,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $500,000 benefit per illness or injury is the most affordable plan that meets the standards.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Notre Dame Scholar Requirements", "https://hr.nd.edu/assets/20192/j_1_visa.pdf"),                         
                                makeURL("University of Notre Dame Student Requirements", "http://uhs.nd.edu/insurance-billing/")
                                ]));
                        endRow();
                    }
              },               

        utoledo: {
                    windowTitle: "TaiAn Health Insurance for University of Toledo",
                    pageTitle: "TaiAn Health Insurance for University of Toledo",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Toledo enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Toledo as proof of insurance.");
                        writeText("Enrolled international students are required to have a $500,000  lifetime maximum and complete an online waiver. Taian Scholar/Student Insurance Plan B with $50,000 benefit per illness or injury and $5,000,000 lifetime maximum is the most affordable plan that meets the standards.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Toledo Scholar Requirements", "http://www.utoledo.edu/cisp/international/ExchangeVisitors/pdfs/J-1%20Handbook.pdf"),                         
                                makeURL("University of Toledo Student Requirements", "http://www.utoledo.edu/healthservices/student/health_insurance/Waiver_Criteria.html")
                                ]));
                        endRow();
                    }
              },              

        gsu: {
                    windowTitle: "TaiAn Health Insurance for Georgia State University",
                    pageTitle: "TaiAn Health Insurance for Georgia State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Georgia State University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Georgia State as proof of insurance.");
                        writeText("Enrolled international students are required to carry $500,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $500,000 benefit per illness or injury is the most affordable plan that meets the standards.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Georgia State University Scholar Requirements", "http://education.gsu.edu/international/docs/J-1_insurance_compliance_form.pdf"),                         
                                makeURL("Georgia State University Student Requirements", "http://isss.gsu.edu/files/2013/02/Updated-FAQ.pdf")
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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

        ucincinnati: {
                    windowTitle: "TaiAn Health Insurance for University of Cincinnati",
                    pageTitle: "TaiAn Health Insurance for University of Cincinnati",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Cincinnati J scholar standards (and enrolled students with 5 or fewer credit hours per semester). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Cincinnati as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Cincinnati Scholar Requirements", "http://www.uc.edu/international/services/scholars/maintaining_status/health_insurance.html")                         

                                ]));
                        endRow();
                    }
              },               



        ucberkeley: {
                    windowTitle: "TaiAn Health Insurance for University of California at Berkeley",
                    pageTitle: "TaiAn Health Insurance for University of California at Berkeley",
                    tabs: [
                            "pivot-home",
                            "pivot-j-scholar",                            
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    jScholarContent: function () {
                        startRow();
                        writeText("Taian Travel Insurance Plan (Patriot America) with $250.00 deductible and $500,000 benefit meets UC Berkeley J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per illness/injury; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Annual deductible not over $250.00. Travel plan with $250.00 deductible and $500,000 maximum (we suggest $1,000,000 maximum) is the most affordable plan that meets the standards, and the US Department of State requirements. The chart on the left below shows the monthly premium rates for this plan.  The chart on the right shows premium rates to choose a $0 deductible plan with the same benefits (a little more expensive).  Shortly after submitting an application you will receive confirmation of your coverage which you can send to UC Berkeley as proof of insurance.");
                        writeText("J-2 dependents are subject to the same benefit requirements.  Your J-2 dependents can buy with you, or buy a separate plan.  If your J-2 dependents are not going to be in the US for the same time period you will be here, you can buy a separate plan with different coverage dates to match their stay in the US.");

                        startRow();
                            document.write(makeTable(2,
                            [
                            // Column headers:

                            "Monthly Price for $500,000 benefit $250 deductible", "Monthly Price for $500,000 benefit $0 deductible",


                            // Table within a table

                                makeTable(4, [
                                "Age",     "J1", "Spouse", "Children",
                                "&lt; 30", "$59.00",   "$59.00",   "$53.00",
                                "30-39",   "$78.00",   "$78.00",   "$53.00",
                                "40-49",   "$119.00",  "$119.00",   "$53.00"

                                ]), 

       
                                makeTable(4, [
                                "Age",     "J1", "Spouse", "Children",
                                "&lt; 30", "$73.75",   "$73.75",   "$66.25",
                                "30-39",   "$97.50",   "$97.50",   "$66.25",
                                "40-49",   "$148.75",  "$148.75",   "$66.25"
                                ]), 
                    

                                makeBuyURL("Buy Patriot America Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                                makeBuyURL("Buy Patriot America Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699")


                                   ])
                                    );
                                endRow();                 
                        
                                startRow();
                                writeText("");
                                endRow();                        
                          
                                startRow();
                                writeText(makeURL("UC Berkeley Scholar Requirements", "http://www.garnett-powers.com/academics/ucb/"));
                                endRow();                               
                                endRow();
                                
                                
                                
                                }
                                },                  

        
        duke: {
                    windowTitle: "TaiAn Health Insurance for Duke University",
                    pageTitle: "TaiAn Health Insurance for Duke University",
                    tabs: [
                            "pivot-home",
                            "pivot-j-scholar",                            
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    jScholarContent: function () {
                        startRow();
                        writeText("Taian Travel Insurance Plan (Patriot America) with $0.00 deductible and $1,000,000 benefit meets Duke University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per illness/injury; 2. No Deductible; 3. Coinsurance not over 20%; 4. Medical evacuation of $10,000;  5.  Repatriation of remains of $7,500. Travel plan with $0.00 deductible and $1,000,000 maximum is the most affordable plan that meets the standards, and the US Department of State requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to Duke University as proof of insurance.");
                        writeText("J-2 dependents are subject to the same benefit requirements.  Your J-2 dependents can buy with you, or buy a separate plan.  If your J-2 dependents are not going to be in the US for the same time period you will be here, you can buy a separate plan with different coverage dates to match their stay in the US.");

                        startRow();
                            document.write(makeTable(1,
                            [
                            // Column headers:

                            "Monthly Price for $1,000,000 benefit $0 deductible", 


                            // Table within a table

                                makeTable(4, [
                                "Age",     "J1", "Spouse", "Children",
                                "&lt; 30", "$88.75",   "$88.75",   "$73.75",
                                "30-39",   "$113.75",   "$113.75",   "$73.75",
                                "40-49",   "$166.25",  "$166.25",   "$73.75"

                                ]), 

       
                                
                    


                                makeBuyURL("Buy Patriot America Medical Insurance", "https://purchase.imglobal.com/quote/patriot?imgac=80000699")


                                   ])
                                    );
                                endRow();                 
                        
                                startRow();
                                writeText("");
                                endRow();                        
                          
                                startRow();
                                writeText(makeURL("Duke University Scholar Requirements", "http://www.visaservices.duke.edu/J_Health_Insurance.html"));
                                endRow();                               
                                endRow();
                                
                                
                                
                                }
                                },                                    
                                
        kstate: {
                    windowTitle: "TaiAn Health Insurance for Kansas State University",
                    pageTitle: "TaiAn Health Insurance for Kansas State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-studentandscholar",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          

                    internationalStudentandscholarContent: function () {
                        startRow();
                        writeText("J SCHOLARS  (STUDENTS SCROLL DOWN THE PAGE)");                        
                        writeText("");
                        writeText("Kansas State University exchange visitors (J visa) have required health insurance coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Taian Scholar/Student Insurance Plan B ($100 deductible) and Plan C ($500 deductible) with $50,000 benefit per illness or injury is the most affordable plan that meets the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.");                        
                        document.write(makeBulletedListWithTitle("", [
                        
                                makeURL("Kansas State University Scholar Requirements", "http://www.k-state.edu/isss/j-1/jhealthins.html") 
                                ]));
                        endRow();

                        startRow();
                            document.write(makeTable(3,
                            [
                            // Column headers:

                            "Plan A (Student Health Advantage) $300,000 / $100 deductible / Maternity", "Plan B (Patriot Exchange) $50,000 / $100 deductible", "Plan C (Patriot Travel) $50,000 /$500 deductible",
                            "Monthly Premium", "Monthly Premium", "Monthly Premium",
                            "(J Scholar - Recommended if you want maternity benefit)", "(J Scholar - Recommended Plan)", "(J Scholar)",

                            // Table within a table

                                makeTable(4, [
                                "Age",     "J1 Scholar", "Spouse", "Children",
                                "&lt; 19", "$72",   "$386",   "$82",
                                "19-23",   "$95",   "$386",   "$82",
                                "24-30",   "$110",  "$426",   "$82",
                                "31-40",   "$197",  "$567",   "$82",
                                "41-50",   "$322",  "$586",   "$82",
                                "51-64",   "$430",  "$567",   "$82"
                                
                                ]), 

                                makeTable(4, [
                                "Age",     "J1 Scholar", "Spouse", "Children",
                                "&lt; 25", "$48.62",   "$48.62",   "$48.62",
                                "25-49",   "$63.37",   "$63.37",   "$48.62",
                                "50-64",   "$135.70",  "$135.70",   "$63.66"
                                ]),                                

                                makeTable(4, [
                                "Age",     "J1 Scholar", "Spouse", "Children",
                                "&lt; 30", "$33.30",   "$33.30",   "$30.60",
                                "30-39",   "$44.10",   "$44.10",   "$30.60",
                                "40-49",   "$65.70",  "$65.70",   "$30.60",
                                "50-59",   "$96.30",  "$96.30",   "$30.60"
                                ]),                                 

                    
                                makeBuyURL(loc("Buy Plan A") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Patriot Exchange Program - Standard"), "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan C")+ "<br />" + loc("Patriot Travel Medical"), "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),

                                "",
                                makeBuyURL(loc("Buy Group") + "<br />" + loc("Group for 2 or more"), "https://purchase.imglobal.com/quote/patriot_group_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Group")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699")                                 

                                   ])
                                    );
                        endRow();  

                        startRow();
                        writeText("");
                        writeText("F or J STUDENTS");                        
                        writeText("");
                        writeText("Kansas State University enrolled students with an F or J visa have required health insurance coverage as follows: 1. $500,000 per illness or injury; 2. Deductible not over $500 per policy year; 3. Repatriation of remains of $10,000; 4. Medical evacuation of $15,000. Taian Scholar/Student Insurance Plan C ($500 deductible) with $500,000 benefit is the most affordable plan that meets the school requirements and the US Department of State requirements. Students are required to complete an on line waiver.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Kansas State University Student Requirements", "http://www.k-state.edu/isss/current/healthinsurance.html")                      

                                ]));
                        endRow();

                        startRow();
                            document.write(makeTable(1,
                            [
                            // Column headers:

                            "Plan C (Patriot Travel) $500,000 /$500 deductible",
                            "Monthly Premium", 
                            "(F or J Student - Recommended Plan)",

                            // Table within a table



                                                              

                                makeTable(4, [
                                "Age",     "F1/J1 Student", "Spouse", "Children",
                                "&lt; 30", "$53.10",   "$53.10",   "$47.70",
                                "30-39",   "$70.20",   "$70.20",   "$47.70",
                                "40-49",   "$107.10",  "$107.10",    "$47.70",
                                "50-59",   "$152.10",  "$152.10",   "$47.70"
                                ]),                                 

                    


                                makeBuyURL(loc("Buy Plan C")+ "<br />" + loc("Patriot Travel Medical"), "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),



                                makeBuyURL(loc("Buy Group")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699")                                 

                                   ])
                                    );
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Florida J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Policy shall not unreasonably exclude risks inherent to the exchange program; 6. The insurance must meet certain credit rating criteria; 7. Must be accepted in all medical facilities. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Florida as proof of insurance.");
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
              
        msstate: {
                    windowTitle: "TaiAn Health Insurance for Mississippi State University",
                    pageTitle: "TaiAn Health Insurance for Mississippi State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Mississippi State University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Mississippi State University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Mississippi State University Scholar Requirements", "http://www.admissions.msstate.edu/pdf/international/exchange-visitor.pdf")                         

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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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

        uakron: {
                    windowTitle: "TaiAn Health Insurance for University of Akron",
                    pageTitle: "TaiAn Health Insurance for University of Akron",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Akron J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Akron as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Akron Scholar Requirements", "http://www.uakron.edu/oip/immigration/insurance-for-j1-scholar.dot")                         

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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Emory University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Emory University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Emory University Scholar Requirements", "http://www.emory.edu/isss/scholars/maintaining_j1_status_scholars/health_insurance.html")                         

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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Cornell University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Cornell University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Cornell University Scholar Requirements", "http://www.isso.cornell.edu/academicstaff/j1insurance.php")                         

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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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

        utah: {
                    windowTitle: "TaiAn Health Insurance for University of Utah",
                    pageTitle: "TaiAn Health Insurance for University of Utah",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Utah J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Utah as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Utah Scholar Requirements", "http://ic.utah.edu/scholars/family-dependents/health.php")                        
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Tufts University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Tufts University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Tufts University Scholar Requirements", "http://ase.tufts.edu/icenter/life/healthcareScholar.asp")                        
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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

        wustl: {
                    windowTitle: "TaiAn Health Insurance for Washington University in St. Louis",
                    pageTitle: "TaiAn Health Insurance for Washington University in St. Louis",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Washington University in St. Louis J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Washington University in St. Louis as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Washington University in St. Louis Scholar Requirements", "http://oiss.wustl.edu/scholars/j-1-exchange-visitors/maintaining-j-1status/")                        
                                ]));
                        endRow();
                    }
              }, 

        wvu: {
                    windowTitle: "TaiAn Health Insurance for West Virginia University",
                    pageTitle: "TaiAn Health Insurance for West Virginia University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet West Virginia University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $100,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Copay not over $10. Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to West Virginia University in St. Louis as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("West Virginia University Scholar Requirements", "http://well.wvu.edu/medical/insurance/international-students")                        
                                ]));
                        endRow();
                    }
              },               
              
        ucsf: {
                    windowTitle: "TaiAn Health Insurance for UC San Francisco",
                    pageTitle: "TaiAn Health Insurance for UC San Francisco",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UC San Francisco J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UC San Francisco as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UC San Francisco Scholar Requirements", "http://isso.ucsf.edu/immigration-visas/for-scholars/j-1-scholars/health-insurance-requirement")                        
                                ]));
                        endRow();
                    }
              },

        uci: {
                    windowTitle: "TaiAn Health Insurance for UC Irvine",
                    pageTitle: "TaiAn Health Insurance for UC Irvine",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UC Irvine J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UC Irvine as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UC Irvine Scholar Requirements", "http://www.ic.uci.edu/Scholars/J-1/healthinsurance.php")                        
                                ]));
                        endRow();
                    }
              },

        ucr: {
                    windowTitle: "TaiAn Health Insurance for UC Riverside",
                    pageTitle: "TaiAn Health Insurance for UC Riverside",
                    tabs: [
                            "pivot-home",
                            "pivot-international-studentandscholar",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentandscholarContent: function () {
                        startRow();
                        writeText("UC Riverside requirements for J1 scholar (not for enrolled students) health insurance are: 1. Medical benefits of $500,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $50,000; 4. Deductible not over $250. Taian Scholar/Student Insurance Plan B and Plan C with $500,000 benefit per illness or injury is the most affordable plan that meets the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage which you can send to school as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UC Riverside Scholar Requirements", "http://internationalcenter.ucr.edu/InternationalStudents/Pages/HealthandMoneyMatters.aspx")                        
                                ]));
                        endRow();
                        
                        startRow();
                            document.write(makeTable(2,
                            [
                            // Column headers:

                            "Monthly Price for Plan B ($500,000 per illness or injury)", "Monthly Price for Plan C ($500,000 benefit, $250 deductible)",


                            // Table within a table

                                makeTable(4, [
                                "Age",     "J1", "Spouse", "Children",
                                "&lt; 25", "$63.66",   "$63.66",   "$63.66",
                                "25-49",   "$82.90",   "$82.90",   "$63.66",
                                "50-64",   "$177.53",  "$177.53",   "$63.66"

                                ]), 

                                makeTable(4, [
                                "Age",     "J1", "Spouse", "Children",
                                "&lt; 30", "$59.00",   "$59.00",   "$53.00",
                                "30-39",   "$78.00",   "$78.00",   "$53.00",
                                "40-49",   "$119.00",  "$119.00",   "$53.00",
                                "50-59",   "$169.00",  "$169.00",   "$53.00"
                                ]),                                


                    

                                makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Patriot Exchange Program - Standard"), "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan C")+ "<br />" + loc("Patriot Travel Medical"), "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),


                                makeBuyURL(loc("Buy Group") + "<br />" + loc("Group for 2 or more"), "https://purchase.imglobal.com/quote/patriot_group_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Group")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699")                                 

                                   ])
                                    );
                        endRow();                        
                        
                    }
              },

        fordham: {
                    windowTitle: "TaiAn Health Insurance for Fordham University",
                    pageTitle: "TaiAn Health Insurance for Fordham University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-studentandscholar",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentandscholarContent: function () {
                        startRow();
                        writeText("Fordham University requirements for F1 international students or J1 scholar health insurance are: 1. Medical benefits of $500,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Taian Scholar/Student Insurance Plan B and Plan C with $500,000 benefit per illness or injury is the most affordable plan that meets the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Fordham University Student and Scholar Requirements", "http://www.fordham.edu/academics/office_of_the_provos/international_educat/office_for_internati/current_students/health_and_safety/health_insurance_inf/")                        
                                ]));
                        endRow();
                        
                        startRow();
                            document.write(makeTable(2,
                            [
                            // Column headers:

                            "Monthly Price for Plan B ($500,000 per illness or injury)", "Monthly Price for Plan C ($500,000 benefit, $500 deductible)",


                            // Table within a table

                                makeTable(4, [
                                "Age",     "J1", "Spouse", "Children",
                                "&lt; 25", "$63.66",   "$63.66",   "$63.66",
                                "25-49",   "$82.90",   "$82.90",   "$63.66",
                                "50-64",   "$177.53",  "$177.53",   "$63.66"

                                ]), 

                                makeTable(4, [
                                "Age",     "J1", "Spouse", "Children",
                                "&lt; 30", "$53.10",   "$53.10",   "$47.70",
                                "30-39",   "$70.20",   "$70.20",   "$47.70",
                                "40-49",   "$107.10",  "$107.10",   "$47.70",
                                "50-59",   "$152.10",  "$152.10",   "$47.70"
                                ]),                                


                    

                                makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Patriot Exchange Program - Standard"), "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan C")+ "<br />" + loc("Patriot Travel Medical"), "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),


                                makeBuyURL(loc("Buy Group") + "<br />" + loc("Group for 2 or more"), "https://purchase.imglobal.com/quote/patriot_group_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Group")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699")                                 

                                   ])
                                    );
                        endRow();                        
                        
                    }
              },              
              
              
        uiuc: {
                    windowTitle: "TaiAn Health Insurance for University of Illinois Urbana Champaign",
                    pageTitle: "TaiAn Health Insurance for University of Illinois Urbana Champaign",
                    tabs: [
                            "pivot-home",
                            "pivot-international-studentandscholar",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],

                    internationalStudentandscholarContent: function () {
                        startRow();
                        writeText("J SCHOLARS  (J STUDENTS AND F STUDENTS SCROLL DOWN THE PAGE)");                        
                        writeText("");
                        writeText("UIUC exchange visitors (J visa) have required health insurance coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Taian Scholar/Student Insurance Plan B ($100 deductible) and Plan C ($500 deductible) with $50,000 benefit per illness or injury is the most affordable plan that meets the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.");                        
                        document.write(makeBulletedListWithTitle("", [
                        
                                makeURL("UIUC Scholar Requirements", "http://isss.illinois.edu/download_forms/handbooks/j1_prog_handbook.pdf") 
                                ]));
                        endRow();

                        startRow();
                            document.write(makeTable(3,
                            [
                            // Column headers:

                            "Plan A (Student Health Advantage) $300,000 / $100 deductible / Maternity", "Plan B (Patriot Exchange) $50,000 / $100 deductible", "Plan C (Patriot Travel) $50,000 /$500 deductible",
                            "Monthly Premium", "Monthly Premium", "Monthly Premium",
                            "(J Scholar - Recommended if you want maternity benefit)", "(J Scholar - Recommended Plan)", "(J Scholar)",

                            // Table within a table

                                makeTable(4, [
                                "Age",     "J1 Scholar", "Spouse", "Children",
                                "&lt; 19", "$72",   "$386",   "$82",
                                "19-23",   "$95",   "$386",   "$82",
                                "24-30",   "$110",  "$426",   "$82",
                                "31-40",   "$197",  "$567",   "$82",
                                "41-50",   "$322",  "$586",   "$82",
                                "51-64",   "$430",  "$567",   "$82"
                                
                                ]), 

                                makeTable(4, [
                                "Age",     "J1 Scholar", "Spouse", "Children",
                                "&lt; 25", "$48.62",   "$48.62",   "$48.62",
                                "25-49",   "$63.37",   "$63.37",   "$48.62",
                                "50-64",   "$135.70",  "$135.70",   "$63.66"
                                ]),                                

                                makeTable(4, [
                                "Age",     "J1 Scholar", "Spouse", "Children",
                                "&lt; 30", "$33.30",   "$33.30",   "$30.60",
                                "30-39",   "$44.10",   "$44.10",   "$30.60",
                                "40-49",   "$65.70",  "$65.70",   "$30.60",
                                "50-59",   "$96.30",  "$96.30",   "$30.60"
                                ]),                                 

                    
                                makeBuyURL(loc("Buy Plan A") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Patriot Exchange Program - Standard"), "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan C")+ "<br />" + loc("Patriot Travel Medical"), "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),

                                "",
                                makeBuyURL(loc("Buy Group") + "<br />" + loc("Group for 2 or more"), "https://purchase.imglobal.com/quote/patriot_group_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Group")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699")                                 

                                   ])
                                    );
                        endRow();  

                        startRow();
                        writeText("");
                        writeText("J STUDENTS");                        
                        writeText("");
                        writeText("UIUC enrolled students with a J visa have required health insurance coverage as follows: 1. $500,000 per illness or injury; 2. Deductible not over $500; 3. Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Plan must be effective by the first day UIUC plan is effective (Must have coverage by January 18, 2014 for spring semester).  Taian Scholar/Student Insurance Plan B ($100 deductible) and Plan C ($500 deductible) with $500,000 benefit is the most affordable plan that meets the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members).  Students are required to complete an on line waiver.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UIUC Student Requirements", "http://www.si.uiuc.edu/Default.aspx?tabid=64")                      

                                ]));
                        endRow();

                        startRow();
                            document.write(makeTable(2,
                            [
                            // Column headers:

                            "Plan B (Patriot Exchange) $500,000 / $100 deductible", "Plan C (Patriot Travel) $500,000 /$500 deductible",
                            "Monthly Premium", "Monthly Premium", 
                            "(J Student - Recommended Plan)", "(J Student - Recommended Plan)",

                            // Table within a table



                                makeTable(4, [
                                "Age",     "J1 Student", "Spouse", "Children",
                                "&lt; 25", "$63.66",   "$63.66",   "$63.66",
                                "25-49",   "$82.90",   "$82.90",   "$63.66",
                                "50-64",   "$177.53",  "$177.53",   "$63.66"
                                ]),                                

                                makeTable(4, [
                                "Age",     "J1 Student", "Spouse", "Children",
                                "&lt; 30", "$53.10",   "$53.10",   "$47.70",
                                "30-39",   "$70.20",   "$70.20",   "$47.70",
                                "40-49",   "$107.10",  "$107.10",    "$47.70",
                                "50-59",   "$152.10",  "$152.10",   "$47.70"
                                ]),                                 

                    

                                makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Patriot Exchange Program - Standard"), "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan C")+ "<br />" + loc("Patriot Travel Medical"), "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),


                                makeBuyURL(loc("Buy Group") + "<br />" + loc("Group for 2 or more"), "https://purchase.imglobal.com/quote/patriot_group_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Group")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699")                                 

                                   ])
                                    );
                        endRow();
                        
                        startRow();
                        writeText("");
                        writeText("F STUDENTS");                        
                        writeText("");
                        writeText("UIUC enrolled F visa international students have required health insurance coverage as follows: 1. $500,000 per illness or injury; 2. Not over $2,000 deductible; 3. Plan must be effective by the first day UIUC plan is effective (Must have coverage by January 18, 2014 for spring semester).  Taian Scholar/Student Insurance Plan B ($100 deductible) and Plan C ($1,000 deductible) with $500,000 benefit per illness or injury is the most affordable plan that meets the school requirements (which plan is more affordable depends on your age and family members).  Students are required to complete an on line waiver.");                        
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UIUC Student Requirements", "http://www.si.uiuc.edu/Default.aspx?tabid=64")                      

                                ]));
                        endRow();

                        startRow();
                            document.write(makeTable(3,
                            [
                            // Column headers:

                            "Plan B (Patriot Exchange) $500,000 / $100 deductible", "Plan C (Patriot Travel) $500,000 /$500 deductible", "Plan C (Patriot Travel) $500,000 / $1000 deductible",
                            "Monthly Premium", "Monthly Premium", "Monthly Premium",
                            "(F Student - Recommended Plan)", "(F Student - Recommended Plan)", "(F Student)",

                            // Table within a table



                                makeTable(4, [
                                "Age",     "F1 Student", "Spouse", "Children",
                                "&lt; 25", "$63.66",   "$63.66",   "$63.66",
                                "25-49",   "$82.90",   "$82.90",   "$63.66",
                                "50-64",   "$177.53",  "$177.53",   "$63.66"
                                ]),                                

                                makeTable(4, [
                                "Age",     "F1 Student", "Spouse", "Children",
                                "&lt; 30", "$53.10",   "$53.10",   "$47.70",
                                "30-39",   "$70.20",   "$70.20",   "$47.70",
                                "40-49",   "$107.10",  "$107.10",    "$47.70",
                                "50-59",   "$152.10",  "$152.10",   "$47.70"
                                ]),       

                                makeTable(4, [
                                "Age",     "F1 Student", "Spouse", "Children",
                                "&lt; 30", "$47.20",   "$47.20",   "$42.40",
                                "30-39",   "$62.40",   "$62.40",   "$42.40",
                                "40-49",   "$95.20",  "$95.20",    "$42.40",
                                "50-59",   "$135.20",  "$135.20",   "$42.40"
                                ]),                                      

                    

                                makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Patriot Exchange Program - Standard"), "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan C")+ "<br />" + loc("Patriot Travel Medical"), "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan C")+ "<br />" + loc("Patriot Travel Medical"), "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),

                                makeBuyURL(loc("Buy Group") + "<br />" + loc("Group for 2 or more"), "https://purchase.imglobal.com/quote/patriot_group_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Group")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699"),                                 
                                makeBuyURL(loc("Buy Group")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699")
                                

                                
                                   ])
                                    );
                        endRow();                        
                        
                        
                    }
              },
                        
    
              
              
        ucsb: {
                    windowTitle: "TaiAn Health Insurance for UC Santa Barbara",
                    pageTitle: "TaiAn Health Insurance for UC Santa Barbara",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UC Santa Barbara J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UC Santa Barbara as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UC Santa Barbara Scholar Requirements", "http://oiss.sa.ucsb.edu/scholars/Insurance.aspx")                        
                                ]));
                        endRow();
                    }
              },

        ucsc: {
                    windowTitle: "TaiAn Health Insurance for UC Santa Cruz",
                    pageTitle: "TaiAn Health Insurance for UC Santa Cruz",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UC Santa Cruz J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UC Santa Cruz as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UC Santa Cruz Scholar Requirements", "http://ieo.ucsc.edu/intl-scholars/j1/post-arrival-insurance.html#Federal")                        
                                ]));
                        endRow();
                    }
              },              
              
        uic: {
                    windowTitle: "TaiAn Health Insurance for University of Illinois at Chicago",
                    pageTitle: "TaiAn Health Insurance for University of Illinois at Chicago",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Illinois at Chicago J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Illinois at Chicago as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("University of Illinois at Chicago Scholar Requirements", "http://www.ois.uic.edu/cms/one.aspx?portalId=1138157&pageId=1143737")                        
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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

        

              
        uga: {
                    windowTitle: "TaiAn Health Insurance for University of Georgia",
                    pageTitle: "TaiAn Health Insurance for University of Georgia",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet University of Washington enrolled international student standards and J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Washington as proof of insurance.");
                        writeText("Enrolled international students are allowed to waive only if they are an exchange student visiting through an official exchange program.  They are required to carry $200,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.");
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Florida State University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Florida State University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Florida State University Scholar Requirements", "http://www.cge.fsu.edu/intlScholars/healthinsurance.cfm")                        
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
 

        msu: {
                    windowTitle: "TaiAn Health Insurance for Michigan State University",
                    pageTitle: "TaiAn Health Insurance for Michigan State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                    windowTitle: "TaiAn Health Insurance for New York University and NYU Poly",
                    pageTitle: "TaiAn Health Insurance for New York University and NYU Poly",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet NYU and NYU Poly J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to NYU as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("NYU and NYU Poly Scholar Requirements", "http://www.nyu.edu/global/international-immigration-services/faculty-and-scholars/inbound-to-nyc/pre-arrival/exchange-visitor/health-insurance-requirement.html")                              
                                ]));
                        endRow();
                    }
              },  
              
        newschool: {
                    windowTitle: "TaiAn Health Insurance for New School",
                    pageTitle: "TaiAn Health Insurance for New School",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet New School J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to New School as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("New School Scholar Requirements", "https://www.newschool.edu/international-student-services/resources/health-insurance-for-internationals/")                              
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Purdue enrolled international student standards and J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Purdue as proof of insurance.");
                        writeText("Enrolled international students are allowed to waive only if they are an exchange student visiting through an official exchange program. They are required to carry $200,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards. You need to complete the Waiver Form, submit it along with your I-20(or DS2019), insurance ID card and Visa Letter.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Purdue University Scholar Requirements", "http://www.iss.purdue.edu/Current/J1/HealthInsurance.cfm"),
                                makeURL("Purdue University Student Requirements", "http://www.purdue.edu/push/insurance/waivers.shtml")                                
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet your school J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.");
                        endRow();
                    }
              },  

        usdosjapan: {
                    windowTitle: "TaiAn International Health Insurance",
                    pageTitle: "TaiAn International Health Insurance",
                    contactInfo: ["Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8259 (English)",
                             "Call from Japan - 9:00AM to 12:30PM - Includes weekend:(317)318-8259 (English)",
                             "Skype: chris.lee136",
                             "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>"
                            ],  
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
      
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet your school J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.");
                        endRow();
                        startRow();
                        writeText("Call from Japan - 9:00AM to 12:30PM - Includes weekend:(317)318-8259 (English)");
                        endRow();
                    }
              }, 

        usdoskorea: {
                    windowTitle: "TaiAn International Health Insurance",
                    pageTitle: "TaiAn International Health Insurance",
                    contactInfo: ["Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8259 (English)",
                             "Call from Korea - 9:00AM to 12:30PM - Includes weekend:(317)318-8259 (English)",
                             "Skype: chris.lee136",
                             "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>"
                            ],  
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet your school J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.");
                        endRow();
                        startRow();
                        writeText("Call from Korea - 9:00AM to 12:30PM - Includes weekend:(317)318-8259 (English)");
                        endRow();                        
                    }
              }, 

        usdosindia: {
                    windowTitle: "TaiAn International Health Insurance",
                    pageTitle: "TaiAn International Health Insurance",
                    contactInfo: ["Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8259 (English)",
                             "Call from India - 7:00AM to 9:00AM, 7:00PM-9:00PM - Includes weekend:(317)318-8259 (English)",
                             "Skype: chris.lee136",
                             "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>"
                            ],                      
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet your school J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.");
                        endRow();
                        startRow();
                        writeText("Call from India - 7:00AM to 9:00AM, 7:00PM-9:00PM - Includes weekend:(317)318-8259 (English)");
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-international-studentandscholar",                            
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    internationalStudentandscholarContent: function () {
                        startRow();
                        writeText("J-1 scholars including visiting scholars, visiting graduate researchers or non-degree students at UCLA (other than those visitors described below) are required to enroll OR opt out of the Visiting Scholar Injury and Sickness Insurance Plan (VSISP) through Garnett-Powers & Associates. To waive VSISP plan, J-1 scholars are required to show proof of health insurance with the following minimum coverage:");
                        document.write(makeBulletedListWithTitle("", [
                                "$100,000 per accident/illness in medical coverage",
                                "An annual deductible of no more than $250",
                                "Coinsurance that does not exceed 25%",
                                "Medical evacuation up to $10,000",
                                "Repatriation up to $7,500"                                
                                ]));
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Waiver information", "http://www.garnett-powers.com/academics/ucla/index.htm")
                                ]));

                        writeText("The groups exempt from VSISP include; (A)  Postdoctoral Scholars - required to enroll in the Postdoctoral Scholar Benefits Plan (PSBP); (B)  Degree, EAP, UCLA Exchange (IEO) students - must enroll in the UCLA USHIP  plan; (C)  UCLA Staff & Faculty.");
                     
                        writeText("Plan A Student Health Advantage, Plan B Patriot Exchange with $250,000 benefit and Plan C Patriot Travel Medical with $100,000 benefit and $250 deductible meet the waiver requirements for UCLA scholars subject to VSISP coverage. Plan A may be best for someone seeking maternity benefits.  Plan B and Plan C are the most affordable plans that meets the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage including a visa letter which you can send to UCLAVSISP@Garnett-Powers.com for a waiver. After receiving waiver confirmation by email, J-1 scholar brings the waiver confirmation and proof of medical insurance to check-in.");

                        startRow();
                            document.write(makeTable(3,
                            [
                            // Column headers:

                            "Plan A (Student Health Advantage) $300,000 / $100 deductible / Maternity", "Plan B (Patriot Exchange) $250,000 / $100 deductible", "Plan C (Patriot Travel) $100,000 / $250 deductible", 
                            "Monthly Premium", "Monthly Premium", "Monthly Premium",                            
             


                            // Table within a table

                                makeTable(4, [
                                "Age",     "J1 Scholar", "Spouse", "Children",
                                "&lt; 19", "$72",   "$386",   "$82",
                                "19-23",   "$95",   "$386",   "$82",
                                "24-30",   "$110",  "$426",   "$82",
                                "31-40",   "$197",  "$567",   "$82",
                                "41-50",   "$322",  "$586",   "$82",
                                "51-64",   "$430",  "$567",   "$82"
                                
                                ]), 
                                
                                makeTable(4, [
                                "Age",     "J1 Scholar", "Spouse", "Children",
                                "&lt; 25", "$60.36",   "$60.36",   "$60.36",
                                "25-49",   "$78.59",   "$78.59",   "$60.36",
                                "50-64",   "$168.27",  "$168.27",   "$60.36"
                                ]),                                 
                            
                                loc("$100,000 benefit $250 deductible") +                              
                                makeTable(4, [
                                "Age",     "J1", "Spouse", "Children",
                                "&lt; 30", "$46.00",   "$46.00",   "$41.00",
                                "30-39",   "$62.00",   "$62.00",   "$41.00",
                                "40-49",   "$90.00",  "$90.00",   "$41.00"

                                ]) +  

                                loc("$100,000 benefit $0 deductible") +       
                                makeTable(4, [
                                "Age",     "J1", "Spouse", "Children",
                                "&lt; 30", "$57.50",   "$57.50",   "$51.25",
                                "30-39",   "$77.50",   "$77.50",   "$51.25",
                                "40-49",   "$112.50",  "$112.50",   "$51.25"
                                ]), 
                    
                                makeBuyURL(loc("Buy Plan A") + "<br />" + loc("Student Health Advantage"), "https://purchase.imglobal.com/quote/student_health_advantage?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan B") + "<br />" + loc("Patriot Exchange Program - Standard"), "https://purchase.imglobal.com/quote/patriot_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Plan C")+ "<br />" + loc("Patriot Travel Medical"), "https://purchase.imglobal.com/quote/patriot?imgac=80000699"),

                                "",
                                makeBuyURL(loc("Buy Group") + "<br />" + loc("Group for 2 or more"), "https://purchase.imglobal.com/quote/patriot_group_exchange?imgac=80000699"),
                                makeBuyURL(loc("Buy Group")+ "<br />" + loc("Group for 5 or more"), "https://purchase.imglobal.com/Quote/patriot_group/pre-quote?imgac=80000699")                                 

             

                                   ])
                                    );
                                endRow();                 
                        
                                startRow();
                                writeText("");
                                endRow();                        
                          
                                startRow();
                                writeText(makeURL("UCLA Scholar Requirements", "http://www.internationalcenter.ucla.edu/home/J1Visa/74/75/Overview#divHealth"));
                                endRow();                               
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Indiana University - Bloomington allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to IU Bloomington to waive the school plan.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("IU Bloomington Student Requirements", "http://ois.iu.edu/living-working/health/insurance/waiver.shtml"),
                                makeURL("IU Bloomington Scholar Requirements", "http://ois.iu.edu/living-working/health/insurance/index.shtml")                               
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UT Austin enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Austin as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UT Austin Student Requirements", "http://world.utexas.edu/forms/isss/PVT_Waiver.pdf"), 
                                makeURL("UT Austin Scholar Requirements", "http://world.utexas.edu/isss/insurance/vs-overview")                               
                                ]));
                        endRow();
                    }
              },   

        utdallas: {
                    windowTitle: "TaiAn Health Insurance for UT Dallas",
                    pageTitle: "TaiAn Health Insurance for UT Dallas",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UT Dallas enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Dallas as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UT Dallas Student Requirements", "http://www.utdallas.edu/healthcenter/insurance/intl-waivers.html"), 
                                makeURL("UT Dallas Scholar Requirements", "http://www.utdallas.edu/hrm/forms/insreqvisitors.pdf")                               
                                ]));
                        endRow();
                    }
              },              
              
        uta: {
                    windowTitle: "TaiAn Health Insurance for UT Arlington",
                    pageTitle: "TaiAn Health Insurance for UT Arlington",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet UT Arlington enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Arlington as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("UT Arlington Student Requirements", "http://www.uta.edu/oie/?page=forms&form=HealthInsuranceWaiver"), 
                                makeURL("UT Arlington Scholar Requirements", "http://www.uta.edu/oie/?page=JScholar")                               
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                          
                    internationalStudentContent: function () {
                        startRow();
                        writeText("Taian Scholar/Student Insurance Plan A and Plan B meet Yale University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Yale University as proof of insurance.");
                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Yale University Student requirements", "http://www.yale.edu/oiss/life/practical/health/index.html"), 
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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

        img: {
                    windowTitle: "TaiAn International Health Insurance",
                    pageTitle: "TaiAn International Health Insurance",
                    tabs: [
                            "pivot-home",
                            "pivot-international-scholar",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ],
                    internationalScholarContent: function () {

                        if (!langIsChinese()) {
                            startRow();
                            writeText(makeURL("IMG Endorsed Independent Chinese Sales Center Click Here", "#icnimga"));
                            endRow();
                        }      
                    
                        startRow();
                        writeText("Taian International Health Insurance provides International Scholar Insurance for US J1 visa holders and their dependents (J2 visa holders).  All J visa holders are required to meet the US Department of State (USDOS) requirements for the duration of their visa. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the USDOS requirements. Plan A also meets the requirements and has affordable maternity coverage. You can click the links below to see your school requirements and US Department of State requirements.");
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
                            "pivot-travel-insurance",
                            "pivot-aboutus"
                          ]
              },              
              
        springivy: {
                    contactInfo: ["Call from US: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English)",
                                  "Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am)",
                                  "WeChat ID: wxid_taian_usa",
                                  "Skype: chris.lee136",
                                  "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>"
                                 ],
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-aboutus"
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
