var save = sessionStorage.getItem('searchagain');
var json = JSON.parse(save)
console.log(json);

const html = json.results.map(function(user) {
    return `
    <div class="searchresult">
            <p><a href="movie.html" id="${user.id}" onClick="reply_click(this.id)"><img src="${linkimg+user.backdrop_path}" alt="" class="resultimg" ></a></p> 
            <div class="title"><a href="movie.html" id="${user.id}" onClick="reply_click(this.id)"><p>${user.title}</p></a></div>
            <div class="overview"><p>${user.overview}</p></div>
            </div>
        `



    
})
.join("");



const showPage = '#movieResult';
document.querySelector(showPage).insertAdjacentHTML("afterbegin", html);