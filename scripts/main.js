// Wait until the page is fully loaded
window.addEventListener("load", () => {
    // Fade out the splash screen
    const splash = document.getElementById("splash-screen");
    splash.style.opacity = 0;
    splash.style.transition = "opacity 5s ease";

    // After the fade-out, hide the splash screen and show the main content
    setTimeout(() => {
        splash.style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.getElementById("main-content").style.opacity = 1; // Fade in main content
    }, 2000); // Match transition duration for smoothness
    ``
    
});

// add contact button
const addContact = document.getElementById("addContact");
function showContact() {
    window.location.href = "contacts.html";
}
addContact.addEventListener("click", showContact);

const viewContact = document.getElementById("viewContact");
function showContactList() {
    window.location.href = "contactList.html";
}
viewContact.addEventListener("click", showContactList);