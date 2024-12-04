import matter from 'gray-matter';

export async function loadContent(type, slug) {
  try {
    const response = await fetch(`/${type}/${slug}.md`);
    if (!response.ok) {
      throw new Error(`${type} not found`);
    }
    const markdown = await response.text();
    const { data, content } = matter(markdown);
    
    return {
      ...data,
      content,
      slug,
      readTime: Math.ceil(content.split(' ').length / 200),
      author: 'Nathanael Ries'
    };
  } catch (error) {
    console.error(`Error loading ${type} ${slug}:`, error);
    return null;
  }
}

export async function loadContentList(type) {
  try {
    const response = await fetch(`/${type}/index.json`);
    if (!response.ok) {
      throw new Error(`Failed to load ${type} list`);
    }
    const items = await response.json();
    return items;
  } catch (error) {
    console.error(`Error loading ${type} list:`, error);
    return [];
  }
}