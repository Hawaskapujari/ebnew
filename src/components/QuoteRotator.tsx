import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const placeholders = [
  "💬 This space is reserved for you.",
  "🌱 Stories that spark change are loading...",
  "✨ Your quote could be the next one they remember.",
];

const QuoteRotator: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl animate-pulse border border-blue-100">
      <div className="flex items-center mb-6">
        <Quote className="h-8 w-8 text-blue-300 mr-3" />
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
          Future Voice
        </span>
      </div>

      <blockquote className="text-lg italic text-gray-400 min-h-[90px] leading-relaxed transition-all duration-500 ease-in-out">
        {placeholders[index]}
      </blockquote>

      <div className="flex items-center justify-between mt-6">
        <div>
          <div className="font-semibold text-gray-400">Anonymous</div>
          <div className="text-sm text-gray-300">Upcoming Participant</div>
        </div>
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div className="w-8 h-8 bg-gray-100 rounded-full" />
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {placeholders.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Dev Signature */}
      <div className="mt-6 text-center text-xs text-gray-300 italic">
        Built with care by <span className="text-blue-500 font-semibold">Aftab Alam</span> • EthicBizz 2025 🚀
      </div>
    </div>
  );
};

export default QuoteRotator;
