
// give function to the search button

// const contactElem = document.getElementById("createContactForm");

const contactsList = JSON.parse(localStorage.getItem("contacts")) || [];
console.log("data", contactsList);

// const contactsList = [
//     {
//         fullName: contactElem.names.value,
//         phone: contactElem.phone.value
//     }];

// create a function to loop through each contact in the contactsList Array, and render them to the contact list innerHTML li

const contactListElem = document.getElementById('contactListBox');

function displayContacts() {

    // sort the contact list alphabetically from the localStorage
    contactsList.sort((a, b) => (a.fullName || "").localeCompare(b.fullName || ""));
    


    // clear any existing contacts
    contactListElem.innerHTML = '';
    
    contactsList.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.fullName}`;
        li.classList.add('contactListStyle'); // Add a class for styling or targeting
        contactListElem.appendChild(li);
    // create a function to accesseach contact and display them in a different page

    li.addEventListener('click', () => {
        localStorage.setItem('selectedContactName', contact.fullName);
        window.location.href = `render.html`;
    });

    });

    



}
displayContacts();

// search through the contact list and render only the contacts that match the search
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value;
    const filteredContacts = contactsList.filter(contact =>
        contact.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    contactListElem.innerHTML = '';
    filteredContacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.fullName}`;
        li.classList.add('contactListStyle'); // Add a class for styling or targeting
        contactListElem.appendChild(li);

        // Add event listener to the new li element
        li.addEventListener('click', () => {
            localStorage.setItem('selectedContactName', contact.fullName);
            window.location.href = `render.html`;
        });

    });
    if (filteredContacts.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No contacts found';
        contactListElem.appendChild(li);
    }
});




    // function renderContacts(filter = '') {
    //     const contactList = document.getElementById('contactListBox');
    //     contactList.innerHTML = ''; // Clear existing contacts
    
    //     // Filter contacts based on the search input
    //     const filteredContacts = contactsList.filter(contact =>
    //         contact.name.toLowerCase().includes(filter.toLowerCase())
    //     );
    
    //     // Render filtered contacts
    //     filteredContacts.forEach(contact => {
    //         const li = document.createElement('li');
    //         li.textContent = `${contact.name}: ${contact.phone}`;
    //         li.classList.add('contactListStyle'); // Add a class for styling or targeting
    //         contactList.appendChild(li);
    //     });
    
    //     // If there are no matches, show a message
    //     if (filteredContacts.length === 0) {
    //         const li = document.createElement('li');
    //         li.textContent = 'No contacts found';
    //         contactList.appendChild(li);
    //     }
    // }
    
    // // Event listener for the search input
    // document.getElementById('search').addEventListener('input', function () {
    //     const searchTerm = this.value;
    //     renderContacts(searchTerm); // Re-render contacts based on the search term
    // });
    
    // // Optional: Function to scroll to the first matching contact
    // function scrollToContact(searchTerm) {
    //     const contactItems = document.querySelectorAll('.contact-item');
    //     for (const item of contactItems) {
    //         if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
    //             item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    //             item.style.backgroundColor = '#064fae'; // Highlight the found item
    //             setTimeout(() => {
    //                 item.style.backgroundColor = ''; // Remove highlight after a brief moment
    //             }, 2000);
    //             break; // Stop after the first match
    //         }
    //     }
    // }
    
    // // Modify the event listener to scroll to the first matching contact
    // document.getElementById('search').addEventListener('input', function () {
    //     const searchTerm = this.value;
    //     renderContacts(searchTerm); // Re-render contacts
    //     scrollToContact(searchTerm); // Scroll to the first matching contact
    // });


    