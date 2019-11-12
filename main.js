const reader= require("readline-sync");
const util = require("./myUtils.js");
const min= reader.question("Enter minimum number= ")
const max=reader.question("Enter maximum number= ")
let primes = [];
for (i=min;i<=max;i++){

if(util.isPrime(i)){

primes.push(util.isPrime(i));
}
}

util.printPrimes(primes);

