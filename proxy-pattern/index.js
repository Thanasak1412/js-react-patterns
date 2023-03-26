import { isAllLetters, isValidEmail } from "./validator";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const handler = {
  get: (target, prop) => {
    console.log(`${new Date()} | the value of ${prop} is ${target[prop]}`);
    return `${new Date()} | the value of ${prop} is ${target[prop]}`;
  },
  set: (target, prop, value) => {
    if (prop === "username") {
      if (value.length < 3) {
        throw new Error("Please user a longer username");
      } else if (!isAllLetters(value)) {
        throw new Error("You can only use letters");
      }
    } else if (prop === "email" && !isValidEmail(value)) {
      console.log("Please provide a valid email");
      return false;
    } else if (prop === "age") {
      if (isNaN(value)) {
        throw new Error("Please provide a valid age");
      } else if (value <= 18) {
        throw new Error("User cannot be younger than 18");
      }
    }

    return Reflect.set(target, prop, value);
  },
};

const userProxy = new Proxy(user, handler);

console.log("username => ", userProxy.username);
