// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// // fetch("https://swapi.dev/api/people/1/")
// //   .then((res) => {
// //     console.log("RESOLVED!", res);
// //     return res.json();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //     return fetch("https://swapi.dev/api/people/2/");
// //   })
// //   .then((res) => {
// //     console.log("SECOND REQUEST RESOLVED!!!");
// //     return res.json();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((e) => {
// //     console.log("ERROR!", e);
// //   });

// const loadStarWarsPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("ERROR!!!", e);
//   }
// };

// loadStarWarsPeople();

// --- My code ---
fetch("https://swapi.dev/api/people/1/") // returns a promise 
.then(res => {
  console.log("REsolved", res); // this promise is resolved as soon as fetch receives any headers so it may not have
  // all the text, data (json) (the body part) so we use json() below to retrieve data
  return res.json() // json() returns a promise that resolves with the result of parsing the body text as JSON.
})
.then(data => {
  console.log("Body", data);
})
.catch((e) => {
  console.log("ERROR!!!", e);
})