import React from 'react';
import ArticleGrid from '../components/articles/ArticleGrid';
import SectionTitle from '../components/common/SectionTitle';

function Articles() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Notebook</SectionTitle>
        <p className="mt-4 text-lg text-gray-500">
          Explore my collection of articles on DevOps, system administration, and technology.
        </p>
        <ArticleGrid />
      </div>
    </div>
  );
}

export default Articles;