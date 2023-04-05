// Get form element and add submit event listener
const form = document.getElementById("form");
form.addEventListener("submit", saveData);

// Save data to local storage
function saveData(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const data = { name, email };
  let savedData = localStorage.getItem("data");
  if (savedData === null) {
    savedData = [];
  } else {
    savedData = JSON.parse(savedData);
  }
  savedData.push(data);
  localStorage.setItem("data", JSON.stringify(savedData));
  alert("Data saved successfully!");
  form.reset();
}

// Get search button element and add click event listener
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchData);

// Search data in local storage and display results
function searchData() {
  const searchValue = document.getElementById("search").value;
  let savedData = localStorage.getItem("data");
  if (savedData === null) {
    savedData = [];
  } else {
    savedData = JSON.parse(savedData);
  }
  const results = savedData.filter((data) => data.name.toLowerCase().includes(searchValue.toLowerCase()));
  const resultList = document.getElementById("result-list");
  resultList.innerHTML = "";
  if (results.length === 0) {
    resultList.innerHTML = "<li>No results found</li>";
  } else {
    results.forEach((data) => {
      const li = document.createElement("li");
      li.textContent = `Name: ${data.name}, Email: ${data.email}`;
      resultList.appendChild(li);
    });
  }
}
