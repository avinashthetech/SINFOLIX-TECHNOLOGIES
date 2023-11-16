// App.js
import React, { useState } from 'react';
import Note from './Note';
import ColorPicker from './ColorPicker'; // Import the ColorPicker component

import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now(), content: 'Type your note here...', color: color },
    ]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const makeDraggable = (id, initialX, initialY) => {
    return (e) => {
      const newX = e.clientX - initialX;
      const newY = e.clientY - initialY;

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, x: newX, y: newY } : note
        )
      );
    };
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Sticky Notes App</h1>
      </div>
      <ColorPicker onSelectColor={(color) => addNote(color)} /> {/* Add ColorPicker component */}
      <div className="notes-container">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            content={note.content}
            color={note.color} // Pass color as a prop
            onDelete={() => deleteNote(note.id)}
            onDrag={(e) => makeDraggable(note.id, e.clientX, e.clientY)}
          />
        ))}
      </div>
      <div className="add-note" onClick={() => addNote('yellow')}> {/* Default color or specify a default color */}
        +
      </div>
    </div>
  );
};

export default App;
