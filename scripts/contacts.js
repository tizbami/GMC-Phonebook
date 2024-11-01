
const contactElem = document.getElementById("createContactForm");

// create local storage
const contacts = JSON.parse(localStorage.getItem("contacts")) || [];


// prevent the enter key from submitting
const inputFields = document.querySelectorAll('#createContactForm input');

inputFields.forEach((field, index) => {
    field.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextField = inputFields[index + 1];
            if (nextField) {
                nextField.focus();
            }
        }
    });
});

const createContact = (e) => {
    e.preventDefault();
   let fullName = contactElem.names.value.trim();
   let phone = contactElem.phone.value.trim();
   let email = contactElem.email.value.trim();
   let address = contactElem.address.value.trim();

   // Validate email address
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
       alert("Invalid email address");
       return;
   }

   // Validate phone number
   if (!/^\d+$/.test(phone)) {
       alert("Phone number must be numeric");
       return;
   }

   if(fullName && phone && email && address){
    const contact = {fullName, phone, email, address};
    alert("Contact added");
    // add contact
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
