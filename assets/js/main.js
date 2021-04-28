let movieList = null;
let inputSearch = null;

const createSryle = () => {
    const headStyle = document.createElement('style');
    headStyle.innerHTML = `
    * {
    box-sizing: border-box;
}

body {
margin: 0;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.container {
    padding: 20px;
    max-width: 1280px;
    margin: auto;
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
}

.search {
margin-bottom: 30px;
}

.search__label-input {
display: block;
margin-bottom: 5px;
}
.search__input {
padding: 10px 15px;
max-width: 400px;
width: 100%;
display: block;
border: 1px solid rgba(5, 1, 41, 0.067);
}
.search__label-checkbox {
    font-size: 12px;
    display: block;
    margin-top: -19px;
    margin-left: 25px;
}

`
    document.head.appendChild(headStyle);
};

const createElement = (type, attr, container, pos) => {
    const el = document.createElement(type);
    for (let key in attr) {

        
        if (key !== 'innerHTML') {
            el.setAttribute(key, attr[key]);
        } else {
            el.innerHTML = attr[key];
        }
    }
    // console.log(attr);

    if (container && !pos) container.append(el);
    if (container && pos) container.prepend(el);
    return el;
};

const createSearchBox = (container) => {

    createElement('h1', { innerHTML: 'Приложение для поиска фильмов' }, container);
    const searchBox = createElement('div', { class: 'search' }, container);
    createElement('label', {
        class: "search__label-input",
        for: "search",
        innerHTML: "Поиск фильмов"
    }, searchBox);

    inputSearch = createElement('input', {
        class: "search__input",
        id: "search", type: "text", placeholder: "Начните вводить фильм"
    }, searchBox);

    createElement('input', {
        class: "search__checkbox",
        id: "checkbox",
        type: "checkbox"
    }, searchBox);

    createElement('label', {
        class: "search__label-checkbox",
        for: "checkbox",
        innerHTML: "Добавлять фильмы к существующему списку"
    }, searchBox);
    // const h1 = document.createElement('h1');
    // h1.innerHTML = 'Приложение для поиска фильмов';
    // const searchBox = document.createElement('div');
    // searchBox.classList.add('search');
    // container.append(searchBox);
    // container.append(h1);

    // Input
    // label
    // checkbox
    // labcheck

};

const createMarkup = () => {
    
    const container = createElement('div', {class: 'container'},  document.body, true);
    const movies = document.createElement('div');

    createSearchBox(container);
    movieList = createElement('div', {class: 'movies'}, container);
    
    // movies.classList.add('movies')
    // container.classList.add('container');
    // container.appendChild(movies);

    // document.body.prepend(container);
    // movieList = document.querySelector('.movies');
    // inputSearch = document.querySelector('.search')
};

const addMovieToList = (movie) => {
    // console.log(movie);
    const item = document.createElement('div');
    const img = document.createElement("img");

    img.src = movie.Poster;
    img.classList.add('movie__image');

    item.classList.add('movie')
    item.appendChild(img);
    movieList.appendChild(item);
};

const delay = (() => {
    let timer = 0;

    return (clb, ms) => {
        if (timer !==null) clearTimeout(timer);
        timer=setTimeout(clb, ms);
    }
})();

createMarkup();
createSryle();