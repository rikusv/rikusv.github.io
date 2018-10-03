import SearchApi from 'js-worker-search';

/*
 * This will re-index on each page load
 * Will have to see how this performs and then decide whether to change
 */
const searchApi = new SearchApi();
const lookup = {};

function readJSON() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const posts = JSON.parse(this.responseText);
        indexContent(posts);
    }
  }
  xhttp.open('GET', '/assets/content.json', true);
  xhttp.send();
}

function indexContent(posts) {
  posts.forEach(post => {
    const categories = post.categories.map(category => `cat:${category}`);
    searchApi.indexDocument(post.url, categories + post.content);
    lookup[post.url] = post.title;
  });
}

function search(input) {
  let loading = true;
  setTimeout(() => {
    if (loading) {
      document.querySelector('#searchLoading').innerHTML = `
        <div class="progress">
          <div style="width: 100%" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"></div>
        </div>
      `;
    }
  }, 500);
  const promise = searchApi.search(input)
  promise.then(results => {
    loading = false;
    document.querySelector('#searchLoading').innerHTML = '';
    $('#searchResultsList').empty();
    if (!input) {
      $('#searchResults').collapse('hide');
    } else if (!results.length) {
      $('#searchResultsList').append(`
        <li class="list-group-item list-group-item-light">Nothing found</li>
      `);
    } else {
      results.forEach(result => $('#searchResultsList').append(`
        <a href="${result}" class="list-group-item list-group-item-action">${lookup[result]}</a>
      `));
      $('#searchResults').collapse('show');
    }
  });
}

function onClearSearch() {
  // TODO: at some stage maybe decide whether to use $ or querySelector...tsk.
  $('#searchResults').collapse('hide');
  $('#search').val('');
}

function onSearch() {
  const input = document.querySelector('#search').value;
  search(input);
}

function onCategorySearch(event) {
  if (event.target.classList.contains('badge')) {
    event.stopPropagation();
    const category = event.target.innerText
    const searchValue = `cat:${category}`;
    document.querySelector('#search').value = searchValue;
    search(searchValue);
    window.scroll({
      'behavior': 'smooth',
      'left': 0,
      'top': 0
    });
  }
}

readJSON()

document.querySelector('#search').addEventListener('input', onSearch);

const postCategoriesContainer = document.querySelector('#postCategories');
if (postCategoriesContainer) {
  postCategoriesContainer.addEventListener('click', onCategorySearch);
}

document.querySelector('#clearSearch').addEventListener('click', onClearSearch);
