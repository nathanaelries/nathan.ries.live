import React from 'react';
import BlogList from '../components/blog/BlogList';
import BlogListHeader from '../components/blog/BlogListHeader';
import LoadingState from '../components/common/LoadingState';
import ErrorState from '../components/common/ErrorState';
import { useBlogPosts } from '../hooks/useBlogPosts';

function Blog() {
  const { posts, loading, error } = useBlogPosts();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogListHeader />
        <BlogList posts={posts} />
      </div>
    </div>
  );
}

export default Blog;