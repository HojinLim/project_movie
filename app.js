const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWU2ZjBkM2FlMWM5MDM2OTRhY2E2ODNhZDI0Y2YwYSIsInN1YiI6IjY0NzA4NzI5MTNhMzIwMDExNmI2OTRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._p1TgMeks_tpD5n3CM6cLqiznXytd9ET96RJ3swvTio'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response =>  {
        const movies = response.results;

        const moviesContainer = document.getElementById('card-list');

        movies.forEach(movie => {
            console.log(movie);

            const card = document.createElement('div');
            card.className = 'movie-card';

            const title = document.createElement('h2');
            title.textContent = movie.title;

            const overview = document.createElement('p');
            overview.textContent = movie.overview;

            const vote_average = document.createElement('p');
            vote_average.textContent = movie.vote_average;


            const poster = document.createElement('img');
            poster.src = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
            poster.alt = movie.title;

            card.appendChild(title);
            card.appendChild(overview);
            card.appendChild(poster);
            card.appendChild(vote_average);

            moviesContainer.appendChild(card);
        });
    })
    .catch(err => console.error(err));

let $cardView = document.querySelector(".card");
const newImageSrc = "새로운 이미지 소스 URL"; // 새로운 이미지 소스의 URL을 지정하세요.

// 이미지 소스 변경
const imageElement = $cardView.querySelector("img");
imageElement.src = newImageSrc;


