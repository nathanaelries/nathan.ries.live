import React from 'react';
import SectionTitle from '../common/SectionTitle';

function ArticleListHeader() {
  return (
    <>
      <SectionTitle>Notebook</SectionTitle>
      <p className="mt-4 text-lg text-gray-500">
        Explore my collection of articles on DevOps, system administration, and technology.
      </p>
    </>
  );
}

export default ArticleListHeader;