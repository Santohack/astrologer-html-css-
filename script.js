
var maxSelection = 3;
var selectedCount = 0;
function handleButtonClick(buttonId) {
  var button = document.getElementById(buttonId);
  if (button.classList.contains('style_active__7uaXP')) {
    selectedCount--;
  } else if (selectedCount < maxSelection) {
    selectedCount++;
  } else {
    return; // Maximum selection limit reached
  }
  // Toggle the active class on the clicked button
  button.classList.toggle('style_active__7uaXP');
  var countElement = document.getElementById('selected_count');
  countElement.textContent = selectedCount + ' / ' + maxSelection;
}


// function redirectToBirthdayPage() {
//   window.location.href = "birthday.html";
// }

function redirectToIndexPage() {
  window.location.href = "index.html";
}

function redirectToBirthtimePage() {
  window.location.href = "birthtime.html";
}
function redirectTobornPage() {
  window.location.href = "born.html";
}
function redirectTo5thpagePage() {
  window.location.href = "5thpage.html";
}
function redirectTo6thpagePage() {
  window.location.href = "6thpage.html";
}

function redirectTo7thpagePage() {
  window.location.href = "7thpage.html";
}
function redirectTo8thpagePage() {
  window.location.href = "8thpage.html";
}
function redirectTo9thpagePage() {
  window.location.href = "9thpage.html";
}
function redirectTo10thpagePage() {
  window.location.href = "10thpage.html";
}

function redirectToBirthdayPage(selectedGender) {
  // Create an array to store question and answer
  var qaArray = [
      { "question": "What is your gender?", "answer": selectedGender }
  ];

  // Convert the array to JSON string
  var qaJsonString = JSON.stringify(qaArray);

  // Append the JSON string to the URL
  var urlWithQa = 'https://example.com/&qa=' + qaJsonString;

  // Optionally, store the URL in localStorage for later use
  localStorage.setItem('selectedUrl', urlWithQa);

  // Optionally, log the URL for debugging
  console.log('URL with QA:', urlWithQa);

  // Handle the first redirect to 'birthday.html'
  window.location.href = 'birthday.html' + urlWithQa;

  // Handle the second redirect to another page (e.g., 'anotherpage.html') after a delay
  setTimeout(function () {
      window.location.href = 'birthday.html';
  }, 1000); // Adjust the delay as needed
}

// Retrieve data from local storage
var storedData = localStorage.getItem('selectedUrl');

// Check if there is any data in local storage
if (storedData) {
    // Parse the JSON string to an object (assuming it contains JSON data)
    var parsedData = storedData;

    // Log the parsed data to the console
    console.log('Data from local storage:', parsedData);
} else {
    console.log('No data found in local storage');
}

document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the "Continue" button
  document.querySelector('.style_form__button__Kg5Tl').addEventListener('click', function () {
      // Get selected date, month, and year values from the datepicker
      var selectedDate = document.getElementById('datepicker').textContent;
      var selectedMonth = document.getElementById('monthpicker').textContent;
      var selectedYear = document.getElementById('yearpicker').textContent;

      // Log the selected values to the console
      console.log('Selected Date:', selectedDate);
      console.log('Selected Month:', selectedMonth);
      console.log('Selected Year:', selectedYear);

      // Create an object to store the selected values
      var selectedValues = {
          date: selectedDate,
          month: selectedMonth,
          year: selectedYear
      };

      // Convert the object to JSON string
      var selectedValuesJson = JSON.stringify(selectedValues);

      // Set the JSON string in local storage
      localStorage.setItem('selectedyear', selectedValuesJson);

      // Redirect to the next page (optional)
      redirectToBirthtimePage();
  });
});



document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the "Continue" button
  document.querySelector('.style_form__button__Kg5Tl').addEventListener('click', function () {
      // Get selected date, month, and year values from the datepicker
      var selectedhour = document.getElementById('datepicker1').textContent;
      var selectedMinute = document.getElementById('monthpicker1').textContent;
      var selectedpeariod = document.getElementById('yearpicker1').textContent;

      // Log the selected values to the console
      console.log('Selected Date:', selectedhour);
      console.log('Selected Month:', selectedMinute);
      console.log('Selected Year:', selectedpeariod);

      // Create an object to store the selected values
      var selectedValues = {
          hour: selectedhour,
          minute: selectedMinute,
          peariod: selectedpeariod
      };

      // Convert the object to JSON string
      var selectedValuesJson = JSON.stringify(selectedValues);

      // Set the JSON string in local storage
      localStorage.setItem('selectedtime', selectedValuesJson);

      // Redirect to the next page (optional)
      redirectTobornPage();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the "Continue" button
  document.querySelector('.style_form__button__13Op5').addEventListener('click', function () {
      // Get selected date, month, and year values from the datepicker
      var selectdplace = document.getElementById('birthplace').value;
      

      // Log the selected values to the console
      console.log('Selected Place:', selectdplace);
    

      // Create an object to store the selected values
      var selectedValues = {
          place: selectdplace,
         
      };

      // Convert the object to JSON string
      var selectedValuesJson = JSON.stringify(selectedValues);

      // Set the JSON string in local storage
      localStorage.setItem('selectedplace', selectedValuesJson);

      // Redirect to the next page (optional)
      redirectTo5thpagePage();
  });
});



function redirectTo7thpagePage(selectedStatus) {
  // Create an array to store question and answer
  var qaArray = [
      { "question": "tell us about your current relationship status?", "answer": selectedStatus }
  ];

  // Convert the array to JSON string
  var qaJsonString = JSON.stringify(qaArray);

  // Append the JSON string to the URL
  var urlWithQa = qaJsonString;

  // Optionally, store the URL in localStorage for later use
  localStorage.setItem('selectedStatus', urlWithQa);

  // Optionally, log the URL for debugging
  console.log('URL with QA:', urlWithQa);

  // Handle the first redirect to 'birthday.html'
  window.location.href = '7thpage.html' 

  // Handle the second redirect to another page (e.g., 'anotherpage.html') after a delay
  setTimeout(function () {
      window.location.href = '7thpage.html';
  }, 1000); // Adjust the delay as needed
}
