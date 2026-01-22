// function instaData(username, cb) {
//     console.log(" insta data loading...");
//     setTimeout(() => {
//         cb({ unique: "1234", username: "anam" })
//     }, 2000);

// }

// function fbData(unique, cb) {
//     setTimeout(() => {
//         cb(["img1", "img2"])
//     }, 3000);
// }


// instaData("Anam", function (data) {
//     fbData(data.unique, function (d) {
//         console.log(data);

//         console.log(d);

//     })

// })


// fetch api
// fetch('https://randomuser.me/api/')
//     .then((raw) => raw.json())
//     .then((x) => console.log(x.results[0]))

// async function getweather(city) {
//     try {

//         let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5f1955bb305fc0fc524cb8457fa0c4d`)

//         if (!raw.ok) {
//             throw new Error("city not found")
//         }
//         let data = await raw.json()
//         console.log(data.weather[0]);

//     }
//     catch (err) {
//         console.log(err.message);

//     }

// }
// getweather("ghazipur")


//debounce

function debounce(fn, delay) {
    let timer
    return function () {
        clearTimeout(timer)

        timer = setTimeout(fn, delay)
    }
}

document.querySelector('.search').addEventListener(
    "input", debounce(function () {
        console.log("hello");

    }, 1000)
)

