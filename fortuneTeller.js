document.addEventListener("DOMContentLoaded", function() {

   
    var name = prompt("Enter your Mother First name: ");
    var street = prompt("Enter the name of the street you grew up: ");
    var color = prompt("Enter your favourite color as a child: ");
    var age = prompt("Enter your current age:");
    var number = prompt("Enter any number between 1 and 10: ");
    
    let yearToMeetBestfriend = number;
    let bestFriendName = name + " " + street;
    let numberOfYearsToGetMarried = Number(age) + Number(number); 
    let numberOfChildren = Number(age) % Number(number);
    let yearToDyeHair = Math.round(Number(age) / Number(number));
    

    document.getElementById("yearToMeetBestfriend").innerHTML = yearToMeetBestfriend;
    document.getElementById("bestFriendName").innerHTML = bestFriendName;
    document.getElementById("numberOfYearsToGetMarried").innerHTML = numberOfYearsToGetMarried;
    document.getElementById("numberOfChildren").innerHTML = numberOfChildren;
    document.getElementById("yearToDyeHair").innerHTML = yearToDyeHair;
    


})

