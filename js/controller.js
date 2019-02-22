// Init News Service
const newsService = new NewsService();
// Init News UI Service
const newsUiService = new NewsUIService();
// Init elements
const countrySelect = document.getElementById('country');
const categorySelect = document.getElementById('category');
// Events
window.addEventListener('load', onGetTopHeadlines);
categorySelect.addEventListener('change', onGetTopHeadlines);
countrySelect.addEventListener('change', onGetTopHeadlines);
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

