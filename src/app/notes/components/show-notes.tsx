'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

interface notetype {
    _id?: string;
    imageUrl?: string;
    noteText?: string;
}

const NotesList = () => {
  const [notes, setNotes] = useState<notetype[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('/api/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id}>
          <img src={note.imageUrl} alt="Note Image" />
          <p>{note.noteText}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesList;