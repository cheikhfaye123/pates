import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Latest News</h1>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600">Stay tuned for our latest news and updates!</p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;