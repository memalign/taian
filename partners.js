
function getPartnership(partner) {
    var defaultPartner = "taian";


    var partnerShips = {

        taian: {
                    windowTitle: "TaiAn Financial Health Insurance",
                    pageTitle: "TaiAn Financial",
                    logoImage: "longevity.gif",
                    logoHeight: "30",
                    logoWidth: "30",
                    contactInfo: ["Call: +1 (317) 318-8258 (Chinese)",
                                  "Call: +1 (317) 318-8259 (English)",
                                  "WeChat ID: wxid_taian_usa",
                                  "Skype: chris.lee136",
                                  "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>",
                                 ],
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                            "pivot-indiana-residents",
                            "pivot-texas-residents",
                            "pivot-life-insurance",
                            "pivot-partnerships",
                          ],
               },

        using: {
                    windowTitle: "Using Education Group Insurance",
                    pageTitle: "Using Health Insurance",
                    logoImage: "partnerLogos/using.gif",
                    logoHeight: "36",
                    logoWidth: "70",
                    contactInfo: ["电话: 626-532-7811, 626-264-0123",
                                  "传真: 626-254-0286",
                                  "Email: <a href=\"mailto:ushres123@gmail.com\">ushres123@gmail.com</a>",
                                 ],
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },

        mei: {
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },              

        iupui: {
                    windowTitle: "TaiAn Financial Health Insurance for IUPUI",
                    pageTitle: "TaiAn Financial Health Insurance for IUPUI",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },   

       jhmi: {
                    windowTitle: "TaiAn Financial Health Insurance for JHMI",
                    pageTitle: "TaiAn Financial Health Insurance for JHMI",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },  

       psu: {
                    windowTitle: "TaiAn Financial Health Insurance for Pennsylvania State University",
                    pageTitle: "TaiAn Financial Health Insurance for Pennsylvania State University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },                

        usc: {
                    windowTitle: "TaiAn Health Insurance for University of Southern California",
                    pageTitle: "TaiAn Health Insurance for University of Southern California",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },    

        uiuc: {
                    windowTitle: "TaiAn Health Insurance for University of Illinois Urbana Champaign",
                    pageTitle: "TaiAn Health Insurance for University of Illinois Urbana Champaign",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },        

        nyu: {
                    windowTitle: "TaiAn Health Insurance for New York University",
                    pageTitle: "TaiAn Health Insurance for New York University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },  

        purdue: {
                    windowTitle: "TaiAn Health Insurance for Purdue University",
                    pageTitle: "TaiAn Health Insurance for Purdue University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },   

        columbia: {
                    windowTitle: "TaiAn Health Insurance for Columbia University",
                    pageTitle: "TaiAn Health Insurance for Columbia University",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },      

        ucla: {
                    windowTitle: "TaiAn Health Insurance for UCLA",
                    pageTitle: "TaiAn Health Insurance for UCLA",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },      
              
        ucdav: {
                    windowTitle: "TaiAn Health Insurance for UC Davis",
                    pageTitle: "TaiAn Health Insurance for UC Davis",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],                          
              },                  
              
        iu: {
                    windowTitle: "TaiAn Health Insurance for IU Bloomington",
                    pageTitle: "TaiAn Health Insurance for IU Bloomington",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },                  

        utaustin: {
                    windowTitle: "TaiAn Health Insurance for UT Austin",
                    pageTitle: "TaiAn Health Insurance for UT Austin",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },                                
              
        univtemplate: {
                    windowTitle: "TaiAn Health Insurance for Univtemplate",
                    pageTitle: "TaiAn Health Insurance for Univtemplate",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },                  
              
        ucdavis: {
                    windowTitle: "TaiAn Financial Health Insurance for UC Davis J Scholars",
                    pageTitle: "TaiAn Financial Health Insurance for UC Davis J Scholars",
                    tabs: [
                            "pivot-international-scholar",
                          ],
                    internationalScholarContent: function () {
                        startRow();
                        writeText("Taian International Health Insurance provides International Scholar Insurance for US visa scholars (J visa). Taian Scholar Insurance Plan A and Plan B meet UC Davis scholar insurance standards and are more affordable.  UC Davis requires a minimum of $50,000.00 per illness or injury and our Plan B Standard Plan meets this requirement.");

                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Blah Blah J requirements", "http://google.com"),
                                makeURL("Blah Blah J2 requirements", "http://google.com"),
                                ]));
                        endRow();
                    },

                    internationalStudentContent: function () {
                        startRow();
                        writeText("Blah blah blah international students blah blah.");

                        document.write(makeBulletedListWithTitle("", [
                                makeURL("Blah Blah J requirements", "http://google.com"),
                                makeURL("Blah Blah J2 requirements", "http://google.com"),
                                ]));
                        endRow();
                    },
              },                            

        econnect: {
                    windowTitle: "TaiAn Financial Health Insurance for econnectionchina",
                    pageTitle: "TaiAn Financial Health Insurance for econnectionchina",
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },              
              
        springivy: {
                    contactInfo: ["Call: 1-317-318-8258 (Chinese)",
                                  "Call: 1-317-318-8259 (English)",
                                  "WeChat ID: wxid_taian_usa",
                                  "Skype: chris.lee136",
                                  "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>",
                                 ],
                    tabs: [
                            "pivot-home",
                            "pivot-international-student",
                            "pivot-global-medical",
                            "pivot-travel-insurance",
                          ],
              },
              
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
