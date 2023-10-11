import { Note } from "../../shared/interfaces";

export class LocalStorageService {
  static key = "notes";

  static getNotes() {
    return JSON.parse(localStorage.getItem(this.key) || "[]") as Note[];
  }

  static getNoteIds() {
    const notes = this.getNotes();

    return notes.map((note) => note.id);
  }

  static getNoteById(id: string) {
    const notes = this.getNotes();

    return notes.find((note) => note.id === id);
  }

  static addNote(note: Note) {
    const notes = this.getNotes();
    notes.push(note);

    localStorage.setItem(this.key, JSON.stringify(notes));
  }

  static updateNote(note: Note) {
    const notes = this.getNotes();

    const updatedNotes = notes.map((item) => {
      if (item.id === note.id) {
        return note;
      }

      return item;
    });

    localStorage.setItem(this.key, JSON.stringify(updatedNotes));
  }

  static deleteNote(id: string) {
    const notes = this.getNotes();
    const updatedNotes = notes.filter((note) => note.id !== id);

    localStorage.setItem(this.key, JSON.stringify(updatedNotes));
  }

  static setNotes(notes: Note[]) {
    localStorage.setItem(this.key, JSON.stringify(notes));
  }

  static deleteNotes() {
    localStorage.removeItem(this.key);
  }
}
