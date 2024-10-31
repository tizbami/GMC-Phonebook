// Retrieve contacts list and the selected contact name from localStorage
const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
const selectedContactName = localStorage.getItem("selectedContactName");

// Find the contact to edit based on the saved name
const contact = contacts.find(contact => contact.fullName === selectedContactName);

// Populate the form fields if contact exists
if (contact) {
    document.getElementById("contactName").value = contact.fullName;
    document.getElementById("contactPhone").value = contact.phone;
    document.getElementById("contactEmail").value = contact.email;
    document.getElementById("contactAddress").value = contact.address;
}

// Handle updating the contact
const updateContactForm = document.getElementById("updateContactForm");

const updateContact = (e) => {
    e.preventDefault();

    const fullName = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const address = document.getElementById("contactAddress").value.trim();

    if (fullName && phone && email && address) {
        // Update the contact details in the contacts array
        const index = contacts.findIndex(contact => contact.fullName === selectedContactName);
        if (index !== -1) {
            contacts[index] = { fullName, phone, email, address };
            localStorage.setItem("contacts", JSON.stringify(contacts)); // Save updated contacts list
            window.location.href = "contactList.html"; // Redirect back to contact list page
        }
    } else {
        alert("All fields are required");
    }
};

updateContactForm.addEventListener("submit", updateContact);
