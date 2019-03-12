class NewsService {
    constructor() {
        this._country = 'ua';
        this._category = 'technology';
        this._apiUrl = 'https://newsapi.org/v2';
        this._apiKey = '7c19c4c5d62c4bbdbbe39bae4a0575ac';
    }
    get country() {
        return this._country;
    }
    get category() {
        return this._category;
    }
    getTopheadlines(country, category, callback) {
        const http = new Http();

        http.get(`${this._apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this._apiKey}`, callback);
    }
    serchNews(text, callback) {
        const http = new Http();

        http.get(`${this._apiUrl}/top-headlines?q=${text}&apiKey=${this._apiKey}`, callback);
    }
}