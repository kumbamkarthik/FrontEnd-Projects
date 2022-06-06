//c4afad3e1e976ce63885b142181852a8
const API_KEY = 'api_key=c4afad3e1e976ce63885b142181852a8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

function getMovies(url){
    fetch(url).then(response => response.json())
    .then(data=> {
        showMovies(data.results);
    })
}
function showMovies(data){
    for(var i=0;i<5;i++){
       console.log(data[i]);
    }
}
getMovies(API_URL);