var api = 'https://api.themoviedb.org/3/search/movie?api_key=';
var apiKey = 'e8a86a0bf7377e6a4ddf1a694a31a1ba'+'&language=en-US&query=';
var units = '&page=1&include_adult=false';

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
        sessionStorage.setItem('searchagain', JSON.stringify(json));
        window.location.href = "index.html";
        document.addEventListener('DOMcontentLoaded', function(sessionStorage) {
            sessionStorage.clear();
        });
    }
}


