
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
                                  "Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>",
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
