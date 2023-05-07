//  GLOBAL AXIOS DEFAULT !!

// axios.default.headers.common["Authorization"]='xcdbcbdvheorhvfnkvl';

// 1. GET request with config !!

// document.getElementById("btn").addEventListener("click", () => {
//     const config = {
//         method: "GET",
//         url: "axiostext.txt"
//     }

//     const promiseObj = axios(config);
//     console.log(promiseObj, 'promiseObj');
//     console.log("button clicked !!");

//     promiseObj.then((res) => {
//         console.log(res);
//         console.log(res.data);
//     })
// });


//  2.

//  shorthand for the getRequest :

// document.getElementById("btn").addEventListener("click", () => {
//     axios.get("axiostext.txt").then((res) => {
//         console.log(res, 'res');
//     }).catch((err) => {
//         console.log(err, 'err');
//     });
// })


// 3.  writing the .get is optional :

// document.getElementById("btn").addEventListener("click", () => {
//     console.log("button clicked !!");
//     axios("axiostext.txt").then((result) => {
//         console.log(result, "result");
//     }).catch((err) => {
//         console.log(err, "err");
//     });
// })


// 4. writing request config after the url !!


// document.getElementById("btn").addEventListener("click", () => {
//     console.log("button clicked  !!");

//     // here { method: "GET" } plays the role of config !! and here we won't be writing axios.get !!

//     axios("axiostext.txt", { method: "GET" }).then((result) => {
//         console.log(result, "result");
//     }).catch((err) => {
//         console.log(err, 'err');
//     });
// })


// 5. writing the .then() after the catch will acts as a finally method !!

// document.getElementById("btn").addEventListener("click", () => {
//     console.log("button clicked !!");
//     axios.get("axiostext.txt").then((result) => {
//         console.log(result, 'result');
//     }).catch((err) => {
//         console.log(err, 'err');
//     }).then(() => {
//         console.log("cleaned up !!");
//     })
// })


// 6. using async await fetching the text data !!

// document.getElementById("btn").addEventListener("click", async () => {
//     console.log('button clicked !!');
//     try {
//         const res = await fetch("axiostext.txt")
//         console.log(res, 'res !!');
//         if (!res.ok) {
//             throw new Error("an error occured while fetching !!")
//         }
//     } catch (error) {
//         console.log(error);
//     }
//     finally {
//         console.log('finally QQ');
//     }
// })


// 7 . getting the specific params data .

// document.getElementById("btn").addEventListener("click", async () => {
//     console.log("button clicked !!");
//     const config = {
//         // method:'GET',
//         params: { id: "1" }
//     }
//     axios.get("https://jsonplaceholder.typicode.com/posts/", config).then((result) => {
//         console.log(result, 'result');
//     }).catch((err) => {
//         console.log(err, 'err');
//     });
// })


//  8. POST request  !!

// document.getElementById("btn").addEventListener("click", () => {

//     const config = {
//         method: "POST",
//         url: "https://reqres.in/api/users",
//         headers: {
//             "content-Type": "application.json"
//         },
//         data: "{'name':'pankaj','job':'WEB DEV'}"
//     }

//     axios(config).then((res) => { console.log(res, 'res'); }).catch((err) => { console.log(err, 'err'); })
// })


//  //  8. POST request shorthand !!


// document.getElementById("btn").addEventListener("click", () => {
//     const config = {
//         headers: {
//             "content-Type": "application.json"
//         }
//     }
//     // POST request shorthand :
//     axios.post("https://reqres.in/api/users", "{'name':'pankaj jii','job':'web dev'}", config).then((result) => {
//         console.log(result, 'result');
//     }).catch((err) => {
//         console.log(err, 'err');
//     });
// })


//  9. POST request shorthand refactoring !!!!

// document.getElementById("btn").addEventListener("click", () => {
//     const config = {
//         headers: {
//             "content-Type": "application.json"
//         }
//     }
//     const url = "https://reqres.in/api/users"
//     const data = "{'name':'pankaj jii','job':'web dev'}"
//     // POST request shorthand :
//     axios.post(url, data, config).then((result) => {
//         console.log(result, 'result');
//     }).catch((err) => {
//         console.log(err, 'err');
//     });
// })


//10.  POST request shorthand refactoring with async and await !!!!

// document.getElementById("btn").addEventListener("click", async () => {
//     const config = {
//         headers: {
//             "content-Type": "application.json"
//         }
//     }
//     const url = "https://reqres.in/api/users"
//     const data = "{'name':'pankaj jii','job':'web dev'}"
//     // POST request shorthand :

//     try {
//         const res = await axios.post(url, data, config)
//         console.log(res, 'res !!');
//     } catch (error) {
//         console.log(error, 'error !!');
//     }
// })


// we can also create the axios instance !!

const ai =axios.create({
    baseURL :"https://jsonplaceholder.typicode.com"
})

document.getElementById("btn").addEventListener("click", async () => {
    const config = {
        headers: {
            "content-Type": "application.json"
        }
    }
    const url = "https://reqres.in/api/users"
    const data = "{'name':'pankaj jii','job':'web dev'}"
    // POST request shorthand :

    try {
        const res = await ai.post(url, data, config)
        console.log(res, 'res !!');
    } catch (error) {
        console.log(error, 'error !!');
    }
})
