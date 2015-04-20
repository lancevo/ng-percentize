
/* convert a fractional to a pretty percentage with locale support 
  percentify(155.00,2,2,'de') ; // 15.500,00
*/

function percentify(number, maxFractionDigits, minFractionDigits, languageTag) {
    if (isNaN(number)) {
        return 'NaN';
    }
    number = number * 100;

    languageTag = languageTag || 'en'; // i.e:  de, it, fr, vi

    if (typeof minFractionDigits ==='undefined') {
        minFractionDigits = 0;
    }
    if (typeof maxFractionDigits ==='undefined') {
        maxFractionDigits = 2;
    }
    return number.toLocaleString(languageTag,{minimumFractionDigits: minFractionDigits, maximumFractionDigits:maxFractionDigits});
};
