'use client';
// Import necessary libraries
import { useState } from 'react';

// NotesPage component
const NotesPage = () => {
  // State for managing notes
  const [notes, setNotes] = useState([]);
  // State for managing new note title
  const [newNoteTitle, setNewNoteTitle] = useState('');
  // State for managing new note content
  const [newNoteContent, setNewNoteContent] = useState('');

  // Function to add a new note
  const addNote = () => {
    if (newNoteTitle.trim() !== '' && newNoteContent.trim() !== '') {
      setNotes([...notes, { title: newNoteTitle, content: newNoteContent }]);
      setNewNoteTitle('');
      setNewNoteContent('');
    }
  };

  // Function to remove a note
  const removeNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  // HTML code for this page
  return (
    <div className="container mx-auto my-8 p-4 max-w-screen-md">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>

      {/* Input for note title */}
      <input
        type="text"
        placeholder="Add a title"
        value={newNoteTitle}
        onChange={(e) => setNewNoteTitle(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full mb-2 focus:outline-none focus:border-blue-500"
      />

      {/* Multiline input for note content */}
      <textarea
        placeholder="Add a new note"
        value={newNoteContent}
        onChange={(e) => setNewNoteContent(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full resize-none focus:outline-none focus:border-blue-500"
        rows="4"
      />

      {/* Button to add a new note */}
      <button onClick={addNote} className="bg-main text-white px-4 py-2.5 rounded mt-2 mb-4">
        Add Note
      </button>

      {/* Displaying notes */}
      <div>
        {notes.map((note, index) => (
          <div key={index} className="mb-4 p-4 border rounded-md">
            <p className="text-lg font-bold">{note.title}</p>
            <p className="text-lg break-all">{note.content}</p>
            <button onClick={() => removeNote(index)} className="text-red-500 mt-2">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
