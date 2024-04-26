// Creating a Guest List Array
let guest_list = ["Umar","Hamza","Abudullah","Usman"];

// Making a Variable For Those Who Can't Come
let dontcome = guest_list[0];

// Print The Name Of The Guest Who Can't Come
console.log(dontcome,"Can't Come");

// Add Or Remove Values From Guest list Array
guest_list.splice(0,1,"Amir");

// Message Print For Bigger Tables
console.log("Good News! We Have Found Bigger Table");
 
// Adding a New Guest At Starting Index Of an Array
guest_list.unshift("Ali");

// Adding A Guest At Ending Index Of an Array
guest_list.push("Zaid");

// Get a Middle Index Of Our Guest List Array
let middleIndex: number = Math.floor(guest_list.length / 2 );

// Adding a New Guest To Middle Index Of Array
guest_list.splice(middleIndex, 0, "Faraz") 

// Print Message OF Updated List
console.log("Updated Version Of Our Guest List");

// Sendnig an Invitaion Message To Our Guests One By One By Their Name
guest_list.forEach(oneguest => console.log(`Salam ${oneguest}, Would You Like To Dinner With Me?`));


