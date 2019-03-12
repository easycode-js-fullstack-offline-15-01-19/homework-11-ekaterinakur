class NewsUIService {
    constructor() {
        this._container = document.querySelector('.news-container .row')
    }

    addNews(news) {
        const template = this._newsTemplate(news);
        this._container.insertAdjacentHTML('afterbegin', template);
    }

    clearContainer() {
        this._container.innerHTML = '';
    }

    noNews() {
        const nonews = this._noNews();
        this._container.insertAdjacentHTML('afterbegin', nonews);
    }

    _noNews() {
        return `
            <div style="color: red; text-align: center">
                Новости не найдены
            </div>
        `;
    }

    _newsTemplate({urlToImage, url, title, description}) {
        return `
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                        <img src="${urlToImage}" alt="${title || ''}">
                    </div>
                    <div class="card-content">
                        <span class="card-title">${title || ''}</span>
                        <p>${description || ''}</p>
                    </div>
                    <div class="card-action">
                        <a href="${url}">Read more</a>
                    </div>
                </div>
            </div>
        `;
    }
}