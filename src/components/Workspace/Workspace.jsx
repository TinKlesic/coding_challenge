import React from 'react';
import './workspace.scss';
import TextNote from '../TextNote/TextNote';
import MediaNote from '../MediaNote/MediaNote';

export const Workspace = ({posts, isLocked, isHiddenText, isHiddenMedia}) => {
  return (
    <div className="workspace">
      {posts.map((posts) => {
        return posts.type === 'text' ? (
          <TextNote key={posts.id} {...posts} isLocked={isLocked} posts={posts} isHiddenText={isHiddenText} />
        ) : (
          <MediaNote key={posts.id} {...posts} isLocked={isLocked} isHiddenMedia={isHiddenMedia} />
        );
      })}
    </div>
  );
};

export default Workspace;
