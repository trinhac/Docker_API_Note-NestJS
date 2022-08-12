import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';


@Injectable()
export class NoteService {
    notes =[];
    fs = firestore().collection('notes');

    async addNote(note){
        let timestamp = new Date().getTime();
        let date = new Date(timestamp);
        let ran_user_id = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        let newNote ={
            ...note,
            id: timestamp,
            createDate: date,
            user_id: ran_user_id,
        }
        let res = await this.fs.doc(timestamp.toString()).set(newNote);
        return res;
    }

    async getAll(){
        let docs = await this.fs.get()
        let res = docs.docs.map((data) => data.data())
        return res;
    }

    async updateNote(note, id) {
        // let index = this.notes.findIndex((x) => x.id === id);
        // this.notes[index] = note;
        let result = await this.fs.doc(id.toString()).update({
            ...note,
    //        id: firestore.FieldValue.delete(),
        });
        return result;
    }

    async deleteNote(id) {
        let index = this.notes.findIndex((x) => x.id == id);
        let res = await this.fs.doc(id.toString()).delete()
        // console.log(index, user_id)
        if (index >= 0) {
            this.notes.splice(index, 1);
        }
    }

    async getById(id){
        let result = (await this.fs.doc(id).get()).data();
        return result
    }

    async getByUserId(user_id){
        let result = (await this.fs.doc(user_id).get()).data();
        return result
    }
}

