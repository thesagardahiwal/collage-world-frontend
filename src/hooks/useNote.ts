import { useSelector, useDispatch } from "react-redux";

import { addNote, removeNote, updateNote, undoNote, INote } from '../redux/slices/noteSlice'
import { RootState } from "@/redux/store";

function useNote() {
  const dispatch = useDispatch();
  const { notes, recentNote } = useSelector((state: RootState) => state.note);
  const add = (note : INote) => {
    del(note);
    dispatch(addNote(note));
  }

  const del = (note : INote) => {
    dispatch(removeNote(note));
  }

  const update = (note: INote) => {
    del(note);
    dispatch(updateNote(note));
  }

  const undo = () => {
    dispatch(undoNote());
  }

  const getNote = (id: string) => {
    const deletedNote = notes.find((el) => el._id === id);
    return deletedNote
}

  return {undo, del, getNote, update, add, notes, recentNote};


}

export default useNote


