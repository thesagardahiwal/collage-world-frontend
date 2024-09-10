'use client'

import { useState } from 'react';
import axios from 'axios';

const UpdateNote = ({ noteId } : {noteId : string}) => {
  const [noteText, setNoteText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`/api/notes/${noteId}`, { noteText, imageUrl });
      alert('Note updated!');
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <textarea
        placeholder="New Note text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        required
      ></textarea>
      <button type="submit">Update Note</button>
    </form>
  );
};

export default UpdateNote;