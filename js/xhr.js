const apiKey = '9d28742e';
const search = 'Iron man';
const siteUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;


const getData = (url) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); ///запрос к серверу
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {///если успешно
        if (xhr.status === 200) {
            // console.log(xhr.response);
            // console.log(JSON.parse(xhr.response));
            const json = JSON.parse(xhr.response)
            resolve(json.Search);
        } else {
            reject(xhr.statusText)
        }
    };

    xhr.onerror = (err) => reject(err); ///ошибка
});
getData(siteUrl)
.then((movies) => movies.forEach(movie => console.log(movie)))
.catch(err => console.log (err));