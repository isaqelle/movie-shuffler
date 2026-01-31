const express = require("express");
const path = require("path")

const app = express();
// load json
const likes = require("./data/likes.json");
const { title } = require("process");


// random movie endpoint:::

app.get("/random-movie", (req, res) => {
    const rndIndex = Math.floor(Math.random() * likes.length);
    const movie = likes[rndIndex]

    res.json({
        title: movie.Name,
        year: movie.Year,
        letterboxdUrl: movie["Letterboxd URI"]
    })
})


// app.get("/", (req, res) => {
//     res.send("Welcome")
// })

// Express static middleware:
// serve the whole "public" folder
app.use(express.static("public"))

// app.get("/", (req, res) => {
//     res.send("Hello there")
// })

app.listen(3000, () => console.log("Sever is running on http://localhost:3000"))
