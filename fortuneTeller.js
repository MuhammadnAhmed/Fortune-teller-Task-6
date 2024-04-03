function display() {
    // Retrieve the value entered by the user
    var userName = document.getElementById("nameInput").value;
    
    // Display a greeting message using the user's name
    document.getElementById("greeting").innerText = "Hello, " + userName + "!";
}