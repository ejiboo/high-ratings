import React, { useState } from 'react'
import { Subject } from '../dummyData'

interface ContentItemProps {
  item: Subject;
}

const ContentItem: React.FC<ContentItemProps> = ({ item }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [userRating, setUserRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const totalStars = 10

  const handleStarClick = (rating: number) => {
    setUserRating(rating)
  }

  const handleStarHover = (rating: number) => {
    setHoverRating(rating)
  }

  const handleStarLeave = () => {
    setHoverRating(0)
  }

  return (
    <div className="flex mb-4">
      <div className="w-[100px] h-[150px] bg-gray-300 rounded-lg mr-6 flex items-center justify-center text-gray-500">
        No Image
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <div className="flex space-x-4 mb-2 text-xs text-gray-500">
          <span><i className="fas fa-star mr-1"></i> {item.avgRating.toFixed(1)}</span>
          <span><i className="far fa-calendar mr-1"></i> {item.releaseDate}</span>
          {item.runtime && <span><i className="far fa-clock mr-1"></i> {item.runtime}</span>}
          {item.mpaaRating && <span><i className="fas fa-film mr-1"></i> {item.mpaaRating}</span>}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.genres.map((genre, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">{genre}</span>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-5 text-gray-400">
            {['bookmark', 'heart', 'list', 'eye', 'film', 'share'].map((icon) => (
              <button 
                key={icon}
                className={`transition-transform duration-200 ease-in-out transform hover:scale-110 text-lg
                  ${icon === 'bookmark' && isBookmarked ? 'text-blue-500' : ''}
                  ${icon === 'heart' && isLiked ? 'text-red-500' : ''}`}
                onClick={() => {
                  if (icon === 'bookmark') setIsBookmarked(!isBookmarked);
                  if (icon === 'heart') setIsLiked(!isLiked);
                }}
              >
                <i className={`${icon === 'bookmark' || icon === 'heart' ? (icon === 'bookmark' && isBookmarked) || (icon === 'heart' && isLiked) ? 'fas' : 'far' : 'fas'} fa-${icon}`}></i>
              </button>
            ))}
          </div>
          <div className="flex">
            {[...Array(totalStars)].map((_, index) => {
              const starNumber = index + 1
              return (
                <button
                  key={index}
                  className={`text-lg ${
                    starNumber <= (hoverRating || userRating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => handleStarClick(starNumber)}
                  onMouseEnter={() => handleStarHover(starNumber)}
                  onMouseLeave={handleStarLeave}
                >
                  <i className="fas fa-star"></i>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentItem