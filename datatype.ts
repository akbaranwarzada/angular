/* 

___String___
let lName: string;
let capitalName: string;
lName = 'Akbar';
capitalName = lName.toUpperCase();
console.log(capitalName);

___Int___
let age = "33";
let result = parseInt(age);

___Boolean___
let isValid: boolean;
isValid = true
console.log(isValid);

*/
let emList: string[];
emList = ["1","2","34","5"];

let emList1: Array<string>;
emList1 = ["a", "avb"];

let emList3: Array<number>;
emList3 = [1,2,34,5];
let result = emList3.filter((num)=> num >= 2);

console.log(result);