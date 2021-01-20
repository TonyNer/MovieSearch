var api = 'https://api.themoviedb.org/3/search/movie?api_key=';
var apiKey = 'e8a86a0bf7377e6a4ddf1a694a31a1ba'+'&language=en-US&query=';
var units = '&page=1&include_adult=false';
var linkimg = 'https://image.tmdb.org/t/p/w500';





var form = document.getElementById("search-form");
form.addEventListener("submit", search);


async function search(event) {
    event.preventDefault();
    document.getElementById("present_result").innerHTML = "";
    if(this.elements.query.value === '') {
        alert("Enter search word!");
    } else {
        var rawInputData = this.elements.query.value;
        let response = await fetch(api+apiKey+rawInputData+units);
        let json = await response.json();
        
        console.log(json);
        const html = json.results.map(user => {
            return `
            
            <div class="searchresult" id="title">
            <p><a href="movie.html" id="${user.id}" onClick="reply_click(this.id)"><img src="${linkimg+user.backdrop_path}" alt="" class="resultimg" ></a></p> 
            <div class="title"><a href="movie.html" id="${user.id}" onClick="reply_click(this.id)"><p>${user.title}</p></a></div>
            <div class="overview"><p>${user.overview}</p></div>
            </div>
            `
        })
        .join("");

        

        const showPage = '#movieResult';
        document.querySelector(showPage).insertAdjacentHTML("afterbegin", html);


        
    };

    /* Smooth scroll to first movie after search */
    function onSearchScroll() {
        document.getElementById( 'title' ).scrollIntoView({
            behavior: 'smooth'});
        window.setTimeout( function () { top(); }, 2000 );

    };
    
    onSearchScroll();
    
            
}


    







