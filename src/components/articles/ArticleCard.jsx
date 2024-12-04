import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
  return (
    <Link 
      to={`/articles/${article.slug}`}
      className="block group"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
            {article.title}
          </h3>
          <p className="mt-2 text-gray-500">
            {article.excerpt}
          </p>
          <div className="mt-4 text-sm text-gray-400">
            {new Date(article.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;