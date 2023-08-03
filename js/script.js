// FORM VALIDATION

function validateForm() {
    var name = document.forms["fillform"]["name"].value;
    var email = document.forms["fillform"]["email"].value;
    var interestValue = document.forms["fillform"]["interest"].value;
    var isValid = true;
    
    if (name == "") {
        document.getElementById("name-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("name-error").style.display = "none";
    }

    if (email == "" || !validateEmail(email)) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    if (interestValue == "Select option") {
        document.getElementById("interest-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("interest-error").style.display = "none";
    }

    return isValid;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//AUTOSLIDE BANNER

var bannerIndex = 1;

function nextBanner(index) {
    showbanner(bannerIndex += index);
}

function showbanner(index) {
    var i;
    var banner = document.getElementsByClassName("banner");

    if (index > banner.length) {
        bannerIndex = 1;
    }

    if (index < 1) {
        bannerIndex = banner.length;
    }

    for (i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";
    }

    banner[bannerIndex - 1].style.display = "block";
}

function autoNextBanner() {
    nextBanner(1);
}

setInterval(autoNextBanner, 3000);

//SCROLL PAGE

function scrollHome() {
    var section = document.getElementsByClassName("headerTitle");
    section.scrollIntoView({ behavior: "smooth" });
}

function scrollOurPackage() {
    var section = document.getElementById('package');
    section.scrollIntoView({ behavior: "smooth" });
}

function scrollBookNow() {
    var section = document.getElementById("book");
    section.scrollIntoView({ behavior: "smooth" });
}