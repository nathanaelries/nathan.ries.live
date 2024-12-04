import React from 'react';

function BlogHeader({ post }) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-600 text-sm">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime} min read</span>
        {post.likes && (
          <>
            <span className="mx-2">•</span>
            <span>{post.likes} readers like this</span>
          </>
        )}
      </div>
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mt-6"
        />
      )}
    </header>
  );
}

export default BlogHeader;