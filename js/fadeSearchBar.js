
/* Script that fade the searchBar when scrolling down */

var searchBar = document.getElementById("searchBar")

window.addEventListener('scroll', function() {
    searchBar.style.opacity = 0.50 - +window.pageYOffset/300+''
    
});
