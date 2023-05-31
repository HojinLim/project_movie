let searchMode= false;
let keyword= "";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWU2ZjBkM2FlMWM5MDM2OTRhY2E2ODNhZDI0Y2YwYSIsInN1YiI6IjY0NzA4NzI5MTNhMzIwMDExNmI2OTRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._p1TgMeks_tpD5n3CM6cLqiznXytd9ET96RJ3swvTio'
    }
  };
  showList();
  
  
  function showList(){
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response =>  {
        const movies = response.results;
      
        
        if(searchMode=== true){
          let movie =movies.filter(movie => {
            return movie.title.includes(keyword);
          })
        
          console.log(movie);
        
          movie.forEach(movie => {
    
              makeCard(movie);
    
            });

        }
      //  alert(movie.title);

      if(searchMode === false){
        movies.forEach(movie => {
           // console.log(movie);

           makeCard(movie);

        });
      }

    }
    
    )
    .catch(err => console.error(err));
  }

 

//let $cardView = document.querySelector(".card");
const newImageSrc = "새로운 이미지 소스 URL"; // 새로운 이미지 소스의 URL을 지정하세요.

function makeCard(movie){
  let moviesContainer = document.getElementById('card-list');


  const card = document.createElement('div');
  card.className = 'movie-card';

  const title = document.createElement('h2');
  title.textContent = movie.title;

  const overview = document.createElement('p');
  overview.textContent = movie.overview;

  const vote_average = document.createElement('p');
  vote_average.textContent = ` ${movie.vote_average} (${movie.vote_count}명 평점)`;

  const poster = document.createElement('img');
  poster.src = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
  poster.alt = movie.title;

  card.appendChild(title);
  card.appendChild(overview);
  card.appendChild(poster);
  card.appendChild(vote_average);

  moviesContainer.appendChild(card);


  // 클릭 시 영화 아이디 팝업
  card.addEventListener("click", function() {
  // 클릭 시 실행할 동작을 여기에 작성합니다.
  alert(`영화 id: ${movie.id}`);
});


}

function handleSearch(event) {
  searchMode= true;
  event.preventDefault(); // 기본 동작 취소

  const elements = document.getElementsByClassName('movie-card');
while (elements.length > 0) {
  elements[0].parentNode.removeChild(elements[0]);
}
 
  // 여기에 클릭 이벤트를 처리하는 코드를 작성합니다.
  let searchInput = document.getElementById("search-input");
  keyword = searchInput.value;
  
  // 빈 값일 시 예외 처리
 if(keyword === ""){
  
  alert(`빈 값입니다!`);
  return;
 }else{
  showList();
 }

}

