import React from 'react';
import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

function BlogFooter({ post }) {
  const location = useLocation();
  const currentUrl = `https://ries.live${location.pathname}`;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(post.title);
  const encodedSummary = encodeURIComponent(post.excerpt || '');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  };

  const handleShare = (platform) => {
    const url = shareLinks[platform];
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <footer className="mt-12 pt-6 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Share this article:</span>
          <button 
            onClick={() => handleShare('twitter')}
            className="text-gray-600 hover:text-black transition-colors duration-200"
            aria-label="Share on X (Twitter)"
          >
            <FaXTwitter className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleShare('linkedin')}
            className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleShare('facebook')}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Share on Facebook"
          >
            <FaFacebook className="w-5 h-5" />
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