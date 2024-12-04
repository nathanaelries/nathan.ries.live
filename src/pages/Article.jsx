import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticleBySlug } from '../data/articles';

function Article() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Article not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-indigo">
        <h1>{article.title}</h1>
        <div className="text-gray-500 mb-8">
          Published on {new Date(article.date).toLocaleDateString()}
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  );
}

export default Article;