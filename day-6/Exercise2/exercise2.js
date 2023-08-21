function generateRandomId() {
  let rndmId = Math.random().toString(36).substr(2, 12);
  return rndmId;
}
//24 characters pw
function generateRandomPassword() {
  let rndmPw = Math.random().toString(36).substr(2, 24);
  return rndmPw;
}

function createUser() {
  let user = {
    id: generateRandomId(),
    password: generateRandomPassword(),
  };
  return user;
}
console.log(createUser());

function generateRandomHexaDecimal() {
  let rndmHex = Math.random().toString(16).substr(2, 6);
  return rndmHex;
}
console.log("#" + generateRandomHexaDecimal());

function generateRandomRGB() {
  let rndmRGB = Math.floor(Math.random() * 255);
  return rndmRGB;
}
console.log(
  "rgb(" +
    generateRandomRGB() +
    "," +
    generateRandomRGB() +
    "," +
    generateRandomRGB() +
    ")"
);

