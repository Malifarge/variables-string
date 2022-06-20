
// 01 - Hello world

console.log("Hello World !")

// 02 - String

const sentence = "my name is Thomas"
console.log(sentence);

// 03 - Concaténation

const name = "Thomas"
console.log(`Nice to meet you ${name}`);

// 04 - String Length

const sentence2 = "I'm a new text !"
console.log(sentence2.length);

// 05 - Replace

let food = "croissant is meh" 
food = food.replace("meh","so good")
console.log(food);

// 06 - Up and Down

const basic = "This is Cool"
const basicUp = basic.toUpperCase()
const basicDown = basic.toLowerCase()
console.log(basic,basicUp,basicDown);

// 07 - Split

 const word = "banana"
 const letter = word.split("")
 console.log(letter);

//  08 - Template

const age = "25"
const template = `I'm ${age} years old`
console.log(template);

// test MDN doc

let chat= "chat"
console.log(chat[2]);

let s_prim = "toto";
let s_obj = new String(s_prim);

console.log(typeof s_prim);
console.log(typeof s_obj); 


let s1 = "2 + 2";                
let s2 = new String("2 + 2");    
console.log(eval(s1));           
console.log(eval(s2));  

console.log(eval(s2.valueOf()));