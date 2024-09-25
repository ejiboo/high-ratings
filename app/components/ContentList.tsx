'use client';

import React, { useState } from 'react'
import ContentItem from './ContentItem'

const ContentList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Movies')
  const [activeTopList, setActiveTopList] = useState('Top 10')
  const [activeTimeframe, setActiveTimeframe] = useState('1 Week')

  const categories = ['Movies', 'TV Shows', 'Music', 'Books']
  const topLists = ['Top 10', 'Top 25', 'Top 50', 'Top 100']
  const timeframes = ['1 Week', '1 Month', '1 Year', 'All-time']

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex mb-4 text-sm bg-gray-100 rounded-full p-1">
        {categories.map((category) => (
          <button
            key={category}
            className={`flex-1 px-4 py-2 rounded-full text-center ${
              activeCategory === category
                ? 'bg-white text-gray-800 font-semibold shadow-sm'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex mb-4 text-sm space-x-2">
        <div className="flex-1 bg-gray-100 rounded-full p-1 flex justify-between">
          {topLists.map((list) => (
            <button
              key={list}
              className={`px-4 py-2 rounded-full flex-1 text-center ${
                activeTopList === list
                  ? 'bg-white text-gray-800 font-semibold shadow-sm'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTopList(list)}
            >
              {list}
            </button>
          ))}
        </div>
        <div className="flex-1 bg-gray-100 rounded-full p-1 flex justify-between">
          {timeframes.map((time) => (
            <button
              key={time}
              className={`px-4 py-2 rounded-full flex-1 text-center ${
                activeTimeframe === time
                  ? 'bg-white text-gray-800 font-semibold shadow-sm'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTimeframe(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-full border border-gray-300 mb-6"
      />
      <ContentItem />
    </div>
  )
}

export default ContentList