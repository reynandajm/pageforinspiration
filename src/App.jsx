import React from 'react';
import { Heart, Share2, BookmarkPlus } from 'lucide-react';

const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Daily Inspiration</h1>
      <p className="text-white/80 mt-2">Discover ideas that spark your creativity</p>
    </div>
  </header>
);

const QuoteCard = ({ quote, author, category }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
    </div>
    <div>
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <p className="text-sm text-gray-500">- {author}</p>
      <div className="flex gap-4 mt-4">
        <button className="flex items-center gap-1 text-gray-600 hover:text-red-500">
          <Heart size={18} />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500">
          <Share2 size={18} />
          <span>Share</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-purple-500">
          <BookmarkPlus size={18} />
          <span>Save</span>
        </button>
      </div>
    </div>
  </div>
);

const App = () => {
  const inspirationalQuotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "Work & Success"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      category: "Motivation"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      category: "Dreams"
    },
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "Perseverance"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirationalQuotes.map((quote, index) => (
            <QuoteCard key={index} {...quote} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;