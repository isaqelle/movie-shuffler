

document.getElementById("pickBtn").addEventListener("click", () => {
  fetch("/random-movie")
    .then(res => res.json())
    .then(movie => {
      document.getElementById("title").textContent =
        `${movie.title} (${movie.year})`;

      const link = document.getElementById("link");
      link.href = movie.letterboxdUrl;
      link.textContent = "View on Letterboxd";

        // movie poster
      const poster = document.getElementById("poster");

      if (movie.poster) {
        poster.src = movie.poster;
        poster.style.display = "block";
      } else {
        poster.style.display = "none";
      }
    });
});
