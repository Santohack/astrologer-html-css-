
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
function redirectToBirthdayPage() {
  window.location.href = "birthday.html";
}

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
