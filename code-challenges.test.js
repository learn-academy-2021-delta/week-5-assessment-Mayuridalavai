// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// describe method that lists the name of the function
// test method describes what function does
// an expect method calls the function to test arguments

describe("codeString",() => {
    it('takes afunction that takes in a string and returns a coded message',() =>{
    expect(codeString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeString(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeString(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
    })

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"



// b) Create the function that makes the test pass.

//declare a function named codeString and take one parameter string
//split the string using in to array like string.split('') 
//declate variable named newstr
//use map for iterating the whole string
//use value.replace to replace the 'aeio' to '4310' using syntax .replace(/[what you want to replace]/g, 'replace with')
// join the array as string  using join like newstr.join("") 

const codeString = (string)=>{
    var string1 = string.split('')
    let newStr = string1.map(value => {
        return value = value.replace(/['a']/g,'4'),
       value = value.replace(/['e','E']/g,'3'),
       value = value.replace(/['i']/g,'1'),
       value = value.replace(/['o']/g,'0')
    })
       
    return newStr.join("")
}
console.log(codeString(secretCodeWord1))
console.log(codeString(secretCodeWord2))
console.log(codeString(secretCodeWord3))





// // --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// // a) Create a test with expects statement using the variable provided.

// //describe method that lists the name of the function
// //test method describes what function does
// //an expect method calls the function to test arguments

describe("singleLetter",() => {
    it('given an array of words and a single letter and returns all the words that contain that particular letter',() =>{
    expect(singleLetter(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(singleLetter(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    
    })
    })

 var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
 var letterA = "a"
 // Expected output: ["Apple", "Banana", "Orange"]
 var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
 // Expected output: ["Cherry", "Blueberry", "Peach"]



// b) Create the function that makes the test pass.

//declare a function named singleLetter and take to parameters array and string
//take a variable named newarray 
//use filter to iterate the array of string 
//includes is a method performs a case-sensitive search 
//toUppercase is used to get Uppercase values

const singleLetter = (array,string)=>{
    let newarray = array.filter(value => { 
        return value.includes(string) || value.includes(string.toUpperCase())
      })
      return newarray
}
console.log(singleLetter(arrayOfWords1,letterA))
console.log(singleLetter(arrayOfWords2,letterE))







// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

//describe method that lists the name of the function
//test method describes what function does
//an expect method calls the function to test arguments

describe("fullHouse",() => {
    it('array of five numbers and determines whether or not the array is a “full house”',() =>{
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    
    })
    })

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// // b) Create the function that makes the test pass.

// declare a function named fullHouse 
//take variable named count(x) to count the duplicates in array
//The (for...of) statement iterates over values that the iterable object defines to be iterated over
//take variable named value count the value in objects
//conditional statement if/else is used to check the array of values

 const fullHouse = (array) => {
    let count = {}
    for(let x of array){
      count[x] = (count[x] || 0) + 1;
    }
    let value = Object.values(count);
    if((value[0] === 2 && value[1] === 3) || (value[1] === 2 && value[0] === 3)){
      return true;
    }else
    return false;
}       
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))





