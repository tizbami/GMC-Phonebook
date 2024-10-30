
const contactElem = document.getElementById("createContactForm");

console.log(contactElem);

// create local storage
const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
console.log(contacts);
const createContact = (e) => {
    e.preventDefault();
   let fullName = contactElem.names.value.trim();
   let phone = contactElem.phone.value.trim();
   let email = contactElem.email.value.trim();
   let address = contactElem.address.value.trim();
   if(fullName && phone && email && address){
    const contact = {fullName, phone, email, address};
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    
    //cleard form
    contactElem.names.value = "";
    contactElem.phone.value = "";
    contactElem.email.value = "";
    contactElem.address.value = "";
   }else{
    alert("All fields are required");
   };

}
contactElem.addEventListener("submit", createContact)
    



// console.log(name, phone, email, address);

// //  Create contacts, UI and Logic
// document.addEventListener("DOMContentLoaded", function() {
//     // const createContactForm = document.querySelector(".container");
//     const form = document.querySelector("form");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const name = document.getElementById("name").value;
//         const phone = document.getElementById("phone").value;
//         const email = document.getElementById("email").value;
//         const address = document.getElementById("address").value;

//         console.log(name, phone, email, address);
// });
     
// });
