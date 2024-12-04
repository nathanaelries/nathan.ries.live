import React from 'react';

function BlogFooter({ post }) {
  return (
    <footer className="mt-12 pt-6 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Share this article:</span>
          <button className="text-gray-600 hover:text-indigo-600">
            Twitter
          </button>
          <button className="text-gray-600 hover:text-indigo-600">
            LinkedIn
          </button>
        </div>
        {post.author && (
          <div className="text-gray-600">
            Written by {post.author}
          </div>
        )}
      </div>
    </footer>
  );
}

export default BlogFooter;