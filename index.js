// Iteration 1: Names and Input
const hacker1 = "Aleksei";
console.log(`The driver's name is ${hacker1} `);
let hacker2 = "Mortimel";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let name = "";
for (let i=0;i < hacker1.length;i++) {
  name += hacker1[i].toUpperCase() + " ";
}
console.log(name);

let reverseName = ""
for(let i = hacker2.length-1; i >= 0; i--) {
  reverseName += hacker2[i]
}
console.log(reverseName);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
}
else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
}
else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu purus, vulputate quis facilisis pulvinar, cursus nec elit. Cras velit sapien, viverra eget augue eu, vehicula pulvinar sem. Vivamus metus urna, vulputate quis augue pharetra, dapibus bibendum sapien. Donec mattis pretium ante at dictum. Quisque semper feugiat lacus, sed tempus odio mollis nec. Maecenas eu ex vel mi finibus fermentum ut a mi. Nam eget nibh in nunc malesuada ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum non venenatis dolor. Pellentesque pharetra tortor turpis, sed volutpat justo elementum vitae. Fusce vehicula accumsan sodales. Suspendisse molestie turpis viverra, blandit mauris sed, eleifend felis. Vivamus laoreet, nisl vel fermentum lacinia, arcu tellus egestas nibh, vulputate commodo dolor arcu ac elit. Pellentesque lobortis tortor orci, et efficitur magna pellentesque et. Nulla suscipit enim est, sed molestie mi auctor cursus. Nam libero nulla, tincidunt a arcu ut, gravida pretium sapien. Etiam imperdiet elementum sapien, ac molestie lectus eleifend eget. Donec vel varius eros, quis fringilla augue. In hac habitasse platea dictumst. Maecenas tincidunt semper risus semper tempus. Aenean felis metus, congue et rhoncus in, luctus quis magna. Phasellus id quam maximus, efficitur eros vestibulum, mattis elit. Donec quis dui et urna mollis venenatis. Sed et rutrum magna. Sed eget arcu ligula. Pellentesque et tincidunt erat. Suspendisse eget est ornare, hendrerit nibh nec, faucibus leo. Praesent turpis ipsum, dignissim ut lectus nec, porttitor congue diam. Aliquam pharetra velit leo, eget egestas ante hendrerit et. Nunc nec eros ullamcorper ligula luctus sagittis. Sed suscipit ornare quam, ac pharetra metus tincidunt non. Pellentesque felis massa, congue in risus eget, vehicula ultricies velit. Morbi sed mi a massa dignissim maximus.`

let wordArray = longText.split(" ");
console.log(wordArray.length);

let countEt = 0;
for (word of wordArray){
  if(/^et[^a-z]$/i.test(word) || /^et$/i.test(word)) {
    countEt++;
  }
}
console.log(countEt);

//Bonus 2
let phraseToCheck = `"No 'x' in Nixon"`;
let phraseToCheckFormatted = "";
let possiblePalindrome = "";

const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

for (let i = 0; i < phraseToCheck.length ; i++) {
  if (isAlphaNumeric(phraseToCheck[i])){
      phraseToCheckFormatted += phraseToCheck[i].toUpperCase();
  }
}

for (let i= phraseToCheck.length-1; i >= 0; i--) {
  if (isAlphaNumeric(phraseToCheck[i])){
    possiblePalindrome += phraseToCheck[i].toUpperCase();
  }
}

if (phraseToCheckFormatted === possiblePalindrome){
  console.log("it's Palindrome");
}
else {
  console.log("it's not Palidrome");
}