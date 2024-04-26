let guestlist = ["Abdullah","Ali","Hamza","Ahmed"];

let cantcome = guestlist[2];

console.log(cantcome, "Can't Come");

guestlist.splice(2, 1, "Talha");

guestlist.forEach(invitation => console.log(`Salam ${invitation}, would you like to dinner with me?`))