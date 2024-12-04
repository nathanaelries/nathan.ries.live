import React from 'react';
import ArticleGrid from './ArticleGrid';
import ArticleListHeader from './ArticleListHeader';

function ArticleList({ articles, loading }) {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArticleListHeader />
        {loading ? (
          <p className="mt-8">Loading articles...</p>
        ) : (
          <ArticleGrid articles={articles} />
        )}
      </div>
    </div>
  );
}

export default ArticleList;