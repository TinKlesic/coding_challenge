import React, {useRef, useState} from 'react';
import Draggable from 'react-draggable';
import './mediaNote.scss';
import {patchNote} from '../../utils/DataFetching';

const MediaNote = ({id, content, size, x, y, isLocked, isHiddenMedia}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({x, y});

  const handleOnStop = (_, {x, y}) => {
    setPosition({x, y});
    patchNote(id, {x, y});
  };

  return (
    <Draggable
      onStop={handleOnStop}
      nodeRef={ref}
      axis="both"
      defaultClassName="note media-note"
      position={position}
      scale={1}
      disabled={isLocked}
    >
      <div
        ref={ref}
        src={'.' + content}
        style={{
          width: size,
          height: size,
          backgroundImage: 'url(' + content + ')',
          backgroundSize: 'cover',
          border: isLocked ? '2px groove red' : '',
          display: isHiddenMedia ? 'none' : '',
        }}
      ></div>
    </Draggable>
  );
};

export default MediaNote;
