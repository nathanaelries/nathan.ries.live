import { loadContent, loadContentList } from './contentLoader';

export async function loadArticle(slug) {
  return loadContent('articles', slug);
}

export async function loadArticleList() {
  return loadContentList('articles');
}