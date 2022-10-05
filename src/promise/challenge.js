import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .catch(error => console.error(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(product => {
        return fetchData(`${API}/products/${product[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(err => console.log(error))
    .finally(() => console.log('Finally'));