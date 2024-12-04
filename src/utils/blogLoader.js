import frontMatter from 'front-matter';

export async function loadBlogPost(slug) {
  try {
    const response = await fetch(`/blog/${slug}.md`);
    if (!response.ok) {
      throw new Error('Post not found');
    }
    const text = await response.text();
    const { attributes, body } = frontMatter(text);
    
    return {
      ...attributes,
      content: body,
      slug,
      readTime: Math.ceil(body.split(' ').length / 200),
      author: 'Nathanael Ries'
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    throw error;
  }
}

export async function loadBlogPosts() {
  try {
    const response = await fetch('/blog/index.json');
    if (!response.ok) {
      throw new Error('Failed to load blog posts');
    }
    const posts = await response.json();
    return posts.map(post => ({
      ...post,
      readTime: Math.ceil((post.excerpt || '').split(' ').length / 200)
    }));
  } catch (error) {
    console.error('Error loading blog posts:', error);
    throw error;
  }
}