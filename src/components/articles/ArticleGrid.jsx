import React from 'react';
import ArticleCard from './ArticleCard';
import { articles } from '../../data/articles';

function ArticleGrid() {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}

export default ArticleGrid;