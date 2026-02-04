

function loadRandomMovie() {
  fetch("/random-movie")
    .then(res => res.json())
    .then(movie => {

      // handle error from server
      if (movie.error) {
        document.getElementById("title").textContent = movie.error;

        const poster = document.getElementById("poster");
        poster.style.display = "none";

        const link = document.getElementById("link");
        link.textContent = "";
        link.href = "#";

        return;
      }

      // movie display
      document.getElementById("title").textContent =
        `${movie.title} (${movie.year})`;

      const link = document.getElementById("link");
      link.href = movie.letterboxdUrl;
      link.textContent = "View on Letterboxd";

        // movie poster
      const poster = document.getElementById("poster");

      if (movie.poster) {
        poster.style.opacity = 0;
        poster.src = movie.poster;
        poster.style.display = "block";

        setTimeout(() => {
          poster.style.opacity = 1;
        }, 50)
      } else {
        poster.style.display = "none";
      }
    }).catch(err => {
      document.getElementById("title").textContent =
        "Something went wrong.";
      console.log(err)
      
    })

};

document.getElementById("pickBtn").addEventListener("click", loadRandomMovie);
document.addEventListener("DOMContentLoaded", loadRandomMovie);
