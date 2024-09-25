'use client';

import React, { useState, useMemo } from 'react'
import ContentItem from './ContentItem'
import dummyData, { Subject } from '../dummyData'

const ContentList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Movies')
  const [activeTopList, setActiveTopList] = useState('Top 10')
  const [activeTimeframe, setActiveTimeframe] = useState('All-time')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['Movies', 'TV Shows', 'Music', 'Books']
  const topLists = ['Top 10', 'Top 25', 'Top 50', 'Top 100']
  const timeframes = ['1 Week', '1 Month', '1 Year', 'All-time']

  const filteredData = useMemo(() => {
    console.log('Total data:', dummyData.length);
    console.log('Active category:', activeCategory);
    console.log('Active top list:', activeTopList);
    console.log('Active timeframe:', activeTimeframe);
    console.log('Search query:', searchQuery);

    const now = new Date()
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)

    const filtered = dummyData
      .filter(item => {
        const categoryMatch = item.category === activeCategory;
        console.log(`Category match for ${item.title}:`, categoryMatch);
        return categoryMatch;
      })
      .filter(item => {
        const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        console.log(`Title match for ${item.title}:`, titleMatch);
        return titleMatch;
      })
      .filter(item => {
        const releaseDate = new Date(item.releaseDate)
        let timeframeMatch = true;
        switch (activeTimeframe) {
          case '1 Week':
            timeframeMatch = releaseDate >= oneWeekAgo;
            break;
          case '1 Month':
            timeframeMatch = releaseDate >= oneMonthAgo;
            break;
          case '1 Year':
            timeframeMatch = releaseDate >= oneYearAgo;
            break;
        }
        console.log(`Timeframe match for ${item.title}:`, timeframeMatch);
        return timeframeMatch;
      })
      .sort((a, b) => b.avgRating - a.avgRating || a.id - b.id);

    console.log('Filtered data before slice:', filtered.length);
    const sliced = filtered.slice(0, parseInt(activeTopList.split(' ')[1]));
    console.log('Filtered data after slice:', sliced.length);
    return sliced;
  }, [activeCategory, activeTopList, activeTimeframe, searchQuery])

  console.log('Filtered Data:', filteredData) // Debugging line

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
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredData.length > 0 ? (
        filteredData.map((item: Subject) => (
          <ContentItem key={item.id} item={item} />
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  )
}

export default ContentList