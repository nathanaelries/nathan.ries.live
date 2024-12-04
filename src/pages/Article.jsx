import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadArticle } from '../utils/markdownLoader';
import ArticleContent from '../components/articles/ArticleContent';
import ArticleHeader from '../components/articles/ArticleHeader';
import LoadingState from '../components/common/LoadingState';
import ErrorState from '../components/common/ErrorState';

function Article() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      const articleData = await loadArticle(slug);
      setArticle(articleData);
      setLoading(false);
    }
    fetchArticle();
  }, [slug]);

  if (loading) {
    return <LoadingState />;
  }

  if (!article) {
    return <ErrorState message="Article not found" />;
  }

  return (
    <div className="py-12 bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArticleHeader article={article} />
        <ArticleContent content={article.content} />
      </article>
    </div>
  );
}

export default Article;