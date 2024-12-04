import matter from 'gray-matter';

export async function loadArticle(slug) {
  try {
    const response = await fetch(`/articles/${slug}.md`);
    const markdown = await response.text();
    const { data, content } = matter(markdown);
    
    return {
      ...data,
      content,
      slug
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

export async function loadArticleList() {
  try {
    const response = await fetch('/articles/index.json');
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error('Error loading article list:', error);
    return [];
  }
}