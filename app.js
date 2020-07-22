
// Chapter 1


// 1.
// alert("Welcome To Pak Paint Services")

// 2.
// var pas=prompt("Enter Your Password");
// if (pas == "alpha")
// {
//     alert("Your Password is correct")
// }
// else 
// {
//     alert("Error! Please enter a valid password")
// }

// 3.
// alert("Welcome to JS Land..." +  "Happy Codding!")

// 4.
// alert("Welcome to JS Land...")
// alert("Happy Codding!")
// alert("Prevent this page from creating additional dislogs.")


// 5.
// alert("Hello... I can run JS through my web Browser's console")

// var msg="Hello... I can run JS through my web Browser's console";
// console.log(msg)





// Chapter 2

// 1.  var username=prompt("Enter your name");

// 2. var myName=prompt("Your Full Name");

// 3.  var message= "Hello World!";
// alert(message)

// 4. var name="Jhone Doe";
// alert(name)
// var age="15 years old";
// alert(age)
// var skill="Certified Mobile Application Development"
// alert(skill)



// 5. for (var i=0; i>=7; i--)
// {
//     for (var j=0; j>=i; j--)
//     {
//         document.write("P I Z Z A")
//     }
//     document.write("<br>")
// }



// 6. var email= prompt("Enter Your Email Address");
//     alert("My email address is" + " " + email)


// 7. var copy= "I am trying to learn from the book";
// var book="A Smarter way to learn JavaScript";

// alert(copy + " " + book)


// 8. var msg= "Yeah I can write HTML content through JavaScript"
// document.write(msg)

// 9. var msg="―――――――――― ὣ₤⁰₤ὣ ――――――――――";
// alert(msg)






// Chapter 3

// 1. var age="23";
// alert("I am " + age + " years old")


// 2. for (var i=0; i<100; i++){
//     alert("You have visited this site " + i + " times")
// }


// 3. var birthYear="1997";
// document.write("My birth year is " + birthYear)
// document.write("   Data type of my declared variable is number")



// 4. var name= prompt("Enter Your Name");
// var quantity= prompt("Enter Quantity");
// var product= prompt("Enter Product");
// alert(name + " odered " + quantity + " " + product + " on XYZ Clothing Store ") 





// Chapter 4

// 1. var one="Afia", two="Bashir", three="Ahmed";
// alert (one + " " + two + " " + three)


// 2. Legal variables

// var My_variable= "These";
// var $my_variable= "all";
// var _my_variable= "are";
// var My_variable_example= "legal";
// var myVarExample= "variables";
// alert(My_variable + " " + $my_variable + " " + _my_variable  + " " + My_variable_example + " " + myVarExample)

// illegal variables

// var 1my_variable="These";
// var @my_variable="all";
// var ~my_variable="are";
// var ++my_variable="Illegal";
// var %my_variable="variables";
// alert(1my_variable + " " + @my_variable + " " + ~my_variable + " " + ++my_variable + " " + %my_variable)


// 3b. var n1="numbers,";
// var n2="$";
// var n3="_.";
// document.write("Variable names can only contain," + " " + n1 + " " + n2 + " " + "and" + " " + n3 + " " + "For example $my_1stVariable")


// 3c. var n1="letter,";
// var n2="$";
// var n3="_.";
// document.write("Variable must begin with a" + " " + n1 + " " + n2 + " " + "or" + " " + n3 + " " + "For example $name,_name" + " " + "or name")


// 3d. var name="Sensitive";
// document.write("Variable names are case" + " " + name)



// 3e. var name="Keyword";
// document.write("Variable name should not be JS" + " " + name)






// Chapter 5

// 1. var a=prompt("Enter Your First Num");
// var b=prompt("Enter Your Second Num");
// var c=a+b;
// document.write("The sum of" + " " + a + " " + "and" + " " + b + " " + c) 


// 2. var a=prompt("Enter Your First Num");
// var b=prompt("Enter Your Second Num");
// var c=a-b;
// document.write("The subtraction of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c) 


// 2. var a=prompt("Enter Your First Num");
// var b=prompt("Enter Your Second Num");
// var c=a*b;
// document.write("The multiplication of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c) 

// 2. var a=prompt("Enter Your First Num");
// var b=prompt("Enter Your Second Num");
// var c=a/b;
// document.write("The division of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c) 

// 2. var a=prompt("Enter Your Obtained Marks");
// var b=prompt("Enter Your Total Marks");
// var c="100";
// var d=a*c/b;
// document.write("The percentage of" + " " + a + " " + "*" + " " + c + " " + "/" + " " + "by" + " " + b + " " + "is" + " " + d) 



// wrong
// var a3= "Value after variable declaration is undefined";
// document.write(a3)
// for (var i=5; 1<10; i++)
//  {
// document.write(i)
// }

// wrong
// var a3= "Value after variable declaration is undefined";
// document.write(a3)
// var val1="5"
// document.write("Initial Value:" + " " + val1)
// var val2=val1+1;
// document.write(val2)



// 4. var cost="600";
// var ticket="5";
// var total=ticket*cost;
// document.write("Total cost to buy " + ticket + " to a movie is " + total + " PKR" )



// 5. var tb="Table of 4";
// document.write(tb + "<br>")
// for (var i=1; i<11; i++)
// {
//     document.write("4 " + " * " +  i  + " = " + 4*i + "<br>")
// }



// 6. var degree=prompt("Enter Fahrenheit Temperature");
// C="(F-32) * 5/9";
// alert(C);


// // var degree1=prompt("Enter Celcius Temperature");

// //     F="(C*9/5) + 32";
// // alert(C);

// //     C="(F-32) * 5/9";
// // alert(F);




// 7. var price1=prompt("Enter the price of item 1");
// var quantity1=prompt("Enter the Quantity of item 1");
// var price2=prompt("Enter the price of item 2");
// var quantity2=prompt("Enter the Quantity of item 2");
// var total=prompt("Enter the Shipping Charges");
// var charges=price1*quantity1 + price2*quantity2 + total;

// document.write("Price of item 1 is " + " " + price1)
// document.write("Quantity of item 1 is " + " " + quantity1)
// document.write("Price of item 2 is " + " " + price2)
// document.write("Quantity of item 2 is " + " " + quantity2)
// document.write("Shipping charges" + " " + total)

// document.write("Total cost of your order is " + charges)




//8. var total=prompt("Enter the total marks");
// var obtained=prompt("Enter the obtained marks");

// var per= obtained*100/total;

// document.write("Total Marks" + " " + total)
// document.write("Obtained Marks" + " " + obtained)
// document.write("Percentage is" + " " + per)


// 10. var a = 10;
// var b = 5 + a;
// var c = b * 10; 
// var d = c / 2;
// alert("Your ans is " + " " + d)


// 11. var current=prompt("Enter the current year");
// var birth=prompt("Enter the birth year");
// var age=current-birth;

// document.write("Current Year: " + " " + current)
// document.write("Birth Year: " + " " + birth)
// document.write("Your Age is: " + " " + age)





// 12. var r=prompt("Enter the value of radius");
// var pi = 3.142;
// var result = 2*pi*r;

// document.write("Radius of a circle: " + " " + r);
// document.write("Circumference of a circle: " + " " + result);




// chapter 6 to 9

// 2. var a=2, b=1;

// var result = --a - --b + ++b + b--;
// document.write(result)



// 3. var name1= prompt("Enter the first name");
// var name2= prompt("Enter the second name")
// alert("hi I am " + name1 + " " + "hello I am " + name2)



// 5. var num = prompt("Enter your lucky num");
// var tb = num;

// if (tb= num) {
// document.write(tb + "<br>")
// for (var i=1; i<11; i++)
// {
//     document.write(num + " * " +  i  + " = " + num*i + "<br>")
// }
//    } else {
//        var tb="Table of 5";
// document.write(tb + "<br>")
// for (var i=1; i<11; i++)
// {
//     document.write("5 " + " * " +  i  + " = " + 5*i + "<br>")
// }
//    }




// 6. var sub1 = prompt("Enter the first Subject");
// var sub2 = prompt("Enter the second Subject");
// var sub3 = prompt("Enter the third Subject");

// var total = 100;

// var obt1 = prompt("Enetr the obtained marks for ");
// var obt2 = prompt("Enetr the obtained marks for", sub2);
// var obt3 = prompt("Enetr the obtained marks for", sub3);

// var result = (obt1 + obt2 + obt3) * total 

// document.write(result)



// Cahpater 9 to 11

// 1. var city = prompt("Enter your city name");
// var arr = ["Karachi"]

// if (city == arr ) {
//     alert("Welcome to city of Lights")
// } else {
//     alert("You have entered another city")
// }



// 2. var gender = prompt("Enter your gender");
// var arr1 = ["Male"]
// var arr2= ["Female"]
// if (gender == arr1 ) {
//     alert("Good Morning Sir")
// } else {
//     alert("Good Morning ma'am")
// } 


// 3. var light = prompt("Enter Light Color");
// var arr1 = ["Green"];
// var arr2= ["Yellow"];
// var arr3= ["Red"];

// if (light == arr1 ) {
//     alert("Move now")
// } else if (light === arr2) {
//     alert("Ready to move")
// } else {
//     alert("Must Stop")
// } 



// 4. var fuel = prompt("Enter the Fuel Quantity");
// if (fuel <= 0.25) {
//     alert("Please refill the fuel")
// }

// 5. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 

// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 

// var c = 12; 
// if (c++ === 13){ alert("condition 1 is true"); } 
// if (c === 13){ alert("condition 2 is true"); } 
// if (++c < 14){ alert("condition 3 is true"); } 
// if(c === 14){ alert("condition 4 is true"); }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost)
// { alert("The cost equals"); }

// if (true){ alert("True"); } if (false){ alert("False"); } 
 
// if("car" < "cat"){ alert("car is smaller than cat"); } 


//6. var percent = +prompt ("Enter your percent")
// if (percent >= 80 && percent <= 100)
// {
//     alert("A+, Excellent")
// }
// else if (percent >= 70 && percent <= 80) 
// {
//     alert("A, Good")
// }
// else if (percent >= 60 && percent <= 70) 
// {
//     alert("B, You need to improve")
// }
// else if (percent >= 50 && percent <= 60) 
// {
//     alert("C, Sorry")
// }
// else {
//     alert("you did not write correct percent")
// }


// 7. var num1 = 6;
// var num2 = num1+1;
// var guess = prompt("Enter the secret num");
// if (guess == num1) {
//     alert("Bingo! Correct anser")
// } else {
//     alert ("Close enough to the correct answer")
// }


// 8. var i = prompt("Enter your num");
// if (i % 3 == 0) {
//     alert("divisible by 3");
//    } else {
//        alert("divisible not by 3");
//    } 




// 9. var num = prompt("enter")
// if ( num % 2 == 0) {
// 	alert('Even Number');
// }else{
// 	alert('Odd Number');
// }



// 10. var temp = +prompt ("Enter Temperature")
// if (temp >= 40)
// {
//     alert("Its too hot outside")
// }
// else if (temp >= 30) 
// {
//     alert("The weather today is Normal")
// }
// else if (temp >= 20) 
// {
//     alert("Today's weather is cool")
// }
// else if (temp >= 10) 
// {
//     alert("OMG! Today's weather is cool")
// }


// 11. var val1=prompt("Enter Your First Value")
// var sign=prompt("Enter Your Operator")
// var val2=prompt("Enter Your Second Value")

// console.log(val1+sign+val2)
// if (sign === "+")
// {
//      alert((+val1)+(+val2))
//  }

//  else if (sign === "-")
//  {
//      alert(val1-val2)
// }
// else if (sign === "*")
// {
//     alert(val1*val2)
// }
// else if (sign === "/")
// {
//     alert(val1/val2)
// }
// else if (sign === "%")
// {
//     alert(val1/val2*100 + "%")
// }




// Chapter 12 - 13

// 1. var strings = prompt("Enter the string");
// var i=0;
// var character='afia';
// while (i <= strings.length){
//     character = strings.charAt(i);
//     if ((character * 1)){
//         alert('character is numeric');
//     }else{
//         if (character == character.toUpperCase()) {
//             alert ('upper case true');
//         }
//         if (character == character.toLowerCase()){
//             alert ('lower case true');
//         }
//     }
//     i++;
// }


// 2. var int1 = prompt("enter the integer")
// function integer(a,b) {
//     if(a>=0 && b>=0)
//     {
//         if(a!=b)
//         {
//             document.write("The larger number is " + Math.max(a,b));
//         }
//         else
//         {
//             document.write("Both numbers are equal!")
//         }
//     } else {
//         document.write("Please add an integer!");
//     }
// }





// 5. var password = prompt("Please enter your pass");
// var pas = "PakistanZindabad";

// if (password == pas) {
//     alert ("Correct! The password you entered matches the original password")
// } else {
//     alert ("Incorrrect Password")
// }


// 6. var hour = prompt("Enter the hour") 
// if (hour <= 18) { 
//     alert("Good day"); 
// }
//     else {
//         ("Good evening") 
//     } 
 
 




