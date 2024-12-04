import React, { useState, useEffect } from 'react';
import ArticleList from '../components/articles/ArticleList';
import { loadArticleList } from '../utils/markdownLoader';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const articleList = await loadArticleList();
      setArticles(articleList);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  return <ArticleList articles={articles} loading={loading} />;
}

export default Articles;