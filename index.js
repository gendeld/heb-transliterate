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
  amy: "איימי",
  heather: "הת'ר",
  jean: "ג'ין",
  cheryl: "שריל",
  irene: "איירין",
  jane: "ג'יין",
  rachel: "רייצ'ל",
  tina: "טינה",
  tracy: "טרייסי",
  james: "ג'יימס",
  john: "ג'ון",
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
  dave: "דייב",
  jose: "חוזה",
  douglas: "דאגלס"
};

function transliterate(text) {
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
          .replace(/ph$/g, "ף")
          .replace(/ph/g, "פ")
          .replace(/^ts/g, "צ")
          .replace(/igh/g, "יי")
          .replace(/gh$/g, "")
          .replace(/who/g, "הו")
          .replace(/wh/g, "וו")
          .replace(/^ace/g, "אייס")
          .replace(/ace$/g, "אס")
          .replace(/ace/g, "ייס")
          .replace(/ate$/g, "ייט")
          .replace(/oe$/g, "ואי")
          .replace(/(ao|^oa)/g, "או")
          .replace(/eo/g, "יאו")
          .replace(/co/g, "קו")
          .replace(/ca$/g, "קה")
          .replace(/^cha/g, "צ'")
          .replace(/cha$/g, "כה")
          .replace(/cha/g, "כ")
          .replace(/che$/g, "צ'ה")
          .replace(/che/g, "צ'")
          .replace(/chi/g, "צ'י")
          .replace(/chu$/g, "צ'ו")
          .replace(/chu/g, "צ'א")
          .replace(/(ca|ch|cq|ck)/g, "ק")
          .replace(/jus/g, "ג'ס")
          .replace(/(ce|s)/g, "ס")
          .replace(/(cie|ci|cy)/g, "סי")
          .replace(/(ua$|oa$)/g, "ואה")
          .replace(/oa/g, "וא")
          .replace(/(ew$|^v)/g, "ו")
          .replace(/w/g, "וו")
          .replace(/ia$/g, "יה")
          .replace(/ia/g, "יא")
          .replace(/a$/g, "ה")
          .replace(/^i/g, "אי")
          .replace(/(^ai)/g, "איי")
          .replace(/(ai|ay)/g, "יי")
          .replace(/(?<=[^h])a(?=[^a-z&\{-]|$)/g, "א")
          .replace(/(?<=^|[ -])[ae][iy]/g, "אי")
          .replace(/(?<=^|[ -])oi/g, "אוי")
          .replace(/(?<=^|[ -])[aei]/g, "א")
          .replace(/(?<=^|[ -])[ou]/g, "או")
          .replace(/(iyi|ei)/g, "יי")
          .replace(/(yi|ie$|a[iy])/g, "י")
          .replace(/^ie/g, "איא")
          .replace(/ie/g, "יא")
          .replace(/oi/g, "וי")
          .replace(/(j|g[eiy])/g, "ג'")
          .replace(/[iy]/g, "י")
          .replace(/[ou]/g, "ו")
          .replace(/[bv]/g, "ב")
          .replace(/[cqk]/g, "ק")
          .replace(/g/g, "ג")
          .replace(/d/g, "ד")
          .replace(/h/g, "ה")
          .replace(/z/g, "ז")
          .replace(/l/g, "ל")
          .replace(/m$/g, "ם")
          .replace(/m/g, "מ")
          .replace(/n$/g, "ן")
          .replace(/n/g, "נ")
          .replace(/f$/g, "ף")
          .replace(/[pf]/g, "פ")
          .replace(/r/g, "ר")
          .replace(/t/g, "ט")
          .replace(/[a-z]/gi, "")
    )
    .join(" ");
  return transliteratedText;
}
