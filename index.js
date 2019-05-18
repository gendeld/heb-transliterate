const ENGLISH_NAME_TO_HEBREW_MAP = {
  a: "איי.",
  b: "בי.",
  c: "סי.",
  d: "די.",
  e: "אי.",
  f: "אף.",
  g: "ג'י.",
  h: "אייג'.",
  i: "איי.",
  j: "ג'יי.",
  k: "קיי.",
  l: "אל.",
  m: "אם.",
  n: "אן.",
  o: "או.",
  p: "פי.",
  q: "קיו.",
  r: "אר.",
  s: "אס.",
  t: "טי.",
  u: "יו.",
  v: "וי.",
  w: "וו.",
  x: "אקס.",
  y: "וואי.",
  z: "זי.",
  michelle: "מישל",
  sarah: "שרה",
  sara: "שרה",
  susan: "סוזן",
  heather: "הת'ר",
  cheryl: "שריל",
  rachel: "רייצ'ל",
  tina: "טינה",
  james: "ג'יימס",
  michael: "מייקל",
  david: "דייוויד",
  richard: "ריצ'רד",
  george: "ג'ורג",
  steven: "סטיבן",
  kevin: "קווין",
  jason: "ג'ייסון",
  matthew: "מת'יו",
  scott: "סקוט",
  stephen: "סטפן",
  peter: "פיטר",
  ryan: "ראיין",
  jose: "חוזה",
  juanita: "חואניטה",
  douglas: "דאגלס",
  rose: "רוז",
  andrea: "אנדריאה",
  louise: "לויז",
  anne: "אן",
  eva: "אווה",
  megan: "מייגן",
  marie: "מרי",
  peggy: "פגי",
  grace: "גרייס",
  carrie: "קרי",
  beatrice: "ביאטריס",
  renee: "רנה",
  vivian: "ויויאן",
  jeanne: "ג'ין",
  keith: "קית'",
  samuel: "סמואל",
  harry: "הארי",
  steve: "סטיב",
  louis: "לואיס",
  aaron: "אהרון",
  howard: "הווארד",
  russell: "ראסל",
  jesse: "ג'סי",
  shawn: "שון",
  sean: "שון",
  javier: "חאבייר",
  ian: "איאן",
  iain: "איאן"
};

module.exports = function transliterate(text) {
  if (!/^[a-zA-Z.\- 0-9]+$/.test(text)) {
    console.warn("This package only transliterates from English");
    return text;
  }
  const lowerCaseText = text.toLocaleLowerCase();
  const words = lowerCaseText.split(/[. ]/g).filter(word => word);
  const transliteratedText = words
    .map(
      word =>
        ENGLISH_NAME_TO_HEBREW_MAP[word] ||
        word
          .replace(/(cce|x)/g, "קס")
          .replace(/ee/g, "י")
          .replace(/a\'a/g, "ע")
          .replace(/(.)\1+/g, "$1")
          .replace(/kh/g, "ח")
          .replace(/(sh|sch)/g, "ש")
          .replace(/th/g, "ת'")
          .replace(/ph$/, "ף")
          .replace(/ph/g, "פ")
          .replace(/^rh/, "ר")
          .replace(/^ts/, "צ")
          .replace(/^eu/, "יו")
          .replace(/igh/g, "יי")
          .replace(/gh$/, "")
          .replace(/who/g, "הו")
          .replace(/wh/g, "וו")
          .replace(/ohn$/, "ון")
          .replace(/ohn/g, "ונ")
          .replace(/ie([ln][aeiou]*$)/, "יא" + "$1")
          .replace(/ene$/, "ין")
          .replace(/^ace/, "אייס")
          .replace(/ace$/, "אס")
          .replace(/ace/g, "ייס")
          .replace(/^chris/, "כריס")
          .replace(/(^.{0,1}[^aeiou])acy$/, "$1" + "ייסי")
          .replace(/acy$/, "$1" + "סי")
          .replace(/^a([^aeiou])e$/, "איי" + "$1")
          .replace(/^a([^aeiou])y$/, "איי" + "$1" + "י")
          .replace(/(^.{0,1}[^aeiou])a(.)e$/, "$1" + "יי" + "$2")
          .replace(/(^.[^aeiou])a(.)y$/, "$1" + "יי" + "$2" + "י")
          .replace(/(^.{0,1}[^aeiou])a(.)ie$/, "$1" + "יי" + "$2" + "י")
          .replace(/ea([^aeiou])$/, "י" + "$1")
          .replace(/^i([rvd])/, "איי" + "$1")
          .replace(/oe$/, "ואי")
          .replace(/(ao|^oa)/g, "או")
          .replace(/eo/g, "יאו")
          .replace(/co/g, "קו")
          .replace(/ca$/, "קה")
          .replace(/^cha/, "צ'")
          .replace(/cha$/, "כה")
          .replace(/cha/g, "כ")
          .replace(/che$/, "צ'ה")
          .replace(/che/g, "צ'")
          .replace(/chi/g, "צ'י")
          .replace(/chu$/, "צ'ו")
          .replace(/chu/g, "צ'א")
          .replace(/(ca|ch|cq|ck)/g, "ק")
          .replace(/jus/g, "ג'ס")
          .replace(/(ce|s)/g, "ס")
          .replace(/(cie|ci|cy)/g, "סי")
          .replace(/(ua$|oa$)/, "ואה")
          .replace(/oa/g, "וא")
          .replace(/(ew$|^v)/, "ו")
          .replace(/w/g, "וו")
          .replace(/ia$/g, "יה")
          .replace(/ia/g, "יא")
          .replace(/a$/, "ה")
          .replace(/^i/, "אי")
          .replace(/(^ai)/g, "איי")
          .replace(/(ai|ay)/g, "יי")
          .replace(/(?<=[^h])a(?=[^a-z&\{-]|$)/g, "א")
          .replace(/(?<=^|[ -])[ae][iy]/g, "אי")
          .replace(/(?<=^|[ -])oi/g, "אוי")
          .replace(/(?<=^|[ -])[aei]/g, "א")
          .replace(/(?<=^|[ -])[ou]/g, "או")
          .replace(/(iyi|ei)/g, "יי")
          .replace(/(yi|ie$|a[iy])/g, "י")
          .replace(/^ie/, "איא")
          .replace(/ie/g, "י")
          .replace(/oi/g, "וי")
          .replace(/(j|g[e])/g, "ג'")
          .replace(/g[iyי]/g, "ג'י")
          .replace(/[iy]/g, "י")
          .replace(/[ou]/g, "ו")
          .replace(/[bv]/g, "ב")
          .replace(/[cqk]/g, "ק")
          .replace(/g/g, "ג")
          .replace(/d/g, "ד")
          .replace(/h/g, "ה")
          .replace(/z/g, "ז")
          .replace(/l/g, "ל")
          .replace(/m/g, "מ")
          .replace(/n/g, "נ")
          .replace(/f$/, "ף")
          .replace(/[pf]/g, "פ")
          .replace(/r/g, "ר")
          .replace(/t/g, "ט")
          .replace(/[a-z]/gi, "")
          .replace(/מ$/, "ם")
          .replace(/נ$/, "ן")
          .replace(/צ$/, "ץ")
          .replace(/כ$/, "ך")
    )
    .join(" ");
  return transliteratedText;
};
