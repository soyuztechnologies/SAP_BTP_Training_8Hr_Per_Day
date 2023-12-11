const ironman = require('./modules/reuse');

let nSum = ironman.addNumber(20, 30);
console.log(nSum);

let nArrLength = ironman.getArraySize([1,2,3,4,5,5,6]);
console.log("Size of array is", nArrLength);

ironman.printArray(["Ironman", "Captain America", "Hulk", "Thor"]);

ironman.printJSON({
    "team": "Mumbai Indians",
    "captain": "Rohit Sharma",
    "viceCaptain": "Hardik Pandya"
})