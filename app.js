const movie = require('./peliculas');
const fs = require('fs');


function mostrarMovie(movie){
    for (let i = 0 ; i < movie.length ; i++) {
        console.log(movie[i]);
        
    }
}

//mostrarMovie(movie)

const msj = './mensaje.txt';

fs.readFile(msj, 'utf-8', (err,data) => {
    if (err) {
        console.error('error', err);
        return;
        
    }
    console.log('archivo',data);
    
});