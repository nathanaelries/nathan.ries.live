import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function BlogContent({ content }) {
  if (!content) return null;

  return (
    <div className="prose prose-indigo max-w-none">
      <ReactMarkdown 
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
          p: ({node, ...props}) => <p className="mb-4 text-gray-700" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
          li: ({node, ...props}) => <li className="mb-2" {...props} />,
          hr: ({node, ...props}) => <hr className="my-8 border-gray-200" {...props} />,
          a: ({node, ...props}) => (
            <a 
              {...props} 
              className="text-indigo-600 hover:text-indigo-800 underline"
              target={props.href?.startsWith('http') ? '_blank' : undefined}
              rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            />
          ),
          img: ({node, ...props}) => (
            <img 
              {...props} 
              className="rounded-lg shadow-md my-8"
              alt={props.alt || ''}
            />
          ),
          code: ({node, inline, ...props}) => (
            inline ? 
              <code className="bg-gray-100 rounded px-1 py-0.5" {...props} /> :
              <pre className="bg-gray-100 rounded p-4 overflow-x-auto" {...props} />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default BlogContent;