const express = require("express");
const path = require("path")

const app = express();

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/index.html"))
// })

// Express static middleware:
// serve the whole "public" folder
// app.use(express.static("public"))

app.listen(3000, () => console.log("Sever is running on http://localhost:3000"))
