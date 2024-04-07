


const url = 'https://project-code-challenge-3.vercel.app/db.json';


const listHolder = document.getElementById('films');
document.addEventListener('DOMContentLoaded', () =>{
   document.getElementsByClassName('films item')[o].remove();
   FetchOne(URL)
   fetchMovie(URL)
});


 function FetchOne(URL){
   fetch(URL)
  then((response)  => response.json())
    then((data) =>{
      setUpMovieDetails(date.films[0]) 
  } );
 }

function fetchMovie(URL){
   FetchOne(URL)
   then((response) => response.json())
   then((movie) => {
      movie.films.forEach((movie) =>{
         displayMovie(movie)
      })
   })
}

function displayMovie(movie){
   const list = document.createElement('li')
   list.style.cursor = 'cell';
   list.textContent = movie.title;
   listHolder.appendChild(list);
   addClickEvent();
};
