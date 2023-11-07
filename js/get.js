// Function to fetch the API data and display the first 5 users.
async function fetchAndDisplayUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const userDetailsDiv = document.getElementById("userDetails");

    // Get the first 5 users.
    const first5Users = data.users.slice(0, 5);

    // Create HTML content for the user details.
    const userHTML = first5Users
      .map(
        (user) => `
              <div class="user-card">
              <div class="user-details">
                  <h2>${user.firstName} ${user.lastName}</h2>
                  <p>Age: ${user.age}</p>
                  <p>Email: ${user.email}</p>
                  <p>Phone: ${user.phone}</p>
                  </div>
                  <div class="user-edit-button">
                  <a href="editnow.html" class="edit-button">Edit Now</a>
                </div>                
              </div>
          `
      )
      .join("");

    // Insert the HTML content into the userDetailsDiv.
    userDetailsDiv.innerHTML = userHTML;
  } catch (error) {
    console.error("Error fetching and displaying users:", error);
  }
}

// Call the function to fetch and display users when the page loads.
fetchAndDisplayUsers();
