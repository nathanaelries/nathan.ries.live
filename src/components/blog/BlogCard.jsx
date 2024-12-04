import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="block group"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="mt-2 text-gray-500">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center text-sm text-gray-400">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            {post.readTime && (
              <>
                <span className="mx-2">•</span>
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;