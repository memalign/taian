
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
l['TaiAn Financial'] = "泰安国际医疗保险";
l['URC for injury or illness resulting in hospitalization. Additional $250 deductible for illness without hospitalization'] = "受伤急诊 URC, 急诊住院 URC, 急诊门诊 附加$250免赔额";
l['Home'] = "首页";
l['More details on Global medical:'] = "全球医疗保险的更多信息";
l['Great new look - same TaiAn Financial'] = "泰安的新面貌，希望你依然喜欢";
l['International Student'] = "留学生和访问学者";
l['Global Medical'] = "全球医疗保险";
l['Travel Insurance'] = "旅游和探亲保险";
l['Indiana Residents'] = "印城居民保险";
l['Texas Residents'] = "德州居民保险";
l['Life Insurance'] = "人寿保险和养老金";
l['Annotated Application'] = "填表指南";
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
l['Taian International Health Insurance provides International Student Insurance for US visa students (F1 visa, J1 visa, and M1 visa). Taian Student Insurance Plan A and Plan B meet most school student insurance standards and are more affordable.'] = "泰安国际医疗保险为F1, J1和M1签证的学生提供国际学生医疗保险（访问学者医疗保险）。保险计划A和B符合大多数学校的标准并且更加经济实惠。";
l['Check your school waiver requirements.'] = "点击查看waive学校保险的要求";
l['F2/J2 can buy Patriot Exchange alone (if F1/J1 buys schools plan) or buy with F1/J1'] = "只要F1/J1是在读学生，F2/J2就可以单独或与F1/J1一起购买计划 B ";
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
l['More plan details:'] = "计划的更多信息";
l['Student Health Advantage more benefits'] = "学生保险计划A的更多的利益";
l['Student Health Advantage'] = "";
l['Patriot Exchange Program - Standard'] = "";
l['TaiAn International Students'] = "泰安学生保险";
l['Plan Type'] = "计划类型";
l['Designed specifically for international students (F1,F2,J1,J2). Renewable up to 5 years if 3 months or more are purchased. For those who have been in the US for less than 6 months.'] = "计划专为F1，F2和J1，J2而设计。如果购买3个月以上可以续保至5年。适用于刚来美国不满6个月者。";
l['Designed specifically for international students (F1,F2,J1,J2). Renewable up to 4 years if 3 months or more are purchased. No limitation for how long you have been in the US.'] = "计划专为F1，F2和J1，J2而设计。如果购买3个月以上可以续保至4年。不受来美时间长短的限制。";
l['Maximum Limit'] = "最高赔付";
l['$500,000 lifetime maximum, $300,000 per illness/injury'] = "$500,000 最高赔付， $300,000/疾病或受伤";
l['$5,000,000 lifetime. Options $50,000, $250,000 or $500,000 per illness/injury'] = "$5,000,000 最高赔付。 可选$50,000, $250,000 or $500,000/疾病或受伤";
l['Deductible'] = "免赔额";
l['$100 per illness/injury, $5 co-pay per visit in Student Health Center.'] = "$100/疾病或受伤, $5 co-pay 就诊学生医疗中心 ";
l['Coinsurance'] = "共同保险";
l['No coinsurance in PPO'] = "In PPO 没有共同保险";
l['Hospital Room & Board'] = "住院津贴";
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
l['Accidental Death & Dismemberment'] = "意外伤残";
l['$25,000'] = "";
l['Medical Evacuation'] = "紧急救援";
l['$500,000'] = "";
l['$50,000'] = "";
l['Repatriation of remains'] = "身故遗体送返";
l['Pre-existing conditions'] = "先前的疾病";
l['After 12 months of continuous coverage'] = "免责期12个月";
l['More on Patriot Exchange'] = "学生保险计划B(Patriot Exchange)的更多信息";
l['Patriot Exchange Group plan available for groups of 2 or more'] = "两人或两人以上享受团体优惠";
l['Patriot Exchange Basic Plan available at a lower cost (may not meet your visa requirements - ask us!)'] = "Patriot Exchange Basic Plan 价格更低， 但可能不符合你的鉴证要求 - 请咨询我们！";
l['Other available options include: travel protection for baggage and valuables, legal assistance, personal liability coverage, adventure sports coverage'] = "其他选项包括：行李和贵重物品丢失，法律援助，个人责任保险，冒险体育保险";
l['Full Brochures'] = "完全手册";
l['Patriot Exchange Brochure'] = "学生保险计划B(Patriot Exchange)完全手册";
l['Patriot Exchange Group Brochure'] = "学生保险团体计划B(Patriot Group Exchange)完全手册";
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
l['Platinum is best for those wanting the best coverage or considering having a baby'] = "铂金计划是最全面的计划，包括生育保险和新生儿护理";
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
l['Non-US citizens coming to the US to have a baby.  For maternity coverage you must purchase before becoming pregnant.'] = "非美国公民赴美生子， 产科保险必须在怀孕之前购买。 详见完全手册。";
l['Buy Global Medical Insurance'] = "购买全球医疗保险";
l['Buy Global Medical (Gold Plan)'] = "购买全球医疗保险（金质计划）";
l['In-PPO: deductible 50% waived (up to $2500). No coinsurance.<br />Non-PPO: 20% of next $5000 expenses after deductible'] = "In PPO 免赔额减半（至$2500)，没有共同保险<br />Non-PPO 免赔额之后，20%共同保险至$5000总消费";
l['In-PPO: deductible 50% waived (up to $2500). No coinsurance<br />Non-PPO: 10% of next $5000 expenses after deductible'] = "In PPO 免赔额减半（至$2500)，没有共同保险<br />Non-PPO 免赔额后10%共同保险至$5000总消费";
l['$10,000 per year - $50,000 max, after 12 month of coverage'] = "$10,000/期，最高$50,000, 免责期12个月";
l['Available up to age 74'] = "适合于年龄0-74岁";
l['Plan'] = "计划";
l['Plan Highlights'] = "计划的突出优势";
l['Who the plan is designed for'] = "哪些人适合该保险";
l['Patriot Travel Medical Insurance'] = "爱国者旅游医疗保险";
l['Coverage for individuals and dependents'] = "为个人和家属提供保险";
l['Two plan designs - one for U.S. citizens and one for non-U.S. citizens traveling outside their home country'] = "两种计划分别为美国公民和非美国公民在本国境外旅游而设计";
l['Available in daily and monthly rates'] = "按日或月购买保险";
l['Renewable up to 24 months if three months or more are purchased'] = " 如果购买3个月以上可续保至24 个月";
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
l['incidental home country coverage: up to cumulative two weeks'] = "回国： 保险2个星期";
l['Terrorism coverage: up to 50,000 lifetime maximum'] = "恐怖伤害： 最高$50,000 ";
l['Dependent Child'] = "未成年子女";
l['Buy Student Health Advantage'] = "购买计划 A (Student Health Advantage)";
l['Explore other choices on your own.'] = " 自己查看更多的计划";
l['Email us: chris@taianfinancial.com'] = "电邮： chris@taianfinancial.com";
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
l['Global Medical (Gold Plan) $500 deductible'] = "金质计划 - 免赔额$500范例";
l['Global Medical (Platinum Plan) $1000 deductible'] = "铂金计划 - 免赔额$1000范例";
l['Male'] = "男";
l['Female'] = "女";
l['Complete Brochure'] = "完全手册";
l['Buy Global Medical (Silver Plan)'] = "购买全球医疗保险(银质计划)";
l['Buy Global Medical (Platinum Plan)'] = "购买全球医疗保险(铂金计划)";
l['TaiAn Global Medical'] = "泰安全球医疗保险";
l['Individual Deductible'] = "个人免赔额";
l['Family Deductible'] = "家庭免赔额";
l['3 times the individual'] = "三倍于个人免赔额";
l['2 times the individual'] = "两倍于个人免赔额";
l['Lifetime Max limit'] = "最高赔付限额";
l['$5,000,000 per individual'] = "每人$5,000,000";
l['$8,000,000 per individual'] = "每人$8,000,000";
l['Treatment inside the U.S.'] = "美国境内就医";
l['Treatment outside the U.S.'] = "美国境外就医";
l['Subject to deductible. No coinsurance'] = "付免赔额，无共同保险";
l['Intensive care unit'] = "重症监护";
l['$1,500/day, 180 day /event'] = "$1,500/天, 180天/次";
l['Hospitalization/room & board'] = "住院津贴";
l['In U.S. average semi-private room rate. Outside of U.S. URC of private room rate (not exceed 150% semi-private). All subject to $600/day, 240 day max'] = "美国境内保证普通病房费用，美国境外高级病房（费用不超过普通病房的150%）。$600/天，最多240天";
l['In U.S. average semi-private room rate. Outside of U.S. URC of private room rate (not exceed 150% semi-private).'] = "美国境内保证普通病房费用，美国境外高级病房（费用不超过普通病房的150%）。";
l['Private room rate'] = "高级病房";
l['Local Ambulance'] = "救护车";
l['$1500/event - not subject to deductible or coinsurance'] = "$1500/次。无免赔额，无共同保险";
l['Child Wellness (under 18 y/o)'] = "儿童保健(18岁以下)";
l['3 visit/period, $70 max/period. Available after 12 months of coverage'] = "3次/期, $70/期. 免责期12个月";
l['$200/period, not subject to deductible or coinsurance. Available after 12 months of coverage'] = "$200/期, 无免赔额，无共同保险。 免责期12个月。";
l['$400/period, not subject to deductible or coinsurance. Available after 6 months of coverage'] = "$400/期, 无免赔额，无共同保险。 免责期6个月。";
l['Adult Wellness'] = "成人保健";
l['NA'] = "不包括";
l['$250/period, not subject to deductible or coinsurance.  Available for those at least 30 years old after 12 months of coverage'] = "30岁以上，$250/期。 无免赔额，无共同保险。 免责期12个月";
l['$500/period, not subject to deductible or coinsurance. Available for those at least 18 years old after 6 months of coverage'] = "$500/期。无免赔额，无共同保险。 免责期6个月";
l['Emergency Dental (accident)'] = "急诊牙科";
l['$1,000/period'] = "$1,000/期";
l['Non-emergency Dental'] = "非急诊牙科";
l['$750/year'] = "$750/年";
l['Vision'] = "眼科";
l['Exams-up to $100. Materials-up to $150 per 24 months'] = "检查$100，材料$150/24月";
l['Surgery'] = "手术";
l['Emergency Evacuation'] = "紧急救援";
l['$50,000 per period, not subject to deductible or coinsurance'] = "$50,000/期, 无免赔额，无共同保险";
l['Up to the maximum limit, not subject to deductible or coinsurance'] = "至最高赔付，无免赔额，无共同保险";
l['$25,000 per insured, not subject to deductible or coinsurance'] = "$25,000/人，无免赔额，无共同保险";
l['$50,000 per insured, not subject to deductible or coinsurance'] = "$50,000/人，无免赔额，无共同保险";
l['Mental/Nervous'] = "精神健康";
l['Out-patient only, after 12 month of coverage'] = "仅保门诊，免责期12个月";
l['$50,000 max, after 12 month of coverage'] = "$50,000，免责期12个月";
l['May have limited coverage after 24 months or be excluded at time of underwriting'] = "24个月以后有限的保项";
l['May be covered same as any illness or excluded at time of underwriting'] = "如果申请时没被拒绝视同一般的疾病";
l['Optional Rider (cost $2500 per year) - $50,000 lifetime max. Max of $5000 for normal delivery, $7500 for C-section. $200 child wellness for first 12 month. new born care & congenital disorders max of $250,000 for the first 31 days (benefits reduced by 50% for births that occur in the 11th or 12th month of coverage)'] = "选加项(每年$2500) - $50,000 最高赔付。自然生产最高$5000，破腹产$7500。 婴儿第一年健康检查$200。第一个月的新生儿护理和先天性疾病最高$250,000(如果新生儿在买保险后的第十一个月或第十二个月出生，赔付减少50%)";
l['Maternity is covered same as any illness for any birth that occurs after 10 months of coverage- $1000 additional deductible, $50,000 lifetime max. $200 child wellness for the first 12 months. new born care & congenital disorders max of $250,000 for the first 31 days'] = "如果新生儿在购买保险十个月后出生，孕期检查，生产和新生儿护理将视同疾病 - $1000 附加免赔额，$50,000 最高赔付。婴儿第一年保健$200。第一个月的新生儿护理和先天性疾病最高$250,000";
l['Monthly Rate'] = "月费";
l['Brochure'] = "手册";
l['Taian Travel Insurance is designed for anyone (U.S. and non-U.S. citizens) traveling out of their home country, regardless of visa requirements.  Cost starts at about $1/day.  Purchase 5 days - 1 year, and renewable up to 2 years if 3 months are purchased initially.'] = "泰安国际旅游医疗保险适用于任何人出国旅游任何国家。保险期限5天至2年。购买三个月以后可以续保至两年。可以按天数购买， 每天$1起。";
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
l['No coinsurance outside of U.S.'] = "美国和加拿大境外： 没有共同保险";
l['In-PPO 90% to $5,000, then 100%<br />Out-PPO, 80% to $5,000 then 100%'] = "In-PPO 90% 至 $5,000总消费, 然后100%<br />Out-PPO, 80% 至 $5,000总消费，然后100%";
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
l['Ages 70-79 have $100,000 coverage (with $1,000 deductible the cost is $355.20 per month)'] = "70-79岁选择免赔额$1000可获赔付$10,000, 月费$355.20";
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

