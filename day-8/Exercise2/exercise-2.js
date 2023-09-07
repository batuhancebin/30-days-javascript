const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const data = [];
let keys = Object.keys(users);
let values = Object.values(users);
keys.forEach((key) => {
  data.push({
    name: key,
    email: values[keys.indexOf(key)].email,
    skills: values[keys.indexOf(key)].skills,
    age: values[keys.indexOf(key)].age,
    isLoggedIn: values[keys.indexOf(key)].isLoggedIn,
    points: values[keys.indexOf(key)].points,
  });
});
data.forEach((user) => {
  console.log(user.name + ":" + user.skills);
});

let max = 0;
let maxName = "";
for (let i = 0; i < data.length; i++) {
  if (data[i].skills.length > max) {
    max = data[i].skills.length;
    maxName = data[i].name;
  }
}
console.log(maxName + " has the most skills");

let maxPoints = 0;
let maxPointsName = "";
for (let i = 0; i < data.length; i++) {
  if (data[i].points > maxPoints) {
    maxPoints = data[i].points;
    maxPointsName = data[i].name;
  } else if (data[i].points === maxPoints) {
    maxPointsName = maxPointsName + " and " + data[i].name;
  }
}
console.log(maxPointsName + " has the most points");

let mernStack = [];
for (let i = 0; i < data.length; i++) {
  if (
    data[i].skills.includes("MongoDB") &&
    data[i].skills.includes("Express") &&
    data[i].skills.includes("React") &&
    data[i].skills.includes("Node")
  ) {
    mernStack.push(data[i].name);
  }
}
console.log(mernStack);

let newUser = {
  name: "Batuhan",
  email: "batuhancebin@gmail.com",
  skills: ["java", "python", "c"],
  age: 22,
  isLoggedIn: false,
  points: 46,
};
data.push(newUser);
