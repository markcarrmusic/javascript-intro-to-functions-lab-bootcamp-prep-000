// 1. Shout Function
function shout(string) {
  return string.toUpperCase()
}

// 2. Whisper function
function whisper(string) {
  return string.toLowerCase()
}

// 3. logShout function
function logShout(string) {
  console.log(`${string}`.toUpperCase())
}

// 4. logWhisper function
function logWhisper(string) {
  console.log(`${string}`.toLowerCase())
}

// 5. Uppercase / Lowercase checks
var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true: the string is uppercase 

var lowercase = "hello!"

lowercase.toLowerCase() === lowercase // true: the string is lowercase

var mixedCase = "Hi there!"

mixedCase.toLowerCase() === mixedCase // false: the string is not all lowercase

mixedCase.toUpperCase() === mixedCase // false: the string is not all uppercase


// 6. sayHiToGrandma function
function sayHiToGrandmma(string) {
  if (`${string}`.toUpperCase() === uppercase) {
    return "YES INDEED!"
  }
  else if (`${string}`.toLowerCase() === lowercase) {
    return "I can't hear you!"
  }
  else if (`${string}` === "I love you, Grandma") {
    return "I love you, too."
  }
}