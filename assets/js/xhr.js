const apiKey = '9d28742e';
const search = 'Iron man';
const siteUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;

const getData = (url) => fetch(url)
    .then((res) => res.json())
    .then((json) => json.Search);

// const getData = (url) => new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest(); ///запрос к серверу
//     xhr.open('GET', url);
//     xhr.send();

//     xhr.onload = () => {///если успешно
//         if (xhr.status === 200) {
//             // console.log(xhr.response);
//             // console.log(JSON.parse(xhr.response));
//             const json = JSON.parse(xhr.response)
//             resolve(json.Search);
//         } else {
//             reject(xhr.statusText)
//         }
//     };

//     xhr.onerror = (err) => reject(err); ///ошибка
// });

const search2 = 'Batman';
const search3 = 'Superman';
const siteUrl2 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search2}`;
const siteUrl3 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search3}`;

const ironman = getData(siteUrl);
const batman = getData(siteUrl2);
const superman = getData(siteUrl3);

// ironman.then((movies) => movies.forEach(movie => addMovieToList(movie)));
// batman.then((movies) => movies.forEach(movie => addMovieToList(movie)));
// superman.then((movies) => movies.forEach(movie => addMovieToList(movie)));

// Promise.
// all([ironman, batman, superman]).
// then((res) => res.forEach((movies) => movies.forEach((movie) => addMovieToList(movie))));


// Promise.
// race([ironman, batman, superman]).
// then((movies) => movies.forEach((movie) => addMovieToList(movie)));


getData(siteUrl)
    .then((movies) => movies.forEach(movie => addMovieToList(movie)))
    .catch(err => console.log(err));