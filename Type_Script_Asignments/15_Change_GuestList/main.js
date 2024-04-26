var guestlist = ["Abdullah", "Ali", "Hamza", "Ahmed"];
var cantcome = guestlist[2];
console.log(cantcome, "Can't Come");
guestlist.splice(2, 1, "Talha");
guestlist.forEach(function (invitation) { return console.log("Salam ".concat(invitation, ", would you like to dinner with me?")); });
