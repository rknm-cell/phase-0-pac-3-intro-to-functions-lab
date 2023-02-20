function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  return console.log(string.toUpperCase());
}
function logWhisper(string) {
  return console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
  console.log(string);
  console.log(string.toLowerCase());
  if (string === string.toLowerCase())
  return "I can't hear you!";
  console.log(string.toUpperCase());
  if (string === string.toUpperCase())
  return "YES INDEED!";
  if (string === "Let's have dinner together!")
  return "I would love to!"
}
  