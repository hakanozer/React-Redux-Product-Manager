import { INote } from "../models/INote";
import { ENote } from "./ENote";
import { INoteAction } from "./INoteAction";


export const NoteReducer = ( state: INote[] = [], action: INoteAction ) => {

    switch (action.type) {

        case ENote.NOTE_ADD:
        return [...state, action.payload];

        case ENote.NOTE_DELETE:
        const newArr = [...state]
        const index = newArr.findIndex( item => item.id == action.payload.id )
        newArr.splice(index, 1)
        return newArr;

        case ENote.NOTE_LIST:
        return state;
    
        default:
        return state;
    }

}