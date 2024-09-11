import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IResource extends Document {
    _id: string;
    title: string;
    subject: string;
    examType: string;
    resourceType: string;
    content: string;
};

interface initialStateType {
    resource: IResource[],

}

const initialState : initialStateType = {
    resource : [],
}

const resourceSlice = createSlice({
    name: 'resource',
    initialState,
    reducers: {
        addResource(state, action: PayloadAction<any>) {
            state.resource = state.resource.filter((el) => el._id !== action.payload._id);
            state.resource.push(action.payload);
        },

        removeResource(state, action: PayloadAction<any>) {
            state.resource = state.resource.filter((el) => el._id !== action.payload._id);
        },


    }
});

export const { addResource, removeResource } = resourceSlice.actions;
export default resourceSlice.reducer;