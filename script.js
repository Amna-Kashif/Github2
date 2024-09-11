// Chapter 6 (Math Expression II)

// 1
var x  = 5
x = x++; 
console.log(x);


// 2
var x = 100;
--x;  
console.log(x);



// 3
var x = 50;
var y = x++;
console.log("The value of y is " + y);

// 4
var y = 50;
var z = --y;
console.log("The value of z is " + z);


// 5
var num = 10;  
var newNum = --num;
console.log(newNum);


// 6

var varName = 5 + 1;   
console.log(varName); 


// 7
var number = 5;  
number++;       
// alert(number); 




// Chapter 7 (Math Expression III)


// 1
var calculatedNum1 = 2 + (2 * 6);
console.log(calculatedNum1); 

// 2
var calculatedNum2 = (2 + 2) * 6;
console.log(calculatedNum2);  

// 3
var calculatedNum3 = (2 + 2) * (4 + 2);
console.log(calculatedNum3);  


// 4
var calculatedNum4 = ((2 + 2) * 4) + 2;
console.log(calculatedNum4);



// 5
var cost = (2 + 2) * (4 + 10);
console.log("Total cost is " + cost);




// 6
var units = (2 + 2 * 4) + 10;
console.log("This equation results " + units);


// 7
const pressure = (4 / (2 * 2)) * 5;
console.log("This equation produces " + pressure);

  

// Chapter 8 (Concatenating Text Strings)


// 1
var number = "2" + "2";
console.log("they both concat & shows " + number); 


// 2
message = ("Hello " + "Dolly");
// alert(message);



// 3
// alert("33" + 3);


// 4
// alert("Pakistan" + " Zindabad");


// 5
var result = "The number is " + 42;
console.log(result);



// 6
var firstPart = "Hello";
var secondPart = "World";
var combined = firstPart + " " + secondPart;
console.log(combined);




// Chapter 9 (Prompts)


// 1
// var firstName = prompt("Enter first name");
// console.log(firstName);

// 2
var country = prompt("Country?", "Pakistan");
console.log(country);

// 3
var yourName = prompt("Enter Your Name");
console.log(yourName);


// 4
var userResponse = prompt("Please enter your age:", "25");
console.log(userResponse);


// 5
var message = "Enter your favorite color:";
var defaultResponse = "Blue";

var userResponse = prompt(message, defaultResponse);

// // 6
var message = "What is your favorite fruit?";
var defaultResponse = "Apple";

var userResponse = prompt(message, defaultResponse);
alert("You entered: " + userResponse);





// CHAP: MATH EXPRESSIONS


// 1
var a = 10;

// Display the value of 'a'
document.write("The value of a is: " + a + "<br> <br>");

// Increment 'a' and display the new value
document.write("The value of ++a is: " + ++a + "<br>");

document.write("Now the value of a is: " + a + "<br> <br>");


// Display the current value of 'a' before post-increment, and then increment it
document.write("The value of a++ is: " + a++ + "<br>");

// Now display the value of 'a' after post-increment
document.write("Now the value of a is: " + a + "<br>  <br>");


document.write("The value of --a is: " + --a + "<br>");

// Now display the value of 'a' after post-increment
document.write("Now the value of a is: " + a + "<br>  <br>");


document.write("The value of a-- is: " + a-- + "<br>");

// Now display the value of 'a' after post-increment
document.write("Now the value of a is: " + a + "<br>");





// 2
var a = 2, b = 1;

// Step 1: Pre-decrement 'a'
--a; 
console.log("--a:", a);

// Step 2: Pre-decrement 'b' and subtract from 'a'
--b; 
var result1 = --a - --b; 
console.log("--a - --b:", result1); 

// Step 3: Pre-increment 'b' and add to result1
++b; 
var result2 = result1 + ++b;
console.log("--a - --b + ++b:", result2); 

// Step 4: Post-decrement 'b' and add to result2
var result = result2 + b--; 
console.log("--a - --b + ++b + b--:", result);

// Final values
console.log("Final value of a:", a); 
console.log("Final value of b:", b); 
console.log("Final value of result:", result);


// 3
var userName = prompt("Please enter your name:");

if (userName) {
    alert("Hello, " + userName + "!");
} else {
    alert("Hello, Guest!");
}


//   4 

// Total marks for each subject
var totalMarks = 100;

// Prompt the user to enter names for three subjects
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

// Prompt the user to enter obtained marks for each subject
var obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"), 10);
var obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"), 10);
var obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"), 10);

// Calculate total obtained marks and percentage
var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
var totalPossibleMarks = totalMarks * 3; 
var percentage = (totalObtainedMarks / totalPossibleMarks) * 100; 

// Display the results in a table format
document.write("<h2>Result:</h2>");
document.write("<table border='1' style='border-collapse: collapse;'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
document.write("<tr><td colspan='2'>Total Obtained Marks</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");
