
function switchLang(newLang) {
    var currLang = getPageAttribute("l");
    if (currLang == newLang)
        return;

    updateHash("l", newLang);
    document.location.reload(true)
}

function langIsChinese() {
    var lang = getPageAttribute("l");
    return (lang == "cn");
}

function langTag() {
    if (langIsChinese()) {
        return "cn";
    }
    
    return "en";
}

var l = {};
l['Why Should I buy IMG insurance through TaiAn?'] = "通过泰安购买IMG保险有什么优势？";
l['International Medical Group (IMG) is a worldwide leader in the International medical insurance business, and TaiAn Financial LLC is leading producer for IMG.  TaiAn\'s custom product offering and extended service hours enable us provide our customers industry leading, professional, prompt service and make their insurance experience as easy as possible.'] = "来美访学，最好选择美国当地的保险和可以提供中文服务的代理。在美国医院就诊时，医院时常需要与保险公司或代理打电话确认保险。IMG是美国领先的国际医疗保险公司，A.M.Best评级为A(优秀)。IMG授权美国泰安公司为目前唯一的独立的IMG中文销售中心。IMG还与泰安共同开发了专为泰安客户使用的保险计划，使得泰安客户有了更多的选择。通过泰安购买IMG医疗保险，你得到的是美国本土公司的优质保险和免费快捷的中文服务。 ";
l['Does Plan B meet US Department of State Insurance (USDOS) Requirements for J visa?'] = "泰安保险计划B是否满足美国国务院对持J1签证医疗保险的最低要求？";
l['US Department of State Insurance Requirements for J visa:'] = "美国国务院对J签证的学生学者及家属医疗保险的最低要求：";
l['1) Medical benefits of at least $50,000 per accident or illness'] = "1) Medical benefits of at least $50,000 per accident or illness (每次生病或受伤的最高赔付至少为$50,000)";
l['2) Repatriation of remains in the amount of $7,500'] = "2) Repatriation of remains in the amount of $7,500 (遗体返送$7,500)";
l['3) Expenses associated with the medical evacuation of the exchange visitor to his or her home country in the amount of $10,000'] = "3) Expenses associated with the medical evacuation of the exchange visitor to his or her home country in the amount of $10,000 (紧急救护$10,000)";
l['4) A deductible not to exceed $500 per accident or illness'] = "4) A deductible not to exceed $500 per accident or illness (每次生病或受伤的免赔额不超过$500)";
l['5) An insurance policy secured to meet the benefits requirements must be underwritten by an insurance corporation with an A.M. Best rating of \"A-\" or above, an Insurance Solvency International, Ltd. (ISI) rating of \"A-I\" or above, a Standard and Poor\'s Claims Paying Ability rating of \"A-\" or above, or a Weiss Research, Inc. rating of B+ or above'] = "5) An insurance policy secured to meet the benefits requirements must be underwritten by an insurance corporation with an A.M. Best rating of \"A-\" or above, an Insurance Solvency International, Ltd. (ISI) rating of \"A-I\" or above, a Standard and Poor's Claims Paying Ability rating of \"A-\" or above, or a Weiss Research, Inc. rating of B+ or above (保险公司的评级需要达到如下之一：A.M.Best公司评级“A-”或以上，ISI公司评级“A-1”或以上，Standard & Poor's 公司评级“A-”或以上， Weiss Research 公司评级“B+”或以上)";
l['All the options in TaiAn Plan B meet USDOS requirements.  The insurer rating by A.M. Best is \"A\", and also meets the requirements.'] = "泰安计划B任何选择都符合国务院对J签证保险的最低要求。保险公司被A.M.Best公司评级为“A-”";
l['Who is eligible to buy Plan B and what do I need to know before purchase?'] = "哪些人可以购买泰安保险计划B，购买时有哪些注意事项？";
l['TaiAn Plan B is designed specifically for international scholars and students (F1,F2,J1,J2,OPT) and their dependents.'] = "泰安保险计划B适用于全美F1留学生、J1访问学者、OPT阶段的留学生以及持F2/J2签证的家属。";
l['F1 College Student: You need to confirm TaiAn Plan B meets your school F1 insurance waiver requirements.'] = "F1高校国际学生:  需要确认此保险是否符合你校对F1保险的waiver requirements，确认符合保险要求后即可购买。";
l['J1 Visiting Scholar: J1 scholar\'s insurance needs to meet USDOS standard and school standard. Since Plan B meets the USDOS standard, you only need to confirm Plan B also meets your school J1 insurance requirements.'] = "J1访问学者:  J1购买的保险需要符合国务院标准和学校对J1保险的标准。泰安计划B任何选择都符合国务院对J签证保险的要求。泰安计划B可以满足绝大多数学校对访问学者的保险要求，确认符合学校标准后即可购买。";
l['OPT student: You can buy Plan B with any options.'] = "OPT实习期的国际学生:  可直接购买。";
l['F1/J1 high school student or ESL student:  You can buy after confirming school requirements.'] = "F1/J1高中或语言学校国际学生:  确认此保险满足学校要求后即可购买。";
l['F2/J2 visa holder: You can buy with your F1/J1. If the J1/F1 visa holder has purchased school insurance the J2/F2 dependents can purchase TaiAn Plan B alone.  If the J1/F1 visa holder has purchased TaiAn Plan B and his/her J2/F2 dependents come later, they can purchase Plan B alone for different dates.'] = "F1/J1学生学者的家属：泰安保险计划B适合F2/J2签证持有者。如果J1/F1购买了学校强制性保险，其J2/F2可以单独购买计划B。如果J1/F1已经购买了泰安计划B，J2/F2随后来美，这时J2/F2也可以单独购买不同日期的计划B. ";
l['How do I make sure Plan B meets my school requirement?'] = "如何查询泰安计划B是否符合学校对学生学者保险的具体要求？";
l['1) Click on the link:  '] = "1) 点击链接:  ";
l['Find your school insurance requirements and most affordable plan here'] = "全美各校F和J签证保险的标准以及符合各标准的保险计划";
l['2) Find your school in the first column on the chart, click on the corresponding fourth column that will show you what insurance plan meets your school requirements'] = "2) 在第一栏“学校名称”中查找你的学校，点击对应的第四栏，查看符合该校要求的保险";
l['3) You can also send email with your school requirements to TaiAn at <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>'] = "3) 你也可以将学校对你的保险要求Email给泰安<a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>";
l['TaiAn will help you to figure it out.'] = "泰安公司协助你确认是否符合学校要求";
l['How do I buy Plan B and how long will it take to receive the fulfillment?'] = "如何购买?  提交申请后需要多久可以收到保单？";
l['Buy Plan B online and receive the fulfillment instantly.  Purchase steps are as follows:'] = "网上购买，即刻收到Email电子保单。具体操作步骤如下：";
l['1) Click on the link:  '] = "1) 点击链接，阅读保险介绍和手册:  ";
l['2) Read Plan B benefits chart and brochure'] = "2)  阅读购买计划B的 ";
l['3) Click on '] = "3) 点击 ";
l['Buy Plan B  TaiAn Patriot Exchange'] = "购买计划 B TaiAn Patriot Exchange";
l['4) According to your school requirements and your own needs, select a deductible and benefit maximum.'] = "4)  填表时，根据学校要求和你自己的需要选择免赔额和最高赔付限额";
l['5) Payment is on the last page of application. You can use a credit card or a debit card which has a Visa, MasterCard or American Express logo to pay.  Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address.'] = "5)  申请表的最后一页是付款信息，用信用卡或印有Visa, MasterCard或American Express字样的借记卡付款。Billing address 是你信用卡开户时所用的地址。保险公司不会将账单寄到这个地址，要求填写Billing address是为了确认信用卡的正确性。 注意输入电子签名时需要与信用卡上的姓名一样";
l['6) After you submit an application online successfully, you will receive an Email from IMG in a few minutes (If you do not receive it, please check your spam), which contains your insurance card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school to prove that you have qualified medical insurance.'] = "6)  网上成功提交申请几分钟后你就会收到Email电子保单(如果没有收到，请检查垃圾邮件)，其中含有保险卡(ID Card)和确认信(Visa Letter)。将电子保单和确认信发给学校证明已经购买符合学校标准的保险。24小时之内你还会收到泰安的中文Email，其中有如何使用保险的说明。";


//var locLog = {};
function loc(str) {

    // var output = ""; for (var key in locLog) { if (key.indexOf('<') == -1) { output += "l['"+key+"'] = \"\";\n"; } }
    // %s/\\"/"/g
    // %s/\\n/\r/g
    //locLog[str] = "unknown";

    if (!langIsChinese() || !l[str])
        return str;
    return l[str];
}

