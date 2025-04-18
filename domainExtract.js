// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
    const startDelete = url.replaceAll('http://', '').replaceAll('www.', '').replaceAll('https://', '');
    const dotIndex = startDelete.indexOf('.');
    const dotSlice = startDelete.slice(0, dotIndex)
    return dotSlice;
}
//
function domainName2(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};
//
function domainName3(url) {
    return url.replace(/.+\/\/|www.|\..+/g, '')
}


console.log(domainName("http://google.com"), "-- google");
console.log(domainName("http://google.co.jp"), "-- google");
console.log(domainName("www.xakep.ru"), "-- xakep");
console.log(domainName("https://youtube.com"), "-- youtube");