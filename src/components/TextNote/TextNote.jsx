import React, {useRef, useState} from 'react';
import './textNote.scss';
import Draggable from 'react-draggable';
import {patchNote} from '../../utils/DataFetching';
import {DEFAULT_COLOR} from '../../utils/note.util';

const TextNote = ({id, backgroundColor, content, color, size, x, y, isLocked, setPosts, isHiddenText}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({x, y});
  const [value, setValue] = useState(content);

  const handleOnStop = (_, {x, y}) => {
    setPosition({x, y});
    patchNote(id, {x, y});
  };

  const handleDelete = () => {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  };

  const handleChangeContent = (event) => {
    const {value} = event.currentTarget;
    setValue(value);
    patchNote(id, {content: value});
  };

  return (
    <Draggable
      onStop={handleOnStop}
      nodeRef={ref}
      axis="both"
      defaultClassName="note text-note"
      position={position}
      scale={1}
      disabled={isLocked}
    >
      <div
        ref={ref}
        style={{
          backgroundColor,
          color: color ?? DEFAULT_COLOR,
          width: size,
          height: size,
          border: isLocked ? '2px groove red' : '',
          display: isHiddenText ? 'none' : '',
        }}
      >
        <textarea value={value} onChange={handleChangeContent} />
      </div>
    </Draggable>
  );
};

export default TextNote;
