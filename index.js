
// 01 - Hello world

console.log("Hello World !")

// 02 - String

const sentence = "my name is Thomas"
console.log(sentence);

// 03 - Concaténation

const firstName = "Thomas"
console.log(`Nice to meet you ${firstName}`);

// 04 - String Length

const sentence2 = "I'm a new text !"
console.log(sentence2.length);

// 05 - Replace

const food = "croissant is meh" 
console.log(food.replace("meh","so good"));

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

const age = 25
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

const sentence3 = 'The quick brown fox jumps over the lazy dog.';

const word2 = 'over';

const word3 = 'wolf'

console.log(`The word "${word2}" ${sentence3.includes(word2) ? 'is' : 'is not'} in the sentence`);
console.log(`The word "${word3}" ${sentence3.includes(word3) ? 'is' : 'is not'} in the sentence`);

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

console.log(str.slice(-13, -10));
// personal test

let changed = "bonjour"
console.log(changed.replaceAll('o','a'));


const demoPadStart = '30515265554975215'
const demoMaskedNumber = demoPadStart.slice(-4);
console.log(demoMaskedNumber.padStart(demoPadStart.length,'0'));

const testPadEnd = '50'
console.log(testPadEnd.padEnd(4,'m'))