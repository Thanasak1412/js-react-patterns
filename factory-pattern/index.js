import * as books from "./books.js";

const createObject = (type) => {
  if (type === "book1") {
    return new books.Book1();
  } else if (type === "book2") {
    return new books.Book2();
  } else if (type === "book3") {
    return new books.Book3();
  } else if (type === "book4") {
    return new books.Book4();
  } else if (type === "book5") {
    return new books.Book5();
  }
  throw new Error("Invalid object type");
};

const boo1 = createObject("book1");

console.log("boo1 => ", boo1);
