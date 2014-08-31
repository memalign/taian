
function getPartnership(partner) {
    var defaultPartner = "taian";


    var partnerShips = {

        taian: {
                    windowTitle: "TaiAn International Health Insurance | 泰安国际医疗保险",
                    pageTitle: "TaiAn International Health Insurance",
                    logoImage: "../longevity.gif",
                    logoHeight: "30",
                    logoWidth: "30",
                    contactInfo: ["Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English)",
                                  "Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges)",
                                  "WeChat ID: wxid_taian_usa",
                                  "Skype: chris.lee136",
                                  "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>"
                                 ],
                    tabs: [
                            "pivot-qanda-plana",
                            "pivot-qanda-planb"
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
