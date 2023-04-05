function saveData() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    // Get existing data from local storage
    var data = JSON.parse(localStorage.getItem("formData")) || [];
    
    // Add new data to the array
    data.push({
      name: name,
      email: email,
      phone: phone
    });
    
    // Save updated data to local storage
    localStorage.setItem("formData", JSON.stringify(data));
    
    // Alert user that data has been saved
    alert("Data saved successfully!");
  }
 //var data = JSON.parse(localStorage.getItem("formData")) || [];

//   for (var i = 0; i < data.length; i++) {
//     var entry = data[i];
//     console.log("Name: " + entry.name);
//     console.log("Email: " + entry.email);
//     console.log("Phone: " + entry.phone);
//   }
function searchData() {
    // Get search term
    var searchTerm = document.getElementById("searchTerm").value.toLowerCase();
    
    // Get data from local storage
    var data = JSON.parse(localStorage.getItem("formData")) || [];
    
    // Filter data based on search term
    var filteredData = data.filter(function(entry) {
      return entry.name.toLowerCase().indexOf(searchTerm) !== -1 ||
             entry.email.toLowerCase().indexOf(searchTerm) !== -1 ||
             entry.phone.indexOf(searchTerm) !== -1;
    });
    
    // Display filtered data on the page
    var resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";
    
    if (filteredData.length > 0) {
      for (var i = 0; i < filteredData.length; i++) {
        var entry = filteredData[i];
        resultsDiv.innerHTML += "<p><strong>Name:</strong> " + entry.name + "</p>" +
                                 "<p><strong>Email:</strong> " + entry.email + "</p>" +
                                 "<p><strong>Phone:</strong> " + entry.phone + "</p><hr>";
      }
    } else {
      resultsDiv.innerHTML = "<p>No results found.</p>";
    }
  }
  