
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
l['TaiAn Plan B is designed specifically for international scholars, students and their dependents (F1,F2,J1,J2,OPT).'] = "泰安保险计划B适用于全美F1留学生、J1访问学者、OPT阶段的留学生以及持F2/J2签证的家属。";
l['F1 College Student: You need to confirm TaiAn Plan B meets your school F1 insurance waiver requirements.'] = "F1高校国际学生:  需要确认此保险是否符合你校对F1保险的waiver requirements，确认符合保险要求后即可购买。";
l['J1 Visiting Scholar: J1 scholar\'s insurance needs to meet USDOS standard and school standard. Since Plan B meets the USDOS standard, you only need to confirm Plan B also meets your school J1 insurance requirements.'] = "J1访问学者:  J1购买的保险需要符合国务院标准和学校对J1保险的标准。泰安计划B任何选择都符合国务院对J签证保险的要求。泰安计划B可以满足绝大多数学校对访问学者的保险要求，确认符合学校标准后即可购买。";
l['OPT student: You can buy Plan B with any options.'] = "OPT实习期的国际学生:  可直接购买。";
l['F1/J1 high school student or ESL student:  You can buy after confirming school requirements.'] = "F1/J1高中或语言学校国际学生:  确认此保险满足学校要求后即可购买。";
l['F2/J2 visa holder: You can buy with your F1/J1. If the J1/F1 visa holder has purchased school insurance the J2/F2 dependents can purchase TaiAn Plan B alone.  If the J1/F1 visa holder has purchased TaiAn Plan B and his/her J2/F2 dependents come later, they can purchase Plan B alone for different dates.'] = "F1/J1学生学者的家属：F2/J2家属可以与F1/J1主申请人一起购买计划B。如果J1/F1购买了学校强制性保险，其J2/F2可以单独购买计划B。如果J1/F1已经购买了泰安计划B，J2/F2随后来美，这时J2/F2也可以单独购买不同日期的计划B.";
l['How do I make sure Plan B meets my school requirement?'] = "如何查询泰安计划B是否符合学校对学生学者保险的具体要求？";
l['Find your school insurance requirements and most affordable plan here'] = "全美各校F和J签证保险的标准以及符合各标准的保险计划";
l['2) Find your school in the first column on the chart, click on the corresponding fourth column that will show you what insurance plan meets your school requirements'] = "2) 在第一栏“学校名称”中查找你的学校，点击对应的第四栏，查看符合该校要求的保险";
l['3) You can also send email with your school requirements to TaiAn at <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>'] = "3) 你也可以将学校对你的保险要求Email给泰安<a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>";
l['TaiAn will help you to figure it out.'] = "泰安公司协助你确认是否符合学校要求";
l['How do I buy Plan B and how long will it take to receive the fulfillment?'] = "如何购买?  提交申请后需要多久可以收到保单？";
l['Buy Plan B online and receive the fulfillment instantly.  Purchase steps are as follows:'] = "网上购买，即刻收到Email电子保单。具体操作步骤如下：";
l['1) Click on the link:  '] = "1) 点击链接:  ";
l['2) Read Plan B benefits chart and brochure'] = "2) 阅读购买计划B的 \"中文填表指南\"";
l['3) Click on '] = "3) 点击 ";
l['4) According to your school requirements and your own needs, select a deductible and benefit maximum.'] = "4)  填表时，根据学校要求和你自己的需要选择免赔额和最高赔付限额";
l['5) Payment is on the last page of application. You can use a credit card or a debit card which has a Visa, MasterCard or American Express logo to pay.  Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address.'] = "5)  申请表的最后一页是付款信息，用信用卡或印有Visa, MasterCard或American Express字样的借记卡付款。Billing address 是你信用卡开户时所用的地址。保险公司不会将账单寄到这个地址，要求填写Billing address是为了确认信用卡的正确性。 注意输入电子签名时需要与信用卡上的姓名一样";
l['6) After you submit an application online successfully, you will receive an Email from IMG in a few minutes (If you do not receive it, please check your spam), which contains your insurance card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school to prove that you have qualified medical insurance.'] = "6)  网上成功提交申请几分钟后你就会收到Email电子保单(如果没有收到，请检查垃圾邮件)，其中含有保险卡(ID Card)和确认信(Visa Letter)。将电子保单和确认信发给学校证明已经购买符合学校标准的保险。24小时之内你还会收到泰安的中文Email，其中有如何使用保险的说明。";
l['How do I buy Group Plan B to get 10% off?'] = "如何购买团体保险获得10%优惠";
l['TaiAn Patriot Exchange Group plan is available for groups of 2 or more primary applicants (F1/J1).'] = "两个或两个以上的主申请人(F1/J1)可以组团购买泰安团体计划B。每个主申请人和家属都享受10%的优惠。购买操作如下： ";
l['2) Click on '] = "2) 点击 "
l[' after reading Plan B benefits chart and brochure.'] = "阅读购买团体计划B的“中文填表指南” "
l['3) The total length of group duration cannot be more than a year, you can renew before the plan is expired if you are still eligible. The primary applicants in the group may have different insurance dates. No one can have an expiration date beyond one year from the group start date until the group renews for a second year.'] = "3) 团体起止日期总长度不能超过一年，以后可以延期。团体中的成员可以有不同的起止日期，但每个成员的起止日期必须在团体起止日期之间 ";
l['4)  According to your school requirements and your group needs, select a deductible and benefit maximum.'] = "4) 根据学校的保险标准和团体成员的需要，选择免赔额和最高赔付限额。美国地址选择邮寄接收方式，中国地址选择Email接收方式 ";
l['6)  After you submit an application online successfully, you will receive an Email from IMG in a few minutes (If you do not receive it, please check your spam), which contains every member\'s insurance card and confirmation letter (Visa Letter). You can send the confirmation letter to your school to prove that you have qualified medical insurance.'] = "6) 网上成功提交申请几分钟后你就会收到Email电子保单(如果没有收到，请检查垃圾邮件)。其中含有保险卡和确认信(Visa Letter)。你可以将确认信发给学校证明已经购买符合学校标准的保险。你在24小时之内还会收到泰安的中文Email，其中有如何使用保险的说明。 ";
l['5)  Payment is on the last page of application. You have to use one credit card (or debit card which has a Visa, MasterCard or American Express logo) to pay for the whole group. Please use the credit card holder\'s initials as the group name. Use the credit card holder\'s email as the group contact for the plan. Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address.'] = "5) 申请表的最后一页是付款，整个团体用同一张信用卡付款(或印有Visa、MasterCard或American Express字样的借记卡)。请用信用卡持有人的姓名缩写作为团体名称，用信用卡持有人的Email作为保险公司联系团体的Email。 Billing address 是你信用卡开户时所用的地址。保险公司不会将账单寄到这个地址，要求填写Billing address是为了确认信用卡的正确性。 注意输入电子签名时需要与信用卡上的姓名一样。 ";
l['What is the difference between the two Plan Bs with different deductibles, how do I choose?'] = "两种免赔额的计划B 有何差别？ 如何选择免赔额？";
l['The two Plan Bs with different deductibles don\'t have anything different except for the deductible. Deductible is the medical expense that the insured pays before insurance pays.  These two deductibles are: 1) $100 per illness or injury deductible, which means the insured pays $100 for each illness or injury before insurance pays.  Sometimes an illness or injury needs to see a doctor more than once.   As long as it is the same illness or injury, you only need to pay one deductible of $100. 2) Annual deductible $250 or $500: This deductible covers a policy period (not in excess of one year).  The insurance pays covered charges after the insured pays an accumulated $250 or $500 in a policy period, no matter how many times the insured gets sick or injured.  If an insured is likely to get multiple illnesses in a policy period, an annual deductible is a better choice. All the deductible options in Plan B meets USDOS standard. You need to check your school requirement on deductible when you make decision.'] = "两种免赔额的计划B除了免赔额不一样以外没有其他差别。免赔额是被保人在保险公司赔付前自付的一定的医疗费用。计划B的免赔额有两种：一种为每次生病或受伤$100免赔额，即被保人每次不同的疾病或受伤都需要自付$100。有时一次生病或受伤会看多次医生，但只要是同一次疾病，就只需支付一次$100。另一种为年度免赔额$250或$500，意为一个免赔额覆盖整个保期 (最长一年)。即被保人在整个保期中无论多少次疾病或受伤，只要累积支付了$250或$500的医疗费用后，保险公司赔付超出的部分。被保人如果比较容易生病的话，年度免赔额比较合适。这几个免赔额选项都符合国务院标准，选择时只需要确认符合学校标准。";
l['How do I make the payment?  What do I do if the payment gets declined?'] = "如何付款？ 网上投保最后一页付款步骤通过不了怎么办？";
l['You will have an instant quote online and can pay with your credit card or debit card which has a Visa, MasterCard or American Express logo'] = "网上直接报价，信用卡支付(支持国内信用卡)。也可使用印有Visa、MasterCard或American Express字样的借记卡";
l['Some common reasons for a declined payment are:'] = "信用卡付款失败的常见原因如下： ";
l['1) Your credit limit '] = "1) 信用卡额度不够 ";
l['2) Some banks need to be notified in advance when you make a credit card charge outside your home country.  You may need to call the number on the back of your card to tell them this is a genuine charge.'] = "2) 中国信用卡被国外公司扣款时，有些银行需要事先通知。你可能需要与银行联系，通知银行你的信用卡会被国外保险公司扣款。";
l['3) Inaccurate billing address.  When IMG asks for billing address, you need to fill in the address that your credit card bill is sent. This will not impact where your insurance material are sent, but is needed to verify your card.'] = "3) 使用信用卡付款时需要填写账单地址。账单地址(Billing Address)是你信用卡开户时所用的地址。如果使用中国信用卡付款，你的账单地址请填写信用卡开户时所用的中国地址。 ";
l['4) On the payment page, the electronic signature should be the same as the name on the credit card.'] = "4) 付款页下方的确认签名需要与信用卡上的姓名一致。 ";
l['If your card is declined you can submit a new on line application after fixing the problem.'] = "问题解决后，可重新填表购买。如仍无法通过，请咨询泰安。";
l['How do I renew?'] = "怎样续保？";
l['If you have an individual policy, you will receive a few renewal Email notices.  The notices have the same renew link.  Click the renew link, enter your information, and pay with a credit card.  You can finish the renewal online easily.  You can change your phone number, Email address, mailing address and credit card during your renewal.  If you have a group policy, you will receive a renew notice before the policy expires.  The notice will tell you how to write an Email to IMG to renew.'] = "个人保险快到期时你会收到中文和英文的Email续保通知。中英文续保通知的内容和续保链接都是一样的。点击续保链接，输入续保信息，选择续保延长时间就可完成网上续保。 输入续保信息时，你可以更改自己的电话号码，Email address，邮寄地址，和信用卡信息。团体保险快到期时你会收到中文的Email续保通知，告诉你如何给IMG写Email要求续保。";
l['How do I get medical treatment when I get sick?'] = " 如何就医？";
l['Plan B customers can go to any provider, in-PPO or out of PPO you get the same benefits.  This doesn\'t necessarily mean every hospital provides direct billing service.  Medical providers decide whether to provide direct billing or not, the decision is not made by the insurance company.  Different providers, or the same provider for different illness /injury, can make different decisions.'] = "泰安保险计划B不受指定医疗网络的限制，可以就医任何医院和医生，但这并不意味着任何医院和医生都提供直接结算(医院将账单直接交给保险公司，你不用垫付)。是否提供直接结算由各医院决定，不由保险公司决定。不同的医院医生或同一个医院医生对病人不同的病例都可以做出不同的决定。";
l['When you get sick you can try first going to your Student Health Center where you will only pay a $5 copay. If you need urgent care and the student health center won\'t meet your needs, an Urgent Care center might. They usually have evening and weekend hours and no appointment is necessary. If you need to go to a doctor in the United States, you need an appointment. For your own benefit, usually try to go to IMG\'s designated provider (doctor, hospital or urgent care center) although you are not required to go to this network.  You can search '] = "在美国看病需要预约，登陆美国境内IMG \"First Health Network\" PPO 网站: ";
l['When you see a doctor, carry your insurance card and personal ID (to verify your identity). In the United States if you do not have an appointment and go directly to the hospital, you go to the Emergency Room. If you go to the Emergency room and are not admitted to the hospital you have to pay a $250 additional deductible. In a real emergency situation (that is life-threatening or disabling), go to the nearest Emergency Room.'] = "这个链接只是方便你查找，你不限制在这个网络内就医。若没有预约直接去医院则被认为需要去Emergency Room。如果不是受伤急诊或住院的生病急诊，就诊Emergency Room你就得付$250附加免赔额。在真正的紧急情况下(就是有生命危险或致残的情况下)，去Emergency Room就近应急。如果比较紧急但又不是Emergency, Urgent Care会比Emergency Room更合适。Urgent Care通常不需预约，且价格合理，利用上面的链接可以查找你附近的Urgent Care。另外，大多数学校的Student Health Center 可以为留学生和访问学者服务。在学校医务室看病时你只需要付$5，不用付免赔额。";
l[' PPO network link to find a medical provider.'] = "输入你的zip code，然后点击zip code 右边的 \"Go\", 你就可以查到你附近的网络内的医院医生，查到医生后即可预约看病。你还可以选择查找“医院”，“医生”，\"urgent care\" 或 “specialists\"(专科)。";
l['How do I submit a claim?'] = "如何理赔？";
l['There are two ways to file a claim in the IMG system. One is that the medical provider directly bills IMG, the other is that the customer needs to pay upfront before filing a claim with IMG for reimbursement. For both situations you always need to submit a claim to IMG. If your provider is direct billing IMG, you just submit the claims form. If you need to pay upfront, you need to submit the claim form along with all the payment receipts to IMG.  You can create a '] = "看病以后的理赔方式有两种。一种是医院提供直接结算，另一种是需要客户垫付之后再理赔。这两种情况你都需要提交理赔申请。如果直付医院帮你将账单提交给保险公司，你就只需填写Claim Form并邮寄到IMG。就诊时如果你垫付了医疗费用，你需要将所有收据(门诊费、化验费、药费等等)和填写好的Claim Form 一起寄给IMG，注意自己保存一份复印件。详见IMG Email 电子保单中的Claim Filing Instructions and Claim Form链接。 提交理赔申请后你可以在IMG网站上注册一个";
l[' after submitting the claim form, and then you can check whether IMG has received the medical provider bills and the claim status. You also can call IMG about your claims questions (1-800-628-4664 or 317-655-4500). Please have your insurance ID card ready when you call.  If you prefer to speak to IMG in a language other than English, you can ask for foreign language assistance, and tell them your preferred language.'] = "，查看你的理赔进展。你还可以拨打IMG电话1-800-628-4664 或317-655-4500咨询理赔进展等问题。英语沟通有困难时可以要求中文翻译服务。拨打电话前请准备好你的保险卡。";
l['What is the coinsurance?'] = "保险公司的赔付比例(coinsurance)";
l['There is no coinsurance for TaiAn Plan B. After you pay your deductible, the insurance pays 100% of eligible medical expenses.'] = "泰安保险计划B没有Coinsurance。也就是说理赔范围内的医疗费用超出了Deductible的数额后，保险公司赔付100%，被保人没有赔付比例。";
l['How much can I get reimbursed for prescription medicine?'] = "处方药药费怎么算？";
l['If the illness or injury is covered, the prescription medicine will be covered (subject to deductible) at 100% of usual charges until the per illness or injury maximum that you bought is met. When you need to fill a prescription you go to the pharmacy with the prescription you received from the doctor. Make sure to bring the Universal URX Discount Card with you. You will have to pay for your prescription at the pharmacy but may receive a 10% to 50% discount with the card. You can then submit your receipts and a claim form to IMG for reimbursement.'] = "如果疾病或受伤是在理赔范围内，在你支付免赔额之后，保险就会cover 100%此疾病的处方药直至你购买的每次疾病最高赔付限额。去药店购买处方药，请显示Universal URX药品折扣卡，你可能得到10~50%的折扣。购买处方药你需要先垫付。然后将买药的收据和其他医疗费用收据与claim Form一起邮寄给IMG保险公司。";
l['Does the plan cover child physical exams and vaccines?'] = "保险包括儿童体检和疫苗吗？";
l['No, it doesn\'t. In the U.S., insurance that covers child physical exams and vaccines normally cost more than $200-$300 per month.  Contact us for ways to get inexpensive, and sometimes free, vaccines or immunizations, as well as child physical exams.'] = "不包括。在美国包括体检和疫苗的保险通常每月的保费至少$200-300。请咨询我们，我们会为你提供经济实惠的去处。";
l['TaiAn International Health Insurance'] = "美国泰安国际医疗保险";
l['Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>'] = "美国电话(美东时间9am-10pm, 包括周末): +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)。 中国电话: 950-4044-2336 (中文, 北京时间上午7-11点, 直接拨打, 无长途费)。 电子邮件：<a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>";
l['Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English)'] = "美国电话(美东时间9am-10pm, 包括周末): +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)";
l['Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges)'] = "中国电话: 950-4044-2336 (中文, 北京时间上午7-11点, 直接拨打，无长途费)";
l['Call: +1 (317) 318-8259 (English)'] = "电话：+1（317）318-8259（英语）";
l['Call: 1-317-318-8259 (English)'] = "电话：1-317-318-8259(美国，英语）";
l['WeChat ID: wxid_taian_usa'] = "微信： wxid_taian_usa";
l['Business Address: 13747 Fieldshire Terr - Carmel, IN 46074 - USA'] = "公司地址: 13747 Fieldshire Terr - Carmel, IN 46074 - USA";
l['Email: chris@taianfinancial.com, taianfinancialllc@gmail.com'] = "电子邮件：chris@taianfinancial.com, taianfinancialllc@gmail.com";
l['TaiAn Plan B (TaiAn Patriot Exchange) Questions and Answers'] = "泰安计划B (TaiAn Patriot Exchange) 问答";
l['Plan B (Taian Patriot Exchange)'] = "计划 B (Taian Patriot Exchange)";
l['Annotated Application'] = "could add words here like read 中文填表指南";
l['Buy Plan B TaiAn Patriot Exchange'] = "购买计划 B Taian Patriot Exchange";
l['Buy Group B (10% off) For 2 primary insured or more'] = "购买团体计划B(10%优惠）两个或以上主申请人";
l['2) After reading Plan B benefits chart and brochure, click on '] = "2) 阅读购买团体计划B的“中文填表指南” ,  点击 ";
l['Do I need to pre-certify before going to see a doctor?'] = "看病前需要做预认证吗？";
l['You must call IMG to pre-certify any of the following conditions: any treatment requiring hospitalization; out-patient surgery, CAT scans, MRI\'s; within 48 hours after an emergency admission to the hospital; care in an extended care facility; home nursing care; Durable medical equipment including artificial limbs; or transplant. You don\'t need to pre-certify if your illness or injury is not serious and can be treated in a doctor\'s office.  See details at '] = "普通门诊你只需要预约医生去看病，不用通知保险公司或做预认证。如果您需要住院; 门诊手术，CAT scan，MRI；重症监护；家庭护理；器官移植；接假肢等，您应该事先取得预认证。急诊入院您也应该在48小时之内与IMG联系。详见IMG电子保单中的 ";
l['TaiAn Plan A (Student Health Advantage) Questions and Answers'] = "泰安计划A (Student Health Advantage) 问答";
l['Does Plan A meet US Department of State Insurance (USDOS) Requirements for J visa?'] = "泰安保险计划A是否满足美国国务院对持J1签证医疗保险的最低要求？";
l['All the options in TaiAn Plan A meet USDOS requirements.  The insurer rating by A.M. Best is \"A\", and also meets the requirements.'] = "泰安计划A任何选择都符合国务院对J签证保险的最低要求。保险公司被A.M.Best公司评级为“A-”";
l['Who is eligible to buy Plan A and what do I need to know before purchase?'] = "哪些人可以购买泰安保险计划A，购买时有哪些注意事项？";
l['TaiAn Plan A is designed specifically for international scholars, students and their dependents (F1,F2,J1,J2,OPT).  You can buy online after you confirm the plan meets your school standard. Dependents can only purchase when the student purchases. For example, F2/J2 cannot buy alone, but they can buy with their F1/J1.  On the Plan A effective date you need to have a valid J1/F1 visa and be outside of your home country for your study or program. '] = "泰安保险计划A适用于全美F1留学生、J1访问学者、OPT阶段的留学生以及持F2/J2签证的家属。确认符合学校保险标准以后即可在线购买。家属不能单独购买，例如F2/J2 不能单独购买，只能与F1/J1一起购买。购买泰安保险计划A需要在J或F签证生效以后并且申请人到达访学国家以后开始生效。 保险期间需要保持签证一直有效并在访学项目中。";
l['How do I make sure Plan A meets my school requirement?'] = "如何查询泰安计划A是否符合学校对学生学者保险的具体要求？";
l['How do I buy Plan A and how long will it take to receive the fulfillment?'] = "如何购买?  提交申请后需要多久可以收到保单？";
l['Buy Plan A online and receive the fulfillment instantly.  Purchase steps are as follows:'] = "网上购买，即刻收到Email电子保单。具体操作步骤如下：";
l['2) Read Plan A benefits chart and brochure'] = "2) 阅读购买计划A的 \"中文填表指南\"";
l['4) Payment is on the last page of application. You can use a credit card or a debit card which has a Visa, MasterCard or American Express logo to pay.  Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address.'] = "4)  申请表的最后一页是付款信息，用信用卡或印有Visa, MasterCard或American Express字样的借记卡付款。Billing address 是你信用卡开户时所用的地址。保险公司不会将账单寄到这个地址，要求填写Billing address是为了确认信用卡的正确性。 注意输入电子签名时需要与信用卡上的姓名一样";
l['5) After you submit an application online successfully, you will receive an Email from IMG in a few minutes (If you do not receive it, please check your spam), which contains your insurance card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school to prove that you have qualified medical insurance.'] = "5)  网上成功提交申请几分钟后你就会收到Email电子保单(如果没有收到，请检查垃圾邮件)，其中含有保险卡(ID Card)和确认信(Visa Letter)。将电子保单和确认信发给学校证明已经购买符合学校标准的保险。24小时之内你还会收到泰安的中文Email，其中有如何使用保险的说明。";
l['How do I buy Group Plan A to get 10% off?'] = "如何购买泰安团体计划A获得10%优惠";
l['Student Health Advantage Group plan is available for groups of 2 or more primary applicants (F1/J1).'] = "两个或两个以上的主申请人(F1/J1)可以组团购买泰安团体计划A(Student Health Advantage Group)。每个主申请人和家属都享受10%的优惠。购买操作如下： ";
l['2) After reading Plan A benefits chart and brochure, click on '] = "2) 阅读购买团体计划A的“中文填表指南”，点击";
l['4) Payment is on the last page of application. You have to use one credit card (or debit card which has a Visa, MasterCard or American Express logo) to pay for the whole group. Please use the credit card holder\'s initials as the group name. Use the credit card holder\'s email as the group contact for the plan. Billing Address is the address you used when you applied for your credit card. IMG will not bill to your billing address.'] = "4) 申请表的最后一页是付款，整个团体用同一张信用卡付款(或印有Visa、MasterCard或American Express字样的借记卡)。请用信用卡持有人的姓名缩写作为团体名称，用信用卡持有人的Email作为保险公司联系团体的Email。 Billing address 是你信用卡开户时所用的地址。保险公司不会将账单寄到这个地址，要求填写Billing address是为了确认信用卡的正确性。 注意输入电子签名时需要与信用卡上的姓名一样。 ";
l['5) After you submit an application online successfully, you will receive an Email from IMG in a few minutes (If you do not receive it, please check your spam), which contains every member\'s insurance card and confirmation letter (Visa Letter). You can send the confirmation letter to your school to prove that you have qualified medical insurance.'] = "5). 网上成功提交申请几分钟后你就会收到Email电子保单(如果没有收到，请检查垃圾邮件)。其中含有保险卡和确认信(Visa Letter)。你可以将确认信发给学校证明已经购买符合学校标准的保险。你在24小时之内还会收到泰安的中文Email，其中有如何使用保险的说明。 ";
l['What do I need to know if  I need the maternity coverage from Plan A?'] = "计划A的生育险的注意事项是什么？";
l['1) TaiAn Plan A covers maternity only if the pregnancy begins after the plan is effective. In order to ensure that the insurance is purchased before pregnancy, it is usually recommended after your plan is effective, wait until after a menstruation, and then try to get pregnant.'] = "1) 购买计划A需要在J或F签证生效以后并且申请人到达访学国家以后开始生效。保险期间需要保持签证一直有效并在访学项目中。泰安计划A的生育保险必须是保险生效以后怀孕才有效。为了确保是保险生效以后才怀孕的，通常建议保险生效后，来过一次例假以后再怀孕。";
l['2) The plan is renewable only if 3 months or more are purchased. If you get pregnant during these three months, you need to renew not rebuy a new plan. With renewal the pregnancy is covered. With a rebuy the maternity is a pre-existing condition and not covered. So, it is very important to buy at least three months initially, and to renew on time.'] = "2) 此保险第一次购买三个月或三个月以上，以后才能续保。这三个月期间如果怀孕了，续保时就不是pre-existing condition, 而重新购买就成了购买保险前的怀孕了。所以首次购买三个月并且按时续保非常重要。";
l['3) If the pregnancy test is positive and it is found that conception was after the effective date, then it would be covered. If the conception was prior to the effective date or the pregnancy test is negative, it would not be covered. You don\'t need to do pre-certification until your pregnancy is confirmed by a doctor.'] = "3) 如果妊娠试验阳性并且是在保险生效日期之后怀孕的，可以得到理赔。如果妊娠试验阴性，就不会获得理赔。 所以最好自己确认是怀孕了以后再去看医生做第一次产检。第一次产检前不用做预认证， 如果第一次产检医生证明是怀孕了，这时才需做预认证。 ";
l['4) Please pre-certify with IMG after your pregnancy is confirmed by a doctor. Create a MyIMG account (myimg.imglobal.com) and you will be able to see your precertification result and claim status.  It would be best if you can find a doctor who will provide direct billing and send all bills to IMG. Note that in order to maximize your benefits, the hospital for the delivery needs to be in the PPO network and precertification is required at time of delivery. You may advise the hospital of this at time of delivery, they will begin the Precertification Process.'] = "4) 怀孕后请做预认证，详见你的电子保单中的Pre-certification链接。然后建立一个MyIMG账户(myimg.imglobal.com)你就可以查到预认证结果和将来的理赔进展。在First Health PPO网络内查找可以提供直接结算的医生和生产时用的医院，这样您就不用垫付产前检查和生产的费用。到医院去生产时，你需要督促医院与IMG联系以取得预认证。 ";
l['What is the 6 month Pre-existing Condition Rider and how does it change the maternity benefit?'] = "先前疾病 6个月选项( Six Month Pre-existing Condition Rider) 对计划 A生育险的影响?";
l['In Florida, Hawaii, Idaho, and Massachusetts you can shorten pre-ex from 12 months to 6 months in Plan A, but this change will results in a 10 month wait for maternity benefits, and an increase in the premium. Normally for Student Health Advantage a maternity is covered so long as the conception is after the effective date. When someone selects the optional 6 month pre-ex rider, there is a 10 month wait for maternity benefits. This means any maternity related claim filed for services provided during the first 10 months of the policy will be declined. A maternity claim filed in the 11th month is covered. If a baby is born in the 11th month, the delivery charges would be covered. It doesn\'t mean they need to have a conception date of the 11th month or later.'] = "有些学校保险要求先前疾病的免责期不超过6个月。普通计划A先前疾病的免责期为12个月。目前在 Florida, Hawaii, Idaho, Massachusetts 四个州，客户可以选择将先前疾病的免责期由12个月改为6个月，但这个改变会使生育险产生10个月的免责期，并且月费会增加。如果你保持默认的先前疾病的免责期12个月，你的生育险就没有等待期。生育险10个月免责期的意思是保险生效十个月后才cover生育医疗费用。例如：如果您保险生效后的第12个月孩子出生了，那么前十个月中的产检都不cover，但第10个月以后的产检和生产费用是cover的。";
l['Plan A customers go to in-PPO network get more benefits.  When you get sick you can try first going to your Student Health Center where you will only pay a $5 copay. If you need urgent care and the student health center won\'t meet your needs, an Urgent Care center might. They usually have evening and weekend hours and no appointment is necessary. If you need to go to a doctor in the United States, you need an appointment. For your own benefit, usually try to go to IMG\'s designated provider (doctor, hospital or urgent care center).  You can search \"First Health Network\" PPO network link to find a medical provider: '] = "泰安保险计划A客户在指定医疗网络就医会得到更多的赔付。美国境内IMG\"First Health Network\" PPO 网站: ";
l['When you see a doctor, carry your insurance card and personal ID (to verify your identity). In the United States if you do not have an appointment and go directly to the hospital, you go to the Emergency Room. If you go to the Emergency room and are not admitted to the hospital you have to pay a $250 additional deductible. In a real emergency situation (that is life-threatening or disabling), go to the nearest Emergency Room.'] = "若没有预约直接去医院则被认为需要去Emergency Room。如果不是受伤急诊或住院的生病急诊，就诊Emergency Room你就得付$250附加免赔额。在真正的紧急情况下(就是有生命危险或致残的情况下)，去Emergency Room就近应急。如果比较紧急但又不是Emergency, Urgent Care会比Emergency Room更合适。Urgent Care通常不需预约，且价格合理，利用上面的链接可以查找你附近的Urgent Care。另外，大多数学校的Student Health Center 可以为留学生和访问学者服务。在学校医务室看病时你只需要付$5，不用付免赔额。";
l['Plan A (Student Health Advantage)'] = "计划 A (Student Health Advantage)";
l['Buy Plan A Student Health Advantage'] = "购买计划 A Student Health Advantage";
l['Buy Group A (10% off) For 2 primary insured or more'] = "购买团体计划A(10%优惠）两个或以上主申请人";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";

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

