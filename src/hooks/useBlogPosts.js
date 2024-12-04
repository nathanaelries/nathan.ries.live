import { useState, useEffect } from 'react';
import { loadBlogPosts } from '../utils/blogLoader';

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const blogPosts = await loadBlogPosts();
        setPosts(blogPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return { posts, loading, error };
}

export default useBlogPosts;