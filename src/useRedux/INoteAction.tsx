import { INote } from "../models/INote";
import { ENote } from "./ENote";

export interface INoteAction {
    type: ENote,
    payload: INote 
}