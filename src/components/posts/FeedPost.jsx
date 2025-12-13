import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

/**
 * Renders a single post in the campus feed.
 * @param {object} props
 * @param {string} props.profileImage - URL for the user/group avatar.
 * @param {string} props.name - The name of the poster (e.g., CS Society).
 * @param {string} props.subTitle - The secondary title (e.g., University of Bristol - Society).
 * @param {string} props.timeAgo - The time since the post was made.
 * @param {string} props.type - The type of post (e.g., 'Event', 'Question', 'Campus').
 * @param {string} props.content - The main body of the post.
 * @param {number} props.likes - Number of likes/reactions.
 * @param {number} props.comments - Number of comments/replies.
 */
const FeedPost = ({
  profileImage,
  name,
  subTitle,
  timeAgo,
  type,
  content,
  likes,
  comments,
}) => {
  // Utility function to map post type to specific styles
  const getTypeStyles = (postType) => {
    switch (postType) {
      case 'Event':
        return 'bg-indigo-50 text-indigo-700';
      case 'Question':
        return 'bg-violet-50 text-violet-700';
      case 'Campus':
        return 'bg-emerald-50 text-emerald-700';
      case 'Project':
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const typeClasses = getTypeStyles(type);

  return (
    <div className="p-4 bg-white rounded-xl">
      {/* Header and Type Tag */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-start">
          <img
            className="h-10 w-10 rounded-full object-cover mr-3"
            src={profileImage}
            alt={`${name} avatar`}
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-gray-500">{subTitle}</p>
            <p className="text-xs text-gray-400">{timeAgo}</p>
          </div>
        </div>

        {/* Post Type Tag */}
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${typeClasses}`}
        >
          {type}
        </span>
      </div>

      {/* Post Content */}
      <p className="text-sm text-gray-700 mb-4">{content}</p>

      {/* Actions (Likes, Comments, Share) */}
      <div className="flex items-center space-x-5 text-gray-500 text-sm font-medium">
        {/* Likes/Heart */}
        <div className="flex items-center cursor-pointer hover:text-red-500 transition-colors">
          <Heart className="h-4 w-4 mr-1" />
          <span>{likes}</span>
        </div>
        {/* Comments/Message */}
        <div className="flex items-center cursor-pointer hover:text-blue-500 transition-colors">
          <MessageCircle className="h-4 w-4 mr-1" />
          <span>{comments}</span>
        </div>
        {/* Share */}
        <div className="flex items-center cursor-pointer hover:text-gray-900 transition-colors">
          <Share2 className="h-4 w-4 mr-1" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;