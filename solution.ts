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

const getLength = (param: string | number[]) => {
  if (typeof param === "string") {
    return param.length;
  } else if (Array.isArray(param)) {
    return param.length;
  }
};

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

type TItems = {
  title: string;
  rating: number;
};
const filterByRating = (items: TItems[]): TItems[] => {
  const result = items.filter((item) => item.rating >= 4);

  return result;
};

type TUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: TUser[]): TUser[] => {
  return users.filter((user) => {
    if (typeof user.isActive !== "boolean") {
      return false;
    } else {
      return user.isActive === true;
    }
  });
};

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

const getUniqueValues = (
  param1: (string | number)[],
  param2: (string | number)[]
) => {
  const result: (string | number | undefined)[] = [];

  for (let i = 0; i < param1.length; i++) {
    const element1 = param1[i];
    let find = false;

    for (let j = 0; j < result.length; j++) {
      const element2 = result[j];
      if (element2 === element1) {
        find = true;
        break;
      }
    }

    if (!find) {
      result[result.length] = element1;
    }
  }

  for (let i = 0; i < param2.length; i++) {
    const element1 = param2[i];
    let find = false;

    for (let j = 0; j < result.length; j++) {
      const element2 = result[j];
      if (element2 === element1) {
        find = true;
        break;
      }
    }

    if (!find) {
      result[result.length] = element1;
    }
  }
  return result;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
  return products.reduce((total, item) => {
    const totalPrice = item.price * item.quantity;
    const totalFinalPriceWithDiscount =
      item.discount && item.discount > 0
        ? totalPrice - (totalPrice * item.discount) / 100
        : totalPrice;

    return total + totalFinalPriceWithDiscount;
  }, 0);
};
