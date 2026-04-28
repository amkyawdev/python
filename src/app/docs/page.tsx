'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { generalDocs } from '@/data/docs';
import { easyDocs } from '@/data/easy';
import { middleDocs } from '@/data/middle';
import { nextLevelDocs } from '@/data/next-level';

interface DocItem {
  title: string;
  content: string;
  category: string;
}

export default function DocsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const allDocs: DocItem[] = useMemo(() => {
    return [
      ...generalDocs.map(doc => ({ ...doc, category: 'General' })),
      ...easyDocs.map(doc => ({ ...doc, category: 'Easy' })),
      ...middleDocs.map(doc => ({ ...doc, category: 'Middle' })),
      ...nextLevelDocs.map(doc => ({ ...doc, category: 'Next Level' })),
    ];
  }, []);

  const filteredDocs = useMemo(() => {
    if (!searchQuery.trim()) return allDocs;
    
    const query = searchQuery.toLowerCase();
    return allDocs.filter(
      doc => 
        doc.title.toLowerCase().includes(query) || 
        doc.content.toLowerCase().includes(query)
    );
  }, [allDocs, searchQuery]);

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Python Docs
          </h1>
          <p className="text-gray-600">Search and explore Python concepts</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-white rounded-xl border border-gray-200 focus:border-baby-blue-dark focus:outline-none focus:ring-2 focus:ring-baby-blue-light transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {filteredDocs.map((doc, index) => (
            <motion.div
              key={`${doc.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {doc.title}
                </h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  doc.category === 'General' 
                    ? 'bg-gray-200 text-gray-700' 
                    : doc.category === 'Easy'
                      ? 'bg-baby-blue-100 text-baby-blue-dark'
                      : doc.category === 'Middle'
                        ? 'bg-gray-300 text-gray-700'
                        : 'bg-gray-500 text-white'
                }`}>
                  {doc.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                {doc.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {filteredDocs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500">No docs found matching "{searchQuery}"</p>
          </motion.div>
        )}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => router.push('/')}
          className="mt-8 btn btn-outline-secondary btn-press"
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back to Home
        </motion.button>
      </div>
    </main>
  );
}