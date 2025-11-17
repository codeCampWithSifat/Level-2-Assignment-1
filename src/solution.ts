const formatValue = (
  param: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof param === "string") {
    return param.toUpperCase();
  } else if (typeof param === "number") {
    return param * 10;
  } else if (typeof param === "boolean") {
    return !param;
  }
};

// console.log(formatValue(false));

const getLength = (param: string | number[]) => {
  if (typeof param === "string") {
    return param.length;
  } else if (Array.isArray(param)) {
    return param.length;
  }
};

// console.log(getLength([10, 20, 30, 40]));

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

type TItems = {
  title: string;
  rating: number;
};
const filterByRating = (items: TItems[]): TItems[] => {
  const result = items.filter((item) => item.rating >= 4);

  return result;
};

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

type TUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: TUser[]): TUser[] => {
  const activeUsers = users.filter((user) => user.isActive === true);
  return activeUsers;
};

// const users = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
// ];

// console.log(filterActiveUsers(users));

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (param: Book): void => {
  const isAble = param.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${param.title}, Author: ${param.author}, Published: ${param.publishedYear}, Available: ${isAble}`
  );
};
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
// Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes

// const getUniqueValues = (
//   param1: (string | number)[],
//   param2: (string | number)[]
// ) => {
//   const getUniqueValues: (string | number)[] = [];

//   for (let i = 0; i < param1.length; i++) {
//     const element = param1[i];
//     let find = false;
//     for (let index = 0; index < getUniqueValues.length; index++) {
//       if( getUniqueValues[index] === param1[i]){
//         find = true
//         break
//       }
//     }
//     if(!find) {
//       getUniqueValues[getUniqueValues.length] = element
//     }
//   }
// };

// function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
//   const result: (string | number)[] = [];

//   // Push all arr1 values
//   for (let i = 0; i < arr1.length; i++) {
//     let found = false;

//     // Check for duplicate
//     for (let j = 0; j < result.length; j++) {
//       if (result[j] === arr1[i]) {
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       result[result.length] = arr1[i];
//     }
//   }

//   // Push all arr2 values
//   for (let i = 0; i < arr2.length; i++) {
//     let found = false;

//     for (let j = 0; j < result.length; j++) {
//       if (result[j] === arr2[i]) {
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       result[result.length] = arr2[i];
//     }
//   }

//   return result;
// }

// sample input
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

// sample output:
// [1, 2, 3, 4, 5, 6, 7]

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
  return products.reduce((total, item) => {
    const totalPrice = item.price * item.quantity;
    const totalFinalPriceWithDiscount = item.discount
      ? totalPrice - (totalPrice * item.discount) / 100
      : totalPrice;

    return total + totalFinalPriceWithDiscount;
  }, 0);
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
