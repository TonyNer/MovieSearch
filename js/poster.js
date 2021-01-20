
var url = 'https://webservice.fanart.tv/v3/movies/${id}?api_key=${apikey}';

var urlimdb = 'https://api.themoviedb.org/3/movie/{movie_id}/external_ids?api_key=e8a86a0bf7377e6a4ddf1a694a31a1ba';
var apikey = 'c053b462978d79ed0f34a7dc891d3734';

var session = sessionStorage.getItem('movieset', JSON.stringify()).replace(/['"]+/g, '');

console.log(session);


async function getmovieid() {
    
    let response = await fetch(`https://api.themoviedb.org/3/movie/${session}/external_ids?api_key=e8a86a0bf7377e6a4ddf1a694a31a1ba`);
    let json = await response.json(); 
    console.log(json);


    const imdb = [json].map(user => {
        return `
        ${user.imdb_id}
        `
    });
    var imdbstring = JSON.stringify(imdb).replace(/[n" "n [ \] \\]+/g, '');
    
    let response2 = await fetch(`https://webservice.fanart.tv/v3/movies/${imdbstring}?api_key=${apikey}`);
        let jsonimdb = await response2.json(); 
        console.log(jsonimdb);
        
        var first = jsonimdb.moviebackground.slice(0, 1);
        console.log(first);

        const html = jsonimdb.moviebackground.slice(0, 1).map(user => {
            return `
            <p><img src="${user.url}" alt="" class="headerimg" onload="Redirect()"></p> 
            `
            
        })
        .join("");

        

        const showPage = '#fanmadeheader';
        document.querySelector(showPage).insertAdjacentHTML("afterbegin", html);
    }
        
    
    



getmovieid();
