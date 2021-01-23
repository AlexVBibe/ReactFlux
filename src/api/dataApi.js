import 'whatwg-fetch';
import chalk from 'chalk';


export function get(path) {
    const url = baseUrl + path;
    return fetch(url).then(onSuccess, onError);
}

export function del(path) {
    const url = baseUrl + path;
    return fetch(url, { method: 'DELETE' })
        .then(onSuccess)
        .catch(onError);
}

export function add(path, body) {
    const url = baseUrl + path;
    return fetch(url, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: body
    })
        .then(onSuccess)
        .catch(onError);
}

export function update(path, body) {
    const url = baseUrl + path;
    return fetch(url, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: body
    })
        .then(onSuccess)
        .catch(onError);
}


function getBaseUrl() {
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001' : '/';
}

const baseUrl = getBaseUrl();

function onSuccess(response) {
    const json = response.json();
    return json;
}

function onError(error) {
    console.error(chalk.red(error));
}