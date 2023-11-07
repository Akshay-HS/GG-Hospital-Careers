// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    // Check if data is available
    if (data && data.users && data.users.length > 0) {
      const userData = data.users[0]; // Use the first user's data

      // Fill in the form fields
      document.getElementById(
        "full_name"
      ).value = `${userData.firstName} ${userData.lastName}`;
      document.getElementById("phone_number").value = userData.phone;
      document.getElementById("email").value = userData.email;
      document.getElementById("subject").value = ""; // You can set this to any default value
      document.getElementById("cover_letter").value = ""; // You can set this to any default value
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchData function when the page loads
fetchData();

// Function to send data to the API
async function postData(formData) {
  try {
    const response = await fetch("https://dummyjson.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const responseData = await response.json();
      // Handle the response from the API as needed
      console.log("OK 200: Data posted successfully:", responseData);
    } else {
      console.error("Failed to post data to the API");
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

// Add an event listener to the "Submit Application" button
document.getElementById("submit_button").addEventListener("click", () => {
  // Get form data
  const formData = {
    full_name: document.getElementById("full_name").value,
    phone_number: document.getElementById("phone_number").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    cover_letter: document.getElementById("cover_letter").value,
  };

  // Call postData to send the data to the API
  postData(formData);
});
