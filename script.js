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
  var qaArray = [{ question: "What is your gender?", answer: selectedGender }];

  var qaJsonString = JSON.stringify(qaArray);

  var urlWithQa = qaJsonString;

  localStorage.setItem("selectedUrl", urlWithQa);

  console.log("URL with QA:", urlWithQa);

  window.location.href = "birthday.html";

  setTimeout(function () {
    window.location.href = "birthday.html";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".style_form__button__Kg5Tl")
    .addEventListener("click", function () {
      var selectedDate = document.getElementById("datepicker").textContent;
      var selectedMonth = document.getElementById("monthpicker").textContent;
      var selectedYear = document.getElementById("yearpicker").textContent;

      console.log("Selected Date:", selectedDate);
      console.log("Selected Month:", selectedMonth);
      console.log("Selected Year:", selectedYear);

      var selectedValues = {
        date: selectedDate,
        month: selectedMonth,
        year: selectedYear,
      };
      var qaArray = [{ question: " When’s your birthday?", answer: selectedValues }];
      var selectedValuesJson = JSON.stringify(qaArray);

      localStorage.setItem("selectedyear", selectedValuesJson);

      redirectToBirthtimePage();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".style_form__button__Kg5Tl")
    .addEventListener("click", function () {
      var selectedhour = document.getElementById("datepicker1").textContent;
      var selectedMinute = document.getElementById("monthpicker1").textContent;
      var selectedpeariod = document.getElementById("yearpicker1").textContent;

      console.log("Selected Date:", selectedhour);
      console.log("Selected Month:", selectedMinute);
      console.log("Selected Year:", selectedpeariod);

      var selectedValues = {
        hour: selectedhour,
        minute: selectedMinute,
        peariod: selectedpeariod,
      };
      var qaArray = [{ question: " Do you know your birth time?", answer: selectedValues }];
      var selectedValuesJson = JSON.stringify(qaArray);

      localStorage.setItem("selectedtime", selectedValuesJson);

      redirectTobornPage();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".style_form__button__13Op5")
    .addEventListener("click", function () {
      var selectdplace = document.getElementById("birthplace").value;

      console.log("Selected Place:", selectdplace);

      var selectedValues = {
        place: selectdplace,
      };
      var qaArray = [{ question: "Where were you born?", answer: selectedValues }];

      var selectedValuesJson = JSON.stringify(qaArray);

      localStorage.setItem("selectedplace", selectedValuesJson);

      redirectTo5thpagePage();
    });
});

function redirectTo7thpagePage(selectedStatus) {
  // Create an array to store question and answer
  var qaArray = [
    {
      question: "tell us about your current relationship status?",
      answer: selectedStatus,
    },
  ];

  // Convert the array to JSON string
  var qaJsonString = JSON.stringify(qaArray);

  // Append the JSON string to the URL
  var urlWithQa = qaJsonString;

  // Optionally, store the URL in localStorage for later use
  localStorage.setItem("selectedStatus", urlWithQa);

  // Optionally, log the URL for debugging
  console.log("URL with QA:", urlWithQa);

  // Handle the first redirect to 'birthday.html'
  window.location.href = "7thpage.html";

  // Handle the second redirect to another page (e.g., 'anotherpage.html') after a delay
  setTimeout(function () {
    window.location.href = "7thpage.html";
  }, 1000); // Adjust the delay as needed
}

var selectedCount = 0;
var maxSelection = 3;

function handleButtonClick(buttonId) {
  var button = document.getElementById(buttonId);

  if (button.classList.contains("style_active__7uaXP")) {
    selectedCount--;
  } else if (selectedCount < maxSelection) {
    selectedCount++;
  } else {
    return;
  }

  button.classList.toggle("style_active__7uaXP");

  var countElement = document.getElementById("selected_count");
  countElement.textContent = selectedCount + " / " + maxSelection;

  saveSelectedButtons();
}

function saveSelectedButtons() {
  var selectedButtons = [];

  var activeButtons = document.querySelectorAll(".style_active__7uaXP");

  activeButtons.forEach(function (button) {
    selectedButtons.push(button.id);
  });

  var qaArray = [
    {
      question: "What are your goals for the future?",
      answer: selectedButtons,
    },
  ];

  var selectedButtonsJson = JSON.stringify(qaArray);

  localStorage.setItem("selectedGoals", selectedButtonsJson);
}

document
  .querySelector(".style_button__ATdiY")
  .addEventListener("click", function () {
    redirectTo8thpagePage();
  });

function redirectTo10thpagePage(selectedElement) {
  var qaArray = [
    {
      question: "Which element of nature do you like the best?",
      answer: selectedElement,
    },
  ];

  var qaJsonString = JSON.stringify(qaArray);

  var urlWithQa = qaJsonString;

  localStorage.setItem("selectedElement", urlWithQa);

  console.log("URL with QA:", urlWithQa);

  window.location.href = "10thpage.html";

  setTimeout(function () {
    window.location.href = "10thpage.html";
  }, 1000);
}



function FinalPage(selectedColors) {
  var qaArray = [
    {
      question: "Which of the following colors do you prefer?",
      answer: selectedColors,
    },
  ];

  var qaJsonString = JSON.stringify(qaArray);

  var urlWithQa = qaJsonString;

  localStorage.setItem("selectedColors", urlWithQa);

  console.log("URL with QA:", urlWithQa);

  // Log question and answer from local storage
  var keysToRetrieve = [
    "selectedUrl",
    "selectedtime",
    "selectedyear",
    "selectedplace",
    "selectedStatus",
    "selectedGoals",
    "selectedElement",
    "selectedColors"
  ];

  var dataArray = keysToRetrieve.map(function(key) {
    var storedData = localStorage.getItem(key);

    if (storedData) {
      return JSON.parse(storedData)[0]; // Only push the first item (question and answer)
    } else {
      console.log("No data found for key:", key);
      return null;
    }
  }).filter(Boolean); // Filter out null values

  console.log("Data array from local storage:", dataArray); 
  function constructUrl(data) {
    var url = "http://domainX.com/&qa=\[";
    
    data.forEach(function(item, index) {
      var question =item.question;
      var answer = JSON.stringify(item.answer);
  
      url += '{"question":"' + question + '","answer":"' + answer + '"}';
      
      // Add a comma after each item, except for the last one
      if (index < data.length - 1) {
        url += ",";
      }
    });
  
    url += "]";
    
    return url;
  }
  
  // Example data array
  
  var finalUrl = constructUrl(dataArray);
  console.log("Final URL:", finalUrl);
  
}
