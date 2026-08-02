import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import s6 from "../images/s6.jpg";
import s7 from "../images/s7.jpg";
import s8 from "../images/s8.jpg";
import s9 from "../images/s9.jpg";
import s10 from "../images/s10.jpg";
import s11 from "../images/s11.jpg";
import s12 from "../images/s12.jpg";

export const products = [
  {
    id: 1,
    name: "طقم فحمات فرامل أمامية سيراميك",
    nameEn: "Ceramic Front Brake Pads Set",
    category: "فرامل",
    categoryEn: "Brakes",
    brand: "Toyota",
    origin: "اليابان",
    originEn: "Japan",
    oemNumber: "04465-02220",
    models: ["Corolla 2015-2023", "Camry 2018-2022"],
    priceValue: 850,
    image: s1,
    description:
      "فحمات فرامل عالية الأداء مصنوعة من تكنولوجيا السيراميك اليابانية، تضمن أقصى درجة من الأمان ومقاومة للحرارة العالية مع خلو تام من الأصوات.",
    descriptionEn:
      "High-performance brake pads made with Japanese ceramic technology, ensuring maximum safety and high heat resistance with complete noise-free operation.",
    inStock: true
  },

  {
    id: 2,
    name: "فلتر زيت محرك هيدروليكي الأصلي",
    nameEn: "Original Hydraulic Engine Oil Filter",
    category: "فلاتر",
    categoryEn: "Filters",
    brand: "Hyundai",
    origin: "كوريا الجنوبية",
    originEn: "South Korea",
    oemNumber: "26300-35505",
    models: ["Elantra 2016-2022", "Tucson 2017-2023"],
    priceValue: 240,
    image: s2,
    description:
      "فلتر زيت ذو قدرة ترشيح فائقة، يحمي أجزاء المحرك الدقيقة من شوائب الكربون والراسب المعدنية مما يطيل العمر الافتراضي للمحرك.",
    descriptionEn:
      "An oil filter with superior filtration capacity, protecting delicate engine parts from carbon deposits and metal residue, extending the engine's lifespan.",
    inStock: true
  },

  {
    id: 3,
    name: "بطارية سيارة جافة 70 أمبير Varta",
    nameEn: "Varta 70 Amp Dry Car Battery",
    category: "كهرباء",
    categoryEn: "Electrical",
    brand: "Chevrolet",
    origin: "ألمانيا",
    originEn: "Germany",
    oemNumber: "VR-70-AGM",
    models: ["Optra 2010-2018", "Cruze 2012-2017"],
    priceValue: 3400,
    image: s3,
    description:
      "بطارية تعمل بتقنية AGM المتطورة، تمنح قوة بدء تشغيل عالية جداً في أصعب الظروف المناخية مع ضمان عامين ضد عيوب الصناعة.",
    descriptionEn:
      "A battery built with advanced AGM technology, delivering very high starting power in the toughest weather conditions, backed by a two-year manufacturing warranty.",
    inStock: true
  },

  {
    id: 4,
    name: "مساعدين غاز أمامي طقم كامل",
    nameEn: "Front Gas Shock Absorbers Full Set",
    category: "تعليق",
    categoryEn: "Suspension",
    brand: "Nissan",
    origin: "اليابان",
    originEn: "Japan",
    oemNumber: "E4302-3BG0A",
    models: ["Sunny N17 2013-2024", "Sentra 2015-2022"],
    priceValue: 2950,
    image: s4,
    description:
      "مساعدين ضغط غاز وزيت لتوفير أقصى ثبات للسيارة على السرعات العالية والمنحنيات مع امتصاص الصدمات في الطرق غير الممهدة.",
    descriptionEn:
      "Gas and oil pressure shock absorbers providing maximum vehicle stability at high speeds and on curves, with excellent shock absorption on rough roads.",
    inStock: true
  },

  {
    id: 5,
    name: "طقم شمعات إشعال إيريديوم NGK",
    nameEn: "NGK Iridium Spark Plugs Set",
    category: "كهرباء",
    categoryEn: "Electrical",
    brand: "Kia",
    origin: "اليابان",
    originEn: "Japan",
    oemNumber: "SILZKR7B11",
    models: ["Cerato 2014-2021", "Sportage 2016-2022"],
    priceValue: 1200,
    image: s5,
    description:
      "بوجيهات إيريديوم أصلية تضمن شرارة إشعال قوية وسريعة وتحسين استهلاك البنزين واستجابة أفضل للدواسة.",
    descriptionEn:
      "Original iridium spark plugs ensuring a strong, fast ignition spark, improved fuel consumption, and better throttle response.",
    inStock: true
  },

  {
    id: 6,
    name: "مجموعة سير وجنزير تايمنج كاملة",
    nameEn: "Complete Timing Chain & Belt Set",
    category: "محرك",
    categoryEn: "Engine",
    brand: "Toyota",
    origin: "اليابان",
    originEn: "Japan",
    oemNumber: "13568-19045",
    models: ["Corolla 2008-2015"],
    priceValue: 2400,
    image: s6,
    description:
      "طقم كاتينة محرك يشمل الجنزير، الترس، البلي، والشداد الهيدروليكي لضبط توقيت المحرك بدقة عالية وبدون أي ضوضاء.",
    descriptionEn:
      "An engine timing kit including the chain, gears, guides, and hydraulic tensioner for precise, silent engine timing adjustment.",
    inStock: false
  },

  {
    id: 7,
    name: "رديتر تبريد ألومنيوم مقاس كامل",
    nameEn: "Full-Size Aluminum Cooling Radiator",
    category: "تبريد",
    categoryEn: "Cooling",
    brand: "Chevrolet",
    origin: "تركيا",
    originEn: "Turkey",
    oemNumber: "96539640",
    models: ["Lanos 2005-2012", "Aveo 2007-2011"],
    priceValue: 1650,
    image: s7,
    description:
      "رديتر مصنوع بالكامل من الألومنيوم عالي التوصيل الحراري، يضمن تبريد فعال للمحرك حتى في درجات الحرارة المرتفعة صيفاً.",
    descriptionEn:
      "A radiator built entirely from high thermal conductivity aluminum, ensuring effective engine cooling even in high summer temperatures.",
    inStock: true
  },

  {
    id: 8,
    name: "طرمبة بنزين كهربائية بالطفاية",
    nameEn: "Electric Fuel Pump with Sender Unit",
    category: "محرك",
    categoryEn: "Engine",
    brand: "Nissan",
    origin: "اليابان",
    originEn: "Japan",
    oemNumber: "17040-ET025",
    models: ["Sunny 2013-2019", "Sentra 2015-2020"],
    priceValue: 1180,
    image: s8,
    description:
      "طرمبة بنزين أصلية بضغط ثابت ومستقر لضمان توصيل وقود منتظم للمحرك وأداء سلس بدون تقطيع.",
    descriptionEn:
      "An original fuel pump with stable, consistent pressure, ensuring regular fuel delivery to the engine and smooth performance without hesitation.",
    inStock: true
  },

  {
    id: 9,
    name: "طقم دركسون كامل مع الجلبة",
    nameEn: "Complete Steering Rack Set with Boot",
    category: "تعليق",
    categoryEn: "Suspension",
    brand: "Hyundai",
    origin: "كوريا الجنوبية",
    originEn: "South Korea",
    oemNumber: "56500-2H000",
    models: ["Accent 2011-2017", "i10 2014-2019"],
    priceValue: 3200,
    image: s9,
    description:
      "علبة دركسون هيدروليكية أصلية بدقة استجابة عالية لضمان تحكم آمن وسلس في اتجاه السيارة.",
    descriptionEn:
      "An original hydraulic steering rack with high response accuracy, ensuring safe and smooth control of the vehicle's direction.",
    inStock: true
  },

  {
    id: 10,
    name: "كمبروسر تكييف أصلي",
    nameEn: "Original AC Compressor",
    category: "تكييف",
    categoryEn: "AC & Cooling",
    brand: "Kia",
    origin: "كوريا الجنوبية",
    originEn: "South Korea",
    oemNumber: "97701-2K001",
    models: ["Sportage 2011-2016", "Sorento 2013-2018"],
    priceValue: 4500,
    image: s10,
    description:
      "كمبروسر تكييف بضمان سنة كاملة، يوفر تبريد قوي وسريع مع أقل استهلاك ممكن لطاقة المحرك.",
    descriptionEn:
      "An AC compressor with a full one-year warranty, providing powerful and fast cooling with minimal drain on engine power.",
    inStock: true
  },

  {
    id: 11,
    name: "دسكات فرامل خلفية مجلخة",
    nameEn: "Machined Rear Brake Discs",
    category: "فرامل",
    categoryEn: "Brakes",
    brand: "Toyota",
    origin: "الصين",
    originEn: "China",
    oemNumber: "42431-02240",
    models: ["Corolla 2015-2023", "Yaris 2017-2022"],
    priceValue: 980,
    image: s11,
    description:
      "دسكات فرامل خلفية عالية الجودة مقاومة للتشقق الحراري، مناسبة للاستخدام اليومي والطرق السريعة.",
    descriptionEn:
      "High-quality rear brake discs resistant to heat cracking, suitable for daily use and highway driving.",
    inStock: true
  },

  {
    id: 12,
    name: "فلتر هواء رياضي عالي التدفق",
    nameEn: "High-Flow Sport Air Filter",
    category: "فلاتر",
    categoryEn: "Filters",
    brand: "Chevrolet",
    origin: "ألمانيا",
    originEn: "Germany",
    oemNumber: "96536852",
    models: ["Optra 2010-2018", "Cruze 2012-2017"],
    priceValue: 310,
    image: s12,
    description:
      "فلتر هواء رياضي قابل للغسيل وإعادة الاستخدام، يحسن تدفق الهواء للمحرك ويرفع كفاءة الاحتراق.",
    descriptionEn:
      "A washable, reusable sport air filter that improves engine airflow and boosts combustion efficiency.",
    inStock: false
  }
];

export const CATEGORIES = [
  "الكل",
  "فرامل",
  "فلاتر",
  "كهرباء",
  "محرك",
  "تعليق",
  "تبريد",
  "تكييف"
];

export const BRANDS = [
  "الكل",
  "Toyota",
  "Hyundai",
  "Chevrolet",
  "Nissan",
  "Kia"
];

export default products;