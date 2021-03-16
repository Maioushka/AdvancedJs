function add(num1, num2) {
  return num1 + num2;
}

const substract = (x, y) => {
  return x - y;
};

const multiply = (num1, num2) => num1 * num2;

const result = (num1, num2, cb) => {
  const numResult = cb(num1, num2);
  console.log(`Das Ergebnis ist ${numResult}`);
};

result(12, 15, substract);
result(14, 77, add);
result(22, 35, multiply);

//function greet() {
//  console.log("Hallo dudes");
//}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("hallo");
});

//==========================================================================================================================================
const user = {
  name: "Jenny",
  age: 25,
  hobbies: ["Sport", "Programmieren", "essen"],
  password: "12345",
};

user.email = "jenny@web.de";

const { password } = user;
const { age } = user;
console.log(typeof password, typeof age);

//console.log(user.name);
//console.log(user["name"]);
////Object destructuring
//const { name, age } = user;
////arr destructuring
//const numbers = [1, 2, 3, 4];
//const [NumberOne, NumberTwo, NumberThree] = numbers;

//==========================================================================================================================================
//Methoden
let userTwo = {
  name: "Jenny",
  age: 25,
  hobbies: ["Sport", "Programmieren", "essen"],
  password: "12345",
  greet() {
    console.log(this);
    return `Hallo ich bin ${this.name} und ich bin ${this.age} Jahre alt`;
  },
};
console.log(userTwo.greet());

let { greet } = userTwo;
const bindGreed = greet.bind(userTwo);
console.log(bindGreed());

//==========================================================================================================================================
//Instanzen
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

if (arr1 === arr2) {
  console.log("ich bin gleich");
} else {
  console.log("ich bin save nicht gleich");
}

//==========================================================================================================================================
//Klassen
class User {
  constructor(__lastName, __email, __password) {
    this.lastName = __lastName;
    this.email = __email;
    this.password = __password;
  }
  login(text = "Hallo") {
    console.log(`${text} : ${this.lastName} ist Eingelogged`);
  }
  static CallMe() {
    console.log("Hallo, CallMe");
  }
}

const peter = new User("Heiker", "heiker@web.de", "12345");
const jenny = new User("Jenny", "jenny@web.de", "123456");
peter.login();
jenny.login("HEy");

User.CallMe();
//==========================================================================================================================================
class Customer {
  set customerInfo(value) {
    this.firstName = value.firstName;
    this.lastName = value.lastName;
  }

  get customerInfo() {
    if (this.firstName === "heinz") {
      return "Du bist Heinz";
    }
    return {
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }

  setCustomerMethod(value) {
    this.firstName = value.firstName;
    this.lastName = value.lastName;
  }
}

const heinz = new Customer();
//code dazwischen Kredikarte ist ok;
heinz.setCustomerMethod({
  firstName: "Heinz",
  lastName: "Pete",
});
//heinz.customerInfo = {
//  firstName: "heinz",
//  lastName: "bernd",
//};

console.log(heinz.customerInfo);
//==========================================================================================================================================
//KLassen erweitern
class Post {
  constructor(__title, __text, __creatorId) {
    this.title = __title;
    this.text = __text;
    this.creatorId = __creatorId;
  }
  printTitle() {
    console.log(this.title);
  }
}

class ImagePost extends Post {
  constructor(__title, __text, __creatorId, __imgUrl) {
    super(__title, __text, __creatorId);
    this.imageUrl = __imgUrl;
  }
  printImageUrl() {
    console.log(this.imageUrl);
  }
}

const petersBlogPost = new Post(
  "Bald ist es vorbei",
  "Alter hat der heute viel geredet",
  "12345"
);
petersBlogPost.printTitle();

const jennysBlogPost = new ImagePost(
  "Das ist der Image Post",
  "some cool stuff here",
  "1123",
  "https://irgenwas.de/unicorn.jpg"
);
jennysBlogPost.printTitle();
jennysBlogPost.printImageUrl();
