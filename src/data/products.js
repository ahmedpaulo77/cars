export const products = [
  {
    id: 1,
    name: "طقم فحمات فرامل أمامية سيراميك",
    category: "فرامل",
    brand: "Toyota",
    origin: "اليابان",
    oemNumber: "04465-02220",
    models: ["Corolla 2015-2023", "Camry 2018-2022"],
    price: "850 جنيه",
    image: "https://images.unsplash.com/photo-1600706432520-22c7104b281f?auto=format&fit=crop&q=80&w=600",
    description: "فحمات فرامل عالية الأداء مصنوعة من تكنولوجيا السيراميك اليابانية، تضمن أقصى درجة من الأمان ومقاومة للحرارة العالية مع خلو تام من الأصوات.",
    inStock: true
  },
  {
    id: 2,
    name: "فلتر زيت محرك هيدروليكي الأصلي",
    category: "فلاتر",
    brand: "Hyundai",
    origin: "كوريا الجنوبية",
    oemNumber: "26300-35505",
    models: ["Elantra 2016-2022", "Tucson 2017-2023"],
    price: "240 جنيه",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600",
    description: "فلتر زيت ذو قدرة ترشيح فائقة، يحمي أجزاء المحرك الدقيقة من شوائب الكربون والراسب المعدنية مما يطيل العمر الافتراضي للمحرك.",
    inStock: true
  },
  {
    id: 3,
    name: "بطارية سيارة جافة 70 أمبير Varta",
    category: "كهرباء",
    brand: "Chevrolet",
    origin: "ألمانيا",
    oemNumber: "VR-70-AGM",
    models: ["Optra 2010-2018", "Cruze 2012-2017"],
    price: "3400 جنيه",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=600",
    description: "بطارية تعمل بتقنية AGM المتطورة، تمنح قوة بدء تشغيل عالية جداً في أصعب الظروف المناخية مع ضمان عامين ضد عيوب الصناعة.",
    inStock: true
  },
  {
    id: 4,
    name: "مساعدين غاز أمامي طقم كامل",
    category: "تعليق",
    brand: "Nissan",
    origin: "اليابان",
    oemNumber: "E4302-3BG0A",
    models: ["Sunny N17 2013-2024", "Sentra 2015-2022"],
    price: "2950 جنيه",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600",
    description: "مساعدين ضغط غاز وزيت لتوفير أقصى ثبات للسيارة على السرعات العالية والمنحنيات مع امتصاص الصدمات في الطرق غير الممهدة.",
    inStock: true
  },
  {
    id: 5,
    name: "طقم شمعات إشعال إيريديوم NGK",
    category: "كهرباء",
    brand: "Kia",
    origin: "اليابان",
    oemNumber: "SILZKR7B11",
    models: ["Cerato 2014-2021", "Sportage 2016-2022"],
    price: "1200 جنيه",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=600",
    description: "بوجيهات إيريديوم أصلية تضمن شرارة إشعال قوية وسريعة وتحسين استهلاك البنزين واستجابة أفضل للدواسة.",
    inStock: true
  },
  {
    id: 6,
    name: "مجموعة سير وجنزير تايمنج كاملة",
    category: "محرك",
    brand: "Toyota",
    origin: "اليابان",
    oemNumber: "13568-19045",
    models: ["Corolla 2008-2015"],
    price: "2400 جنيه",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600",
    description: "طقم كاتينة محرك يشمل الجنزير، الترس، البلي، والشداد الهيدروليكي لضبط توقيت المحرك بدقة عالية وبدون أي ضوضاء.",
    inStock: false
  }
];

export const CATEGORIES = ["الكل", "فرامل", "فلاتر", "كهرباء", "محرك", "تعليق"];
export const BRANDS = ["الكل", "Toyota", "Hyundai", "Chevrolet", "Nissan", "Kia"];

export default products;