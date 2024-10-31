

//retrieve contacts list and the selected contact from local storage
const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
const selectedContactName = localStorage.getItem("selectedContactName");

// find the contact to display based on the selectedContactName
const contact = contacts.find(contact => contact.fullName === selectedContactName);


// display contact details in innerHTML

if (contact) {
    document.getElementById("name").textContent = contact.fullName;
    document.getElementById("email").textContent = contact.email;
    document.getElementById("phone").textContent = contact.phone;
    document.getElementById("address").textContent = contact.address;
}


// make the delete button remove the contact from the contacts list
document.getElementById("delete-btn").addEventListener("click", function() {
    const index = contacts.findIndex(contact => contact.fullName === selectedContactName);
    if (index !== -1) {
        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        window.location.href = "contactList.html";
    }
})


    


// display single contact details in innerHTML




// // Assuming you have an array of contacts
// const contacts = [
//     {
//       id: 1,
//       name: "John Doe",
//       email: "johndoe@example.com",
//       phone: "1234567890"
//     },
//     // ... other contacts
//   ];
  
  // Function to render contact details
//   function renderContactDetails(contactId) {
//     const contact = contacts.find(contact => contact.id === contactId);
//     if (!contact) {
//       return;
//     }
  
//     document.getElementById("name").textContent = contact.name;
//     document.getElementById("email").textContent = contact.email;
//     document.getElementById("phone").textContent = contact.phone;
//   }
  
//   // Function to handle edit button click
//   function handleEditClick() {
//     // Implement your edit functionality here
//     console.log("Edit clicked");
//   }
  
//   // Function to handle delete button click
//   function handleDeleteClick() {
//     // Implement your delete functionality here
//     console.log("Delete clicked");
//   }
  
//   // Function to handle contact selection
//   function handleContactSelection(contactId) {
//     renderContactDetails(contactId);
//   }
  
//   // Example usage: Render contact details for contact with id 1
//   handleContactSelection(1);
