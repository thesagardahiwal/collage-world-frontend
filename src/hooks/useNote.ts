import { useSelector, useDispatch } from "react-redux";

import { addNote, removeNote, updateNote, undoNote, INote } from '../redux/slices/noteSlice'
import { RootState } from "@/redux/store";

function useNote() {
  const dispatch = useDispatch();
  const { notes, recentNote } = useSelector((state: RootState) => state.note);
  const add = (note : INote) => {
    dispatch(addNote(note));
  }

  const del = (note : INote) => {
    dispatch(removeNote(note));
  }

  const update = (note: INote) => {
    dispatch(updateNote(note));
  }

  const undo = () => {
    dispatch(undoNote());
  }

  return {undo, del, update, add, notes, recentNote};


}

export default useNote


