var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

ScrollReveal().reveal(".about", { delay: 500 });

function isValidName() {
  var firstname = document.getElementById("name").value;
  document.getElementById("firstNameMessage").innerHTML = "";
  if (firstname == "") {
    document.getElementById("firstNameMessage").innerHTML =
      "Please Enter your firstname";
    document.getElementById("name").classList.remove("accept");
    document.getElementById("name").classList.add("reject");
    return false;
  } else if (typeof firstname !== "string" || /[0-9]+/g.test(firstname)) {
    document.getElementById("firstNameMessage").innerHTML =
      "firstName shouldn't contain any numbers";
    document.getElementById("name").classList.remove("accept");
    document.getElementById("name").classList.add("reject");
    return false;
  } else {
    document.getElementById("name").classList.remove("reject");
    document.getElementById("name").classList.add("accept");
    return true;
  }
}

function isValidEmail() {
  var eMail = document.getElementById("email").value;
  document.getElementById("emailMessage").innerHTML = "";
  if (eMail == "") {
    document.getElementById("emailMessage").innerHTML = "Email cann't be empty";
    document.getElementById("email").classList.remove("accept");
    document.getElementById("email").classList.add("reject");
    return false;
  }
  var atposition = eMail.indexOf("@");
  var dotposition = eMail.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= eMail.length
  ) {
    document.getElementById("emailMessage").innerHTML =
      "Oops!, Please Enter valid email";
    document.getElementById("email").classList.remove("accept");
    document.getElementById("email").classList.add("reject");
    return false;
  } else {
    document.getElementById("email").classList.remove("reject");
    document.getElementById("email").classList.add("accept");
    return true;
  }
}

function isValidPhoneNumber() {
  var contact = document.getElementById("contactNumber").value.trim();
  document.getElementById("contactNumberMessage").innerHTML = "";
  if (contact.length != 10) {
    document.getElementById("contactNumberMessage").innerHTML =
      "Oops!, Invalid Phone Number";
    return false;
  } else if (parseInt(contact) !== Number(contact)) {
    document.getElementById("contactNumberMessage").innerHTML =
      "Invalid Phone Number, Only numbers are allowed.";
    return false;
  } else {
    return true;
  }
}

function checkValidation() {
  var fullName = isValidName();
  var eMail = isValidEmail();
  var phoneNumber = isValidPhoneNumber();
  if (fullName != false && eMail != false && phoneNumber != false) {
    alert("Login Successfully!!!!");
    return true;
  } else return false;
}
