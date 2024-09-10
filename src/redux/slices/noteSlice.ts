import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INote extends Document {
    _id: string;
    title: string;
    content: string;
    attachments?: {
      imageUrls?: string[];
      documentUrls?: string[];
    };
}

interface initialStateOfNote {
    notes: INote[],
    recentNote: INote[],
    deletedNote: INote | null,
}

const initialState : initialStateOfNote= {
    notes: [],
    recentNote: [],
    deletedNote: null,
};

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote(state, action : PayloadAction<any>) {
            state.notes.push(action.payload);
            state.recentNote.push(action.payload);
        },

        removeNote(state, action: PayloadAction<any>) {
            const deletedNote = state.notes.find((el) => el._id === action.payload._id);
            if (deletedNote) {
                state.deletedNote = deletedNote;
            }
            state.notes = state.notes.filter((el) => el._id !== action.payload._id);
        },

        updateNote(state, action: PayloadAction<any>) {
            state.notes = state.notes.filter((el) => el._id !== action.payload._id);
            state.recentNote = state.recentNote.filter((el) => el._id !== action.payload._id);
            state.notes.push(action.payload);
            state.recentNote.push(action.payload);
        },
        undoNote(state) {
            if (state.deletedNote) {
                state.notes.push(state.deletedNote);
            }
        }
    }
});

export const { addNote, removeNote, updateNote, undoNote } = noteSlice.actions;

export default noteSlice.reducer;