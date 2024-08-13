"use strict";

while (true) {
  console.log("testing");

  break;
}
let firstName = "Sarah";
let lastName = "Barker";
let fullName = firstName + " " + lastName;
console.log(fullName);

let myAge = 21;
console.log(myAge);

let myBirthday = "April 10";
console.log(myBirthday);

let pineapplePizza = true;
console.log(pineapplePizza);

const lifeEvents = [
  "I was born in Tampa, Florida.",
  "I went to Virginia Commonwealth University.",
  "I drive a big rah, rah Jeep Wrangler.",
  "I love to be in nature.",
];
console.log(lifeEvents);

if (pineapplePizza === true)
  console.log(
    "My name is " +
      fullName +
      " and I LIKE pineapples on pizza. I am currently " +
      myAge +
      " years old and my birthday is on " +
      myBirthday +
      "."
  );
else
  console.log(
    "My name is " +
      fullName +
      " and I do NOT like pineapples on pizza. I am currently " +
      myAge +
      " years old and my birthday is on " +
      myBirthday +
      "."
  );

for (let zebra = 100; zebra < 200; zebra += 10) {
  console.log(zebra);
}
for (let i = 0; i < 4; i += 1) {
  // console.log(i);
  console.log(lifeEvents[i]);
}

let counter = 0;
console.log(counter);
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  if (randomNumber !== 5) {
    counter += 1;
    console.log(randomNumber + "!== 5");
  } else {
    counter += 1;
    console.log(
      "5 === 5. It took" +
        " " +
        counter +
        " iterations to randomly generate the number 5."
    );
    break;
  }
}
