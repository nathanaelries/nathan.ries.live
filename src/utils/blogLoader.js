import matter from 'gray-matter';

export async function loadBlogPost(slug) {
  try {
    const response = await fetch(`/blog/${slug}.md`);
    if (!response.ok) {
      throw new Error('Post not found');
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