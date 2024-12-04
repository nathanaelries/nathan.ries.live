import React, { useState, useEffect } from 'react';
import BlogList from '../components/blog/BlogList';
import BlogListHeader from '../components/blog/BlogListHeader';
import LoadingState from '../components/common/LoadingState';
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

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogListHeader />
        <BlogList posts={articles} />
      </div>
    </div>
  );
}

export default Articles;