let personName = "talha Shaikh";
//LowerCase Text
console.log(personName.toLowerCase);
console.log(personName.toUpperCase);
//UpperCase Text
console.log(personName.replace(/\b\w/g, (per) => personName.toUpperCase()));
//TitleCase Text
