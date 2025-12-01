
// Logout time (in seconds)
let logoutTime = 10; 

// Warning before how many seconds
let warningTime = 5; 

let timer = setInterval(() => {

    logoutTime--;

    // Show warning
    if (logoutTime === (10 - warningTime)) {
        document.getElementById("warning").style.display = "block";
    }

    // Auto Logout
    if (logoutTime === 0) {
        clearInterval(timer);
        alert("Logged out automatically!");
        // Example logout action
        window.location.href = "logout.html"; 
    }

}, 1000);




