// Example 1: Call back function
// const julie = () => {
//     console.log('Getting Ready for the office, cab has come.');
//     // John
//     // setTimeout(3000);
//     setTimeout(
//         // when john comes back - call the callback - Neighbour Ben
//         function() {
//             console.log("John collects the key from Ben.");
//         },
//     3000);

//     console.log("Juile left for office.");
// };

// julie();


// Example 2: Promise

// Step 1: promisfy async function
const shekharPromise = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));
// Step 2: implement  the promise funtion - handler
const checkPromise = () => {
    return shekharPromise(5000).then(() => {
        console.log("Timer of 5 sec is now finished");
    });
}

// Step 3: call the function synchronously - async, await
// we are here forcing JS to work synchronously
const finalTest = async () => {
    console.log("Before calling my promise.");
    await checkPromise();
    console.log("After calling my promise.");
}

finalTest();