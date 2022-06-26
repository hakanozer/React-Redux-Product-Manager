import { combineReducers, createStore } from "redux";
import { NoteReducer } from "./NoteReducer";

const combine = combineReducers({
    NoteReducer
})

export type StateType = ReturnType<typeof combine >

export const store = createStore(combine)