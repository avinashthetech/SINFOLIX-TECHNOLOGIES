// Note.js
import React from 'react';

const Note = ({ id, content, color, onDelete, onDrag }) => {
  return (
    <div
      className="note"
      style={{ transform: `translate(${0}px, ${0}px)`, backgroundColor: color }}
      draggable
      onMouseDown={onDrag}
    >
      <div className="note-content" contentEditable>
        {content}
      </div>
      <div className="delete-note" onClick={onDelete}>
        X
      </div>
    </div>
  );
};

export default Note;
