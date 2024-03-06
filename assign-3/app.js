// CHAPTER 9-11

// Q1

// var city = prompt("What is the name of your city");

// if (city === "Karachi") {
//     alert("Welcome to the city of Lights");
// }else{
//     alert("Welcome" + "  " + city)
// }


// Q2

// var gender = prompt("What is your gender?");

// if (gender === "Male"){
//     alert("Good Morning Sir");
// }else{
//     alert("Good Morning Madam")
// }



// Q3

// var trafficSignal = prompt("Enter the Color of the traffic Signal");

// if (trafficSignal === "Red"){
//     document.write("<table><tr><th>Signal Color</th><th>Message</th></tr>" + "<tr><td>Red</td><td>Stop</td></tr></table>")
// }else if(trafficSignal === "Yellow"){
//     document.write("<table><tr><th>Signal Color</th><th>Message</th></tr>" + "<tr><td>Yellow</td><td>Wait</td></tr></table>")

// }else if(trafficSignal === "Green"){
//     document.write("<table><tr><th>Signal Color</th><th>Message</th></tr>" + "<tr><td>Green</td><td>Go</td></tr></table>")

// }else{
//     alert("Error");
// }


// Q4

// var fuel = +(prompt("Remaining Fuel?"));


// if(fuel < 0.25){
//     alert("Please Refill the fuel in your car");
// }


// Q5

// var a = 4;

// if (++a === 5){
//     alert("The given condition for variable is true")
// }


// Q6(on index.html)


// Q7
// var secretNumber = 2; 
// var guess = parseInt(prompt("Guess the secret number"))

// if (guess === secretNumber){
//     alert("Bingo! Correct Answer")
// }
// else if (guess === secretNumber +1 || guess === secretNumber -1 ){
//     alert("Close Enough")
// }else{
//     alert("Wrong guess the correct answer is" + "  " + secretNumber)
// }


// Q8

// Prompt the user to enter a number
// var userNumber = parseInt(prompt("Enter a number:"));

// // Check if the entered number is divisible by 3
// if (userNumber % 3 === 0) {
//     alert(userNumber + " is divisible by 3.");
// } else if (userNumber % 3 !== 0) {
//     alert(userNumber + " is not divisible by 3.");
// }


// Q9


// Prompt the user to enter a number
// const userInput = parseInt(prompt("Enter a number:"));

// // Check if the entered number is even or odd
// if (userInput % 2 === 0) {
//     alert(userInput + " is an even number.");
// } else {
//    alert(userInput + " is an odd number.");
// }


// Q10


// var temp = parseInt(prompt("Enter Tempereture"));

// if(temp >= 40){
//     alert("Its too hot outside.");
// }
// else if(temp >= 30){
//     alert("The weather today is normal.");

// }
// else if(temp >= 20){
//     alert("Today's weather is cool.");

// }
// else if(temp >= 10){
//     alert("OMG! Today's weather  is so cool.");

// }



// Q11






// var num1 = parseInt(prompt("Number 1"));
// var ope = prompt("+ - * / %");
// var num2 = parseInt(prompt("Number 1"));

// if(ope === "+"){
//     document.write(num1 + num2)
// }

// else if(ope === "-"){
//     document.write(num1 - num2)
// }

// else if(ope === "-"){
//     document.write(num1 - num2)
// }
// else if(ope === "*"){
//     document.write(num1 * num2)
// }
// else if(ope === "/"){
//     document.write(num1 / num2)
// }


// else if(ope === "%"){
//     document.write(num1 * 100 / num2 + "%")
// }else{
//     document.write("Error")
// }







// Chapter12-13

// Q2

// var int1 = parseInt(prompt("Integer1"));
// var int2 = parseInt(prompt("Integer2"));
// if (int1 === int2) {
//     alert("Both are equal")
// } else {
//     var large = int1 > int2 ? int1 : int2;
//     alert("The larger is" + "  " + large)
// }



// Q3


// var unum1 = parseInt(prompt("Number1"));

// if (unum1 > 0) {
//     alert("The number is positive")
// } else {
//     alert("The number is negative")
// }


// Q4



// var vowel = prompt("Enter one letter");

// if (vowel == "a") {
//     alert(true + " it is vowel ");
// }
// else if (vowel == "e") {
//     alert(true + " it is vowel ");
// }

// else if (vowel == "i") {
//     alert(true);
// }

// else if (vowel == "o") {
//     alert(true + " it is vowel ");
// }

// else if (vowel == "u") {
//     alert(true + " it is vowel ");
// } else {
//     alert(false + " it is not a vowel ")
// }


// Q5


// var correct_password = 12345;
// var passw = parseInt(prompt("Enter your Password"))
// if(!passw){
// alert(" Please enter your Password")
// }
//  else if(correct_password === passw){
//     alert("Correct! \nThe password you entered matches the original password")
// }else{
//     alert("Incorrect password")
// }


// Q6


// var greeting;
// var hour = 13;

// if(hour < 18){
//     greeting = "Good Day";
// }else{
//     greeting = "Good Evening";
// }


// Q7


// var time = (prompt("Enter Time (like = 19:00)"));

// if (time === "13:00") {
//     alert("its 1pm");
// }
// else if (time === "14:00") {
//     alert("its 2pm");
// }
// else if (time === "15:00") {
//     alert("its 3pm");
// }
// else if (time === "16:00") {
//     alert("its 4pm");
// }
// else if (time === "17:00") {
//     alert("its 5pm");
// }
// else if (time === "18:00") {
//     alert("its 6pm");
// }
// else if (time === "19:00") {
//     alert("its 7pm");
// }
// else if (time === "20:00") {
//     alert("its 8pm");
// }
// else if (time === "21:00") {
//     alert("its 9pm");
// }
// else if (time === "22:00") {
//     alert("its 10pm");
// }
// else if (time === "23:00") {
//     alert("its 11pm");
// }
// else if (time === "24:00") {
//     alert("its 12pm");
// }