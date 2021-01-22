

/* This script takes the top 3 popular movies atm and display it on the header */


var url = 'https://webservice.fanart.tv/v3/movies/${id}?api_key=${apikey}';

var urlimdb = 'https://api.themoviedb.org/3/movie/{movie_id}/external_ids?api_key=e8a86a0bf7377e6a4ddf1a694a31a1ba';
var apikey = 'c053b462978d79ed0f34a7dc891d3734';
var tmdbApiKey = 'e8a86a0bf7377e6a4ddf1a694a31a1ba';


async function getmovieid() {
    
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e8a86a0bf7377e6a4ddf1a694a31a1ba&language=en-US&page=1`);
    let jsontopp = await response.json(); 




    /* First get the movie ids of the top 3 popular movies on TMDB */

    /* First image */
    const topp1 = jsontopp.results.slice(0, 1).map(user => {
        return `
        <div class=slider1 id="sliderid"> ${user.id} </div>
        `
    })
    .join("");
    
    const slider = '#toppimg';
        document.querySelector(slider).insertAdjacentHTML("afterbegin", topp1);

    
    /* Second image */
    const topp2 = jsontopp.results.slice(1, 2).map(user => {
        return `
        <div class=slider2 id="sliderid"> ${user.id} </div>
        `
    })
    .join("");
    
    const slider2 = '#toppimg';
        document.querySelector(slider).insertAdjacentHTML("afterbegin", topp2);

    /* Third image */
        const topp3 = jsontopp.results.slice(2, 3).map(user => {
            return `
            <div class=slider3 id="sliderid"> ${user.id} </div>
            `
        })
        .join("");
        
        const slider3 = '#toppimg';
            document.querySelector(slider).insertAdjacentHTML("afterbegin", topp3);


        /* After getting the ids fetch the moviebackground and insert into the HTML */

        /* First moviebackground */
        var Background1 = document.getElementsByClassName('slider1')[0].innerText;
        console.log(Background1);
        
        let response1 = await fetch(`https://webservice.fanart.tv/v3/movies/${Background1}?api_key=${apikey}`);
        let jsonimdb = await response1.json(); 
        console.log(jsonimdb);
        
        var first = jsonimdb.moviebackground;
        console.log(first);

        const showslider1 = jsonimdb.moviebackground.slice(0, 1).map(user => {
            return `
            <p><img src="${user.url}" alt="" class="headerimg" id="fadeElement" ></p>
            `
            
        })
        .join("");
        
        const showPage = '#fanmadeheader';
        document.querySelector(showPage).insertAdjacentHTML("afterbegin", showslider1);


        /* Second moviebackground */
        var Background2 = document.getElementsByClassName('slider2')[0].innerText;
        console.log(Background2);
        
        let response2 = await fetch(`https://webservice.fanart.tv/v3/movies/${Background2}?api_key=${apikey}`);
        let jsonimdb2 = await response2.json(); 
        console.log(jsonimdb2);
        
        var second = jsonimdb2.moviebackground;
        console.log(second);

        const showslider2 = jsonimdb2.moviebackground.slice(0, 1).map(user => {
            return `
            <p><img src="${user.url}" alt="" class="headerimg" id="fadeElement" ></p>
            `
            
        })
        .join("");
        
        const showPage2 = '#fanmadeheader';
        document.querySelector(showPage2).insertAdjacentHTML("afterbegin", showslider2);



         /* Third moviebackground */
        var Background3 = document.getElementsByClassName('slider3')[0].innerText;
        console.log(Background2);
        
        let response3 = await fetch(`https://webservice.fanart.tv/v3/movies/${Background3}?api_key=${apikey}`);
        let jsonimdb3 = await response3.json(); 
        console.log(jsonimdb3);
        
        var third = jsonimdb3.moviebackground;
        console.log(third);

        const showslider3 = jsonimdb3.moviebackground.slice(0, 1).map(user => {
            return `
            <p><img src="${user.url}" alt="" class="headerimg"  onload="Redirect()" id="fadeElement"></p>
            `
        
        })
        .join("");
        
        const showPage3 = '#fanmadeheader';
        document.querySelector(showPage3).insertAdjacentHTML("afterbegin", showslider3);



         /* Slideshow function */

        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("headerimg");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display ="none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}

            slides[slideIndex-1].style.display ="block";
            setTimeout(showSlides, 5000);
            
        }

}
        
    
    



getmovieid();