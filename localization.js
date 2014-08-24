
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
l['Dear \[Customer Name\]\nYou can send an email to IMG to ___PURPOSE___.   A sample email is below. Please fill in the content in the brackets and send the email to IMG.\n\nThanks for your business!\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n_____________________________________________________________________\n'] = "Dear \[客户姓名\]\n您可以发email给IMG，___PURPOSE___。请见下面我们为您写的Email草稿。填入括号中的内容，将Email发给IMG.\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com/chinese\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n_____________________________________________________________________\n";
l['NOTE TO TAIAN STAFF:\nYou can send an email to the customer to ___PURPOSE___.   A sample email is below. \nPlease fill in the content in the brackets and send the email to Customer.\n'] = "FredNOTE TO TAIAN STAFF:\nYou can send an email to the customer to ___PURPOSE___.   A sample email is below. \nPlease fill in the content in the brackets and send the email to Customer.\n";
l['\n\nDear \[CUSTOMER NAME\]\n\nIMG sent you an email with an electronic policy and ID card (insurance card) link. In the Email click the \"ID Card\" link, and you can print it.  There are many links in blue font to useful documents.  If at time of purchase you chose electronic delivery, you will not receive materials by mail.  If you chose at time of purchase to receive mail, IMG will mail you Fulfillment Documents. These documents include a thicker paper set of insurance cards.  The card has perforated edges and can easily be removed from the paper. If you need to see a doctor, you need to bring the insurance cards and a photo ID (such as driver\'s license, passport, etc.) to prove your identity.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n在IMG发给您的email(电子保单）中有ID card (保险卡）链接。 点击 \"ID Card\" 就可以打印下来。 Email中还有很多蓝色字体的链接，您需要的所有文件都在这些链接中。 如果您在购买时选择了邮寄方式接收， IMG就会既发给您电子保单，还给您邮寄Fulfillment Documents。在IMG的邮件中，有一张纸稍厚一点，保险卡就镶在这张纸中。卡的边缘有打孔，很容易将卡从纸上撕下来。生病看医生时，您需要带上保险卡，同时还需要带一个有照片的ID（如驾照，护照等）以证明您的身份。\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\n1. To find a medical provider in the United States \"First Health Network\" PPO network, first go to this link: http://www.providerlookuponline.com/coventry/po7/gateway.aspx?plancode=141 enter your zip code and click \"Go\". You can choose to search for \"hospital\", \"medical\", \"urgent care\" or \"specialists\".\n\n2. Outside of the United States you can go to any doctor or hospital and receive the same benefits.  You can identify medical providers or find providers that offer direct billing with IMG by searching the International Provider link.\n\n3. To find medical providers outside the US first go to this link: http://www.imglobal.com/client-resources/international-provider-access.aspx  Some providers on this list offer direct billing arrangements.  Medical providers decide to accept direct billing on a case by case basis, so ask your provider if they will direct bill IMG.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n1. 在美国境内的“First Health Network\" PPO网络:  http://www.providerlookuponline.com/coventry/po7/gateway.aspx?plancode=141 点击链接，输入您的zip code，然后点击zip code 旁边的 \"Go\", 您就可以看到您附近的网络内的医院医生。 您还可以选择查找“医院”，“医生”，“urgent care\" 或 “specialists\"(专科）。\n\n2. IMG 在中国的合作医院\[见附件\"IPA-China\"\]。 在中国您可以去任何医院，没有网络内外之分。附件中的医院是与IMG有合约的医院，可能提供直接结算。为了确认是否直接结算，您需要与医院联系。\n\n3. IMG 全球合作医院： http://www.imglobal.com/client-resources/international-provider-access.aspx  在美国境外（包括中国）没有网络内外之分，您可以去任何医院。链接里的医院是与IMG有合约的医院，可能提供直接结算。\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\nIf you require hospitalization, surgery, CAT scan, MRI, organ transplant, or other expensive proceedure you should contact IMG in advance.  For an emergency, you should contact IMG within 48 hours.  These large claims need to have pre-certification. IMG sent you a Pre-certification link by email in your declaration of insurance document. If you need foreign language assistance when you call for Pre-certification, first have your insurance card ready when you call. Call: 1-800-628-4664 or 317-655-4500. After the voice prompts select \"0\". When speaking with the operator say \"I would like to have foreign language assistance\". The operator will arrange a three way call with a translator.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n如果您需要住院，开刀手术，CAT scan, MRI, 器官移植，接假肢等，您应该事先与IMG联系； 如果是emergency, 您也应该在48小时之内与IMG联系，取得预认证。详见IMG发给您的email中的Pre-certification链接。您可以利用IMG提供的中文电话服务取得预认证。拨打电话前请准备好保险卡。拨打: 1-800-628-4664 或317-655-4500， 语音提示后选择\"0\"，接线员说话时回答\"I would like to have Chinese language assistance\". 这时她就会加一个中文翻译进来，进行三方通话。\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\nIf you need to go to a doctor in the United States, you need an appointment.  Sometimes there isn\'t time to wait for an appointment because of an urgent medical need. If you have Patriot Exchange or Student Health Advantage you can try first going to the Student health center where you will have a $5 copay.  If you need urgent care and the student health center won\'t meet your needs, an Urgent Care center might.  They usually have evening and weekend hours and no appointment is necessary. In the United States if you do not have an appointment and go directly to the hospital, you go to the Emergency Room. If you go to the Emergency room and are not admitted to the hospital you have to pay a $250 additional deductible. In a real emergency situation (that is life-threatening or disabling), go to the nearest Emergency Room.  In other situations, for your own benefit, usually try to go to IMG\'s designated provider (doctor, hospital or urgent care center). In the United States you can search \"First Health Network\" PPO network link to find a medical provider: http://www.providerlookuponline.com/coventry/po7/gateway.aspx?plancode=141. When you see a doctor carry your insurance card and personal ID (to verify your identity).\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n在美国生病以后需要预约医生。为了您自身的利益，通常情况下尽量去看IMG的指定provider(医生，医院或诊所)。美国境内用\"First Health Network\" PPO网络链接查找医院和医生: http://www.providerlookuponline.com/coventry/po7/gateway.aspx?plancode=141。 看病时携带您的保险卡和个人ID(以证实您的身份)。如果您购买的是留学生访问学者医疗保险，在学校医务室就诊您只需付$5 copay。 如果比较紧急但又不是emergency, 在以上的网站上查找”Urgent Care”。Urgent Care通常不用预约，且价格合理。请注意：在中国生病以后您可以直接去医院，但在美国如果您没有预约直接去医院，这表示您要去Emergency Room。 如果最后医生诊断不属需要住院的Emergency，您就得要付$250附加免赔额。在真正的紧急情况下(就是有生命危险或致残的情况下)，去Emergency Room就近应急，然后转到IMG PPO网络。\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\nMost medical providers will settle bills directly with IMG.  They will charge you your deductible, copay  and coinsurance then settle the bill with IMG and then bill you any balance due.  Some smaller providers have not yet established a direct billing arrangement with IMG.  You can ask them to contact IMG to provide direct billing.  If you still can not arrange direct billing, you may need to pay the provider first, and then submit bills to IMG.  Make sure you get an itemized bill and submit those plus any receipts or other documents to IMG.   In this case IMG will pay medical reimbursement directly to you.  If IMG reprices the claim based on the network reimbursement to a rate less than you paid, you can go back to the clinic to be reimbursed.  Because of this complexity it is usually better to find a provider who will direct bill IMG.  You can call a provider before medical services are rendered and tell them you have IMG insurance and the network is First Health Network.  You can ask at that time if the will provide direct billing.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n大多数的诊所会在收取您的免赔额（和/或共同保险）后将其他医疗费用直接与IMG结算，您不用先垫付。然而，一些小诊所还没有建立直接结算服务，您可以要求他们与IMG 联系，以提供直接结算服务。如果他们仍然不能提供直接结算服务，您可以先垫付，要求收据注明逐项服务(itemized bills)与医疗服务代码，然后将收据和其他文件(如claim Form和药费)邮寄给IMG保险公司。注意：如果您先垫付，有可能您的付费比IMG negotiated price高。IMG只会赔付negotiated price。所以，付费前应要求诊所联系IMG以便repricing。如果IMG的赔付比您付给诊所的费用低，您可以向诊所要回差额。综上所述，提前调查您周围哪些诊所可以提供直接结算是明智的。您跟诊所打电话，告诉他们您的insurer is IMG (International Medical Group), provider network is First Health Network, 问他们是否provide direct billing to IMG.\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\nWhen you need to fill a prescription you go to the pharmacy with the prescription you received from the doctor.  Make sure to bring the Universal URX Discount Card (if applicable) with you.  To find your card, see the email you received from IMG when you purchased your policy.  Click the link that says, \”Cover Letter, Certificate Wording, & Universal URX Discount Card\”.  You will have to pay for your prescription at the pharmacy but may receive a 10% to 50% discount with the card.  You can then submit your receipts and a claim for to IMG for reimbursement.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n去药店购买医生给您开了处方药，您需要先垫付。然后将收据和其他文件(如claim Form和看医生的费用)邮寄给IMG保险公司。使用Universal URX药品折扣卡，您可能得到10~50%的折扣。详见IMG发给您的email 中的Cover Letter, Certificate Wording, & Universal URX Discount Card (if applicable)链接。\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\nTo find inexpensive, and sometimes free, vaccines or immunizations you can contact your County Public Health Department.  This is usually the most affordable solution.  Another option is to go to a pharmacy like CVS or Walgreen.  Many of these have nurses who provide child physical exams and vaccines.  This will be much more affordable than a doctors office.  Some schools also offer baby clinic admission examinations.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n美国儿童疫苗是社会福利的一部分，各County 都有 County Public Health Department，他们提供非常优惠的儿童疫苗。您可以在网上搜索您所在county的Public Health Department 提供的服务。有些药店例如CVS和Walgreen，也提供较优惠的疫苗。有护士的药店还能提供儿童入学体检，价格比医院便宜很多。有些学校医务室也可以提供儿童入学体检。\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\n\nIf a person has a claim that is covered during a policy, they have coverage for this chronic condition for 60 days. Here are a few important facts.\n1) The hospital can not make a determination if a claim is covered or not.  The only people that can decide this is IMG.\n2) If the claim originated during a valid policy, and it was covered, IMG will need to decide if the subsequent claim is for the same illness and covered under the 60 day Treatment period.\nThis customer should submit the claim to IMG - both the initial claim, and the subsequent claim.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n如果被保人在保险期间所生的病是在IMG的理赔范围内，那么他的保险终止后IMG对这个病还提供60天的后续治疗。有几点需要注意：\n1) 医院无权决定保险是否cover这个后续治疗, 唯一可以做决定的是IMG.\n2) 如果原初的理赔是被保险cover的，IMG需要调查后续治疗和原初的是不是同一个疾病，并且是不是在保险终止后的60天之内。\n3）客户需要提交所有原初的和后续治疗的理赔申请。\n\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";

l['\n\nDear \[CUSTOMER NAME\]\n\n\nThis insurance is not intended to replace auto insurance. If you are driving you need auto insurance too.  If you are injured in an auto accident this insurance will coordinate coverage with your auto insurer.  The auto insurance is first but this would cover any gaps in auto coverage.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n\n您要开车就需要购买汽车保险，不能用医疗保险取代汽车保险。如果您在车祸中受伤，IMG会与您的汽车保险公司协调。IMG会支付您汽车保险中医疗保险不够的部分。\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";

l['\n\nDear \[CUSTOMER NAME\]\n\nIf you have medical expenses it is your responsibility to complete an IMG claims form.  This is true even if your provider is direct billing IMG for services.  If your provider is direct billing IMG, you just submit the claims form.  If you paid the provider and are seeking reimbursement from IMG submit the claims form and attach all original bills (save yourself a copy).  Note: All bills must indicate the patient\'s name, date of visit, diagnosis and itemized services. Mail to:\nInternational Medical Group, Inc.\nClaim Department\nP. O. Box 88500\nIndianapolis, Indiana 46208-0500 USA\nSee the email IMG sent to at the time of your purchase for a link to Claim Filing Instructions and Claim Form.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n 即使医院诊所提供直接结算服务，您向保险公司提出索赔的过程中是必不可少的。这种情况下，您只需填写Claim Form并邮寄到IMG。 如果是您先垫付，您得填写Claim Form, 附上所有账单原件包括医生费用，lab test和药费等。自己保存一份复印件。注意：所有账单都要注明患者姓名，就诊日期，诊断结果和逐项服务。邮寄到：\nInternational Medical Group, Inc.\nClaim Department\nP. O. Box 88500\nIndianapolis, Indiana 46208-0500 USA\n详见IMG发给您的email 中的Claim Filing Instructions and Claim Form链接。\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\nTo check the status of your claim you can register on the website MyIMG and see all of your claims information.  Here are the steps to follow:\n1.Login https://myimg.imglobal.com/unauth/AccountInfo.aspx\n2. Enter your Certificate Number and Date of Birth, click \"continue\"\n3. Establish your User Name and Password. Enter your email and \"submit\". Then you have your MyIMG account. Now you can check the progress of your claim.\n\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n您可以在IMG网站上注册一个MyIMG账号，然后您就可以查到您的所有资料包括理赔进展。 具体步骤如下：\n1. 登陆 https://myimg.imglobal.com/unauth/AccountInfo.aspx\n2. 输入您的Certificate Number and Date of Birth, click \"continue\"\n3. 设置您的User Name and Password. enter your email address and \"submit\". Then you have your MyIMG account. 您就可以查到您的理赔进展.\n\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\nTo create an account:  https://myimg.imglobal.com/unauth/AccountInfo.aspx  Here you will need to enter your certificate number and date of birth.\nIf you already created an account and forgot your user ID go here: https://myimg.imglobal.com/unauth/AccountHelpUserIdRequest.aspx\nIf you have an account and know your user ID but your password is not working try resetting the password here: https://myimg.imglobal.com/unauth/AccountHelpPasswordReset.aspx\nIf all else fails to help you can email IMG at insurance@imglobal.com (include your name and certificate number),or call them at 800.628.4664 for assistance.\n\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n建立账户请点击此链接：  https://myimg.imglobal.com/unauth/AccountInfo.aspx  您需要输入您的certificate number 和 date of birth.\n如果您已经建立了账户但忘了 User Name，点击此链接： https://myimg.imglobal.com/unauth/AccountHelpUserIdRequest.aspx\n如果您有账户和User Name但忘了密码，重设密码点击此链接： https://myimg.imglobal.com/unauth/AccountHelpPasswordReset.aspx\n 如果所有这些都没能成功，请发email给IMG： insurance@imglobal.com (包括您的姓名和certificate number),或给IMG打电话：800.628.4664\n\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";

l['\n\nDear \[CUSTOMER NAME\]\n\nChinese explains how to get help in Chinese\n\n\n\n\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n有关具体的coverage 和理赔问题，IMG建议被保人亲自与IMG联系，因为可能涉及个人隐私问题。您可以利用IMG提供的中文电话服务， 咨询有关查找医生，预认证，coverage 和理赔等问题。拨打电话前请准备好您的保险卡。拨打: 1-800-628-4664 或317-655-4500， 语音提示后选择\"0\"，接线员说话时回答\"I would like to have Chinese language assistance\". 这时她就会加一个中文翻译进来，进行三方通话。\n\n\n\n\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nDear \[CUSTOMER NAME\]\n\nChinese explains claims payment mailed to China\n\n\n\n\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\nIMG 不会将理赔的退款返回到客户的信用卡上。IMG会将退款支票邮寄给客户，甚至客户在中国。如果客户需要离开美国回中国，离开美国前在填理赔表时需要告诉IMG他的中国邮寄地址。\n\n\n\n\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (中文)\n317-318-8259 (英语)\n\n";
l['\n\nSend to: insurance@imglobal.com\nPlease copy to: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (certificate number), Insured ID: (insured ID), Insured Name: (insured name).\nI am returning to my home country sooner than expected, and no longer need my insurance coverage.  I am leaving (OR ALREADY LEFT) the US on (ENTER DATE OF RETURN TO HOME COUNTRY).  I would like to terminate my coverage on that date.  I would also like to get a refund of the premium as a result of shortening the coverage period.  Please refund the premium to the credit card charged for the insurance.\n\nPlease send me an email to let me know how much of a refund I am getting.\n\n\nThanks for your help.\n(YOUR NAME)\n'] = "\n\nEmail发给: insurance@imglobal.com\n请抄送给: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (填入certificate number), Insured ID: (填入insured ID), Insured Name: (填入您的姓名).\nI am returning to my home country sooner than expected, and no longer need my insurance coverage.  I am leaving (OR ALREADY LEFT) the US on (填入您离开美国的日期).  I would like to terminate my coverage on that date.  I would also like to get a refund of the premium as a result of shortening the coverage period.  Please refund the premium to the credit card charged for the insurance.\n\nPlease send me an email to let me know how much of a refund I am getting.\n\n\nThanks for your help.\n(填入您的姓名)\n";
l['show the customer how to check claim status on MyIMG'] = "注册MyIMG账号查看理赔进展";
l['How do I check the status of a claim I filed - MyIMG?'] = "注册MyIMG账号查看理赔进展";
l['Will I be covered if I am in a car accident?'] = "IMG的保险是否cover车祸";
l['How do I file a claim?'] = "申请理赔";
l['cancel a policy early for a partial refund.  For use after a policy is effective'] = "要求取消保险并获得部分退款";
l['How do I check the status of a claim I filed?'] = " 注册MyIMG账号查看理赔进展";
l['MyIMG account trouble shooting'] = "MyIMG account trouble shooting";
l['Phone assistance in Chinese with IMG about a claim'] = "使用IMG中文电话服务咨询有关理赔进展";
l['What happens to my claim payment if I am back in China?'] = "理赔退款方式";
l['add a member to your group plan'] = "要求团体保险加入新成员";
l['extend coverage in your group plan'] = "要求团体保险延期";
l['have IMG send you a receipt'] = "要求给您邮寄收据";
l['What is the 60 day extension of benefits?'] = "保险期后60天延续治疗期";
l['Precertification of significant claim with Chinese language assistance'] = "使用IMG中文电话服务咨询coverage, pre-existing condition 和预认证";
l['correct your address or phone number'] = "要求更改您的地址或电话号码";
l['Add a Member to Patriot Exchange Group'] = "团体计划B加入新成员";
l['EMAILS FOR THE CUSTOMER TO SEND TO IMG'] = "客户发给IMG的Email";
l['Extend Group Coverage'] = "团体计划延期";
l['Have IMG send a Fulfillment Kit including ID Card'] = "要求IMG邮寄保单包括保险卡。";
l['Have IMG send a receipt'] = "要求IMG发送收据";
l['To solve a Renewal Credit Card Problem by Having IMG Charge the Card on File'] = "续保时付款出现问题，需要IMG用原先的信用卡扣款帮助续保。";
l['Update Address or Phone Number'] = "更改地址或电话号码";
l['EMAILS FOR THE CUSTOMER TO SEND TO IMG ABOUT POLICY CANCELLATIONS - DO NOT USE THESE FOR BASIC PLAN CANCEL TO BUY STANDARD'] = "客户发Email给IMG取消保险 - 不适用于取消Basic Plan 改买Standard Plan。";
l['Cancel a Policy Before Coverage Started because Travel Plans Changed'] = "由于行程改变，在生效日期之前取消保险。";
l['Cancel a Policy Before Coverage Started because School Waiver Declined'] = "由于学校拒绝豁免，在生效日期之前取消保险。";
l['Cancel a Policy Early but After Coverage Started to get a Partial Refund'] = "保险生效之后取消保险，要求部分退款。";
l['EMAILS FROM TAIAN TO THE CUSTOMER ABOUT GENERAL QUESTIONS'] = " 泰安发给客户的Email关于普通问题";
l['Email to New customer for Declined Payment'] = "给付款失败的客户的Email";
l['\n\nSend to: insurance@imglobal.com\nPlease copy to: chris@taianfinancial.com\n\nDear IMG,\n\nI am (fill in your name here).  I have group policy number (put group policy number here).  I would like to add a member to my group plan.\nFirst Name:(Add name)\nLast Name:(Add name)\nDate of Birth:(Add Date of Birth)\nSex:(Add Sex)\nPassport Number:(Add Passport Number)\nVisa Type:(Add Visa Type)\nCountry of Citizenship:(Add Country of Citizenship)\nHome Country:(Add Home Country)\nPrimary Destination Country:(Add Primary Destination Country)\nEffective Date for Coverage:(Add Effective Date for Coverage)\nExpiration Date for Coverage:(Add Expiration Date for Coverage)\nPlease charge the credit card on file for this purchase.\nAlso, please send me an email that shows my coverage has been updated.\nThanks for your help.\n(your name)\n'] = "\n\nEmail发给: insurance@imglobal.com\n请抄送给: chris@taianfinancial.com\n\nDear IMG,\n\nI am (填入您的姓名).  I have group policy number (填Certificate number).  I would like to add a member to my group plan.\nFirst Name:(填入新成员的名字)\nLast Name:(填入新成员的姓)\nDate of Birth:(填生日)\nSex:(填性别)\nPassport Number:(填护照号码)\nVisa Type:(填签证类型)\nCountry of Citizenship:(填国籍)\nHome Country:(填长居国家)\nPrimary Destination Country:(填目的地国家)\nEffective Date for Coverage:(选择保险生效日期)\nExpiration Date for Coverage:(选择保险终止日期)\nPlease charge the credit card on file for this purchase.\nAlso, please send me an email that shows my coverage has been updated.\nThanks for your help.\n(填入您的姓名)\n";
l['\n\nSend to: insurance@imglobal.com\nPlease copy to: chris@taianfinancial.com\n\nDear IMG,\n\nI am (fill in your name here).  I have group policy number (put group policy number here).  I would like to extend the coverage of:\n(list name and member ID number of members you want to extend coverage for).\nPlease extend by (you choose one month, two months, three months or other number of months).\nPlease charge the credit card on file for this purchase.\nAlso, please send me an email that shows my coverage has been extended.\n\nThanks for your help.\n\n(your name)\n'] = "\n\nEmail发给: insurance@imglobal.com\n请抄送给: chris@taianfinancial.com\n\nDear IMG,\n\nI am (填入您的姓名).  I have group policy number (填Certificate number).  I would like to extend the coverage of:\n(逐个填入需要延期的成员的姓名和 Insured ID number).\nPlease extend by (填入每个成员需要延期几个月， 例如： two months, five months).\nPlease charge the credit card on file for this purchase.\nAlso, please send me an email that shows my coverage has been extended.\n\nThanks for your help.\n\n(填入您的姓名)\n";
l['\n\nSend to: insurance@imglobal.com\nPlease copy to: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (certificate number), Insured ID: (insured ID), Insured Name: (insured name).\nI need a fulfillment kit including ID card.  Could you please send me one? Please mail to:\n(Your Name)\n(Your Address)\n\nThanks for your help.\n(your name)\n'] = "\n\nEmail发给: insurance@imglobal.com\n请抄送给: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (填入certificate number), Insured ID: (填入insured ID), Insured Name: (填入您的姓名).\nI need a fulfillment kit including ID card. Could you please send me one? Please mail to:\n(填入您的姓名)\n(填入您的地址)\n\nThanks for your help.\n(填入您的姓名)\n";
l['\n\nSend to: insurance@imglobal.com\nPlease copy to: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (certificate number), Insured ID: (insured ID), Insured Name: (insured name).\nI need a receipt for my purchase.  Could you please send me one? Please mail to:\n(Your Name)\n(Your Address or email address)\n\nThanks for your help.\n(your name)\n'] = "\n\nEmail发给: insurance@imglobal.com\n请抄送给: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (填入certificate number), Insured ID: (填入insured ID), Insured Name: (填入您的姓名).\nI need a receipt for my purchase. Could you please send me one? Please mail to:\n(填入您的姓名)\n(填入您的地址或email address)\n\nThanks for your help.\n(填入您的姓名)\n";
l['\n\nSend to: insurance@imglobal.com\nPlease copy to: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (certificate number), Insured ID: (insured ID), Insured Name: (insured name).\nIt is about to expire on (EXPIRATION DATE).   I tried to extend the policy to expire on  (NEW EXPIRATION DATE) by using the online extension link.\n\nI could not get the website to accept my credit card.  I want to use the same credit card I have on file with IMG that I used for my purchase.  Can you please process this extension for me?  Also, please send me an email with my new certificate.  \n\n\nThanks for your help.\n(YOUR NAME)\n'] = "\n\nEmail发给: insurance@imglobal.com\n请抄送给: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (填入certificate number), Insured ID: (填入insured ID), Insured Name: (填入您的姓名).\nIt is about to expire on (填入过期日期).   I tried to extend the policy to expire on  (填入新的过期日期) by using the online extension link.\n\nI could not get the website to accept my credit card.  I want to use the same credit card I have on file with IMG that I used for my purchase.  Can you please process this extension for me?  Also, please send me an email with my new certificate.  \n\n\nThanks for your help.\n(填入您的姓名)\n";
l['\n\nSend to: insurance@imglobal.com\nPlease copy to: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (certificate number), Insured ID: (insured ID), Insured Name: (insured name).\nI would like to change the phone number that you have on file for me to:(correct phone number)\n(and/or)\nI would like to change the address that you have on file for me to:(correct address)\nAlso, please send me an email that shows my changes.\nThanks for your help.\n(your name)\n'] = "\n\nEmail发给: insurance@imglobal.com\n请抄送给: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (填入certificate number), Insured ID: (填入insured ID), Insured Name: (填入您的姓名).\nI would like to change the phone number that you have on file for me to:(填入正确的电话号码)\n(和/或)\nI would like to change the address that you have on file for me to:(填入正确的地址)\nAlso, please send me an email that shows my changes.\nThanks for your help.\n(填入您的姓名)\n";
l['\n\nSend to: insurance@imglobal.com\nPlease copy to: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (certificate number), Insured ID: (insured ID), Insured Name: (insured name).\nMy policy is not yet effective and my travel plans have changed.  I no longer need my insurance coverage.  I would like to cancel my coverage and get a refund of the premium.  Please refund the premium to the credit card charged for the insurance.\n\nPlease send me an email to let me know this has been completed.\n\n\nThanks for your help.\n(YOUR NAME)\n'] = "\n\nEmail发给: insurance@imglobal.com\n请抄送给: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (填入certificate number), Insured ID: (填入insured ID), Insured Name: (填入您的姓名).\nMy policy is not yet effective and my travel plans have changed.  I no longer need my insurance coverage.  I would like to cancel my coverage and get a refund of the premium.  Please refund the premium to the credit card charged for the insurance.\n\nPlease send me an email to let me know this has been completed.\n\n\nThanks for your help.\n(填入您的姓名)\n";
l['\n\nSend to: insurance@imglobal.com\nPlease copy to: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (certificate number), Insured ID: (insured ID), Insured Name: (insured name).\nMy policy is not yet effective and my school declined my application to waive the school plan.  I no longer need my insurance coverage.  I would like to cancel my coverage and get a refund of the premium.  Please refund the premium to the credit card charged for the insurance.\n\nPlease send me an email to let me know this has been completed.\n\n\nThanks for your help.\n(YOUR NAME)\n'] = "\n\nEmail发给: insurance@imglobal.com\n请抄送给: chris@taianfinancial.com\n\nDear IMG,\n\nI purchased insurance from IMG Certificate Number: (填入certificate number), Insured ID: (填入insured ID), Insured Name: (填入您的姓名).\nMy policy is not yet effective and my school declined my application to waive the school plan.  I no longer need my insurance coverage.  I would like to cancel my coverage and get a refund of the premium.  Please refund the premium to the credit card charged for the insurance.\n\nPlease send me an email to let me know this has been completed.\n\n\nThanks for your help.\n(填入您的姓名)\n";

l['NOTE TO TAIAN STAFF:\nYou can send an email to the customer to ___PURPOSE___.   A sample email is below. \nPlease fill in customer name and check the content in the brackets \[ \] before sending the email to Customer.\n'] = "泰安人员请注意:\n你可以给客户发email ___PURPOSE___.  Email 样板如下。 \n请填入客户姓名，检查方括号\[ \]里的内容，然后将Email发给客户\n";
l['Dear \[CUSTOMER NAME\]\n'] = "Dear \[客户姓名\]";
l['Thanks for your business'] = "非常感谢您的信任和支持！";
l['Where is my ID card?'] = "我的ID Card (保险卡）在哪？";
l['How do I Find a Provider?'] = "怎样查找医院和医生";
l['Sample Letters'] = "样板信";
l['How to see a doctor - Explain hospital, doctor, and Urgent Care.'] = "如何去看病 - 解释门诊，急诊和 urgent care";
l['Explain Direct billing vs paying at the doctor and how to get the doctor to work with IMG to direct bill'] = "解释直接结算与自己先垫付，要求医院与IMG联系以提供直接结算";
l['explain Direct billing vs paying at the doctor and how to get the doctor to work with IMG to direct bill'] = "解释直接结算与自己先垫付，要求医院与IMG联系以提供直接结算";
l['Language to ask a doctor if they will accept direct billing'] = " 如何给医院打电话咨询是否直接结算";
l['How to use URX discount card to buy prescription medicine'] = "如何使用URX折扣卡购买处方药";
l['Where to go for low cost physical exam or immunizations'] = "哪里有优质实惠的小孩疫苗和入学体检";
l['MyIMG account troubleshooting'] = "建立MyIMG 账户的常见问题";
l['New customer for Declined Payment'] = " 信用卡付款被拒的客户";
l['Solve a Renewal Credit Card Problem by Having IMG Charge the Card on File'] = "要求IMG charge 上次使用的信用卡解决您续保时的信用卡问题";
l['solve a renewal credit card problem by having IMG charge the credit card on file'] = "要求IMG charge 上次使用的信用卡解决您续保时的信用卡问题.";
l['explain about electronic or paper ID card'] = "解释电子版ID Card和邮寄的纸质ID Card";
l['explain how to find a medical provider'] = "解释如何查找医院和医生";
l['explain how to call IMG and get Chinese language assistance for precertification of a significant claim'] = "解释如何利用IMG中文电话服务咨询预认证和理赔问题";
l['troubleshoot problems signing into MyIMG'] = "解决登录MyIMG的常见问题";
l['explain when to go to a doctor, hospital, or urgent care center, and how to find a provider.'] = "解释门诊，住院和urgent care的差别，如何查找医院和医生";
l['give them language to ask a doctor if they will accept direct billing'] = "告诉他们如何用英语打电话询问是否提供直接结算";
l['use URX discount card to buy prescription medicine'] = "使用URX折扣卡购买处方药";
l['know where to go for a low cost physical exam or immunizations'] = "知道哪里有优质实惠的疫苗和体检";
l['understand the 60 day extension of benefits'] = "理解60天的延续治疗期";
l['explain coverage if customer is in a car accident'] = "解释出车祸后的医疗保险";
l['explain how to file a claim'] = "解释如何申请理赔";
l['help customer know how to call IMG about a specific claim or coverage question in Chinese language'] = "告诉客户如何利用IMG的中文电话服务咨询特定的理赔问题";
l['explain how they receive claims payment after they return to China'] = "解释客户回中国后如何接收理赔的赔款";
l['assist a new customer after a payment decline'] = "帮助付款被拒的新客户";
l['have IMG send you a fulfillment kit including ID card'] = "要求IMG邮寄保单包括保险卡";
l['cancel a policy before it starts because your travel plans changed.  For use before a policy is effective'] = "解释由于旅程改变，要求在保险生效前取消保险";
l['cancel a policy before effective date because the school waiver was declined.  For use before a policy is effective'] = "由于学校waiver 被拒，需要取消保险。 适用于在保险生效之前取消";
l['cancel a policy early for a partial refund. For use after a policy is effective'] = "保险生效后取消保险，要求部分退款";
l['\n\nDear \[CUSTOMER NAME\]\n\nI see that you attempted to purchase your international insurance.  My online system shows that your credit card payment was declined, so your insurance is not active.\n\nSome common reasons for a declined payment are:\n\n-Sometimes the billing address is difficult to translate.  You can try putting your billing address in your native language into google maps and have it translated to English.  When address is a problem this usually helps.\n\n-When IMG asks for billing address, you need to fill in the address that your credit card bill is sent.  This will not impact where your insurance materials are sent, but is needed to verify your card.\n\n-Some banks need to be notified in advance when you make a credit card charge outside your home country - you may need to call the number on the back of your card to tell them this is a genuine charge.\n\nLet me know if you would like assistance.\n\nThanks for your business.\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n'] = "\n\nDear \[客户姓名\]\n\n我们的系统显示您试着购买我们的国际医疗保险，但您的信用卡付款没有成功，所以您的保险没有生效。\n\n 信用卡付款失败的常见原因如下：\n\n-有时账单地址很难翻译。您可以将您的中文地址输入\"Google Maps\"中搜索，\"Google Maps\"就会给出您的地址的英文翻译。您需要核对\"Google Maps\"翻译的准确性。通常这个方法会很有帮助。\n\n-用信用卡付款时需要填写账单地址。账单地址是您接收信用卡账单的地址。填写正确的账单地址是为了用来确认信用卡，不会影响您的保单或购买保险的收据的邮寄地址。\n\n-信用卡被国外公司扣款时，有些银行需要事先通知。您可能需要给您的银行打电话，通知他们您的信用卡会被国外保险公司扣款。\n\n如需帮助请告知。\n\n非常感谢您的信任和支持！\n\nCustomer Service\ntaianfinancial.com\n317-318-8258 (Chinese)\n317-318-8259 (English)\n\n";
l['EMAILS FROM TAIAN TO THE CUSTOMER FOR GENERAL QUESTIONS ABOUT HOSPITAL DOCTOR AND CLAIMS'] = "泰安发给客户的Email关于看病理赔";

l['TaiAn International Health Insurance for Wholala'] = "泰安国际医保险 - Wholala";

l['J SCHOLARS'] = "J 访问学者";
l['J1 Scholar'] = "J1 访问学者";
l['UIUC exchange visitors (J visa) have required health insurance coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Taian Scholar/Student Insurance Plan B ($100 deductible and $50,000 benefit per accident or illness) and Plan C ($500 deductible and $50,000 benefit) are the most affordable plans that meet the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.'] = "UIUC 对J1访问学者医疗保险的要求是：1. 每次生病或受伤的最高赔付为$50,000; 2. 遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500。 泰安保险计划B的每次生病或受伤最高赔付$50,000选项和计划C的免赔额$500, 最高赔付$50,000选项是满足此标准的最经济实惠的两种保险计划，同时也都符合美国国务院的标准。哪个计划更划算取决于你的年龄。网上提交申请几分钟后你就会收到Email电子保单，其中含有你的保险卡和确认信（Visa Letter)。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['J STUDENTS'] = "J 国际学生";
l['J1 Student'] = "J1 国际学生";
l['UIUC enrolled students with a J visa have required health insurance coverage as follows: 1. $500,000 per illness or injury; 2. Deductible not over $500; 3. Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Plan must be effective by the first day UIUC plan is effective (Must have coverage by May 17, 2014 for summer semester).  Taian Scholar/Student Insurance Plan B ($100 deductible) and Plan C ($500 deductible) with $500,000 benefit is the most affordable plan that meets the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members).  Students are required to complete an on line waiver.'] = "UIUC 对在校J1国际学生医疗保险的要求是：1. 每次生病或受伤的最高赔付为$500,000; 2. 遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500; 5. 购买保险的生效日期不迟于UIUC保险的开始日期 ( 2014 summer semester 的保险需要包括May 17, 2014)。泰安访问学者/留学生保险计划B（免赔额$100) 和计划C（免赔额$500) 里的每次生病或受伤最高赔付$500,000选项是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准。哪个计划更划算取决于你的年龄。网上提 交申请几分钟后你就会收到Email电子保单，其中含有你的保险卡和确认信（Visa Letter)。国际学生需要在截至日期前完成网上waiver申请。";
l['F STUDENTS'] = "F 国际学生";
l['UIUC enrolled F visa international students have required health insurance coverage as follows: 1. $500,000 per illness or injury; 2. Not over $2,000 deductible; 3. Plan must be effective by the first day UIUC plan is effective (Must have coverage by May 17, 2014 for summer semester).  Taian Scholar/Student Insurance Plan B ($100 deductible) and Plan C ($1,000 deductible) with $500,000 benefit per illness or injury is the most affordable plan that meets the school requirements (which plan is more affordable depends on your age and family members).  Students are required to complete an on line waiver.'] = "UIUC 对在校F1国际学生医疗保险的要求是：1. 每次生病或受伤的最高赔付为$500,000; 2. 免赔额不超过$2,000; 3. 购买保险的生效日期不迟于UIUC保险的开始日期 ( 2014 summer semester 的保险需要包括May 17, 2014)。泰安访问学者/留学生保险计划B（免赔额$100) 和计划C（免赔额$1,000) 里的每次生病或受伤最高赔付$500,000选项是满足此标准的最经济实惠的保险计划。哪个计划更划算取决于你的年龄。网上提 交申请几分钟后你就会收到Email电子保单，其中含有你的保险卡和确认信（Visa Letter)。国际学生需要在截至日期前完成网上waiver申请。";
l['Plan A (Student Health Advantage) $300,000 / $100 deductible / Maternity'] = "计划A(Student Health Advantage)每次最高赔付$300,000 / 免赔额$100 / 含生育险";
l['(J Scholar - Recommended if you want maternity benefit)'] = "(J访问学者 - 如需生育险)";
l['Plan B (Patriot Exchange) $50,000 / $100 deductible'] = "计划B(Patriot Exchange) 每次最高赔付$50,000 / 免赔额$100";
l['(J Scholar - Recommended Plan)'] = "(J 访问学者 - 推荐计划)";
l['Plan B (Patriot Exchange) $500,000 / $100 deductible'] = "计划B(Patriot Exchange) 每次最高赔付$500,000 / 免赔额$100";
l['(J Student - Recommended Plan)'] = "(J 国际学生 - 推荐计划)";
l['(F Student - Recommended Plan)'] = "(F 国际学生 - 推荐计划)";
l['Plan C (Patriot Travel) $50,000 /$500 deductible'] = "计划C(Patriot Travel) 最高赔付$50,000 / 免赔额$500";
l['(J Scholar)'] = " (J 访问学者)";
l['Plan C (Patriot Travel) $500,000 /$500 deductible'] = "计划C(Patriot Travel) 最高赔付$500,000 / 免赔额$500";
l['Plan C (Patriot Travel) $500,000 / $1000 deductible'] = "计划C(Patriot Travel) 最高赔付$500,000 / 免赔额$1,000";
l['(F Student)'] = "(F 国际学生)";
l['F1 Student'] = "F1 国际学生";
l['J SCHOLARS  (J STUDENTS AND F STUDENTS SCROLL DOWN THE PAGE)'] = "J1访问学者 (J1和F1国际学生见本页下面 )";
l['Monthly Premium'] = "月费";
l['Plan A Student Health Advantage, Plan B Patriot Exchange with $250,000 benefit and Plan C Patriot Travel Medical with $100,000 benefit and $250 deductible meet the waiver requirements for UCLA scholars subject to VSISP coverage. Plan A may be best for someone seeking maternity benefits.  Plan B and Plan C are the most affordable plans that meets the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage including a visa letter which you can send to UCLAVSISP@Garnett-Powers.com for a waiver. After receiving waiver confirmation by email, J-1 scholar brings the waiver confirmation and proof of medical insurance to check-in.'] = "泰安访问学者计划A Student Health Advantage, 计划B Patriot Exchange 中的$250,000每次最高赔付和计划C Patriot America中的$100,000 最高赔付和$250免赔额选项符合UCLA 对J1学者waive VSISP的要求，同时也满足美国国务院的标准。并且最为经济实惠。哪个计划更划算取决于你的年龄。网上提交申请几分钟后你就会收到Email电子保单，其中有保险卡和确认信（visa letter）。将确认信发送到uclavsisp@garnett-powers.com申请waiver。收到waiver 批准的Email后，将waiver 批准信和visa letter 交给学校登记入学。";
l['Plan B (Patriot Exchange) $250,000 / $100 deductible'] = "计划B(Patriot Exchange) 每次最高赔付$250,000 / 免赔额$100";
l['Plan C (Patriot Travel) $100,000 / $250 deductible'] = "计划C(Patriot Travel) 最高赔付$100,000 / 免赔额$250";
l['$100,000 benefit $250 deductible'] = "最高赔付$100,000 免赔额$250";
l['$100,000 benefit $0 deductible'] = "最高赔付$100,000 免赔额$0";
l['(F or J Student - Recommended Plan)'] = "(F/J 国际学生 - 推荐计划)";
l['F1/J1 Student'] = "F1/J1 国际学生";
l['F or J STUDENTS'] = "F/J 国际学生";
l['J SCHOLARS  (STUDENTS SCROLL DOWN THE PAGE)'] = "J1访问学者 (J1和F1国际学生见本页下面 )";

l['Taian International Health Insurance provides International Scholar Insurance for US J1 visa holders and their dependents (J2 visa holders).  All J visa holders are required to meet the US Department of State (USDOS) requirements for the duration of their visa. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the USDOS requirements. Plan A also meets the requirements and has affordable maternity coverage. You can click the links below to see your school requirements and US Department of State requirements.'] = "美国泰安公司为J1访问学者和家属提供国际医疗保险。 J签证持有者的保险必须符合美国国务院的标准，并且保期需要覆盖整个访问期间。 泰安保险计划B里的每次生病或受伤$50,000最高赔付是符合国务院标准的最经济实惠的保险计划。 泰安保险计划A也符合国务院标准并且含有生育保险。 请点击下面的链接，查看你校医疗保险的标准和国务院J签证医疗保险的标准。";
l['Dependents can only purchase when the scholar purchases'] = "家属不能单独购买，只能与J1访问学者一起购买。";
l['J2 can buy Patriot Exchange alone (if J1 buys schools plan) or buy with J1'] = "如果J1在其学校购买了保险，J2就可以单独购买计划 B, 否则J2需要与J1一起购买计划 B";

l['Health insurance for Fordham University Students and Scholars'] = "符合Fordham University标准的留学生和访问学者医疗保险";
l['TaiAn Health Insurance for Fordham University'] = "美国泰安国际医疗保险 - Fordham University";
l['Fordham University requirements for F1 international students or J1 scholar health insurance are: 1. Medical benefits of $500,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Taian Scholar/Student Insurance Plan B (with $500,000 benefit per accident or illness) and Plan C (with $500 deductible and $500,000 benefit) are the most affordable plans that meet the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.'] = "Fordham University对F1国际学生和J1访问学者医疗保险的要求是：1. 每次生病或受伤的最高赔付为$500,000; 2. 遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500。 泰安保险计划B的每次生病或受伤最高赔付$500,000选项和计划C的免赔额$500, 最高赔付$500,000选项是满足此标准的最经济实惠的两种保险计划，同时也都符合美国国务院的标准。哪个计划更划算取决于你的年龄和家属成员。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Fordham University Student and Scholar Requirements'] = "Fordham University 留学生和访问学者保险的标准";
l['Monthly Price for Plan C ($500,000 benefit, $500 deductible)'] = "计划C的月费（$500,000最高赔付，$500免赔额）";


l['Western University of Health Sciences exchange visitors (J visa) have required health insurance coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Taian Scholar/Student Insurance Plan B ($100 deductible and $50,000 benefit per illness or injury) and Plan C ($500 deductible with $50,000 benefit) are the most affordable plans that meet the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance. See plan benefits in the chart below.'] = "Western University of Health Sciences对J1访问学者医疗保险的要求是：1. 每次生病或受伤的最高赔付为$50,000; 2. 遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500。 泰安保险计划B 免赔额$100, 每次生病或受伤最高赔付$50,000选项和计划C 免赔额$500, 最高赔付$50,000选项是满足此标准的最经济实惠的两种保险计划，同时也都符合美国国务院的标准。哪个计划更划算取决于你的年龄和家庭成员。网上提交申请几分钟后你就会收到Email电子保单，其中含有你的保险卡和确认信（Visa Letter)。你可以将确认信发给学校证明已经购买满足学校要求的保险。保险简介请见下面的表格。";
l['TaiAn Health Insurance for Western University of Health Sciences'] = "美国泰安国际医疗保险 - Western University of Health Sciences";
l['Western University of Health Sciences Scholar Requirements'] = "Western University of Health Sciences 访问学者医疗保险的标准";
l['STUDENTS (CA or OR)'] = "留学生（加州和俄勒冈州）";
l['Western University of Health Sciences enrolled F visa students have required health insurance coverage as follows: 1. Deductible not over $1,000 per policy year (and not over $2,000 for family). Taian Scholar/Student Insurance Plan C ($1000 deductible) with $50,000 benefit is the most affordable plan that meets the school requirements.'] = "Western University of Health Sciences对F1留学生医疗保险的要求是：个人年度免赔额不超过$1,000, 家庭年度免赔额不超过$2,000。泰安访问学者/留学生保险计划C（免赔额$1,000) 里的最高赔付$50,000选项是满足此标准的最经济实惠的保险计划。";
l['Western University of Health Sciences enrolled J visa students have required health insurance coverage as follows: 1. Deductible not over $500 per policy year (and not over $2,000 for family); 2. Repatriation of remains of $10,000; 3. Medical evacuation of $15,000. Taian Scholar/Student Insurance Plan C ($500 deductible) with $50,000 benefit is the most affordable plan that meets the school requirements and the US Department of State requirements.'] = "Western University of Health Sciences对J1留学生医疗保险的要求是：1. 个人年度免赔额不超过$500, 家庭年度免赔额不超过$2,000; 2. 遗体返送$10,000; 3. 紧急救护 $15,000;泰安访问学者/留学生保险计划C（免赔额$500) 里的最高赔付$50,000选项是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准。";
l['Western University of Health Sciences (CA) Student Requirements'] = "Western University of Health Sciences (CA) 留学生医疗保险的标准";
l['Western University of Health Sciences (OR) Student Requirements'] = "Western University of Health Sciences (OR) 留学生医疗保险的标准";
l['Plan C (Patriot Travel) $50,000 /$1,000 deductible'] = "计划C(Patriot Travel) 最高赔付$50,000 / 免赔额$1,000";
l['(All Student - Recommended Plan)'] = "( F1/J1留学生 - 推荐计划 )";
l['(F visa Student - Lowest Cost Plan)'] = "( F1留学生 -  最节省计划 )";
l['CA F1 student requirement'] = "学校 (CA) F1标准";
l['OR F1 student requirement'] = "学校 (OR) F1标准";
l['Health insurance for Western University of Health Sciences Students and Scholars'] = "符合Western University of Health Sciences标准的留学生和访问学者医疗保险";

l['UC Riverside requirements for J1 scholar (not for enrolled students) health insurance are: 1. Medical benefits of $500,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $50,000; 4. Deductible not over $250. Taian Scholar/Student Insurance Plan B (with $500,000 benefit per accident or illness)  and Plan C (with $250 deductible and $500,000 benefit) are the most affordable plans that meet the school requirements and the US Department of State requirements (which plan is more affordable depends on your age and family members). Shortly after submitting an application you will receive confirmation of your coverage which you can send to school as proof of insurance.'] = "UC Riverside 对J1访问学者(不包括在校学生)医疗保险的要求是：1. 每次生病或受伤的最高赔付为$500,000; 2. 遗体返送$7,500; 3. 紧急救护$50,000; 4. 免赔额不超过$250。泰安保险计划B的每次生病或受伤最高赔付$500,000选项和计划C的免赔额$250, 最高赔付$500,000选项是满足此标准的最经济实惠的两种保险计划，同时也都符合美国国务院的标准。哪个计划更划算取决于你的年龄和家属成员。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Monthly Price for Plan B ($500,000 per illness or injury)'] = "计划B的月费（$500,000每次生病最高赔付）";
l['Monthly Price for Plan C ($500,000 benefit, $250 deductible)'] = "计划C的月费（$500,000最高赔付，$250免赔额）";
l['Buy Plan C (Patriot Travel Medical)'] = "购买计划C (爱国者旅游医疗保险)";
l['Plan C (Patriot Travel for non-US citizens)'] = "计划C (爱国者旅游保险, 非美国公民)";
l['Designed for anyone traveling outside their home country. F2/J2 can buy alone. Purchase daily (at least 5 days) or monthly, renewable up to 2 years if 1 month or more is purchased.'] = "计划适用于任何人出国旅游任何国家。F2/J2可以单独购买。按天数（最少5天）或按月购买，如果购买1个月以上可以续保至2年。";
l['$0, $100, $250, $500, $1,000, $2,500 Deductible is per year'] = "$0, $100, $250, $500, $1,000, $2,500 是每年的免赔额";
l['Injury up to policy max, Sudden pain N/A'] = "受伤赔付至最高限额，突痛不包含";
l['Group Pricing'] = "团体价格";
l['2 or more primary insured have about 10% discount'] = "两个或以上主申请人团体优惠10%";
l['5 or more primary insured have about 10% discount'] = " 五个或以上主申请人团体优惠10%";
l['$50,000 maximum and $250 deductible (per year)'] = "$50,000 最高赔付和$250年度免赔额";
l['Buy Group'] = "购买团体保险";
l['Buy Group (10% off)'] = "购买团体计划(10%优惠）";
l['Group for 2 or more'] = "两个或以上主申请人";
l['Group for 5 or more'] = "五个或以上主申请人";
l['$50,000, $100,000, $500,000, $1,000,000 lifetime maximum'] = "$50,000, $100,000, $500,000, $1,000,000 终身最高赔付";
l['$0, $100, $250, $500, $1,000, $2,500 annual deductible'] = "$0, $100, $250, $500, $1,000, $2,500 年度免赔额";

l['To maximize your benefits under your plan hospital stays should be precertified if planned in advance.  IMG should be notified promptly for emergency hospital stays.'] = "为了您的最大利益,  住院治疗前应取得预认证。如果是紧急住院，也应尽早通知IMG。";
l['Newborn care is covered for 31 days after birth if the birth is covered under the plan.'] = "计划包括新生儿出生后31天的护理。";

l['Name of your prior student insurance provider (If you have been in the US 6 months or longer)?'] = "你之前的学生保险的保险公司名称（如果你一直在美国6个月或更长的时间）？";
l['Prior coverage expiration date (If you have been in the US 6 months or longer)?'] = "之前的保险何时过期的（如果你一直在美国6个月或更长的时间）？";
l['School F1 requirement'] = "学校F1标准";
l['School J1 requirement'] = "学校J1标准";
l['Optional benefit change in Florida, Hawaii, Idaho, Massachusetts to shorten the preexisting condition exclusion from 12 months to 6 months.'] = "在Florida, Hawaii, Idaho, Massachusetts州，可以选择将先前疾病免责期从12个月缩短为6个月。";
l['With 6 month preexisting condition benefit change there is a 10 month wait for maternity benefits.'] = "如果将先前疾病免责期选为6个月，生育险就有10个月的免责期。";
l['J Scholar'] = "J签证学者";
l['J-1 scholars including visiting scholars, visiting graduate researchers or non-degree students at UCLA (other than those visitors described below) are required to enroll OR opt out of the Visiting Scholar Injury and Sickness Insurance Plan (VSISP) through Garnett-Powers & Associates. To waive VSISP plan, J-1 scholars are required to show proof of health insurance with the following minimum coverage:'] = "UCLA的J-1学者(包括访问学者，访问研究生或者非学位学生）（不包括下述三种类型）需要通过Garnett-Powers & Associates 购买访问学者受伤和疾病保险计划（VSISP）或申请waive VSISP计划。 Waive VSISP计划的保险需要符合以下标准：";
l['$100,000 per accident/illness in medical coverage'] = " 每次生病或受伤的最高赔付为$100,000";
l['An annual deductible of no more than $250'] = " 年免赔额不高于$250";
l['Coinsurance that does not exceed 25%'] = " 共同赔付不超过25%";
l['Medical evacuation up to $10,000'] = " 紧急救援$10,000";
l['Repatriation up to $7,500'] = " 遗体返送$7,500";
l['The groups exempt from VSISP include; (A)  Postdoctoral Scholars - required to enroll in the Postdoctoral Scholar Benefits Plan (PSBP); (B)  Degree, EAP, UCLA Exchange (IEO) students - must enroll in the UCLA USHIP  plan; (C)  UCLA Staff & Faculty.'] = "VSISP计划不包括这三种类型（A）博士后 - 需要加入博士后福利计划（PSBP）;（B）学位学生，EAP和交换的学生 - 必须加入UCLA USHIP计划; （C）UCLA的职员。";
l['Taian Travel insurance plan (Patriot America) with a $100,000 benefit and a $250 deductible meets the waiver requirements for UCLA scholars subject to VSISP coverage. This plan is the least expensive option for meeting this requirement. The chart on the left below shows the monthly premium rates for this plan.  The chart on the right shows premium rates to choose a $0 deductible plan with the same benefits (a little more expensive).  Shortly after submitting an application you will receive confirmation of your coverage including a visa letter which you can send to UCLAVSISP@Garnett-Powers.com for a waiver. After receiving waiver confirmation by email, J-1 scholar brings the waiver confirmation and proof of medical insurance to check-in.'] = "泰安旅游医疗保险（Patriot America）中$100,000 最高赔付和$250免赔额选项符合UCLA 对J1学者waive VSISP的要求，并且最为经济实惠。下面表格的左侧就是该计划每月保费的价格表，右侧是免赔额为$0的选择。这两种选择都满足UCLA 对J1学者waive VSISP的要求。网上提交申请几分钟后你就会收到Email，其中有保险卡和确认信（visa letter）。将确认信发送到uclavsisp@garnett-powers.com申请waiver。收到waiver 批准的Email后，将waiver 批准信和visa letter 交给学校登记入学。";
l['J-2 dependents are subject to the same benefit requirements.  Your J-2 dependents can buy with you, or buy a separate plan.  If your J-2 dependents are not going to be in the US for the same time period you will be here, you can buy a separate plan with different coverage dates to match their stay in the US.'] = "J2 购买保险的标准与J1的一样。J2可以与J1一起购买, 也可以单独购买(如果J1购买了学校保险或其他公司的保险)。 J1和J2需要购买不同日期的保险时，可以分开申请购买不同保期的保险。";
l['Monthly Price for $100,000 benefit $250 deductible'] = "$100,000最高赔付和 $250免赔额的月费";
l['Monthly Price for $100,000 benefit $0 deductible'] = "$100,000最高赔付和 $0 免赔额的月费";
l['Monthly Price for $500,000 benefit $250 deductible'] = "$500,000最高赔付和 $250免赔额的月费";
l['Monthly Price for $500,000 benefit'] = "$500,000最高赔付和";
l['Monthly Price for $500,000 benefit $0 deductible'] = "$500,000最高赔付和 $0 免赔额的月费";
l['Monthly Price for $1,000,000 benefit $0 deductible'] = "$1,000,000最高赔付和 $0 免赔额的月费";
l['Buy Patriot America Medical Insurance'] = "购买爱国者旅游医疗保险";


l['Johns Hopkins University Scholar Requirements'] = "Johns Hopkins University 访问学者医疗保险的标准";
l['Johns Hopkins Medical Institutions Scholar Requirements'] = "Johns Hopkins Medical Institutions 访问学者医疗保险的标准";
l['TaiAn Health Insurance for Johns Hopkins University'] = "美国泰安国际医疗保险 - Johns Hopkins University";
l['Health insurance for Johns Hopkins University Scholars'] = "符合Johns Hopkins University标准的访问学者医疗保险";
l['Health insurance for Johns Hopkins Medical Scholars'] = "符合Johns Hopkins Medical标准的访问学者医疗保险";
l['TaiAn Health Insurance for University of Pennsylvania'] = "美国泰安国际医疗保险 - University of Pennsylvania";
l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Pennsylvania J scholar standards and J student standards (Not F visa student standards).  J visa holders have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Pennsylvania as proof of insurance.'] = "University of Pennsylvania 对J1访问学者和J1国际学生（不包括F1国际学生)购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Pennsylvania Scholar Requirements'] = "University of Pennsylvania 访问学者医疗保险的标准";
l['Health insurance for University of Pennsylvania Students and Scholars'] = "符合University of Pennsylvania标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for University of Hawaii'] = "美国泰安国际医疗保险 - University of Hawaii";
l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Hawaii standards for F visa and J visa  standards. J visa holders (enrolled students or visiting scholars) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Hawaii as proof of insurance.  J students have their insurance approved by ISS.'] = "泰安访问学者留学生保险计划A和B符合University of Hawaii对J签证和F签证保险的要求。University of Hawaii 对J1访问学者和J1国际学生购买医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000； 2.遗体返送$7,500; 3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。泰安访问学者留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。J1国际学生保险还需要在学校 ISS办理waiver。";
l['University of Hawaii F visa student insurance is approved by Student Health Insurance Office.  F visa holders have required coverage as follows: 1. Medical benefits of $100,000 per accident or illness; 2. Coinsurance coverage of 75% or more and mental nervous benefits ; 3.Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Deductible not over $500; 6. Pre-existing waiting period not over 6 months.  Plan A is the most affordable plan that meets the standards. You need to select the optional rider for a 6 month pre-existing condition waiting period.'] = "F1国际学生的保险需要在Student Health Insurance Office办理waiver。F1国际学生的保险要求是： 1.每次生病或受伤的最高赔付至少为$100,000； 2. 共同保险75%并有精神健康保险； 3.遗体返送$7,500;  4. 紧急救护$10,000; 5. 每次生病或受伤的免赔额不超过$500； 6. 先前疾病的免责期不超过6个月。泰安访问学者留学生保险计划A是满足此标准的最经济实惠的保险计划，你需要选先前疾病免责期6个月的附加选项。";
l['University of Hawaii J scholar'] = "University of HawaiiJ1 访问学者链接";
l['University of Hawaii F or J student'] = "University of HawaiiF1 或 J1学生链接";
l['We can assist with the forms required for each visa.'] = "泰安协助填写waiver form.";
l['Health Insurance for University of Hawaii Students and Scholars'] = "符合University of Hawaii标准的留学生和访问学者医疗保险";

l['J1 student requirement'] = "J1 国际学生保险的标准";
l['J1 scholar requirement'] = "J1 访问学者保险的标准";
l['University of Pennsylvania J1 student requirement'] = "University of Pennsylvania J1 国际学生保险的标准";
l['University of Pennsylvania J1 scholar requirement'] = "University of Pennsylvania J1 访问学者保险的标准";
l['TaiAn Health Insurance for Brown University'] = "美国泰安国际医疗保险 - Brown University";
l['Enrolled international students have to buy Plan A to meet Brown University standards, and complete an online waiver.'] = "全日制留学生可以购买泰安访问学者/留学生保险计划A以满足学校对留学生保险的要求。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['Brown University Scholar Requirements'] = "Brown University 访问学者医疗保险的标准";
l['Brown University Student Requirements'] = "Brown University 留学生医疗保险的标准";
l['Health insurance for Brown University Students and Scholars'] = "符合Brown University标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for Syracuse University'] = "美国泰安国际医疗保险 - Syracuse University";
l['Enrolled international students have to buy Plan A to meet Syracuse University standards, and complete an online waiver.'] = "全日制留学生可以购买泰安访问学者/留学生保险计划A以满足学校对留学生保险的要求。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['Syracuse University Scholar Requirements'] = "Syracuse University 访问学者医疗保险的标准";
l['Syracuse University Student Requirements'] = "Syracuse University 留学生医疗保险的标准";
l['Health insurance for Syracuse University Students and Scholars'] = "符合Syracuse University标准的留学生和访问学者医疗保险";


l['TaiAn Health Insurance for Caltech'] = "美国泰安国际医疗保险 - Caltech";
l['Caltech Scholar Requirements'] = "Caltech 访问学者医疗保险的标准";
l['Caltech Student Requirements'] = "Caltech 留学生医疗保险的标准";
l['Health insurance for Caltech Scholars'] = "符合Caltech标准的访问学者医疗保险";

l['TaiAn Health Insurance for California State University - Long Beach'] = "美国泰安国际医疗保险 - California State University - Long Beach";
l['California State University - Long Beach Scholar Requirements'] = "California State University - Long Beach 访问学者医疗保险的标准";
l['California State University - Long Beach does not have an online listing of J scholar insurance requirements.  We have received emails from prior customers confirming their requirements conform to US Department of State standards.'] = "California State University - Long Beach 对J签证访问学者保险没有明确要求。 该校J1访问学者购买美国国务院标准的保险都得到学校的认同。";
l['Health insurance for California State University - Long Beach Scholars'] = "符合California State University - Long Beach标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Rhode Island'] = "美国泰安国际医疗保险 - University of Rhode Island";
l['University of Rhode Island Scholar Requirements'] = "University of Rhode Island 访问学者医疗保险的标准";
l['Health insurance for University of Rhode Island Scholars'] = "符合University of Rhode Island标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Rochester'] = "美国泰安国际医疗保险 - University of Rochester";
l['University of Rochester Scholar Requirements'] = "University of Rochester 访问学者医疗保险的标准";
l['Health insurance for University of Rochester Scholars'] = "符合University of Rochester标准的访问学者医疗保险";


l['TaiAn Health Insurance for University of South Florida'] = "美国泰安国际医疗保险 - University of South Florida";
l['University of South Florida Scholar Requirements'] = "University of South Florida 访问学者医疗保险的标准";
l['Health insurance for University of South Florida Scholars'] = "符合University of South Florida标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Tennessese - Knoxville'] = "美国泰安国际医疗保险 - University of Tennessese - Knoxville";
l['University of Tennessese - Knoxville Scholar Requirements'] = "University of Tennessese - Knoxville 访问学者医疗保险的标准";
l['University of Tennessese - Knoxville Student Requirements'] = "University of Tennessese - Knoxville 留学生医疗保险的标准";
l['Health insurance for University of Tennessese - Knoxville Students and Scholars'] = "符合University of Tennessese - Knoxville标准的留学生和访问学者医疗保险";
l['Enrolled international students have required coverage as follows: 1. Medical benefits of $500,000 per accident or illness; 2. Repatriation of remains of $20,000; 3. Medical evacuation of $50,000; 4. Deductible not over $500; 5. A waiting period for pre-existing conditions of less than 13 months.  Taian Scholar/Student Insurance Plan B with $500,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the standards.  Plan A does not meet the student coverage requirement.  Coverage for the fall semester must be August 1 – December 31, coverage for the spring semester must include summer and be January 1 – July 31.  You will also need to complete a waiver.'] = "全日制在校国际学生的保险要求是： 1.每次生病或受伤的最高赔付至少为$500,000; 2.遗体返送$20,000; 3.紧急救护$50,000; 4. 每次生病或受伤的免赔额不超过$500; 5.先前疾病的等待期不超过13个月。 泰安保险计划B 里的每次生病或受伤$500,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。 泰安保险计划A不能满足学校对国际学生的保险要求。 Fall semester的保险需要覆盖August 1 – December 31。 Spring semester需要包括summer覆盖January 1 – July 31。 购买成功后，需要将保险确认信和waiver form 一起发给学校, 要求waive 学校保险。";

l['TaiAn Health Insurance for Washington State University'] = "美国泰安国际医疗保险 - Washington State University";
l['Washington State University Scholar Requirements'] = "Washington State University 访问学者医疗保险的标准";
l['Health insurance for Washington State University Scholars'] = "符合Washington State University标准的访问学者医疗保险";
l['TaiAn Health Insurance for Cleveland State University'] = "美国泰安国际医疗保险 - Cleveland State University";

l['Cleveland State University Scholar Requirements'] = "Cleveland State University 访问学者医疗保险的标准";
l['Health insurance for Cleveland State University Scholars'] = "符合Cleveland State University标准的访问学者医疗保险";

l['TaiAn Health Insurance for Clark University'] = "美国泰安国际医疗保险 - Clark University";

l['Clark University Scholar Requirements'] = "Clark University 访问学者医疗保险的标准";
l['Health insurance for Clark University Scholars'] = "符合Clark University标准的访问学者医疗保险";

l['TaiAn Health Insurance for George Washington University'] = "美国泰安国际医疗保险 - George Washington University";

l['George Washington University Scholar Requirements'] = "George Washington University 访问学者医疗保险的标准";
l['Health insurance for George Washington University Scholars'] = "符合George Washington University标准的访问学者医疗保险";
l['TaiAn Health Insurance for Iowa State University'] = "美国泰安国际医疗保险 - Iowa State University";

l['Iowa State University Scholar Requirements'] = "Iowa State University 访问学者医疗保险的标准";
l['Health insurance for Iowa State University Scholars'] = "符合Iowa State University标准的访问学者医疗保险";

l['TaiAn Health Insurance for Georgetown University'] = "美国泰安国际医疗保险 - Georgetown University";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Georgetown University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Georgetown as proof of insurance.'] = "Georgetown 对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['Georgetown University Scholar Requirements'] = "Georgetown University 访问学者医疗保险的标准";
l['Georgetown University Student Requirements'] = "Georgetown University 留学生医疗保险的标准";
l['Health insurance for Georgetown University Students and Scholars'] = "符合Georgetown University标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for University of Notre Dame'] = "美国泰安国际医疗保险 - University of Notre Dame";
l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Notre Dame enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Notre Dame as proof of insurance.'] = "University of Notre Dame 对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['University of Notre Dame Scholar Requirements'] = "University of Notre Dame 访问学者医疗保险的标准";
l['University of Notre Dame Student Requirements'] = "University of Notre Dame 留学生医疗保险的标准";
l['Health insurance for University of Notre Dame Students and Scholars'] = "符合University of Notre Dame标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for University of Toledo'] = "美国泰安国际医疗保险 - University of Toledo";
l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Toledo enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Toledo as proof of insurance.'] = "University of Toledo 对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['University of Toledo Scholar Requirements'] = "University of Toledo 访问学者医疗保险的标准";
l['University of Toledo Student Requirements'] = "University of Toledo 留学生医疗保险的标准";
l['Health insurance for University of Toledo Students and Scholars'] = "符合University of Toledo标准的留学生和访问学者医疗保险";
l['TaiAn Health Insurance for Georgia State University'] = "美国泰安国际医疗保险 - Georgia State University";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Georgia State University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Georgia State as proof of insurance.'] = "Georgia State 对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['Georgia State University Scholar Requirements'] = "Georgia State University 访问学者医疗保险的标准";
l['Georgia State University Student Requirements'] = "Georgia State University 留学生医疗保险的标准";
l['Health insurance for Georgia State University Students and Scholars'] = "符合Georgia State University标准的留学生和访问学者医疗保险";

l['Washington University in St. Louis & WUSTL Medical School Scholar Requirements'] = "Washington University in St. Louis & WUSTL Medical School 访问学者医疗保险的标准";
l['TaiAn Health Insurance for Washington University in St. Louis & WUSTL Medical School'] = "美国泰安国际医疗保险 - Washington University in St. Louis & WUSTL Medical School";
l['Health insurance for Washington University in St. Louis & WUSTL Medical School Scholars'] = "符合Washington University in St. Louis & WUSTL Medical School标准的访问学者医疗保险";

l['William & Mary Scholar Requirements'] = "William & Mary 访问学者医疗保险的标准";
l['TaiAn Health Insurance for William & Mary'] = "美国泰安国际医疗保险 - William & Mary";
l['Health insurance for William & Mary Scholars'] = "符合William & Mary标准的访问学者医疗保险";

l['Taian Scholar/Student Insurance Plan A and Plan B meet West Virginia University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $100,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Copay not over $10. Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to West Virginia University in St. Louis as proof of insurance.'] = "West Virginia University 对J1访问学者（不包括全日制在校学生)购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$100,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500; 5. 挂号费不超过$10。泰安访问学者/留学生保险计划B Standard Plan 里的$250,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email电子保单，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['West Virginia University Scholar Requirements'] = "West Virginia University 访问学者医疗保险的标准";
l['TaiAn Health Insurance for West Virginia University'] = "美国泰安国际医疗保险 - West Virginia University";
l['Health insurance for West Virginia University Scholars'] = "符合West Virginia University标准的访问学者医疗保险";


l['UC San Francisco Scholar Requirements'] = "UC San Francisco 访问学者医疗保险的标准";
l['TaiAn Health Insurance for UC San Francisco'] = "美国泰安国际医疗保险 - UC San Francisco";
l['Health insurance for UC San Francisco Scholars'] = "符合UC San Francisco标准的访问学者医疗保险";

l['UC Irvine Scholar Requirements'] = "UC Irvine 访问学者医疗保险的标准";
l['TaiAn Health Insurance for UC Irvine'] = "美国泰安国际医疗保险 - UC Irvine";
l['Health insurance for UC Irvine Scholars'] = "符合UC Irvine标准的访问学者医疗保险";
l['Taian Scholar/Student Insurance Plan B meets UC Riverside J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $50,000; 4. Deductible not over $250. Plan B with $500,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UC Riverside as proof of insurance.'] = "UC Riverside  对J1访问学者（不包括全日制在校学生)购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$500,000；2.遗体返送$7,500; 3. 紧急救护$50,000; 4. 每次生病或受伤的免赔额不超过$250。泰安访问学者/留学生保险计划B Standard Plan 里的$500,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['UC Riverside Scholar Requirements'] = "UC Riverside 访问学者医疗保险的标准";
l['TaiAn Health Insurance for UC Riverside'] = "美国泰安国际医疗保险 - UC Riverside";
l['Health insurance for UC Riverside Scholars'] = "符合UC Riverside标准的访问学者医疗保险";

l['UC Santa Barbara Scholar Requirements'] = "UC Santa Barbara 访问学者医疗保险的标准";
l['TaiAn Health Insurance for UC Santa Barbara'] = "美国泰安国际医疗保险 - UC Santa Barbara";
l['Health insurance for UC Santa Barbara Scholars'] = "符合UC Santa Barbara标准的访问学者医疗保险";

l['UC Santa Cruz Scholar Requirements'] = "UC Santa Cruz 访问学者医疗保险的标准";
l['TaiAn Health Insurance for UC Santa Cruz'] = "美国泰安国际医疗保险 - UC Santa Cruz";
l['Health insurance for UC Santa Cruz Scholars'] = "符合UC Santa Cruz标准的访问学者医疗保险";

l['University of Illinois at Chicago Scholar Requirements'] = "University of Illinois at Chicago 访问学者医疗保险的标准";
l['TaiAn Health Insurance for University of Illinois at Chicago'] = "美国泰安国际医疗保险 - University of Illinois at Chicago";
l['Health insurance for University of Illinois at Chicago Scholars'] = "符合University of Illinois at Chicago标准的访问学者医疗保险";
l['TaiAn Health Insurance for MUSC'] = "美国泰安国际医疗保险 - MUSC";

l['MUSC Scholar Requirements'] = "MUSC 访问学者医疗保险的标准";
l['Health insurance for MUSC Scholars'] = "符合MUSC标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of California at Berkeley'] = "美国泰安国际医疗保险 - University of California at Berkeley";
l['Taian Travel Insurance Plan (Patriot America) with $250.00 deductible and $500,000 benefit meets UC Berkeley J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per illness/injury; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Annual deductible not over $250.00. Travel plan with $250.00 deductible and $500,000 maximum (we suggest $1,000,000 maximum) is the most affordable plan that meets the standards, and the US Department of State requirements. The chart on the left below shows the monthly premium rates for this plan.  The chart on the right shows premium rates to choose a $0 deductible plan with the same benefits (a little more expensive).  Shortly after submitting an application you will receive confirmation of your coverage which you can send to UC Berkeley as proof of insurance.'] = "泰安旅游医疗保险(Patriot America) $500,000最高赔付和免赔额$250选项符合 UC Berkeley J1访问学者的保险标准(不包括全日制在校学生)。 UC Berkeley 对J1访问学者保险的要求如下：1.每次生病或受伤的最高赔付至少为$500,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 年度免赔额不超过$250。泰安旅游医疗保险$500,000最高赔付(建议$1,000,000更好）和免赔额$250选项是满足此标准的最经济实惠的保险计划，下面表格的左侧就是该计划每月保费的价格表。右侧是免赔额为$0的选择。这两种选择都满足UC Berkeley对J1访问学者的要求，同时也符合美国国务院的标准。 网上提交申请几分钟后你就会收到电子保单，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['Please click on Travel Insurance tab at top of page.  Student Plan A and Plan B do not meet UC Berkeley requirements.'] = "请点击页面顶部的旅游和探亲保险按钮。学生保险计划A和B不符合 UC Berkeley 的要求。";
l['UC Berkeley Scholar Requirements'] = "UC Berkeley 访问学者医疗保险的标准";
l['Health insurance for UC Berkeley Scholars'] = "符合UC Berkeley标准的访问学者医疗保险";
l['J-2 dependents are subject to the same benefit requirements.  Your J-2 dependents can buy with you, or buy a separate plan.  If your J-2 dependents are not going to be in the US for the same time period you will be here, you can buy a separate plan with different coverage dates to match their stay in the US.'] = "J2 购买保险的标准与J1的一样。J2可以与J1一起购买, 也可以单独购买(如果J1购买了学校保险或其他公司的保险)。 J1和J2需要购买不同日期的保险时，可以分开申请购买不同保期的保险。";

l['TaiAn Health Insurance for Duke University'] = "美国泰安国际医疗保险 - Duke University";
l['Taian Travel Insurance Plan (Patriot America) with $0.00 deductible and $500,000 benefit meets Duke University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per illness/injury; 2. No Deductible; 3. Coinsurance not over 20%; 4. Medical evacuation of $10,000;  5.  Repatriation of remains of $7,500. Travel plan with $0.00 deductible and $500,000 maximum is the most affordable plan that meets the standards, and the US Department of State requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to Duke University as proof of insurance.'] = "泰安国际旅游医疗保险(Patriot America) $500,000最高赔付和$0.00 免赔额选项符合 Duke University J1访问学者的保险标准(不包括全日制在校学生)。 Duke University 对J1访问学者保险的要求如下: 1. 每次生病或受伤的最高赔付至少为$500,000; 2. 免赔额为$0.00; 3. 共同保险不超过20%; 4. 紧急救护$10,000; 5. 遗体返送$7,500。 泰安国际旅游医疗保险$500,000最高赔付和免赔额$0.00选项是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准。 网上提交申请几分钟后你就会收到email 电子保单，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['Duke University Scholar Requirements'] = "Duke University 访问学者医疗保险的标准";
l['Health insurance for Duke University Scholars'] = "符合Duke University标准的访问学者医疗保险";

l['TaiAn Health Insurance for Kansas State University'] = "美国泰安国际医疗保险 - Kansas State University";
l['Kansas State University Scholar Requirements'] = "Kansas State University 访问学者医疗保险的标准";
l['Health Insurance for Kansas State University Scholars'] = "符合Kansas State University标准的访问学者医疗保险";
l['Kansas State University Student Requirements'] = "Kansas State University 留学生医疗保险的标准";
l['Kansas State University J scholars (not for enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. These requirements are the same as the US Department of State. Taian Plan B (with $50,000 benefit per illness or injury and deductible not over $500) and Plan C (with $50,000 benefit and deductible not over $500) are the most affordable plans that meet the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "Kansas State University对J1访问学者(不包括全日制在校学生)购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。 此标准与国务院的标准一样。泰安保险计划B(每次生病或受伤$50,000最高赔付, 免赔额不超过$500)和计划C ($50,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。 根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";

l['TaiAn Health Insurance for West Virginia University'] = "美国泰安国际医疗保险 - West Virginia University";
l['West Virginia University Scholar Requirements'] = "West Virginia University 访问学者医疗保险的标准";
l['Health Insurance for West Virginia University International Students and Scholars'] = "符合West Virginia University标准的留学生和访问学者医疗保险";
l['West Virginia University Student Requirements'] = "West Virginia University 留学生医疗保险的标准";
l['West Virginia University J scholars (not for enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. These requirements are the same as the US Department of State. Taian Plan B (with $50,000 benefit per illness or injury and deductible not over $500) and Plan C (with $50,000 benefit and deductible not over $500) are the most affordable plans that meet the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "West Virginia University对J1访问学者(不包括全日制在校学生)购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。 此标准与国务院的标准一样。泰安保险计划B(每次生病或受伤$50,000最高赔付, 免赔额不超过$500)和计划C ($50,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。 根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";


l['TaiAn Health Insurance for University of Cincinnati'] = "美国泰安国际医疗保险 - University of Cincinnati";
l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Cincinnati J scholar standards (and enrolled students with 5 or fewer credit hours per semester). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Cincinnati as proof of insurance.'] = "University of Cincinnati 对J1访问学者（包括每学期修课5学分或少于5学分的在校国际学生)购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Cincinnati Scholar Requirements'] = "University of Cincinnati 访问学者医疗保险的标准";
l['Health insurance for University of Cincinnati Scholars'] = "符合University of Cincinnati标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Texas MD Anderson'] = "美国泰安国际医疗保险 - University of Texas MD Anderson";

l['University of Texas MD Anderson Scholar Requirements'] = "University of Texas MD Anderson 访问学者医疗保险的标准";
l['Health insurance for University of Texas MD Anderson Scholars'] = "符合University of Texas MD Anderson标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Texas Southwestern Medical Center'] = "美国泰安国际医疗保险 - University of Texas Southwestern Medical Center";

l['University of Texas Southwestern Medical Center Scholar Requirements'] = "University of Texas Southwestern Medical Center 访问学者医疗保险的标准";
l['Health insurance for University of Texas Southwestern Medical Center Scholars'] = "符合University of Texas Southwestern Medical Center标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Texas Health Center Houston'] = "美国泰安国际医疗保险 - University of Texas Health Center Houston";

l['University of Texas Health Center Houston Scholar Requirements'] = "University of Texas Health Center Houston 访问学者医疗保险的标准";
l['Health insurance for University of Texas Health Center Houston Scholars'] = "符合University of Texas Health Center Houston标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Texas El Paso'] = "美国泰安国际医疗保险 - University of Texas El Paso";

l['University of Texas El Paso Scholar Requirements'] = "University of Texas El Paso 访问学者医疗保险的标准";
l['Health insurance for University of Texas El Paso Scholars'] = "符合University of Texas El Paso标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Texas Brownsville'] = "美国泰安国际医疗保险 - University of Texas Brownsville";

l['University of Texas Brownsville Scholar Requirements'] = "University of Texas Brownsville 访问学者医疗保险的标准";
l['Health insurance for University of Texas Brownsville Scholars'] = "符合University of Texas Brownsville标准的访问学者医疗保险";


l['TaiAn Health Insurance for University of Virginia'] = "美国泰安国际医疗保险 - University of Virginia";

l['University of Virginia Scholar Requirements'] = "University of Virginia 访问学者医疗保险的标准";

l['TaiAn Health Insurance for University of Utah'] = "美国泰安国际医疗保险 - University of Utah";

l['University of Utah Scholar Requirements'] = "University of Utah 访问学者医疗保险的标准";
l['Health insurance for University of Utah Scholars'] = "符合University of Utah标准的访问学者医疗保险";


l['MIT Scholar Requirements'] = "MIT 访问学者医疗保险的标准";

l['Princeton University Scholar Requirements'] = "Princeton University 访问学者医疗保险的标准";

l['Tufts University Scholar Requirements'] = "Tufts University 访问学者医疗保险的标准";

l['Carnegie Mellon University Scholar Requirements'] = "Carnegie Mellon University 访问学者医疗保险的标准";

l['Brandeis University Scholar Requirements'] = "Brandeis University 访问学者医疗保险的标准";
l['University of Delaware Scholar Requirements'] = "University of Delaware 访问学者医疗保险的标准";
l['University of Dayton Scholar Requirements'] = "University of Dayton 访问学者医疗保险的标准";
l['University of Georgia Scholar Requirements'] = "University of Georgia 访问学者医疗保险的标准";
l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Washington enrolled international student standards and J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Washington as proof of insurance.'] = "University of Washington 对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['Enrolled international students are allowed to waive only if they are an exchange student visiting through an official exchange program.  They are required to carry $200,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.'] = "只有是exchange program 的国际学生才能waive学校保险，其他全日制在校国际学生不能waive学校保险。waive学校保险要求含有$200,000 per illness or injury。 泰安访问学者/留学生保险计划B Standard Plan 里的$250,000 per illness or injury 是满足此标准的最经济实惠的保险计划。 购买成功后，需要将保险确认信和waiver form 一起发给学校, 要求waive 学校保险。";
l['University of Washington Scholar Requirements'] = "University of Washington 访问学者医疗保险的标准";
l['University of Washington Student Requirements'] = "University of Washington 留学生医疗保险的标准";

l['Vanderbilt University Scholar Requirements'] = "Vanderbilt University 访问学者医疗保险的标准";

l['University of Miami Scholar Requirements'] = "University of Miami 访问学者医疗保险的标准";


l['University of Nebraska (Lincoln) Scholar Requirements'] = "University of Nebraska (Lincoln) 访问学者医疗保险的标准";
l['TaiAn Health Insurance for University of Nebraska (Lincoln)'] = "美国泰安国际医疗保险 - University of Nebraska (Lincoln)";
l['Health insurance for University of Nebraska (Lincoln) Scholars'] = "符合University of Nebraska (Lincoln)标准的访问学者医疗保险";


l['University of Nebraska (Omaha) Scholar Requirements'] = "University of Nebraska (Omaha) 访问学者医疗保险的标准";
l['TaiAn Health Insurance for University of Nebraska (Omaha)'] = "美国泰安国际医疗保险 - University of Nebraska (Omaha)";
l['Health insurance for University of Nebraska (Omaha) Scholars'] = "符合University of Nebraska (Omaha)标准的访问学者医疗保险";


l['Florida State University Scholar Requirements'] = "Florida State University 访问学者医疗保险的标准";
l['TaiAn Health Insurance for Florida State University'] = "美国泰安国际医疗保险 - Florida State University";
l['Health insurance for Florida State University Scholars'] = "符合Florida State University标准的访问学者医疗保险";

l['Florida International University allows international students to waive the school plan. Students have required coverage as follows: 1. Medical benefits of $200,000 per accident or illness; 2. Repatriation of remains of $10,000; 3. Medical evacuation of $25,000; 4. Deductible not over $100, or not over $50 at student health center; 5. Maternity benefits; 6. Pre existing conditions covered after six months. Plan A with the six month preexisting conditions option selected meets the requirements. Shortly after submitting an application you will receive confirmation of your coverage.  You can then email us to complete your waiver form.'] = "Florida International University 国际学生waive学校保险购买校外保险的要求是：1.每次生病或受伤的最高赔付至少为 $200,000; 2.遗体返送$10,000; 3. 紧急救护$25,000; 4. 每次生病或受伤的免赔额不超过$100 或就诊学校医务室不超过$50; 5. 含生育保险; 6. 6个月的免责期后覆盖先前的疾病。 泰安留学生保险计划A 里的先前疾病6个月免责期选项是满足此标准的最经济实惠的保险计划，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['J visa scholars not enrolled in classes are not allowed to waive the school plan.'] = "非全日制上课的J1访问学者不能购买校外保险waive学校保险。";
l['Florida International University Student Requirements'] = "Florida International University 留学生医疗保险的标准";
l['TaiAn Health Insurance for Florida International University'] = "美国泰安国际医疗保险 - Florida International University";
l['Health insurance for Florida International University Students'] = "符合Florida International University标准的留学生医疗保险";

l['Florida Atlantic University Student Requirements'] = "Florida Atlantic University 留学生医疗保险的标准";
l['TaiAn Health Insurance for Florida Atlantic University'] = "美国泰安国际医疗保险 - Florida Atlantic University";
l['Health insurance for Florida Atlantic University Students and Scholars'] = "符合Florida Atlantic University标准的留学生和访问学者医疗保险";
l['Florida Atlantic University Scholar Requirements'] = "Florida Atlantic University 访问学者医疗保险的标准";
l['Florida Atlantic University J1 scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Pre-existing condition coverage after a 6 month wait.'] = "Florida Atlantic University 对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000; 2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500; 5. 先前疾病免责期不超过6个月。 ";
l['F1 or J1 international students have a 17 point requirement list available at the link below.'] = "Florida Atlantic University 对F1/J1 国际学生购买校外医疗保险有17条要求，详见下面链接。";
l['TaiAn Plan A meets both the Student and Scholar requirements. You need to select the optional 6 month pre-existing condition rider when you buy.  After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can then send TaiAn an email to assist you with your waiver form.'] = "泰安保险计划A满足FAU对访问学者和国际学生保险的要求， 但购买时必须选择先前疾病免责期为6个月的选项。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。 你可以发email给泰安公司，要求协助你完成Waiver Form.";

l['Louisiana State University Scholar Requirements'] = "Louisiana State University 访问学者医疗保险的标准";
l['Health insurance for University of Virginia Scholars'] = "符合University of Virginia标准的访问学者医疗保险";
l['TaiAn Health Insurance for Michigan State University'] = "美国泰安国际医疗保险 - Michigan State University";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Michigan State University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Michigan State University as proof of insurance.'] = "Michigan State University 对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['Enrolled international students are required to carry $250,000 per illness or injury, have coverage for mental nervous claims, and complete a waiver. Taian Scholar/Student Insurance Plan A is the most affordable plan that meets the standards.'] = "全日制留学生保险要求$250,000每次疾病或受伤，含有心理健康险并要求完成waiver申请。泰安访问学者/留学生保险计划A是满足这些标准的最经济实惠的保险计划。";
l['Michigan State University Scholar Requirements'] = "Michigan State University 访问学者医疗保险的标准";
l['Health Insurance for MSU International Students and Scholars'] = "符合Michigan State University标准的留学生和访问学者医疗保险";
l['Michigan State University Student Requirements'] = "Michigan State University 留学生医疗保险的标准";
l['TaiAn Health Insurance for Harvard University and Harvard Medical School'] = "美国泰安国际医疗保险 - Harvard University and Harvard Medical School";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Harvard University and Harvard Medical School J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Pre-existing condition coverage after a reasonable wait; 6. Patient share of expenses not over 25%.  Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Harvard University and Harvard Medical School as proof of insurance.'] = "Harvard University and Harvard Medical School 对J1访问学者（不包括全日制在校学生)购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500; 5. 合理的等待期后覆盖先前的疾病; 6. 共同保险不超过25%。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['Harvard University and Harvard Medical School Scholar Requirements'] = "Harvard University and Harvard Medical School 访问学者医疗保险的标准";
l['Health insurance for Harvard University and Harvard Medical School Scholars'] = "符合Harvard University and Harvard Medical School标准的访问学者医疗保险";
l['Enrolled international students have to buy Plan A to meet Harvard University standards, and complete an online waiver.'] = "全日制留学生可以购买泰安访问学者/留学生保险计划A以满足学校对留学生保险的要求。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['Harvard University and Harvard Medical School Student Requirements'] = "Harvard University and Harvard Medical School 留学生医疗保险的标准";

l['Health insurance for Harvard University and Harvard Medical School Students and Scholars'] = "符合Harvard University and Harvard Medical School标准的留学生和访问学者医疗保险";





l['TaiAn Health Insurance for Boston University'] = "美国泰安国际医疗保险 - Boston University";

l['Boston University Scholar Requirements'] = "Boston University 访问学者医疗保险的标准";
l['Health insurance for Boston University Scholars'] = "符合Boston University标准的访问学者医疗保险";


l['Oakland University Scholar Requirements'] = "Oakland University 访问学者医疗保险的标准";
l['TaiAn Health Insurance for Oakland University'] = "美国泰安国际医疗保险 - Oakland University";
l['Health insurance for Oakland University Scholars'] = "符合Oakland University标准的访问学者医疗保险";

l['Nova Southeastern University Scholar Requirements'] = "Nova Southeastern University 访问学者医疗保险的标准";
l['TaiAn Health Insurance for Nova Southeastern University'] = "美国泰安国际医疗保险 - Nova Southeastern University";
l['Health insurance for Nova Southeastern University Scholars'] = "符合Nova Southeastern University标准的访问学者医疗保险";

l['TaiAn Health Insurance for Boston College'] = "美国泰安国际医疗保险 - Boston College";

l['Boston College Scholar Requirements'] = "Boston College 访问学者医疗保险的标准";
l['Health insurance for Boston College Scholars'] = "符合Boston College标准的访问学者医疗保险";

l['TaiAn Health Insurance for Babson College'] = "美国泰安国际医疗保险 - Babson College";

l['Babson College Scholar Requirements'] = "Babson College 访问学者医疗保险的标准";
l['Health insurance for Babson College Scholars'] = "符合Babson College标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Florida'] = "美国泰安国际医疗保险 - University of Florida";
l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Florida J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Policy shall not unreasonably exclude risks inherent to the exchange program; 6. The insurance must meet certain credit rating criteria; 7. Must be accepted in all medical facilities. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Florida as proof of insurance.'] = "University of Florida 对J1访问学者（不包括全日制在校学生)购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500; 5. 保险计划不得不合理地排除交流计划中固有的风险; 6. 保险必须符合一定的信用评级标准; 7. 必须接受所有的医疗设施。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Florida Scholar Requirements'] = "University of Florida 访问学者医疗保险的标准";
l['Health insurance for University of Florida Scholars'] = "符合University of Florida标准的访问学者医疗保险";
l['TaiAn Health Insurance for Northeastern University'] = "美国泰安国际医疗保险 - Northeastern University";

l['Northeastern University Scholar Requirements'] = "Northeastern University 访问学者医疗保险的标准";
l['Health insurance for Northeastern University Scholars'] = "符合Northeastern University标准的访问学者医疗保险";
l['TaiAn Health Insurance for Georgia Institute of Technology'] = "美国泰安国际医疗保险 - Georgia Institute of Technology";

l['Georgia Institute of Technology Scholar Requirements'] = "Georgia Institute of Technology 访问学者医疗保险的标准";
l['Health insurance for Georgia Institute of Technology Scholars'] = "符合Georgia Institute of Technology标准的访问学者医疗保险";

l['TaiAn Health Insurance for Georgia Regents University'] = "美国泰安国际医疗保险 - Georgia Regents University";

l['Georgia Regents University Scholar Requirements'] = "Georgia Regents University 访问学者医疗保险的标准";
l['Health insurance for Georgia Regents University Scholars'] = "符合Georgia Regents University标准的访问学者医疗保险";

l['TaiAn Health Insurance for Arizona State University'] = "美国泰安国际医疗保险 - Arizona State University";
l['Arizona State University Scholar Requirements'] = "Arizona State University 访问学者医疗保险的标准";
l['Health insurance for Arizona State University Scholars'] = "符合Arizona State University标准的访问学者医疗保险";

l['TaiAn Health Insurance for UC Merced'] = "美国泰安国际医疗保险 - UC Merced";
l['UC Merced Scholar Requirements'] = "UC Merced 访问学者医疗保险的标准";
l['Health insurance for UC Merced Scholars'] = "符合UC Merced标准的访问学者医疗保险";

l['TaiAn Health Insurance for Mississippi State University'] = "美国泰安国际医疗保险 - Mississippi State University";

l['Mississippi State University Scholar Requirements'] = "Mississippi State University 访问学者医疗保险的标准";
l['Health insurance for Mississippi State University Scholars'] = "符合Mississippi State University标准的访问学者医疗保险";
l['TaiAn Health Insurance for University of California at San Diego'] = "美国泰安国际医疗保险 - University of California at San Diego";

l['UC San Diego Scholar Requirements'] = "UC San Diego 访问学者医疗保险的标准";
l['Health insurance for UC San Diego Scholars'] = "符合UC San Diego标准的访问学者医疗保险";
l['TaiAn Health Insurance for University of Arizona'] = "美国泰安国际医疗保险 - University of Arizona";

l['University of Arizona Scholar Requirements'] = "University of Arizona 访问学者医疗保险的标准";
l['Health insurance for University of Arizona Scholars'] = "符合University of Arizona标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Akron'] = "美国泰安国际医疗保险 - University of Akron";

l['University of Akron Scholar Requirements'] = "University of Akron 访问学者医疗保险的标准";
l['Health insurance for University of Akron Scholars'] = "符合University of Akron标准的访问学者医疗保险";

l['TaiAn Health Insurance for University of Chicago'] = "美国泰安国际医疗保险 - University of Chicago";

l['University of Chicago Scholar Requirements'] = "University of Chicago 访问学者医疗保险的标准";
l['Health insurance for University of Chicago Scholars'] = "符合University of Chicago标准的访问学者医疗保险";
l['TaiAn Health Insurance for Emory University'] = "美国泰安国际医疗保险 - Emory University";

l['Emory University Scholar Requirements'] = "Emory University 访问学者医疗保险的标准";
l['Health insurance for Emory University Scholars'] = "符合Emory University标准的访问学者医疗保险";
l['TaiAn Health Insurance for Bellevue College'] = "美国泰安国际医疗保险 - Bellevue College";
l['Enrolled international students with J visa need to complete a waiver.  Students with other visas can not waive school plan.'] = "J1签证的国际学生需要提交 waiver 申请。持有其他签证的国际学生不能waive 学校保险。";
l['Bellevue College Scholar Requirements'] = "Bellevue College 访问学者医疗保险的标准";
l['Bellevue College Student Requirements'] = "Bellevue College 留学生医疗保险的标准";
l['Health insurance for Bellevue College Students and Scholars'] = "符合Bellevue College标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for University of Missouri Saint Louis'] = "美国泰安国际医疗保险 - University of Missouri Saint Louis";


l['University of Missouri Saint Louis Scholar Requirements'] = "University of Missouri Saint Louis 访问学者医疗保险的标准";
l['University of Missouri Saint Louis Student Requirements'] = "University of Missouri Saint Louis 留学生医疗保险的标准";
l['Health insurance for University of Missouri Saint Louis Students and Scholars'] = "符合University of Missouri Saint Louis标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for Central Washington University'] = "美国泰安国际医疗保险 - Central Washington University";
l['Central Washington University Scholar Requirements'] = "Central Washington University 访问学者医疗保险的标准";
l['Central Washington University Student Requirements'] = "Central Washington University 留学生医疗保险的标准";
l['Health insurance for Central Washington University Students and Scholars'] = "符合Central Washington University标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for Scripps Research Institute'] = "美国泰安国际医疗保险 - Scripps Research Institute";
l['Scripps Research Institute Scholar Requirements'] = "Scripps Research Institute 访问学者医疗保险的标准";
l['Scripps Research Institute Student Requirements'] = "Scripps Research Institute 留学生医疗保险的标准";
l['Health insurance for Scripps Research Institute Students and Scholars'] = "符合Scripps Research Institute标准的留学生和访问学者医疗保险";


l['TaiAn Health Insurance for Case Western Reserve'] = "美国泰安国际医疗保险 - Case Western Reserve";
l['Case Western Reserve Scholar Requirements'] = "Case Western Reserve 访问学者医疗保险的标准";
l['Case Western Reserve Student Requirements'] = "Case Western Reserve 留学生医疗保险的标准";
l['Health insurance for Case Western Reserve Scholars'] = "符合Case Western Reserve标准的访问学者医疗保险";

l['TaiAn Health Insurance for City University of New York (CUNY)'] = "美国泰安国际医疗保险 - City University of New York (CUNY)";
l['Taian Scholar/Student Insurance Plan A and Plan B meet all City University of New York (CUNY) enrolled international student standards and J scholar standards (See CUNY School List Below). Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to CUNY as proof of insurance.'] = "泰安保险计划A和B符合City University of New York (CUNY)留学生和访问学者保险的标准。CUNY系统的所有学校(见下面的列表)对F1/J1留学生和J1访问学者购买校外医疗保险的要求是： 1.每次生病或受伤的最高赔付至少为$50,000; 2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['CUNY Scholar Requirements'] = "CUNY 访问学者医疗保险的标准";
l['CUNY Student Requirements'] = "CUNY 留学生医疗保险的标准";
l['Health insurance for CUNY Students and Scholars'] = "符合CUNY标准的留学生和访问学者医疗保险";
l['CUNY Requirements for all CUNY schools Students and Scholars'] = "CUNY系统所有学校留学生和访问学者的保险标准";
l['CUNY School List:'] = "CUNY系统所有学校列表:";

l['TaiAn Health Insurance for Kent State University'] = "美国泰安国际医疗保险 - Kent State University";
l['Kent State University Scholar Requirements'] = "Kent State University 访问学者医疗保险的标准";
l['Kent State University Student Requirements'] = "Kent State University 留学生医疗保险的标准";
l['Health insurance for Kent State University Students and Scholars'] = "符合Kent State University标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for Morgan State University'] = "美国泰安国际医疗保险 - Morgan State University";
l['Morgan State University Scholar Requirements'] = "Morgan State University 访问学者医疗保险的标准";
l['Morgan State University Student Requirements'] = "Morgan State University 留学生医疗保险的标准";
l['Health insurance for Morgan State University Students and Scholars'] = "符合Morgan State University标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for Alfred University'] = "美国泰安国际医疗保险 - Alfred University";
l['Alfred University Scholar Requirements'] = "Alfred University 访问学者医疗保险的标准";
l['Alfred University Student Requirements'] = "Alfred University 留学生医疗保险的标准";
l['Health insurance for Alfred University Students and Scholars'] = "符合Alfred University标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for Lehigh University'] = "美国泰安国际医疗保险 - Lehigh University";
l['Lehigh University Scholar Requirements'] = "Lehigh University 访问学者医疗保险的标准";
l['Lehigh University Student Requirements'] = "Lehigh University 留学生医疗保险的标准";
l['Health insurance for Lehigh University Students and Scholars'] = "符合Lehigh University标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for Shawnee State University'] = "美国泰安国际医疗保险 - Shawnee State University";
l['Shawnee State University Scholar Requirements'] = "Shawnee State University 访问学者医疗保险的标准";
l['Shawnee State University Student Requirements'] = "Shawnee State University 留学生医疗保险的标准";
l['Health insurance for Shawnee State University Students and Scholars'] = "符合Shawnee State University标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for Depaul University'] = "美国泰安国际医疗保险 - Depaul University";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Depaul University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Depaul University as proof of insurance.'] = "Depaul University 对F1/J1国际学生和J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['Depaul University Scholar Requirements'] = "Depaul University 访问学者医疗保险的标准";
l['Depaul University Student Requirements'] = "Depaul University 留学生医疗保险的标准";
l['Health insurance for Depaul University Students and Scholars'] = "符合Depaul University标准的留学生和访问学者医疗保险";

l['TaiAn Health Insurance for Murray State University'] = "美国泰安国际医疗保险 - Murray State University";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Murray State University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Murray State University as proof of insurance.'] = "Murray State University 对F1/J1国际学生和J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['Murray State University Scholar Requirements'] = "Murray State University 访问学者医疗保险的标准";
l['Murray State University Student Requirements'] = "Murray State University 留学生医疗保险的标准";
l['Health insurance for Murray State University Students and Scholars'] = "符合Murray State University标准的留学生和访问学者医疗保险";
l['TaiAn Insurance Plan A, Plan B, and Plan C meet Murray State University F and J visa insurance requirements. J visa holders have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan C with $50,000 benefit and $500 deductible is the most affordable plan that meets the standards, and the US Department of State requirements.'] = "Murray State University 对J签证持有人购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000; 2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。 泰安保险计划C里的免赔额$500, 最高赔付$50,000选项是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准。";
l['F visa holders are required to have $100,000 of coverage. Plan C with $100,000 benefit and $500 deductible is the most affordable plan that meets the standards.'] = "F签证持有人购买校外医疗保险要求最高赔付至少为$100,000。 泰安保险计划C里的免赔额$500, 最高赔付$100,000选项是满足此标准的最经济实惠的保险计划。";
l['Shortly after submitting an application you will receive confirmation of your coverage which you can send to Murray State University as proof of insurance.'] = "网上提交申请几分钟后你就会收到Email电子保单，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['Murray State University requirements'] = "Murray State University 医疗保险的标准";
l['J VISA  (F VISA SCROLL DOWN THE PAGE)'] = " J 签证 (F 签证见本页下面)";
l['Plan C (Patriot Travel) $50,000'] = "计划C(Patriot Travel) 最高赔付$50,000";
l['(Recommended if you want maternity benefit)'] = "推荐 - 如需生育险";
l['(J - Recommended Plan)'] = "J签证 - 推荐计划";
l['(Lowest Cost Plan)'] = "最节省计划";
l['$50,000 benefit $500 deductible.  '] = "$50,000 最高赔付，$500免赔额。  ";
l['Lowest Cost Plan for J visa'] = "J签证最节省计划";
l['$50,000 benefit $250 deductible.  '] = "$50,000 最高赔付，$250免赔额。  ";
l['F VISA'] = "F 签证";
l['$100,000 benefit $500 deductible.  '] = "$100,000 最高赔付，$500免赔额。  ";
l['Lowest Cost Plan for F visa'] = "F签证最节省计划";
l['$100,000 benefit $250 deductible.  '] = "$100,000 最高赔付，$250免赔额。  ";
l['Plan C (Patriot Travel) $100,000'] = "计划C(Patriot Travel) 最高赔付$100,000";
l['Plan B (Patriot Exchange) $100 deductible'] = "计划B (Patriot Exchange) $100免赔额";


l['TaiAn Health Insurance for Western Washington University'] = "美国泰安国际医疗保险 - Western Washington University";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Western Washington University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Western Washington University as proof of insurance.'] = "Western Washington University 对F1/J1国际学生和J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['Western Washington University Scholar Requirements'] = "Western Washington University 访问学者医疗保险的标准";
l['Western Washington University Student Requirements'] = "Western Washington University 留学生医疗保险的标准";
l['Health insurance for Western Washington University Students and Scholars'] = "符合Western Washington University标准的留学生和访问学者医疗保险";
l['TaiAn Health Insurance for Texas A&M University'] = "美国泰安国际医疗保险 - Texas A&M University";

l['Texas A&M University Scholar Requirements'] = "Texas A&M University 访问学者医疗保险的标准";
l['Health insurance for Texas A&M University Scholars'] = "符合Texas A&M University标准的访问学者医疗保险";
l['TaiAn Health Insurance for University of Houston'] = "美国泰安国际医疗保险 - University of Houston";

l['University of Houston Scholar Requirements'] = "University of Houston 访问学者医疗保险的标准";
l['Health insurance for University of Houston Scholars'] = "符合University of Houston标准的访问学者医疗保险";
l['TaiAn Health Insurance for Cornell University'] = "美国泰安国际医疗保险 - Cornell University";

l['Cornell University Scholar Requirements'] = "Cornell University 访问学者医疗保险的标准";
l['Health insurance for Cornell University Scholars'] = "符合Cornell University标准的访问学者医疗保险";

l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Maryland enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Maryland as proof of insurance.'] = "University of Maryland 对留学生和访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Maryland Scholar Requirements'] = "University of Maryland 访问学者医疗保险的标准";
l['University of Maryland Student Requirements'] = "University of Maryland 留学生医疗保险的标准";
l['TaiAn Health Insurance for University of Maryland'] = "美国泰安国际医疗保险 - University of Maryland";
l['Health insurance for University of Maryland Students and Scholars'] = "符合University of Maryland标准的访问学者和留学生医疗保险";


l['UMASS Boston Scholar Requirements'] = "UMASS Boston 访问学者医疗保险的标准";
l['TaiAn Health Insurance for UMASS Boston'] = "美国泰安国际医疗保险 - UMASS Boston";
l['Health insurance for UMASS Boston Scholars'] = "符合UMASS Boston标准的访问学者医疗保险";





l['University of Massachusetts - Amherst Scholar Requirements'] = "University of Massachusetts - Amherst 访问学者医疗保险的标准";
l['University of Massachusetts - Dartmouth Scholar Requirements'] = "University of Massachusetts - Dartmouth 访问学者医疗保险的标准";
l['University of Massachusetts - Lowell Scholar Requirements'] = "University of Massachusetts - Lowell 访问学者医疗保险的标准";
l['TaiAn Health Insurance for University of Massachusetts - Amherst, Dartmouth, and Lowell'] = "美国泰安国际医疗保险 - University of Massachusetts - Amherst, Dartmouth, and Lowell";
l['TaiAn Health Insurance for University of Massachusetts - Dartmouth'] = "美国泰安国际医疗保险 - University of Massachusetts - Dartmouth";
l['TaiAn Health Insurance for University of Massachusetts - Lowell'] = "美国泰安国际医疗保险 - University of Massachusetts - Lowell";
l['Health insurance for University of Massachusetts - Amherst, Dartmouth, and Lowell Scholars'] = "符合University of Massachusetts - Amherst, Dartmouth, and Lowell标准的访问学者医疗保险";
l['Health insurance for UMASS Amherst Scholars'] = "符合UMASS Amherst标准的访问学者医疗保险";
l['Health insurance for UMASS Dartmouth Scholars'] = "符合UMASS Dartmouth标准的访问学者医疗保险";
l['Health insurance for UMASS Lowell Scholars'] = "符合UMASS Lowell标准的访问学者医疗保险";

l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Pittsburgh enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Pittsburgh as proof of insurance.'] = "University of Pittsburgh 对留学生和访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Pittsburgh Scholar Requirements'] = "University of Pittsburgh 访问学者医疗保险的标准";
l['Enrolled students are required to attest that they have coverage at the beginning of each fall semester.'] = "在校国际学生每年秋季学期开始时都必须证明已购买满足学校要求的保险。";
l['Student attestation'] = "国际学生网上提交证明链结";
l['University of Pittsburgh Student Requirements'] = "University of Pittsburgh 留学生医疗保险的标准";
l['TaiAn Health Insurance for University of Pittsburgh'] = "美国泰安国际医疗保险 - University of Pittsburgh";
l['Health insurance for University of Pittsburgh Students and Scholars'] = "符合University of Pittsburgh标准的访问学者和留学生医疗保险";

l['University of North Carolina (Chapel Hill) Scholar Requirements'] = "University of North Carolina (Chapel Hill) 访问学者医疗保险的标准";
l['University of North Carolina (Chapel Hill) Student Requirements'] = "University of North Carolina (Chapel Hill)留学生医疗保险的标准";
l['University of North Carolina (Charlotte) Scholar Requirements'] = "University of North Carolina (Charlotte) 访问学者医疗保险的标准";
l['University of North Carolina (Charlotte) Student Requirements'] = "University of North Carolina (Charlotte)留学生医疗保险的标准";
l['University of North Carolina (Greensboro) Scholar Requirements'] = "University of North Carolina (Greensboro) 访问学者医疗保险的标准";
l['University of North Carolina (Greensboro) Student Requirements'] = "University of North Carolina (Greensboro)留学生医疗保险的标准";
l['University of North Carolina (Wilmington) Scholar Requirements'] = "University of North Carolina (Wilmington) 访问学者医疗保险的标准";
l['University of North Carolina (Wilmington) Student Requirements'] = "University of North Carolina (Wilmington)留学生医疗保险的标准";
l['TaiAn Health Insurance for University of North Carolina - (Chapel Hill, Charlotte, Greensboro, Wilmington)'] = "美国泰安国际医疗保险 - University of North Carolina - (Chapel Hill, Charlotte, Greensboro, Wilmington)";
l['Health insurance for University of North Carolina (Chapel Hill) Students and Scholars'] = "符合University of North Carolina (Chapel Hill) 标准的访问学者和留学生医疗保险";
l['Health insurance for University of North Carolina (Charlotte) Students and Scholars'] = "符合University of North Carolina (Charlotte) 标准的访问学者和留学生医疗保险";
l['Health insurance for University of North Carolina (Greensboro) Students and Scholars'] = "符合University of North Carolina (Greensboro) 标准的访问学者和留学生医疗保险";
l['Health insurance for University of North Carolina (Wilmington) Students and Scholars'] = "符合University of North Carolina (Wilmington) 标准的访问学者和留学生医疗保险";
l['Enrolled international students need to complete an online waiver.'] = "全日制国际学生需要提交 online waiver 申请";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Temple University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Temple University as proof of insurance.'] = "Temple University 对留学生和访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['Temple University Scholar Requirements'] = "Temple University 访问学者医疗保险的标准";
l['Temple University Student Requirements'] = "Temple University 留学生医疗保险的标准";
l['TaiAn Health Insurance for Temple University'] = "美国泰安国际医疗保险 - Temple University";
l['Health insurance for Temple University Students and Scholars'] = "符合Temple University标准的访问学者和留学生医疗保险";
l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Colorado enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Colorado as proof of insurance.'] = "University of Colorado 对留学生和访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Colorado Scholar Requirements'] = "University of Colorado 访问学者医疗保险的标准";
l['University of Colorado Student Requirements'] = "University of Colorado 留学生医疗保险的标准";
l['TaiAn Health Insurance for University of Colorado'] = "美国泰安国际医疗保险 - University of Colorado";
l['Health insurance for University of Colorado Students and Scholars'] = "符合University of Colorado标准的访问学者和留学生医疗保险";
l['Taian Scholar/Student Insurance Plan A and Plan B meet University of Connecticut enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to University of Connecticut as proof of insurance.'] = "University of Connecticut 对留学生和访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Connecticut Scholar Requirements'] = "University of Connecticut 访问学者医疗保险的标准";
l['University of Connecticut Student Requirements'] = "University of Connecticut 留学生医疗保险的标准";
l['TaiAn Health Insurance for University of Connecticut'] = "美国泰安国际医疗保险 - University of Connecticut";
l['Health insurance for University of Connecticut Students and Scholars'] = "符合University of Connecticut标准的访问学者和留学生医疗保险";
l['Clemson University Scholar Requirements'] = "Clemson University 访问学者医疗保险的标准";
l['Clemson University Student Requirements'] = "Clemson University 留学生医疗保险的标准";
l['TaiAn Health Insurance for Clemson University'] = "美国泰安国际医疗保险 - Clemson University";
l['Health insurance for Clemson University Scholars'] = "符合Clemson University标准的访问学者医疗保险";

l['Taian Scholar/Student Insurance Plan A and Plan B meet Claremont School of Theology enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Claremont School of Theology as proof of insurance.'] = "Claremont School of Theology 对访问学者和留学生购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['Claremont School of Theology Scholar Requirements'] = "Claremont School of Theology 访问学者医疗保险的标准";
l['Claremont School of Theology Student Requirements'] = "Claremont School of Theology 留学生医疗保险的标准";
l['TaiAn Health Insurance for Claremont School of Theology'] = "美国泰安国际医疗保险 - Claremont School of Theology";
l['Health insurance for Claremont School of Theology Students and Scholars'] = "符合Claremont School of Theology标准的访问学者和留学生医疗保险";



l['Dartmouth College Scholar Requirements'] = "Dartmouth College 访问学者医疗保险的标准";
l['Dartmouth College Student Requirements'] = "Dartmouth College 留学生医疗保险的标准";
l['TaiAn Health Insurance for Dartmouth College'] = "美国泰安国际医疗保险 - Dartmouth College";
l['Health insurance for Dartmouth College Scholars'] = "符合Dartmouth College标准的访问学者医疗保险";



l['Virginia Tech Scholar Requirements'] = "Virginia Tech 访问学者医疗保险的标准";

l['TaiAn Health Insurance for Virginia Tech'] = "美国泰安国际医疗保险 - Virginia Tech";

l['Taian Scholar/Student Insurance Plan A and Plan B meet Virginia Commonwealth University enrolled international student standards and J scholar standards.  Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Virginia Commonwealth University as proof of insurance.'] = "Virginia Commonwealth University 对访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['Enrolled international students are required to carry $250,000 per illness or injury. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.'] = "在校国际学生的保险需要含有$250,000 per illness or injury。 泰安访问学者/留学生保险计划B Standard Plan 里的$250,000 per illness or injury 是满足此标准的最经济实惠的保险计划。";
l['Virginia Commonwealth Scholar Requirements'] = "Virginia Commonwealth 访问学者医疗保险的标准";
l['Virginia Commonwealth Student Requirements'] = "Virginia Commonwealth 留学生医疗保险的标准";
l['TaiAn Health Insurance for Virginia Commonwealth University'] = "美国泰安国际医疗保险 - Virginia Commonwealth University";
l['Health insurance for Virginia Commonwealth Students and Scholars'] = "符合Virginia Commonwealth University标准的访问学者和留学生医疗保险";

l['TaiAn Health Insurance for Yale University'] = "美国泰安国际医疗保险 - Yale University";
l['TaiAn Health Insurance for Massachusetts Institute of Technology (MIT)'] = "美国泰安国际医疗保险 - Massachusetts Institute of Technology (MIT)";
l['TaiAn Health Insurance for Princeton University'] = "美国泰安国际医疗保险 - Princeton University";
l['TaiAn Health Insurance for Tufts University'] = "美国泰安国际医疗保险 - Tufts University";
l['TaiAn Health Insurance for Carnegie Mellon University'] = "美国泰安国际医疗保险 - Carnegie Mellon University";
l['TaiAn Health Insurance for Brandeis University'] = "美国泰安国际医疗保险 - Brandeis University";
l['TaiAn Health Insurance for University of Georgia'] = "美国泰安国际医疗保险 - University of Georgia";
l['TaiAn Health Insurance for University of Delaware'] = "美国泰安国际医疗保险 - University of Delaware";
l['TaiAn Health Insurance for University of Dayton'] = "美国泰安国际医疗保险 - University of Dayton";
l['TaiAn Health Insurance for University of Washington'] = "美国泰安国际医疗保险 - University of Washington";
l['TaiAn Health Insurance for Vanderbilt University'] = "美国泰安国际医疗保险 - Vanderbilt University";
l['TaiAn Health Insurance for University of Miami'] = "美国泰安国际医疗保险 - University of Miami";

l['TaiAn Health Insurance for Louisiana State University'] = "美国泰安国际医疗保险 - Louisiana State University";

l['North Carolina State University Scholar Requirements'] = "North Carolina State University 访问学者医疗保险的标准";
l['TaiAn Health Insurance for North Carolina State University'] = "美国泰安国际医疗保险 - North Carolina State University";
l['Health insurance for North Carolina State University Scholars'] = "符合North Carolina State University标准的访问学者医疗保险";
l['Hospital Daily Indemnity'] = " 住院补贴";
l['$100 per day.  10 day maximum.'] = "$100/天，最多10天";
l['Up to $50,000 coverage ($2,500 for over 65 years old) for sudden and unexpected recurrence. Otherwise not covered.'] = "先前的疾病意外突发最高赔付$50,000(65岁以上最高赔付$2,500)。 否则不在理赔范围内。";
l['Up to policy limit for sudden and unexpected recurrence if covered by domestic health policy ($2,500 for over 65 years old). Up to $20,000 if not covered by domestic policy. Otherwise not covered.'] = "如果有本国国内健康保险所涵盖，意外突发赔至最高赔付(65岁以上最高赔付$2,500)。如果没有本国国内健康保险，意外突发最高赔付$20,000。 否则不在理赔范围内。";
l['Hospital Daily Indemnity increases from $100 per day 10 day maximum to $250 per day 10 day maximum.'] = " 住院补贴由$100/天，最多10天增加至$250/天，最多10天";
l['Health insurance for Columbia Scholars'] = "符合Columbia标准的访问学者医疗保险";
l['Health Insurance for IU International Students and Scholars'] = "符合IU标准的留学生和访问学者医疗保险";
l['Health insurance for Virginia Tech Scholars'] = "符合Virginia Tech标准的访问学者医疗保险";
l['Health insurance for Yale University International Students and Scholars'] = "符合Yale University标准的留学生和访问学者医疗保险";
l['Health Insurance for IUPUI International Students and Scholars'] = "符合IUPUI标准的留学生和访问学者医疗保险";
l['Health insurance for NYU and NYU Poly Scholars'] = "符合NYU and NYU Poly标准的访问学者医疗保险";
l['Health insurance for NYIT Scholars'] = "符合New York Institute of Technology标准的访问学者医疗保险";
l['Health insurance for MIT Scholars'] = "符合MIT标准的访问学者医疗保险";
l['Health insurance for Princeton University Scholars'] = "符合Princeton University标准的访问学者医疗保险";
l['Health insurance for Tufts University Scholars'] = "符合Tufts University标准的访问学者医疗保险";
l['Health insurance for Carnegie Mellon University Scholars'] = "符合Carnegie Mellon University标准的访问学者医疗保险";
l['Health insurance for Brandeis University Scholars'] = "符合Brandeis University标准的访问学者医疗保险";
l['Health insurance for University of Georgia Scholars'] = "符合University of Georgia标准的访问学者医疗保险";
l['Health insurance for University of Delaware Scholars'] = "符合University of Delaware标准的访问学者医疗保险";
l['Health insurance for University of Dayton International Students and Scholars'] = "符合University of Dayton标准的留学生和访问学者医疗保险";
l['Health insurance for University of Washington Students and Scholars'] = "符合University of Washington标准的留学生和访问学者医疗保险";
l['Health insurance for Vanderbilt University Scholars'] = "符合Vanderbilt University标准的访问学者医疗保险";
l['Health insurance for University of Miami Scholars'] = "符合University of Miami标准的访问学者医疗保险";

l['Health insurance for Louisiana State University Scholars'] = "符合Louisiana State University标准的访问学者医疗保险";
l['Health insurance for Purdue Students and Scholars'] = "符合Purdue标准的留学生和访问学者医疗保险";

l['Health insurance for UCLA Scholars'] = "符合UCLA标准的访问学者医疗保险";
l['Health insurance for UC Davis Scholars'] = "符合UC Davis标准的访问学者医疗保险";
l['Health Insurance for UIUC International Students and Scholars'] = "符合UIUC标准的留学生和访问学者医疗保险";
l['Health insurance for USC Scholars'] = "符合USC标准的访问学者医疗保险";
l['Health Insurance for　UT Austin Scholars'] = "符合UT Austin标准的访问学者医疗保险";
l['UT Austin Scholar Requirements'] = "UT Austin访问学者医疗保险的标准";
l['UT Austin Student Requirements'] = "UT Austin学校对留学生的要求";
l['J scholars (not for enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. These requirements are the same as the US Department of State. Taian Plan B (with $50,000 benefit per illness or injury and three deductible options) and Plan C (with $50,000 benefit and deductible not over $500) are the most affordable plans that meet the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "J1访问学者 (不包括全日制在校学生) 购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000; 2. 遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500。 此标准与美国国务院的标准一样。 泰安保险计划B (每次生病或受伤$50,000最高赔付配合三种不同免赔额选项)和计划C ($50,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。 将确认信发给学校证明你已购买满足学校要求的保险。";
l['TaiAn Health Insurance for UT Austin'] = "美国泰安国际医疗保险 - UT Austin";

l['Health insurance for New School Scholars'] = "符合New School标准的访问学者医疗保险";

l['New School Scholar Requirements'] = "New School访问学者医疗保险的标准";
l['TaiAn Health Insurance for New School'] = "美国泰安国际医疗保险 - New School";
l['TaiAn Health Insurance for New School'] = "美国泰安国际医疗保险 - New School";


l['Health Insurance for UT Dallas Scholars'] = "符合UT Dallas标准的访问学者医疗保险";
l['UT Dallas Scholar Requirements'] = "UT Dallas访问学者医疗保险的标准";
l['UT Dallas Student Requirements'] = "UT Dallas学校对留学生的要求";
l['TaiAn Health Insurance for UT Dallas'] = "美国泰安国际医疗保险 - UT Dallas";

l['Health Insurance for UT San Antonio Scholars'] = "符合UT San Antonio标准的访问学者医疗保险";
l['UT San Antonio Scholar Requirements'] = "UT San Antonio访问学者医疗保险的标准";
l['UT San Antonio Student Requirements'] = "UT San Antonio学校对留学生的要求";
l['TaiAn Health Insurance for UT San Antonio'] = "美国泰安国际医疗保险 - UT San Antonio";

l['Health Insurance for UT Pan American International Students and Scholars'] = "符合UT Pan American 标准的留学生和访问学者医疗保险";
l['UT Pan American Scholar Requirements'] = "UT Pan American访问学者医疗保险的标准";
l['UT Pan American Student Requirements'] = "UT Pan American学校对留学生的要求";
l['Taian Scholar/Student Insurance Plan A and Plan B meet UT Pan American enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per person per policy year; 2. Medical benefits of $50,000 per accident or illness; 3. Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Pan American as proof of insurance.'] = "UT Pan American 对留学生和访问学者购买校外医疗保险的要求是：1. 每人的年度最高赔付 $500,000; 2. 每次生病或受伤的最高赔付至少为$50,000；3. 遗体返送$7,500; 4. 紧急救护$10,000; 5. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。访问学者可以将确认信发给学校证明已经购买满足学校要求的保险。留学生可以将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['TaiAn Health Insurance for UT Pan American'] = "美国泰安国际医疗保险 - UT Pan American";

l['Health Insurance for UT Health Science Center San Antonio International Students and Scholars'] = "符合UT Health Science Center San Antonio 标准的留学生和访问学者医疗保险";
l['UT Health Science Center San Antonio Scholar Requirements'] = "UT Health Science Center San Antonio访问学者医疗保险的标准";
l['UT Health Science Center San Antonio Student Requirements'] = "UT Health Science Center San Antonio学校对留学生的要求";
l['Taian Scholar/Student Insurance Plan A and Plan B meet UT Health Science Center San Antonio enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per person per policy year; 2. Medical benefits of $50,000 per accident or illness; 3. Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Health Science Center San Antonio as proof of insurance.'] = "UT Health Science Center San Antonio 对留学生和访问学者购买校外医疗保险的要求是：1. 每人的年度最高赔付 $500,000; 2. 每次生病或受伤的最高赔付至少为$50,000；3. 遗体返送$7,500; 4. 紧急救护$10,000; 5. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。访问学者可以将确认信发给学校证明已经购买满足学校要求的保险。留学生可以将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['TaiAn Health Insurance for UT Health Science Center San Antonio'] = "美国泰安国际医疗保险 - UT Health Science Center San Antonio";

l['Health Insurance for UT Medical Branch Galveston International Students and Scholars'] = "符合UT Medical Branch Galveston 标准的留学生和访问学者医疗保险";
l['UT Medical Branch Galveston Scholar Requirements'] = "UT Medical Branch Galveston访问学者医疗保险的标准";
l['UT Medical Branch Galveston Student Requirements'] = "UT Medical Branch Galveston学校对留学生的要求";
l['Taian Scholar/Student Insurance Plan A and Plan B meet UT Medical Branch Galveston enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per person per policy year; 2. Medical benefits of $50,000 per accident or illness; 3. Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Medical Branch Galveston as proof of insurance.'] = "UT Medical Branch Galveston 对留学生和访问学者购买校外医疗保险的要求是：1. 每人的年度最高赔付 $500,000; 2. 每次生病或受伤的最高赔付至少为$50,000；3. 遗体返送$7,500; 4. 紧急救护$10,000; 5. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。访问学者可以将确认信发给学校证明已经购买满足学校要求的保险。留学生可以将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['TaiAn Health Insurance for UT Medical Branch Galveston'] = "美国泰安国际医疗保险 - UT Medical Branch Galveston";

l['Health Insurance for UT Permian Basin International Students and Scholars'] = "符合UT Permian Basin 标准的留学生和访问学者医疗保险";
l['UT Permian Basin Scholar Requirements'] = "UT Permian Basin访问学者医疗保险的标准";
l['UT Permian Basin Student Requirements'] = "UT Permian Basin学校对留学生的要求";
l['Taian Scholar/Student Insurance Plan A and Plan B meet UT Permian Basin enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per person per policy year; 2. Medical benefits of $50,000 per accident or illness; 3. Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Permian Basin as proof of insurance.'] = "UT Permian Basin 对留学生和访问学者购买校外医疗保险的要求是：1. 每人的年度最高赔付 $500,000; 2. 每次生病或受伤的最高赔付至少为$50,000；3. 遗体返送$7,500; 4. 紧急救护$10,000; 5. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。访问学者可以将确认信发给学校证明已经购买满足学校要求的保险。留学生可以将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['TaiAn Health Insurance for UT Permian Basin'] = "美国泰安国际医疗保险 - UT Permian Basin";


l['Health Insurance for UT Tyler International Students and Scholars'] = "符合UT Tyler 标准的留学生和访问学者医疗保险";
l['UT Tyler Scholar Requirements'] = "UT Tyler访问学者医疗保险的标准";
l['UT Tyler Student Requirements'] = "UT Tyler学校对留学生的要求";
l['Taian Scholar/Student Insurance Plan A and Plan B meet UT Tyler enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per person per policy year; 2. Medical benefits of $50,000 per accident or illness; 3. Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Tyler as proof of insurance.'] = "UT Tyler 对留学生和访问学者购买校外医疗保险的要求是：1. 每人的年度最高赔付 $500,000; 2. 每次生病或受伤的最高赔付至少为$50,000；3. 遗体返送$7,500; 4. 紧急救护$10,000; 5. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。访问学者可以将确认信发给学校证明已经购买满足学校要求的保险。留学生可以将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['TaiAn Health Insurance for UT Tyler'] = "美国泰安国际医疗保险 - UT Tyler";


l['Health Insurance for　UT Arlington International Students and Scholars'] = "符合UT Arlington 标准的留学生和访问学者医疗保险";
l['Taian Scholar/Student Insurance Plan A and Plan B meet UT Arlington enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UT Arlington as proof of insurance.'] = "UT Arlington 对留学生和访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。访问学者可以将确认信发给学校证明已经购买满足学校要求的保险。留学生可以将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['TaiAn Health Insurance for UT Arlington'] = "美国泰安国际医疗保险 - UT Arlington";
l['UT Arlington Scholar Requirements'] = "UT Arlington访问学者医疗保险的标准";
l['UT Arlington Student Requirements'] = "UT Arlington学校对留学生的要求";

l['University of Dayton Student Requirements'] = "University of Dayton学校对留学生的要求";

l['Enrolled international students are required to carry $250,000 per illness or injury, and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements.'] = "在校国际学生医疗保险的要求是每次生病或受伤的最高赔付为$250,000并且需要完成保险的waiver申请。泰安保险计划B里的每次生病或受伤$250,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。";

l['On the Plan A effective date you need to have a valid J1/F1 visa and be outside of your home country for your study or program.  Taian Plan A covers maternity only if the pregnancy begins after the plan is effective.'] = "购买泰安保险计划A时，申请人需要有生效的J1或F1签证并且已经到达访学国家进行访学项目时保险才能生效。 只有保险生效以后的怀孕才在生育险的理赔范围内。";
l['Requirements for all schools for F and J visa'] = " 全美各校F鉴证和J签证医疗保险的标准";
l['School Requirements and Most Affordable Insurance Plan'] = "全美各校F和J签证保险标准及符合各校标准的保险计划";
l['Find your school insurance requirements and most affordable plan here'] = "全美各校F和J签证保险的标准以及符合各标准的保险计划";
l['URC - If not pregnant when you purchase.   Not covered - If you are pregnant when you purchase.'] = "URC(通常合理的惯例的费用)，必须是在怀孕之前购买. 购买之前的怀孕，保险不Cover";
l['Consult your school about their requirements'] = "请咨询学校";
l['Affordable Insurance that Meets School Requirements'] = "符合各校标准的最经济实惠的保险计划";
l['School Waiver Requirements'] = "Waive 学校保险的要求";
l['Plan that meets this school\'s standards for J scholar'] = "符合该校标准的J签证访问学者保险计划";
l['Taian Scholar/Student Insurance Plan A and Plan B meet your school J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to your school as proof of insurance.'] = "泰安访问学者/留学生保险计划A和B满足你校对J 鉴证访问学者的标准， 其具体要求是： 1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上成功提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已经购买符合学校标准的保险。";
l['International Scholar/Student'] = "访问学者/留学生";
l['Groups of 2 or more save about 10% with Plan B Group'] = "两个或两个以上主申请人购买团体计划B享受优惠10%";
l['Taian Scholar/Student Insurance Plan A and Plan B meet UCLA J scholar standards. Some scholars are required to have coverage of $100,000 per illness or injury and the waiver is approved by VSISP/Garnett-Powers. This requirement is met by Taian Scholar/Student Plan A or Plan B with $250,000 benefit per illness or injury.  Other scholars have the waiver approved at the Dashew Center for International Students and Scholars.  They are required to have coverage of $50,000 per illness or injury. This requirement is met by Taian Scholar/Student Plan B with $50,000 benefit per illness or injury. Each of these requirements meets the US Department of State standards. You can check your required coverage level at the link below.'] = "UCLA对访问学者购买医疗保险的要求有两种，这两种要求的差别在于每次生病或受伤的最高赔付：一种是对于需要在VSISP/Garnett- Powers 办理Waiver 的访问学者，UCLA要求保险含有$100,000。泰安访问学者/留学生保险计划B Standard Plan 里的$250,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准。 另一种是对于需要在Dashew国际学生学者中心办理Waiver 的访问学者，UCLA要求保险含有$50,000。泰安访问学者/留学生计划B里的$50,000 per illness or injury 满足这一要求。这两种要求都符合美国国务院的标准，详见以下链接。";
l['Indiana University - Bloomington allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to IU Bloomington to waive the school plan.'] = "Indiana University - Bloomington允许国际学生和访问学者waive学校保险。其waive标准是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500; 5. 对女生要求含有生育保险。对男生，泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，对女生，泰安访问学者/留学生保险计划A满足所有要求和国务院的标准。详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校要求waive学校保险。";
l['IUPUI allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to IUPUI to waive the school plan.'] = "IUPUI允许国际学生和访问学者waive学校保险。其waive标准是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500; 5. 对女生要求含有生育保险。对男生，泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，对女生，泰安访问学者/留学生保险计划A满足所有要求和国务院的标准。详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校要求waive学校保险。";
l['Univtemplate allows both international students and J scholars to waive the school plan. Students and scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only. For males, Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. For females, Plan A meets the requirements.  Shortly after submitting an application you will receive confirmation of your coverage which you can send to Univtemplate to waive the school plan.'] = "Univtemplate允许国际学生和访问学者waive学校保险。其waive标准是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500; 5. 对女生要求含有生育保险。对男生，泰安访问学者/留学生保险计划B里的$50,000 per illness or injury 满足这一要求，同时也符合美国国务院的标准。对女生，泰安访问学者/留学生保险计划A满足所有要求和国务院的标准。详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校要求waive学校保险。";
l['IU Bloomington Scholar Requirements'] = "IU-Bloomington访问学者医疗保险的标准";
l['IU Bloomington Student Requirements'] = "IU Bloomington学校对留学生的要求";
l['IUPUI Scholar Requirements'] = "IUPUI访问学者医疗保险的标准";
l['IUPUI Student Requirements'] = "IUPUI学校对留学生的要求";

l['NYU and NYU Poly Scholar Requirements'] = "NYU and NYU Poly访问学者医疗保险的标准";

l['New York Institute of Technology Scholar Requirements'] = "New York Institute of Technology访问学者医疗保险的标准";


l['Columbia Scholar Requirements'] = "Columbia访问学者医疗保险的标准";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Yale University enrolled international student standards and J scholar standards. Both students (F or J visa) and Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Yale University as proof of insurance.'] = "Yale University 对留学生和访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。访问学者可以将确认信发给学校证明已经购买满足学校要求的保险。留学生可以将确认信和填写好的Waiver Form 一起发给学校要求waiver， 泰安公司可以协助填写Waiver Form.";
l['Yale University Student requirements'] = "Yale University学校对留学生的要求";
l['Yale University Scholar requirements'] = "Yale University访问学者医疗保险的标准";
l['Enrolled international students are allowed to waive only if they are an exchange student visiting through an official exchange program. They are required to carry $200,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards. You need to complete the Waiver Form, submit it along with your I-20(or DS2019), insurance ID card and Visa Letter.'] = "只有是exchange program 的国际学生才能waive学校保险。Waive学校保险要求含有 $200,000 per illness or injury。 泰安访问学者/留学生保险计划B Standard Plan 里的$250,000 per illness or injury 是满足此标准的最经济实惠的保险计划。 购买成功后，需要提交Waiver Form, 保险确认信(Visa Letter), ID Card和 I20 (或DS2019) 要求waive 学校保险。";
l['Purdue University Scholar Requirements'] = "Purdue University访问学者医疗保险的标准";
l['Purdue University Student Requirements'] = "Purdue University学校对留学生的要求";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Purdue enrolled international student standards and J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Purdue as proof of insurance.'] = "Purdue University 对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['UC Davis Scholar Requirements'] = "UC Davis访问学者医疗保险的标准";

l['A few minutes after submitting an application, you will receive a confirmation letter of your coverage which you can send to UCLA to waive the school mandatory plan.'] = "网上提交申请几分钟以后，你就会收到Email，其中含有你的保险卡和确认信，您可以将确认信发送到学校要求waive学校保险。";
l['UCLA Scholar Requirements'] = "UCLA访问学者医疗保险的标准";
l['A few minutes after submitting an application, you will receive a confirmation letter of your coverage which you can send to USC to waive the school mandatory plan.'] = "网上提交申请几分钟以后，你就会收到Email，其中含有你的保险卡和确认信，您可以将确认信发送到学校要求waive学校保险。";
l['USC Scholar Requirements'] = "USC访问学者医疗保险的标准";

l['US Department of State Insurance Requirements for J visa'] = "美国国务院J签证医疗保险的标准";



l['US Department of State Insurance Requirements for J visa'] = "美国国务院J签证医疗保险的标准";
l['Enrolled international students are required to carry $200,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.'] = "全日制在校国际学生的保险需要含有$200,000 per illness or injury。 泰安访问学者/留学生保险计划B Standard Plan 里的$250,000 per illness or injury 是满足此标准的最经济实惠的保险计划。 购买成功后，需要将保险确认信和waiver form 一起发给学校, 要求waive 学校保险。";
l['Enrolled international students are required to carry $250,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.'] = "全日制在校国际学生的保险需要含有$250,000 per illness or injury。 泰安访问学者/留学生保险计划B Standard Plan 里的$250,000 per illness or injury 是满足此标准的最经济实惠的保险计划。 购买成功后，需要将保险确认信和waiver form 一起发给学校, 要求waive 学校保险。";
l['Enrolled international students are required to carry $500,000 per illness or injury and complete a waiver. Taian Scholar/Student Insurance Plan B with $500,000 benefit per illness or injury is the most affordable plan that meets the standards.'] = "全日制在校国际学生的保险需要含有$500,000 per illness or injury。 泰安访问学者/留学生保险计划B Standard Plan 里的$500,000 per illness or injury 是满足此标准的最经济实惠的保险计划。 购买成功后，需要将保险确认信和waiver form 一起发给学校, 要求waive 学校保险。";
l['Enrolled international students are required to have a $500,000  lifetime maximum and complete an online waiver. Taian Scholar/Student Insurance Plan B with $50,000 benefit per illness or injury and $5,000,000 lifetime maximum is the most affordable plan that meets the standards.'] = "在校国际学生保险要求终身最高赔付$500,000，并要求填写online waiver form。 泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 maximum/illness or injury 含有终身最高赔付$5,000,000，是满足此标准的最经济实惠的保险计划。";
l['UIUC enrolled international students are required to carry: 1. $500,000 per illness or injury; 2. Not over $2,000 deductible; 3. Plan must be effective by the first day UIUC plan is effective. Students are also required to complete an on line waiver.  The last acceptable effective date for spring semester is January 18, 2014.  Taian Travel Plan with $500,000 per illness or injury and $1,000 deductible is the most affordable plan that meets the standard.'] = "UIUC对国际学生购买保险的要求是: 1. 每次生病或受伤的最高赔付至少为$500,000; 2. 免赔额不超过 $2,000； 3. 购买保险的生效日期不迟于UIUC保险的开始日期； 4. 需要在截至日期前完成waiver申请。 泰安国际旅游保险$500,000 最高赔付和 $1,000 免赔额选项是符合该标准的最经济实惠的保险计划。 2014年春季申请waiver的截止日期是2014年1月18日。";
l['Taian Scholar/Student Insurance Plan A and Plan B meet UIUC J scholar standards. Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to UIUC as proof of insurance.'] = "UIUC 对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明已经购买满足学校要求的保险。";
l['UIUC enrolled international students are required to carry: 1. $500,000 per illness or injury; 2. Not over $2,000 deductible; 3. Plan must be effective by the first day UIUC plan is effective. Students are also required to complete an on line waiver.  The last acceptable effective date for spring semester is January 18, 2014.  Taian Travel Plan with $500,000 per illness or injury and $1,000 deductible is the most affordable plan that meets the standard.  Please click on the travel tab on the top of the page.'] = "UIUC对国际学生购买保险的要求是: 1. 每次生病或受伤的最高赔付至少为$500,000; 2. 免赔额不超过 $2,000； 3. 购买保险的生效日期不迟于UIUC保险的开始日期； 4. 需要在截至日期前完成waiver申请。 泰安国际旅游保险$500,000 最高赔付和 $1,000 免赔额选项是符合该标准的最经济实惠的保险计划。 请点击页面顶部的国际旅游医疗保险按钮。 2014年春季申请waiver的截止日期是2014年1月18日。";
l['Scholars look at Plan B below.  Students please click on Travel Insurance tab at top of page. The travel plan is the most affordable plan that meets your requirements.'] = "访问学者请见本页下面的计划B。 国际学生请点击页面顶部的国际旅游医疗保险，泰安旅游保险是满足UIUC要求的最经济实惠的计划。";
l['UIUC Student Requirements'] = "UIUC学校对留学生的要求";
l['UIUC Scholar Requirements'] = "UIUC访问学者医疗保险的标准";
l['International Scholars and Students'] = "访问学者和留学生";
l['TaiAn Scholars and Students'] = "泰安访问学者和留学生";
l['TaiAn Scholars'] = "泰安访问学者";
l['Designed specifically for international scholars (J1,J2). Purchase monthly, renewable up to 5 years if 3 months or more are purchased.'] = "计划专为访问学者和家属(J1,J2)而设计。 按月购买，如果购买3个月以上可以续保至5年。";
l['Designed specifically for international scholars(J1,J2). Purchase monthly, renewable up to 4 years.'] = "计划专为访问学者和家属(J1,J2)而设计。 按月购买，可以续保至4年。";

l['Patriot Exchange Plan B Standard Plan with $50,000 limit per illness/injury meets the US Dept of state standards for Exchange visitors (J visa) which are: At least $50,000 per illness, repatriation of remains of $7,500, Medical evacuation benefits of $10,000, and a deductible not over $500.'] = "计划B (Patriot Exchange Standard Plan) 里的$50,000Maximum/illness or injury 符合美国国务院对J签证的要求。国务院的要求是： 1.每次生病至少$50,000的最高赔付； 2. 遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500.";
l['Student Requirements'] = "学校对留学生的要求";
l['TaiAn Health Insurance for UC Davis J Scholars'] = "美国泰安国际医疗保险 - UC Davis 访问学者";
l['TaiAn International Health Insurance'] = "美国泰安国际医疗保险";
l['Do you want a $100 per illness deductible, $250 annual deductible, or $500 annual deductible?'] = "免赔额选择： 每次生病或受伤$100免赔额，年度免赔额$250, 年度免赔额$500";
l['Maximum Benefit per illness/injury ($50,000, $100,000, $250,000, $500,000)'] = "每次疾病或受伤的最高赔付限额($50,000，$100,000, $250,000，$500,000）"; 
l['Do you want adventure sports rider?'] = "你需要冒险运动选项吗？";
l['Do you want the add on benefit? (Covers lost baggage, legal assistance, personal liability, damage to third party, high school sports)'] = "你需要附加保项吗？ （含括行李丢失，法律援助，个人责任，第三方损伤，高中体育）";
l['Do you want STANDARD coverage that meets J visa requirements, or BASIC coverage that has less benefits?'] = "你需要满足国务院对J鉴证要求的Standard保险，还是需要保险利益较低的Basic保险？";
l['TaiAn Patriot Exchange Group Application Information'] = "TaiAn Patriot Exchange Group (学生保险计划B) 申请信息";
l['TaiAn Patriot Exchange Group Application'] = "TaiAn Patriot Exchange Group (学生保险计划B) 申请表";
l['TaiAn Patriot Exchange Group Information Submitted'] = "TaiAn Patriot Exchange Group (学生保险计划B)申请信息递交成功！";
l['International Scholar'] = "访问学者";
l['Taian International Health Insurance provides International Scholar Insurance for US visa scholars (J visa). Taian Scholar Insurance Plan A and Plan B meet UC Davis scholar insurance standards and are more affordable.  UC Davis requires a minimum of $50,000.00 per illness or injury and our Plan B Standard Plan meets this requirement.'] = "泰安公司为J签证的访问学者提供优质的医疗保险。泰安访问学者保险计划A和B满足美国国务院和UC Davis 对访问学者保险的要求并且更加经济实惠。UC Davis 要求每次生病或受伤的赔付限额最少$50,000.00， 我们的访问学者保险计划B Standard Plan 里的三个选择都满足这个要求";
l['TaiAn International Scholars'] = "泰安访问学者";
l['Designed specifically for international scholars (J1,J2). Renewable up to 5 years if 3 months or more are purchased. For those who have been in the US for less than 6 months.'] = "计划专为J1和J2而设计。如果购买3个月以上可以续保至5年。适用于刚来美国不满6个月者。";
l['Designed specifically for international scholars (J1,J2). Renewable up to 4 years if 1 month or more is purchased.'] = "计划专为J1和J2而设计。如果购买1个月以上可以续保至4年。";
l['J2 can buy Patriot Exchange alone (if J1 buys schools plan) or buy with J1'] = "如果J1购买了学校的保险J2可以单独购买计划B（Patriot Exchange)，否则J2需要在J1购买计划B的前提下才能购买计划B";
l['Do you want to pay monthly, quarterly, semiannually, or annually?  Monthly is the most expensive.  Quarterly saves about 6%, semiannually saves about 8%, annually saves about 17%.  Plans cancelled in the middle of a payment period will be charged a penalty for early termination.'] = "你选择哪种付款方式：每月，每季，每半年还是每年？按月付最贵，按季约省6%，按半年付约省8%，按年付约省12%。 付款期间中止保险会有罚款。";                
l['Please fill in the answers in English.  You can use your preferred language if you do not know the English answer'] = " 请尽量用英语填表";
l['Coverage Start Date'] = "保险开始日期";
l['Coverage End Date'] = "保险终止日期";
l['TaiAn Patriot Exchange Information Submitted'] = "TaiAn Patriot Exchange (学生保险计划B)申请信息递交成功！";
l['TaiAn Patriot Exchange (TaiAn Plan B) pre-application'] = "TaiAn Patriot Exchange (泰安计划B)预申请表";
l['TaiAn Patriot Exchange Application Information'] = "TaiAn Patriot Exchange (学生保险计划B) 申请信息";
l['Maximum Limit per illness or injury ($50,000, $100,000, $250,000, $500,000)'] = "每次生病或受伤的最高赔付($50,000, $100,000, $250,000, $500,000)";
l['Primary Insured-Home Country'] = "主申请人-长居国家";
l['Primary Insured-Are you participating in a \'work and travel program\'?'] = "主申请人- 你是否参加\'工作和旅游项目\'(注：这是一种高中生的活动)";
l['Primary Insured-If yes, name of the program'] = "主申请人- 如果是，请填写项目名称";
l['Primary Insured-Are you a J2 visa holder?'] = "主申请人- 你持有J2签证吗？";
l['Do you want optional coverage for higher risk sports?  (Most people say no)'] = "你需要购买额外的危险运动保险吗？（大多数人不需要）";
l['Do you want the ad on benefit for loss of baggage, legal assistance, and personal liability (Most people say no)'] = "你需要附加保险包括行李丢失，法律援助和个人责任吗？（大多数人不需要）";
l['TaiAn Health Insurance for University of Southern California'] = "美国泰安国际医疗保险 - University of Southern California";
l['TaiAn Health Insurance for Stanford University'] = "美国泰安国际医疗保险 - Stanford University";
l['Health insurance for Stanford University Students and Scholars'] = "符合Stanford标准的留学生和访问学者医疗保险";
l['Stanford Scholar Requirements'] = "Stanford访问学者医疗保险的标准";
l['Stanford Student Requirements'] = "Stanford学校对留学生的要求";
l['Taian Scholar/Student Insurance Plan A and Plan B meet Stanford University J scholar standards (not for enrolled students). Exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500.  Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Stanford to waive the school plan.'] = "Stanford University 对J1访问学者（不包括全日制在校学生)购买医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校要求waive学校保险。";
l['Enrolled students with F or J visa are required to have additional coverage (see link below). Taian Plan A meets these requirements.  Shortly after submitting an application you will receive confirmation of your coverage.  You will then need to submit a certification form to Stanford which we can help you with.'] = "Stanford University 对 F1 international Student 和 J1 visiting student 购买保险有更高的要求，详见下面链接“Stanford学校对留学生的要求”。泰安访问学者留学生保险计划A是满足这些要求的最经济实惠的保险计划，同时也符合美国国务院的标准。网上提交申请几分钟后你就会收到保险确认信（Visa Letter）。然后，泰安公司可以协助你填写学校的 Waiver Form （Insurance Coverage Certification Form）。";

l['TaiAn Health Insurance for Rudolf Steiner College'] = "美国泰安国际医疗保险 - Rudolf Steiner College";
l['Health insurance for Rudolf Steiner College Students and Scholars'] = "符合Rudolf Steiner College标准的留学生和访问学者医疗保险";
l['Rudolf Steiner College Scholar Requirements'] = "Rudolf Steiner College访问学者医疗保险的标准";
l['Rudolf Steiner College Student Requirements'] = "Rudolf Steiner College学校对留学生的要求";
l['Rudolf Steiner College lists no specific insurance requirements, so the US Department of State requirements apply.  Taian Scholar/Student Insurance Plan A and Plan B meet Rudolf Steiner College J scholar standards and enrolled students requirements. Exchange visitors (J visa) and students have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the standards, and the US Department of State requirements. Shortly after submitting an application you will receive confirmation of your coverage which you can send to Rudolf Steiner College as proof of insurance.'] = "Rudolf Steiner College 对国际学生和访问学者购买保险没有明确的要求。 所以该校国际学生和访问学者需要购买符合美国国务院要求的保险。 国务院要求是：1.每次生病或受伤的最高赔付至少为$50,000; 2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。泰安访问学者/留学生保险计划B Standard Plan 里的$50,000 per illness or injury 是满足此标准的最经济实惠的保险计划，详见以下链接。 网上提交申请几分钟后你就会收到Email，其中含有你的保险卡和确认信。你可以将确认信发给学校证明你已购买满足学校要求的保险。";


l['TaiAn Health Insurance for University of Illinois Urbana Champaign'] = "美国泰安国际医疗保险 - University of Illinois Urbana Champaign";
l['TaiAn Health Insurance for New York University and NYU Poly'] = "美国泰安国际医疗保险 - New York University and NYU Poly";
l['TaiAn Health Insurance for New York Institute of Technology'] = "美国泰安国际医疗保险 - New York Institute of Technology";
l['TaiAn Health Insurance for Pennsylvania State University'] = "美国泰安国际医疗保险 - Pennsylvania State University";
l['TaiAn Health Insurance for JHMI'] = "美国泰安国际医疗保险 - JHMI";
l['TaiAn Health Insurance for Purdue University'] = "美国泰安国际医疗保险 - Purdue University";
l['TaiAn Health Insurance for Columbia University'] = "美国泰安国际医疗保险 - Columbia University";
l['TaiAn Health Insurance for UCLA'] = "美国泰安国际医疗保险 - UCLA";
l['TaiAn Health Insurance for UC Davis'] = "美国泰安国际医疗保险 - UC Davis";
l['TaiAn Health Insurance for IU Bloomington'] = "美国泰安国际医疗保险 - IU Bloomington";
l['TaiAn Health Insurance for Univtemplate'] = "美国泰安国际医疗保险 - Univtemplate";
l['Travel Group Information Submitted'] = "团体旅游医疗保险信息提交成功";
l['Travel Group Application'] = "申请团体旅游医疗保险";
l['Travel Group Application Information'] = "团体旅游医疗保险申请信息";
l['Deductible ($0, $100, $250, $500, $1000, $2500)'] = "免赔额（$0，$100，$250，$500，$1,000，$2500）";
l['Maximum Limit ($50,000, $100,000, $500,000, $1,000,000)'] = "最高赔付限额（$50,000，$100,000，$500,000，$1,000,000）";
l['Sponsoring Organization'] = "团体名称";
l['Contact First name/Last name'] = "联系人  名/姓";
l['Address'] = "地址";
l['Email Address (2nd address optional)'] = "另一个电邮地址（可留空白）";
l['Requested Expiration Date'] = "保险结束日期（团体中最后者的结束日期）";
l['Date of Departure from Home Country'] = "团体中最早者离开长居国日期";
l['Date of Return to Home Country'] = "团体中最后者返回长居国日期";
l['Date of Arrival in the U.S. (Required for non-US citizens over 65 and visiting the US)'] = "抵达美国的日期 (仅65岁以上访美的非美国公民需要填写)";
l['Destination country'] = "目的地国家";
l['Insured 1-Type (Primary/Spouse/Child)'] = "申请人1-类型（主申请人/配偶/子女）";
l['Insured 1-First Name'] = "申请人1-名字";
l['Insured 1-Last Name'] = "申请人1-姓";
l['Insured 1-Date of Birth'] = "申请人1-出生日期(月-日-年）";
l['Insured 1-Government Issued ID Number'] = "申请人1-政府ID(例如护照号码）";
l['Insured 1-Home Country'] = "申请人1-长居国家";
l['Insured 1-Country of Citizenship'] = "申请人1-国籍";
l['Insured 1-Start Date'] = "申请人1-开始日期";
l['Insured 1-End Date'] = "申请人1-结束日期";
l['Insured 2-Type (Primary/Spouse/Child) Note: Only fill in family members that are purchasing coverage'] = "申请人2-类型（主申请人/配偶/子女） 说明：如果主申请人有家属一起购买，将一家人按序填写完成. 不要填入不买保险的家属";
l['Insured 2-First Name'] = "申请人2-名字";
l['Insured 2-Last Name'] = "申请人2-姓";
l['Insured 2-Date of Birth'] = "申请人2-出生日期(月-日-年）";
l['Insured 2-Government Issued ID Number'] = "申请人2-政府ID(例如护照号码）";
l['Insured 2-Home Country'] = "申请人2-长居国家";
l['Insured 2-Country of Citizenship'] = "申请人2-国籍";
l['Insured 2-Start Date'] = "申请人2-开始日期";
l['Insured 2-End Date'] = "申请人2-结束日期";
l['Insured 3-Type (Primary/Spouse/Child)'] = "申请人3-类型（主申请人/配偶/子女）";
l['Insured 3-First Name'] = "申请人3-名字";
l['Insured 3-Last Name'] = "申请人3-姓";
l['Insured 3-Date of Birth'] = "申请人3-出生日期(月-日-年）";
l['Insured 3-Government Issued ID Number'] = "申请人3-政府ID(例如护照号码）";
l['Insured 3-Home Country'] = "申请人3-长居国家";
l['Insured 3-Country of Citizenship'] = "申请人3-国籍";
l['Insured 3-Start Date'] = "申请人3-开始日期";
l['Insured 3-End Date'] = "申请人3-结束日期";
l['Insured 4-Type (Primary/Spouse/Child)'] = "申请人4-类型（主申请人/配偶/子女）";
l['Insured 4-First Name'] = "申请人4-名字";
l['Insured 4-Last Name'] = "申请人4-姓";
l['Insured 4-Date of Birth'] = "申请人4-出生日期(月-日-年）";
l['Insured 4-Government Issued ID Number'] = "申请人4-政府ID(例如护照号码）";
l['Insured 4-Home Country'] = "申请人4-长居国家";
l['Insured 4-Country of Citizenship'] = "申请人4-国籍";
l['Insured 4-Start Date'] = "申请人4-开始日期";
l['Insured 4-End Date'] = "申请人4-结束日期";
l['Insured 5-Type (Primary/Spouse/Child)'] = "申请人5-类型（主申请人/配偶/子女）";
l['Insured 5-First Name'] = "申请人5-名字";
l['Insured 5-Last Name'] = "申请人5-姓";
l['Insured 5-Date of Birth'] = "申请人5-出生日期(月-日-年）";
l['Insured 5-Government Issued ID Number'] = "申请人5-政府ID(例如护照号码）";
l['Insured 5-Home Country'] = "申请人5-长居国家";
l['Insured 5-Country of Citizenship'] = "申请人5-国籍";
l['Insured 5-Start Date'] = "申请人5-开始日期";
l['Insured 5-End Date'] = "申请人5-结束日期";
l['Insured 6-Type (Primary/Spouse/Child)'] = "申请人6-类型（主申请人/配偶/子女）";
l['Insured 6-First Name'] = "申请人6-名字";
l['Insured 6-Last Name'] = "申请人6-姓";
l['Insured 6-Date of Birth'] = "申请人6-出生日期(月-日-年）";
l['Insured 6-Government Issued ID Number'] = "申请人6-政府ID(例如护照号码）";
l['Insured 6-Home Country'] = "申请人6-长居国家";
l['Insured 6-Country of Citizenship'] = "申请人6-国籍";
l['Insured 6-Start Date'] = "申请人6-开始日期";
l['Insured 6-End Date'] = "申请人6-结束日期";
l['Insured 7-Type (Primary/Spouse/Child)'] = "申请人7-类型（主申请人/配偶/子女）";
l['Insured 7-First Name'] = "申请人7-名字";
l['Insured 7-Last Name'] = "申请人7-姓";
l['Insured 7-Date of Birth'] = "申请人7-出生日期(月-日-年）";
l['Insured 7-Government Issued ID Number'] = "申请人7-政府ID(例如护照号码）";
l['Insured 7-Home Country'] = "申请人7-长居国家";
l['Insured 7-Country of Citizenship'] = "申请人7-国籍";
l['Insured 7-Start Date'] = "申请人7-开始日期";
l['Insured 7-End Date'] = "申请人7-结束日期";
l['Insured 8-Type (Primary/Spouse/Child)'] = "申请人8-类型（主申请人/配偶/子女）";
l['Insured 8-First Name'] = "申请人8-名字";
l['Insured 8-Last Name'] = "申请人8-姓";
l['Insured 8-Date of Birth'] = "申请人8-出生日期(月-日-年）";
l['Insured 8-Government Issued ID Number'] = "申请人8-政府ID(例如护照号码）";
l['Insured 8-Home Country'] = "申请人8-长居国家";
l['Insured 8-Country of Citizenship'] = "申请人8-国籍";
l['Insured 8-Start Date'] = "申请人8-开始日期";
l['Insured 8-End Date'] = "申请人8-结束日期";
l['Global Application Information Submitted'] = "全球医疗保险申请信息成功提交！";
l['Submit'] = "提交";
l['We will email you when the online application is ready for you to complete your purchase.'] = " 我们会很快将申请表Email给你，然后你可以付款完成申请";
l['Organizations'] = "国际组织";
l['We work with representatives of International organizations, student or scholar organizations, and travel clubs to help your membership with their travel insurance needs.'] = "我们与国际组织，学生学者联谊会以及旅游俱乐部合作，帮助会员选择合适的医疗保险";
l['Global Application'] = "全球医疗保险申请表";
l['Spouse\'s Date of Birth'] = "配偶的出生日期 (如果配偶不买保险，此处留空）";
l['Spouse\'s Gender'] = "配偶的性别(如果配偶不买保险，此处留空）";
l['Number of Dependent Children Age 9 years or below'] = "年龄9岁或以下的子女数(如果子女不买保险，此处留空）";
l['Number of Dependent Children Ages 10 to 18'] = "年龄10到18岁的子女数(如果子女不买保险，此处留空）";
l['Silver/Gold/Gold Plus/Platinum'] = "银质/金质/金加/铂金计划";
l['Deductible ($100, $250, $500, $1000, $2500, $5000, $10,000)'] = "免赔额（$100，$250，$500，$1000，$2500，$5000，$10,000）";
l['Primary Insured-First Name'] = "主申请人-名字";
l['Primary Insured-Last Name'] = "主申请人-姓";
l['Primary Insured-Gender'] = "主申请人-性别";
l['Primary Insured-Date of Birth'] = "主申请人-出生日期";
l['Primary Insured-Height'] = "主申请人-身高";
l['Primary Insured-Inches or centimeters'] = "主申请人-英寸或厘米";
l['Primary Insured-Weight'] = "主申请人-体重";
l['Primary Insured-Kilograms or Pounds'] = "主申请人-公斤或磅";
l['Primary Insured-Occupation (ok to leave blank)'] = "主申请人-职业（可以留空）";
l['Primary Insured-Government Issued ID Number'] = "主申请人-政府颁发的身份证号码或护照号码";
l['Primary Insured-Country of Citizenship'] = "主申请人-国籍";
l['Primary Insured-Type of visa'] = "主申请人-签证类型";
l['Primary Insured-Visa issue date'] = "主申请人- 签证签发日期";
l['Primary Insured-Visa expiration date'] = "主申请人- 签证过期日期";
l['Primary Insured-Date of arrival in US for Non-US citizens (if you are not in the US, leave it blank)'] = "主申请人-非美国公民到达美国的日期 ( 如果你不在美国，此处留空白)";
l['Primary Insured-If US Citizen Date you did or will depart US'] = "主申请人-如果是美国公民，你离开美国的日期";
l['Primary Insured-Is your expected length of residence outside the U.S. at least 6 of the next 12 months? '] = "主申请人-您计划在未来12个月里居住在美国境外至少6个月吗？";
l['Spouse-First Name (Leave spouse and children information blank if you are not buying insurance for them.)'] = "配偶-名字 (如果配偶和孩子不买此保险，配偶和孩子的信息全留空白.)";
l['Spouse-Last Name'] = "配偶-姓";
l['Spouse-Gender'] = "配偶-性别";
l['Spouse-Date of Birth'] = "配偶-出生日期";
l['Spouse-Height'] = "配偶-身高";
l['Spouse-Inches or centimeters'] = "配偶-英寸或厘米";
l['Spouse-Weight'] = "配偶-体重";
l['Spouse-Kilograms or Pounds'] = "配偶-公斤或磅";
l['Spouse-Occupation (ok to leave blank)'] = "配偶-职业（可以留空）";
l['Spouse-Government Issued ID Number'] = "配偶-政府颁发的身份证号码或护照号码";
l['Spouse-Country of Citizenship'] = "配偶-国籍";
l['Spouse-Type of visa'] = "配偶-签证类型";
l['Spouse-Visa issue date'] = "配偶- 签证签发日期";
l['Spouse-Visa expiration date'] = "配偶- 签证过期日期";
l['Spouse-Date of arrival in US for Non-US citizens (if you are not in the US, leave it blank)'] = "配偶-非美国公民到达美国的日期 ( 如果你不在美国，此处留空白)";
l['Spouse-If US Citizen Date you did or will depart US'] = "配偶-如果是美国公民，你离开美国的日期";
l['Spouse-Is your expected length of residence outside the U.S. at least 6 of the next 12 months? '] = "配偶-您计划在未来12个月里居住在美国境外至少6个月吗？";
l['Child 1-First Name'] = "子女1-名字";
l['Child 1-Last Name'] = "子女1-姓";
l['Child 1-Gender'] = "子女1-性别";
l['Child 1-Date of Birth'] = "子女1-出生日期";
l['Child 1-Height'] = "子女1-身高";
l['Child 1-Inches or centimeters'] = "子女1-英寸或厘米";
l['Child 1-Weight'] = "子女1-体重";
l['Child 1-Kilograms or Pounds'] = "子女1-公斤或磅";
l['Child 1-Occupation (ok to leave blank)'] = "子女1-职业（可以留空）";
l['Child 1-Government Issued ID Number'] = "子女1-政府颁发的身份证号码或护照号码";
l['Child 1-Country of Citizenship'] = "子女1-国籍";
l['Child 1-Type of visa'] = "子女1-签证类型";
l['Child 1-Visa issue date'] = "子女1- 签证签发日期";
l['Child 1-Visa expiration date'] = "子女1- 签证过期日期";
l['Child 1-Date of arrival in US for Non-US citizens (if you are not in the US, leave it blank)'] = "子女1-非美国公民到达美国的日期 ( 如果你不在美国，此处留空白)";
l['Child 1-If US Citizen Date you did or will depart US'] = "子女1-如果是美国公民，你离开美国的日期";
l['Child 1-Is your expected length of residence outside the U.S. at least 6 of the next 12 months? '] = "子女1-您计划在未来12个月里居住在美国境外至少6个月吗？";
l['Child 2-First Name'] = "子女2-名字";
l['Child 2-Last Name'] = "子女2-姓";
l['Child 2-Gender'] = "子女2-性别";
l['Child 2-Date of Birth'] = "子女2-出生日期";
l['Child 2-Height'] = "子女2-身高";
l['Child 2-Inches or centimeters'] = "子女2-英寸或厘米";
l['Child 2-Weight'] = "子女2-体重";
l['Child 2-Kilograms or Pounds'] = "子女2-公斤或磅";
l['Child 2-Occupation (ok to leave blank)'] = "子女2-职业（可以留空）";
l['Child 2-Government Issued ID Number'] = "子女2-政府颁发的身份证号码或护照号码";
l['Child 2-Country of Citizenship'] = "子女2-国籍";
l['Child 2-Type of visa'] = "子女2-签证类型";
l['Child 2-Visa issue date'] = "子女2- 签证签发日期";
l['Child 2-Visa expiration date'] = "子女2- 签证过期日期";
l['Child 2-Date of arrival in US for Non-US citizens (if you are not in the US, leave it blank)'] = "子女2-非美国公民到达美国的日期 ( 如果你不在美国，此处留空白)";
l['Child 2-If US Citizen Date you did or will depart US'] = "子女2-如果是美国公民，你离开美国的日期";
l['Child 2-Is your expected length of residence outside the U.S. at least 6 of the next 12 months? '] = "子女2-您计划在未来12个月里居住在美国境外至少6个月吗？";
l['Child 3-First Name'] = "子女3-名字";
l['Child 3-Last Name'] = "子女3-姓";
l['Child 3-Date of Birth'] = "子女3-出生日期";
l['Child 3-Government Issued ID Number'] = "子女3-政府颁发的身份证号码或护照号码";
l['Requested Coverage Effective Date'] = " 保险生效日期(团体中最早者的开始日期）";
l['Residence Address  (Best to use Chinese address)'] = "居住地址（最好使用中国地址）";
l['City'] = "城市";
l['County/Region'] = "县/区（可以留空）";
l['State/Province (US or Canada only)'] = "州/省（仅美国和加拿大需要填写）";
l['Zip Code'] = "邮编";
l['Country'] = "国家";
l['Telephone'] = "电话";
l['Email Address'] = "电邮地址";
l['Forwarding Address  (Best to use US address)'] = "转发地址（最好用美国地址）";
l['Are you or any other applicant currently disabled or unable to perform normal activities?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "你或任何其他申请人目前已停用或无法进行正常的活动？";
l['Are you or any other applicant presently hospitalized, or scheduled for or in need of hospitalization or surgery?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "你或任何其他申请人目前或将要住院或手术？";
l['Have you or any other applicant ever tested positive for, been diagnosed with, or been treated for Acquired Immune Deficiency Syndrome (AIDS), AIDS Related Complex (ARC), Lymphadenopathy Syndrome, Human Immunodeficiency Virus (HIV) or any other Immune System Disorder?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "你或任何其他申请人以往任何时候在下列检测中呈阳性，或被诊断出患有，或获得性免疫缺陷综合症（AIDS），艾滋病相关综合症（ARC），淋巴结肿大综合征，人类免疫缺陷病毒（HIV）或任何其他免疫系统疾病？";
l['Have you or any other applicant ever had, been recommended to have, or are you currently on a waiting list for any organ transplant (other than corneal)?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "您或任何其他申请人曾经，或被建议，或者是你目前正在等候任何器官移植（角膜以外）？";
l['Do you participate in professional sports?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "你参加专业运动吗？";
l['Have you or any other applicant been diagnosed with or treated for any type of cancer or pre-cancerous condition during the past five (5) years?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "你或任何其他申请人在过去的五年里被诊断或治疗过任何类型的癌症或癌前期状态？";
l['If a non-U.S. citizen, do you or any other applicant have a U.S. visa or green card?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "如果是非美国公民，你或任何其他申请人有美国签证或绿卡吗？";
l['If a non-U.S. citizen, have you or any other applicant resided continuously in the U.S. for the last five (5) years?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "如果是非美国公民，您或任何其他申请人在过去的五年中一直在美国居住吗？";
l['Are you or any other applicant currently pregnant?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "您或任何其他申请人现在是否怀孕？";
l['Heart, cardiac, cardiovascular and/or circulatory, including, but not limited to: congestive heart failure, heart attack, angina, chest pain, arteriosclerosis, atherosclerosis, elevated blood pressure, hypertension, swelling of feet/ankles, thrombosis, phlebitis, rheumatic fever, or heart murmur?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "心脏，心，心血管疾病和/或循环系统，其中包括但不限于：充血性心脏衰竭，心脏病发作，心绞痛，胸痛，动脉硬化，动脉粥样硬化，血压升高，高血压，英尺/脚踝肿胀，血栓形成，静脉炎，风湿性发热，心脏杂音？";
l['Blood, blood vessels, spleen, arteries, veins or disorders of the blood, including, but not limited to: anemia, hemophilia, leukemia, hepatitis, lymph glands, or high cholesterol?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "血液，血管，脾，动脉，静脉，包括但不限于：贫血，血友病，白血病，肝炎，淋巴结，或高胆固醇？";
l['Diabetes, hyperglycemia or hypoglycemia?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "糖尿病，高血糖或低血糖？";
l['Asthma or allergies?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "哮喘或过敏吗？";
l['Cancer, tumor, cyst, polyp, melanoma, Kaposi\'s sarcoma, cell disorder, shingles, lump, calcification, or growth of any kind?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "癌症，肿瘤，囊肿，息肉，黑色素瘤，卡波济氏肉瘤，细胞排列紊乱，带状疱疹，肿块，钙化，或任何形式的增长？";
l['Liver, Pancreas, Gall Bladder or endocrine disorders including, but not limited to: pituitary, thyroid or metabolic disorders, or obesity?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "肝脏，胰腺，胆囊或内分泌失调，包括但不限于：垂体，甲状腺或代谢紊乱，或肥胖症的";
l['Kidney, urinary tract functions, kidney or bladder stones or infections?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "肾，尿道功能，肾脏或膀胱结石或感染吗？";
l['Respiratory system including, but not limited to: tuberculosis, lung disorders, emphysema, chronic cough, bronchitis, bronchial asthma, pleurisy pneumonia?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "呼吸系统，包括但不限于：肺结核，肺部疾病，肺气肿，慢性咳嗽，支气管炎，支气管哮喘，胸膜炎肺炎？";
l['Mental and nervous system disorders including, but not limited to: psychosis, mental or behavioral disorders, ADD or ADHD, chemical or drug abuse or dependency, alcoholism, psychiatric counseling and/or support groups, depression, anxiety, chronic fatigue, or eating or sleeping disorders?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "精神和神经系统疾病，包括但不限于：精神病，精神或行为障碍，ADD或ADHD，化学或药物滥用或依赖，酗酒，心理辅导和/或支持小组，抑郁症，焦虑症，慢性疲劳，饮食或睡眠障碍？";
l['Neurological disorders, including but not limited to: multiple sclerosis (MS), muscular dystrophy, Lou Gehrig\'s disease (ALS), Parkinson\'s disease, paralysis, epilepsy, convulsions, seizures, migraines, chronic headaches, stroke, or transient cerebral ischemic attacks?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "神经系统疾病，包括但不限于：多发性硬化症（MS），肌肉萎缩症，卢伽雷氏病（ALS），帕金森氏症，瘫痪，癫痫，抽搐，癫痫，偏头痛，慢性头痛，中风或短暂性脑缺血的攻击？";
l['Muscular, skeletal, spine, bone, or joint, including but not limited to: scoliosis, disc disease or disorder, vertebrae, degeneration, or any other back or neck condition, rheumatism, arthritis, gout, tendonitis, osteoporosis or inflammation?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "肌肉，骨骼，脊柱，骨，关节，包括但不限于：脊柱侧弯，椎间盘疾病或障碍，脊椎，变性，或任何其他的背部或颈部条件，风湿病，关节炎，痛风性关节炎，肌腱炎，骨质疏松症或炎症？";
l['For female applicants, miscarriage, complicated pregnancy or delivery, or infertility consultation, advice, diagnosis or treatment, and disorders of the reproductive systems, including but not limited to: vaginal bleeding, fibroids, nodules or breast cysts, fallopian tubes, ovaries or uterus, and hormone replacement therapy?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "对于女性申请者，流产，困难妊娠生产，或不孕不育咨询，诊断或治疗，以及生殖系统疾病，包括但不限于：阴道出血，子宫肌瘤，结节或乳房囊肿，输卵管，卵巢或子宫，以及激素替代疗法吗？";
l['For male applicants, disorders of the reproductive systems, including but not limited to: prostate or elevated PSA level, or erectile dysfunction?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "对于男性申请人，生殖系统疾病，包括但不限于：前列腺或升高的PSA水平，或勃起功能障碍？";
l['Congenital, genetic, hereditary or other birth condition or defect including, but not limited to: mental retardation, Down Syndrome, or other chromosome disorder, physical disorder, deformity or defect?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "先天性，遗传性，遗传性或其他的生育状况，包括但不限于：精神发育迟缓，唐氏综合征或其他染色体异常，身体机能失调，畸形或缺陷或缺陷？";
l['Digestive system, stomach, or intestines, including, but not limited to: esophageal regurgitation, gastritis, ulcers, colon, or rectum disorders?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "消化系统，胃，肠，包括但不限于：食管返流性胃炎，溃疡，结肠或直肠疾病？";
l['Eyes, ears, nose, mouth, throat or jaw, including, but not limited to: cataracts, glaucoma, nasal septum deviation, chronic sinusitis, or TMJ?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "眼睛，耳朵，鼻子，嘴巴，喉咙或下巴，包括但不限于：白内障，青光眼，鼻中隔偏曲，慢性鼻窦炎，或颞下颌关节？";
l['Any other disease, medical problem, illness, injury or condition of any kind not listed?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "任何其他疾病，医疗问题，疾病，受伤或任何形式的条件不上市？";
l['Do you or any family member applying for coverage currently use or during the past five years have you used tobacco in any form?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "你或任何家庭成员申请者正在使用或在过去五年中使用任何形式的烟草？";
l['Have you or any family member applying for coverage ever applied or purchased insurance through IMG?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "您或任何家庭成员曾经申请或购买IMG的保险吗？";
l['During the last twelve (12) months, have you or any family member applying for coverage experienced manifestation or symptoms of, been diagnosed with, or received any consultation, examination, testing or treatment (including medications) for, any medical, health, mental, physical or nervous condition?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "在过去的十二个月内，您或任何家庭成员在任何医疗，保健，心理，身理健康方面有过被诊断出患有疾病，或接受任何咨询，检查，测试或治疗（包括药物）？";
l['Have you or any family member applying for coverage ever been rejected, cancelled, rated or declined for coverage under any health, life or disability insurance policy?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "您或任何家庭成员申请健康保险，人寿保险，残疾保险曾经被拒绝，取消，额定或拒绝吗？";
l['During the last twelve (12) months, have you or any family member applying for coverage been covered under any health or medical insurance plan, including a government sponsored health care plan? If yes, please state the name and location of the insurance company, the policy/plan number, and the applicable dates of coverage.(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "在过去的十二个月内，您或任何家庭成员申请任何健康或医疗保险计划，包括政府资助的医疗保健计划吗？如果是，请注明保险公司名称和位置，保险号和起止日期。";
l['Please provide details on any yes answer including doctor name and address, date last seen, details of the condition'] = "以上任何答案有“Yes”的请述详情,医生,最近一次看医生的日期,详细的病情，治疗，结果";

l['Primary Insured-Do you have a green card? (Y/N)'] = "主申请人 - 你有绿卡吗？(Yes/No)";
l['How would you like to receive your insurance documents?  Email / Regular Mail / Expedited Mail ($25)'] = "选择保险资料的接收方式： Email/平寄/快递（$25)";
l['Spouse-Do you have a green card? (Y/N)'] = " 配偶 - 你有绿卡吗？(Yes/No)";
l['Child 1-Do you have a green card? (Y/N)'] = "子女1 - 你有绿卡吗？(Yes/No)";
l['Child 2-Do you have a green card? (Y/N)'] = "子女2 - 你有绿卡吗？(Yes/No)";
l['Have you or any family member applying for coverage EVER experienced symptoms of, suffered from, sought consultation, examination, testing or been treated for, or been diagnosed with, any problem relating to any of the following: (This language is for the following questions through the question about eyes)'] = " 您或任何申请保险的家庭成员曾经有过下列经历吗(下列所有问题直到有关眼科问题)?  病症, 患病，寻求咨询，检查，测试，诊断，或任何与之相关的问题：";
l['Digestive system, stomach, colon, rectum or intestines, including, but not limited to: esophageal regurgitation, gastritis, ulcers, Crohn’s Disease and/or diverticulitis?(Indicate No or Identify P for Primary, S for Spouse, C1 for child 1, C2 for child 2)'] = "消化系统，胃，结肠，直肠或小肠，包括但不限于：食管返流，胃炎，溃疡，克罗恩病和/或憩室炎？（填写 No 表示没有, P 表示主申请人, S 表示配偶, C1 表示子女1, C2 表示子女2）";
l['Do you want to add any optional riders to your plan?  Please indicate: None / Term Life Insurance / Daily Indemnity / Terrorism / Sports / Dental / Vision / Maternity (Note - Not all optional riders are available on all plans.)'] = "你需要添加下面的可选项吗？请注明： None 表示全部不要 / Term Life Insurance 添加定期人寿保险 / Daily Indemnity 添加住院每日赔偿 / Terrorism 添加恐怖活动造成的受伤 / Sports 添加体育受伤 / Dental 添加牙科保险 / Vision 添加眼科保险 / Maternity 银质金质或金加计划添加产科保险 （注意：不是所有的计划都可以添加这些可选项）";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";
l[''] = "";

l['Primary Insured Family doctor Name'] = "主申请人-家庭医生信息，医生的名字（名字/姓氏），（如果没有，填写“None”）";
l['Primary Insured Family doctor Address'] = "主申请人-家庭医生的地址";
l['Primary Insured Family doctor City'] = "主申请人-家庭医生的城市";
l['Primary Insured Family doctor State/Province (If in US)'] = "主申请人-家庭医生的州/省（如在美国）";
l['Primary Insured Family doctor Zip/Postal Code'] = "主申请人-家庭医生的邮编";
l['Primary Insured Family doctor Country'] = "主申请人-家庭医生的国家";
l['Primary Insured Family doctor Telephone'] = "主申请人-家庭医生的电话";
l['Primary Insured Family doctor Date Last Seen'] = "主申请人-最近一次看医生的日期";
l['Primary Insured Family doctor Reason'] = "主申请人-最近一次看医生的原因";
l['Spouse Family doctor Name'] = "配偶-家庭医生的名字（名字/姓氏），（如果没有，填写“None”）";
l['Spouse Family doctor Address'] = "配偶-家庭医生的地址";
l['Spouse Family doctor City'] = "配偶-家庭医生的城市";
l['Spouse Family doctor State/Province (If in US)'] = "配偶-家庭医生的州/省（如在美国）";
l['Spouse Family doctor Zip/Postal Code'] = "配偶-家庭医生的邮编";
l['Spouse Family doctor Country'] = "配偶-家庭医生的国家";
l['Spouse Family doctor Telephone'] = "配偶-家庭医生的电话";
l['Spouse Family doctor Date Last Seen'] = "配偶-最近一次看医生的日期";
l['Spouse Family doctor Reason'] = "配偶-最近一次看医生的原因";
l['Child 1 Family doctor Name'] = "子女1-家庭医生的名字（名字/姓氏），（如果没有，填写“None”）";
l['Child 1 Family doctor Address'] = "子女1-家庭医生的地址";
l['Child 1 Family doctor City'] = "子女1-家庭医生的城市";
l['Child 1 Family doctor State/Province (If in US)'] = "子女1-家庭医生的州/省（如在美国）";
l['Child 1 Family doctor Zip/Postal Code'] = "子女1-家庭医生的邮编";
l['Child 1 Family doctor Country'] = "子女1-家庭医生的国家";
l['Child 1 Family doctor Telephone'] = "子女1-家庭医生的电话";
l['Child 1 Family doctor Date Last Seen'] = "子女1-最近一次看医生的日期";
l['Child 1 Family doctor Reason'] = "子女1-最近一次看医生的原因";
l['Child 2 Family doctor Name'] = "子女2-家庭医生的名字（名字/姓氏），（如果没有，填写“None”）";
l['Child 2 Family doctor Address'] = "子女2-家庭医生的地址";
l['Child 2 Family doctor City'] = "子女2-家庭医生的城市";
l['Child 2 Family doctor State/Province (If in US)'] = "子女2-家庭医生的州/省（如在美国）";
l['Child 2 Family doctor Zip/Postal Code'] = "子女2-家庭医生的邮编";
l['Child 2 Family doctor Country'] = "子女2-家庭医生的国家";
l['Child 2 Family doctor Telephone'] = "子女2-家庭医生的电话";
l['Child 2 Family doctor Date Last Seen'] = "子女2-最近一次看医生的日期";
l['Child 2 Family doctor Reason'] = "子女2-最近一次看医生的原因";
l['About Us'] = "关于我们";
l['Who is TaiAn Financial LLC, an IMG Endorsed Independent Chinese Sales Center!'] = "泰安国际医疗保险公司，IMG授权的独立的IMG中文销售中心！";
l['International Medical Group (IMG) is a worldwide leader in the International medical insurance business, and TaiAn Financial LLC is an IMG Endorsed Independent Chinese Sales Center.  As an IMG Endorsed Independent Chinese Sales Center, we can provide our customers professional, prompt service and make their insurance experience as easy as possible.'] = "国际医疗集团 (IMG) 是世界领先的国际医疗保险公司，而泰安保险公司是IMG授权的独立的IMG中文销售中心。作为IMG中文销售中心，我们可以为客户提供更加专业快捷的服务。 泰安免费的中文和英语专业服务确保客户的保险体验尽可能完美顺利。";
l['We have more than 27 years of health insurance experience serving the people in the Unites States and globally.'] = "我们有超过27年的医疗保险经验。 我们服务于在美国生活的外国人和世界各地的国际人士以及美国当地居民。";
l['We specialize in service for international scholars, educators and students with both native Chinese speakers and native English speakers.'] = "我们专长服务于以汉语或英语为母语的国际学者，教育者和学生。";
l['We are located in the United States and have extended work hours to serve our customers whenever they need us. Our work hours are 7 days a week, 9:00am-11:00pm Eastern Time.'] = "泰安公司地处美国。 为了客户在需要时能够得到及时的帮助，我们延长的工作时间为每周7天，美国东部时间9:00am-11:00pm。";
l['We have both English and Chinese local phone numbers in the US. We also have China local phone service, by calling this number our customers in China don\'t pay long distance charges. We communicate with our customers through  WeChat and Skype as well.'] = "在美国我们有本地的英语电话线和中文电话线。 在中国我们也有中国本地电话，客户在中国直接拨打此电话不支付长途费用。我们还可以与客户通过微信和Skype交流。";
l['We have a highly experienced IT team to keep our website up-to-date to make sure our customers get the most updated information. For example, we check our webpage'] = "我们有一支经验丰富的IT团队使我们的网站实时更新以确保我们的客户得到最新的信息。例如，我们每周或随时得到学校政策有变时都会检查我们的网页:";
l[' every week or whenever our customers tell us their school requirements changed. This webpage is very popular because it provides requirements for all schools for F and J visa, and identifies the insurance plan that is best for each schools international scholars and students.'] = "这个网页非常受欢迎，因为它提供了全美各校F和J签证保险的标准，并为各校的学者，教育者和学生们推荐最适合他们的保险计划。";
l['Partnering with TaiAn Financial'] = "与泰安保险合作";
l['Universities, Colleges, Institutes and other schools'] = "大学，学院，研究所和其他学校";
l['If your school is sending students or teachers abroad, or has students or teachers visiting we would make a good partner.'] = "如果您的学校需要派送教师或学生出国工作学习或访问，我们都有机会建立良好的合作关系。";
l['Confucius Teachers and Volunteers'] = "孔院汉语教师志愿者";
l['The Confucius Institutes\' rapid development has provided the opportunity for people all over the world to learn about Chinese language and culture. They are both a platform for cultural exchange between China and the world, and a bridge reinforcing friendship and cooperation between China and the rest of the world.'] = "快速发展的孔子学院已经成为世界各国人民学习汉语了解中华文化的园地和中外文化交流的平台，同时也成为加强中国人民与世界各国人民友谊合作的桥梁。";
l['Confucius Institute volunteer teachers come to the US with J1 visas. Their exchange program requires them to have health insurance that meets the US Department of State (USDOS) requirements for the duration of their stay. Taian International Health Insurance provides insurance for J1 educators and their dependents. Taian Insurance Plan B with $50,000 benefit per illness or injury is the most affordable plan that meets the USDOS requirements.  Many Confucius teachers choose Plan B with $250,000 or $500,000 of benefits to get the best coverage within the limit of what the Confucius institute will reimburse them for.  Taian Insurance Plan A also meets the requirements and offers affordable coverage with maternity benefits.  Plan A and Plan B are also good for Confucius teachers anywhere around the world, not just in the US.'] = "孔院汉语教师志愿者持J1签证来到美国。 他们的中美交流计划要求他们在美期间具有符合美国国务院要求的医疗保险。 泰安国际医疗保险公司为持有J签证的孔院汉语教师志愿者及他们的家属提供满足国务院标准的保险。  泰安保险计划B里的$50,000每次疾病或损伤是满足国务院标准的最经济实惠的保险计划，许多孔院教师志愿者选择$250,000和$500,000以得到最佳的保险赔付并且不超过政府补贴。 泰安保险计划A也满足国务院标准，并且含有产科保险。 泰安保险计划A和B适合世界各地孔子学院的汉语教师和志愿者。";
l['The USDOS requires:'] = "美国国务院J签证医疗保险的标准";
l['Medical benefits of at least $50,000 per accident or illness'] = "每次生病或受伤的最高赔付至少为$50,000";
l['Repatriation of remains in the amount of $7,500'] = " 遗体返送$7,500";
l['Expenses associated with the medical evacuation of the exchange visitor to his or her home country in the amount of $10,000'] = " 紧急救护$10,000";
l['A deductible not to exceed $500 per accident or illness.'] = " 每次生病或受伤的免赔额不超过$500";
l['TaiAn Insurance for Educators'] = "泰安J1教育者保险";
l['Designed specifically for international scholars，educators，students and their families (US visa J1/J2, F1/F2). Purchase monthly increments (from 1 to 12 months), renewable up to 5 years if initial purchase is 3 months or more.'] = "计划专为持J签证和F签证的学者，教育者，学生和家属而设计。按整月购买（1至12个月），首次购买3个月以上者可以续保至5年。";
l['Designed specifically for international scholars，educators，students and their families (US visa J1/J2, F1/F2). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.'] = "计划专为持J签证和F签证的学者，教育者，学生和家属而设计。按整月购买（1至12个月），可以续保至4年。";
l['TaiAn International Health Insurance for Confucius Institutes'] = "美国泰安国际医疗保险 - 孔子学院";

l['J1 insurance requirement'] = "J1保险标准";




l['Teachers'] = "教师";
l['Whether you are traveling abroad with your students, have foreign students coming to the US to your class, or are sending US students abroad we have solutions for you.'] = "无论是您的学生需要出国旅游学习还是外国学生来美国读书，我们都可以为他们提供适合的保险计划。";
l['Schools'] = "学校";

l['Who should consider collaborating with TaiAn Financial?'] = "合作对象";
l['Travel Agents'] = "旅行社";
l['Students'] = "学生";
l['Anyone with International Ties'] = "有国际关系的任何人";
l['Pairing travel services with travel and health insurance can be mutually beneficial.'] = "旅游服务和旅游健康保险服务的合作是完全可以互惠互利的。";
l['Help your peers find the insurance they need as they travel abroad for university or vacation.'] = "帮助您的同学，为他们出国旅游度假或留学选择合适的健康保险。";
l['Bring an understanding of travel and health insurance to your own international community.'] = "把旅游医疗保险的意识带到你的国际社会中。";
l['What\'s involved in a partnership?'] = "如何合作";
l['We work closely with our partners to design a custom solution that is mutually beneficial.'] = "我们与我们的合作伙伴紧密配合，根据各自的特点设计合作方案，确保合作互惠互利。";
l['Collaborating can be as simple as providing you with a way to easily refer potential customers.'] = "合作可以是很简单，您只需要为我们推荐客户。";
l['In more complex partnerships, we can work together to provide the best solution using the technologies at our disposal.'] = "在更复杂一些的合作中，我们可以携手合作，采用现有的技术措施设计最佳合作方案。";
l['We have native English and Chinese professionals who create a unique advantage enabling us to help Chinese visitors to the United States and American visitors to China.'] = "我们有英语为母语和中文为母语的专业人士联合创造的独特的企业优势，使我们能够为中国人和美国人出国时提供最好的保险服务。";
l['Why work with TaiAn Financial?'] = "为什么与泰安合作？";
l['We are available for your customers and friends before and after they purchase the insurance they need.'] = "我们可为您的客户和朋友提供优质的售前服务和售后服务。";
l['We work with only the most financially secure insurers with top quality ratings from A.M. Best and Standard and Poor\'s.'] = "我们只与美国最优质的保险公司合作，他们在A.M.Best 和Standard and Poor\'s的评分中都是最优。";
l['We are accustomed to working with people in the United States and China via email, phone, WeChat, and Skype.'] = "我们在中美两国之间的通讯联络方式多种多样，包括电子邮件，电话，微信，QQ和Skype。";
l['Our website is accessible around the world, including mainland China.'] = "我们的网站在世界各地都能点击进入，包括中国内地。";
l['Want to know more? Contact us:'] = "想了解更多吗？请与我们联系：";
l['Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English)'] = "美国电话(美东时间9am-10pm, 包括周末): +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)";
l['Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges)'] = "中国电话: 950-4044-2336 (中文, 北京时间上午7-11点, 直接拨打，无长途费)";
l['Call: +1 (317) 318-8259 (English)'] = "电话：+1（317）318-8259（英语）";
l['Call: 1-317-318-8259 (English)'] = "电话：1-317-318-8259(美国，英语）";
l['WeChat ID: wxid_taian_usa'] = "微信： wxid_taian_usa";
l['Skype: chris.lee136'] = "Skype: chris.lee136";
l['Email: chris@taianfinancial.com, taianfinancialllc@gmail.com'] = "电子邮件：chris@taianfinancial.com, taianfinancialllc@gmail.com";
l['Call from US - 9:00AM to 10:00PM Eastern time - Includes weekend: +1 (317)318-8258 (Chinese), +1 (317)318-8259 (English).  Call from China: 950-4044-2336 (Chinese, Beijing time 7-11am, no long distance charges). Email: <a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>'] = "美国电话(美东时间9am-10pm, 包括周末): +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)。 中国电话: 950-4044-2336 (中文, 北京时间上午7-11点, 直接拨打, 无长途费)。 电子邮件：<a href=\"mailto:chris@taianfinancial.com\">chris@taianfinancial.com</a>, <a href=\"mailto:taianfinancialllc@gmail.com\">taianfinancialllc@gmail.com</a>";
l['TaiAn Financial'] = "美国泰安国际医疗保险";
l['Student Representatives and Travel Agents contact us for collaboration opportunities'] = "学生代表和旅行社请联系我们商讨合作";
l['WeChat ID: wxid_taian_usa'] = "微信: wxid_taian_usa";
l['Dependents can only purchase when the student purchases'] = "F2/J2 不能单独购买，只能与F1/J1一起购买。";
l['URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization'] = "受伤急诊或住院的生病急诊: URC；未住院的生病急诊: $250附加免赔额";
l['Home'] = "首页";
l['More details on Global medical:'] = "全球医疗保险的更多信息";
l['Great new look - same TaiAn Financial'] = "泰安的新面貌，希望你依然喜欢";
l['International Student'] = "留学生和访问学者";
l['Global Medical'] = "全球医疗保险";
l['Travel Insurance'] = "国际旅游医疗保险";
l['Indiana Residents'] = "印城居民保险";
l['Texas Residents'] = "德州居民保险";
l['Life Insurance'] = "人寿保险和养老金";
l['Annotated Application'] = "中文填表指南";
l['We are qualified insurance agents with over 20 years experience working with insurance companies.'] = "我们是有 20 多年经验的保险代理， 为您选择优质实惠的保险。";
l['We have native English and Chinese speakers to answer all of your questions.'] = "根据您的需要, 用中文或英文为您解答问题。";
l['Ask us about student coverage that meets your university insurance standards.'] = "请咨询我们有关留学生(访问学者)保险, 确保符合您所在大学的标准。";
l['International Student & Scholar (F1&J1 visa). Coverage meets most university standards. $48.62/month with $5,000,000 Benefit'] = "国际学生和访问学者（F签证和J签证）保险 - 符合大多数学校的标准, 更好的计划, 更少的保费。月费$48可获最高赔付$5,000,000 ";
l['Global Medical - Global insurance designed for non-US citizens to use worldwide, and US citizens to use outside of the United States.'] = "全球医疗保险 - 适用于中国人或其他非美国公民在中国和世界其他各国，美国公民在美国境外使用";
l['Traveler\'s insurance: Business travel, family visiting, leisure travel. 5 days - 2 years.  Prices start at about $1/day'] = "国际旅游医疗保险 - 旅游观光和探亲，商务访问，学术交流。保期5天至2年, 每天$1起 ";
l['Contact us to ensure a plan meets your requirements.'] = "请咨询我们以确保你的保险符合学校要求";
l['Arizona State University (AZ)'] = "";
l['Click to View'] = "点击查看";
l['Click to View '] = "点击查看";
l['School'] = "学校";
l['F1 Visa'] = "F1签证";
l['J1 Visa'] = "J1签证";
l['Taian International Health Insurance provides International Scholar and Student Insurance for US visa holders (F1 visa, J1 visa, OPT, and M1 visa) and their dependents. Taian Insurance Plan A and Plan B meet many schools\' student insurance standards and almost every schools\' J1 scholar insurance standards and are more affordable than most school plans. All J visa holders are required to meet the  US Department of State (USDOS) requirements and their school requirements for the duration of their visa. Plan B with $50,000 benefit per illness or injury (Standard Plan) is the most affordable plan that meets the USDOS requirements. Most schools requirements for J1 scholars are the same as the USDOS, however some schools have higher requirements. Please click the links below to see your school requirements and US Department of State requirements.'] = "美国泰安公司为F1, J1，M1 签证的学生和OPT学生以及他们的家属提供留学生和访问学者医疗保险。保险计划A和B符合几乎所有学校J签证的标准，也符合许多学校F签证的标准，并且比学校保险更加经济实惠。 所有J签证持有人的保险既需要符合学校标准还需要符合美国国务院的标准，并且保期需要覆盖整个访问期间。 计划B里的每次生病或受伤$50,000最高赔付(标准计划)是符合国务院标准的最经济实惠的保险计划。大多数学校对J1访问学者保险的要求与国务院的一样，但有些学校有更高的要求。请点击下面的链接，查看你校的F签证和J签证医疗保险的标准和国务院J签证医疗保险的标准。";
l['Check your school waiver requirements.'] = "点击查看waive学校保险的要求";
l['F2/J2 can buy Patriot Exchange alone (if F1/J1 buys schools plan) or buy with F1/J1'] = "如果F1/J1在其学校购买了保险，F2/J2就可以单独购买计划 B, 否则F2/J2需要与F1/J1一起购买计划 B";
l['Patriot Travel'] = "爱国者旅行医疗保险";
l['Our highlighted plans:'] = "计划的突出优势";
l['Cost Per Month (Non-US Citizens)'] = "月费（非美国公民）";
l['Plan A (Student Health Advantage)'] = "计划 A (Student Health Advantage)";
l['Plan B (Standard) (Patriot Exchange Program)'] = "计划 B (Patriot Exchange Program)";
l['Age'] = "年龄";
l['F1/J1'] = "";
l['Spouse'] = "配偶";
l['Children'] = "子女";
l['and'] = "和";
l['&lt; 19'] = "小于 19";
l['&lt; 25'] = "小于 25";
l['Buy Plan A'] = "购买计划 A";
l['Buy Plan B'] = "购买计划 B";
l['Buy Plan C'] = "购买计划 C";
l['More plan details:'] = "计划的更多信息";
l['Student Health Advantage more benefits'] = "计划A的更多的利益";
l['Student Health Advantage'] = "";
l['Patriot Exchange Program - Standard'] = "";
l['TaiAn International Students'] = "泰安学生保险";
l['Plan Type'] = "计划类型";
l['Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 5 years if initial purchase is 3 months or more.'] = "计划专为F1，F2，J1，J2和OPT学生学者而设计。按整月购买（1至12个月），首次购买3个月以上者可以续保至5年。";
l['Designed specifically for international scholars and students (F1,F2,J1,J2,OPT). Purchase monthly increments (from 1 to 12 months), renewable up to 4 years.'] = "计划专为F1，F2，J1，J2和OPT学生学者而设计。按整月购买（1至12个月），可以续保至4年。";
l['Maximum Limit'] = "最高赔付";
l['$500,000 lifetime maximum, $300,000 per illness/injury'] = "$500,000 终身最高赔付, $300,000/疾病或受伤";
l['$50,000 per illness/injury'] = "$50,000/疾病或受伤";
l['$250,000 per illness/injury'] = "$250,000/疾病或受伤";
l['$500,000 per illness/injury'] = "$500,000/疾病或受伤";

l['Deductible'] = "免赔额";
l['$100 per illness/injury, $5 co-pay per visit in Student Health Center.'] = "$100/疾病或受伤, $5 co-pay 就诊学生医疗中心 ";
l['Coinsurance'] = "共同保险";
l['No coinsurance in PPO'] = "在指定医疗网络就医，无个人赔付比例";
l['No coinsurance in PPO or out of PPO'] = "无个人赔付比例, 没有网络内外之分";
l['Hospital Room & Board'] = "住院";
l['Average semi-private room'] = "保证普通病房费用";
l['Intensive Care'] = "重症监护津贴";
l['URC(Usual Reasonable and Customary)'] = "URC(通常合理的惯例的费用)";
l['Maternity'] = "产科保险 ";
l['URC'] = "";
l['N/A'] = "N/A (不包括)";
l['Mental Health'] = "心理健康";
l['In-patient URC to $10,000, out-patient $50/day to $500'] = "住院URC至$10,000, 门诊$50/天至 $500";
l['Prescription Drugs'] = "处方药";
l['In-patient URC, out-patient 50%'] = "住院URC, 门诊50%";
l['Accident Dental'] = "意外牙科";
l['Injury $500, Sudden pain $350'] = "受伤$500, 突痛$350";
l['Accidental Death & Loss of Limb'] = "意外伤残";
l['$25,000'] = "";
l['Medical Evacuation'] = "紧急救援";
l['$500,000'] = "";
l['$50,000'] = "";
l['Repatriation of remains'] = "身故遗体送返";
l['Pre-existing conditions'] = "先前的疾病";
l['After 12 months of continuous coverage'] = "免责期12个月";
l['More on Patriot Exchange'] = "计划B(Patriot Exchange)的更多信息";
l['Patriot Exchange Group plan available for groups of 2 or more primary applicants'] = "两个或两个以上的主申请人购买团体保险享受10%的优惠";
l['Patriot Exchange Basic Plan available at a lower cost (may not meet your visa requirements - ask us!)'] = "Patriot Exchange Basic Plan 价格更低， 但可能不符合你的鉴证要求 - 请咨询我们！";
l['Other available options include: travel protection for baggage and valuables, legal assistance, personal liability coverage, adventure sports coverage'] = "其他选项包括：行李和贵重物品丢失，法律援助，个人责任保险，冒险体育保险";
l['Full Brochures'] = "完全手册";
l['Patriot Exchange Brochure'] = "计划B(Patriot Exchange)完全手册";
l['Patriot Exchange Group Brochure'] = "团体计划B(Patriot Group Exchange)完全手册";
l['Apply Now'] = "在线申请";
l['Buy Plan B (Patriot Exchange Program)'] = "购买计划B (Patriot Exchange Program)";
l['Buy Plan B Group (Patriot Exchange Group)'] = "购买团体计划B(Patriot Group Exchange)";
l['Other plans that cover more visa types:'] = "其他签证的保险计划";
l['Insurance policy is underwritten by a health insurance company that is \'A\' rated by A.M.Best'] = "保险公司由A.M.Best评级为\"A\"";
l['Cost Per Month'] = "月费";
l['Global Medical Insurance'] = "全球医疗保险";
l['Flexible, comprehensive medical coverage'] = "灵活全面的医疗保险";
l['Coverage for individuals and families'] = "适合个人和家庭";
l['Four unique plan designs - Silver, Gold, Gold Plus and Platinum'] = "四种不同的计划供您选择 - 银质，金质，金加和铂金";
l['Rates illustrated above are for annual premium, rates are higher for monthly payment'] = "以上是按年交费的保费，按月交费的保费会稍贵一些";
l['Optional riders: Global Term Life Insurance, Global Daily Indemnity, Maternity, Terrorism, Sports'] = "自由选项: 定期人寿保险, 每天补偿金, 产科病房, 恐怖袭击, 运动损伤";
l['Choose your area of coverage (worldwide or worldwide excluding the U.S., Canada, China, Hong Kong, Macau, Taiwan, Singapore and Japan)'] = "选择您的地区: 全球或全球除美国,加拿大,中国,中国香港,澳门,台湾,日本,新加坡之外";
l['Which Plan is best for you?'] = "哪一款计划最适合你？";
l['Silver plan is most economical'] = "银质计划最经济实惠";
l['Gold Plan is the best value'] = "金质计划具有最佳价值";
l['Platinum is best for those wanting the best coverage or considering having a baby.  Maternity related claims with dates of service before 10 months are not covered.'] = "铂金计划是最全面的计划，包括生育保险和新生儿护理。 但购买保险后十个月之内的与生育有关的费用不在理赔范围之内。";
l['Select from multiple deductible options'] = "多种免赔额选择";
l['Family premium covers first two children between 14 days and 9 years at no additional cost for the first year'] = "家庭保险免除二个14 天 -9 岁孩子第一年的保费";
l['Choose from several payment modes'] = "多种保费缴纳方式";
l['Multiple underwriting options to fit your needs'] = "多种承保方案，以满足您的需求";
l['Freedom to seek treatment with hospital or doctor of your choice'] = "自由选择您所需要的医院或医生";
l['Access to two extensive provider networks'] = "两种广泛使用的PPO Network";
l['Emergency Medical Evacuation and other evacuation benefits'] = "紧急医疗救援";
l['Medical Concierge Program'] = "保险覆盖咨询服务";
l['Medical professionals to coordinate your care'] = "医疗专业人员协调会诊";
l['24 hour access to information'] = "24 小时的访问和管理帐户信息";
l['Coverage for individuals or families living or working abroad'] = "适合在国外生活和工作的个人和家庭";
l['Contract employees living and working abroad'] = "在国外生活和工作的合约雇员";
l['Seniors with dual residencies six months or longer outside the U.S.'] = "在美国国外生活6个月或更长的双驻老年人";
l['Non-US citizens coming to the US to have a baby. For maternity coverage you must purchase before becoming pregnant.  Maternity related claims with dates of service before 10 months are not covered.'] = "非美国公民赴美生子， 产科保险必须在怀孕之前购买， 购买保险后十个月之内的与生育有关的费用不在理赔范围之内。 详见完全手册。";
l['Buy Global Medical Insurance'] = "购买全球医疗保险";
l['Buy Global Medical (Gold Plan)'] = "购买全球医疗保险（金质计划）";
l['In-PPO: deductible 50% waived (up to $2500). No coinsurance.<br />Non-PPO: 20% of next $5000 expenses after deductible'] = "在指定医疗网络就医，免赔额减半（至$2500)，无个人赔付比例<br />在非指定医疗网络就医，免赔额后，自付20%共同保险至$1000";
l['In-PPO: deductible 50% waived (up to $2500). No coinsurance<br />Non-PPO: 10% of next $5000 expenses after deductible'] = "在指定医疗网络就医，免赔额减半（至$2500)，无个人赔付比例<br />在非指定医疗网络就医，免赔额后，自付10%共同保险至$500";
l['$10,000 per year - $50,000 max, after 12 month of coverage'] = "$10,000/期，最高$50,000, 免责期12个月";
l['Available up to age 74'] = "适合于年龄0-74岁";
l['Plan'] = "计划";
l['Plan Highlights'] = "计划的突出优势";
l['Who the plan is designed for'] = "哪些人适合该保险";
l['Patriot Travel Medical Insurance'] = "爱国者旅游医疗保险";
l['Coverage for individuals and dependents'] = "为个人和家属提供保险";
l['Two plan designs - one for U.S. citizens and one for non-U.S. citizens traveling outside their home country'] = "两种计划分别为美国公民和非美国公民在本国境外旅游而设计";
l['Available in daily and monthly rates'] = "按日或月购买保险";
l['Renewable up to 24 months if 1 month or more is purchased'] = " 购买一个月或一个月以上，可以续保至两年。";
l['Freedom to seek treatment with hospital or doctor of your choice'] = "自由选择您所需要的医院或医生";
l['Trip cancellation, travel delay and baggage delay benefits available'] = "提供取消行程，旅行延误及行李延误的附加保险";
l['Universal Rx pharmacy discount savings'] = "处方药的折扣节省";
l['24 hour secure access from anywhere in the world to manage your account at any time'] = "随时随地在世界各地访问和管理您的帐户";
l['Groups of 5 or more can purchase Patriot Travel Group offering at a lower price'] = "5人以上可以享受团体优惠。 该计划申请简单,不需要体检";
l['Graduating seniors trips'] = "即将毕业的大学生出国旅游";
l['Senior citizens age 65+ with or without Medicare traveling abroad'] = " 无论有或没有医疗保险的65 岁以上的老人出国旅游";
l['College students studying abroad'] = "在美国留学的国际学生,交换学生,到国外留学的美国学生";
l['Foreign au pairs and nannies'] = "外国保姆和女工";
l['Families sponsoring exchange students'] = "家庭出资的交换学生";
l['International vacationers'] = "国际度假";
l['Individual or group missionaries'] = "个人或团体的传教士";
l['Relatives visiting from overseas'] = "海外探亲访友";
l['Recently arrived immigrants'] = "新移民";
l['Full Brochure'] = "完全手册";
l['Buy Patriot Travel Medical Insurance'] = "购买爱国者旅游医疗保险";
l['You have enough to worry about when you\'re traveling. Don\'t let your medical coverage be an uncertainty. Patriot International® provides coverage for U.S. citizens traveling outside the U.S. with coverage for brief returns to the U.S., while Patriot America® provides coverage for non-U.S. citizens traveling outside their home country. Both plans are available for a minimum of 5 days up to a maximum of two years.'] = "当你出游时，不要让您的医疗保险成为另一个不确定因素。爱国者国际旅游保险提供美国公民在美国以外的旅游以及简短的返回美国的保险。而爱国者美国旅游保险提供非美国公民在国外旅游的保险。这两个计划保期灵活，少至5天，多到两年。";
l['The international medical plans offer excellent benefits and services to meet your global needs. You have access to international, multilingual customer service centers, claims administrators who process claims from all over the world, handling virtually every language and currency, and 24 hour access to highly qualified coordinators of emergency medical services and international treatment. You can also choose from a wide range of deductibles, several Maximum Limits, and you have access to more than 17,000 providers through the International Provider AccessSM (IPA) when seeking treatment outside the U.S.  You can also reduce your out-of-pocket costs when seeking treatment in the U.S. by locating providers through the independent Preferred Provider Organization.'] = "国际医疗保险计划提供良好的福利和服务，以满足您全球旅游的需求。要求索赔时你可以到国际化多语种的客户服务中心享受世界各地的索赔管理员的24小时服务。他们可以用每一种语言和货币, 高素质地处理紧急医疗和协调国际治疗。您可以选择不同的免赔额和最高赔付限额。在美国以外寻求治疗时, 通过国际Provider Access （IPA），您有17,000多个医生可以选择。在美国寻求治疗时，通过独立的首选医疗组织您还可以减少费用。 ";
l['Routine Nursery Care: $750 maximum per period of coverage'] = "新生儿护理： $750/期";
l['Emergency Room: Injury: URC; Illness resulting in hospitalization: URC; Illness without hospitalization: Subject to addtional $250 deductible'] = "急诊室： 受伤 URC； 急诊入院 URC; 门诊急诊 $250 免赔额";
l['Physical Therapy: URC -limit once per day'] = "理疗： URC - 限于1次/天";
l['Local Ambulance: Per injury up to $350, Per illness only if admitted in-patient up to $350'] = "救护车： $350/受伤； 入院急诊救护车每次最高$350";
l['Dental: Injury due to covered accident $500; Sudden & unexpected pain $350'] = "意外牙科： 受伤$500; 突痛$350";
l['Intercollegiate/Interscholastic/intramural or club sports: $5,000 per injury/illness medical expenses only'] = "校际/校内/运动俱乐部： $5,000医疗费用/受伤或疾病";
l['Incidental home country coverage: up to cumulative two weeks'] = "回国： 保险2个星期";
l['Terrorism coverage: up to 50,000 lifetime maximum'] = "恐怖伤害： 最高$50,000 ";
l['Dependent Child'] = "未成年子女";
l['Buy Student Health Advantage'] = "购买计划 A (Student Health Advantage)";
l['Explore other choices on your own.'] = " 自己查看更多的计划";
l['Email us: chris@taianfinancial.com, taianfinancialllc@gmail.com'] = "电邮： chris@taianfinancial.com, taianfinancialllc@gmail.com";
l['Don\'t see what you need?'] = "没找到你所需要的吗";
l['Call us at 317-318-8258 (Chinese)'] = "电话 317-318-8258 (中文)";
l['Call us at 317-318-8259 (English)'] = "电话 317-318-8259 (英语)";
l['We have plans to meet many diverse needs:'] = "我们还有更多的计划";
l['Adventure Travel'] = "探险旅游";
l['Multi trip travel medical insurance'] = "多行程的旅行医疗保险";
l['Student coverage for non us citizens with a visa'] = "非美国公民签证的学生保险";
l['Student coverage for US citizens abroad'] = "美国公民学生出国学习";
l['Coverage for professionals living outside their home country'] = "专业人士出国工作和生活";
l['Travel insurance plans for groups traveling together'] = "团体旅游";
l['More – Just ask!'] = "更多，更多... - 请咨询我们";
l['Global insurance designed for non-US citizens to use worldwide, and US citizens to use outside of the United States.'] = "全球医疗保险适合中国人或其他非美国公民在中国和世界其他任何国家使用，也适合美国公民在美国境外使用。";
l['A good choice for a baby born in the US and living outside the US.'] = "是外籍宝宝（美国宝宝）在中国长期生活的医疗保险的最佳选择。";
l['Annually renewable comprehensive worldwide medical coverage for non-US nationals worldwide or US citizen working abroad'] = "适合世界各地的非美国公民在本国或国外旅游， 探亲，访问，工作和生活, 也适合美国公民(美国宝宝）在美国境外长期生活。 含医疗，意外和海外救助";
l['Deductible options from $100 to $10,000.'] = "免赔额选项从$100 至$10,000";
l['Maximum policy benefits from $5,000,000 to $8,000,000'] = "最高赔付限额从$5,000,000 至$8,000,000";
l['Hospitalization / room & board covers average semi-private room rate.'] = "住院津贴保证普通病房或高级病房费用";
l['Up to $50,000 medical evacuation'] = "紧急医疗救援$50,000";
l['Up to $5,000-50,000 repatriation of remains to home country.'] = "身故遗体送返$5,000-50,000";
l['Our highlighted example plans:'] = "范例";
l['Global Medical (Silver Plan) $250 deductible'] = "银质计划 - 免赔额$250范例";
l['Global Medical (Gold Plan and Gold Plus Plan) $500 deductible (See Notes below)'] = "金质计划和金加计划 - 免赔额$500范例（见下面的注释）";

l['Global Medical (Platinum Plan) $1000 deductible'] = "铂金计划 - 免赔额$1000范例";
l['Male'] = "男";
l['Female'] = "女";
l['Complete Brochure'] = "完全手册";
l['Buy Global Medical (Silver Plan)'] = "购买全球医疗保险(银质计划)";
l['Buy Global Medical (Platinum Plan)'] = "购买全球医疗保险(铂金计划)";
l['TaiAn Global Medical'] = "泰安全球医疗保险";
l['Annual Deductible'] = "年度免赔额";
l['Family Deductible'] = "家庭免赔额";
l['3 times the individual'] = "三倍于个人免赔额";
l['2 times the individual'] = "两倍于个人免赔额";
l['Lifetime Max limit'] = "最高赔付限额";
l['$5,000,000 per individual'] = "每人$5,000,000";
l['$8,000,000 per individual'] = "每人$8,000,000";
l['Treatment inside the U.S.'] = "美国境内就医";
l['Treatment outside the U.S.'] = "美国境外就医";
l['Subject to deductible. No coinsurance'] = "付免赔额，无个人赔付比例";
l['Intensive care unit'] = "重症监护";
l['$1,500/day, 180 day /event'] = "$1,500/天, 180天/次";
l['Hospitalization/room & board'] = "住院";
l['In U.S. average semi-private room rate. Outside of U.S. URC of private room rate (not exceed 150% semi-private). All subject to $600/day, 240 day max'] = "美国境内保证普通病房费用，美国境外高级病房（费用不超过普通病房的150%）。$600/天，最多240天";
l['In U.S. average semi-private room rate. Outside of U.S. URC of private room rate (not exceed 150% semi-private).'] = "美国境内保证普通病房费用，美国境外高级病房（费用不超过普通病房的150%）。";
l['Private room rate'] = "高级病房";
l['Local Ambulance'] = "救护车";
l['Up to Maximum for injury resulting in needed emergency care, or illness resulting in overnight hospital stay. Otherwise not covered.'] = "受伤急诊或住院的生病急诊使用救护车，赔付至最高赔付限额。 否则不在理赔范围内。";
l['$1500/event - not subject to deductible or coinsurance'] = "$1500/次。无免赔额，无个人赔付比例";
l['Child Wellness (under 18 y/o)'] = "儿童保健(18岁以下)";
l['3 visit/period, $70 max/period. Available after 12 months of coverage'] = "3次/期, $70/期. 免责期12个月";
l['$200/period, not subject to deductible or coinsurance. Available after 12 months of coverage'] = "$200/期, 无免赔额，无个人赔付比例。 免责期12个月。";
l['$400/period, not subject to deductible or coinsurance. Available after 6 months of coverage'] = "$400/期, 无免赔额，无个人赔付比例。 免责期6个月。";
l['Adult Wellness'] = "成人保健";
l['NA'] = "不包括";
l['$250/period, not subject to deductible or coinsurance.  Available for those at least 30 years old after 12 months of coverage'] = "30岁以上，$250/期。 无免赔额，无个人赔付比例。 免责期12个月";
l['$500/period, not subject to deductible or coinsurance. Available for those at least 18 years old after 6 months of coverage'] = "$500/期。无免赔额，无个人赔付比例。 免责期6个月";
l['Emergency Dental (accident)'] = "急诊牙科";
l['$1,000/period'] = "$1,000/期";
l['Non-emergency Dental'] = "非急诊牙科";
l['$750/year'] = "$750/年";
l['Vision'] = "眼科";
l['Exams-up to $100. Materials-up to $150 per 24 months'] = "检查$100，材料$150/24月";
l['Surgery'] = "手术";
l['Emergency Evacuation'] = "紧急救援";
l['$50,000 per period, not subject to deductible or coinsurance'] = "$50,000/期, 无免赔额，无个人赔付比例";
l['Up to the maximum limit, not subject to deductible or coinsurance'] = "至最高赔付，无免赔额，无个人赔付比例";
l['$25,000 per insured, not subject to deductible or coinsurance'] = "$25,000/人，无免赔额，无个人赔付比例";
l['$50,000 per insured, not subject to deductible or coinsurance'] = "$50,000/人，无免赔额，无个人赔付比例";
l['Mental/Nervous'] = "精神健康";
l['Out-patient only, after 12 month of coverage'] = "仅保门诊，免责期12个月";
l['$50,000 max, after 12 month of coverage'] = "$50,000，免责期12个月";
l['May have limited coverage after 24 months or be excluded at time of underwriting'] = "24个月以后有限的保项。 申请时可能被归为不保项，否则视同一般的疾病。";
l['May be covered same as any illness or excluded at time of underwriting'] = "如果申请时没被拒绝视同一般的疾病";
l['Optional Rider (cost $4000 per year) - Maternity is covered same as any illness for any maternity related claim with a service date that occurs after 12 months of coverage. - $50,000 lifetime max. Max of $5000 for normal delivery, $7500 for C-section. $200 child wellness for first 12 month. new born care & congenital disorders max of $250,000 for the first 31 days (benefits reduced by 50% for births that occur in the 11th or 12th month of coverage).  Maternity related claims with dates of service before 10 months are not covered.'] = "选加项(每年$4000): 购买保险十二个月之后的与生育有关的费用如同普通疾病，都在理赔范围之内。 - $50,000 最高赔付。自然生产最高$5000，破腹产$7500。 婴儿第一年健康检查$200。第一个月的新生儿护理和先天性疾病最高$250,000(如果新生儿在买保险后的第十一个月或第十二个月出生，赔付减少50%)。 购买保险后十个月之内的与生育有关的费用不在理赔范围之内。";
l['Maternity is covered same as any illness for any maternity related claim with a service date that occurs after 10 months of coverage - $1000 additional deductible, $50,000 lifetime max. $200 child wellness for the first 12 months. new born care & congenital disorders max of $250,000 for the first 31 days. Maternity related claims with dates of service before 10 months are not covered.'] = "购买保险十个月之后的与生育有关的费用如同普通疾病，都在理赔范围之内。 - $1000 附加免赔额，$50,000 最高赔付。婴儿第一年保健$200。第一个月的新生儿护理和先天性疾病最高$250,000。 购买保险后十个月之内的与生育有关的费用不在理赔范围之内。";
l['Monthly Rate'] = "月费";
l['Brochure'] = "手册";
l['Dependent child - see notes below'] = "子女 - 见下面注释";
l['Adult'] = "成人";
l['14 days - 9'] = "14天 - 9岁";
l['More about Child/Children Rates'] = "子女价格注释";
l['Up to 2 dependent children 14 days to 9 years old are no charge for first year of coverage with two parents covered.'] = " 两个父母带子女购买, 免除二个14 天 - 9 岁子女第一年的保费。";
l['One parent with dependent children 14 days to 9 years old use these rates (per child):  Silver  - $26, Gold - $31, Gold Plus - $41, Platinum - $125.'] = "一个父母带一个或多个14 天 - 9 岁子女购买, 每个子女的月费如下: 银质计划 - $26, 金质计划 - $31, 金加计划 - $41, 铂金计划 - $125";
l['Dependent child/children rates (ages 10- 18) are only available when one or two parents are covered. See chart for the rates.  The rates are per child.'] = "一个或两个父母带一个或多个10 - 18 岁子女购买, 每个子女的月费见价格表.";
l['Children alone (14 days to 18 years old) use the single male 19 year old rate.'] = "14 天 - 18 岁孩子单独购买, 保险价格如同19岁男性";
l['Optional Rider'] = "自由选项";
l['Gold Plus Plan is better for those planning to keep the policy over three years.'] = "如果您需要三年以上的保险，金加计划是更好选择。";
l['Benefits for Gold Plan and Gold Plus Plan are the same for the first three years.'] = "第一个三年内金质计划和金加计划的保险利益相同。";

l['Gold Plan benefits are reduced after three years. Reduced benefits include: hospital room and board reimbursement rate, Intensive care reimbursement rate, physician charges, anesthetist and more.'] = "三年以后金质计划的保险利益会降低。降低的保险利益包括住院的理赔限额，重症监护的理赔限额，医生的费用，麻醉师的费用等。";
l['GOLD PLAN '] = "金质计划";
l['GOLD PLUS PLAN '] = "金加计划";
l['More about Gold Plan and Gold Plus Plan'] = "金质和金加计划注释";
l['Buy Global Medical (Gold and Gold Plus)'] = "购买全球医疗保险（金质和金加计划）";
l[''] = "";
l[''] = "";
l[''] = "";

l['URC(Usual Reasonable and Customary)'] = "URC(通常合理的惯例的费用)";
l['Optional riders: Global Term Life Insurance, Global Daily Indemnity, Maternity, Terrorism, Sports, Dental, Vision'] = "自由选项: 定期人寿保险, 住院每日赔偿, 产科保险, 恐怖袭击, 运动受伤, 牙科保险, 眼科保险";
l['Taian Travel Insurance is designed for anyone (U.S. and non-U.S. citizens) traveling out of their home country, regardless of visa requirements. Cost starts at about $1/day. Purchase 5 days - 1 year, and renewable up to 2 years if 1 month or more is purchased initially. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter).  You can use the confirmation letter as proof of your insurance.'] = "美国泰安公司提供的国际旅游医疗保险适用于任何人出国旅游任何国家。 也适用于长期居住中国的美国宝宝。 保险期限5天至2年。 首次购买一个月或一个月以上，以后就可以续保至两年。可以按天数购买， 每天$1起。 网上成功提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。 确认信可以作为你购买保险的证明。";
l['Medical coverage for most international travelers'] = "符合大多数境外旅游的医疗需求";
l['Plan designs for U.S. citizens and non-U.S. citizens'] = "两种计划分别适合美国公民和非美国公民";
l['Similar to Patriot Travel but more coverage'] = "与爱国者旅游保险相似但赔付更高";
l['Great for Ages 70 and over'] = "适合70岁以上者旅游探亲";
l['Coverage to protect your travel cost and basic emergency medical coverage'] = "提供旅游行程保障：例如行程取消，旅行和行李延误，紧急医疗";
l['TRIP Insurance'] = "爱国者旅游行程保险";
l['More about Patriot Travel'] = "爱国者旅游保险的更多信息";
l['Why do I need travel medical insurance?'] = "为什么需要旅游医疗保险";
l['Most medical insurance coverage will not provide benefits in a different country.'] = "大多数医疗保险不提供在其他国家的索赔";
l['If you are a US citizen, your passport says, "Health Insurance: Medical costs abroad can be extremely expensive. Does your insurance apply overseas, including medical evacuation, payment to the overseas hospital or doctor, or reimbursement to you later?.....Medicare/Medicaid does not cover healthcare costs outside the US."'] = "如果你是美国公民，你的护照上会显示，“健康保险：国外医疗费用是极其昂贵的。你的保险是否适用于海外，包括紧急救援，支付给海外的医院或医生，或以后给你报销?.....Medicare/medicaid 是不包括美国以外的医疗费用的。῀";
l['Medical Evacuation is an important benefit.'] = "紧急医疗救援非常重要";
l['Maybe you are visiting a part of the world with a lesser developed healthcare system. You planned ahead and had your travel vaccines before you left, but what if you get injured on your trip? You might need to be evacuated to an adequate hospital. A medical evacuation benefit will provide what you need.'] = "也许你去一个医疗系统不够发达的地方旅游。你提前计划了旅游, 并接种了疫苗预防疾病，但如果你在旅途中受伤怎么办？你可能需要被运送到一个适当的医院。紧急医疗救援将为您提供你这类服务。";
l['Trip cancellation, lost baggage, travel delay benefits.'] = "旅程取消，行李丢失，行程延误";
l['You spent a year planning for and saving for your trip. Now, you arrive at the airport for a connecting flight and the flight is cancelled. You don’t need a health insurance benefit, but you sure could use a travel insurance benefit. Help cover your costs for unforeseen travel problems with the right travel insurance coverage for you.'] = "为了这次旅行你花了一年的时间去规划并节省开支。现在您到达机场,可是转机的航班被取消了。合适的旅游保险可以帮助你处理不可预见的旅游问题。";
l['Sample rates and benefits for Patriot Travel Medical Insurance:'] = "爱国者旅游医疗保险的费率和津贴范例";
l['Patriot America For non-US citizens traveling internationally'] = "爱国者国际旅游医疗保险 - 非美国公民";
l['Patriot International For US citizens traveling outside  home country'] = "爱国者国际旅游医疗保险 - 美国公民";
l['Rate'] = "月费";
l['Patriot Travel Brochure'] = "爱国者旅游医疗保险完全手册";
l['Group Patriot Travel Brochure'] = "爱国者旅游团体保险完全手册";
l['Buy Patriot Group Travel Insurance'] = "购买爱国者团体医疗保险";
l['Taian Travel Insurance'] = "泰安旅游保险";
l['Lifetime maximum'] = "最高赔付限额";
l['Term'] = "保期";
l['5 days to 2 years'] = "5天至2年";
l['No coinsurance outside of U.S.'] = "美国和加拿大境外： 共同保险项目中无个人赔付比例";
l['In-PPO 90% to $5,000, then 100%<br />Out-PPO, 80% to $5,000 then 100%'] = "在指定医疗网络就医，免赔额后，自付10%至$500<br />在非指定医疗网络就医，免赔额后，自付20%至$1000";
l['dependent child'] = "子女";
l['Up to the Maximum'] = "至最高赔付限额";
l['Hospitalization / room & board'] = "住院津贴";
l['Up to the Max for average semi-private room rate'] = "普通病房费用，至最高赔付限额, ";
l['Up to the Maximum for average semi-private room rate'] = "普通病房费用，至最高赔付限额";
l['Emergency Room'] = "急诊室";
l['Accidental Dental Injury'] = "意外牙科";
l['Sport & Activities Coverage'] = "普通运动";
l['Up to the Maximum for basic sports'] = "至最高赔付限额";
l['Trip Interruption'] = "行程延误";
l['Up to $5,000'] = "至$5,000";
l['Not covered'] = "不包括";
l['Limited coverage for sudden and unexpected recurrence'] = "涵盖有限的意外复发";
l['$25,000 principal sum'] = "$25,000";
l['Emergency Medical Evacuation'] = "紧急救援";
l['Monthly rate for $50,000 maximum and $250 deductible ($10,000 max for 80+ age) - minimum purchase 5 days'] = "$50,000最高赔付和$250免赔额的月费（80岁以上最高赔付限$10,000) - 5天为最短保期";
l['Monthly rate for $50,000 maximum and $1000 deductible ($10,000 max for 80+ age) - minimum purchase 5 days'] = "$50,000最高赔付和$1000免赔额的月费（80岁以上最高赔付限$10,000) - 5天为最短保期";
l['Patriot Platinum Travel Medical Insurance is a similar plan with more coverage (up to $8,000,000):'] = "爱国者铂金旅游医疗保险与爱国者旅游医疗保险相似但赔付更高(至$8,000,000)";
l['Patriot Platinum Travel Medical Insurance'] = "爱国者铂金旅游医疗保险";
l['Short-term travel medical coverage (5 days to 3 years)'] = "短期旅游医疗保险（5天至2年）";
l['Maximum Limits from $1,000,000 to $8,000,000'] = "最高赔付限额从$1,000,000 到 $8,000,000";
l['Deductible options from $0 to $25,000'] = "免赔额选择从$0 到 $25,000";
l['Renewable up to 36 months if three months or more are purchased'] = "如果购买3个月以上可续保至3年";
l['Two plan designs for U.S. citizens and non-U.S. citizens traveling outside their home country'] = "两种计划分别为美国公民和非美国公民在境外旅游而设计";
l['Buy Patriot Platinum Travel Medical Insurance'] = "购买爱国者铂金旅游医疗保险";
l['Changes from Patriot Travel Medical Insurance'] = "与爱国者旅游医疗保险的不同之处";
l['Ages 70-79 have $100,000 coverage (with $1,000 deductible the cost is $355.20 per month)'] = "70-79岁选择免赔额$1000可获赔付$100,000, 月费$355.20";
l['Ages 80 and over have $20,000 coverage (with $1,000 deductible the cost is $515.20 per month)'] = "年龄80或80以上选择免赔额$1000可获赔付$20,000, 月费$515.20";
l['Shared features'] = "与爱国者旅游医疗保险的相同之处";
l['Patriot Platinum Brochure'] = "爱国者保险铂金计划完全手册";
l['Alternatively, consider Patriot T.R.I.P. Travel if you need a coverage for trip cancellation, travel and baggage delays, and emergency medical treatment.'] = "爱国者旅游医疗保险为您提供医疗保障。如果您还需要保险覆盖行程取消，旅行和行李延误，紧急医疗，您可附加爱国者 T.R.I.P.旅行系列";
l['Patriot T.R.I.P.® Travel'] = "爱国者旅游行程保险";
l['$20,000 coverage for trip cancellation/interruption'] = "行程取消延误$20,000";
l['$10,000 coverage for emergency medical/dental expenses'] = "紧急医疗$10,000";
l['$500 coverage for travel delay'] = "行程推迟$500";
l['$1,000 coverage for baggage/personal possessions'] = "行李丢失$1,000";
l['$100 Baggage delay'] = "行李延迟$100";
l['$20,000 Emergency medical evacuation/repatriation'] = "紧急救援$20,000";
l['$3,000 Repatriation of mortal remains'] = "遗体送返3,000";
l['$100,000 Common carrier accidental death and dismemberment'] = "公共交通意外伤亡$100,000";
l['Buy Patriot T.R.I.P.® Travel'] = "购买爱国者行程保险";
l['Sample Cost'] = "价格范例";
l['Patriot Trip Brochure'] = "爱国者行程保险完全手册";
l['A 35 year old spends $5000 on a trip, insurance costs $200. A 25 year old spends $1500 on a trip, insurance costs $60.'] = "如果35岁的旅行者旅行花费$5000,爱国者行程保险为$200。如果25岁的旅行者旅行花费$1500,爱国者行程保险为$60。";
l['More options'] = "更多的选择";
l['More Options:'] = "更多的选择";
l['Patriot T.R.I.P.® Elite'] = "爱国者行程精华保险";
l['Buy'] = "购买";
l['Offers more coverage than Patriot T.R.I.P. Travel Insurance.'] = "比爱国者行程保险提供更多的保障";
l['Patriot T.R.I.P.® Student'] = "爱国者行程学生保险";
l['Designed just for students and is more affordable than Patriot T.R.I.P. Travel Insurance.'] = "为学生而设计，比爱国者行程保险更经济";
l['Visit'] = "参见";
l['CDC (Center for Disease Control)'] = "CDC(疾病预防控制中心)";
l[' to learn about travel vaccine recommendations. They provide an up to date list by country of which travel vaccinations are required or recommended. They also provide up to date health information by location. Did you know a vaccine booster for Polio is recommended for travel to some locations? Also, the vaccines for Hepatitis A and B are good for life – be safe once now and you are covered forever! Once you have your passport health care preparations are critical.'] = "了解旅行疫苗的建议：CDC(疾病预防控制中心)根据不同国家的旅游提供最新的预防接种的要求或建议。他们还提供不同地区的最新的健康信息。你知道到某些地方旅行是需要接种脊髓灰质炎疫苗的吗？此外，A型和B型肝炎疫苗是很好安全的，现在接种，一生受用！";
l['Travel visa requirements depend on the country you are visiting. A US citizen might need a visa depending on where they are going. A visitor to the United States might need a visa depending on the nature of their visit. For details see the'] = "到不同的国家旅游需要不同的旅游签证。美国公民可能需要签证，取决于他们要去的地方。到美国旅游，根据旅游性质可能需要不同的签证。有关详细信息，请参阅国务院网站";
l['State Department website'] = "美国国务院网站";
l['Travel Tips'] = "旅游小窍门";
l['Comprehensive medical coverage for individuals and families (in the U.S. for 1 yr or longer) from Anthem Blue Cross.'] = "";
l['Some example plans:'] = "";
l['Core Share'] = "";
l['Great for new college graduates'] = "";
l['Deductible $750 and higher'] = "";
l['The plan with the lowest premium rates'] = "";
l['Premier Plus'] = "";
l['Deductible $500 and higher'] = "";
l['20% coinsurance'] = "";
l['The plan with the most benefit'] = "";
l['Smart Sense'] = "";
l['30% coinsurance so premium cost is less than Premier Plus'] = "";
l['Lumenos HSA'] = "";
l['Deductible from $1,500 to 5,500 for single, $3,000 to 11,000 for family'] = "";
l['Tax advantaged saving account'] = "";
l['Call or email us to learn more or browse online:'] = "";
l['Quote/Purchase Anthem Insurance'] = "";
l['Major medical, short term, dental insurance, critical illness coverage for residents (in the U.S. for 1 yr or longer) of Indiana and Texas. UnitedHealthOne coverage is low cost and high quality.'] = "";
l['Easiest Application, Great Temporatory Coverage'] = "";
l['Maximum 11 months in TX, 5 months in IN.'] = "";
l['Lifetime Maximum: $250,000'] = "";
l['Deductible: $500 to $5000 per cause'] = "";
l['Coinsurance: 20% to $4000, then Plan pays 100%'] = "";
l['Doctor Coverage: Subject to deductible and coinsurance'] = "";
l['Monthly Rate (deductible $2500): $35 for 25 y/o, $40 for 35 y/o, $64 for 45 y/o'] = "";
l['Low Cost, Simple to Understand for Self-employed, Early Retirees and New Graduates'] = "";
l['Lifetime Maximum: Unlimited'] = "";
l['Deductible: $1500 to $10,000 per year. Deductible credit up to 50% - deductible goes down every year your expenses are under the deductible'] = "";
l['Coinsurance: 20% to $3000, then Plan pays 100%'] = "";
l['Preventive Care: Covered 100% No Copayment, No deductible, No Coinsurance'] = "";
l['Prescription drugs covered subject to deductible and coinsurance'] = "";
l['Optional benefits for accidental death, accidental injury, term life insurance, vision'] = "";
l['Monthly Rate (deductible $2500): $99 for 25 y/o, $133 for 35 y/o, $194 for 45 y/o'] = "";
l['Great Comprehensive Family Coverage, More Benefits for Your Family'] = "";
l['Deductible: $1000 to $10,000 per year. Deductible credit up to 50% - deductible goes down every year your expenses are under the deductible'] = "";
l['Coinsurance: 30% to $5000, then Plan pays 100%'] = "";
l['Doctor Coverage: $35 copay then 100% covered'] = "";
l['Prescription drugs copay included'] = "";
l['Monthly Rate (deductible $2500): $106 for 25 y/o, $144 for 35 y/o, $209 for 45 y/o'] = "";
l['Quote/Purchase UnitedHealthOne Insurance® - You can get a quote without entering any personal information.'] = "";
l['Highlights'] = "";
l['Short Term Medical VALUE PLAN'] = "";
l['Comprehensive Major Medical PLAN 80'] = "";
l['Comprehensive Major Medical COPAY PLAN'] = "";
l['More information about these medical plans:'] = "";
l['Deductible credit means your deductible goes down by 20% each year your medical expenses are less than your deductible. A 50% reduction in your deductible is your maximum benefit.'] = "";
l['Nationwide network gives you access to providers throughout the U.S.'] = "";
l['In Indiana and Texas dental insurance and critical illness insurance can be purchased seperately from medical coverage.'] = "";
l['All plans are available through the quote link. This includes other copay plans, high deductible health insurance, health saving accounts, self employed health insurance coverage.'] = "";
l['More information about UnitedHealthOne:'] = "";
l['A UnitedHealthCare Company.'] = "";
l['Health insurance policies are issued by Golden Rule Insurance Company who has over 65 years experience serving individuals.'] = "";
l['26 million customers entrust UnitedHealthCare with their health insurance needs.'] = "";
l['"A" rated by A.M.Best.'] = "";
l['"A+" rated by Standards and Poor\'s.'] = "";
l['Up to 50% discounts on medical care provided by provider network access.'] = "";
l['Nearly 754,000 physicians and 5,400 hospitals in the largest national provider network.'] = "";
l['Delivering on our promise to provide peace of mind and financial security for clients has been the focus of American United Life Insurance Company® (AUL) a OneAmerica company, for more than 130 years. OneAmerica and its operating companies’ ratings have remained stable, providing peace of mind to our customers. A.M. Best rating A (Excellent) positive outlook The third-highest of 15 possible ratings, according to the release dated June 9, 2010. Standard & Poor’s rating AA- (Very Strong) stable outlook The fourth-highest of 21 possible ratings, according to the report dated August 3, 2010.'] = "";
l['Low Cost Term Life Insurance'] = "";
l['Sample (most preferred) rates:'] = "";
l['Low Cost Term Life Insurance - Sample (most preferred) rates:'] = "";
l['Term Life Insurance'] = "";
l['10 yr level $249,999'] = "";
l['20 yr level $249,999'] = "";
l['30 yrs old Male'] = "";
l['$142.50/yr'] = "";
l['$215.00/yr'] = "";
l['30 yrs old Female'] = "";
l['$127.50/yr'] = "";
l['$170.00/yr'] = "";
l['40 yrs old Male'] = "";
l['$175.00/yr'] = "";
l['$325.85/yr'] = "";
l['40 yrs old Female'] = "";
l['$167.50/yr'] = "";
l['$237.50/yr'] = "";
l['Call or email for a quote!'] = "";
l['We also offer Whole Life Insurance and Annuities. Please call or email for a quote!'] = "";



l['Plan B (Taian Patriot Exchange), $100 per illness deductible'] = "计划B(Taian Patriot Exchange), $100每次生病免赔额";
l['Plan B (Taian Patriot Exchange)- Annual Deductible<br />ONLY AVAILABLE FROM TAIAN'] = "计划B(Taian Patriot Exchange), 年度免赔额<br />泰安独家代理";
l['$250 or $500 annual deductible<br />Taian Exclusive!<br />$5 co-pay per visit in Student Health Center.'] = "$250 或 $500年度免赔额<br />泰安独家代理!<br />$5 co-pay 就诊学生医疗中心 ";
l['$50,000 per illness/injury benefit, $100 per illness/injury deductible'] = "$50,000 每次生病最高赔付, $100 每次生病免赔额";
l['$250,000 per illness/injury benefit, $100 per illness/injury deductible'] = "$250,000 每次生病最高赔付, $100 每次生病免赔额";
l['$500,000 per illness/injury benefit, $100 per illness/injury deductible'] = "$500,000 每次生病最高赔付, $100 每次生病免赔额";
l['$50,000 per illness/injury benefit, $500 annual deductible<br />***LOWEST PRICE***'] = "$50,000 每次生病最高赔付, $500 年度免赔额<br />***最低价格***";
l['$50,000 per illness/injury benefit, $500 annual deductible'] = "$50,000 每次生病最高赔付, $500 年度免赔额";
l['$50,000 per illness/injury benefit, $250 annual deductible<br />*******BEST VALUE*******'] = "$50,000 每次生病最高赔付, $250 年度免赔额<br />***最高性价比***";
l['$100,000 per illness/injury benefit, $250 annual deductible'] = "$100,000 每次生病最高赔付, $250 年度免赔额";
l['Buy Group B'] = "购买团体计划B";
l['Buy Group B (10% off, $39 and up)'] = "购买团体计划B(10%优惠，$39起）";
l['Buy Group B (10% off)'] = "购买团体计划B(10%优惠）";
l['Buy Group A (10% off)'] = "购买团体计划A(10%优惠）";
l['For 2 primary insured or more'] = "两个或以上主申请人";
l['Complete Price Chart for Taian Patriot Exchange'] = "泰安计划B完全价格表";
l['Taian Patriot Exchange Plan B with $50,000 limit per illness/injury is the most affordable plan that meets the US Dept of State standards for Exchange visitors (J visa) which are: At least $50,000 per illness, repatriation of remains of $7,500, Medical evacuation benefits of $10,000, and a deductible not over $500.'] = "泰安计划B里的$50,000每次生病最高赔付是符合美国国务院对J签证要求的最经济实惠的计划。国务院的要求是： 1.每次生病至少$50,000的最高赔付； 2. 遗体返送$7,500; 3. 紧急救护$10,000; 4. 免赔额不超过$500.";
l['All Taian Patriot Exchange plans meet the USDOS standards.'] = "泰安计划B里的所有选项都符合国务院标准";
l['Plastic ID card (ONLY AVAILABLE FROM TAIAN) available for purchases of six months or longer'] = "一次性购买六个月或六个月以上可获免费塑料保险卡 - 泰安独家专有";
l['Taian Patriot Exchange Group plan available for groups of 2 or more primary applicants. Use one credit card to pay for the whole group. Use the credit card holder\'s name as the group name. Use the credit card holder\'s email as the group contact for the plan.'] = "两个或两个以上的主申请人购买泰安团体计划B享受10%的优惠。 整个团体用同一张信用卡付款，用信用卡持有人的姓名作为团体名称，用信用卡持有人的Email 作为保险公司联系团体的Email";
l['Taian Patriot Exchange Brochure'] = "泰安计划B(Taian Patriot Exchange)完全手册";
l['More on Taian Patriot Exchange'] = "泰安计划B(Taian Patriot Exchange)的更多信息";
l['J scholars (not enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS.  Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires.  After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "对J1访问学者(不包括全日制在校学生)购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Taian International Health Insurance provides IMG International Scholar and Student Insurance for US visa holders (F1 visa, J1 visa, OPT, and M1 visa) and their dependents. Taian Insurance Plan A and Plan B meet many schools\' student insurance standards and almost every schools\' J1 scholar insurance standards and are more affordable than most school plans. All J visa holders are required to meet the US Department of State (USDOS) requirements and their school requirements for the duration of their visa. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the USDOS requirements. Most schools requirements for J1 scholars are the same as the USDOS, however some schools have higher requirements. Please click the links below to see your school requirements and US Department of State requirements.'] = "美国泰安公司为F1, J1，M1 签证的学生和OPT学生以及他们的家属提供IMG留学生和访问学者医疗保险。保险计划A和B符合几乎所有学校J签证的标准，也符合许多学校F签证的标准，并且比学校保险更加经济实惠。 所有J签证持有人的保险既需要符合美国国务院的标准还需要符合访问学校的标准，并且保期需要覆盖整个访问期间。 泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是符合国务院标准的最经济实惠的保险计划。大多数学校对J1访问学者保险的要求与国务院的一 样，但有些学校有更高的要求。请点击下面的链接，查看你校的F签证和J签证医疗保险的标准和国务院J签证医疗保险的标准。";
l['Confucius Institute volunteer teachers come to the US with J1 visas. Their exchange program requires them to have health insurance that meets the US Department of State (USDOS) requirements for the duration of their stay. Taian International Health Insurance provides insurance for J1 educators and their dependents. Taian Insurance Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the USDOS requirements. Many Confucius teachers choose Plan B with $250,000 or $500,000 of benefits to get the best coverage. Taian Insurance Plan A also meets the requirements and offers affordable coverage with maternity benefits. Plan A and Plan B are also good for Confucius teachers anywhere around the world, not just in the US.'] = "孔院汉语教师志愿者持J1签证来到美国。 他们的中美交流计划要求他们在美期间具有符合美国国务院要求的医疗保险。 美国泰安国际医疗保险公司为持有J签证的孔院教师志愿者及家属提供满足国务院标准的保险。泰安计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足国务院标准的最经济实惠的保险计划。许多孔院教师志愿者选择$250,000和$500,000以得到最佳的保险赔付。 泰安保险计划A也满足国务院标准，并且含有产科保险。 泰安保险计划A和B适合世界各地孔子学院的汉语教师和志愿者。";
l['$500,000 per illness/injury, $250 annual deductible'] = "$500,000 每次生病最高赔付, $250年度免赔额";
l['Your school J scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "你校对J1访问学者购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Harvard University and Harvard Medical School J scholars (not enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Pre-existing condition coverage after a reasonable wait; 6. Patient share of expenses not over 25%. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "Harvard University and Harvard Medical School 对J1访问学者(不包括全日制留学生)购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500;  5. 合理的等待期后覆盖先前的疾病;  6. 共同保险不超过25%。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Florida J scholars (not enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Policy shall not unreasonably exclude risks inherent to the exchange program; 6. The insurance must meet certain credit rating criteria; 7. Must be accepted in all medical facilities. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements and USDOS requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "University of Florida 对J1访问学者(不包括全日制留学生)购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500;  5. 保险计划不得不合理地排除交流计划中固有的风险;  6. 保险公司必须符合一定的信用评级标准;  7. 必须接受所有的医疗设施。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准和国务院标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Hawaii J visa holders (enrolled students or visiting scholars) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter).  You can send the confirmation letter to your school as proof of insurance.  J students need their insurance approved by ISS.'] = "University of Hawaii 对J1访问学者和J1国际学生购买医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。J1国际学生还需 要在学校 ISS办理保险waiver。";
l['F visa student insurance is approved by Student Health Insurance Office. F visa holders have required coverage as follows: 1. Medical benefits of $100,000 per accident or illness; 2. Coinsurance coverage of 75% or more and mental nervous benefits ; 3.Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Deductible not over $500; 6. Pre-existing waiting period not over 6 months. Plan A is the most affordable plan that meets the standards. You need to select the optional rider for a 6 month pre-existing condition waiting period.'] = "F1学生购买校外保险需要在Student Health Insurance Office办理waiver。保险要求是:  1. 每次生病或受伤的最高赔付至少为$100,000;  2. 共同保险至少75%并有精神健康保险;  3. 遗体返送$7,500;  4. 紧急救护$10,000;  5.免赔额不超过$500;  6. 先前疾病的免责期不超过6个月。泰安计划A是满足此标准的最经济实惠的保险计划，你需要选择先前疾病免责期6个月的附加选项。";
l['We can assist with the waiver forms required for each visa.'] = "泰安公司协助填写waiver form.";
l['Plan B (Taian Patriot Exchange)'] = "计划B (Taian Patriot Exchange)";
l['$100 per illness/injury'] = "$100/疾病或受伤";
l['Two options: 1) $100 per illness/injury; 2) Annual deductible ($250 or $500)<br />Annual deductible is Taian Exclusive!'] = "两种免赔额选择： 1) 每次疾病或受伤$100; 2) 年度免赔额($250 or $500)<br />年度免赔额为泰安独家代理!";
l['$5 copay, no deductible'] = "$5  挂号费, $0 免赔额";
l['Deductible Type'] = "免赔额(保险赔付前的自付部分)";
l['UC Riverside J scholars (not enrolled students) have required coverage as follows: 1. Medical benefits of $500,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Annual deductible not over $250. Taian Plan B (with $500,000 benefit and two deductible options) and Plan C (with $500,000 benefit and $250 deductible) are the most affordable plans that meet the school requirements and the USDOS requirements.  After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "UC Riverside 对J1访问学者(不包括全日制在校学生)购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$500,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 年度免赔额不超过$250。泰安保险计划B里的每次生病或受伤$500,000最高赔付(配合两种不同免赔额选项)和计划C ($500,000最高赔付, $250免赔额)都是满足此标准和国务院标准的最经济实惠的保险计划。网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['UC Berkeley J scholars (not enrolled students) have required coverage as follows: 1. Medical benefits of $500,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Annual deductible not over $250. Taian Plan B and Plan C (both with $500,000 benefit and $250 annual deductible) are the most affordable plans that meet the school requirements and the USDOS requirements.  After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "UC Berkeley对J1访问学者(不包括全日制在校学生)购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$500,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 年度免赔额不超过$250。泰安保险计划B和计划C里的$500,000最高赔付配合 $250年度免赔额都是满足此标准和国务院标准的最经济实惠的保险计划。网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['UT San Antonio both students (F or J visa) and exchange visitors (J visa) have required coverage as follows: 1. Medical benefits of $500,000 per person per policy year; 2. Medical benefits of $50,000 per accident or illness; 3. Repatriation of remains of $7,500; 4. Medical evacuation of $10,000; 5. Deductible not over $500. Taian Plan B with $50,000 benefit per illness or injury and three deductible options (accompanied by $5,000,000 lifetime maximum) is the most affordable plan that meets the requirements and USDOS requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "UT San Antonio对留学生(F签证或J签证)和J1访问学者购买校外医疗保险的要求是：1. 每人的年度最高赔付 $500,000;  2. 每次生病或受伤的最高赔付至少为$50,000;  3. 遗体返送$7,500;  4. 紧急救护$10,000;  5. 每次生病或受伤的免赔额不超过$500。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项(含有终身最高赔付$5,000,000)都是满足此标准和国务院标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Toledo J scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "University of Toledo对J1访问学者购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Enrolled international students are required to have a $500,000 lifetime maximum and complete an online waiver. Taian Plan B with $50,000 benefit per illness or injury and three deductible options (accompanied by $5,000,000 lifetime maximum) is the most affordable plan that meets the standards.'] = "在校国际学生保险要求终身最高赔付$500,000，并要求填写online waiver form。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项(含有终身最高赔付$5,000,000)都是满足此标准的最经济实惠的保险计划。";
l['J scholars and enrolled students (F or J) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. These requirements are the same as the US Department of State. Taian Plan B with $50,000 benefit per illness or injury and three deductible options, and Plan C with $50,000 benefit and $500 deductible are the most affordable plans that meet the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "J1访问学者和F1/J1国际学生购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 免赔额不超过$500。此标准与美国国务院的标准一样。泰安保险计划B (每次生病或受伤$50,000最高赔付配合三种不同免赔额选项)和计划C ($50,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['J scholars and enrolled students (F or J) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. These requirements are the same as the US Department of State. Taian Plan B (with $50,000 benefit per illness or injury and three deductible options) and Plan C (with $50,000 benefit and deductible not over $500) are the most affordable plans that meet the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "J1访问学者和F1/J1国际学生购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 免赔额不超过$500。此标准与美国国务院的标准一样。泰安保险计划B (每次生病或受伤$50,000最高赔付配合三种不同免赔额选项)和计划C ($50,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Enrolled students need to purchase insurance before the start of the semester and send a waiver form along with your visa letter to the international office.  Taian can assist with your waiver form.'] = "全日制留学生需要在学期开始前购买保险并且需要在waiver截至日期前提交waiver申请和保险确认信。 泰安公司可以协助填写Waiver Form.";
l['Plan A (Student Health Advantage), $100 per illness deductible'] = "计划A(Student Health Advantage), $100每次生病免赔额";
l['$50,000 per illness/injury, $250 annual deductible<br />ONLY AVAILABLE FROM TAIAN<br />***Best Value***'] = "$50,000每次生病最高赔付, $250年度免赔额<br />泰安独家代理<br />***性价比最高***";
l['$100,000 per illness/injury, $250 annual deductible<br />ONLY AVAILABLE FROM TAIAN'] = "$100,000每次生病最高赔付, $250年度免赔额<br />泰安独家代理";
l['$50,000 benefit, $500 annual deductible'] = "$50,000最高赔付, $500年度免赔额";
l['$50,000 benefit, $1000 annual deductible'] = "$50,000最高赔付, $1000年度免赔额";
l['$50,000 benefit, no deductible'] = "$50,000最高赔付, $0免赔额";
l['Student Health Center Copay'] = "学校医务室挂号费";
l['Enrolled students need to purchase insurance before the start of the semester and send a waiver form along with your visa letter to the international office.'] = "全日制留学生需要在学期开始前购买保险并且需要在waiver截至日期前提交waiver申请和保险确认信。";

l['All City University of New York (CUNY - see CUNY School List Below) '] = "所有City University of New York (CUNY – 见下面 CUNY 学校名单) ";
l['Bellevue College J scholars and students who are not full time have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "Bellevue College对J1访问学者和非全日制学生购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Missouri Saint Louis J scholars and students who are not full time have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "University of Missouri Saint Louis对J1访问学者和非全日制学生购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['University of Cincinnati J scholars and enrolled students with 5 or fewer credit hours per semester have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "University of Cincinnati 对J1访问学者和每学期少于5学分的国际学生购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Enrolled students need to purchase insurance before the start of the semester and complete an on line waiver.'] = "全日制国际学生需要在学期开始前购买保险并且网上提交保险waive申请";
l['University of Notre Dame J scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "University of Notre Dame对J1访问学者购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Enrolled international students are required to carry $500,000 lifetime maximum and complete a waiver. Taian Plan B with $50,000 benefit per illness or injury and three deductible options (accompanied by $5,000,000 lifetime maximum)  is the most affordable plan that meets the requirements.'] = "全日制国际学生保险要求终身最高赔付$500,000，并要求填写 waiver form。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项(含有终身最高赔付$5,000,000)都是满足此标准的最经济实惠的保险计划。";
l['University of Pennsylvania J scholars and J students (not F visa students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "University of Pennsylvania 对J1访问学者和J1国际学生(不包括F1国际学生)购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Enrolled international students are allowed to waive only if they are an exchange student visiting through an official exchange program. They are required to have medical benefits of $200,000 per illness or injury and complete the Waiver Form, submit it along with your I-20(or DS2019), insurance ID card and Visa Letter. Taian Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.'] = "只有是exchange program 的国际学生才能waive学校保险。Waive学校保险要求每次生病或受伤$200,000最高赔付。 泰安保险计划B里的每次生病或受伤$250,000 最高赔付是满足此标准的最经济实惠的保险计划。 购买成功后，需要提交Waiver Form, 保险确认信(Visa Letter), 保险卡(ID Card)和 I20 (或DS2019) 要求waive 学校保险。";
l['Enrolled international students are allowed to waive only if they are an exchange student visiting through an official exchange program, or are sponsored by the government of the US or their home country. They are required to have medical benefits of $200,000 per illness or injury and complete an on line waiver. Taian Plan B with $250,000 benefit per illness or injury is the most affordable plan that meets the standards.'] = "只有是exchange program 的国际学生或政府资助的交换生才能waive学校保险。Waive学校保险要求每次生病或受伤$200,000最高赔付。 泰安保险计划B里的每次生病或受伤$250,000 最高赔付是满足此标准的最经济实惠的保险计划。 购买成功后，需要在截至日期前提交保险Waiver申请。";

l['Enrolled international students are required to have medical benefits of $250,000 per illness or injury. Taian Plan B with $250,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the standards.'] = "全日制在校国际学生保险要求每次生病或受伤$250,000最高赔付。 泰安保险计划B里的每次生病或受伤$250,000 最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。";
l['J scholars and enrolled students (F or J) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500; 5. Maternity benefits for females only.  For males, Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. For females, Plan A meets the requirements.  After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "对J1访问学者和J1/F1全日制国际学生购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 免赔额不超过$500;  5. 女生要求有妇产科保险。 对男生，泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划，同时也符合美国国务院的标准。 对女生，泰安保险计划A满足以上所有的要求。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Enrolled international students are required to have medical benefits of $500,000 per illness or injury, and submit a waiver.  Taian Plan B (with $500,000 benefit per illness or injury and deductible not over $500) and Plan C (with $500,000 benefit and deductible not over $500) are the most affordable plans that meet the requirements.'] = "全日制国际学生保险要求每次生病或受伤的最高赔付为$500,000，并需要提交waiver申请。泰安保险计划B(每次生病或受伤$500,000最高赔付, 免赔额不超过$500)和计划C ($500,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。";
l['J scholars have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B (with $50,000 benefit per illness or injury and deductible not over $500) and Plan C (with $50,000 benefit and deductible not over $500) are the most affordable plans that meet the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "J1访问学者购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 免赔额不超过$500。此标准与美国国务院的标准一样。泰安保险计划B (每次生病或受伤$50,000最高赔付，免赔额不超过$500)和计划C ($50,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['$500,000 benefit, $500 annual deductible'] = "$500,000最高赔付, $500年度免赔额";
l['Taian Plan B (with $100,000 benefit per illness or injury and deductible not over $250) and Plan C (with $100,000 benefit and deductible not over $250) are the most affordable plans that meet your school requirements and USDOS requirements.  You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires.  Shortly after submitting an application you will receive confirmation of your coverage including a visa letter which you can send to UCLAVSISP@Garnett-Powers.com for a waiver. After receiving waiver confirmation by email, J-1 scholar brings the waiver confirmation and proof of medical insurance to check-in.'] = "泰安保险计划B (每次生病或受伤$100,000最高赔付，免赔额不超过$250)和计划C ($100,000最高赔付, 免赔额不超过$250)都是满足UCLA标准和国务院标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中有保险卡和确认信（visa letter）。将确认信发送到uclavsisp@garnett-powers.com申请waiver。收到waiver 批准的Email后，将waiver 批准信和visa letter 交给学校登记入学。";
l['Enrolled international students (F or J) are required to have medical benefits of $500,000 per illness or injury, and submit a waiver. Taian Plan B (with $500,000 benefit per illness or injury and deductible not over $500) and Plan C (with $500,000 benefit and deductible not over $500) are the most affordable plans that meet the requirements.'] = "全日制国际学生(F或J签证)保险要求每次生病或受伤的最高赔付$500,000，并要求提交 waiver 申请。泰安保险计划B(每次生病或受伤$500,000最高赔付，免赔额不超过$500)和计划C ($500,000最高赔付，免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。";
l['Murray State University J visa holders have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. These requirements are the same as the US Department of State. Taian Plan B (with $50,000 benefit per illness or injury and $500 deductible) and Plan C (with $50,000 benefit and $500 deductible) are the most affordable plans that meet the requirements.  You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "Murray State University 对J1签证持有人购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 免赔额不超过$500。此标准与美国国务院的标准一样。泰安保险计划B (每次生病或受伤$50,000最高赔付, $500免赔额)和计划C ($50,000最高赔付, $500免赔额)都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。 ";
l['F visa holders are required to have $100,000 of coverage. Taian Plan B (with $100,000 benefit per illness or injury and $500 deductible) and Plan C (with $100,000 benefit and $500 deductible) are the most affordable plans that meet the requirements.'] = "F签证国际学生保险要求最高赔付$100,000。泰安保险计划B (每次生病或受伤$100,000最高赔付, $500免赔额)和计划C ($100,000最高赔付, $500免赔额)都是满足此标准的最经济实惠的保险计划。";
l['UIUC J scholars (not for enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. These requirements are the same as the US Department of State. Taian Plan B (with $50,000 benefit per illness or injury, deductible not over $500) and Plan C (with $50,000 benefit, deductible not over $500) are the most affordable plans that meet the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "UIUC对J1访问学者(不包括全日制在校学生)购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 免赔额不超过$500。此标准与美国国务院的标准一样。泰安保险计划B (每次生病或受伤$50,000最高赔付, 免赔额不超过$500)和计划C ($50,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Enrolled international students are required to have coverage as follows: 1. Medical benefits of $500,000 per illness or injury; 2.  Plan must be effective by the first day UIUC plan is effective for the semester; 3. Deductible not over $2,000 for F visa, and not over $500 for J visa.  Taian Plan B and Plan C with $500,000 benefit and deductible not over $1,000 (F visa) or $500 (J visa) are the most affordable plans that meet the requirements.  Students are required to complete an on line waiver.'] = "UIUC 对在校国际学生医疗保险的要求是：1. 每次生病或受伤的最高赔付为$500,000;  2. 购买保险的生效日期不迟于UIUC学校保险的开始日期;  3. 免赔额不超过$2000(F签证)或$500(J签证)。 泰安保险计划B和计划C 最高赔付$500,000, 免赔额不超过$1000(F签证)或$500(J签证)是满足此标准的最经济实惠的保险计划。国际学生需要在截至日期前完成网上保险的waiver申请。";
l['F or J STUDENTS'] = "F或J签证国际学生";
l['$500,000 per illness/injury, $500 annual deductible<br />ONLY AVAILABLE FROM TAIAN'] ="$500,000每次生病最高赔付, $500年度免赔额<br />泰安独家代理";
l['$500,000 per illness/injury, $250 annual deductible<br />ONLY AVAILABLE FROM TAIAN'] = "$500,000每次生病最高赔付, $250年度免赔额<br />泰安独家代理";
l['$500,000 per illness/injury, $100 per illness deductible'] = "$500,000 每次生病最高赔付, $100 每次生病免赔额";
l['$500,000 benefit, $250 annual deductible'] = "$500,000最高赔付, $250年度免赔额";
l['$100,000 per illness/injury, $100 per illness deductible'] = "$100,000 每次生病最高赔付, $100 每次生病免赔额";
l['$250,000 per illness/injury, $250 annual deductible<br />ONLY AVAILABLE FROM TAIAN'] = "$250,000每次生病最高赔付, $250年度免赔额<br />泰安独家代理";
l['$50,000 per illness/injury, $500 annual deductible<br />ONLY AVAILABLE FROM TAIAN'] = "$50,000每次生病最高赔付, $500年度免赔额<br />泰安独家代理";
l['$50,000 benefit, $250 annual deductible'] = "$50,000最高赔付, $250年度免赔额";
l['$50,000 per illness/injury, $250 annual deductible<br />ONLY AVAILABLE FROM TAIAN<br />'] = "$50,000每次生病最高赔付, $250年度免赔额<br />泰安独家代理";
l['$100,000 per illness/injury, $500 annual deductible<br />ONLY AVAILABLE FROM TAIAN'] = "$100,000每次生病最高赔付, $500年度免赔额<br />泰安独家代理";
l['$500,000 benefit, $1,000 annual deductible'] = "$500,000最高赔付, $1,000年度免赔额";



l[''] = "";
l[''] = "";
l[''] = "";
l['Plan B (Taian Patriot Exchange), $100 per illness deductible'] = "计划 B (Taian Patriot Exchange), $100每次生病免赔额";
l['Plan B (Taian Patriot Exchange), $250 annual deductible'] = "计划 B (Taian Patriot Exchange), $250年度免赔额";
l['Plan B (Taian Patriot Exchange), $500 annual deductible'] = "计划 B (Taian Patriot Exchange), $500年度免赔额";
l['$5,000,000 lifetime. Options $50,000, $100,000, $250,000 or $500,000 per illness/injury'] = "$5,000,000 终身最高赔付。 可选$50,000, $100,000, $250,000, $500,000每次生病最高赔付";
l['$250 per policy year'] = "$250年度免赔额";
l['$500 per policy year'] = "$500年度免赔额";
l['*******BEST VALUE*******'] = "*******性价比最高*******";
l['******LOWEST PRICE******'] = "*******最低价格*******";
l['$50,000 per illness/injury, $100 per illness deductible'] = "$50,000 每次生病最高赔付, $100 每次生病免赔额";
l['$250,000 per illness/injury, $100 per illness deductible'] = "$250,000 每次生病最高赔付, $100 每次生病免赔额";
l['$50,000 per illness/injury, $250 annual deductible'] = "$50,000 每次生病最高赔付, $250 年度免赔额";
l['$100,000 per illness/injury, $250 annual deductible'] = "$100,000 每次生病最高赔付, $250 年度免赔额";
l['$250,000 per illness/injury, $250 annual deductible'] = "$250,000 每次生病最高赔付, $250 年度免赔额";
l['$50,000 per illness/injury, $500 annual deductible'] = "$50,000 每次生病最高赔付, $500 年度免赔额";
l['$100,000 per illness/injury, $500 annual deductible'] = "$100,000 每次生病最高赔付, $500 年度免赔额";
l['$250,000 per illness/injury, $500 annual deductible'] = "$250,000 每次生病最高赔付, $500 年度免赔额";
l['$500,000 per illness/injury, $500 annual deductible'] = "$500,000 每次生病最高赔付, $500 年度免赔额";
l['Group price 10% below individual'] = "团体价格优惠10%";
l['Per Illness or Injury Deductible'] = "每次生病或受伤免赔额";
l['The US Department of State (USDOS) requires J scholars to have coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness.  Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "美国国务院对J1访问学者医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 每次生病或受伤的免赔额不超过$500。 泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Enrolled international students are required to have coverage as follows: 1. Medical benefits of $50,000 per illness or injury; 2. Deductible not over $1,000 (and not over $2,000 for family) for F visa, and not over $500 for J visa. Taian Plan B and Plan C with $50,000 benefit and deductible not over $1,000 (F visa) or $500 (J visa) are the most affordable plans that meet the requirements.'] = "在校国际学生医疗保险的要求是：1. 每次生病或受伤的最高赔付为$50,000;  2. 免赔额不超过$1,000(F签证, 家庭不超过$2,000)或$500(J签证)。 泰安保险计划B和计划C 最高赔付$50,000, 免赔额不超过$1,000(F签证)或$500(J签证)是满足此标准的最经济实惠的保险计划。";
l['Western University of Health Sciences J scholars (not for enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500. These requirements are the same as the US Department of State. Taian Plan B (with $50,000 benefit per illness or injury, deductible not over $500) and Plan C (with $50,000 benefit, deductible not over $500) are the most affordable plans that meet the requirements. You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "Western University of Health Sciences对J1访问学者(不包括全日制在校学生)购买校外医疗保险的要求是：1. 每次生病或受伤的最高赔付至少为$50,000;  2. 遗体返送$7,500;  3. 紧急救护$10,000;  4. 免赔额不超过$500。此标准与美国国务院的标准一样。泰安保险计划B (每次生病或受伤$50,000最高赔付, 免赔额不超过$500)和计划C ($50,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Taian Patriot Exchange Price Chart'] = "泰安计划B (Taian Patriot Exchange) 完全价格表";
l['$50,000 benefit, $500 annual deductible<br />'] = "$50,000最高赔付, $500年度免赔额";
l['Taian Patriot Exchange Group Brochure'] = "泰安团体计划B(Taian Patriot Group Exchange)完全手册";
l['Plan B ($500,000 per illness or injury), $100 per illness deductible'] = "计划B ($500,000 每次生病最高赔付), $100每次生病免赔额";
l['Plan B ($500,000 per illness or injury), $250 annual deductible<br />Taian Exclusive!'] = "计划B ($500,000 每次生病最高赔付), $250年度免赔额<br />泰安独家代理";
l['Plan C ($500,000 benefit, $250 annual deductible)'] = "计划C ($500,000 最高赔付, $250年度免赔额)";
l['$250 or $500 annual deductible<br />Annual deductible is Taian Exclusive!'] = "$250或$500 年度免赔额<br />年度免赔额为泰安独家代理";
l['UC San Diego J scholars (not enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B with $50,000 benefit per illness or injury and three deductible options is the most affordable plan that meets the requirements. The International faculty and scholar office at UCSD recommends $100,000 per illness or injury.  You can also choose Taian Plan B with a higher benefit or Taian Plan A if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "UC San Diego 对J1访问学者(不包括全日制在校学生)购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B里的每次生病或受伤$50,000最高赔付配合三种不同免赔额选项都是满足此标准的最经济实惠的保险计划。UCSD国际教师和学者办公室推荐每次生病或受伤最高赔付$100,000。 根据自己的需要你也可以选择泰安计划B里更高的赔付或者计划A。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['Click here for more benefit level and deductible options'] = "点击查看更多最高赔付和免赔额选择";
l['Deductible (Insured pays before insurance pays)'] = "免赔额(保险赔付前的自付部分)";
l['Plan B ($500,000 per illness or injury), $250 and $500 annual deductible<br />Taian Exclusive!'] = "计划B ($500,000每次生病最高赔付), $250或$500 年度免赔额<br />泰安独家代理";
l['Plan C ($500,000 benefit, $500 annual deductible)'] = "计划C ($500,000 最高赔付), $500 年度免赔额";
l['Business Address: 13747 Fieldshire Terr - Carmel, IN 46074 - USA'] = "公司地址: 13747 Fieldshire Terr - Carmel, IN 46074 - USA";
l['Insurance Provider'] = "保险提供商";
l['$100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays 100%.'] = "$100每次疾病或受伤免赔额 : 每次生病或受伤, 自付$100后保险赔付100%.";
l['$250 or $500 annual deductible: During whole policy period (not over a year), insured pays $250 or $500 before insurance pays 100%.<br />IMG product, Taian Exclusive!'] = "$250 或 $500年度免赔额: 整个保险期间(不超过一年), 自付$250 或 $500后保险赔付100%。<br />IMG产品, 泰安独家代理!";
l['$100 per illness/injury: For each illness or injury, insured pays $100 before insurance pays.'] = "$100每次疾病或受伤免赔额 : 每次生病或受伤, 自付$100后保险开始赔付.";
l['New York Service Center for Chinese Study Fellows - TaiAn International Health Insurance'] = "纽约中国留学服务中心 - 美国泰安国际医疗保险";
l['TaiAn International Health Insurance for AW Insurance'] = "美国泰安国际医疗保险 - AW Insurance";
l['The details above describe the minimum required coverage at Virginia Commonwealth University.  However, the Global Education Office at Virginia Commonwealth University strongly prefers International students and scholars buy Plan A instead of Plan B.'] = "以上是Virginia Commonwealth University对访问学者和国际学生医疗保险的最低标准。 然而，学校Global Education Office强烈推荐访问学者和国际学生购买计划A而不是计划B。";
l['Health Insurance for Northwestern University J2/F2 dependents'] = "符合Northwestern University标准的 J2/F2 医疗保险";
l['Our plans will not meet Northwestern University requirements for students or scholars.  We can provide coverage for student or scholar\'s family members.  Northwestern University families of students and scholars (J2/F2) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness. These requirements are the same as the USDOS. Taian Plan B (with $50,000 benefit per illness or injury, deductible not over $500) and Plan C (with $50,000 benefit, deductible not over $500) are the most affordable plans that meet the requirements. You can also choose Taian Plan B or Plan C with a higher benefit if you need more benefits than your school requires. After submitting an application online successfully, you will receive an Email in a few minutes which contains your insurance ID card and your confirmation letter (Visa Letter). You can send the confirmation letter to your school as proof of insurance.'] = "泰安目前没有保险计划能够满足Northwestern University对访问学者和国际学生保险的要求， 但我们可以为访问学者和国际学生的J2/F2家属提供优质实惠的保险。Northwestern University对访问学者和国际学生的J2/F2家属的保险要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。此标准与国务院的标准一样。泰安保险计划B (每次生病或受伤$50,000最高赔付, 免赔额不超过$500)和计划C ($50,000最高赔付, 免赔额不超过$500)都是满足此标准的最经济实惠的保险计划。根据自己的需要你也可以选择泰安计划B和计划C里更高的赔付。 网上提交申请几分钟后你就会收到Email电子保单，其中含有保险卡(ID Card)和确认信(Visa Letter)。将确认信发给学校证明你已购买满足学校要求的保险。";
l['All Yale full-time students (not scholars) are automatically eligible to receive care at the Yale University Health Center.  This is a very inexpensive (mostly free) way to receive care for:  Immunizations, Annual physical Exam, Treatment of illness or injury, Medications, and Mental Health Services. But, there are many things not covered by Yale Basic coverage and all students are required to have supplemental coverage for hospitalization and specialty care, such as Specialist doctor, Diagnostic X-ray, Lab services like blood work, Imaging - CT, PET, MRI, Outpatient surgery, Emergency room, Ambulance, Hospital fees, and Surgery fees.  While you can purchase a supplemental plan from Yale, the costs are pretty high: For a year, $2,102 for single, $7,824 for 2-person family.  TaiAn Plan B with a $50,000 benefit costs $47.16 per month with a $250 annual deductible (under $600 per year for a student under 25 years old), saving $1,500 per year!'] = "Yale全日制学生(不包括访问学者)自动加入学校免费的基本医疗，包括：疫苗，体检，疾病或受伤，药物和心理健康服务。但是，有很多其他医疗费用学校的基本医疗是不包括的，例如看专科医生，X射线，Lab services，Imaging - CT, PET, MRI,  门诊手术，急诊室，救护车，住院费和手术费。学校要求所有的学生都必须购买附加医疗保险。你可以购买学校附加医疗保险，但很贵。每人每年$2102，加配偶每年$7824。泰安保险计划B是更加经济实惠的选择： 每次生病或受伤最高赔付$50,000和免赔额$250选项，每月保费$47.16 (25岁以下每年$600)，每年节省$1500！";
l['For coverage effective Sept 1, 2014 UC Riverside accepts a plan with a $250,000 benefit level for J1 scholar.  Plan B or Plan C with a $250,000 benefit and annual deductible $250 are the lowest cost plans that meet the standards.  You can contact us for pricing.'] = "Sep. 1 以后UCR将更改对J1访问学者的保险要求，每次生病最高赔付的要求改为$250,000。如果你购买保险生效日期为Sep. 1 以后，可以选择泰安计划B或计划C最高赔付$250,000和年度免赔额 $250选项。更多信息请咨询泰安公司。";
l['Georgia Tech has changed their standards.  We no longer have any plans that meet their standards for F1 or J1 visa holders. This web page is updating soon.'] = "Georgia Tech 更改了学校的保险标准，我们没有满足Georgia Tech对F1或J1新保险标准的保险计划，我们会尽快更改此网页。";
l['Duke has changed their standards for J visa holders.  The plan listed on this page no longer meets their requirements.  We expect to have a new plan available shortly that may meet their requirements.  You can contact us for more details.'] = "Duke 更改了学校对J1访问学者的保险标准，此网页列举的保险计划不能满足新的保险标准。我们近期会有新的保险计划出台，可能可以满足Duke新的标准，届时我们会更新此网页。";
l['J scholars (not enrolled students) have required coverage as follows: 1. Medical benefits of $50,000 per accident or illness; 2. Repatriation of remains of $7,500; 3. Medical evacuation of $10,000; 4. Deductible not over $500 per accident or illness.'] = "对J1访问学者(不包括全日制在校学生)购买校外医疗保险的要求是：1.每次生病或受伤的最高赔付至少为$50,000；2.遗体返送$7,500; 3. 紧急救护$10,000; 4. 每次生病或受伤的免赔额不超过$500。";
l['Enrolled international students are required to have medical benefits of $250,000 per illness or injury.'] = "全日制在校国际学生保险要求每次生病或受伤$250,000最高赔付。";
l['The Global Education Office at Virginia Commonwealth University strongly prefers International students and scholars buy TaiAn Plan A.'] = "学校Global Education Office强烈推荐访问学者和国际学生购买泰安计划A";
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

