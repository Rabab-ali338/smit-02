// chapter no 03 : variables and numbers?

// question no 01: declear a variable called age and assign to it your age.show your age in an alert box?
var age = 21;
alert("my age is " + age);

// // question no 02: declear and initialize a variable to keep track of how many times a vistor has visited your page.
// // show his\her number of visits on your web page. for example "you have visited this site N times"?
var visitCount = 14;
alert("you have visited this site " + visitCount + "times");

// // question no 03: declear a variable called birthYear and assign to it your birth year. show the following message in your brower's?
var birthYear =2002;
document.write("My birth year is " + birthYear + "<br> Data type of my decleared variable is number");

// question no 04: A vistor visits an online clothing StorageEvent.
// www.xyzClothing.com. write a script to store in a variables the following information:
// 1: vistor's name.
// 2: product tittle.
// 3: quantity.
// show the following message in your brower's: "umm e rabab ali ordered 5 T-shirt(s) on XYZ clothing store".
var visitorName = "umm e rabab ali";
var productTitle = "T-shirt";
var quantity = 5;
document.write(" vistor's name is " + visitorName + "\nproduct tittle is " +
    productTitle + " quantity is " + quantity + visitorName   + quantity + " " + productTitle + 
"(s) on XYZ clothing store");

// chapter no 04: variables names legal and illegal

// question no 01: Declear 3 variables in one statment?
var firstName = "umm e rabab ali", lastName ="Buriro", age = 21;

// question no 02: declear 5 legal and illegal variable names?

// *(Legal Variable Names)
// name
// student_age
// _rollNumber
// marks1
// totalScore
// These are legal because:
// They start with a letter or underscore.
// They contain only letters, numbers, and underscores.
// They are not reserved keywords.

// (illegal variable names)
//  Illegal Variable Names
// 1name → Starts with a number.
// full name → Contains a space.
// @marks → Uses special character @.
// class → Reserved keyword in many languages.
// student-age → Uses hyphen -, which is not allowed.

// question no 03: display this in your brower?
// 1: A heading stating "Rules for naming JS variables"
document.write("<h4> Rules for naming JS variables</h4>");
// 2: variable names can only contain  for example: $my_1stVariable is valid
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. for example : $my_1stVariable is valid.</p>")
// 3: variable must begin with a for example: $name, _name or name are all valid
document.write("<p> Variable must begin with a for example: $name, _name or name are all valid.</p>");
// 4: variable names are case?
document.write("<p> variable names are case-sensitive for example: myVariable and myvariable are different variables.</p>");
// 5: variable names should not be JS ?
document.write("<p> variable names should not be JS for example: var, let, const are reserved keyword and cannot be used as variable names.</p>");









