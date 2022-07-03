import { INote } from "../models/INote";
import { ENote } from "./ENote";
import { INoteAction } from "./INoteAction";


export const NoteReducer = ( state: INote[] = dummyData(), action: INoteAction ) => {

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

const dummyData = () => {
    const arr:INote[] = [
        {id: 1, title: "Akşam Yemeği",  detail: "Kurumsal Yemek", date: "03.07.2022" },
        {id: 2, title: "Kurum Toplantısı",  detail: "Sunum yapılacak", date: "04.07.2022" },
        {id: 3, title: "Halı Saha Maçı",  detail: "Akşam 22:00'de", date: "02.07.2022" },
        {id: 4, title: "Ders Çalıştır",  detail: "Matematik Dersi", date: "07.07.2022" },
        {id: 5, title: "Kemal ile Kahve",  detail: "Öğle Arası", date: "08.07.2022" },
        {id: 6, title: "Tatil Planı",  detail: "Yaz tatili için plan", date: "11.07.2022" },
    ]
    return arr
}