let movieList = null;

const createSryle = () => {
    const headStyle = document.createElement('style');
    headStyle.innerHTML = `
    * {
    box-sizing: border-box;
}

body {
margin: 0;
}
.container {
    padding: 20px;
}
.movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.movie {
   display: flex;
   align-content: center;
   justify-content: center;
}
.movie__image {
     width: 100%;
}`
document.head.appendChild(headStyle);
}

const createMarkup = () => {
    const container = document.createElement('div');
    const movies = document.createElement('div');

    movies.classList.add('movies')
    container.classList.add('container');
    container.appendChild(movies);

    document.body.prepend(container);
    movieList = document.querySelector('.movies')
}

const addMovieToList = (movie) => {
    // console.log(movie);
    const item = document.createElement('div');
    const img = document.createElement("img");

    img.src = movie.Poster;
    img.classList.add('movie__image');

    item.classList.add('movie')
    item.appendChild(img);
    movieList.appendChild(item);
}

createMarkup();
createSryle();