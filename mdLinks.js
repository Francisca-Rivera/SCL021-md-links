import { transformAbsoluteLink } from "./index.js";

const inputRuta = process.argv[2];

const absoluteUser = transformAbsoluteLink(inputRuta);
console.log(absoluteUser);

console.log("hola");
