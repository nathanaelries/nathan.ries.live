import React from 'react';

function ArticleHeader({ article }) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">{article.title}</h1>
      <div className="mt-2 text-sm text-gray-500">
        {new Date(article.date).toLocaleDateString()}
      </div>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="mt-6 w-full h-64 object-cover rounded-lg"
        />
      )}
    </header>
  );
}

export default ArticleHeader;