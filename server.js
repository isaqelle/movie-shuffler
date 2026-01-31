const express = require("express");
const path = require("path")

const app = express();

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
