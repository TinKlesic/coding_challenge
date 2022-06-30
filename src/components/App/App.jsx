import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Workspace from '../Workspace/Workspace';
import './App.scss';
import {getNotes} from '../../utils/DataFetching';
import {getDefaultTextNote} from '../../utils/note.util';

const App = (notes = [getDefaultTextNote()]) => {
  const [isLocked, setIsLocked] = useState(false);
  const [isHiddenText, setIsHiddenText] = useState(false);
  const [isHiddenMedia, setIsHiddenMedia] = useState(false);
  const [posts, setPosts] = useState([{id: 1}]);

  useEffect(() => {
    getNotes().then((res) => {
      if (res.data.length) {
        setPosts(() => [...res.data]);
      }
    });
  }, []);

  return (
    <div className="app">
      <Header
        newtNotes={(notes) => {
          setPosts(notes);
        }}
        onLockIconClick={() => setIsLocked(!isLocked)}
        lockIconActive={isLocked}
        textIconOnClick={() => setIsHiddenText(!isHiddenText)}
        textIconActive={isHiddenText}
        mediaIconOnClick={() => setIsHiddenMedia(!isHiddenMedia)}
        medaIconActive={isHiddenMedia}
      />
      <main className="app__content">
        <Workspace
          posts={posts}
          key={posts.id}
          {...posts}
          setPosts={setPosts}
          isLocked={isLocked}
          isHiddenText={isHiddenText}
          isHiddenMedia={isHiddenMedia}
        />
      </main>
    </div>
  );
};
export default App;
