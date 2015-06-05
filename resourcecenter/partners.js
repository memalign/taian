
function getPartnership(partner) {
    var defaultPartner = "taian";


    var partnerShips = {

        taian: {
                    windowTitle: "TaiAn International Health Insurance | 泰安国际医疗保险",
                    pageTitle: "TaiAn International Health Insurance",
                    logoImage: "../longevity.gif",
                    logoHeight: "30",
                    logoWidth: "30",
                    contactInfo: ["Call from US - 8:00AM to 9:00PM Eastern time: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English)",
                                  "Call from China: 950-4044-2336 (Chinese, Beijing time  8:00pm-12:00am, no long distance charges)",
                                  "WeChat ID: wxid_taian_usa",
                                  "Business Address: D200 301 E Carmel Drive - Carmel, IN 46032 - USA",
                                  "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>"
                                 ],
                    tabs: [
                            "pivot-qanda-plana",
                            "pivot-qanda-planb",
                            "pivot-qanda-travel"                            
                          ]
                            
               },
 
        nysccsf: {
                    windowTitle: "TaiAn International Health Insurance | 美国泰安国际医疗保险",
                    pageTitle: "TaiAn International Health Insurance - IMG Endorsed Independent Chinese Sales Center",

                    tabs: [
                            "pivot-qanda-plana",
                            "pivot-qanda-planb",
                            "pivot-qanda-travel"
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
