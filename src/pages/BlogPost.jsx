import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/blog/BlogPost';
import { loadBlogPost } from '../utils/blogLoader';
import LoadingState from '../components/common/LoadingState';
import ErrorState from '../components/common/ErrorState';

function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const postData = await loadBlogPost(slug);
        if (!postData) {
          throw new Error('Post not found');
        }
        setPost(postData);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Post not found');
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return <LoadingState />;
  }

  if (error || !post) {
    return <ErrorState message={error || 'Post not found'} />;
  }

  return <BlogPost post={post} />;
}

export default BlogPostPage;