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
  console.log(shout(string))
}

// 4. logWhisper function
function logWhisper(string) {
  console.log(whisper(string))
}

// 6. sayHiToGrandma function
function sayHiToGrandma(string)
  // 6a. Grandma can hear you {
  if (string === shout(string)) {
    return "YES INDEED!"
  }
  // 6b. Grandma can't hear you
  else if (string === whisper(string)) {
    return "I can't hear you!"
  }
  // 6c. I love you grandma
  else if (string = "I love you, Grandma") {
    return "I love you, too." 
  }
}