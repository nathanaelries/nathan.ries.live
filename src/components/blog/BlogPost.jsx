import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import BlogFooter from './BlogFooter';

function BlogPost({ post }) {
  return (
    <div className="py-12 bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogHeader post={post} />
        <BlogContent content={post.content} />
        <BlogFooter post={post} />
      </article>
    </div>
  );
}

export default BlogPost;