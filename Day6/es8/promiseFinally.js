// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Success!"), 2000);
// });

// myPromise
//     .then(value => console.log("Resolved:", value))
//     .catch(error => console.log("Rejected:", error))
//     .finally(() => console.log("Promise Settled - Cleanup Code"));

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error occurred!"), 2000);
});

myPromise
    .then(value => console.log("Resolved:", value))
    .catch(error => console.log("Rejected:", error))
    .finally(() => console.log("Cleanup tasks executed"));

let a = new Promise((resolve, reject) => {
    resolve("Done!");
});
    
a
    .finally(() => console.log("Promise is settled"))
    .then(value => console.log(value));
    
