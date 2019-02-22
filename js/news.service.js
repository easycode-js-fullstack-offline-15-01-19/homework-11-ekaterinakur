class NewsService {
    constructor() {
        this._country = 'ua';
        this._category = 'technology';
        this._apiUrl = 'https://newsapi.org/v2';
        this._apiKey = '9c27b0f722b84da5a08312d2b125351b';
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
    serchNews(text) {
        
    }
}