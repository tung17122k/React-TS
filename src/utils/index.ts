import { FinalProduct } from "./interface";

/* eslint-disable @typescript-eslint/no-unused-vars */
export function total(a: number, b: number) {
  return a + b;
}
total(5, 7);

// const variable: dataTypes = value;
// const age: number = 30;
// const name: string = "Tokyo";
// const isStudent: boolean = false;
// const school = "Thuy Phuong";

function raiseError(err: string): never {
  throw new Error(err);
}

// interface

const product: FinalProduct = {
  name: "car ",
  brand: "bmw ",
  color: "red",
  speed: 1000,
};

function addProduct(product: FinalProduct) {
  // product.speed
  // product.name
}

addProduct(product);
