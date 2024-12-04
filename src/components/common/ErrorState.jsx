import React from 'react';

function ErrorState({ message }) {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{message}</h1>
      </div>
    </div>
  );
}

export default ErrorState;