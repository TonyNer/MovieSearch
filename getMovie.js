
var session = sessionStorage.getItem('movieset', JSON.stringify()).replace(/['"]+/g, '');
var api = 'https://api.themoviedb.org/3/movie/'; 
var apikey = 'e8a86a0bf7377e6a4ddf1a694a31a1ba';
var linkimg = 'https://image.tmdb.org/t/p/w500';

async function getmovie() {
    
    let response = await fetch(api+session+'?api_key='+apikey+'&language=en-US');
    let json = await response.json(); 
    
    

    
    
    const html = [json].map(function(user) {
        return `
        
        <div class="searchresult">
        <p><img src="${linkimg+user.backdrop_path}" alt="" class="resultimg" ></p> 
        <div class="title"><p>${user.title}</p></div>
        <div class="overview"><p>${user.overview}</p></div>
        <div class="vote"><p>${user.vote_average}/10</p></div>
        <div class="releaseDate"><p>${user.release_date}</p></div>
        
        `
    
    

        
    })
    .join("");



    const showPage = '#movieResult';
    document.querySelector(showPage).insertAdjacentHTML("afterbegin", html);
    
    document.addEventListener('DOMContentLoaded', function(sessionStorage) {
        sessionStorage.clear();
    });

    
    



}
getmovie();