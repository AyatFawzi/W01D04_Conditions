console.log(arrowTitle)
/* START CODE UNDER THIS LINE */
//Figure out the syntax errors in the following, and fix them.

// 1
//if (10 =< 10){  //The equal sign is reversed
 
//}
//f (5 > 3)//braces {}
//if (5 > 10){
//}
//else(true){}
//if (2 < 3 && 7 > 10){} //}
//if ("hello" = "hello")//===}

//Predict the value of the following expressions and explain why.
//true && true && false;//false
//true || (true && false);//true
//5 === 2 || 1 < 10;//true
//(!false && true) || (!true && true);//true

//Write a function legalAge that accepts one argument age and returns true if the age is over eighteen and false if it is below that.

const legalAge = function (age) {
if(age>=80){
return true;
consol.log("true");
}
else{
return false;
consol.log("false");}}

//Write a function isItMyName that accepts one argument name and returns true if the name is the same as your name and return false if it is not.
const isItMyName = function (name) {
    if(name==="name"){
        return true;
        consol.log("true");}
        else 
        {
        return false;}
    }
    //Write a function positiveOrNegative that accepts one argument number and returns a string saying whether 
    //the number is positive, negative, or if it is a neutral number like zero.
    const positiveOrNegative = function (number) {
        if(number >=0)
        {
            return " whether the number is positive";}
            else
                if(number <=0){
            return " whether the number is negative";
    
        }
        return " neutral number like zero.";
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//practic
//Write a function toLowerOrUpperCase that accepts two arguments, string and strCase, and 
//returns the string in lower case or upper case depending on what was specified in the second parameter.
// Check out the following builtin methods then solve the question.

const toLowerOrUpperCase = function (string, strCase) {
if(strCase=="lower" ){

return string.toLowerCase();}
else
if(strCase=="upper" ){
return string.toUpperCase();
}
else
{
    return "String case must be lower or upper";
}

//Write a function howLong that accepts one argument word and returns whether
 //the word is short, medium, long, or very long. Check out the following 
//examples about the length property then answer the question.
const howLong = function (string) {
    if(string.length <=5){return "short";
consol.log ("short");}
    else
    if(string.length >=5 &&  string.length <=8)
    {
        return"medium"
        console.log("medium");
}
else 
if(string.length>=9 && string.length <=11){
return "long";
console.log("long");
}
else 
if(string.length>=13)
return "very long";
console.log("very long");
}

}
/// since strings store a series of characters in an ordered way
// we could use the index of the character to access the character in the string
// each character in the string has its own unique identifying number (index)
// the index value starts at zero and for every letter that is added after the first one, the index will be incremented by one
const startsWith = function (string, character) {
    if (string[0].toLowerCase()===character[0].toLowerCase()){
        return "true"
        console.log("true");}
    
        else 
if(string[0].toUpperCase()===character[0].toUpperCase()){
    return"true";

    console.log("true");}
else
 return "false";}


//Write a function endsWith that accept two string arguments, string and character, 
//and returns true if the string ends with that character.


const endsWith = function (string, character) {
    if (string .length-1===character.length-1){
        return "true"
        console.log("true");}
    
        else 
if(string[0].toUpperCase()===character[0].toLowerCase()){
    return"true";

    console.log("true");}
else
 return "false";}
  
      
//Write a function deposit that accepts an argument amount and returns the deposited amount. The function should only accept positive 
//number arguments otherwise return "Please enter a positive number" 
//if it is not positive and return "Please enter a number" if the type of the argument is not a number

const deposit = function (amount) {
    if(amount>=0)
    {return amount;
    console.log(amount);}

    else 
    if (amount<=0){
    return "Please enter a positive number";
console.log(amount);}
   return  " the argument is not a number";}

//Write a function oddOrEven that accepts a number argument number and returns a string stating if the number is odd or even.
const oddOrEven = function (number) {
    if((number%2)==0){
    return "odd";
console.log("odd");}
    else
    {if((number%2) !=0){
    return "even"
    console.log("even");}}
    }

    //Write a function stringCase that accepts a string argument string and returns 
    //whether the string is all upper case or all lower case or mix case.
    const stringCase = function (string) {
        if(string.toLowerCase()){
return "this string is lower";
console.log("this string is lower");}
else 
if (string.toUpperCase()){
return "this string is upper";
console.log("this string is upper");}

else
console.log("mix case");
        }

    
    //Write a function isLeapYear that accepts a number argument year and returns
     //true if the year is a leap year. Leap years are divisible by 4 but non leap years are divisible 
    //by 100 for the exception of 400 (leap years are also divisible by 400).
    const isLeapYear = function (year) {
if(year%4==0){

    return "leap year";
console.log("true leap year");}

    else
if(year%100 ==0 && year %400==0){
    return "non leap";
console.log("non leap");


}}
//Write a function login that accepts two string arguments, username and password,
// and returns a string login successful if the username length is more than 6 and password length is 
//more than or equal to 8 otherwise return login failed.

const login = function (username, password) {
 if(username=="john_doe"&& password=="koljgwE"||username=="jane_doe"&&password=="12345678"){

     return("log in succf");
 console.log("log in succf");}
 else {
 return("faild");
 console.log("faild");}}


 const login1 = function (username1, password1){
if(username1.length>=6&&password1.length<=8){
    return "username must be more than 6 characters long";
    consol.log("username must be more than 6 characters long");}
else {
return  "password must be at least 8 characters long";
consol.log( "password must be at least 8 characters long");}}




const login3 = function (username3, password3){
if(username3=="john_doe"&& password3=="koljgwE"||username3=="jane_doe"&&password3=="12345678")
{
return "name is exit";
console.log("exit");}

 else  {
  return "not exit";
console.log("not exit");
 }}
















