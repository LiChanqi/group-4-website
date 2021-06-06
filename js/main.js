var getUsername = prompt("hello there yo")

console.log(getUsername);

document.getElementById("username").innerText = getUsername;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })