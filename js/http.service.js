class Http {
    get(url, callback) {
        if (!url || !callback) return;
        
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));

        xhr.send();
    }
    post(url, body, callback) {
        if (!url || !callback || !body) return;
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));

        xhr.send(JSON.stringify(body));
    }
}