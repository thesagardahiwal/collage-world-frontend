'use client'
import axios from 'axios';

const DeleteNote = ({ noteId } : {noteId : string}) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/notes/${noteId}`);
      alert('Note deleted!');
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return <button onClick={handleDelete}>Delete Note</button>;
};

export default DeleteNote;