
function fetchCatalog() {
    // will create a GET AJAX req to API
    // get the list of movies
    // travel the array to get each movie
    // display the movie on HTML

    $.ajax({
        type: "GET",
        url: '/api/movies',  //url: '/api/movies/?-price ()
        success: function(res) {
            var list = res.objects;
            for(let i=0; i< list.length; i++) {
                displayMovie(list[i]);
            }
        },
        error: function(details){
            console.log("Error", details);
        }
    });
}

function displayMovie(movie){
    let container = $("#catalog");

    var syntax = 
    `<div class="card" style="width: 18rem;">
    <img src="${movie.image_url}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">Year Released|${movie.release_year}</p>
        <p class="card-text">$${movie.price}</p>
        <a href="/details/${movie.id}" class="btn btn-info">See Details</a>
    </div>`
    container.append(syntax);
}

function init() {
    console.log('Catalog CSR page');

    fetchCatalog();
}




function  init() {
    console.log('Catalog CSR page');

    fetchCatalog();
    
}
window.onload = init;

/**
 * 
 * examples of POST req to store info using API
 */
function example_CreateGenre() {
    let newGe = {
        name:"created using JS"
    };

    $.ajax({
        type: "POST",
        url: '/api/genres/',
        contentType: 'application/json',
        data: JSON.stringify(newGe),
        success: function(res) {
          console.log( 'The cake is a lie!!!')
        },
        error: function(details){
            console.log("Error: There is cake in the Boardroom", details);
        }
    });
}
function example_CreateMovie() {
    let movie = {
        title: 'created using JS',
        director : 'something',
        release_year : 2020,
        price : 123.23,
        image_url : 'something',
        description : 'A super expensive movie',
        genre :  "/api/genres/3/" // tricky part you can change the number to get different movies
    }

    $.ajax({
        type: "POST",
        url: '/api/movies/',
        contentType: 'application/json',
        data: JSON.stringify(movie),
        success: function(res) {
          console.log( 'The cake is a Lie!!!')
        },
        error: function(details){
            console.log("Error: There is cake in the Breakroom", details);
        }
    });
}


