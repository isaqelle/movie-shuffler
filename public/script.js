document.getElementById("pickBtn").addEventListener("click", () => {
    fetch("/random-movie")
        .then(res => res.json())
        .then(movie => {
            document.getElementById("title").textContent =
                `${movie.title} (${movie.year})`;
            const link = document.getElementById("link");
            link.href = movie.letterboxdUrl;
            link.textContent = "View on LetterBoxd"
  })  
})

console.log("Hello world")