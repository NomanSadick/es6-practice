const ages =[23, 77, 88];
const ages2 = [33,11,99];
const allAges = ages.concat(ages2);
const allAges2 = [...ages, 4, ...ages2];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;

const takapoisa = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takapoisa);
console.log(maximum);