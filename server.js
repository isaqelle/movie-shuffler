
const express = require("express");
require("dotenv").config();

const app = express();
const likes = require("./data/likes.json");



app.use(express.static("public"));

app.get("/random-movie", async (req, res) => {

  // Demo API key for portfolio/convenience purposes.
  // If it stops working, generate your own at themoviedb.org
  const API_KEY = process.env.TMDB_API_KEY || "21bd6eabb919d2b84d43520d52710cbf"
  // error handling for broken api key:
  if (!API_KEY){
    return res.json({
      error:"API key not available. Generate your own at themoviedb.org"
    })
  }

  try {
    const movie = likes[Math.floor(Math.random() * likes.length)];

    const title = movie.Name;
    const year = movie.Year;

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${encodeURIComponent(
      title
    )}&year=${year}`;

    const tmdbRes = await fetch(searchUrl);
    const tmdbData = await tmdbRes.json();

    const posterPath = tmdbData.results[0]?.poster_path;

    res.json({
      title,
      year,
      letterboxdUrl: movie["Letterboxd URI"],
      poster: posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch movie" });
  }
});

app.listen(5500, () =>
  console.log("Server is running on http://localhost:5500")
);
