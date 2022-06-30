import axios from 'axios';
import {getDefaultTextNote} from './note.util';

export const getNotes = () => axios.get('http://localhost:3002/notes');
export const patchNote = (id, note) => axios.patch(`http://localhost:3002/notes/${id}`, note);
export const postNotes = () => axios.post('http://localhost:3002/notes', getDefaultTextNote());
