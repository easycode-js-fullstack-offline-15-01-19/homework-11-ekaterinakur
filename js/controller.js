// Init News Service
const newsService = new NewsService();
// Init News UI Service
const newsUiService = new NewsUIService();
// Init elements
const countrySelect = document.getElementById('country');
const categorySelect = document.getElementById('category');
const search = document.getElementById('search');

// Events
window.addEventListener('load', onGetTopHeadlines);
categorySelect.addEventListener('change', onGetTopHeadlines);
countrySelect.addEventListener('change', onGetTopHeadlines);
search.addEventListener('keyup', onGetSearch);
// Handlers
function onGetTopHeadlines(e) {
    const country = countrySelect.value || newsService.country;
    const category = categorySelect.value || newsService.category;

    newsService.getTopheadlines(country, category, (response) => {
        const { articles } = response;
        newsUiService.clearContainer();
        articles.forEach((article) => newsUiService.addNews(article));
    });
}

function onGetSearch(e) {
    const text = search.value;

    if (text.length > 3) {
        newsService.serchNews(text, (response) => {
            const { articles } = response;
            newsUiService.clearContainer();

            if (articles.length === 0) {
                newsUiService.noNews();
            }

            articles.forEach((article) => newsUiService.addNews(article));
        });
    }
}
