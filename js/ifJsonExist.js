var save = sessionStorage.getItem('searchagain');
var json = JSON.parse(save)
console.log(json);

const html = json.results.map(function(user) {
    return `
            <div class="searchresult" id="title">
            <p><a href="movie.html" id="${user.id}" onClick="reply_click(this.id)"><img src="${linkimg+user.backdrop_path}" alt="No image for this movie" class="resultimg" ></a></p>
            <div class="text-tile" >
            <div class="vote"><p><i class="far fa-star"></i>${user.vote_average}/10</p></div>
            <div class="title"><a href="movie.html" id="${user.id}" onClick="reply_click(this.id)"><p>${user.title}</p></a></div>
            <a href="movie.html" id="${user.id}" class="text-tile-link" onClick="reply_click(this.id)"></div>
            </div>
        `



    
})
.join("");



const showPage = '#movieResult';
document.querySelector(showPage).insertAdjacentHTML("afterbegin", html);